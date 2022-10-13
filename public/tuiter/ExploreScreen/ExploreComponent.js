import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
        <div class="row">
            <div>
                <input class="fas fa-search wd-indent-text wd-input-type-text wd-float-left wd-rounded-corners-all-around wd-input-border wd-width-90 wd-input-height"
                       placeholder="&#xf002; Search Tuiter">
                <a class="wd-float-right" href="../settings.html"><i class="fas fa-cog wd-fg-color-blue fa-2x"></i></a>
            </div>
       </div>
       <ul class="nav mb-2 nav-tabs wd-section-top-padding">
           <li class="nav-item">
               <a class="nav-link active" href="#">For you</a>
           </li>
           <li class="nav-item">
               <a class="nav-link" href="#">Trending</a>
           </li>
           <li class="nav-item">
               <a class="nav-link" href="#">News</a>
           </li>
           <li class="nav-item">
               <a class="nav-link" href="#">Sports</a>
           </li>
           <li class="nav-item">
               <a class="nav-link" href="#">Entertainment</a>
           </li>
       </ul>
       <div>
           <img class="wd-section-top-padding wd-auto-height wd-rel-pos"
                src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1">
           <h1 class="wd-left-padding wd-bold wd-abs-shift-xxl wd-fg-color-white">SpaceX's Starship</h1>
       </div>
       ${PostSummaryList()}
    `);
}
export default ExploreComponent;
