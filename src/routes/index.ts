import express from 'express';

const routes = express();

import ProjectController from '../controllers/ProjectController';

routes.post('/createProject', ProjectController.createProject);
routes.get('/projects', ProjectController.listProjects);

export { routes };