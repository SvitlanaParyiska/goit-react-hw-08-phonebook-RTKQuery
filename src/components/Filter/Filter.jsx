import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilter(event.target.value.toLowerCase()));
  };

  return (
    <Box
      component="div"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        mb: 2,
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-multiline-static"
        label="Filter by name"
        type="text"
        name="filter"
        sx={{ boxShadow: '0 0 5px 0.5px grey', borderRadius: '5px' }}
        onChange={changeFilter}
        value={useSelector(selectFilter)}
      />
    </Box>
  );
};

export default Filter;
