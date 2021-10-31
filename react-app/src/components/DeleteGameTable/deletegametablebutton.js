import { useDispatch } from "react-redux";
import { delGametableThunk } from "../../store/gametables";
import styles from "./deletegametable.module.css";
// import { useHistory } from "react-router-dom";


function DeleteGameTableButton(props) {
  const dispatch = useDispatch();
  // const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(delGametableThunk(props.gametableId)).then(async () => props.onClose());
    // history.push("/gametables");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.deletecommentbuttoncss}>
        <div className={styles.deletebuttoninnercss}>
          Are you sure you want to delete?
        </div>
        <button type="submit" className={styles.deletebuttonsubmitcss}>
          Delete!
        </button>
      </form>
    </>
  );
}

export default DeleteGameTableButton;
