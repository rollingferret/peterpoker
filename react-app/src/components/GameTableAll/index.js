import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllGametablesThunk } from "../../store/gametables";
import css from './gametableall.module.css'
import EditGameTableModal from '../EditGameTableForm'


function GetAllGameTables() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getAllGametablesThunk());
  }, [dispatch]);

  const gameTableList = useSelector((state) => {
    return state.gametables;
  });

  // console.log(gameTableList, '888888888888888888888888888888888')

  // Object.values(gameTableList).map((table) => {
  //   console.log(table)
  // })

  const tablelist = Object.values(gameTableList).map((table) => {

    return (
      <div className={css.tablecard} key={table.id}>
        <EditGameTableModal gametableId={table.id}/>
        <Link to={`/gametable/${table.id}`}>
          <h3>{table.tableName}</h3>
          <p>{table.players===null?table.players:'No Current Players'}</p>
          <p>{table.isActive}</p>
          <p>{table.updated_at}</p>
        </Link>
      </div>
    );

  })
  // const object = { a: 1, b: 2, c: 3 };

  // for (const property in object) {
  //   console.log(`${property}: ${object[property]}`);
  // }

  // for (const property in gameTableList) {
  //   console.log(`${property}: ${gameTableList[property].id} ${gameTableList[property].tableName}`);
  // }


  // let test = gameTableList.map((gameTable) => { gameTable.id })

  // console.log(test)

  if (!gameTableList) {
    return null
  } else {

  return (

  <>
  <div className={css.gamelistvertcenter}>
  <div className={css.gamelistoutter}>
  <Link to={`/gametables`} className={css.gamelistwords}>Table List:</Link>
  <div className={css.gamecomponentsoutter}>{tablelist}</div>
  </div>
  </div>
  </>

  )

        
}
}

export default GetAllGameTables;