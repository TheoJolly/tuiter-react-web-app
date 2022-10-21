import React from "react";
const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: './Images/nasa.png' }
 }
) => {
 return(
 <li className="list-group-item">
    <div className="row">
      <div className="col-2">
        <img className="rounded-circle" height={48} src={who.avatarIcon} alt=''/>
      </div>
      <div className="col-8">
        <div>
            <span className="fw-bold">{who.userName}</span>
            <img className="wd-checkmark wd-rounded-corners-all-around" src="./Images/check.png" alt=''/>
        </div>
        <div>@{who.handle}</div>
      </div>
      <div className="col-2">
        <button className="btn btn-primary rounded-pill float-end">Follow</button>
      </div>
    </div>
   </li>
 );
};
export default WhoToFollowListItem;