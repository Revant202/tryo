import NavBar from '@/components/NavBar'
import React from 'react'
import {  useSelector } from 'react-redux'

import JobsCard from '@/components/JobsCard'





export default function DisplayJobs() {
    const JobData = useSelector(state => state?.Job?.JobData) || [];
    return (

        <>

            <NavBar />
            <div className='w-full  py-20 flex items-center md:px-8 px-2  justify-center flex-col'>
            <div className='w-full h-20 bg-gray-50 text-cyan-600 font-bold flex items-center justify-center flex-col'>
                                <h1 className='text-3xl'>Avaliable Jobs</h1>
                            </div>
                <div className='w-full h-full py-4 flex  overflow-y-auto  items-center justify-center flex-wrap'>
                    {/* map */}
                    {
                        Array.isArray(JobData) && JobData.length > 0 ? JobData?.map((job) => {
                            return (
                                <JobsCard job={job} key={job?._id} />
                            )
                        }) : <p>No jobs found</p>
                    }

                    {/* map */}
                </div>
            </div>
        </>

    )
}
