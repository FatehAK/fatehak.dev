const fs = require('fs').promises;
const matter = require('gray-matter');

(async () => {
  const [, , ...mdFilePaths] = process.argv;

  const modifiedDate = new Date().toISOString();

  const handles = mdFilePaths.map(async path => {
    const file = matter.read(path);
    const { data: currentFrontmatter } = file;

    if (!currentFrontmatter.draft) {
      // eslint-disable-next-line no-unused-vars
      const { date, lastMod: _, ...rest } = currentFrontmatter;
      const updatedFrontmatter = {
        date,
        lastMod: modifiedDate,
        ...rest,
      };
      file.data = updatedFrontmatter;
      const updatedFileContent = matter.stringify(file);
      await fs.writeFile(path, updatedFileContent);
    }
  });
  await Promise.all(handles);
})();
