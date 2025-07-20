import bubble from '../../assets/bubble.svg'
import { Link } from 'react-router-dom';

export const Gethelp = () => {
    return (
        <Link to='/dashboard' id='gethelp' className='flex font-[900px] rounded-4xl  bg-orange-400 absolute bottom-[100px] right-[100px] w-fit p-3 gap-4'>
         Get Help <img src={bubble} alt='bubble'/>
        </Link>
    );
};
