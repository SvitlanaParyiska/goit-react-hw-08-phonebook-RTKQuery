import React, { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, IconButton, TextField } from '@mui/material';

const EditContactForm = ({ handleEdit, oldName, oldNumber, cancelEdit }) => {
  const [name, setName] = useState(oldName);
  const [number, setNumber] = useState(oldNumber);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    handleEdit({ name, number });
    setName('');
    setNumber('');
    form.reset();
  };

  return (
    <Box
      component="form"
      sx={{ p: 1, display: 'flex', gap: '5px', maxWidth: '300px' }}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="standard-text"
          label="Name"
          type="text"
          defaultValue={name}
          variant="standard"
          onChange={e => setName(e.target.value)}
        />{' '}
        <TextField
          required
          id="standard-number"
          label="Number"
          type="tel"
          defaultValue={number}
          variant="standard"
          onChange={e => setNumber(e.target.value)}
        />
      </div>

      <IconButton aria-label="done" color="success" type="submit">
        <CheckCircleIcon />
      </IconButton>
      <IconButton
        aria-label="done"
        color="error"
        type="button"
        onClick={cancelEdit}
      >
        <CancelIcon />
      </IconButton>
    </Box>
  );
};

export default EditContactForm;
