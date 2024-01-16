import { query, where, collection, getDocs, doc, onSnapshot } from "firebase/firestore";
import { FIRESTORE_DB } from "../../firebase";


const db = FIRESTORE_DB;

const userRef = collection(db, "users");

export const userInfoQuery = async (uid) => {
    try {
        const q = query(userRef, where("uid", "==", uid));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
        if (data.length > 0) {
            return data;
        } else {
            return [];
        }
    } catch (error) {
        console.log(error);
    }
};


export const empInfoQuery = (id, callback) => {
    try {
        const userDocRef = doc(db, `/users/${id}`);
        const unsubscribe = onSnapshot(userDocRef, (docSnapShot) => {
            const data = docSnapShot.exists() ? docSnapShot.data() : null;
            callback(data);
        })
        return unsubscribe;
    } catch (error) {
        console.log(error);
    }
}





