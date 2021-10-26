import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllGametablesThunk } from "../../store/gametables";


function GetAllGameTables() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getAllGametablesThunk());
  }, [dispatch]);

  const gameTableList = useSelector((state) => {
    return state.gametables;
  });

  console.log(gameTableList, '888888888888888888888888888888888')


      return (

        <div>TEST</div>
      )

        
}

export default GetAllGameTables;