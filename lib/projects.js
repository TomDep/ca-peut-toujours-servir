import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import { remark } from 'remark';
import html from 'remark-html';
import remarkImages from 'remark-images';

const projectsDirectory = path.join(process.cwd(), 'projects');

export function getSortedProjectsData() {
    // Get file names under /projects
    const fileNames = fs.readdirSync(projectsDirectory);
    const allProjectsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });

    // Sort projects by date
    return allProjectsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
}

export function getProjectsIds() {
    const fileNames = fs.readdirSync(projectsDirectory);

    return fileNames.map((filename) => {
        return filename.replace(/\.md$/, '')
    });
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
    const fullPath = path.join(projectsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(remarkGfm)
        .use(html)
        .use(remarkImages)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}
