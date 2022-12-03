import React from 'react';
import { RootState } from '../../redux/store';
import styles from './AddComment.module.scss';

import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import axios from '../../axios';
import { useSelector } from 'react-redux';

export const Index = ({ itemId }) => {
  const { data } = useSelector((state) => state.authReducer);

  const [text, setText] = React.useState('');

  const onComment = async () => {
    const fields = {
      data,
      itemId,
      text,
    };

    await axios.post(`/catalog/${itemId}/comment`, fields);

    try {
    } catch (error) {
      console.warn(error);
      alert('error of create a comment');
    }
  };
  console.log(data, itemId, text);
  return (
    <>
      <div className={styles.root}>
        <Avatar classes={{ root: styles.avatar }} src={data.avatarUrl} />
        <div className={styles.form}>
          <TextField
            value={text}
            onChange={(e) => setText(e.target.value)}
            label="Написать комментарий"
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
          />
          <Button variant="contained" onClick={onComment}>
            Отправить
          </Button>
        </div>
      </div>
    </>
  );
};
