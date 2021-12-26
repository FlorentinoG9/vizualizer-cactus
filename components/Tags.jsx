import { useContext } from 'react';
import { MaterialContext } from '../contexts/MaterialContext';

// 0: x-73 y-34
// 1: x-16 y-90

export default function Tags() {
	const { points } = useContext(MaterialContext);
	return (
		<>
			{points.map(({id, coordX, coordY}) => {
				return (
					<button key={id} className={`absolute top-[${coordY}%] left-[${coordX}%] bg-black/30 rounded-full p-3 border-2`}></button>
				);
			})}
			{/* <button className='absolute top-[34%] left-[73%] bg-black/30 rounded-full p-3 border-2'></button> */}
		</>
	);
}
