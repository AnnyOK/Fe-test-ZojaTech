import React from 'react';
import { format, isToday, isYesterday, differenceInCalendarDays, differenceInWeeks, differenceInMonths, differenceInYears, parseISO } from 'date-fns';

interface ChatItem {
  sender: string;
  message: string;
  timestamp: string; // ISO string
}

interface Props {
  charts: ChatItem[];
  conversation: any; // adjust to your actual type
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

const ChatList: React.FC<Props> = ({ charts, conversation }) => {
  // Group by formatted date label
  const groupedChats = charts
    .slice()
    .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
    .reduce((acc: Record<string, ChatItem[]>, item) => {
      const date = parseISO(item.timestamp);
      const label = getDayLabel(date);
      if (!acc[label]) acc[label] = [];
      acc[label].push(item);
      return acc;
    }, {});

  return (
    <div className="flex flex-col py-4 space-y-6">
      {Object.entries(groupedChats).map(([label, messages]) => (
        <div key={label}>
          <div className="text-center text-sm text-gray-500 mb-2">{label}</div>
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
  );
};

export default ChatList;
