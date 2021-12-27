import { useContext } from 'react';
import { MaterialContext } from '../contexts/MaterialContext';
import Image from 'next/image';

export default function Layer() {
	const { layers } = useContext(MaterialContext);
	return (
		<>
			{layers &&
				Object.values(layers).map((layer,id) => {
					return (
						<div key={id} className='absolute inset-0'>
							<Image src={layer} width={1250} height={885} />
						</div>
					);
				})}
		</>
	);
}
