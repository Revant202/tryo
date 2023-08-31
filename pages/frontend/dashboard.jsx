import AppliedJobDataTable from '@/components/AppliedJobDataTable'
import NavBar from '@/components/NavBar'
import SavedJobDataTable from '@/components/SavedJobDataTable'
import { get_my_applied_job } from '@/Services/job'
import { get_book_mark_job } from '@/Services/job/bookmark'
import { setAppliedJob, setBookMark } from '@/Utils/AppliedJobSlice'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { BsFillBookmarkStarFill } from 'react-icons/bs'
import { GiSuitcase } from 'react-icons/gi'
import { InfinitySpin } from 'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'




export default function Dashboard() {
  const [showTable, setShowTable] = useState('appliedJobs')
  const [loading , setLoading] = useState(true)
  const router = useRouter();
  const dispatch = useDispatch();

  const activeUser = useSelector(state => state?.User?.userData)
  const id = activeUser?._id

  useEffect(() => {
    if (!id || !Cookies.get('token')) {
      router.push('/auth/login')
    }
  }, [activeUser, id, Cookies])

  


  useEffect(() => {
    fetchAppliedJobs()
  }, [])


  const fetchAppliedJobs = async () => {

    const res = await get_my_applied_job(id)
    const get_bookmarks =   await get_book_mark_job(id)
    if (res.success || get_bookmarks.success) {
      dispatch(setAppliedJob(res?.data))
      dispatch(setBookMark(get_bookmarks?.data))
      setLoading(false)
    }
    else {
      router.push('/auth/login')
    }
  }


  return (
    <>

      {
        loading ? (

          <div className='bg-gray w-full h-screen flex items-center flex-col justify-center'>
            <InfinitySpin width='200' color="#4f46e5" />
            <p className='text-xs uppercase'>Loading Resources Hold Tight...</p>
          </div>
        ) : (
          <>
            <NavBar />
            <div className='w-full h-screen pt-20 flex  justify-start flex-col'>
              <div className='flex flex-wrap w-full  justify-center mt-5'>
               
                <div onClick={() => setShowTable('appliedJobs')} className={` cursor-pointer border-b-cyan-600 shadow-2xl shadow-cyan-500/20 border-b-${showTable === 'savedJobs' ?0:4} px-2 my-2 w-60 h-20 rounded mx-2  bg-white flex items-center justify-center`}>
                  <GiSuitcase className='bg-gray-50 text-cyan-600 rounded-full w-10 h-10' />
                  <div className='flex  flex-col mx-2 items-start justify-start px-2 '>
                    <p className='text-xl font-semibold'>Total Applied</p>
                    {/* <p className='text-lg font-semibold'>50+</p> */}
                  </div>
                </div>

                <div onClick={() => setShowTable('savedJobs')} className={`cursor-pointer border-b-cyan-600 shadow-2xl shadow-cyan-500/20 border-b-${showTable === 'savedJobs' ?4:0} px-2 my-2 w-60 h-20 rounded mx-2  bg-white flex items-center justify-center`}>
                  <BsFillBookmarkStarFill className='bg-gray-50 text-cyan-600 rounded-full w-10 h-10' />
                  <div className='flex  flex-col items-start mx-2 justify-start px-2 '>
                    <p className='text-xl font-semibold'>Saved Jobs</p>
                    {/* <p className='text-lg font-semibold'>50+</p> */}
                  </div>
                </div>

                {/* applied Jobs */}
              </div>
              <div className='w-full h-full px-4 '>
                {
                  showTable === 'savedJobs' ? <SavedJobDataTable /> : <AppliedJobDataTable />
                }
              </div>
            </div>
          </>
        )
      }

    </>
  )
}
