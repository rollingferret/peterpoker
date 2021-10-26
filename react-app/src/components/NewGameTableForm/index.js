import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addGameTableThunk } from "../../store/gametables";
import css from './newgametableform.module.css'


function NewGameTable() {
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
      <form onSubmit={handleSubmit}>
        <div className={css.comment_container}>
          <input
            type="tablename"
            value={tablename}
            placeholder="Add a table name..."
            onChange={(e) => setTablename(e.target.value)}
            className={css.comment_text}
          />
          <button type="submit" className={css.comment_btn}>
            Create a table!
          </button>
        </div>
      </form>
    </>
  );
}

export default NewGameTable;
