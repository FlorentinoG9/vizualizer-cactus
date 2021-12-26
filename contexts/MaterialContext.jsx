import { createContext, useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import db from '../firebase/config';

export const MaterialContext = createContext();

export default function MaterialProvider({ children }) {
	const [points, setPoints] = useState([]);
	const [materials, setMaterials] = useState([]);

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
		<MaterialContext.Provider value={{ points, materials }}>
			{children}
		</MaterialContext.Provider>
	);
}
