import { useContext } from 'react';
import { MaterialContext } from '../contexts/MaterialContext';

export default function Tags() {
	const { points, selectPallet } = useContext(MaterialContext);

	return (
		<>
		{/* <button className='absolute top-[90%] left-[16%] bg-black/30 rounded-full p-3 border-2'></button>
		<button className='absolute top-[34%] left-[73%] bg-black/30 rounded-full p-3 border-2'></button> */}
			{points.map(({ id, coordX, coordY }) => {
				return (
					<button
						onClick={()=> selectPallet(id)}
						key={id}
						className={`absolute top-[${coordY}%] left-[${coordX}%] bg-black/30 rounded-full p-3 border-2`}
					></button>
				);
			})}
			
		</>
	);
}
