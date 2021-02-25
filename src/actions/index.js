export const addComment = (payload) => ({
  type: "ADD_COMMENT",
  payload: payload,
});

export const deleteComment = (payload) => ({
  type: "DELETE_COMMENT",
  payload: payload,
});
