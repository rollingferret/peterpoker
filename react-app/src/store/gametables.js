const ADD_GAMETABLE = "gametables/ADD_GAMETABLE";
const GET_GAMETABLES = "gametables/GET_GAMETABLE";
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

const editGametableAction = (gametable) => ({
  type: EDIT_GAMETABLE,
  payload: gametable,
});

const delGametableAction = (gametable) => ({
  type: DEL_GAMETABLE,
  payload: gametable,
});

// export const getCommentByIdThunk = (imageId) => async (dispatch) => {
//   const res = await fetch(`/api/comments/${imageId}`);
//   if (res.ok) {
//     const query = await res.json();
//     dispatch(getAllCommentsAction(query));
//   }
// };

export const getAllGametablesThunk = () => async (dispatch) => {
  const res = await fetch("/api/gametables");

  if (res.ok) {
    const query = await res.json();
    dispatch(getGametablesAction(query));
  }
};

// export const addCommentThunk = (comment) => async (dispatch) => {
//   const res = await fetch("/api/comments/new", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(comment),
//   });

//   if (res.ok) {
//     const new_comment = await res.json();

//     dispatch(addCommentAction(new_comment));

//     return { ok: true };
//   }
// };

// export const updateCommentThunk =
//   ({ id, content }) =>
//   async (dispatch) => {
//     const res = await fetch(`/api/comments/edit/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ content }),
//     });

//     if (res.ok) {
//       const query = await res.json();
//       dispatch(editCommentsAction(query));
//       return { ok: true };
//     }
//   };

// export const delCommentThunk = (commentId) => async (dispatch) => {
//   const res = await fetch(`/api/comments/delete/${commentId}`, {
//     method: "DELETE",
//   });

//   if (res.ok) {
//     const query = await res.json();
//     dispatch(delCommentsAction(query));
//     return { ok: true };
//   }
// };

const initialState = {};
// const initialState = [];


export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ADD_GAMETABLE:
      newState = Object.assign({}, state);
      newState[action.payload.id] = action.payload;
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
