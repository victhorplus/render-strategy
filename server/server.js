import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;

const CSR_DIST = join(__dirname, '..', 'CSR-angular', 'dist', 'CSR-angular', 'browser');

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.use('/csr-angular', express.static(CSR_DIST));

app.get('/csr-angular/*path', (req, res) => {
  res.sendFile(join(CSR_DIST, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
