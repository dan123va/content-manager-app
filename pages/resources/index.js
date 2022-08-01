import React from "react";
import axios from "axios";
import Layout from "components/Layout";
import { useRouter } from "next/router";
import ResourceForm from "components/ResourceForm";

export default function Index() {
  const router = useRouter();

  const createResource = (formData) => {
    axios
      .post("/api/resources", formData)
      .then(() => router.push("/"))
      .catch((err) => {
        alert(err?.response?.data);
      });
  };

  return (
    <Layout>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <ResourceForm onFormSubmit={createResource} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
