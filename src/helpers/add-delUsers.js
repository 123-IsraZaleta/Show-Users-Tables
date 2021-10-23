import { collection, addDoc, doc, deleteDoc } from 'firebase/firestore';
import db from '../firebase/config'; 

export const addUser = async( values ) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: values.name,
        lastName: values.lastName,
        email: values.email,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

export const deleteUser = async({ id }) => {
    console.log( await deleteDoc(doc(db, "users", id)));
}