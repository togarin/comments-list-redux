import React from "react";
import {
  Paper,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Delete } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  text: {
    marginRight: theme.spacing(2),
  },
}));

const CommentsList = (props) => {
  const classes = useStyles();
  const {handleDelete, id, author, text, createdOn } = props;
  return (
    <>
      <List className={classes.root} component={Paper} >
        <ListItem alignItems="center" key={id}>
          <Icon className={classes.icon}>
            <AccountCircleIcon />
          </Icon>
          <ListItemText
            primary={author}
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.text}
                  color="textPrimary"
                >
                  {text}
                </Typography>
                {createdOn}
              </>
            }
          />
          <IconButton onClick={handleDelete}>
            <Delete />
          </IconButton>
        </ListItem>
        <Divider variant="middle" component="li"/>
      </List>
    </>
  );
};

export default CommentsList;
