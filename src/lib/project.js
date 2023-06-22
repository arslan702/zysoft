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
const addProject = async (project) => {
  if (
    project.name === ""
  ) {
    return {
      message:
        "Please Provide Complete Project Information! Project Name description",
      code: 0,
    };
  } else {
    const snapshot = collection(db, "projects");
    let q = query(snapshot, where("name", "==", project.name));
    const projectExist = await getDocs(q);

    if (projectExist.docs.length > 0) {
      return {
        message: "Project name already exist, please choose other name!",
        code: 0,
      };
    } else {
      const ref = doc(db, "projects", uuidv4());
      await setDoc(ref, project, { merge: true });
      const getRef = doc(db, "projects", ref.id);
      const res = await getDoc(getRef);
      return res.data()
        ? {
            data: { ...res.data(), id: res.id },
            message: "Project added successfully!",
            code: 1,
          }
        : {
            message: "Something went wrong!",
            code: 0,
          };
    }
  }
};

// Get Single Product By Id
const getProject = async (id) => {
  const ref = doc(db, "projects", id);
  const res = await getDoc(ref);
  return {
    ...res.data(),
    id,
  };
};

// Get All Products
const getProjects = async () => {
  const ref = collection(db, "projects");
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
const updateProject = async (projectId, project) => {
  // console.log("project id", projectId);
  // console.log("project", project);
  const ref = doc(db, "projects", projectId);
  // delete project.id;
  await setDoc(ref, project, { merge: true });
  // console.log("project", project);
  return {
    ...project,
    id: projectId,
  };
};

// Delete Product
const deleteProject = async (id) => {
  const ref = doc(db, "projects", id);
  await deleteDoc(ref);
  return id;
};

const deleteProductImage = async (data) => {
  const ref = doc(db, "projects", data.id);
  await setDoc(ref, { images: arrayRemove(data.url) }, { merge: true });
  const res = await getDoc(ref);
  return {
    ...res.data(),
    id: res.id,
  };
};

const projectApi = {
  addProject,
  getProject,
  getProjects,
  updateProject,
  deleteProductImage,
  deleteProject,
};

export default projectApi;
