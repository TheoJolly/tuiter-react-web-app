import React from "react";
import {useSelector} from "react-redux";
import PostSummaryListItem from "./post-summary-list-item";

const PostSummaryList = () => {
const postsArray = useSelector(state => state.tuits)
 return(
   <ul className="list-group">
     {postsArray.map((post, idx) => {
        return(
            <PostSummaryListItem key={idx} post={post}/>
         )
         }
        )
     }
   </ul>
 );
};
export default PostSummaryList;