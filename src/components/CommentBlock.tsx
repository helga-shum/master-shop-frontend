import React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Skeleton from '@mui/material/Skeleton';
type CommentsTypes = {
  items: { _id: string; text: string; itemId: string; user: string }[];
  isLoading: boolean;
};
const CommentsBlock: React.FC<CommentsTypes> = ({ items, isLoading = true }) => {
  console.log(items);
  return (
    <>
      Comments
      <List>
        {(isLoading ? [...Array(5)] : items).map((obj) => (
          <React.Fragment key={obj._id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                {isLoading ? (
                  <Skeleton variant="circular" width={40} height={40} />
                ) : (
                  <Avatar alt={obj.user.fullName} src={obj.user.avatarUrl} />
                )}
              </ListItemAvatar>
              {isLoading ? (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Skeleton variant="text" height={25} width={120} />
                  <Skeleton variant="text" height={18} width={230} />
                </div>
              ) : (
                <ListItemText primary={obj.user.fullName} secondary={obj.text} />
              )}
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </>
  );
};
export default CommentsBlock;
