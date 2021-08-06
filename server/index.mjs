import fs from 'fs';
import path from 'path';
import formidable from 'formidable';
import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.post('/fileupload', (req, res) => {
  const form = formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    const newpath = 'C:/Users/Rupesh/' + files.filetoupload.name;
    var oldpath = files.filetoupload.path;

    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
      res.write(`${files.filetoupload.name} File uploaded and moved!`);
      res.end();
    });
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
