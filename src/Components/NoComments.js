import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";

const NoComments = () => {
  return (
    <>
      <List component="nav">
        <ListItem>
          <ListItemText align="center">Комментариев пока нет</ListItemText>
        </ListItem>
      </List>
    </>
  );
};
export default NoComments;
