import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const locationsDirectory = path.join(process.cwd(), 'src/content/locations');

export type LocationData = {
  slug: string;
  title: string;
  date: string;
  content: string;
};

export function getAllLocationSlugs() {
  if (!fs.existsSync(locationsDirectory)) return [];
  const fileNames = fs.readdirSync(locationsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getLocationData(slug: string): LocationData | null {
  const fullPath = path.join(locationsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    content: matterResult.content,
  };
}

export function getAllLocations(): Omit<LocationData, 'content'>[] {
  if (!fs.existsSync(locationsDirectory)) return [];
  
  const fileNames = fs.readdirSync(locationsDirectory);
  const allLocationsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(locationsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
    };
  });

  return allLocationsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
