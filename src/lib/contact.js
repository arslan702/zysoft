import { doc, getDoc, setDoc, } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "../config/firebase"

const addQoutation = async (contact) => {
  // const snapshot = collection(db, "contacts");
  const ref = doc(db, "contacts", uuidv4());
  await setDoc(ref, contact, { merge: true });
  const getRef = doc(db, "contacts", ref.id);
  const res = await getDoc(getRef);
  return res.data() ? {
    data: { ...res.data(), id: res.id },
    message: "Project added successfully!",
    code: 1,
  } : {
    message: "Something went wrong!",
    code: 0
  };
}

const contactApi = {
  addQoutation
};

export default contactApi;