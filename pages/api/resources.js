"use strict";
import axios from "axios";

export default async function resources(req, res) {
  if (req.method === "GET") {
    const resData = await fetch("http://localhost:3001/api/resources");
    const data = await resData.json();

    return res.send(data);
  }

  if (req.method === "POST" || req.method === "PATCH") {
    const { id, title, description, link, timeToFinish, priority } = req.body;
    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send("Data are missing");
    }

    const url =
      req.method === "POST"
        ? "http://localhost:3001/api/resources"
        : `http://localhost:3001/api/resources/${id}`;

    try {
      const axiosResponse = await axios[req.method.toLowerCase()](
        url,
        req.body
      );
      return res.send(axiosResponse.data);
    } catch (error) {
      return res.status(422).send("Data cannot be stored!");
    }
  }
}
