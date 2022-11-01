import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Details from "./Details";
import Sidebar from "./Sidebar";
import "../../Mobile.css";
import "./index.css";
import SecondaryNav from "../../Components/SecondaryNav/SecondaryNav";
import SideBar from "../../Components/SideBar";
function IndividualJobs() {
  const { id } = useParams();
  console.log(id);
  const [workRef, setWorkRef] = useState();
  const [state, setState] = useState(true);
  function renderWorkSection() {
    setState(!state);
    state
      ? (workRef.current.style.display = "block")
      : (workRef.current.style.display = "none");
  }
  return (
    <div>
      <NavBar onClick={renderWorkSection} />
      <div className="headflex mt-2 card jobsGrid">
        <Sidebar />
        <Details />
      </div>
      <SideBar setWorkRef={setWorkRef} />
      <SecondaryNav />
    </div>
  );
}

export default IndividualJobs;
