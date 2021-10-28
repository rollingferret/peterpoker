import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSingleGametablesThunk } from '../../store/gametables';
import { Link } from "react-router-dom";
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


    // console.log(singleTable,'999999999999999999999999')
    // console.log(singleTable.id,'999999999999999999999999')


    if (!singleTable) {
        return null;
    } else {
    return (
        <>
        <div>
        <div>{singleTable.tableName}</div>
        <div>{singleTable.players===null?singleTable.players:'No Current Players'}</div>
        <div>{singleTable.isActive}</div>
        <div>{singleTable.updated_at}</div>

        <div className={css.editdeletebuttons}>
              {currentUser && currentUser.id === singleTable.tableCreator && (
                <>
                  <EditGameTableModal gametableId={singleTable.id} />
                  <DeleteGameTableModal gametableId={singleTable.id} />
                </>
              )}
        </div>
        </div>
        <div><Chatroom roomName={`${singleTable.tableName}${singleTable.id}`}/></div>
        </>
    );
    }
};

export default SingleGameTablePage;