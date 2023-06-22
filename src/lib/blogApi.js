import {
  arrayRemove,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db } from "../config/firebase";

// Add New Product
const addBlog = async (blog) => {
    const snapshot = collection(db, "blogs");
    let q = query(snapshot, where("name", "==", blog.name));
    const blogExist = await getDocs(q);

    if (blogExist.docs.length > 0) {
      return {
        message: "Blog name already exist, please choose other name!",
        code: 0,
      };
    } else {
      const ref = doc(db, "blogs", uuidv4());
      await setDoc(ref, blog, { merge: true });
      const getRef = doc(db, "blogs", ref.id);
      const res = await getDoc(getRef);
      return res.data()
        ? {
            data: { ...res.data(), id: res.id },
            message: "Blog added successfully!",
            code: 1,
          }
        : {
            message: "Something went wrong!",
            code: 0,
          };
    }
};

// Get Single Product By Id
const getBlog = async (id) => {
  const ref = doc(db, "blogs", id);
  const res = await getDoc(ref);
  return {
    ...res.data(),
    id,
  };
};

// Get All Products
const getBlogs = async () => {
  const ref = collection(db, "blogs");
  const res = await getDocs(ref);
  let docs = [];
  if (res.docs.length <= 0) {
    return [];
  } else {
    res.forEach((doc) => {
      docs.push({
        ...doc.data(),
        id: doc.id,
        createdAt: doc?.data()?.createdAt?.toDate()?.toString(),
      });
    });
    return docs;
  }
};

// Update Product
const updateBlog = async (blogId, blog) => {
  // console.log("project id", projectId);
  // console.log("project", project);
  const ref = doc(db, "blogs", blogId);
  // delete project.id;
  await setDoc(ref, blog, { merge: true });
  // console.log("project", project);
  return {
    ...blog,
    id: blogId,
  };
};

// Delete Product
const deleteBlog = async (id) => {
  const ref = doc(db, "blogs", id);
  await deleteDoc(ref);
  return id;
};

const deleteBlogImage = async (data) => {
  const ref = doc(db, "blogs", data.id);
  await setDoc(ref, { images: arrayRemove(data.url) }, { merge: true });
  const res = await getDoc(ref);
  return {
    ...res.data(),
    id: res.id,
  };
};

const blogApi = {
  addBlog,
  getBlog,
  getBlogs,
  updateBlog,
  deleteBlogImage,
  deleteBlog,
};

export default blogApi;
