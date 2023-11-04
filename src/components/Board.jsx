"use client";
import { useState } from "react";
import { ErrorToast, SuccessToast } from "@/app/utili/FormHelper";

const BlogForm = () => {
  const [data, setData] = useState({
    title: "",
    short_des: "",
    long_des: "",
    img1: "",
    keywords: "",
    type: "",
  });
  const [submit, setSubmit] = useState(false);

  const inputOnChange = (name, value) => {
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  const formSubmit = async () => {
    // setSubmit(true);
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    let res = await fetch("/api/blog", options);
    let ResJson = await res.json();

    if (ResJson["status"] === "success") {
      SuccessToast("Blog create success");
    } else {
      //   setSubmit(false);
      ErrorToast("Request Fail");
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Title
                  </label>
                  <input
                    onChange={(e) => {
                      inputOnChange("title", e.target.value);
                    }}
                    type="text"
                    id="title"
                    name="title"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Caption
                  </label>
                  <input
                    onChange={(e) => {
                      inputOnChange("short_des", e.target.value);
                    }}
                    type="text"
                    id="short_des"
                    name="short_des"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Image URL
                  </label>
                  <input
                    onChange={(e) => {
                      inputOnChange("img1", e.target.value);
                    }}
                    type="text"
                    id="img1"
                    name="img1"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Keywords
                  </label>
                  <input
                    onChange={(e) => {
                      inputOnChange("keywords", e.target.value);
                    }}
                    id="keywords"
                    name="keywords"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Description
                  </label>
                  <textarea
                    id="long_des"
                    name="long_des"
                    onChange={(e) => {
                      inputOnChange("long_des", e.target.value);
                    }}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Type
                  </label>
                  <input
                    onChange={(e) => {
                      inputOnChange("type", e.target.value);
                    }}
                    id="type"
                    name="type"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Category
                  </label>
                  <input
                    onChange={(e) => {
                      inputOnChange("categories", e.target.value);
                    }}
                    type="text"
                    id="categories"
                    name="categories"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div> */}

              <div className="p-2 w-full">
                <button
                  submit={submit}
                  onClick={formSubmit}
                  type="submit"
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogForm;
