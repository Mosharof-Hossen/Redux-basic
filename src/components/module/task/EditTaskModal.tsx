import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Button } from "../../ui/button"
import {
    Dialog,
    DialogContent,

    DialogDescription,

    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "../../ui/form"
import { Input } from "../../ui/input"
import { Textarea } from "../../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover"
import { cn } from "../../../lib/utils"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "../../ui/calendar"
import { format } from "date-fns"
import { useAppDispatch } from "../../../redux/hook"
import { TTask } from "../../../redux/features/task/task.interface"
import { FaEdit } from "react-icons/fa"
import { updateTask } from "../../../redux/features/task/taskSlice"
import { useState } from "react"

type IProps = {
    task: TTask
}
export function EditTaskModal({ task }: IProps) {
    const [isOpen, setIsOpen] = useState(false);

    const form = useForm({
        defaultValues:task
    })
    const dispatch = useAppDispatch()
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        dispatch(updateTask(data as TTask))
    }
    return (
        <Dialog open = {isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <button onClick={()=>setIsOpen(true)} className="m-0 p-0"><FaEdit></FaEdit></button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Task</DialogTitle>
                </DialogHeader>
                <DialogDescription>Fill up this form to Edit task</DialogDescription>
                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel />
                                    <FormControl>
                                        <Input  placeholder="Title" {...field} value={field.value || ""}></Input>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel />
                                    <FormControl>
                                        <Textarea placeholder="Description" {...field} value={field.value || ""}></Textarea>
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="priority"
                            render={({ field }) => (
                                <FormItem>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a Priority" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="High">High</SelectItem>
                                            <SelectItem value="Medium">Medium</SelectItem>
                                            <SelectItem value="Low">Low</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="dueDate"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        " pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        <span>Due Date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                // disabled={(date) =>
                                                //     date > new Date() || date < new Date("1900-01-01")
                                                // }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>

                                </FormItem>
                            )}
                        />

                        <DialogFooter>
                            <Button onClick={()=>setIsOpen(false)} type="submit" className="mt-5">Save changes</Button>
                        </DialogFooter>
                    </form>

                </Form>

            </DialogContent>
        </Dialog>
    )
}
