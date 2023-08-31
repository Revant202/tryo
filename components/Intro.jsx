import React, { useEffect, useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import Image from "next/image";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import JobsCard from "./JobsCard";

export default function Intro() {
  const [search, setSearch] = useState("");
  const jobData = useSelector((state) => state.Job.JobData);
  const [filterJobs, setFilteredJobs] = useState([]);
  const [doneSearch, setDoneSearch] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredJobs = jobData?.filter((job) => {
      let x = job?.job_category;
      return x?.toUpperCase() === search?.toUpperCase().trim();
    });
    setFilteredJobs(filteredJobs);
    setDoneSearch(true);
  };

  return (
    <>
      <div className=' bg-cover flex bg-[url("https://blogs.worldbank.org/sites/default/files/styles/hero/public/2023-03/lebanon_youth_photo_3.png.webp?itok=OzBNkfVE")] w-screen h-screen flex-col  lg:justify-start pt-24 '>
        {/* <div className="w-3/6 my-2 h-full bg-gray-200 hidden items-center justify-center flex-col p-20 lg:flex">
          <Image
            width={600}
            height={700}
            src="/intro.png"
            alt="no-image-found"
          />
        </div> */}
        <div className="lg:w-2/4 w-full sm:p-2  flex items-center justify-center px-4 md:items-start md:justify-start md:pt-20 md:pl-20 flex-col ">
          <h1 className="md:text-6xl text-2xl sm:text-2xl font-extrabold mb-4 text-white ">
            Finding the <span className="text-cyan-600">Right Job</span> made
            easy{" "} 
          </h1>
          <p className="md:text-lg sm:text-sm text-xs mb-20 text-white">
            Explore opportunities from across the globe to learn, showcase
            skills, & get hired by your dream company!
          </p>
        </div>
        <div className="lg:w-2/4 h-full flex-col p-10 m-10 lg:flex">
          <div className="bg-white flex-col mb-6 w-full md:pl-2 rounded  flex sm:flex-row items-center justify-between">
            <BiSearchAlt className="text-2xl text-cyan-600 mx-2 hidden sm:flex" />
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search Jobs with Job categories like marketing ..."
              className="xs:w-full w-full  h-full px-2 rounded-lg text-base py-3 outline-none"
            />
            <button
              onClick={handleSearch}
              className="px-7 py-2 h-full sm:my-0 border border-cyan-600 rounded text-white bg-cyan-600 transition-all duration-700 hover:bg-transparent font-semibold text-base hover:text-cyan-600"
            >
              Search
            </button>
          </div>
          <div className=" w-full px-2 py-2 flex items-center justify-start flex-wrap">
            <div className="flex items-center justify-center">
              <BsFillBookmarkFill className="text-cyan-600 text-xl mx-2" />
              <h1 className="font-semibold text-lg text-white">Suggest Tag : </h1>
            </div>
            <div className="flex   items-center justify-center px-4 flex-wrap">
              <p className="px-2  text-white">Software</p>
              <p className="px-2  text-white">Marketing</p>
              <p className="px-2  text-white">UI/UX Design</p>
            </div>
          </div>
        </div>
      </div>
      {doneSearch && (
        <div className="w-full flex flex-wrap items-center justify-center py-2 px-2">
          {Array.isArray(filterJobs) && filterJobs.length > 0 ? (
            filterJobs?.map((job) => {
              return <JobsCard job={job} key={job?._id} />;
            })
          ) : (
            <p className="text-sm text-center font-semibold  text-red-500">
              Sorry No such Categories Job Available Right Now
            </p>
          )}
        </div>
      )}
    </>
  );
}
