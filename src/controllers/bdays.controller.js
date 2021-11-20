import Bday from '../models/Bday';

export const renderTasks = async (req, res) => {
    const bdays = await Bday.find().lean();
    res.render('index.hbs', { tasks: bdays });
};

export const createTask = async (req, res) => {
    try {
        const task = Bday(req.body);
        await task.save();
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

export const renderBdayEdit = async (req, res) => {
    try {
        const task = await Bday.findById(req.params.id).lean();
        res.render('edit.hbs', {task});
    } catch (error) {
        console.log(error.message);
    }
}

export const editBday = async(req, res) => {
    const {id} = req.params;
    await Bday.findByIdAndUpdate(id, req.body);
    res.redirect("/");
}

export const deleteBday = async(req, res) => {
    const {id} = req.params;
    await Bday.findByIdAndDelete(id);
    res.redirect("/");
}

export const bdayToggleDone = async(req, res) => {
    const {id} = req.params;
    const task = await Bday.findById(id);
    task.done = !task.done;
    await task.save();
    res.redirect('/');
}