import type { ReactNode } from "react";

export const ReportCard: React.FC<{
	amount: number;
	title: string;
	children: ReactNode;
}> = ({ amount, title, children }) => {
	return (
		<div className=' col-span-6 md:col-span-2 rounded-2xl bg-white flex justify-between p-2'>
			<div>
				<h2 className='font-bold text-[28px]'>
					{amount}
				</h2>
				<p className='text-gray-500'>{title}</p>
			</div>
			{children}
		</div>
	);
};
