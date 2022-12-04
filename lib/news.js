import path from 'path';
import fs from 'fs';

export function getNews() {
    const fullpath = path.join(process.cwd(), 'news.json');
    const data = fs.readFileSync(fullpath);
    const jsonData = JSON.parse(data);

    return {news : jsonData.news, past : jsonData.past};
}