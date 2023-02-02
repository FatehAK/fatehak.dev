const fs = require('fs').promises;
const matter = require('gray-matter');

(async () => {
  const [, , ...mdFilePaths] = process.argv;

  const handles = mdFilePaths.map(async path => {
    const file = matter.read(path);
    const { data: currentFrontmatter } = file;

    if (!currentFrontmatter.draft) {
      // eslint-disable-next-line no-unused-vars
      const { date, lastMod: _, ...rest } = currentFrontmatter;
      const updatedFrontmatter = {
        date,
        lastMod: new Date().toISOString(),
        ...rest,
      };
      file.data = updatedFrontmatter;
      const updatedFileContent = matter.stringify(file);
      await fs.writeFile(path, updatedFileContent);
    }
  });
  await Promise.all(handles);

  console.log(`Last modified updated:\n`);
  mdFilePaths.forEach(path => console.log(`- ${path.substring(path.lastIndexOf('/') + 1, path.length)}`));
})();
