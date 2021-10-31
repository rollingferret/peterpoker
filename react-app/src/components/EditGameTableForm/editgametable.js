import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateGameTableThunk } from "../../store/gametables";
import css from './editgametable.module.css'

function EditGameTableForm({ ...props }) {
  const dispatch = useDispatch();

  const currentTableName = useSelector((state) => state.gametables[props.gametableId]);  
  
  const [tableName, setTableName] = useState(`${currentTableName.tableName}`);

  const [errors, setErrors] = useState([]);

  // const [tableName, setTableName] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    let edited_gametable = {
      id: props.gametableId,
      tableName: tableName,
    };

    // return dispatch(updateGameTableThunk(edited_gametable)).then(async () =>
    //   props.onClose()

    const data = await dispatch(updateGameTableThunk(edited_gametable))

    if (data) {
      setErrors(data);
    } else {

      props.onClose()
    }

    // console.log(errors, 'erroooooooooooooooooooooooooos')

    // return dispatch(updateGameTableThunk(edited_gametable))
    // );
  };

  return (
    <>
      <div className={css.outtereditcommentdiv}>

        <form onSubmit={handleSubmit} className={css.commentdivform}>
          <div className={css.innercommentdivs2}>
            <label>Edit Table Name</label>
            <div className={css.editgamegame}>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          </div>
          <div className={css.innercommentdivs} id={css.topborderlinecommentdiv}>
            <input
              type="tableName"
              // value={tableName}
              value={tableName}
              onChange={(e) => setTableName(e.target.value)}
              placeholder="Table Name"
              className={css.contentcommentdiv}
              required={true}
            />
          </div>
          <div className={css.innercommentdivs2} id={css.topborderlinecommentdiv}>
            <button type="submit" className={css.buttoncommentdivmodal}>
              Edit!
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditGameTableForm;
