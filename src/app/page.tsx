"use client";

import Image from "next/image";
import hero_img from "../assets/hero_image.png";
import Navbar from "@/components/Navbar";

import {
  BsShieldLockFill,
  BsHandIndexThumbFill,
  BsLaptop,
} from "react-icons/bs";
import { RiTimeFill, RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdDomainVerification } from "react-icons/md";

import { CgFileDocument } from "react-icons/cg";
import { FaSignInAlt, FaVoteYea } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { HiKey } from "react-icons/hi";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen bg-black flex items-center gap-4 relative">
        <div className="flex-1 px-8 h-full hidden md:block">
          <img src={hero_img.src} alt="" className="h-full" />
        </div>
        <div className="flex-1 md:p-12 p-8 text-center">
          <div className="text-white text-[48px] font-medium font-display">
            Be part of a decision
          </div>
          <div className="text-[#015FC7] text-[75px] md:text-[100px] font-bold font-display">
            Vote today
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center mt-4 font-outfit">
            <button className="bg-[#0160C8] w-full flex justify-center items-center py-2 text-[25px] text-white font-medium  rounded-[8px]">
              Register
            </button>
            <button className="bg-transparent border-2 border-solid border-[#0160C8] text-[#0160C8] w-full flex justify-center items-center py-2 text-[25px]  font-medium  rounded-[8px]">
              Read more
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 md:p-20 w-full h-full">
        <div className="font-display text-black text-[36px] md:text-[95px] gap-0 border-b-[7px] border-[#0160C8] w-fit">
          FEATURES
        </div>
        <div className="w-full my-12">
          <div className="flex justify-start gap-4 md:gap-16 items-center">
            <div className="">
              <BsShieldLockFill size={50} />
            </div>
            <div className="text-[20px] md:text-[36px] font-display my-4">
              Secured by 256 bit encryption
            </div>
          </div>
          <div className="flex justify-start gap-4 md:gap-16 items-center">
            <div className="">
              <MdDomainVerification size={50} />
            </div>
            <div className="text-[20px] md:text-[36px] font-display my-4">
              Verifiable transactions
            </div>
          </div>
          <div className="flex justify-start gap-4 md:gap-16 items-center">
            <div className="">
              <BsHandIndexThumbFill size={50} />
            </div>
            <div className="text-[20px] md:text-[36px] font-display my-4">
              Easy to use
            </div>
          </div>
          <div className="flex justify-start gap-4 md:gap-16 items-center">
            <div className="">
              <RiMoneyDollarCircleFill size={50} />
            </div>
            <div className="text-[20px] md:text-[36px] font-display my-4">
              Cheaper than ballot voting system
            </div>
          </div>
          <div className="flex justify-start gap-4 md:gap-16 items-center">
            <div className="">
              <RiTimeFill size={50} />
            </div>
            <div className="text-[20px] md:text-[36px] font-display my-4">
              Faster voting process
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#001124] p-8 md:p-20 w-full h-full">
        <div className="font-display text-white text-[36px] md:text-[95px] gap-0 border-b-[7px] border-white w-fit">
          ABOUT
        </div>
        <div className="w-full my-12 font-display text-justify text-white text-[20px] md:text-[50px]">
          An online voting system that will replace the old ballot sytem or
          paper system. Over the time we have utilized the required technology
          in every sector to improve efficiency and save the extra resources.
          But the voting system is still very expensive and requires a bigger
          workforce. The system is slower and still not completely tamper proof.
          We bring the system that is safe, reliable and solve the modern issues
          like higher reachability of the booth, crowd free voting, inexpensive,
          faster results and others.
        </div>
      </div>

      <div className="bg-white p-8 md:p-20 w-full h-full">
        <div className="font-display text-black text-[36px] md:text-[95px] gap-0 border-b-[7px] border-[#0160C8] w-fit">
          Follow these easy steps
        </div>
        <div className="w-full my-12">
          <div className="flex justify-start gap-4 md:gap-16 items-center">
            <div className="">
              <CgFileDocument size={50} />
            </div>
            <div className="text-[16px] md:text-[36px] font-display my-4">
              Register yourself by filling the required informations{" "}
            </div>
          </div>
          <div className="flex justify-start gap-4 md:gap-16 items-center">
            <div className="">
              <FaSignInAlt size={50} />
            </div>
            <div className="text-[16px] md:text-[36px] font-display my-4">
              Signin as user
            </div>
          </div>
          <div className="flex justify-start gap-4 md:gap-16 items-center">
            <div className="">
              <AiFillAppstore size={50} />
            </div>
            <div className="text-[16px] md:text-[36px] font-display my-4">
              {" "}
              Go to vote option on dashboard
            </div>
          </div>
          <div className="flex justify-start gap-4 md:gap-16 items-center">
            <div className="">
              <HiKey size={50} />
            </div>
            <div className="text-[16px] md:text-[36px] font-display my-4">
              Give security key{" "}
            </div>
          </div>
          <div className="flex justify-start gap-4 md:gap-16 items-center">
            <div className="">
              <FaVoteYea size={50} />
            </div>
            <div className="text-[16px] md:text-[36px] font-display my-4">
              Vote your candidate and submit{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
