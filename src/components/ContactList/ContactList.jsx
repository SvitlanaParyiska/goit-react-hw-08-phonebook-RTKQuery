import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
//import { List } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import { Grid } from '@mui/material';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <Grid container direction="column" spacing={2} justifyContent="center">
        {visibleContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </Grid>
    </>
  );
};

export default ContactList;
