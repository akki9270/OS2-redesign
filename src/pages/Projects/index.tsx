import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';

import SvgIcons from '../../components/SvgIcons';
import NoDataFound from '../../components/NoDataFound';
import ProjectGridList from './components/ProjectGridList';
import ProjectList from './components/ProjectList';

import { ProjectAPI } from '../../services/project';

import { LOADER_ACTIONS } from '../../store/loader';

import "./projects.scss";

const Projects = () => {
  const isShowLoader = useSelector((store: any) => store.loader.isShowLoader);
  const dispatch = useDispatch();

  const [isGridView, setIsGridView] = useState(true);
  const [isListView, setIsLisView] = useState(false);
  const [projects, setProjects] = useState<any>([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async (): Promise<void> => {
    dispatch({ type: LOADER_ACTIONS.SHOW_LOADER });
    try {
      const projectsData = await ProjectAPI.getLatestProjects();
      if (projectsData?.length > 0) {
        setProjects(projectsData);
      }
      dispatch({ type: LOADER_ACTIONS.HIDE_LOADER });
    } catch (error: any) {
      dispatch({ type: LOADER_ACTIONS.HIDE_LOADER });
    }
  };

  const toggleView = (type) => {
    if (type === 'list') {
      setIsLisView(true)
      setIsGridView(false);
    } else {
      setIsLisView(false)
      setIsGridView(true);
    }
  };

  if (projects?.length === 0 && !isShowLoader) return <NoDataFound />;
  return (
    (projects?.length > 0) && <div className='project-dashboard'>
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
          {projects.map((projectData: any, index: any) => {
            return <ProjectGridList key={`project-grid-${index}`} projectData={projectData} />
          })}
          {/* grid item end */}
        </Grid>
        //main grid container end
      )}

      {isListView && (
        // list container start
        <List id='list-container'>
          {/* list item start */}
          {projects.map((projectData: any, index: any) => {
            return <ProjectList key={`project-list-${index}`} projectData={projectData} />
          })}
          {/* list item end */}
        </List>
        // list container end
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