import React from 'react';
import { newFilter } from '../features/reducers/filterReducer';
import { useDispatch } from 'react-redux';

const FilterList = () => {

  const dispatch = useDispatch();

  return (
    <>
      <label htmlFor='filter'>Filter: </label>
      <input name='filter' onChange={(e) => dispatch(newFilter(e.target.value))} />
    </>
  )
};

export default FilterList;
