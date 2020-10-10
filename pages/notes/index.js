import Layout from "../../components/Layout";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const Notes = () => {
  const ReactQuill = dynamic(import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });
  return (
    <Layout>
      <ReactQuill theme="snow" />
    </Layout>
  );
};

export default Notes;
