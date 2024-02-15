import { Request, Response } from "express";
import { CreateProjectService } from "../services/CreateProjectService";
import { ListProjectService } from "../services/ListProjectService";
import { ProjectRepository } from "../repositories/ProjectRepository";

export default {
    createProject: async(request: Request, response: Response) => {
        try {
            const { title, technologie, ispublic } = request.body;

            const createProject = new CreateProjectService(new ProjectRepository());

            const project = await createProject.execute(title, technologie, ispublic);

            return response.json({
                error: false,
                message: 'Project Criado com sucesso',
                project
            });
        } catch(error) {
            return response.json({ message: error.message });
        }
    },

    listProjects: async (request: Request, response: Response) => {
        try {
            const listProjects = new ListProjectService(new ProjectRepository());

            const projects = await listProjects.execute();
            
            return response.json({
                error: false,
                projects
            });
        } catch(error) {
            return response.json({ message: error.message });
        }
    }
}