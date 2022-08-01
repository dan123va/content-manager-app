import React from "react";
import axios from "axios";
import Layuot from "components/Layout";
import { useRouter } from "next/router";
import ResourceForm from "components/ResourceForm";

export default function Edit({ resource }) {
  const router = useRouter();

  const updateResource = (formData) => {
    axios
      .patch("/api/resources", formData)
      .then(() => alert("Data has been updated!"))
      .catch((err) => alert(err));
  };

  return (
    <Layuot>
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <ResourceForm
              onFormSubmit={updateResource}
              initialData={resource}
            />
          </div>
        </div>
      </div>
    </Layuot>
  );
}

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
