import "./App.css";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";

function App() {
  const [users, setUsers] = useState([{}]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  //collection(databse_name, collection_name)
  const userCollectionRef = collection(db, "users");

  const createUser = async () => {
    // addDoc(collection_ref, payload)
    await addDoc(userCollectionRef, { name: newName, age: Number(newAge) });
  };

  const updateUser = async (id, age) => {
    //userdoc will find the document in a collection
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    await updateDoc(userDoc, newFields);
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };
  // console.log(userCollectionRef);
  useEffect(() => {
    const getUsers = async () => {
      //getDocs will get the documents from the collection
      const data = await getDocs(userCollectionRef);
      // console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  return (
    <>
      <div className="App">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setNewAge(e.target.value)}
        />
        <button onClick={createUser}>Create User</button>
        {users.map((user) => (
          <div>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <button onClick={() => updateUser(user.id, user.age)}>
              Increase Age
            </button>
            <button onClick={() => deleteUser(user.id)}>Delete User</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
