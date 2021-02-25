import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from "@material-ui/core";

const AddCommentDialog = (props) => {
  const {
    subtitle,
    isOpen,
    handleModalClose,
    valueAuthor,
    valueText,
    onAuthorChange,
    onTextChange,
    handleSubmit,
  } = props;
  return(
  <Dialog open={isOpen} onClose={handleModalClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Напиши комментарий</DialogTitle>
    <DialogContent>
      <DialogContentText>{subtitle}</DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="author"
        label="Niсkname"
        type="text"
        fullWidth
        value={valueAuthor}
        onChange={onAuthorChange}
      />
      <TextField
        margin="dense"
        id="commentText"
        label="Your comment"
        type="text"
        fullWidth
        value={valueText}
        onChange={onTextChange}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleModalClose} color="primary">
        Отмена
      </Button>
      <Button onClick={handleSubmit} color="primary">
        Отправить
      </Button>
    </DialogActions>
  </Dialog>
  )
};

export default AddCommentDialog;
