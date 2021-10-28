import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addGameTableThunk } from "../../store/gametables";
import css from './addgamebutton.module.css'

function AddGameButton() {

  const sessionUser = useSelector((state) => state.session.user);

  const history = useHistory();
  const dispatch = useDispatch();

  const [tablename, setTablename] = useState("");


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

        if (res) {
            setTablename("");
            history.push("/gametables");
        }
      }
    }
  };

  return (
    <>
    <div>TESTERINO</div>
      <form onSubmit={handleSubmit}>
        <div className={css.gametable}>
          <input
            type="tablename"
            value={tablename}
            placeholder="Add a table name..."
            onChange={(e) => setTablename(e.target.value)}
            className={css.gametable}
          />
          <button type="submit" className={css.gametable}>
            Create a table!
          </button>
        </div>
      </form>
    </>
  );
}

export default AddGameButton;
