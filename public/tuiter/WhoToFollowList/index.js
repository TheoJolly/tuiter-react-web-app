import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
            <li class="list-group-item wd-bold">Who to follow</li>
            ${for (let i=0; i<$(who.length); i++) {
                WhoToFollowListItem($(who[i]))
            }}
        </ul>
   `);
}
export default WhoToFollowList;