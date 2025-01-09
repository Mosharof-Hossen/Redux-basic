import { AddUserModal } from "../components/module/user/AddUserModal";
import { userList } from "../redux/features/user/userSlice";
import { useAppSelector } from "../redux/hook";

const Users = () => {
    const users = useAppSelector(userList)
    console.log(users);
    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div className="flex justify-between">
                <h1>Users</h1>
                <AddUserModal></AddUserModal>
            </div>
        </div>
    );
};

export default Users;