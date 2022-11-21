import React, { useEffect } from "react";

import { useQuill } from "react-quilljs";

import "quill/dist/quill.snow.css"; 

export default () => {
  const { quill, quillRef } = useQuill();
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
   <div style={{display: "flex", justifyContent: "space-around"}}>
     <div style={{ height: "80vh" }}>
      <div ref={quillRef} />
    </div>
    <div dangerouslySetInnerHTML={{ __html: value }}></div>

   </div>
  );
};
