import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export const getTodos = async (userId) => {
  const q = query(collection(db, "todos"), where("userId", "==", userId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const createTodo = (todo) =>
  addDoc(collection(db, "todos"), todo);

export const updateTodo = (id, data) =>
  updateDoc(doc(db, "todos", id), data);

export const deleteTodo = (id) =>
  deleteDoc(doc(db, "todos", id));
