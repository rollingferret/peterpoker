import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSingleGametablesThunk } from '../../store/gametables';
// import { Link } from "react-router-dom";
import EditGameTableModal from '../EditGameTableForm'
import DeleteGameTableModal from '../DeleteGameTable'
import css from './index.module.css'
import Chatroom from '../chatrooms/chatroom'

function SingleGameTablePage() {


    const dispatch = useDispatch();
    const history = useHistory();

    const currentUser = useSelector(state => state.session.user);



    const {pathname} = history.location
    const singleGameTableId = pathname.split("/")[2]


    // console.log('9999999999999999999999999999999999')
    // console.log(singleGameTableId)
    useEffect(() => {
        dispatch(getSingleGametablesThunk(singleGameTableId))
    },[dispatch, singleGameTableId])

    const singleTable = useSelector(state => {
        return state.gametables[singleGameTableId];
    });

    const allTables = useSelector(state => {
      return state.gametables;
  });


    // console.log(singleTable,'999999999999999999999999')
    // console.log(singleTable.id,'999999999999999999999999')

    // console.log(allTables)
    if (Object.keys(allTables).length !== 0 && allTables[singleGameTableId] === undefined) {
      history.push("/gametables");
    }

    if (!singleTable) {
        // return null;
        // history.push("/gametables");
        return null;

    } else {
    return (
        <>
        <div className={css.needanotherwrapperforcenter}><div>
        <div className={css.needanotherdivforcenter}>
        <div className={css.singlepageouttermostdiv}>
        <div className={css.infooutterdiv}>
        <div className={css.singletablewords}>{singleTable.tableName}</div>
        {/* <div className={css.singletablewords}>{singleTable.players===null?singleTable.players:'No Current Players'}</div> */}
        <div className={css.singletablewords}>{singleTable.isActive}</div>
        <div className={css.singletablewords}>{singleTable.updated_at}</div>
        </div>
        <div className={css.editdeletebuttons}>
            <div className={css.buttonsspread}>
              {currentUser && currentUser.id === singleTable.tableCreator && (
                <>
                <div>
                  <EditGameTableModal className={css.editbutton} gametableId={singleTable.id} />
                </div>
                <div>
                  <DeleteGameTableModal className={css.deletebutton} gametableId={singleTable.id} />
                </div>
                </>
              )}
            </div>
        </div>
        </div>
        </div>
        <div><Chatroom roomName={`${singleTable.id}`}/></div>
        </div>
        </div>
        </>
    );
    }
};

export default SingleGameTablePage;