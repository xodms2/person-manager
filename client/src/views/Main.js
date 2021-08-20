import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonForm from "../components/PersonForm";

const Main = () => {
  return (
    <div>
      <PersonForm />
    </div>
  );
  //   const [message, setMessage] = useState("Loading...");
  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:8000/api")
  //       .then((res) => setMessage(res.data.message));
  //   }, []);
  //   return (
  //     <div>
  //       <h2>{message}</h2>
  //     </div>
  //   );
};
export default Main;
