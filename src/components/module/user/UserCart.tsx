import { FaTrash } from 'react-icons/fa';
import { TUser } from '../../../redux/features/user/user.interface';
import { useAppDispatch } from '../../../redux/hook';
import { deleteUser } from '../../../redux/features/user/userSlice';

type IProps = {
    user: TUser
}

const UserCart = ({ user }: IProps) => {
    const { name, id } = user;
    const dispatch = useAppDispatch()
    return (
        <div className='flex justify-between p-5 items-center w-full border-2 rounded-sm border-blue-500'>
            <h1>{name}</h1>
            <FaTrash onClick={() => dispatch(deleteUser(id))} className='text-red-500 cursor-pointer'></FaTrash>
        </div>
    );
};

export default UserCart;