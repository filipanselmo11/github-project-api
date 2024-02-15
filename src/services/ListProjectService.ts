import { InterfaceProjectRepository } from "../interfaces/InterfaceProjectRepository";


class ListProjectService {

    constructor(private projectRepository: InterfaceProjectRepository) {}

    public async execute() {
        const projects = await this.projectRepository.listProjects();

        return projects;
    }
}

export { ListProjectService };