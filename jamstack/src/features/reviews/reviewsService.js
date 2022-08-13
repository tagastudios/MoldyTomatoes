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

// Create new review
const createReview = async (
	{ description, rating, createdBy, movieId },
	token
) => {
	try {
		const docRef = await addDoc(collection(db, "reviews"), {
			description,
			rating,
			createdBy,
			movieId,
		});
		return docRef;
	} catch (e) {
		console.error("Error adding document: ", e);
	}
};

// Get reviews by movieId
const getReview = async (movieId, token) => {
	const q = query(collection(db, "reviews"), where("movieId", "==", movieId));

	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((doc) => {
		return { ...doc.data(), id: doc.id };
	});
};

// Delete review
const deleteReview = async (reviewId, token) => {
	await deleteDoc(doc(db, "reviews", reviewId));
};

const reviewsService = {
	createReview,
	getReview,
	deleteReview,
};

export default reviewsService;
