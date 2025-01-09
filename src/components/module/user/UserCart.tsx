import { FaTrash } from 'react-icons/fa';
import { TUser } from '../../../redux/features/user/user.interface';

type IProps = {
    user: TUser
}

const UserCart = ({ user }: IProps) => {
    const { name, } = user
    return (
        <div className='flex justify-between p-5 items-center w-full border-2 rounded-sm border-blue-500'>
                <h1>{name}</h1>
                <FaTrash className='text-red-500 cursor-pointer'></FaTrash>
        </div>
    );
};

export default UserCart;