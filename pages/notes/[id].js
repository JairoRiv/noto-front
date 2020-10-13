import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/router";
import axios from "axios";

//dynamically importing react-quill
const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

//Import components
import Layout from "../../components/Layout";

const Note = ({ notes }) => {
  //Use Router
  const router = useRouter();
  const { id } = router.query;

  //Select Note
  const notesData = notes.data.map((note) => (note._id === id ? note : null));
  const noteData = notesData.filter((el) => el != null);

  //initial state
  const [content, setContent] = useState(noteData[0].content);
  const [title, setTitle] = useState(noteData[0].title);

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
      .put(`https://notoapi.herokuapp.com/api/notes/${id}`, data)
      .then((response) => {
        console.log(response);
      })
      .then(alert("nota actualizada"))
      .catch((error) => {
        console.error(error);
      });
  };

  //def functoin delete note
  const deleteNote = (e) => {
    e.preventDefault();

    axios
      .delete(`https://notoapi.herokuapp.com/api/notes/${id}`)
      .then((response) => {
        console.log(response);
      })
      .then(() => {
        router.push("/");
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
          <div className="buttons">
            <button className="save" type="submit" onClick={submitData}>
              Guardar
            </button>
            <button className="delete" type="submit" onClick={deleteNote}>
              Borrar
            </button>
          </div>
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
        .buttons {
          display: flex;
          justify-content: space-around;
        }
        .save {
          width: 100px;
          height: 30px;
          border-radius: 20px;
          color: white;
          margin: 0 0 0 11px;
          background-color: #1e530b;
        }
        .delete {
          width: 100px;
          height: 30px;
          border-radius: 20px;
          color: white;
          margin: 0 0 0 11px;
          background-color: #db0f0f;
        }
      `}</style>
    </Layout>
  );
};
export default Note;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(process.env.API_HOST);
  const notes = await res.json();

  // Pass data to the page via props
  return { props: { notes } };
}
