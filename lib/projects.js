import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import { remark } from 'remark';
import html from 'remark-html';
import remarkImages from 'remark-images';
import { cwd } from 'process';
import remarkDirective from 'remark-directive';

const projectsDirectory = path.join(process.cwd(), 'projects');
const projectsPropertiesFile = path.join(process.cwd(), 'projects.json');

export function getProjectsProperties() {
    const fileContent = fs.readFileSync(projectsPropertiesFile);
    return JSON.parse(fileContent).projects;
}

function getProjectProperties(id) {
    const fileContent = fs.readFileSync(projectsPropertiesFile);
    const projectsProperties = JSON.parse(fileContent).projects;

    let project = {};
    (projectsProperties).forEach(p => {
        if(p.id == id) {
            project = p;
        }
    });

    return project;
}

export function getProjectsNames() {
    // Get projects properties
    const properties = getProjectsProperties();

    return properties.map((property) => property.name);
}

export function getProjectsIds() {
    // Get projects properties
    const properties = getProjectsProperties();
    return properties.map((property) => property.id);
}

export function getAllProjects() {
    // Get the filenames
    const filenames = fs.readdirSync(projectsDirectory);

    // Return the data included in each project file descriptor and the id of each files
    return filenames.map((filename) => {
        // Get the fullpath for each file
        const fullpath = path.join(projectsDirectory, filename);
        // Read the content of the file
        const fileContents = fs.readFileSync(fullpath, 'utf-8');
        // Get the metadata
        const matterResult = matter(fileContents);
        // Get the id
        const id = filename.replace(/\.md$/, '');

        return {
            id: id,
            ...matterResult.data
        }
    })
}

export async function getProjectData(id) {

    const properties = getProjectProperties(id);

    // Combine the data with the id
    return {
        id,
        ...properties
    };
}
