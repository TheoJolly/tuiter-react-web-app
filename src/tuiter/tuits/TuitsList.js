import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./TuitItem";
import TuitStats from "./TuitStats";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {
  const {tuits, loading} = useSelector(state => state.tuitsData)
  const dispatch = useDispatch();
  // eslint-disable-next-line
  useEffect(() => {dispatch(findTuitsThunk())}, [])
  return(
    <ul className="list-group">
      {
      loading &&
        <li className="list-group-item">
          Loading...
        </li>
      }
      {
      tuits.map((post, idx) => {
        return(
          <li className="list-group-item" key={idx}>
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