import { InterfaceProjectRepository } from "../interfaces/InterfaceProjectRepository";


class CreateProjectService {

    constructor(private projectRepository: InterfaceProjectRepository) {}

    public async execute(title: string, technologie: string, ispublic: boolean) {
        const project = await this.projectRepository.createProject(title, technologie, ispublic);

        return project;
    }
}

export { CreateProjectService };