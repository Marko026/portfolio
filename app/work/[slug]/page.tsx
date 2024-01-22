import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = ({ params }: any) => {
  return (
    <div>
      <div>
        <div className=" max-w-4xl mx-auto text-center mt-28">
          <h1 className="h1-semibold ">
            <span className="bg-gradient-to-r from-[#0026FF] to-[#C1A4FF] bg-clip-text text-transparent">
              {" "}
              Morrent
            </span>{" "}
            - The modern solution for car rentals
          </h1>
          <p className="paragraph-regular text-white-800">
            Dive into a spectrum of projects that reflect my passion, skill, and
            commitment
          </p>
        </div>
        <Image
          src="/images/morent.png"
          alt="hero"
          width={500}
          height={500}
          className="w-full h-full rounded-lg mt-10 mb-20 max-h-[680px]"
        />
      </div>
      <div className="flex flex-col space-y-14">
        <div className="flex justify-between">
          <h2 className="w-1/4 h2-normal">Overview</h2>
          <div className="w-3/4 base-regular text-white-800">
            Morrent, our cutting-edge car rental application developed using the
            robust MERN stack, is revolutionizing the car rental industry. With
            a dynamic homepage showcasing featured vehicles, convenient pickup
            and drop-off locations, and a comprehensive list of available cars,
            It ensures a seamless and visually appealing experience for users.
          </div>
        </div>
        <div className="flex justify-between">
          <h2 className="w-1/4 h2-normal">Problem</h2>
          <div className="w-3/4 base-regular text-white-800">
            Morrent, our cutting-edge car rental application developed using the
            robust MERN stack, is revolutionizing the car rental industry. With
            a dynamic homepage showcasing featured vehicles, convenient pickup
            and drop-off locations, and a comprehensive list of available cars,
            It ensures a seamless and visually appealing experience for users.
          </div>
        </div>
        <div className="flex justify-between">
          <h2 className="w-1/4 h2-normal">Tech Stack</h2>
          <div className="w-3/4 base-regular text-white-800">
            Morrent, our cutting-edge car rental application developed using the
            robust MERN stack, is revolutionizing the car rental industry. With
            a dynamic homepage showcasing featured vehicles, convenient pickup
            and drop-off locations, and a comprehensive list of available cars,
            It ensures a seamless and visually appealing experience for users.
          </div>
        </div>
        <div className="flex justify-between">
          <h2 className="w-1/4 h2-normal">Reflection</h2>
          <div className="w-3/4 base-regular text-white-800">
            Morrent, our cutting-edge car rental application developed using the
            robust MERN stack, is revolutionizing the car rental industry. With
            a dynamic homepage showcasing featured vehicles, convenient pickup
            and drop-off locations, and a comprehensive list of available cars,
            It ensures a seamless and visually appealing experience for users.
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-1/4 ">
            <h2 className="h2-normal">Final Site</h2>
            <Link href={""} className="paragraph-regular text-white-800">
              morrent.vercel.app
              <Image
                src="/icons/Vector.svg"
                width={10}
                height={10}
                alt="arrow"
                className="inline-block ml-2"
              />
            </Link>
          </div>
          <div className="w-3/4 bg-black-200 bg-opacity-50">
            <div className="flex justify-center ">
              <Image
                src="/images/laptop.png"
                alt="hero"
                width={500}
                height={500}
                className="w-3/5 rounded-lg mt-10 mb-20 max-h-[532px]"
              />
              <Image
                src="/images/small-phone.png"
                alt="hero"
                width={500}
                height={500}
                className="w-1/6 rounded-lg  mb-20 max-h-[332px] mt-auto"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <h2 className="w-1/4 h2-normal">Learning</h2>
          <ol className="w-3/4 base-regular list-decimal space-y-6 text-white-800">
            <li>
              Gained extensive knowledge of full authentication & authorization
              implementation, including the use of industry-standard security
              protocols such as JWT
            </li>
            <li>
              Gained extensive knowledge of full authentication & authorization
              implementation, including the use of industry-standard security
              protocols such as JWT
            </li>
            <li>
              Gained extensive knowledge of full authentication & authorization
              implementation, including the use of industry-standard security
              protocols such as JWT
            </li>
            <li>
              Gained extensive knowledge of full authentication & authorization
              implementation, including the use of industry-standard security
              protocols such as JWT
            </li>
          </ol>
        </div>
        <div className="flex justify-between">
          <h2 className="w-1/4 h2-normal">Challenges</h2>
          <ol className="w-3/4 base-regular list-decimal space-y-6 text-white-800">
            <li>
              Gained extensive knowledge of full authentication & authorization
              implementation, including the use of industry-standard security
              protocols such as JWT
            </li>
            <li>
              Gained extensive knowledge of full authentication & authorization
              implementation, including the use of industry-standard security
              protocols such as JWT
            </li>
            <li>
              Gained extensive knowledge of full authentication & authorization
              implementation, including the use of industry-standard security
              protocols such as JWT
            </li>
          </ol>
        </div>
        <div className="flex justify-between">
          <h2 className="w-1/4 h2-normal">Future</h2>
          <div className="w-3/4 base-regular text-white-800">
            Morrent, our cutting-edge car rental application developed using the
            robust MERN stack, is revolutionizing the car rental industry. With
            a dynamic homepage showcasing featured vehicles, convenient pickup
            and drop-off locations, and a comprehensive list of available cars,
            It ensures a seamless and visually appealing experience for users.
          </div>
        </div>
      </div>
      <div className="flex justify-between py-28">
        <div className="">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/arrow-left.svg"
              alt="hero"
              width={30}
              height={30}
            />
            <p className="h2-normal">Previous Study</p>
          </div>
          <p className="text-white-800">JobIT - Job Finding App</p>
        </div>
        <div className="">
          <div className="flex items-center gap-2">
            <p className="h2-normal">Previous Study</p>
            <Image
              src="/icons/arrow-right.svg"
              alt="hero"
              width={30}
              height={30}
            />
          </div>
          <p className="text-white-800">Filmpire - AI Movie App</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
