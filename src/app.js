import express from "express";
import exphbs, { engine } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";

const app = express();

app.set('views', path.join(__dirname, 'views'));

app.engine(
    '.hbs',
    engine({
        layoutsDir: path.join(app.get("views"), "layouts"),
        extname: '.hbs',
        defaulLayout: "main",
        
    })
);
app.set('view engine', '.hbs');




// Router
app.use(indexRoutes);

export default app;