import firebase from "./firebase";
import { getDatabase, set, ref, push } from "firebase/database";
import { useState, useEffect } from "react";

export const addInfo = (info) => {
  const db = getDatabase();
  const userRef = ref(db, "contact");
  const newUserRef = push(userRef);
  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });
  console.log("veri eklendi");
};

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState;
  useEffect(() => {
    setIsLoading(true);
    const db = getDatabase();
    const userRef = ref(db, "contact");
  }, []);
  return { isLoading };
};

export const deleteInfo = (id) => {
  const db = getDatabase();
  // const userRef = ref(db, 'contact');
  remove(ref(db, "contact/" + id));
  successNote("Deleted");
};
