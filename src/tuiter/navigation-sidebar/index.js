import React from "react";
const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
        return (
        <div className="list-group">
            <a className="list-group-item" href="/#">
                <i className="fab fa-twitter"></i>
             </a>
             <a className={`list-group-item ${active === 'home'?'active':''}`} href="/#">
                <div>
                    <i className="fas fa-home"></i>
                    <span className="wd-small-shift-right">Home</span>
                </div>
             </a>
             <a className={`list-group-item ${active === 'explore'?'active':''}`} href="/#">
                <div>
                    <i className="fas fa-hashtag"></i>
                    <span className="wd-small-shift-right">Explore</span>
                </div>
             </a>
             <a className={`list-group-item ${active === 'notifications'?'active':''}`} href="/#">
                <div>
                    <i className="fas fa-bell"></i>
                    <span className="wd-small-shift-right">Notifications</span>
                </div>
             </a>
             <a className={`list-group-item ${active === 'messages'?'active':''}`} href="/#">
                <div>
                    <i className="fas fa-envelope"></i>
                    <span className="wd-small-shift-right">Messages</span>
                </div>
             </a>
             <a className={`list-group-item ${active === 'bookmarks'?'active':''}`} href="/#">
                <div>
                    <i className="fas fa-bookmark"></i>
                    <span className="wd-small-shift-right">Bookmarks</span>
                </div>
             </a>
             <a className={`list-group-item ${active === 'lists'?'active':''}`} href="/#">
                <div>
                    <i className="fas fa-list"></i>
                    <span className="wd-small-shift-right">Lists</span>
                </div>
             </a>
             <a className={`list-group-item ${active === 'profile'?'active':''}`} href="/#">
                <div>
                    <i className="fas fa-user"></i>
                    <span className="wd-small-shift-right">Profile</span>
                </div>
             </a>
             <a className={`list-group-item ${active === 'more'?'active':''}`} href="/#">
                <div>
                    <i className="fas fa-ellipsis-h"></i>
                    <span className="wd-small-shift-right">More</span>
                </div>
             </a>
        </div>
        );
    };
export default NavigationSidebar;