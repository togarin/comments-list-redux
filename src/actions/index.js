const unId = () => `f${(+new Date()).toString(16)}`;
const date = () => `${new Date().toLocaleString()}`;


export const addComment = (author, text) => ({
  type: "ADD_COMMENT",
  author,
  text,
  createdOn: date(),
  id: unId(),
});

export const deleteComment = (payload) => ({
  type: "DELETE_COMMENT",
  payload: payload,
});
