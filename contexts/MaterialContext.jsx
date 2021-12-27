import { createContext, useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import db from '../firebase/config';

export const MaterialContext = createContext();

export default function MaterialProvider({ children }) {
	const [points, setPoints] = useState([]);
	const [materials, setMaterials] = useState([]);
	const [pallet, setPallet] = useState([]);
	const [layers, setLayers] = useState({});

	const selectPallet = (id) => {
		const mats = materials.filter((mat) => mat.id != id);
		setPallet(mats);
	};

	const addLayer = (layer) => {
		const id = pallet[0].id;

		setLayers((prev) => ({ ...prev, [id]: layer }));
	};

	useEffect(() => {
		const ptsRef = collection(db, 'points');
		const matsRef = collection(db, 'materials');

		onSnapshot(ptsRef, (snap) => {
			setPoints(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		});

		onSnapshot(matsRef, (snap) => {
			setMaterials(snap.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		});
	}, []);

	return (
		<MaterialContext.Provider
			value={{ points, materials, pallet, layers, selectPallet, addLayer }}
		>
			{children}
		</MaterialContext.Provider>
	);
}
