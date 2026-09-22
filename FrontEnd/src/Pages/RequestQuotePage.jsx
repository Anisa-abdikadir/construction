// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Button from "../ui/Button";
// import Icons from "../ui/Icons";
// import { assets } from "../assets/assets";

// const projectTypes = [
//   "Residential Construction",
//   "Renovation",
//   "Interior Fit-Out",
//   "Road/Infrastructure",
//   "Factory Construction",
//   "Plumbing Work",
// ];

// const labelClass = "block text-xs font-medium text-[#3770A8] mb-2";
// const starClass = "text-[#F0A500]";
// const inputClass =
//   "w-full h-12 px-4 text-sm text-[#242F42] placeholder:text-[#3770A8]/50 " +
//   "bg-white border border-[#D9DEE5] rounded-sm outline-none " +
//   "focus:border-[#3770A8] transition-colors";

// const RequestQuotePage = () => {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     company: "",
//     address: "",
//     types: [],
//     budget: "",
//     startDate: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleTypeToggle = (type) => {
//     setForm((prev) => ({
//       ...prev,
//       types: prev.types.includes(type)
//         ? prev.types.filter((t) => t !== type)
//         : [...prev.types, type],
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(form);
//   };

//   return (
//     <main className="w-full">
//       {/* ---------------- HERO ---------------- */}
//       <section className="relative h-[260px] md:h-[320px] w-full overflow-hidden">
//         <img
//           src={assets.quote_hero}
//           alt="Request a quote"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-[#242F42]/60" />

//         <div className="relative max-w-6xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center pt-20">
//           <h1 className="text-3xl md:text-5xl font-semibold text-white">
//             Request Quote
//           </h1>

//           <p className="mt-3 text-sm text-white/90">
//             <Link to="/" className="hover:text-[#F0A500] transition-colors">
//               Home
//             </Link>
//             <span className="mx-2 text-white/60">/</span>
//             <span className="text-[#F0A500]">Request Quote</span>
//           </p>
//         </div>
//       </section>

//       {/* ---------------- FORM ---------------- */}
//       <section className="bg-white py-16 md:py-20">
//         <form
//           onSubmit={handleSubmit}
//           className="max-w-3xl mx-auto px-4 sm:px-6"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
//             <div>
//               <label htmlFor="firstName" className={labelClass}>
//                 First Name <span className={starClass}>*</span>
//               </label>
//               <input
//                 id="firstName"
//                 name="firstName"
//                 type="text"
//                 required
//                 placeholder="John"
//                 value={form.firstName}
//                 onChange={handleChange}
//                 className={inputClass}
//               />
//             </div>

//             <div>
//               <label htmlFor="lastName" className={labelClass}>
//                 Last Name
//               </label>
//               <input
//                 id="lastName"
//                 name="lastName"
//                 type="text"
//                 placeholder="Doe"
//                 value={form.lastName}
//                 onChange={handleChange}
//                 className={inputClass}
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className={labelClass}>
//                 Email Address <span className={starClass}>*</span>
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 placeholder="you@example.com"
//                 value={form.email}
//                 onChange={handleChange}
//                 className={inputClass}
//               />
//             </div>

//             <div>
//               <label htmlFor="phone" className={labelClass}>
//                 Number <span className={starClass}>*</span>
//               </label>
//               <input
//                 id="phone"
//                 name="phone"
//                 type="tel"
//                 required
//                 placeholder="+1 234 567 8901"
//                 value={form.phone}
//                 onChange={handleChange}
//                 className={inputClass}
//               />
//             </div>

//             <div>
//               <label htmlFor="company" className={labelClass}>
//                 Company/Organization <span className={starClass}>*</span>
//               </label>
//               <input
//                 id="company"
//                 name="company"
//                 type="text"
//                 required
//                 placeholder="ABC Builders Ltd"
//                 value={form.company}
//                 onChange={handleChange}
//                 className={inputClass}
//               />
//             </div>

//             <div>
//               <label htmlFor="address" className={labelClass}>
//                 Project Address <span className={starClass}>*</span>
//               </label>
//               <input
//                 id="address"
//                 name="address"
//                 type="text"
//                 required
//                 placeholder="123 Main Street, City"
//                 value={form.address}
//                 onChange={handleChange}
//                 className={inputClass}
//               />
//             </div>
//           </div>

//           {/* Project types */}
//           <fieldset className="mt-6">
//             <legend className={labelClass}>
//               Type of Project (Multi-select) <span className={starClass}>*</span>
//             </legend>

//             <div className="flex flex-wrap gap-x-6 gap-y-3">
//               {projectTypes.map((type) => (
//                 <label
//                   key={type}
//                   className="flex items-center gap-2 text-xs text-[#3770A8] cursor-pointer select-none"
//                 >
//                   <input
//                     type="checkbox"
//                     checked={form.types.includes(type)}
//                     onChange={() => handleTypeToggle(type)}
//                     className="w-4 h-4 accent-[#3770A8] cursor-pointer"
//                   />
//                   {type}
//                 </label>
//               ))}
//             </div>
//           </fieldset>

//           <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
//             <div>
//               <label htmlFor="budget" className={labelClass}>
//                 Estimated Budget <span className={starClass}>*</span>
//               </label>
//               <select
//                 id="budget"
//                 name="budget"
//                 required
//                 value={form.budget}
//                 onChange={handleChange}
//                 className={`${inputClass} appearance-none cursor-pointer`}
//               >
//                 <option value="">$10,000 - $50,000</option>
//                 <option value="10-50k">$10,000 - $50,000</option>
//                 <option value="50-100k">$50,000 - $100,000</option>
//                 <option value="100-500k">$100,000 - $500,000</option>
//                 <option value="500k+">$500,000+</option>
//               </select>
//             </div>

//             <div>
//               <label htmlFor="startDate" className={labelClass}>
//                 Preferred Start Date <span className={starClass}>*</span>
//               </label>
//               <input
//                 id="startDate"
//                 name="startDate"
//                 type="date"
//                 required
//                 value={form.startDate}
//                 onChange={handleChange}
//                 className={`${inputClass} cursor-pointer`}
//               />
//             </div>
//           </div>

//           <div className="mt-6">
//             <label htmlFor="description" className={labelClass}>
//               Project Description <span className={starClass}>*</span>
//             </label>
//             <textarea
//               id="description"
//               name="description"
//               rows={5}
//               required
//               placeholder="Briefly describe your project requirements, site size, and expectations."
//               value={form.description}
//               onChange={handleChange}
//               className={`${inputClass} h-auto py-3 resize-y`}
//             />
//           </div>

//           <div className="mt-8">
//             <Button type="submit" size="sm" rounded="none" variant="accent">
//               SUBMIT NOW
//             </Button>
//           </div>
//         </form>
//       </section>

//       {/* ---------------- CTA ---------------- */}
//       <section className="bg-[#242424] py-14">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-6">
//           <h2 className="text-2xl md:text-4xl font-semibold text-white leading-snug">
//             Your Dream Project Awaits —<br />
//             Get Started Today!
//           </h2>

//           <Icons size="lg" rounded="full" variant="accent" aria-label="Get started">
//             <img src={assets.arrow_up_right} alt="" className="w-5 h-5" />
//           </Icons>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default RequestQuotePage;