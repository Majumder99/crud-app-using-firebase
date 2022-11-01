import "./App.css";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "@firebase/firestore";

function App() {
  const [users, setUsers] = useState({});
  //collection(databse_name, collection_name)
  const userCollectionRef = collection(db, "users");
  console.log(userCollectionRef);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      console.log(data);
    };

    getUsers();
  }, []);
  return <div>Hello</div>;
}

export default App;
