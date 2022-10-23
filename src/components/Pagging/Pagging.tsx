import React from 'react';
import styles from './Pagging.module.scss';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Pagging: React.FC<{
  totalPages: number;

  onChangePage: (number: number) => void;
}> = ({ onChangePage, totalPages }) => {
  const { currentPage } = useSelector((state: RootState) => state.filterSlice);
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel="next >"
      onPageChange={(event) => onChangePage(event.selected)}
      pageRangeDisplayed={6}
      pageCount={3}
      previousLabel="< previous"
      forcePage={currentPage}
    />
  );
};
export default Pagging;
