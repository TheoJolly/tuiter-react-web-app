const NavigationSidebar = () => {
 return(`
   <div class="list-group">
     <a class="list-group-item list-group-item-action href="../../home.html">
       <i class="fab fa-twitter"></i></a>
     <a class="list-group-item list-group-item-action wd-bottom-padding" href="../../home.html">
        <div>
            <i class="fas fa-home wd-float-left wd-small-shift-down"></i>
            <span class="wd-small-shift-right wd-smaller-shift-down wd-small-shift-right">Home</span>
        </div></a>
     <a class="list-group-item list-group-item-action active" href="../../explore.html">
        <div>
            <i class="fas fa-hashtag wd-float-left wd-small-shift-down"></i>
            <span class="wd-small-shift-right wd-smaller-shift-down wd-small-shift-right">Explore</span>
        </div></a>
     <a class="list-group-item list-group-item-action" href="../../notifications.html">
        <div>
            <i class="fas fa-bell wd-float-left wd-small-shift-down"></i>
            <span class="wd-small-shift-right wd-smaller-shift-down wd-small-shift-right">Notifications</span>
        </div></a>
     <a class="list-group-item list-group-item-action" href="../../messages.html">
        <div>
            <i class="fas fa-envelope wd-float-left wd-small-shift-down"></i>
            <span class="wd-small-shift-right wd-smaller-shift-down wd-small-shift-right">Messages</span>
        </div></a>
     <a class="list-group-item list-group-item-action" href="../../bookmarks/index.html">
        <div>
            <i class="fas fa-bookmark wd-float-left wd-small-shift-down"></i>
            <span class="wd-small-shift-right wd-smaller-shift-down wd-small-shift-right">Bookmarks</span>
        </div></a>
     <a class="list-group-item list-group-item-action" href="../../lists.html">
        <div>
            <i class="fas fa-list wd-float-left wd-small-shift-down"></i>
            <span class="wd-small-shift-right wd-smaller-shift-down wd-small-shift-right">Lists</span>
        </div></a>
     <a class="list-group-item list-group-item-action" href="../../profile.html">
        <div>
            <i class="fas fa-user wd-float-left wd-small-shift-down"></i>
            <span class="wd-small-shift-right wd-smaller-shift-down wd-small-shift-right">Profile</span>
        </div></a>
     <a class="list-group-item list-group-item-action" href="../../more.html">
        <div>
            <i class="fas fa-ellipsis-h wd-float-left wd-small-shift-down"></i>
            <span class="wd-small-shift-right wd-smaller-shift-down wd-small-shift-right">More</span>
        </div></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;