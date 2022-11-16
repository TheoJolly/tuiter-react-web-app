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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
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