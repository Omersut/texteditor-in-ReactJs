import React, { useEffect } from "react";
import "./App.scss";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css"; 

export default () => {
  const { quill, quillRef } = useQuill('snow');
  const [value, setValue] = React.useState();

 useEffect(() => {
  if (quill) {
    quill.on("text-change", (delta, oldDelta, source) => {
      setValue(quillRef.current.firstChild.innerHTML); 
    });
  }
 }, [quill]);
 console.log(value); // Get value using state

  return (
   <div className="App">
    <div className="editor">
      <div ref={quillRef}  />
    </div>
    <div className="print" dangerouslySetInnerHTML={{ __html: value }}></div>
   </div>
  );
};
