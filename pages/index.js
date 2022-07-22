import React from "react";
import Layout from "components/Layout";
import ResourceHighlight from "components/ResourceHighlight";
import Newsletter from "components/Newsletter";
import ResourceList from "components/ResourceList";

export default function Home({ resources }) {
  return (
    <Layout>
      <ResourceHighlight resources={resources} />
      <Newsletter />
      <ResourceList resources={resources} />
    </Layout>
  );
}

// Revisar el archivo de comentarios No.- 2
export async function getServerSideProps() {
  const resData = await fetch("http://localhost:3001/api/resources");
  const data = await resData.json();

  return {
    props: { resources: data },
  };
}
