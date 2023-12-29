import React from 'react'
import { Box, LinearProgress, ListItem } from '@mui/material'
import SvgIcons from '../../../components/SvgIcons';

interface ProjectProps {
  projectData: any,
};

const ProjectList: React.FC<ProjectProps> = (props:any) => {
  const { projectData } = props;
  return (
    <ListItem>
      <div className='list-content'>
        {/*  */}

        <h3 className='project-name'>{projectData?.name}</h3>
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
  )
}

export default ProjectList
