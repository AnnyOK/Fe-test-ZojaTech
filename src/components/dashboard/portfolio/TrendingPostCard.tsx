import React from 'react';
import comments from '../../../assets/comment.svg'
import sharimg from '../../../assets/share.svg'
const TrendingPostCard:React.FC<{title:string,body:string,likes:number,comment:number,share:number}> = ({title,body,likes,comment,share}) => {
    return (
        <div className='col-span-6 md:col-span-3 rounded-2xl shadow-sm border border-gray-50 p-4 leading-10'>
           <h2 className='font-bold text-xl'>{title}</h2> 
           <p className='text-gray-600 text-sm'>{body}</p>
           <div className='flex justify-items-start gap-4 text-[13px]'>
           <p className='flex gap-1'><img src={comments} alt='' width={15}/>{likes}</p>
           <p className='flex gap-1'><img src={comments} alt='' width={15}/>{comment}</p>
           <p className='flex gap-1'><img src={sharimg} alt='' width={15}/>{share}</p>
           </div>
        </div>
    );
};

export default TrendingPostCard;