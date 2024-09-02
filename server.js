import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir los archivos estáticos del frontend
app.use(express.static(path.join(__dirname, 'dist')));

// Cualquier ruta no manejada por el frontend la manejamos aquí
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Escuchar en el puerto configurado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
