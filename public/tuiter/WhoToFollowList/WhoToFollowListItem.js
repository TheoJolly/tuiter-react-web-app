const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <img class="wd-float-left wd-follow-suggestion-img wd-rounded-corners-all-around wd-top-padding"
                 src=${who.avatarIcon}>
            <div class="wd-float-left wd-left-padding wd-short-lines">
                <div>
                    <span class="wd-bold card-text">${who.userName}</span>
                    <img class="wd-checkmark wd-rounded-corners-all-around" src="../Images/check.png">
                </div>
                <span class="wd-regular-writing">@${who.handle}</span>
            </div>
            <a class="btn btn-primary wd-float-right wd-rounded-corners-all-around" href="#">Follow</a>
        </li>
    `);
}
export default WhoToFollowListItem;