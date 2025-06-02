import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

interface AddQueryDialogProps {
  loading: boolean;
  open: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  queryName: string;
  setQueryName: (name: string) => void;
}

const AddQueryDialog: React.FC<AddQueryDialogProps> = ({
  loading,
  open,
  onClose,
  onSubmit,
  queryName,
  setQueryName,
}) => {
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={onClose}
      PaperProps={{
        component: 'form',
        onSubmit,
      }}
    >
      <DialogTitle>{'Add query'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {'Enter a name to identify the query'}
        </DialogContentText>
        <TextField
          disabled={loading}
          inputProps={{ autoComplete: 'off' }}
          value={queryName}
          onChange={(e) => setQueryName(e.target.value)}
          margin="dense"
          id="name"
          name="name"
          label="Query name"
          type="text"
          variant="standard"
          autoFocus
          required
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={loading}>
          Cancel
        </Button>
        <Button type="submit" disabled={!queryName}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddQueryDialog;
