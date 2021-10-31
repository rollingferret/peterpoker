import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllGametablesThunk } from "../../store/gametables";
import css from './gametableall.module.css'
import EditGameTableModal from '../EditGameTableForm'
import DeleteGameTableModal from '../DeleteGameTable'
import AddGameButton from '../addgametablebutton'


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
        {/* <EditGameTableModal gametableId={table.id}/>
        <DeleteGameTableModal gametableId={table.id}/> */}

        <Link to={`/gametables/${table.id}`} className={css.gamewindow}>
          <div>{table.tableName}</div>
          {/* <div>{table.players===null?table.players:'No Current Players'}</div> */}
          {/* <div>{table.isActive}</div> */}
          <div className={css.words}>{table.updated_at}</div>
        </Link>

        <div className={css.editdeletebuttons}>
              {currentUser && currentUser.id === table.tableCreator && (
                <>
                  <EditGameTableModal gametableId={table.id} />
                  <DeleteGameTableModal gametableId={table.id} />
                </>
              )}
      </div>
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
  <div className={css.gamecomponentsoutter}>
    {tablelist}


    {currentUser && (


    <div className={css.tablecard} id={css.addtablecard1}>
        {/* <EditGameTableModal gametableId={table.id}/>
        <DeleteGameTableModal gametableId={table.id}/> */}

        <div className={css.gamewindow} id={css.addtablecard2}>
          <div className={css.addgamebutton}><AddGameButton className={css.actualbutton}/></div>
          {/* <div>{table.players===null?table.players:'No Current Players'}</div> */}
          {/* <div>{table.isActive}</div> */}
          <div>Create a new game table!</div>
        </div>
    </div>
    )}
    </div>
  </div>
  </div>
  </>

  )

        
}
}

export default GetAllGameTables;