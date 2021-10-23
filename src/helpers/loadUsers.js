import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase/config'; 

export const loadUsers = async() => {

    const querySnapshot = await getDocs(collection(db, "users"));
    const users = []
    querySnapshot.forEach((snapChild) => {
        users.push({
            id: snapChild.id,
            ...snapChild.data(),
        })
    });
    return users;
  }