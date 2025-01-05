import axios from "axios";
import React from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

const url = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(url, data);
    toast.success(response.data.msg || "Form submitted successfully!");
    return redirect("/");
  } catch (error) {
    toast.error("there was an error");
    // error?.response?.data?.msg || error.message || "An error occurred!"
    return null;
  }
};

const NewsLetter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Our NewsLetter</h2>
      <Form className="form" method="POST">
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            First Name
          </label>
          <input type="text" name="name" defaultValue="John" className="form-input" required />
        </div>
        <div className="form-row">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input type="text" name="lastName" defaultValue="White" className="form-input" required />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" name="email" defaultValue="test@email.com" className="form-input" required />
        </div>
        <div className="form-row">
          <button type="submit" className="btn btn-block">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </Form>
    </>
  );
};

export default NewsLetter;
