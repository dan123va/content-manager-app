import React, { useState } from "react";

const DEAFULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "1",
  timeToFinish: "",
};

export default function ResourceForm({ onFormSubmit, initialData }) {
  const [form, setForm] = useState(initialData || DEAFULT_DATA);

  const resetForm = () => setForm(DEAFULT_DATA);

  const handleChage = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitForm = () => {
    onFormSubmit(form);
  };

  return (
    <div className="resource-form">
      <h1 className="title">Add Resource</h1>
      <form>
        <div>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                value={form.title}
                onChange={handleChage}
                name="title"
                className="input"
                type="text"
                placeholder="Learn Next JS and Sanity IO"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <textarea
                value={form.description}
                onChange={handleChage}
                name="description"
                className="textarea"
                placeholder="Learn these technologies beacuase ther are very popular and enable better SEO."
              ></textarea>
            </div>
          </div>
          <div className="field">
            <label className="label">Link</label>
            <div className="control">
              <input
                value={form.link}
                onChange={handleChage}
                name="link"
                className="input"
                type="text"
                placeholder="https://academy.eincode.com"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Priority</label>
            <div className="control">
              <div className="select">
                <select
                  value={form.priority}
                  onChange={handleChage}
                  name="priority"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Time to finish</label>
            <div className="control">
              <input
                value={form.timeToFinish}
                onChange={handleChage}
                name="timeToFinish"
                className="input"
                type="number"
                placeholder="60"
              />
            </div>
            <p className="help">Time is in minutes</p>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button
                type="button"
                className="button is-link"
                onClick={submitForm}
              >
                Submit
              </button>
            </div>
            <div className="control">
              <button
                onClick={resetForm}
                type="button"
                className="button is-link is-light"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
