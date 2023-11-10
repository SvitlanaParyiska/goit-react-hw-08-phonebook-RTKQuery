import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
  patchContact,
} from 'redux/contactsOperations';
import EditContactForm from 'components/EditContactForm/EditContactForm';
import { Box, CardContent, IconButton, Typography } from '@mui/material';
import { Avatar, Grid, Card, CardActions, CardHeader } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import toast from 'react-hot-toast';

const ContactItem = ({ contact }) => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = async contactId => {
    try {
      await dispatch(deleteContact(contactId)).unwrap();
      await dispatch(fetchContacts()).unwrap();
      toast.success('Contact was deleted!', {
        duration: 3000,
        position: 'top-right',
      });
    } catch (error) {
      toast.error('Something was wrong. Please try again!', {
        duration: 3000,
        position: 'top-right',
      });
    }
  };

  const editClick = () => {
    setEdit(true);
  };

  const handleEdit = async ({ name, number }) => {
    try {
      await dispatch(
        patchContact({ contactId: contact.id, name, number })
      ).unwrap();
      dispatch(fetchContacts());
      toast.success('Contact was edited!', {
        duration: 3000,
        position: 'top-right',
      });
      setEdit(false);
    } catch (error) {
      toast.error('Something was wrong. Please try again!', {
        duration: 3000,
        position: 'top-right',
      });
    }
  };

  const cancelEdit = () => {
    setEdit(false);
  };

  return (
    <>
      <Grid item key={contact.id}>
        <Card sx={{ boxShadow: '0 0 10px 1px grey', borderRadius: '5px' }}>
          <Box
            sx={{
              display: 'flex',
              maxWidth: '400px',
              gap: '10px',
              justifyContent: 'space-between',
            }}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: 'primary.main' }} aria-label="contact">
                  {contact.name?.at(0)?.toUpperCase()}
                </Avatar>
              }
            />
            {!edit ? (
              <>
                <CardContent>
                  <Typography variant="h5" color="text.secondary">
                    {contact.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 16 }}
                    color="text.secondary"
                  >
                    {contact.number}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    edge="end"
                    color="primary"
                    sx={{ mr: 1 }}
                    aria-label="editContact"
                    onClick={() => editClick()}
                  >
                    <BorderColorIcon />
                  </IconButton>

                  <IconButton
                    edge="end"
                    color="primary"
                    aria-label="deleteContact"
                    sx={{ mr: 0.5 }}
                    onClick={() => handleDelete(contact.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </>
            ) : (
              <EditContactForm
                handleEdit={handleEdit}
                oldName={contact.name}
                oldNumber={contact.number}
                cancelEdit={cancelEdit}
              />
            )}
          </Box>
        </Card>
      </Grid>
    </>
  );
};

export default ContactItem;
