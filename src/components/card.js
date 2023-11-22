import "../styles//card.css";
import React, { useState, useEffect, useRef } from "react";
import { NavLink,Link} from "react-router-dom";
import { GlobalContext } from "../contextApi/customContext.js";
import Nav from "./nav.js";

function Card({ inputNav, state }) {
  let [Data, setData] = useState("");
  let { handleSearch, input, inputData } = GlobalContext();
  let [currentPage, setCurrentPage] = useState(1);
  let ref = useRef();
  const totalPages = 20;

  useEffect(() => {
    async function fetching(page) {
      let apiKey: REACT_APP_API_KEY;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer REACT_APP_AUTHORIZATION",
        },
      };
      try {
        let response = await fetch(
          "https://media-content.ccbp.in/website/react-assignment/resources.json"
        );
        let data = await response.json();
        if (data) {
          handleSearch(data.results);
          setData(data);
          console.log(Data)
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetching(currentPage);
  }, [handleSearch, currentPage, input, inputData]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  return (
    <>
      <div className="navBar">
        <Nav inputNav={inputNav} />
      </div>
      <input className="searchAhead" type="text" placeholder="Search"/>
      <div className ="navTabs">
        <NavLink to ="/" className={({isActive})=>isActive ? "navBars ActivenavBars" :"navBars"}>Resources</NavLink>
        <NavLink to ="/requests" className={({isActive})=>isActive ? "navBars ActivenavBars" :"navBars"}>Requests</NavLink>
        <NavLink to="/users" className={({isActive})=>isActive ? "navBars ActivenavBars" :"navBars"}>Users</NavLink>

      </div>
      <div className= "mainCard">
        {Data &&
          Data.map((e) => (
              <div className="card" key={e.id}>
                <div className="imageTag">
                <img src={e.icon_url} alt={e.title} />
                </div>
                <div className ="cardItems">
                <h3>{e.title}</h3>
                <p>{e.category}</p>
                <a href={e.link} alt="link">{e.link} </ a>
                <p>{e.description}</p>
                </div>
              </div>
          ))}
      </div>
    </>
  );
}

export default Card;
