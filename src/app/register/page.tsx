import React from "react";
import registerImg from "../../assets/registerImg.svg";

const Page = () => {
  return (
    <div className="w-full h-full bg-[#001124] p-4 md:p-12 flex gap-4 items-center">
      <div className="flex-1 p-12 w-full hidden md:block">
        <img src={registerImg.src} alt="" className="w-[75%] object-cover" />
      </div>
      <div className="flex-1 p-0 md:p-12">
        <div className="h-full w-full shadow rounded-[20px] bg-white p-3 md:p-6">
          <div className="font-outfit font-semibold text-[36px] text-left text-[#001124] mb-6">
            Register
          </div>
          <form>
            <div className="flex gap-6 items-center">
              <div className="relative w-full my-4">
                <label className="mb-2 font-medium font-outfit text-[20px]">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="James"
                  className="w-full rounded-[8px] border border-solid border-[#001124] p-3 font-outfit"
                />
              </div>
              <div className="relative w-full my-4">
                <label className="mb-2 font-medium font-outfit text-[20px]">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Edwards"
                  className="w-full rounded-[8px] border border-solid border-[#001124] p-3 font-outfit"
                />
              </div>
            </div>
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
                Phone Number
              </label>
              <input
                type="text"
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
            <div className="relative w-full my-4">
              <label className="mb-2 font-medium font-outfit text-[20px]">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="password"
                className="w-full rounded-[8px] border border-solid border-[#001124] p-3 font-outfit"
              />
            </div>
            <div className="relative w-full my-4">
              <label className="mb-2 font-medium font-outfit text-[20px]">
                Date of birth
              </label>
              <input
                type="date"
                placeholder="21/01/1808"
                className="w-full rounded-[8px] border border-solid border-[#001124] p-3 font-outfit"
              />
            </div>

            <div className="relative w-full my-4">
              <label className="mb-2 font-medium font-outfit text-[20px]">
                Mother&apos;s Maiden name
              </label>
              <input
                type="text"
                placeholder="Favorite course"
                className="w-full rounded-[8px] border border-solid border-[#001124] p-3 font-outfit"
              />
            </div>

            <div className="">
              <button className="bg-[#001124] rounded-[12px] text-white text-[24px] font-outfit font-medium w-full flex justify-center items-center py-4 mt-8">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
