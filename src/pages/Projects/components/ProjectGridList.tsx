import { Box, Grid, LinearProgress } from '@mui/material'
import React from 'react'

interface ProjectProps {
  projectData: any,
};

const ProjectGridList: React.FC<ProjectProps> = (props: any) => {
  const { projectData } = props;
  return (
    <Grid item xs={12} sm={6} md={3} lg={3} className='grid-item'>
      <div>
        {/*  */}
        <span className='status'>In Progress</span>
        <h3 className='project-name'>{projectData?.name}</h3>
        <p className='risk-txt'>{'16 Risks Identified'}</p>
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
  )
}

export default ProjectGridList;