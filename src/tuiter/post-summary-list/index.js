import React from "react";
import postsArray from './posts.json';
import PostSummaryListItem from "./post-summary-list-item";

const PostSummaryList = () => {
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