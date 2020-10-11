import Layout from "../../components/Layout";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import Router from "next/router";
import axios from "axios";

//dynamically importing react-quill
const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const Notes = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  // def function onChange
  const onChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  //def function submitData
  const submitData = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      content: content,
      email: "prueba@test.com",
    };

    axios
      .post("https://notoapi.herokuapp.com/api/notes", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Layout>
      <div>
        <form>
          <label>Titulo:</label>
          <input type="text" name="title" value={title} onChange={onChange} />
          <ReactQuill theme="snow" value={content} onChange={setContent} />
          <button type="submit" onClick={submitData}>
            Guardar
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Notes;
