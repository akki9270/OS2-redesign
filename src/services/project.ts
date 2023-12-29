import API from '../api';

import { Project } from '../models';

const requestString = `/project`;

export class ProjectAPI {
  
  static async getLatestProjects(): Promise<Project[]> {
    const resp = API.patch(
      requestString,
      {
        onlyCurrentVersions: true
      },      
    ).then((res) => res.data);
    return resp;
  }

 
}
