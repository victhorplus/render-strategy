import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;

const csr_react_dist = join(__dirname, '..', 'csr-angular', 'dist', 'csr-angular', 'browser');

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.use('/csr-angular', express.static(csr_react_dist));

app.get('/csr-angular/*path', (req, res) => {
  res.sendFile(join(csr_react_dist, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
