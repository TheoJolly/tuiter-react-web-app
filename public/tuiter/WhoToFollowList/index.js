import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
            <li class="list-group-item wd-bold">Who to follow</li>
            ${who.map(x => WhoToFollowListItem(x)).join('')}
        </ul>
   `);
}
export default WhoToFollowList;