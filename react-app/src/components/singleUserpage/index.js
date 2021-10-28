import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import { getSingleUserThunk } from '../../store/users';
import GetAllCommentsforSingleUser from '../../components/commentDisplay'
import FollowButton from '../Follow'


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
        <div>
        <div>{singleUser.username}</div>
        <div>{singleUser.email}</div>
        <div>{singleUser.bio}</div>
        <div>{singleUser.avatar_url}</div>
        <div>Simoleans: {singleUser.currentSimoleans}</div>
        <div>Follower: {singleUser.followers.length}</div> 
        <div>Following: {singleUser.following.length}</div>
    <li>
        <GetAllCommentsforSingleUser userId={singleUserid} />
    </li>
    <li>
        <FollowButton  userId={singleUserid}/>
    </li>
        </div>

        </>
    );
    }
};

export default SingleUserPage;