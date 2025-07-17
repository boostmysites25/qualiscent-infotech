import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { companyDetails } from "../data/constant";

const ContactForm2 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    if (spinner) return;
    setSpinner(true);

    // var emailBody = "Name: " + values.fullName + "\n\n";
    // emailBody += "Email: " + values.email + "\n\n";
    // emailBody += "Subject: " + values.subject + "\n\n";
    // emailBody += "Message:\n" + values.message;
    var emailBody = `
    <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
      <h2 style="color: #2c3e50; margin-bottom: 16px;">New Contact Form Submission</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background-color: #f4f4f4;">
            <th style="border: 1px solid #ccc; padding: 10px; text-align: left; width: 15%;">Name</th>
            <th style="border: 1px solid #ccc; padding: 10px; text-align: left; width: 20%;">Email</th>
            <th style="border: 1px solid #ccc; padding: 10px; text-align: left; width: 10%;">Phone</th>
            <th style="border: 1px solid #ccc; padding: 10px; text-align: left; width: 15%;">Subject</th>
            <th style="border: 1px solid #ccc; padding: 10px; text-align: left; width: 40%;">Message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ccc; padding: 8px;">${values.fullName}</td>
            <td style="border: 1px solid #ccc; padding: 8px;">${values.email}</td>
            <td style="border: 1px solid #ccc; padding: 8px;">${values.phone}</td>
            <td style="border: 1px solid #ccc; padding: 8px;">${values.subject}</td>
            <td style="border: 1px solid #ccc; padding: 8px;">${values.message}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

    const googleFormData = new URLSearchParams();
    googleFormData.append("Name", values.fullName);
    googleFormData.append("Email", values.email);
    googleFormData.append("Phone", values.phone);
    googleFormData.append("Subject", values.subject);
    googleFormData.append("Message", values.message);

    var payload = {
      to: companyDetails.email,
      // to: "remeesreme4u@gmail.com",
      name: companyDetails?.name || "Qualiscent Infotech",
      subject: values.subject,
      html: emailBody,
    };
    const googleFormURL =
      "https://script.google.com/macros/s/AKfycbzlukNBNQwwYTipMWk0yFduO60yuWKedUSSRK_uPFRruiYrlIQbw1wMwQJYPDw5ETc4qw/exec";
    const resGoogleSheet = await fetch(googleFormURL, {
      method: "POST",
      body: googleFormData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      redirect: "follow",
    });
    console.log(resGoogleSheet, "googlesheetresponse");

    await fetch(
      "https://send-mail-redirect-boostmysites.vercel.app/send-email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("Email sent successfully");
          reset();
          navigate("/thank-you");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setSpinner(false));
  };

  return (
    <div className="bg-primary p-6 rounded-xl">
      <form
        data-aos="fade-up"
        className="grid grid-cols-1 gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid lg:grid-cols-2 gap-5">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 outline-none bg-white rounded-xl w-full"
              {...register("fullName", { required: true })}
            />
            {errors.fullName && (
              <span className="text-red-400 text-sm">
                Full Name is required
              </span>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 outline-none bg-white rounded-xl w-full"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-400 text-sm">Email is required</span>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <input
            type="tel"
            className="p-2 outline-none bg-white rounded-xl w-full"
            placeholder="Phone Number"
            inputMode="numeric"
            pattern="[0-9]*"
            onKeyDown={(e) => {
              const allowedKeys = [
                "Backspace",
                "ArrowLeft",
                "ArrowRight",
                "Tab",
                "Delete",
              ];
              if (!/^[0-9]$/.test(e.key) && !allowedKeys.includes(e.key)) {
                e.preventDefault();
              }
            }}
            {...register("phone", {
              required: "Phone number is required",
              min: {
                value: 1,
                message: "Phone number must be at least 1",
              },
              max: {
                value: 9999999999,
                message: "Phone number is too long",
              },
              validate: (value) =>
                /^[0-9]+$/.test(value) || "Only numeric values are allowed",
            })}
          />
          <small className="text-red-400 text-sm">
            {errors.phone?.message}
          </small>
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject"
            className="p-2 outline-none bg-white rounded-xl w-full"
            {...register("subject", { required: true })}
          />
          {errors.subject && (
            <span className="text-red-400 text-sm">Subject is required</span>
          )}
        </div>
        <div>
          <textarea
            rows="5"
            placeholder="Message"
            className="p-2 outline-none bg-white rounded-xl w-full"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="text-red-400 text-sm">Message is required</span>
          )}
        </div>
        <button type="submit" className="secondary-btn">
          {spinner ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm2;
