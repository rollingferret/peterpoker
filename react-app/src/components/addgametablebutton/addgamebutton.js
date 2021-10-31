import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addGameTableThunk } from "../../store/gametables";
import css from './addgamebutton.module.css'

function AddGameButton({ ...props}) {

  const sessionUser = useSelector((state) => state.session.user);

  const history = useHistory();
  const dispatch = useDispatch();

  const [tablename, setTablename] = useState("");
  const [errors, setErrors] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!sessionUser) {
      history.push("/");
    } else {
      if (tablename) {
        let newgametable = {
          tableCreator: sessionUser.id,
          tableName: tablename,
        };

        let res = await dispatch(addGameTableThunk(newgametable));

        // if (res) {
        //     setTablename("");
        //     history.push("/gametables");
        // }

        // if (res) {
        //   setErrors(res);
        // }

        if (res) {
          setErrors(res);
        } else {
    
          props.onClose()
        }
      }
    }
  };

  return (
    <>
    <div className={css.addoutterdiv}>

      <form onSubmit={handleSubmit} className={css.adddivform}>
        <div className={css.inneradddivs2}>
          <label>Create a Table!</label>
          <div className={css.editgamegame}>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          </div>
          <div className={css.inneradddivs} id={css.topborderlinediv}>

          <input
            type="tablename"
            value={tablename}
            placeholder="Add a table name..."
            onChange={(e) => setTablename(e.target.value)}
            className={css.gametablecontent}
            required={true}
          />
          </div>
          <div className={css.inneradddivs2} id={css.topborderlinediv}>
          <button type="submit" className={css.buttondivmodal}>
            Create!
          </button>
          </div>
      </form>
      </div>
    </>
  );
}

export default AddGameButton;
