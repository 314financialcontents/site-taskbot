// copyCloudflareFiles.js
const fs = require('fs');
const path = require('path');

// Archivos para copiar a dist desde la raíz
const filesToCopy = [
  '_headers',
  '_redirects',
  '_routes.json',
];

console.log('Copiando archivos de configuración para Cloudflare Pages...');

// 1. Copiar archivos de configuración de Cloudflare
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

// 2. Verificar si los nombres de archivo de los assets han cambiado
console.log('Verificando nombres de archivos generados...');

try {
  // Leer el archivo de manifiesto para encontrar los nombres reales de los archivos
  if (fs.existsSync(path.join(__dirname, 'dist', '.vite', 'manifest.json'))) {
    const manifest = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'dist', '.vite', 'manifest.json'), 'utf8')
    );
    
    console.log('✅ Manifiesto encontrado, actualizando index.html con los nombres de archivo correctos');
    
    // Buscar los archivos principales
    let cssFile = '';
    let jsFile = '';
    
    // Extraer nombres de archivos del manifiesto
    Object.keys(manifest).forEach(key => {
      if (key.includes('main.tsx') || key.includes('index.tsx') || key.includes('index.jsx')) {
        if (manifest[key].css && manifest[key].css.length > 0) {
          cssFile = manifest[key].css[0];
        }
        jsFile = manifest[key].file;
      }
    });
    
    console.log(`JS file: ${jsFile || 'No encontrado'}`);
    console.log(`CSS file: ${cssFile || 'No encontrado'}`);
    
    // Si encontramos los archivos, creamos un index.html personalizado
    if (jsFile) {
      let htmlContent = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Taskbot</title>`;
      
      if (cssFile) {
        htmlContent += `\n    <link rel="stylesheet" href="/${cssFile}">`;
      }
      
      htmlContent += `\n    <script type="module" crossorigin src="/${jsFile}"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;
      
      fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), htmlContent);
      console.log('✅ index.html personalizado creado con las referencias correctas a los assets');
    } else {
      console.log('⚠️ No se pudo encontrar el archivo JS principal en el manifiesto');
    }
  } else {
    console.log('⚠️ No se encontró el archivo de manifiesto, se salta la actualización del index.html');
  }
} catch (err) {
  console.error('❌ Error procesando el manifiesto:', err);
}

console.log('¡Proceso completado!');