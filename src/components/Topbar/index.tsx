import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SearchIcon from '../../../static/icons/search.png';
import SvgIcons from '../SvgIcons';

import { AUTH_ACTIONS } from '../../store/auth/actions';

import "./topbar.scss";

const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const logoutUser = () => {
    dispatch({ type: AUTH_ACTIONS.LOGOUT_USER });
    navigate("/login");
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  // date
  const currentDate = new Date();
  function getOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
      return 'th';
    }

    switch (day % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  }
  // Define arrays for month names and day names
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Get the month, date, and day
  const month = monthNames[currentDate.getMonth()];
  const date = currentDate.getDate();
  const day = dayNames[currentDate.getDay()];
  // Get the ordinal suffix
  const suffix = getOrdinalSuffix(date);


  return (
    <div>
      <AppBar id='header-wrap'>
        <Toolbar id='header-container'>
          {/* search input */}
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            className='search-bar'
            placeholder={searchText ? '' : 'Search'}
            value={searchText}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <IconButton size="small" edge="start">
                  <img src={SearchIcon} alt='search icon' style={{ width: "14px", height: "14px" }} />
                </IconButton>
              ),
            }}
          // Add any other props or event handlers you need
          />
          <div className='right-top-nav'>
            {/* date */}
            <div className='date-wrap'>
              <Typography className='month-text'>{month}, {date}{suffix}</Typography>
              <Typography className='day-text'>{day}</Typography>
            </div>
            {/* noti */}
            <Typography className='noti-icon'>
              <SvgIcons iconType='noti' />
            </Typography>
            {/* Account */}
            <Button onClick={handleMenuOpen}
              startIcon={<AccountCircleIcon className='user-icon' />}
              endIcon={<ExpandMoreOutlinedIcon />}
              className='user-account'>Account</Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>My account</MenuItem>
              <MenuItem onClick={logoutUser}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Topbar