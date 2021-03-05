const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMMENT": {
      let items;
      if (localStorage.getItem("comments")) {
        items = JSON.parse(localStorage.getItem("comments"));
      } else items = [];

      const newComment = {
        author: action.author,
        text: action.text,
        createdOn: action.createdOn,
        id: action.id,
      };

      items.push(newComment);
      localStorage.setItem("comments", JSON.stringify(items));

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
      localStorage.setItem("comments", JSON.stringify(comments));
      return {
        ...state,
        comments,
      };
    }
    default:
      return state;
  }
};
