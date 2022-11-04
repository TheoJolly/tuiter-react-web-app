import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./TuitItem";
import TuitStats from "./TuitStats";

const TuitsList = () => {
const tuitsArray = useSelector(state => state.tuits)
 return(
   <ul className="list-group">
     {tuitsArray.map((post, idx) => {
        return(
              <li className="list-group-item">
                <TuitItem key={idx} post={post}/>
                <TuitStats post={post}/>
              </li>
         )
         }
        )
     }
   </ul>
 );
};
export default TuitsList;