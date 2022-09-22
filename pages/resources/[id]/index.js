import React from "react";
import Layout from "components/Layout";
import Link from "next/link";
import axios from "axios";

export default function Resource({ resource }) {
  const activateResource = () => {
    axios
      .patch("/api/resources", {
        ...resource,
        status: "active",
      })
      .then(() => location.reload())
      .catch(() => alert("Cannot activate the resource"));
  };

  return (
    <Layout>
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">{resource.createAt}</h2>
                    <h1 className="title">{resource.title}</h1>
                    <p>{resource.description}</p>
                    <p>Time to finish: {resource.timeToFinish} min</p>
                    <Link href={`/resources/${resource.id}/edit`}>
                      <a className="button is-warning">Update</a>
                    </Link>
                    <button
                      onClick={activateResource}
                      className="button is-success ml-1"
                    >
                      Activate
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Revisar el archivo de comentarios No.- 3 (getInitialProps)
// Revisar el archivo de comentarios No.- 4 (getStaticPaths)
export async function getServerSideProps({ params }) {
  const resData = await fetch(
    `http://localhost:3001/api/resources/${params.id}`
  );
  const data = await resData.json();

  return {
    props: {
      resource: data,
    },
  };
}
