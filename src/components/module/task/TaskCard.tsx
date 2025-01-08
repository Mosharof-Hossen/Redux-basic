import { cn } from "../../../lib/utils";
import { TTask } from "../../../redux/features/task/task.interface";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";
import { FaRegTrashAlt } from "react-icons/fa";

type IProps = {
    task: TTask
}

const TaskCard = ({ task }: IProps) => {
    return (
        <div className="border px-5 py-3 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className={cn("size-3 rounded-full",{
                        "bg-green-500" : task.priority === "Low",
                        "bg-yellow-500" : task.priority === "Medium",
                        "bg-red-500" : task.priority === "High",
                    })}></div>
                    <h1>{task.title}</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <Button><FaRegTrashAlt /></Button>
                    <Checkbox></Checkbox>
                </div>
            </div>
            <p className="mt-5">{task.description}</p>
        </div>
    );
};

export default TaskCard;