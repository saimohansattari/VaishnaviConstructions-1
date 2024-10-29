import React, { useRef, useState } from "react";
import "./contactus.css";
import Profile from "../assets/contactProfile.jpeg";
import Map from "../assets/contactMap.png";
import location from "../assets/location.png";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import { object, string } from "yup";

const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState();
  const [errors, setErrors] = useState();

  let validationSchema = object({
    user_name: string()
      .required("Name is required")
      .min(3, "Min 3 characters allowed")
      .max(32, "Max 32 characters allowed"),
    user_phone: string()
      .matches(/^\d{10}$/, "Invalid phone number")
      .required("Phone number is required"),
    user_email: string().required("Email is required").email("Invalid Email"),
    user_message: string().nullable().max(500, "Max 500 characters allowed"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const res = await validationSchema.validate(formData, {
        abortEarly: false,
      });
      if (res) {
        setErrors({});
        emailjs
          .sendForm("service_jl8krrm", "template_dw3hwr2", form.current, {
            publicKey: "hTp-er7apJbSprZyQ",
          })
          .then(
            () => {
              toast.success("Email sent");
              resetForm();
            },
            (error) => {
              toast.error("Error", {
                description: "An error occurred while delivering this message!",
              });
            }
          );
      }
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  const resetForm = () => {
    form.current.user_name.value = "";
    form.current.user_phone.value = "";
    form.current.user_email.value = "";
    form.current.user_message.value = "";
  };

  return (
    <>
      <Toaster richColors />
      <div className="banner d-flex align-items-center">
        <h1 className="mediaTitle">Contact Us</h1>
      </div>

      <div className="sectionOne">
        <div className="sectionOne-left">
          <div>
            <h1>Get in touch with us</h1>
            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className="mt-5 mb-5"
            >
              <img
                src={Profile}
                alt=""
                width={80}
                height={70}
                className="profile"
              />
              <p className="desc">
                Hi, We’re Vaishnavi Constructions. Need help? Use the form below
                or email me at hello@vaishnaviconstructions.com
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="">Name</label> <br />
              <input
                type="text"
                placeholder="Rachel Joe"
                name="user_name"
                onChange={handleChange}
              />
              {errors?.user_name && (
                <div className="error">{errors.user_name}</div>
              )}{" "}
              <br />
              <label htmlFor="">Email</label> <br />
              <input
                placeholder="Rachel@domain.com"
                name="user_email"
                onChange={handleChange}
              />
              {errors?.user_email && (
                <div className="error">{errors.user_email}</div>
              )}{" "}
              <br />
              <label htmlFor="">Phone</label> <br />
              <input
                type="tel"
                placeholder="+91 9956783422"
                name="user_phone"
                onChange={handleChange}
              />
              {errors?.user_phone && (
                <div className="error">{errors.user_phone}</div>
              )}{" "}
              <br />
              <label htmlFor="">Message</label> <br />
              <input
                type="textarea"
                placeholder="Type your query here...."
                name="user_message"
                onChange={handleChange}
              />
              {errors?.user_message && (
                <div className="error">{errors.user_message}</div>
              )}{" "}
              <br />
              <button type="submit"> Send my message </button>
            </form>
          </div>
        </div>
        <div className="sectionOne-right">
          <div className="locate">
            <img src={location} alt="" />
            <div
              style={{
                backgroundColor: "#ffffff80",
                color: "black",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              844 W Orange Ave, South San Francisco, CA 94080, United States
            </div>
          </div>
        </div>
      </div>

      <div className="sectionTwo">
        <div className="sectionTwo-left">
          <img
            src={Map}
            alt=""
            width={800}
            height={600}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="sectionTwo-right">
          <div style={{ width: "80%", margin: "auto" }}>
            <h2>Let&apos;s talk with us</h2>
            <p>
              Questions, comments, or suggestions? Simply fill in the form and
              we’ll be in touch shortly.
            </p>
            <p>
              <i className="fa fa-location-dot"></i>
              <span>
                8-2-248/A/5/25, Venkateshwara Hills, Beside Tata Capital Road,
                RD No-3 Banjarahills
              </span>
            </p>
            <p>
              <i className="fa fa-phone"></i>
              <span>+91 7093320405</span>
            </p>
            <p>
              <i className="fa fa-envelope"></i>
              <span>Vaishnavireadymix@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
