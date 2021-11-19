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
  // const [message, setMessage] = React.useState("");
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
      // .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm<Profile>();

  // const onSubmit = handleSubmit((data, e) => {
  //   console.log("data: ", data);

  //   e.preventDefault();
  //   setMessage(data.name);
  //   reset();
  // });
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
            // action="/thanks/"
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
          {/* <form
            onSubmit={onSubmit}
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            name="Contact Form"
          >
            <input type="hidden" name="form-name" value="Contact Form" />
            <FormGroup>
              <FormInput {...register("name")} />
              <Label>Name</Label>
              {errors?.name && <Error>{errors.name.message}</Error>}
            </FormGroup>

            <FormGroup>
              <FormInput
                {...register("email", {
                  required: `Email is required`,
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Please enter a valid email address",
                  },
                })}
                type="email"
              />
              <Label htmlFor="email">Email</Label>
            </FormGroup>

            <FormGroup>
              <FormInput
                {...register("phone", {
                  required: `Phone number is required`,
                  minLength: {
                    value: 8,
                    message: "Minimum length is 8 characters",
                  },
                  maxLength: {
                    value: 15,
                    message: "Maximum length is 15 characters",
                  },
                  valueAsNumber: true,
                })}
                type="phone"
              />
              <Label htmlFor="phone">Phone</Label>
            </FormGroup>

            <FormGroup>
              <FormTextArea
                {...register("message", {
                  required: `A message is required`,
                  maxLength: {
                    value: 2000,
                    message: "Maximum length is 2000 characters",
                  },
                })}
                placeholder="Type your message here..."
              />
              <Label>Message</Label>
            </FormGroup>

            <FormInput type="submit" />
          </form> */}
        </>
      )}
    </ReactFormWrapper>
  );
}
