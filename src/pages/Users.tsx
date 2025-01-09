import { AddUserModal } from "../components/module/user/AddUserModal";
import UserCart from "../components/module/user/UserCart";
import { TUser } from "../redux/features/user/user.interface";
import { userList } from "../redux/features/user/userSlice";
import { useAppSelector } from "../redux/hook";

const Users = () => {
    const users = useAppSelector(userList)
    console.log(users);
    return (
        <div className="mx-auto max-w-7xl px-5 mt-20">
            <div className="flex justify-between mb-5">
                <h1 className="font-bold">Users</h1>
                <AddUserModal></AddUserModal>
            </div>
            <div className="grid md:grid-cols-3 gap-3 grid-cols-2">
                {
                    users.map((user: TUser) => <UserCart  user={user} key={user.id}></UserCart>)
                }
            </div>
        </div>
    );
};

export default Users;