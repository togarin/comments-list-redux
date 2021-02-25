import React, { useState } from "react";
import {Button} from "@material-ui/core";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";
import CommentsList from "../Components/CommentsList";
import AddCommentDialog from "../Components/AddComment";
import { addComment, deleteComment } from "../actions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  addCommentBtn: {
    position: "relative",
    left: theme.spacing(21),
    top: theme.spacing(10),
    backgroundColor: "#6EB5A5",
  },
}));

const App = (props) => {
  const classes = useStyles();
  const [commentModal, setCommentModal] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");

  return (
    <>
      <Container maxWidth="sm">
        {props.comments.map((comment) => (
          <CommentsList
            id={comment.id}
            author={comment.author}
            text = {comment.text}
            createdOn={comment.createdOn}
            handleDelete={() => props.delete(comment.id)}

          />
        ))}
        <AddCommentDialog
          isOpen={commentModal}
          handleModalClose={() => setCommentModal(false)}
          handleSubmit={(e) => {
            e.preventDefault();
            if (!commentAuthor || !commentText) return;
            props.add(commentAuthor, commentText);
            setCommentModal(false);
            setCommentAuthor("");
            setCommentText("");
          }}
          valueAuthor={commentAuthor}
          valueText={commentText}
          onAuthorChange={(e) => setCommentAuthor(e.target.value)}
          onTextChange={(e) => setCommentText(e.target.value)}

        />
        <Button
        className={classes.addCommentBtn}
        variant="contained"
        onClick={() => setCommentModal(true)}
      >
        Написать комментарий
      </Button>
      </Container>
    </>
  );
};
const mapStateToProps = (store) => {
  return {
    comments: store.commentsState.comments,
  };
};

const mapDispachToProps = (dispach) => ({
  add: (author, text, createdOn) =>
    dispach(addComment(author, text, createdOn)),
  delete: (id) => dispach(deleteComment(id)),
});

export default connect(mapStateToProps, mapDispachToProps)(App);
