import { Project } from "@prisma/client";


export interface InterfaceProjectRepository {
    createProject(title: string, technologie: string, ispublic: boolean, urlimage: string): Promise<Project>
    listProjects(): Promise<Project[]>;
}