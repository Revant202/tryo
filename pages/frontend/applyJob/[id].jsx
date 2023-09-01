import NavBar from "@/components/NavBar";
import { apply_job } from "@/Services/job";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ApplyJob() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id } = router.query;
  const activeUser = useSelector((state) => state.User.userData);
  const [formikData, setFormikData] = useState({
    name: "",
    email: activeUser?.email,
    about: "",
    job: id,
    user: activeUser?._id,
  });
  const [file, setFile] = useState(null);
  const [error, setError] = useState({
    name: "",
    email: "",
    about: "",
    job: "",
    user: "",
    cv: "",
  });

  const { name, email, about, job, user } = formikData;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      setError({ ...error, name: "Name Field is required" });
      return;
    }

    if (!email) {
      setError({ ...error, email: "Email Field is required" });
      return;
    }

    if (!user) {
      return toast.error("Please Login First");
    }

    if (!job) {
      return toast.error("Please Follow Apply Process ");
    }

    if (!about) {
      setError({ ...error, about: "About Field is required" });
      return;
    }

    if (!file) {
      setError({ ...error, cv: "Please Upload CV" });
      return;
    }

    // Check if the file type is PDF
    if (file.type !== "application/pdf") {
      setError({ ...error, cv: "Please Upload a PDF file" });
      return;
    }

    const form = new FormData();
    form.append("name", name);
    form.append("email", email);
    form.append("about", about);
    form.append("job", job);
    form.append("user", user);
    form.append("cv", file);

    const res = await apply_job(form);
    if (res.success) {
      toast.success("Your Application is Submitted , Redirecting ... ");
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } else {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <>
      <NavBar />
      <div className="w-full  py-20 flex items-center  justify-center flex-col">
        <form
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          className="sm:w-2/5 w-full px-16 py-12 mx-10 my-10 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
        >
        <div className="w-full h-24 text-cyan-600 font-bold flex items-center justify-center flex-col">
          <h1 className="text-3xl">Application Form</h1>
        </div>
          <div className="w-full mb-4  flex flex-col items-start justify-center">
            <label htmlFor="title" className="mb-1 text-base font-semibold">
              Name :
            </label>
            <input
              name="name"
              onChange={(e) =>
                setFormikData({ ...formikData, name: e.target.value })
              }
              type="text"
              id="title"
              className="w-full py-2 px-3 mb-2 border border-cyan-600 rounded"
              placeholder="Enter Name "
            />
            {error.name && <p className="text-sm text-red-500">{error.name}</p>}
          </div>
          <div className="w-full mb-4  flex flex-col items-start justify-center">
            <label htmlFor="email" className="mb-1 text-base font-semibold">
              Email :
            </label>
            <input
              name="email"
              value={email}
              disabled
              type="email"
              id="email"
              className="w-full  py-2 px-3 mb-2 border border-cyan-600 rounded"
              placeholder="Enter Email"
            />
            {error.email && (
              <p className="text-sm text-red-500">{error.email}</p>
            )}
          </div>
          <div className="w-full mb-4  flex flex-col items-start justify-center">
            <label
              htmlFor="description"
              className="mb-1 text-base font-semibold"
            >
              About :
            </label>
            <textarea
              name="about"
              onChange={(e) =>
                setFormikData({ ...formikData, about: e.target.value })
              }
              type="description"
              id="description"
              className="w-full py-2 px-3 mb-2 border border-cyan-600 rounded"
              placeholder="Enter description"
            />
            {error.about && (
              <p className="text-sm text-red-500">{error.about}</p>
            )}
          </div>
          <div className="w-full mb-4  flex flex-col items-start justify-center">
            <label htmlFor="file" className="mb-1 text-base font-semibold">
              Upload CV :
            </label>
            <input
              accept="application/pdf"
              name="cv"
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              id="file"
              className="w-full py-2 px-3 mb-2 border border-cyan-600 rounded"
              placeholder="Enter Email"
            />
            {error.cv && <p className="text-sm text-red-500">{error.cv}</p>}
          </div>

          <button
            type="submit"
            className="w-full my-10 py-4 rounded bg-cyan-600 text-white font-semibold tracking-widest"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
