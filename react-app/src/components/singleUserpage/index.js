import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { getSingleUserThunk } from '../../store/users';
import GetAllCommentsforSingleUser from '../../components/commentDisplay'
import FollowButton from '../Follow'
import css from './singleuserpage.module.css'
import poro from "../../assets/bouncingporo.gif";



function SingleUserPage() {


    const dispatch = useDispatch();
    const history = useHistory();

    const currentUser = useSelector(state => state.session.user);



    const {pathname} = history.location
    const singleUserid = pathname.split("/")[2]


    // console.log('9999999999999999999999999999999999')
    // console.log(singleGameTableId)
    useEffect(() => {
        dispatch(getSingleUserThunk(singleUserid))
    },[dispatch, singleUserid])

    const singleUser = useSelector(state => {
        return state.users[singleUserid];
    });

    // console.log(singleUser, '888888888888888888888888888')
    // console.log(singleUser.username, '888888888888888888888888888')


    if (!singleUser) {
        return null;
    } else {
    return (
        <>
        <div className={css.singleuseroutter}>
        <div className={css.singleuseruserinfo}>
        <div className={css.useravatar} style={{backgroundImage: `url(${singleUser.avatar_url?singleUser.avatar_url:`${poro}`})`}}></div>
        <div>Username: {singleUser.username}</div>
        <div>Email: {singleUser.email}</div>
        <div>{singleUser.bio?`Bio: ${singleUser.bio}`:null}</div>
        {/* <div>Bio: {singleUser.bio}</div> */}
        {/* <div>Simoleans: {singleUser.currentSimoleans}</div> */}
        <div>Follower: {singleUser.followers.length}</div> 
        <div>Following: {singleUser.following.length}</div>


        {currentUser && currentUser.id !== singleUser.id && (
                <>
                <div  className={css.singleuserfollow}>
                    <FollowButton  userId={singleUserid}/>
                </div>
                </>
        )}
        </div>
        <div className={css.singleusercomments}>
        <GetAllCommentsforSingleUser userId={singleUserid} />
        </div>
        </div>

        </>
    );
    }
};

export default SingleUserPage;