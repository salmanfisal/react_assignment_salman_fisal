import React from "react";
import "../styles/details.css";
import { useParams,Link } from "react-router-dom";
import { GlobalContext } from "../contextApi/customContext.js";
import Nav from "./nav.js";
import { toast, ToastContainer } from 'react-toastify';
  import "react-toastify/dist/ReactToastify.css";
function Details() {
  let { id } = useParams();
  let { query } = GlobalContext();
  // let selected = query.find((e) => e.id.toString() === id);
  // console.log(query)
  function clickHandler(e){
    e.preventDefault()
    toast.success("successfully submited the data")
    console.log("hello")
  }
  return (
    <>
      <Nav />
      <Link className ="goback" to="/"><span> « </span>users</Link>
      <div className="details">
      
        <form onSubmit={clickHandler}>
        <h1>Item Details</h1>
          <label>Item TITLE</label>
          <input type="text" placeholder="" require/>
          <label>Link</label>
          <input type="text" placeholder="" require/>
          <label>ICON URL</label>
          <input type="text" placeholder="" />
          <label>TAG NAME</label>
          <input type="options" placeholder="" />
          <label>CATEGORY</label>
          <input type="text" placeholder="" />
          <label>DESCRIPTION</label>
          <textarea placeholder="" />
          <button type="submit" >Create</button>
        </form>
        <div className="imgcontainer">
      <img src="https://s3-alpha-sig.figma.com/img/4451/ed3a/155011c955cbce9bdc9f5a65f80e1282?Expires=1701648000&Signature=EGsqlOt-nzKpfpqjkGrwnYkbZNNFvUR4nB1Cb9jgM3ZuHBTQZwR6idJggsB~YUjwOWrcROtt~B7dbtTP7L1CtEAUC9VTMGqOBg2E5GC6Ndie8P2eV3mJ-LKcE4TXTZh9FDb1pCmn91NYnC53jdz6BkdD0fAu8TFUWMPCNJZS7DgFKO-Wx60CtLukCHSeSu8baj2MO7BgkKuPla~-xqV0Ev6IqH5sar8QvtL40jmA95O7pB03eXOGpCYDXuafr508LrxTJUGeZqUEqzCDpy6jfGn~XfYZ4i4~3YrS45jyvFMPW0RVXZXQDgK0fyYJIMeTxQ~nip3wybIBSy66Rj0lEA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="img"/>
      </div>
      </div>
    </>
  );
}

export default Details;
