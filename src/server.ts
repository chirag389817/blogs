import { NODE_ENV, PORT } from '#configs'
import express from 'express'
import path from 'path';
import ejs from 'ejs';
import fs from 'fs';

const app = express()

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), 'views'));
app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/', async (req, res) => {
    console.log("rendering home page");
    const html = await ejs.renderFile(path.join(process.cwd(), 'views', 'index.ejs'), { name: "Chirag" });
    res.send(html);
    if (NODE_ENV === 'production'){
        const outputPath = path.join(process.cwd(), 'public', 'index.html');
        fs.writeFileSync(outputPath, html);
    }
});

app.listen(PORT, () => {
    console.log(`Blogs app listening on port ${PORT}`)
})