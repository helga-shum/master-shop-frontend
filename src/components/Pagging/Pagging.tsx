import React from 'react';
import styles from './Pagging.module.scss';
import ReactPaginate from 'react-paginate';

const Pagging: React.FC<{ onChangePage: (number: number) => void }> = ({ onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel="next >"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={6}
      pageCount={3}
      previousLabel="< previous"
    />
  );
};
export default Pagging;
