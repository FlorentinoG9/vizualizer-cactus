import { useContext, useState } from 'react';
import { MaterialContext } from '../contexts/MaterialContext';
import Modal from './Modal';

export default function Tags() {
	const { points, selectPallet } = useContext(MaterialContext);
	const [isOpen, setIsOpen] = useState(false);

	const closeModal = () => setIsOpen(false);
	const openModal = () => setIsOpen(true);

	return (
		<>
			{/* <button className='absolute top-[90%] left-[16%] bg-black/30 rounded-full p-3 border-2'></button>
		<button className='absolute top-[34%] left-[73%] bg-black/30 rounded-full p-3 border-2'></button> */}

			{points.map(({ id, coordX, coordY }) => {
				return (
					<button
						onClick={() => {
							selectPallet(id)
							setIsOpen(!isOpen)
						}}
						key={id}
						className={`absolute z-20 top-[${coordY}%] left-[${coordX}%] bg-black/30 rounded-full p-1 ${isOpen ? 'hidden' : ''}`}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='md:h-10 md:w-10 h-6 w-6 border  md:border-2 rounded-full p-1 text-white'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4'
							/>
						</svg>
					</button>
				);
			})}

			<Modal isOpen={isOpen} closeModal={closeModal} openModal={openModal} />
		</>
	);
}
