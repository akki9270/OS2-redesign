import React from 'react';
import Snackbar from '@mui/material/Snackbar';
// import { Alert } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

export interface SnackbarProps {
  show?: boolean;
  severity?: 'success' | 'error' | 'warning';
  message?: string;
  handleClose(): void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CustomSnackbar: React.FC<SnackbarProps> = ({ show, severity, message, handleClose }) => {
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={show}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomSnackbar;
