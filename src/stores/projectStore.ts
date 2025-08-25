import { defineStore } from 'pinia'
import { projects, type Project } from '../data/projects'

export const useProjectStore = defineStore('projects', {
    state: () => ({
        projectList: projects as Project[],
    }),
    getters: {
        getProjectById: (state) => {
            return (projectId: string) => state.projectList.find(p => p.id === projectId)
        },
    },
})