import { InterfaceProjectRepository } from "../interfaces/InterfaceProjectRepository";
import { prismaClient } from "../database/index";


class ProjectRepository implements InterfaceProjectRepository {

    public async createProject(title: string, technologie: string, ispublic: boolean): Promise<{ id: number; title: string; technologie: string; ispublic: boolean; }> {
        const project = await prismaClient.project.create({
            data: {
                title,
                technologie,
                ispublic
            },
        });

        return project;
    }

    public async listProjects(): Promise<{ id: number; title: string; technologie: string; ispublic: boolean; }[]> {
        const projects = await prismaClient.project.findMany();
        return projects;
    }
}

export { ProjectRepository };