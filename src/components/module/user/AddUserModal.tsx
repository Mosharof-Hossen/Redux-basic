import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../ui/dialog"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { Form, FormControl, FormField, FormItem } from "../../ui/form"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { useAppDispatch } from "../../../redux/hook"
import { addUser } from "../../../redux/features/user/userSlice"
import { TUser } from "../../../redux/features/user/user.interface"

export function AddUserModal() {
    const form = useForm();
    const dispatch = useAppDispatch();
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        dispatch(addUser(data as TUser))
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add User</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add User</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Place a user name and create a user.
                </DialogDescription>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="User Name" {...field} value={field.value || ""} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </form>
                </Form>

            </DialogContent>
        </Dialog>
    )
}
