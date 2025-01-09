import { cn } from "../../../lib/utils";
import { TTask } from "../../../redux/features/task/task.interface";
import { deleteTask, toggleCompleteState } from "../../../redux/features/task/taskSlice";
import { useAppDispatch } from "../../../redux/hook";
import { Checkbox } from "../../ui/checkbox";
import {  FaRegTrashAlt } from "react-icons/fa";
import { EditTaskModal } from "./EditTaskModal";

type IProps = {
    task: TTask
}

const TaskCard = ({ task }: IProps) => {
    const dispatch = useAppDispatch();
    return (
        <div className="border px-5 py-3 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className={cn("size-3 rounded-full", {
                        "bg-green-500": task.priority === "Low",
                        "bg-yellow-500": task.priority === "Medium",
                        "bg-red-500": task.priority === "High",
                    })}></div>
                    <h1 className={cn({ "line-through": task.isCompleted })}>{task.title}</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <EditTaskModal key={task.id} task = {task}></EditTaskModal>
                    <FaRegTrashAlt className="cursor-pointer" onClick={() => dispatch(deleteTask(task.id))} />
                    <Checkbox checked={task.isCompleted} onClick={() => dispatch(toggleCompleteState(task.id))}></Checkbox>
                </div>
            </div>
            <p className="mt-5">{task.description}</p>
        </div>
    );
};

export default TaskCard;