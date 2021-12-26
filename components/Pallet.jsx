import { useContext, useEffect, useState } from 'react';
import { MaterialContext } from '../contexts/MaterialContext';
import Image from 'next/image';

export default function Pallet() {
	const { pallet } = useContext(MaterialContext);
	const [mats, setMats] = useState([]);

	useEffect(() => {
		setMats(pallet.materials);
	}, [pallet]);

	return (
		<>
			{mats && (
				<ul>
					{mats.map(({ id, thumbnail, layer, name }) => {
						return (
							<li key={id}>
								<Image src={thumbnail} width={180} height={180} />
								{name}
							</li>
						);
					})}
				</ul>
			)}
		</>
	);
}
