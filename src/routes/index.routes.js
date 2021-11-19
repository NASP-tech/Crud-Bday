import {Router} from 'express'
import Bday from '../models/Bday'

const router = Router()

router.get("/", (req, res) => {
    res.render('index.hbs')
});
router.post('/tasks/add', async (req, res) => {
    const task = Bday(req.body)
    await task.save()
    res.redirect('/')
});

router.get("/about", (req, res) => {
    res.render('about.hbs')
});

router.get("/edit", (req, res) => {
    res.render('edit.hbs')
});

export default router;