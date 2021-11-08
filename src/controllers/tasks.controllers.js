const {
    getAllTasks,
    getTaskById,
    addTasks,
    updatetask,
    deleteTasks
} = require ("../services/tasks.services")

const getTasksctrl = async (req, res, next) =>{
    try {
        const tasks = await getAllTasks()
        res.json(tasks)
        res.status(200).json(tasks)
    } catch (error) {
        next(error)
    }
}

const getTaskByIdCtrl= async(req, res, next) =>{
    const id = Number(req.params.id)
    
    try {
        const task = await getTaskById(id)
        res.json(task)
        res.status(200).json(task)
    } catch (error) {
        next(error)
    }
}

const postTaskCtrl= async (req, res, next)=>{
    const {title, description,due_date,created_at,completed} = req.body

    try {
        const newTask={
            title,
            description,
            due_date,
            created_at,
            completed
        }

        const response = await addTasks(newTask)
        res.status(201).json(response)
    } catch (error) {
        next(error)
    }
}

const putTaskCtrl= async(req, res, next) =>{
    const {id} = req.params

    try {
        const task = req.body
        await updatetask(parseInt(id,10), task)
        res.status(204).json() 
    } catch (error) {
        next(error)
    }
}

const deleteTaskCtrl = async (req, res, next) => {
    const {id} = req.params
    try {
        await deleteTasks(parseInt(id,10))
        res.status(204).json()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getTasksctrl,
    getTaskById,
    postTaskCtrl,
    putTaskCtrl,
    deleteTaskCtrl
}