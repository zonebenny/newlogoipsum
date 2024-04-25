// "use client";
// import React, { useState } from "react";
// import Button from "../Button";

// const FormContact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     typeofevent: "",
//     noofguests: "",
//     estimatedbudget: "",
//     date: "",
//     eventlocation: "",
//     message: "",
//   });

//   const [formErrors, setFormErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const formFields = [
//     { id: "name", label: "Name", type: "text" },
//     { id: "email", label: "Email", type: "email" },
//     { id: "mobile", label: "Mobile", type: "text" },
//     { id: "typeofevent", label: "Type of event", type: "text" },
//     { id: "noofguests", label: "Number of guests", type: "text" },
//     { id: "estimatedbudget", label: "Estimated budget", type: "text" },
//     { id: "date", label: "Date", type: "text" },
//     { id: "eventlocation", label: "Event location", type: "text" },
//     { id: "message", label: "Tell us About Your Event", type: "textarea" },
//   ];

//   const handleChange = (event) => {
//     const { id, value } = event.target;
//     setFormData({ ...formData, [id]: value });
//     setFormErrors({ ...formErrors, [id]: "" });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const errors = {};
//     Object.keys(formData).forEach((key) => {
//       if (formData[key].trim() === "") {
//         errors[key] = `${
//           formFields.find((field) => field.id === key).label
//         } is required`;
//       }
//     });
//     setFormErrors(errors);
//     if (Object.keys(errors).length === 0) {
//     }
//     setSubmitted(true);
//   };

//   return (
//     <>
//       <form className="flex flex-wrap gap-x-[31px]" onSubmit={handleSubmit}>
//         {formFields.map((field) => (
//           <div
//             className={`mb-[45px] relative ${
//               field.type === "textarea" ? "w-full" : "w-full 2xl:w-[47.5%]"
//             }`}
//             key={field.id}
//           >
//             <label className="block">{field.label}*</label>
//             {field.type === "textarea" ? (
//               <textarea
//                 className="border-b-2 w-full resize-none outline-none"
//                 id={field.id}
//                 value={formData[field.id]}
//                 onChange={handleChange}
//               ></textarea>
//             ) : (
//               <input
//                 className="border-b-2 w-full outline-none "
//                 type={field.type}
//                 id={field.id}
//                 value={formData[field.id]}
//                 onChange={handleChange}
//               />
//             )}
//             {submitted && formErrors[field.id] && (
//               <span className="text-red-500 absolute bottom-[-22px] left-0 block">
//                 {formErrors[field.id]}
//               </span>
//             )}
//           </div>
//         ))}
//         <Button
//           type="submit"
//           variant="btnPrimary"
//           outline="outline-Secondary"
//           name="Submit"
//         />
//       </form>
//     </>
//   );
// };

// export default FormContact;
"use client"
import React, { useState } from 'react';
import Button from '../Button';
import { pagedata } from '@/app/data';
import "./style.css";

const FormContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        typeofevent: '',
        noofguests: '',
        estimatedbudget: '',
        date: '',
        eventlocation: '',
        message: ''
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData({ ...formData, [id]: value });
    };

    return (
        <form className='flex flex-wrap gap-x-[31px] relative'>
            {pagedata?.formdatasection?.formFields?.map((field) => (
                <div className={`mb-[45px] ${field?.type === 'textarea' ? 'w-full' : 'w-full 2xl:w-[47.5%]'}`} key={field?.id}>
                    <label htmlFor={field?.id} className='block'>{field?.label}</label>
                    {field?.type === 'textarea' ? (
                        <textarea
                            className='border-b-2 w-full resize-none outline-none'
                            id={field?.id}
                            value={formData[field?.id]}
                            onChange={handleChange}
                            required={field?.required}
                        ></textarea>
                    ) : (
                        <input
                            className='border-b-2 w-full outline-none'
                            type={field?.type}
                            id={field?.id}
                            value={formData[field?.id]}
                            onChange={handleChange}
                            required={field?.required}
                        />
                    )}
                </div>
            ))}
            <Button type="submit" variant="btnPrimary" outline="outline-Secondary" name="Submit" className="buttons" />
        </form>
    );
}

export default FormContact;
