import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from 'redux/contactsOperations';
import { selectContacts } from 'redux/selectors';
import { Box, Button, TextField } from '@mui/material';
import toast from 'react-hot-toast';

export const ContactForm = ({ createContact }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactList = useSelector(selectContacts);

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const isAlreadyExist = contactList.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (isAlreadyExist) {
      toast.error(`${name} is already in contacts!`, {
        duration: 3000,
        position: 'top-right',
      });
      return;
    }

    try {
      await dispatch(addContact({ name, number })).unwrap();
      toast.success('Contact was added!', {
        duration: 3000,
        position: 'top-right',
      });
      await dispatch(fetchContacts()).unwrap();
      setName('');
      setNumber('');
      form.reset();
    } catch (error) {
      toast.error('Something was wrong. Please try again!', {
        duration: 3000,
        position: 'top-right',
      });
    }
  };

  return (
    <Box
      component="form"
      sx={{
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '400px',
        boxShadow: '0 0 10px 1px grey',
        borderRadius: '5px',
        mb: 2,
        mt: 2,
      }}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="standard-text"
        label="Name"
        type="text"
        value={name}
        variant="standard"
        onChange={e => setName(e.target.value)}
      />
      <TextField
        required
        id="standard-number"
        label="Number"
        type="tel"
        value={number}
        variant="standard"
        onChange={e => setNumber(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Add contact
      </Button>
    </Box>
  );
};
