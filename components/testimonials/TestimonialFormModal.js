import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';

// Avatar options for the Select component
const avatarOptions = [
  { value: '/t-avt-1.png', label: 'Avatar 1' },
  { value: '/t-avt-2.png', label: 'Avatar 2' },
  // Add more avatar options as needed
];

// FormDialog component
export default function FormDialog() {
  // State to manage the dialog's open/closed state
  const [open, setOpen] = React.useState(false);

  // Function to open the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to close the dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const { name, position, message, image } = formJson;

    try {
      // Submit the testimonial data to the server
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, position, message, image }),
      });

      // Parse the response JSON
      const data = await response.json();

      // Log the response data
      console.log('Response:', data);

      // Check if the submission was successful
      if (response.ok) {
        console.log('Testimonial submitted successfully!');
        // You can add logic here for any additional actions after successful submission
      } else {
        console.error('Error submitting testimonial:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting testimonial:', error);
    }

    // Close the dialog after submission
    handleClose();
  };

  // JSX structure for the form dialog
  return (
    <React.Fragment>
      {/* Button to open the dialog */}
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      
      {/* Main Dialog Component */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Create Testimonial</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {/* Form instructions */}
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>

          {/* Form Fields */}
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Name"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="position"
            name="position"
            label="Position"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="message"
            name="message"
            label="Message"
            fullWidth
            variant="standard"
            multiline
            rows={4}
          />
          <FormControl fullWidth>
            <InputLabel id="avatar-label">Avatar</InputLabel>
            {/* Avatar Selection Dropdown */}
            <Select
              label="Avatar"
              name="image"
              displayEmpty
              renderValue={(selected) => (
                <Avatar alt="Avatar" src={selected} sx={{ width: 24, height: 24, mr: 1 }} />
              )}
            >
              <MenuItem value="" disabled>
                Select an Avatar
              </MenuItem>
              {avatarOptions.map((avatar) => (
                <MenuItem key={avatar.value} value={avatar.value}>
                  {/* Avatar option in the dropdown */}
                  <Avatar alt={avatar.label} src={avatar.value} sx={{ width: 24, height: 24, mr: 1 }} />
                  {avatar.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>

        {/* Dialog Actions (Submit and Cancel buttons) */}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
