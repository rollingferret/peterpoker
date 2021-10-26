import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSingleGametablesThunk } from '../../store/gametables';


function SingleGameTablePage() {


    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector(state => state.session.user);



    const {pathname} = history.location
    const singleGameTableId = pathname.split("/")[2]


    console.log('9999999999999999999999999999999999')

    useEffect(() => {
        dispatch(getSingleGametablesThunk(singleGameTableId))
    },[dispatch])

    const singleTable = useSelector(state => {
        return state.gametables[singleGameTableId];
    });


    // if (!singleTable) {
    //     return null;
    // } else {
    return (
        <>
        <div>test</div>

        </>
    );
    }
// };

export default SingleGameTablePage;