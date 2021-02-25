const initialState = {
  comments: [
    { id: `f${(+new Date()).toString(16)}`, author: "Me", text: "First comment", createdOn: new Date().toLocaleString() },
    { id: `f${(+new Date()).toString(16)}`, author: "Smb other", text: "Second comment", createdOn: new Date().toLocaleString() },
  ],
};


export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMMENT": {
      const newComment = {
        id: `f${(+new Date()).toString(16)}`,
        author: action.payload,
        text: action.payload,
        createdOn: new Date().toLocaleString(),
      };
      const comments = [...state.comments, newComment];
      return {
        ...state,
        comments,
      };
    }
    case "DELETE_COMMENT": {
      const comments = state.comments.filter((comment) => comment.id !== action.payload);
      return {
        ...state,
        comments,
      };
    }

    default:
      return state;
  }
};
