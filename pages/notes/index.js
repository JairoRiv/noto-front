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
      .then(() => {
        Router.push("/");
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
          <div className="contentQuill">
            <ReactQuill theme="snow" value={content} onChange={setContent} />
          </div>
          <button type="submit" onClick={submitData}>
            Guardar
          </button>
        </form>
      </div>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
        }
        label {
          margin: 11px;
          font-weight: bold;
          font-size: 23px;
        }
        input {
          width: 300px;
          margin: 0 0 20px 11px;
        }
        .contentQuill {
          width: 90%;
          margin: 0 0 20px 11px;
        }
        button{
          width: 100px;
          height: 30px;
          border-radius: 20px;
          color:white;
          margin: 0 0 0 11px;
          background-color:#1e530b;
        }
      `}</style>
    </Layout>
  );
};

export default Notes;
