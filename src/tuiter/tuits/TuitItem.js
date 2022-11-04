import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";

const TuitItem = (
 {
   post = {
     "topic": "Web Development",
      "userName": "ReactJS",
      "time": "2h",
      "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
      "image": "./Images/react.png",
      "liked": false,
      "replies": 273,
      "retuits": 39,
      "likes": 87,
      "handle": "@ReactJS",
      "tuit": "Lorem Ipsum"
   }
 }
) => {
 const dispatch = useDispatch();
 const deleteTuitHandler = (id) => {
   dispatch(deleteTuit(id));
 }
 return(
   <div className="row">
     <div className="col-2">
        <img width={70} className="float-end rounded-3" src={post.image} alt=''/>
     </div>
     <div className="col-10 position-relative">
        <div className="d-flex flex-nowrap justify-content-around">
            <div className="fw-bolder me-1">{post.userName}</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="blue" className="bi bi-check-circle-fill" viewBox="-3 3 25 25">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
            <div className="me-1 h-25">{post.handle}</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-dot" viewBox="-3 5 25 25">
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
            </svg>
            <div className="w-100 h-25 mb-0">{post.time}</div>
            <svg style={{height: "16px", margin: "0px 0px 0px -300px"}} onClick={() => deleteTuitHandler(post._id)}> xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-auto w-auto bi bi-x-lg " >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
        </div>
        <br></br>
        <div className="t-25">
        {post.tuit}
        </div>
     </div>
   </div>
 );
};
export default TuitItem;