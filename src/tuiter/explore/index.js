import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
 return(
   <>
     <div className="row wd-section-top-bottom-padding">
       <div>
           <input className="fas fa-search wd-indent-text wd-input-type-text wd-float-left wd-rounded-corners-all-around wd-input-border wd-width-90 wd-input-height"
                  placeholder="&#xf002; Search Tuiter"/>
           <a className="wd-float-right" href="/#"><i className="fas fa-cog wd-fg-color-blue fa-2x"></i></a>
       </div>
       <div className="col-1">
         <i className="wd-bottom-4 text-primary float-end bi bi-gear-fill fs-2 position-relative"></i>
       </div>
     </div>
     <ul className="nav nav-pills mb-2">
       <li className="nav-item">
         <a className="nav-link active" href="/#">For You</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/#">Trending</a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/#">News</a>
       </li>
       <li className="nav-item">
        <a className="nav-link" href="/#">Sports</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" href="/#">Entertainment</a>
      </li>
     </ul>
     <div className="position-relative mb-2">
       <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1" alt='' className="w-100"/>
       <h1 className="position-absolute wd-nudge-up text-white">SpaceX Starship</h1>
     </div>
     <PostSummaryList/>
   </>
 );
};
export default ExploreComponent;