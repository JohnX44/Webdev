import express from 'express';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';
import { fileURLToPath } from 'url';
const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set the view engine to EJS
app.set('view engine', 'ejs');
// Update the views path to use path.join
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    console.log("Accessing home route");
    res.render('home', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/ourwork', (req, res) => {
    res.render('ourwork', { title: 'Our Work' });
});

app.get('/services', (req, res) => {
    res.render('services', { title: 'Services' });
});

app.get('/careers', (req, res) => {
    res.render('careers', { title: 'Careers' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
// Trigger redeployment
