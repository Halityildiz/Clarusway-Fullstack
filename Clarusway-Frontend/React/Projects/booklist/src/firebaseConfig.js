import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBppsgS0FAHpmjAWyqz2LPK-ClXqSjKDSQ",
  authDomain: "booklist-firestore.firebaseapp.com",
  projectId: "booklist-firestore",
  storageBucket: "booklist-firestore.appspot.com",
  messagingSenderId: "846608803708",
  appId: "1:846608803708:web:8440d2bdfc8f81358466f9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// * collection ref
const colRef = collection(db, "books");

// * get collection data

export const getBooks = async () => {
  const snapshot = await getDocs(colRef);
  const books = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  // ?get data
  // console.log(snapshot.docs[0].data());
  // ?get id
  //console.log(snapshot.docs[0].id);
  return books;
};
// * adding docs
export const addBook = async ({ title, author }) => {
  await addDoc(colRef, {
    title,
    author,
  });
};

// * deleting docs
export const deleteBook = async (id) => {
  const docRef = doc(db, "books", id);
  await deleteDoc(docRef);
};
