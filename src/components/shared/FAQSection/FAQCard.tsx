import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import emailjs from "emailjs-com";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

type TPOSITION = {
  id: number;
  jobId: string;
  jobTitle: string;
  jobDescription: string;
  jobRequirement: string[];
  jobIllustration: string;
  skills: string[];
  jobType: string;
  jobDuration: string;
  salary: number;
};
// JOB ACCORDIAN COMPONENT
const FAQCard = ({ position }: { position: TPOSITION }) => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

  const handleIsExpanded = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div
      className={` ${
        isExpanded ? "max-h-full" : "max-h-16"
      } rounded-xl flex flex-col items-center justify-between overflow-hidden transition-transform duration-300   bg-orange-200 hover:scale-105`}
    >
      <div
        className=" w-full flex items-center justify-between p-4 text-neutral-700 
        "
        onClick={handleIsExpanded}
      >
        <span className="text-2xl font-bold">{position.jobTitle}</span>

        <span
          className={`p-1 rounded-full border border-neutral-700 hover:border-orange-400 hover:bg-orange-400/40
             flex items-center transition-all duration-300 cursor-pointer ${
               isExpanded && "rotate-180"
             }`}
        >
          <IoChevronDown className="" />
        </span>
      </div>
      {/* <span className='p-4 text-white'>
        <h1 className='text-xl font-bold'>Job Description</h1>
        {position.jobDescription}
        <div className='w-96 mx-auto'>
          <img
            src={position.jobIllustration}
            alt=''
            className='w-full object-cover  '
          />
        </div>
        {position?.jobRequirement.length > 0 && (
          <h1 className='text-xl font-bold pt-4'>Requirement</h1>
        )}
        {position?.jobRequirement.length > 0 && (
          <ol className='list-disc list-inside'>
            {position.jobRequirement.map((requirement, index) => {
              return (
                <li className='pl-4' key={index}>
                  {requirement}
                </li>
              );
            })}
          </ol>
        )}
        {position.skills.length > 0 && (
          <h1 className='text-xl font-bold pt-4'>Skills</h1>
        )}
        {position?.skills.length > 0 && (
          <div>
            <ul className='flex items-center justify-start gap-2 flex-wrap '>
              {position.skills.map((skill, index) => (
                <li
                  className='px-3 py-1 rounded-full bg-blue-400 text-sm'
                  key={index}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}
      </span> */}
      <div className="p-4">
        {/* description and illustration */}
        <div className="flex-wrap flex md:flex-nowrap items-start justify-center gap-2">
          <div className="w-full">
            <img
              src={position.jobIllustration}
              alt=""
              className="w-full object-cover"
            />
          </div>
          <div className=" text-neutral-700 w-full  ">
            {position.jobDescription}
            <div className="flex flex-wrap  ">
              {position.skills.map((item) => {
                return (
                  <div className="w-32 relative " key={item}>
                    <img
                      src="/assets/images/stroke1.png"
                      alt=""
                      className=" object-cover"
                    />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full  text-purple-100">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* skill */}
      </div>
      <div className=" w-full px-4 ">
        <JobApplicationForm />
      </div>
    </div>
  );
};

export default FAQCard;

interface FormData {
  name: string;
  email: string;

  mobileNumber: number;
  coverNote: string;
  gender: string;
  cv: File | null;
}

interface FormError {
  [key: string]: string;
}

export function JobApplicationForm() {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    mobileNumber: 0,
    coverNote: "",
    gender: "",
    cv: null,
  });
  const [formError] = React.useState<FormError>({});
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (
      name === "cv" &&
      e.target instanceof HTMLInputElement &&
      e.target.files
    ) {
      setFormData({
        ...formData,
        [name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const sendEmail = async (values: FormData) => {
    let base64CV = "";
    if (values.cv) {
      base64CV = await fileToBase64(values.cv);
    }

    const convertedValues: Record<string, unknown> = {
      ...values,
      cv: base64CV,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        convertedValues,
        import.meta.env.VITE_EMAIL_JS_USER_ID
      )
      .then((result) => {
        console.log(result.text);
        console.log("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
      });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Prevent default form submission
    await sendEmail(formData);
  };
  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (
      e.target instanceof HTMLInputElement &&
      e.target.files &&
      e.target.files.length > 0
    ) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-neutral-700 font-bold px-5 py-2 w-full border  bg-transparent border-neutral-700 hover:bg-orange-400/40 hover:border-orange-400 mb-4 rounded-md  transition-all duration-300">
          Apply Now
        </Button>
      </DialogTrigger>
      <DialogContent className="z-[999999]">
        <DialogHeader>
          <DialogTitle className="text-center">
            Job Application From
          </DialogTitle>
          <DialogDescription className="text-center">
            Fill details below and we'll cantact you.
          </DialogDescription>
        </DialogHeader>
        <div className=" rounded-2xl">
          {/* <h1 className='text-4xl font-bold my-2 mb-4'>Sign Up</h1>
          <p className='text-lg font-normal  mb-4 '>Your Feedback Matters.</p> */}
          <form onSubmit={handleSubmit} className="flex flex-col ">
            <div className="w-[100%] flex flex-col">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Name"
                autoComplete="off"
                className="p-3 text-base outline-black border  bg-white text-black mb-4 rounded-lg"
              />
              {formError?.name && (
                <p className="text-red-500 text-sm font-normal mb-3">
                  {formError?.name}
                </p>
              )}
            </div>
            <div className="w-[100%] flex flex-col">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Email"
                autoComplete="off"
                className="p-3 text-base outline-black border  bg-white text-black mb-4 rounded-lg"
              />
              {formError.email && (
                <p className="text-red-500 text-sm font-normal mb-3">
                  {formError.email}
                </p>
              )}
            </div>
            <div className="w-[100%] flex flex-col">
              <input
                type="tel"
                name="mobileNumber"
                onChange={handleChange}
                placeholder="Mobile Number"
                autoComplete="off"
                className="p-3 text-base outline-black border  bg-white text-black mb-4 rounded-lg"
              />
              {formError.mobileNumber && (
                <p className="text-red-500 text-sm font-normal mb-3">
                  {formError.mobileNumber}
                </p>
              )}
            </div>
            <div className="w-[100%] flex flex-col">
              <input
                type="text"
                name="gender"
                onChange={handleChange}
                placeholder="Gender"
                autoComplete="off"
                className="p-3 text-base outline-black border  bg-white text-black mb-4 rounded-lg"
              />
              {formError.gender && (
                <p className="text-red-500 text-sm font-normal mb-3">
                  {formError.gender}
                </p>
              )}
            </div>
            <div className="w-[100%] flex flex-col">
              <input
                name="portfolio"
                onChange={handleChange}
                placeholder="Portfolio Link"
                autoComplete="off"
                className="p-3 text-base outline-black border  bg-white text-black mb-4 rounded-lg"
              />
              {formError.portfolio && (
                <p className="text-red-500 text-sm font-normal mb-3">
                  {formError.portfolio}
                </p>
              )}
            </div>
            <div className="w-[100%] flex flex-col">
              <textarea
                name="coverNote"
                onChange={handleChange}
                placeholder="Cover note"
                autoComplete="off"
                className="p-3 text-base outline-black border  bg-white text-black mb-4 rounded-lg"
              />
              {formError.tellUsAboutYourself && (
                <p className="text-red-500 text-sm font-normal mb-3">
                  {formError.tellUsAboutYourself}
                </p>
              )}
            </div>

            <div className="w-[100%] flex flex-col">
              <input
                type="file"
                id="cv"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
              <label htmlFor="cv">
                <button
                  type="button"
                  onClick={() => document.getElementById("cv")?.click()}
                  className="p-3  w-full text-base  text-black mb-4 rounded-lg bg-slate-200 hover:bg-slate-300 transition-all duration-300"
                >
                  {selectedFile ? selectedFile.name : "Upload Cover Letter"}
                </button>
              </label>
              {formError.gender && (
                <p className="text-red-500 text-sm font-normal mb-3">
                  {formError.gender}
                </p>
              )}
            </div>

            <div className="w-[100%] flex flex-col">
              <input
                type="file"
                id="cv"
                name="cv"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
              <label htmlFor="cv">
                <button
                  type="button"
                  onClick={() => document.getElementById("cv")?.click()}
                  className="p-3  w-full text-base  text-black mb-4 rounded-lg bg-slate-200 hover:bg-slate-300 transition-all duration-300"
                >
                  {selectedFile ? selectedFile.name : "Upload Resume"}
                </button>
              </label>
              {formError.gender && (
                <p className="text-red-500 text-sm font-normal mb-3">
                  {formError.gender}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="p-3 text-base   bg-primary text-white mb-4 rounded-lg hover:bg-orange-500 transition-all duration-300"
            >
              {" "}
              Submit
            </button>
            {/* <p className='text-base font-normal'>
              Already have an accout?{" "}
              <span
                onClick={() => navigate("/sign-in")}
                className='text-base underline cursor-pointer text-amber-500'
              >
                Sign in
              </span>
            </p> */}
          </form>
        </div>
        {/* <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
