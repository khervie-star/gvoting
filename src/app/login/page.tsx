import React from "react";
import loginImg from "../../assets/login 1.svg";

const Page = () => {
  return (
    <div className="w-full h-screen bg-[#001124] p-8 md:p-12 flex gap-4 items-center">
      <div className="flex-1 p-8 w-full">
        <img src={loginImg.src} alt="" className="w-full object-cover" />
      </div>
      <div className="flex-1 p-12">
        <div className="h-[500px] w-full shadow rounded-[20px] bg-white p-6">
          <div className="font-outfit font-semibold text-[36px] text-left text-[#001124] mb-6">
            Login
          </div>
          <form>
            <div className="relative w-full my-4">
              <label className="mb-2 font-medium font-outfit text-[20px]">
                Email
              </label>
              <input
                type="email"
                placeholder="yourmail@email.com"
                className="w-full rounded-[8px] border border-solid border-[#001124] p-3 font-outfit"
              />
            </div>
            <div className="relative w-full my-4">
              <label className="mb-2 font-medium font-outfit text-[20px]">
                Password
              </label>
              <input
                type="password"
                placeholder="password"
                className="w-full rounded-[8px] border border-solid border-[#001124] p-3 font-outfit"
              />
            </div>

            <div className="">
              <button className="bg-[#001124] rounded-[8px] text-white text-[20px] font-outfit font-medium w-full flex justify-center items-center py-4 mt-8">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
