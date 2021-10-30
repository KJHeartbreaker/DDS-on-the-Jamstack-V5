import React from "react";
// import { useForm } from "react-hook-form";
// import { navigate } from "gatsby";

// interface Profile {
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// }

export default function ContactForm({ title }) {
  return (
    <form
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
      name="contact"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <label>
        Name
        <input type="text" name="name" id="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" id="email" />
      </label>
      <label>
        Subject
        <input type="text" name="subject" id="subject" />
      </label>
      <label>
        Message
        <textarea name="message" id="message" />
      </label>
      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
    </form>
  );
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm<Profile>();

  // const encode = (data) => {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&");
  // };

  // const handlePost = (formData, event) => {
  //   // console.log("data: ", JSON.stringify(data));
  //   fetch(`/`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "contact-form", ...formData }),
  //   })
  //     .then((response) => {
  //       navigate("/success/");
  //       reset();
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   event.preventDefault();
  // };

  // const onSubmit = handleSubmit(handlePost);

  // return (
  //   <form
  //     onSubmit={onSubmit}
  //     data-netlify="true"
  //     data-netlify-honeypot="bot-field"
  //   >
  //     <input type="hidden" name="form-name" value="contact" />
  //     <div>
  //       <label>Name</label>
  //       <input {...register("name")} placeholder="Kotaro" />
  //       {errors?.name && <p>{errors.name.message}</p>}
  //     </div>

  //     <div>
  //       <label htmlFor="email">Email</label>
  //       <input
  //         {...register("email", {
  //           required: `Email is required`,
  //           pattern: {
  //             value: /\S+@\S+\.\S+/,
  //             message: "Please enter a valid email address",
  //           },
  //         })}
  //         placeholder="sales@desertdrillingsupply.com"
  //         type="email"
  //       />
  //     </div>

  //     <div>
  //       <label htmlFor="phone">phone</label>
  //       <input
  //         {...register("phone", {
  //           required: `Phone number is required`,
  //           minLength: { value: 8, message: "Minimum length is 8 characters" },
  //           maxLength: {
  //             value: 15,
  //             message: "Maximum length is 15 characters",
  //           },
  //           valueAsNumber: true,
  //         })}
  //         placeholder="5555551313"
  //         type="phone"
  //       />
  //     </div>

  //     <div>
  //       <label>Last Name</label>
  //       <textarea
  //         {...register("message", {
  //           required: `A message is required`,
  //           maxLength: {
  //             value: 2000,
  //             message: "Maximum length is 2000 characters",
  //           },
  //         })}
  //         placeholder="Type your message here..."
  //       />
  //     </div>

  //     <input type="submit" />
  //   </form>
  // );
}
