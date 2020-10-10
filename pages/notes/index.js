import Layout from "../../components/Layout";
import dynamic from "next/dynamic";
import { useState,useEffect } from 'react';
import "react-quill/dist/quill.snow.css";

//dynamically importing react-quill
const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});



const Notes = () => {
  const [content, setContent] = useState('');
  const [title, setTitle]=useState('');
  // def function onChange
const onChange = (e) => {
  setTitle(e.target.value)
}
  return (
    <Layout>
      <from onSubmit='add_method'>
        <label>Titulo:</label>
        <input type='text' name='title' value={title} onChange={onChange}/>
      <ReactQuill theme="snow" value={content} onChange={setContent}/>
      <button type='submit'>Guardar</button>
      {console.log(content, title)}
      </from>
    </Layout>
  );
};

export default Notes;
