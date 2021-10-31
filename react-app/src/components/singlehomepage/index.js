import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UsersList from '../UserList/UsersList'
import GetAllGameTables from '../GameTableAll'
import css from './singlehomepage.module.css'


function SingleHomePage() {


    // const dispatch = useDispatch();
    // const history = useHistory();

    const currentUser = useSelector(state => state.session.user);



    // console.log(currentUser.id, 'cureeeeeeeeeeeeenutser')
    // const {pathname} = history.location
    // const singleUserid = pathname.split("/")[2]


    // console.log('9999999999999999999999999999999999')
    // console.log(singleGameTableId)
    // useEffect(() => {
    //     dispatch(getSingleUserThunk(singleUserid))
    // },[dispatch, singleUserid])

    // const singleUser = useSelector(state => {
    //     return state.users[singleUserid];
    // });

    // console.log(singleUser, '888888888888888888888888888')
    // console.log(singleUser.username, '888888888888888888888888888')


    // if (!singleUser) {
    //     return <div>test</div>;
    // } else {
    return (
        <>
        <div className={css.outtermostdiv}>
        <div>
            <div><Link to={`/users/${currentUser.id}`} className={css.gamewindow}>Visit your user page!</Link></div>
            
        </div>
        <div className={css.homepagelist}>
            <div className={css.leftinnterlist}><UsersList /></div>
            <div className={css.rightinnterlist}><GetAllGameTables /></div>
        </div>
        </div>
        </>
    );
}
// };

export default SingleHomePage;