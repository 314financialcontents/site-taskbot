// copyCloudflareFiles.js
const fs = require('fs');
const path = require('path');

// Archivos para copiar a dist
const filesToCopy = [
  '_headers',
  '_redirects',
  '_routes.json',
];

console.log('Copiando archivos de configuración para Cloudflare Pages...');

filesToCopy.forEach(file => {
  try {
    if (fs.existsSync(path.join(__dirname, file))) {
      fs.copyFileSync(
        path.join(__dirname, file),
        path.join(__dirname, 'dist', file)
      );
      console.log(`✅ Archivo ${file} copiado a /dist`);
    } else {
      console.log(`⚠️ Archivo ${file} no encontrado, se salta.`);
    }
  } catch (err) {
    console.error(`❌ Error copiando ${file}:`, err);
  }
});

console.log('¡Proceso completado!');