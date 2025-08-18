import { PORT } from '#configs'
import express from 'express'
import path from 'path';
import ejs from 'ejs';
import fs from 'fs';

const app = express()

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), 'views'));
app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/', async (req, res) => {
    console.log("rendering.......");
    const html = await ejs.renderFile(path.join(process.cwd(), 'views', 'index.ejs'), { name: "Chirag" });
    const outputPath = path.join(process.cwd(), 'public', 'index.html');
    res.send(html);
    fs.writeFile(outputPath, html, (err) => {
        console.error("Error writing to file:", err);
    })
});

app.listen(PORT, () => {
    console.log(`Blogs app listening on port ${PORT}`)
    console.log(process.cwd());
})