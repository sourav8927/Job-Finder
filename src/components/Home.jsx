import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import Card from "./Card";
import Jobs from "./Jobs";
import LeftSideBar from "./sidebars/LeftSideBar";
import RightSideBar from "./sidebars/RightSideBar";

const Home = () => {
  const [selectedCatagory, setselectedCatagory] = useState(null);
  const [jobs, setjobs] = useState([]);
  const [query, setquery] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [currentPage, setcurrentPage] = useState(1);
  const itemsPerPage = 6;

  const fetchData = async () => {
    let data = await fetch("http://127.0.0.5:3000/api/jobs/");
    let response = await data.json();
    console.log(response);
    setjobs(response);
  };

  useEffect(() => {
    setisLoading(true);
    fetchData();
    setisLoading(false);
  }, []);

  const handleInputChange = (event) => {
    setquery(event.target.value);
  };

  //filet jobs by title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //Radio filtering
  const handleChange = (event) => {
    setselectedCatagory(event.target.value);
  };

  //button based filtering
  const handleClick = (event) => {
    setselectedCatagory(event.target.value);
  };

  //calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };
  //fn for next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setcurrentPage(currentPage + 1);
    }
  };

  //fn for previous page
  const previousPage = () => {
    if (currentPage > 1) {
      setcurrentPage(currentPage - 1);
    }
  };
  //main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    //filtering input items
    if (query) {
      filteredJobs = filteredItems;
    }

    //catagory filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase()===selected.toLowerCase()||
          employmentType.toLowerCase() === selected.toLowerCase() 
      );
      console.log(filteredJobs);
    }
    //slice the data based on current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCatagory, query);
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange} />

      <div className="bg-gradient-to-r from-[#ffffff] to-[#d4dfed] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/*  left side filters */}
        <div className="bg-white p-4 rounded shadow-md">
          <LeftSideBar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* job cards */}
        <div className="col-span-2  p-4 rounded-sm">
          {isLoading ? (
            <p className="font-medium">Loading...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="font-bold text-lg mb-2">{result.length} Jobs</h3>
              <p>No data found</p>
            </>
          )}
          {/* pagination here */}
          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button onClick={previousPage} className="hover:underline">
                Previous
              </button>
              <span>
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        {/* right side  */}
        <div className="bg-white p-4 rounded shadow-md"><RightSideBar/></div>
      </div>
    </div>
  );
};

export default Home;
