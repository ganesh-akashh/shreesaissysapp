import { query, where, collection, getDocs, doc, onSnapshot ,orderBy,limit } from "firebase/firestore";
import { FIRESTORE_DB } from "../../firebase";


const db = FIRESTORE_DB;

const userRef = collection(db, "users");

const taskRef=collection(db,"tasks")

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


export const empInfoQuery =  (id, callback) => {
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



export const performanceQuery = (callback) => {
    try {
        const q = query(userRef, where("role", "==", "employee"), orderBy("points", "desc"), limit(6));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const data = querySnapshot.docs?.map((user) => ({
                ...user.data(),
                id: user.id
            }));
            callback(data);
        });

        return unsubscribe;
    } catch (error) {
        console.log(error);
    }
};

export const empCompletedTaskQuery = (id, callback) => {
  try {
    const unsubscribe = completedTaskQuery((tasks) => {
      const currTasks = tasks.filter(
        (task) =>task.assignedTo._key.path.segments[task.assignedTo._key.path.segments.length - 1] === id
      );
      callback(currTasks);
    });
    return unsubscribe;
  } catch (error) {
    console.log(error);
  }
};

export const completedTaskQuery = (callback) => {
  try {
    const q = query(taskRef, where("completedStatus", "==", true));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs?.map((task) => ({
        ...task.data(),
        id: task.id
      }));
      callback(data);
    });

    return unsubscribe;
  } catch (error) {
    console.log(error);
  }
};
