import { db } from "../../configs/firebase";
import {
	collection,
	doc,
	addDoc,
	getDoc,
	deleteDoc,
	query,
	where,
	getDocs,
} from "firebase/firestore";

// Create new movie
const createMovie = async (
	{ title, rating, description, createdBy },
	token
) => {
	try {
		const docRef = await addDoc(collection(db, "movies"), {
			title,
			createdBy,
		});
		console.log("Document written with ID: ", docRef.id);
		return docRef;
	} catch (e) {
		console.error("Error adding document: ", e);
	}
};

// Get user goals
const getMovie = async () => {
	const querySnapshot = await getDocs(collection(db, "movies"));
	return querySnapshot.docs.map((doc) => {
		// doc.data() is never undefined for query doc snapshots
		return { ...doc.data(), id: doc.id };
	});
};

// Delete user goal
const deleteMovie = async (movieId, token) => {
	await deleteDoc(doc(db, "movies", movieId));
};

const moviesService = {
	createMovie,
	getMovie,
	deleteMovie,
};

export default moviesService;
