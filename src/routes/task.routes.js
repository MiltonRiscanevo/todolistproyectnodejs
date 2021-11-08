const {Router} = require("express")
const {
    getTasksctrl,
    getTaskById,
    postTaskCtrl,
    putTaskCtrl,
    deleteTaskCtrl
} = require("../controllers/tasks.controllers")

const router = Router()



router.get("/tasks",getTasksctrl)
router.get("/tasks/:id",getTaskById)
router.post("/tasks",postTaskCtrl)
router.put("/tasks/:id",putTaskCtrl)
router.delete("/tasks/:id",deleteTaskCtrl)


module.exports = router