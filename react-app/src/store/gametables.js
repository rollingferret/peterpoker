const ADD_GAMETABLE = "gametables/ADD_GAMETABLE";
const GET_GAMETABLES = "gametables/GET_GAMETABLE";
const GET_SINGLEGAMETABLES = "gametables/GET_SINGLEGAMETABLES";
const EDIT_GAMETABLE = "gametables/EDIT_GAMETABLE";
const DEL_GAMETABLE = "gametables/DEL_GAMETABLE";

const addGametableAction = (gametable) => ({
  type: ADD_GAMETABLE,
  payload: gametable,
});

const getGametablesAction = (gametable) => ({
  type: GET_GAMETABLES,
  payload: gametable,
});

const getSingleGametablesAction = (gametable) => ({
  type: GET_SINGLEGAMETABLES,
  payload: gametable,
});

const editGametableAction = (gametable) => ({
  type: EDIT_GAMETABLE,
  payload: gametable,
});

const delGametableAction = (gametable) => ({
  type: DEL_GAMETABLE,
  payload: gametable,
});

export const getAllGametablesThunk = () => async (dispatch) => {
  const res = await fetch("/api/gametables");

  if (res.ok) {
    const query = await res.json();
    dispatch(getGametablesAction(query));
  }
};

export const getSingleGametablesThunk = (id) => async (dispatch) => {
  const res = await fetch(`/api/gametables/${id}`);

  if (res.ok) {
    const query = await res.json();
    dispatch(getSingleGametablesAction(query));
  }
};

export const addGameTableThunk = (table) => async (dispatch) => {
  const res = await fetch("/api/gametables/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(table),
  });

  if (res.ok) {
    const new_table = await res.json();

    dispatch(addGametableAction(new_table));

    return { ok: true };
  }
};

export const updateGameTableThunk =
  ({ id, tableName }) =>
  async (dispatch) => {
    const response = await fetch(`/api/gametables/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tableName }),
    });


    if (response.ok) {
      const data = await response.json();
      dispatch(editGametableAction(data))
      return null;
    } else if (response.status < 500) {
      const data = await response.json();
      if (data.errors) {
        return data.errors;
      }
    } else {
      return ['An error occurred. Please try again.']
    }

    // if (res) {
    //   console.log(res,'resssssssssssssssssssssssssinthunk')
    //   const query = await res.json();
    //   dispatch(editGametableAction(query));
    //   return { ok: true };
    // }
  };

export const delGametableThunk = (gametableId) => async (dispatch) => {
  const res = await fetch(`/api/gametables/delete/${gametableId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    const query = await res.json();
    dispatch(delGametableAction(query));
    return { ok: true };
  }
};

const initialState = {};
// const initialState = [];


export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ADD_GAMETABLE:
      newState = Object.assign({}, state);
      newState[action.payload.id] = action.payload;
      return newState;
    case GET_SINGLEGAMETABLES:
      newState = Object.assign({}, state);
      // newState[action.payload.id] = action.payload[4];
      const singleGametable = action.payload;
      Object.values(singleGametable).forEach((gametable) => {
        newState[gametable.id] = gametable;
      });

      return newState;
    case GET_GAMETABLES:
      newState = Object.assign({}, state);
      const allGametables = action.payload.gametables;
      Object.values(allGametables).forEach((gametable) => {
        newState[gametable.id] = gametable;
      });

      // Object.values(allGametables).forEach((gametable) => {
      //   newState.push(gametable);
      // });

      // Object.entries(action.payload).forEach(([id, payload]) => {
      //   newState[id] = payload;
      // });
      return newState;

      // return Object.values(action.payload.gametables);
    case EDIT_GAMETABLE:
      newState = Object.assign({}, state);
      newState[action.payload.id] = action.payload;
      return newState;
    case DEL_GAMETABLE:
      newState = Object.assign({}, state);
      delete newState[action.payload.id];
      return newState;
    default:
      return state;
  }
}
