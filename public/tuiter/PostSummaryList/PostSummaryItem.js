const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item">
            <div class="row wd-bottom-padding">
                <div class="col-10">
                    <span class="wd-regular-writing">${post.topic}</span>
                    <br>
                    <div>
                        <span class="wd-bold card-text">${post.userName}</span>
                        <img class="wd-checkmark wd-rounded-corners-all-around" src="../Images/check.png">
                        <span class="wd-regular-writing"> - ${post.time}</span>
                    </div>
                    <span class="card-text wd-bold">${post.title}</span>
                </div>
                <div class="col-2">
                    <img class="wd-float-right wd-fixed-tuit-img wd-barely-rounded wd-top-padding"
                         src=${post.image}>
                </div>
            </div>
        </li>
   `);
}
export default PostSummaryItem;