import React from "react";
import Navigation from "../component/Navigation";
import Image from "next/image";
import Link from "next/link";

const about = () => {
  return (
    <Navigation>
      <main>
        <div className="text-gray-600 font-normal text-base max-w-screen-md mx-auto px-3 pt-4 pb-4">
          <Link href="/">
            <a className="gap-x-4 mb-8 text-xl font-semibold text-blue-text flex flex-row justify-start items-center">
              <Image
                className="transform rotate-90"
                src="/loadmore.svg"
                alt="Menu"
                height="18px"
                width="18px"
              />{" "}
              <span>Back To Home</span>
            </a>
          </Link>
          <h1 className="w-full text-lg font-semibold text-gray-600 py-4">
            ABOUT
          </h1>
          <p>Aplikasi Al-Quran berbasis web</p>
          <p>
            Data API diambil dari{" "}
            <a
              className="text-blue-500 underline"
              rel="noopener noreferrer"
              target="_blank"
              href="https://api.quran.sutanlab.id/"
            >
              https://api.quran.sutanlab.id/
            </a>
          </p>
          <p>
            Mengambil ilustrasi AlQuran dari :{" "}
            <a
              className="text-blue-500 underline"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.figma.com/community/file/966921639679380402"
            >
              https://www.figma.com/community/file/966921639679380402
            </a>
          </p>
          <p>
            Mengambil referensi warna dan sebagian besar layout dari :{" "}
            <a
              className="text-blue-500 underline"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.behance.net/gallery/77733463/Quran-Application-UI-UX-Design-AnalyzeQuran"
            >
              https://www.behance.net/gallery/77733463/Quran-Application-UI-UX-Design-AnalyzeQuran
            </a>
          </p>
          <p>Fitur yang direncanakan ada: </p>
          <ul className="list-disc ml-4">
            <li>Tajwid (belum menemukan API yang menyediakan tajwid)</li>
            <li>MP3 bacaan Al-Quran</li>
          </ul>
          <p>
            If you have any suggestions for us, please send an email to{" "}
            <a
              className="text-blue-500 underline"
              rel="noopener noreferrer"
              target="_blank"
              href="mailto:fahmilukis04@gmail.com"
            >
              fahmilukis04@gmail.com
            </a>
          </p>
          <p>Terimakasih.</p>
        </div>
      </main>
    </Navigation>
  );
};

export default about;
