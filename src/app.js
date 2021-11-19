import express from "express";
import exphbs, { engine } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from 'morgan';

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.engine(
    '.hbs',
    engine({
        layoutsDir: path.join(app.get("views"), "layouts"),
        partialsDir: path.join(app.get("views"), "partials"),
        extname: '.hbs',
        defaulLayout: "main",
        
    })
);
app.set('view engine', '.hbs');

//middelwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))

// Router
app.use(indexRoutes);

export default app;