import Layout from "../components/Layout";
import Link from "next/link";

export default function Home({ data }) {
  return (
    <Layout>
      <section>
        {data.data.map((notes) => (
          <div key={notes._id}>
            <Link href={"/notes/" + notes._id}>
              <a>
                <p className="title">{notes.title}</p>
                <p className="content">{notes.content}</p>
              </a>
            </Link>
          </div>
        ))}
        <style jsx>{`
          section {
            display: flex;
            flex-wrap: wrap;
          }
          div {
            position: relative;
            width: 300px;
            height: 200px;
            margin: 10px auto;
            background-color: #ecdbdb;
            border-radius: 15px;
          }
          a {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .title {
            font-weight: bold;
            margin: 7px 0;
          }
          .content {
            margin: 0 20px 10px 20px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 8;
            line-clamp: 8;
            overflow: hidden;
          }
        `}</style>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://notoapi.herokuapp.com/api/notes`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
