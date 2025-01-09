import { AddTaskModal } from "../components/module/task/AddTaskModal";
import TaskCard from "../components/module/task/TaskCard";
import { tasks } from "../redux/features/task/taskSlice";
import { useAppSelector } from "../redux/hook";

const Tasks = () => {
    const allTasks = useAppSelector(tasks);
    console.log(allTasks);
    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div className="flex justify-between items-center">
                <h1>Tasks</h1>
                <AddTaskModal></AddTaskModal>
            </div>
            <div className="space-y-5 mt-5">
                {
                    allTasks?.map(task => <TaskCard task= {task} key={task.id}></TaskCard>)
                }
            </div>
            
        </div>
    );
};

export default Tasks;