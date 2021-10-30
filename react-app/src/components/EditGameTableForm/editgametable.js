import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateGameTableThunk } from "../../store/gametables";

function EditGameTableForm({ ...props }) {
  const dispatch = useDispatch();

  const currentTableName = useSelector((state) => state.gametables[props.gametableId]);  
  
  const [tableName, setTableName] = useState(`${currentTableName.tableName}`);

  // const [tableName, setTableName] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    let edited_gametable = {
      id: props.gametableId,
      tableName: tableName,
    };

    // return dispatch(updateGameTableThunk(edited_gametable)).then(async () =>
    //   props.onClose()

    return dispatch(updateGameTableThunk(edited_gametable))
    // );
  };

  return (
    <>
      <div className="outtereditcommentdiv">
        <form onSubmit={handleSubmit} className="commentdivform">
          <div className="innercommentdivs-2">
            <label>Edit Table Name</label>
          </div>
          <div className="innercommentdivs" id="topborderlinecommentdiv">
            <input
              type="tableName"
              // value={tableName}
              value={tableName}
              onChange={(e) => setTableName(e.target.value)}
              placeholder="Table Name"
              className="contentcommentdiv"
              required={true}
            />
          </div>
          <div className="innercommentdivs-2" id="topborderlinecommentdiv">
            <button type="submit" className="buttoncommentdivmodal">
              Edit!
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditGameTableForm;
