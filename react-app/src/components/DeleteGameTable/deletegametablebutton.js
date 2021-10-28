import { useDispatch } from "react-redux";
import { delGametableThunk } from "../../store/gametables";
import styles from "./deletegametable.module.css";

function DeleteGameTableButton(props) {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(delGametableThunk(props.gametableId));
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