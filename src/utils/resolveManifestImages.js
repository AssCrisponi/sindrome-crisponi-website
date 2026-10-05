const baseName = (file) => file.slice(0, file.lastIndexOf('.')) || file;

export function resolveManifestImages(imageModules, manifest) {
  const imageMap = {};
  imageModules.keys().forEach(key => {
    imageMap[key.replace('./', '')] = imageModules(key);
  });

  const resolved = manifest
    .filter(entry => entry.active && imageMap[entry.file])
    .map(entry => ({
      ...entry,
      src: imageMap[entry.file],
      kind: entry.file.toLowerCase().endsWith('.pdf') ? 'pdf' : 'image',
    }));

  const pdfByFile = {};
  const pdfByBaseName = {};
  resolved.forEach(entry => {
    if (entry.kind === 'pdf') {
      pdfByFile[entry.file] = entry;
      pdfByBaseName[baseName(entry.file)] = entry;
    }
  });

  const pairedPdfFiles = new Set();

  const withPairs = resolved.map(entry => {
    if (entry.kind !== 'image') {
      return entry;
    }
    // an explicit `pdf: 'filename.ext'` on the manifest entry wins over basename matching
    const pdfEntry = (entry.pdf && pdfByFile[entry.pdf]) || pdfByBaseName[baseName(entry.file)];
    if (!pdfEntry) {
      return entry;
    }
    pairedPdfFiles.add(pdfEntry.file);
    return { ...entry, pdf: pdfEntry.src };
  });

  return withPairs.filter(entry => entry.kind !== 'pdf' || !pairedPdfFiles.has(entry.file));
}
