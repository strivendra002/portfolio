// import React, { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// import { EarthCanvas } from "../canvas";
// import { SectionWrapper } from "../../hoc";
// import { slideIn } from "../../utils/motion";
// import { config } from "../../constants/config";
// import { Header } from "../atoms/Header";

// const INITIAL_STATE = Object.fromEntries(
//   Object.keys(config.contact.form).map((input) => [input, ""])
// );

// const emailjsConfig = {
//   serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
//   templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//   accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
// };

// const Contact = () => {
//   const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
//   const [form, setForm] = useState(INITIAL_STATE);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
//   ) => {
//     if (e === undefined) return;
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
//     if (e === undefined) return;
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         emailjsConfig.serviceId,
//         emailjsConfig.templateId,
//         {
//           form_name: form.name,
//           to_name: config.html.fullName,
//           from_email: form.email,
//           to_email: config.html.email,
//           message: form.message,
//         },
//         emailjsConfig.accessToken
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert("Thank you. I will get back to you as soon as possible.");

//           setForm(INITIAL_STATE);
//         },
//         (error) => {
//           setLoading(false);

//           console.log(error);
//           alert("Something went wrong.");
//         }
//       );
//   };

//   return (
//     <div
//       className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
//     >
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className="bg-black-100 flex-[0.75] rounded-2xl p-8"
//       >
//         <Header useMotion={false} {...config.contact} />

//         <form
//           // @ts-expect-error
//           ref={formRef}
//           onSubmit={handleSubmit}
//           className="mt-12 flex flex-col gap-8"
//         >
//           {Object.keys(config.contact.form).map((input) => {
//             const { span, placeholder } =
//               config.contact.form[input as keyof typeof config.contact.form];
//             const Component = input === "message" ? "textarea" : "input";

//             return (
//               <label key={input} className="flex flex-col">
//                 <span className="mb-4 font-medium text-white">{span}</span>
//                 <Component
//                   type={input === "email" ? "email" : "text"}
//                   name={input}
//                   value={form[`${input}`]}
//                   onChange={handleChange}
//                   placeholder={placeholder}
//                   className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
//                   {...(input === "message" && { rows: 7 })}
//                 />
//               </label>
//             );
//           })}
//           <button
//             type="submit"
//             className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none"
//           >
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>
//       </motion.div>

//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
//       >
//         <EarthCanvas />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(Contact, "contact");

//import React from "react";
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFilePdf,
} from 'react-icons/fa';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

import { EarthCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { Header } from '../atoms/Header';
import { config } from '../../constants/config';

// ✅ Don't name this `Header`
// type HeaderProps = {
//   title: string;
//   subtitle?: string; // optional
//   useMotion?: boolean; // optional, default could be false
// };

const ResumeLink: React.FC = () => {
  const viewUrl =
    'https://drive.google.com/file/d/1NmYtgO7PYepSC0Szl9u2n-r6MTTBzG3X/view?usp=sharing';
  const downloadUrl =
    'https://drive.google.com/uc?export=download&id=1NmYtgO7PYepSC0Szl9u2n-r6MTTBzG3X';

  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    window.open(viewUrl, '_blank');

    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Trivendra-Kumar-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <p className="flex items-center gap-3">
      <FaFilePdf className="text-secondary text-xl" />
      <a href={viewUrl} onClick={handleResumeClick} className="hover:underline cursor-pointer">
        Download Resume (PDF)
      </a>
    </p>
  );
};

// ✅ Contact Form Types
type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        'service_k0glb7f', // 🔹 replace with EmailJS service ID
        'template_qh19dyd', // 🔹 replace with EmailJS template ID
        {
          from_name: data.name,
          reply_to: data.email,
          from_email: data.email,
          message: data.message,
        },
        'fJPtM_VSpyCWoFAGV' // 🔹 replace with EmailJS public key
      );

      alert('✅ Message sent successfully!');
      reset();
    } catch (error) {
      console.error(error);
      alert('❌ Failed to send message. Try again later.');
    }
  };

  return (
    <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      {/* Left side - Contact Info & Form */}
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        {/* Contact Info */}
        <div className="mt-8 flex flex-col gap-6 text-white">
          <p className="flex items-center gap-3">
            <FaEnvelope className="text-secondary text-xl" />
            <a href="mailto:strivendra002@gmail.com" className="hover:underline">
              strivendra002@gmail.com
            </a>
          </p>

          <p className="flex items-center gap-3">
            <FaPhone className="text-secondary text-xl" />
            <a href="tel:+919752618573" className="hover:underline">
              +91 97526 18573
            </a>{' '}
            |{' '}
            <a href="tel:+916267380641" className="hover:underline">
              +91 62673 80641
            </a>
          </p>

          <p className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-secondary text-xl" />
            Bhilai, Chhattisgarh, India
          </p>

          <p className="flex items-center gap-3">
            <FaLinkedin className="text-secondary text-xl" />
            <a
              href="https://www.linkedin.com/in/trivendra-kumar-b9302a226/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/trivendra-kumar
            </a>
          </p>

          <p className="flex items-center gap-3">
            <FaGithub className="text-secondary text-xl" />
            <a
              href="https://github.com/strivendra002"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/strivendra002
            </a>
          </p>

          {/* Resume Download & View */}
          <ResumeLink />
        </div>

        {/* ✅ Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="mt-10 flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="rounded-lg bg-tertiary px-4 py-3 text-white placeholder:text-secondary focus:outline-none"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <span className="text-red-400 text-sm">{errors.name.message}</span>}

          <input
            type="email"
            placeholder="Your Email"
            className="rounded-lg bg-tertiary px-4 py-3 text-white placeholder:text-secondary focus:outline-none"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}

          <textarea
            rows={5}
            placeholder="Your Message"
            className="rounded-lg bg-tertiary px-4 py-3 text-white placeholder:text-secondary focus:outline-none"
            {...register('message', { required: 'Message is required' })}
          />
          {errors.message && <span className="text-red-400 text-sm">{errors.message.message}</span>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl bg-secondary px-6 py-3 font-medium text-white shadow-md hover:bg-white hover:text-black transition-all duration-300"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>

      {/* Right side - Earth Canvas */}
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
