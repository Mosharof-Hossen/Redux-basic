import { AddTaskModal } from "../components/module/task/AddTaskModal";
import TaskCard from "../components/module/task/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { tasks, updateFilter } from "../redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

const Tasks = () => {
    const allTasks = useAppSelector(tasks);
    const dispatch = useAppDispatch();
    console.log(allTasks);
    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div className="flex justify-end items-center gap-3">
                <h1 className="mr-auto font-bold">Tasks</h1>
                <Tabs defaultValue="All">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger onClick={()=>dispatch(updateFilter("ALL"))} value="All">All</TabsTrigger>
                        <TabsTrigger onClick={()=>dispatch(updateFilter("High"))} value="High">High</TabsTrigger>
                        <TabsTrigger onClick={()=>dispatch(updateFilter("Medium"))} value="Medium">Medium</TabsTrigger>
                        <TabsTrigger onClick={()=>dispatch(updateFilter("Low"))} value="Low">Low</TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTaskModal></AddTaskModal>
            </div>
            <div className="space-y-5 mt-5">
                {
                    allTasks?.map(task => <TaskCard task={task} key={task.id}></TaskCard>)
                }
            </div>

        </div>
    );
};

export default Tasks;