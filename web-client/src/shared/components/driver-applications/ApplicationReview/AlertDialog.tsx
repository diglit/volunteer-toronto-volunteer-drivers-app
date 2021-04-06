import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface Props {
  children: React.ReactNode,
  title: string,
  contentText: string,
  open: boolean,
  handleCancel: () => void,
  handleConfirm: () => void,
  confirmLabel: string
}

const AlertDialog = ({ children, title, contentText, open, handleCancel, handleConfirm, confirmLabel }: Props): React.ReactElement => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {contentText}
          </DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>
            {confirmLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog