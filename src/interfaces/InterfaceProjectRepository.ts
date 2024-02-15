import { Project } from "@prisma/client";


export interface InterfaceProjectRepository {
    createProject(title: string, technologie: string, ispublic: boolean): Promise<Project>
    listProjects(): Promise<Project[]>;
}