import Header from '../components/dashboard/Header';
import model from '../assets/model.png';
import edit from '../assets/edit.svg';
import search from '../assets/search.svg';
import bell from '../assets/gray_bell.svg';
import gray from '../assets/search-gray.svg';
import favorite from '../assets/favorite.svg';
import { format, isToday, isYesterday, differenceInCalendarDays, differenceInWeeks, differenceInMonths, differenceInYears, parseISO } from 'date-fns';
import { useCallback, useEffect, useState } from 'react';
import { charts, messagelisrt } from '../helpers/mock';
import SendNewMessage from '../components/SendNewMessage';

interface ChatItem {
    sender: string;
    message: string;
    timestamp: string; // ISO string
}
const getDayLabel = (date: Date): string => {
    if (isToday(date)) return "Today";
    if (isYesterday(date)) return "Yesterday";

    const daysDiff = differenceInCalendarDays(new Date(), date);
    const weeksDiff = differenceInWeeks(new Date(), date);
    const monthsDiff = differenceInMonths(new Date(), date);
    const yearsDiff = differenceInYears(new Date(), date);

    if (daysDiff < 7) return format(date, 'EEEE'); // Mon, Tue, etc.
    if (weeksDiff < 4) return `${weeksDiff} week${weeksDiff > 1 ? 's' : ''} ago`;
    if (monthsDiff < 12) return `${monthsDiff} month${monthsDiff > 1 ? 's' : ''} ago`;
    return `${yearsDiff} year${yearsDiff > 1 ? 's' : ''} ago`;
};
const Messages = () => {
    const [activeMessage, setActiveMessage] = useState(-1);
    const [conversation, setConversation] = useState<any>({});
    const handleSelect = useCallback((idx: number) => {
        setActiveMessage(idx);
    }, []);
    useEffect(() => {
        if (activeMessage > -1) {
            setConversation(messagelisrt[activeMessage]);
        }
    }, [activeMessage]);
    const groupedChats = charts
        .slice()
        .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
        .reduce((acc: Record<string, ChatItem[]>, item) => {
            const date = parseISO(item.timestamp);
            const label = getDayLabel(date);
            if (!acc[label]) acc[label] = [];
            acc[label].push(item);
            return acc;
        }, {});
    return (
        <div className='flex-1 w-full min-h-full h-fit bg-slate-100 text-black'>
            <Header title={'Messages'} />
            <section className='grid grid-cols-7 gap-4 p-8 bg-white rounded-2xl mx-8'>
                <aside className='col-span-2 flex flex-col bg-gray-100 rounded-2xl'>
                    <div className='flex relative p-2 gap-2'>
                        <div className='w-10 h-10  mb-3'>
                            <img
                                src={model}
                                alt=''
                                className='rounded-full w-full h-full border border-gray-300 object-cover'
                            />
                        </div>
                        <div>
                            <h2 className='font-bold text-orange-400'>
                                David Peters
                            </h2>
                            <p className='font-bold text-[13px] text-gray-700'>
                                {' '}
                                Senior Developer
                            </p>
                        </div>
                        <img
                            src={edit}
                            alt=''
                            className='absolute right-4 top-4'
                        />
                    </div>
                    <label
                        htmlFor='search'
                        className='relative flex'
                    >
                        <img
                            src={search}
                            alt=''
                            className='absolute top-6 left-8 '
                        />
                        <input
                            type='search'
                            placeholder='Search'
                            className='border min-w-[100px] maw-full focus:border-none border-gray-200 focus:outline-none focus:ring-1 bg-white focus:ring-orange-500 text-black rounded-full pl-[50px] py-2 flex-1 m-4'
                        />
                    </label>
                    <hr className='text-gray-400' />
                    <div className='max-h-[60vh] overflow-y-auto'>
                        {messagelisrt.map(
                            (item, idx) => (
                                <MessageListItem
                                    handleSelect={
                                        handleSelect
                                    }
                                    key={
                                        idx
                                    }
                                    name={
                                        item.name
                                    }
                                    message={
                                        item.message
                                    }
                                    activeMessage={
                                        activeMessage
                                    }
                                    idx={
                                        idx
                                    }
                                    model={
                                        item.model
                                    }
                                    time={
                                        item.time
                                    }
                                    messageCount={
                                        item.messageCount
                                    }
                                />
                            )
                        )}
                    </div>
                </aside>
                <main className='col-span-5  bg-gray-100 rounded-2xl p-10'>
                    {Object.keys(conversation).length > 0 ? (<><div className='flex  col-span-6 h-20 justify-between p-3 gap-4'>
                        <div className='flex  flex-1 justify-items-start items-center '>
                            <div className='w-12 h-12  mb-3'>
                                <img
                                    src={
                                        conversation.model
                                    }
                                    alt=''
                                    className='rounded-full w-full h-full border border-gray-300 object-cover'
                                />
                            </div>
                            <h2 className='font-bold '>
                                {
                                    conversation.name
                                }
                            </h2>
                        </div>
                        <img
                            src={gray}
                            alt=''
                            className='  p-3'
                        />
                        <img
                            src={favorite}
                            alt=''
                            className='p-3'
                        />
                        <img
                            src={bell}
                            alt=''
                            className='p-3'
                        />
                    </div>
                        <hr className='col-span-6 text-gray-300' />
                        <div className='max-h-[50vh] overflow-y-auto'>
                            {Object.entries(groupedChats).map(([label, messages]) => (
                                <div key={label} className='flex flex-col py-4'>
                                    <div className="text-center text-sm text-gray-300 mb-2 items-center flex gap-4 "><hr className='flex-1' />{label}<hr className='flex-1' /></div>
                                    {messages.map((item, idx) => (
                                        <ChatMessage
                                            key={idx}
                                            sender={item.sender}
                                            message={item.message}
                                            time={item.timestamp}
                                            conversation={conversation}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                        <SendNewMessage />
                    </>) : <div> Select a conversation to start</div>}

                </main>
            </section>
        </div>
    );
};

export default Messages;
const MessageListItem: React.FC<{
    name: string;
    message: string;
    model: string;
    time: string;
    messageCount: number;
    activeMessage: number;
    idx: number;
    handleSelect: (idx: number) => void;
}> = ({
    name,
    message,
    model,
    time,
    messageCount,
    activeMessage,
    idx,
    handleSelect,
}) => {
        return (
            <div
                className={`${activeMessage === idx
                    ? 'shadow-md bg-white'
                    : ''
                    } flex justify-between m-3 p-2 rounded-2xl`}
                onClick={() => handleSelect(idx)}
            >
                <div className='flex gap-2'>
                    <div className='w-12 h-12  mb-3'>
                        <img
                            src={model}
                            alt=''
                            className='rounded-full w-full h-full border border-gray-300 object-cover'
                        />
                    </div>
                    <div>
                        <h2 className='font-bold text-orange-400'>
                            {name}
                        </h2>
                        <p className=' text-[13px] text-gray-700 max-w-[250px]'>
                            {message}
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-end p-2 '>
                    <p className='text-[13px] text-gray-500'>
                        {time}
                    </p>
                    {messageCount > 0 && (
                        <p className='text-white bg-orange-400 rounded-full w-4 h-4 text-center text-[11px]'>
                            {messageCount > 0 ? (
                                <span>{messageCount}</span>
                            ) : (
                                ''
                            )}
                        </p>
                    )}
                </div>
            </div>
        );
    };
const ChatMessage: React.FC<{ sender: string, message: string, time: string, conversation: any }> = ({ sender, message, time, conversation }) => {
    const me = {
        name: 'Jamie Taylor',
        message: 'The documentation for this library is very comprehensive and easy to understand',
        model,
        time: '10:25',
        messageCount: Math.floor(Math.random() * 10),
    };
    console.log(time)
    return <div className={`${me.name === sender ? "self-end " : "self-start "}flex items-end max-w-[400px] min-w-[200px] gap-2`}>
        {me.name !== sender && <div className='min-w-[30px] min-h-[30px] w-6 h-6  mb-3'>
            <img
                src={
                    conversation.model
                }
                alt=''
                className='rounded-full w-full h-full border border-gray-300 object-cover'
            />
        </div>}
        <p className={`${me.name === sender ? "text-orange-400 rounded-tl-lg rounded-tr-lg rounded-bl-lg" : "text-gray-600 rounded-tl-lg rounded-tr-lg rounded-br-lg"} bg-gray-200 p-2`}>{message}</p>
        {me.name === sender && <div className='min-w-[30px] min-h-[30px] w-6 h-6  mb-3'>
            <img
                src={
                    me.model
                }
                alt=''
                className='rounded-full w-full h-full border border-gray-300 object-cover'
            />
        </div>}


    </div>
}
