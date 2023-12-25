import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import SvgIcons from '../../components/SvgIcons';
import "./projects.scss";

const Projects = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [isListView, setIsLisView] = useState(false);

  const toggleView = (type) => {
    if (type === 'list') {
      setIsLisView(true)
      setIsGridView(false);
    } else {
      setIsLisView(false)
      setIsGridView(true);
    }
  };

  return (
    <div className='project-dashboard'>
      <div id='dashboard-header'>
        <div id='content-wrap'>
          {/* title */}
          <h3 id='title'>
            Projects
          </h3>
          <div id='status-wrap'>
            <div className='status-item'>
              <span className='number'>45</span>
              <span className="txt">In Progress</span>
            </div>
            <div className='status-item'>
              <span className='number'>45</span>
              <span className="txt">Completed Projects</span>
            </div>
            <div className='status-item'>
              <span className='number'>45</span>
              <span className="txt">Total Projects</span>
            </div>
          </div>
        </div>
        {/* icons */}
        <div id='icon-wrap'>
          <span onClick={() => toggleView('list')} style={{ cursor: 'pointer' }}>
            <SvgIcons iconType={'list'} className={isListView ? 'icon-active' : ''} />
          </span>
          <span onClick={() => toggleView('grid')} style={{ cursor: 'pointer' }}>
            <SvgIcons iconType={'grid'} className={isGridView ? 'icon-active' : ''} />
          </span>
        </div>
      </div>
      
      {isGridView && (
        // main grid container
        <Grid container className='grid-container'>
          {/* grid item */}
          <Grid item xs={12} sm={6} md={3} lg={3} className='grid-item'>
            <div>
              {/*  */}
              <span className='status'>In Progress</span>
              <h3 className='project-name'>Shaft Infrastructure Design</h3>
              <p className='risk-txt'>16 Risks Identified</p>
              {/* progress bar */}
              <Box className="progress-bar">
                {/* First part */}
                <LinearProgress className="progress-bar-item" variant="determinate" value={100} />

                {/* Second part */}
                <LinearProgress className="progress-bar-item" variant="determinate" value={0} />

                {/* Third part */}
                <LinearProgress className="progress-bar-item" variant="determinate" value={0} />
              </Box>
            </div>
          </Grid>
          {/* grid item end */}
          {/* main grid container end */}
        </Grid>
      )}

      {isListView && (
        // list container start
        <List id='list-container'>
          {/* list item start */}
          <ListItem>
            <div className='list-content'>
              {/*  */}
              
              <h3 className='project-name'>Shaft Infrastructure Design</h3>
              <span className='status'>In Progress</span>
              <div className='risk-wrap'>
                <p className='risk-txt'>16 Risks Identified</p>
                {/* progress bar */}
                <Box className="progress-bar">
                  {/* First part */}
                  <LinearProgress className="progress-bar-item" variant="determinate" value={100} />

                  {/* Second part */}
                  <LinearProgress className="progress-bar-item" variant="determinate" value={0} />

                  {/* Third part */}
                  <LinearProgress className="progress-bar-item" variant="determinate" value={0} />
                </Box>
              </div>
              <span className='view-contract'>
                <SvgIcons iconType={'contract'} />
                View Contracts
              </span>
            </div>
          </ListItem>
          {/* list item end */}

          {/* list container end */}
        </List>
      )}

      {/* bottom button & pagination */}
      <div id='bottom-wrap'>
        <Button id='btn'>
          + Add New Project
        </Button>
        <Pagination count={7} id='pagination' />
      </div>
    </div>
  )
}

export default Projects;