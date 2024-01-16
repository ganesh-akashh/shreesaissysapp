import { query, where, collection, getDocs } from "firebase/firestore";
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
