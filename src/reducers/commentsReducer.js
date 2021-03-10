const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMMENT": {
      const newComment = {
        author: action.author,
        text: action.text,
        createdOn: action.createdOn,
        id: action.id,
      };

      const comments = [...state.comments, newComment];
      return {
        ...state.comments,
        comments,
      };
    }

    case "DELETE_COMMENT": {
      const comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
      return {
        ...state,
        comments,
      };
    }
    default:
      return state;
  }
};
