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

export default function ContactForm({ title }) {
  const [message, setMessage] = React.useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Profile>();

  const onSubmit = handleSubmit((data, e) => {
    e.preventDefault();
    setMessage(data.name);
    reset();
  });
  return (
    <ReactFormWrapper>
      {message.length > 0 ? (
        <ThankYou name={message} />
      ) : (
        <>
          <h2>{title}</h2>
          <form
            onSubmit={onSubmit}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            name="contact-form"
          >
            <FormInput type="hidden" name="form-name" value="contact" />
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
          </form>
        </>
      )}
    </ReactFormWrapper>
  );
}
