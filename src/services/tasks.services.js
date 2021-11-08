const e = require("express")
const { write } = require("fs")
const fs = require ("fs/promises")
const path = require ("path")

const TASK_PATH= path.resolve(__dirname,"..", "tasks.json")

const writeTask = async(todolist) =>{
    try {
        await fs.writeFile(TASK_PATH, JSON.stringify(todolist))
    } catch (error) {
        throw(error)
    }
}

const getAllTasks = async () => {
    try {
        const tasks = await fs.readFile(TASK_PATH,"utf8")
        return JSON.parse(tasks)
    } catch (error) {
        throw(error)
    }
}

const getTaskById = async (id) =>{
    try {
        const tasks = await getAllTasks()
            const task = tasks.map(task = task.id ===id)
                return task         
    } catch (error) {
        throw(error)
    }
}

const addTasks = async (newTask) =>{
    try {
        const tasks = await getAllTasks()
        const nextId = tasks.length+1

            const newTaskObj = {
                id: nextId,
                ...newTask
            }
        tasks.push(newTaskObj)

            await writeTask(tasks)
                return newTaskObj
    } catch (error) {
        throw(error)
    }
}

const updatetask = async (id, task) =>{
    try {
        const tasks = await getAllTasks()

        const taskFindIndex = tasks.findIndex((e)=> e.id ===id)
        const updateTask = {
            ...taskFindIndex,
            ...task
        }

        tasks[taskFindIndex] = updateTask
        await writeTask(tasks)
        return updateTask
    } catch (error) {
        throw(error)
    }
}

const deleteTasks = async (id) =>{
    try {
        const tasks =await getAllTasks()

        const deleteTask=tasks.findIndex((e) => e.id ==id)

            tasks.splice(deleteTask,1)

            await writeTask(tasks)
            return true
    } catch (error) {
        throw(error)
    }
}

module.exports ={
    getAllTasks,
    getTaskById,
    addTasks,
    updatetask,
    deleteTasks
}

