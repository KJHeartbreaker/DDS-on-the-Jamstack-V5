/* eslint-disable import/no-unresolved */
import React from "react";
import { useForm } from "react-hook-form";
import {
  Label,
  FormInput,
  FormTextArea,
  ReactFormWrapper,
  FormGroup,
  Error,
} from "./ContactForm.styles";
import ThankYou from "./ThankYou";

interface Profile {
  name: string;
  email: string;
  phone: string;
  message: string;
}

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function ContactForm({ title }) {
  const [message, setMessage] = React.useState(false);

  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => setMessage(true))
      .catch((error) => alert(error));
  };

  return (
    <ReactFormWrapper>
      {message ? (
        <ThankYou />
      ) : (
        <>
          <h2>{title}</h2>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your name:
                <br />
                <input type="text" name="name" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your email:
                <br />
                <input type="email" name="email" onChange={handleChange} />
              </label>
            </p>
            <p>
              <label>
                Message:
                <br />
                <textarea name="message" onChange={handleChange} />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </>
      )}
    </ReactFormWrapper>
  );
}
