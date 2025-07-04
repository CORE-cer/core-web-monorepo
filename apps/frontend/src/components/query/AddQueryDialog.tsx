import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React from 'react';

type AddQueryDialogProps = {
  loading: boolean;
  open: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  queryName: string;
  setQueryName: (name: string) => void;
};

export function AddQueryDialog({ loading, open, onClose, onSubmit, queryName, setQueryName }: AddQueryDialogProps) {
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={onClose}
      slotProps={{ paper: { component: 'form', onSubmit: (e: React.FormEvent<HTMLFormElement>) => void onSubmit(e) } }}
    >
      <DialogTitle>{'Add query'}</DialogTitle>
      <DialogContent>
        <DialogContentText>{'Enter a name to identify the query'}</DialogContentText>
        <TextField
          disabled={loading}
          slotProps={{
            htmlInput: { autoComplete: 'off' },
          }}
          value={queryName}
          onChange={(e) => {
            setQueryName(e.target.value);
          }}
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
}

export default AddQueryDialog;
