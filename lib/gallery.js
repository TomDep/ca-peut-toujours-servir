import { statSync, readdirSync } from 'fs';
import path from 'path';

const galleryDirectory = path.join(process.cwd(), '/public/galerie');

export function getAllProjects() {
    
    const projects = readdirSync(galleryDirectory).filter(file => statSync(path.join(galleryDirectory, file))
                                                   .isDirectory())
    return projects;
}

export function getAllImages(directory) {
    let images = readdirSync(path.join(galleryDirectory, directory));

    // Remove anything after the point (.png, .jpg, ...)
    return images.map(image => image.split('.')[0])
}

export function getProjectImages(projectId) {
    // Get the path of the directory
    const fullpath = path.join(galleryDirectory, projectId);

    const images = readdirSync(fullpath);
    return images;
}