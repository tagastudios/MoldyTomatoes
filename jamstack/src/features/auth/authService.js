import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
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

// Register user and create a user collection
const register = ({ email, password, firstName, lastName }) => {
	const auth = getAuth();
	return createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			localStorage.setItem("user", JSON.stringify(user));
			return user;
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			return errorCode + " " + errorMessage;
			// ..
		});
};

// Login user
const login = async ({ email, password }) => {
	const auth = getAuth();
	return signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			localStorage.setItem("user", JSON.stringify(user));
			return user;
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			return errorCode + " " + errorMessage;
		});
};

// Logout user
const logout = () => {
	const auth = getAuth();
	return signOut(auth)
		.then(() => {
			// Sign-out successful.
			localStorage.removeItem("user");
		})
		.catch((error) => {
			// An error happened.
		});
};

// Create new user
const createUser = async ({ uid, email, firstName, lastName }) => {
	try {
		const docRef = await addDoc(collection(db, "users"), {
			uid,
			email,
			firstName,
			lastName,
		});
		return docRef;
	} catch (e) {
		return e;
	}
};

// Get user by uid
const getUserByUID = async (uid) => {
	const q = query(collection(db, "users"), where("uid", "==", uid));

	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map((doc) => {
		return doc.data();
	});
};

const authService = {
	register,
	logout,
	login,
};

export default authService;
