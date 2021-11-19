import { Router } from 'express';
import Bday from '../models/Bday';

const router = Router();

router.get("/", async (req, res) => {
    const bdays = await Bday.find().lean();

    res.render('index.hbs', { tasks: bdays });
});
router.post('/tasks/add', async (req, res) => {
    try {
        const task = Bday(req.body);
        await task.save();
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
});

router.get("/about", (req, res) => {
    res.render('about.hbs');
});

router.get("/edit/:id", async (req, res) => {
    try {
        const task = await Bday.findById(req.params.id).lean();
        res.render('edit.hbs', {task});
    } catch (error) {
        console.log(error.message);
    }
});

router.post('/edit/:id', async(req, res) => {
    const {id} = req.params;
    await Bday.findByIdAndUpdate(id, req.body);
    res.redirect("/");
});

router.get('/delete/:id', async(req, res) => {
    const {id} = req.params;
    await Bday.findByIdAndDelete(id);
    res.redirect("/");
});

router.get('/toggleDone/:id', async(req, res) => {
    const {id} = req.params;
    const task = await Bday.findById(id);
    task.done = !task.done;
    await task.save();
    res.redirect('/');
})

export default router;