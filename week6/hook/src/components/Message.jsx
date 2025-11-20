import { useEffect } from "react";

function Message() {

  useEffect(() => {
    console.log("Component mounted for the FIRST time only.");

    return () => {
      console.log("Component is about to be UNMOUNTED.");
    };
  }, []);   // empty dependency array

  return <p>Component mounted!</p>;
}

export default Message;
