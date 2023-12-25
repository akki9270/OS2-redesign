import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import Logo from '../../../static/logo-1.png';

import SvgIcons from '../SvgIcons';
import "./sidebar.scss";


const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleDropdownClick = () => {
    setOpenDropdown(!openDropdown);
  };

  return <Box>
    <Drawer variant="permanent" className='sidebar'>
      <div className='list-container'>
        {/* logo */}
        <List>
          <ListItem>
            <ListItemIcon>
              <img src={Logo} alt="Logo" style={{ width: '100%', height: 'auto' }} />
            </ListItemIcon>
            <ListItemText />
          </ListItem>
        </List>
        {/* project dashboard */}
        <List className='title'>
          <ListItem>
            <ListItemText primary="Overview" />
          </ListItem>
        </List>
        <List>
          <ListItem component={NavLink} to="/projects" title={'Projects'}>
            <ListItemIcon className="listitem-icons">
              {/* <img src={ProjectIcon} alt='Project' /> */}
              <SvgIcons iconType='project' />
            </ListItemIcon>
            <ListItemText>Project Dashboard</ListItemText>
          </ListItem>
          <ListItem component={NavLink} to="/contracts" title={'Contracts'}>
            <ListItemIcon className="listitem-icons">
              <SvgIcons iconType='contract' />
            </ListItemIcon>
            <ListItemText>Contract Dashboard</ListItemText>
          </ListItem>
          <ListItem component={NavLink} to="/riskidentification" title={'RiskIdentification'}>
            <ListItemIcon className="listitem-icons">
              <SvgIcons iconType='risk-identification' className='riskidensvg' />
            </ListItemIcon>
            <ListItemText>Risk Identification</ListItemText>
          </ListItem>
          <ListItem component={NavLink} to="/riskassessment" title={'RiskAssessment'}>
            <ListItemIcon className="listitem-icons">
              <SvgIcons iconType='risk-assessment' className='riskassessvg' />
            </ListItemIcon>
            <ListItemText>Risk Assessment</ListItemText>
          </ListItem>
        </List>
        {/* project list */}
        <List className='title'>
          <ListItem>
            <ListItemText primary="Projects" />
          </ListItem>
        </List>
        <List>
          <ListItem onClick={handleDropdownClick} className={openDropdown ? 'active' : ''}>
            <ListItemIcon className="listitem-icons">
              <SvgIcons iconType='folder' />
            </ListItemIcon>
            <ListItemText>Offshore Oil & Gas Production Offshore Oil & Gas Production{openDropdown ?
              <ExpandLess /> :
              <ExpandMore />}
            </ListItemText>
          </ListItem>
          <Collapse in={openDropdown} timeout="auto" unmountOnExit className='list-dropdown'>
            <List component="div" disablePadding>
              <ListItem>
                <ListItemText primary="Option 1" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Option 2" />
              </ListItem> {/* Add more options as needed */}
            </List>
          </Collapse>
          <ListItem>
            <ListItemIcon className="listitem-icons">
              <SvgIcons iconType='folder' />
            </ListItemIcon>
            <ListItemText>Project 2</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon className="listitem-icons">
              <SvgIcons iconType='folder' />
            </ListItemIcon>
            <ListItemText>Project 3</ListItemText>
          </ListItem>
        </List>
      </div>
    </Drawer>
  </Box>
};

export default Sidebar;