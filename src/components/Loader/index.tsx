import * as React from 'react';
import { useSelector } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => { 
  const isShowLoader = useSelector((store: any) => store.loader.isShowLoader);
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isShowLoader}      
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Loader;