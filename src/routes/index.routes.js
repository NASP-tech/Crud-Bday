import { Router } from "express";

import {
    renderTasks,
    createTask,
    renderBdayEdit,
    editBday,
    deleteBday,
    bdayToggleDone,
} from "../controllers/bdays.controller";

const router = Router();

router.get("/", renderTasks);
router.post("/tasks/add", createTask);

router.get("/bdays/:id/toggleDone", bdayToggleDone);

router.get("/bdays/:id/edit", renderBdayEdit);

router.post("/bdays/:id/edit", editBday);

router.get("/bdays/:id/delete", deleteBday);



export default router;
