import Navigation from "../component/Navigation";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <Navigation>
      <main>
        <div className="max-w-screen-md p-4 bg-white mx-auto min-h-full">
          <div className="w-full rounded-md my-4 bg-blue-text text-white p-4 text-center">
            Aplikasi Al-Quran Berbasis Web
          </div>
          <div className="flex flex-row justify-end">
            <Link href="/indexquran">
              <a className="flex items-center justify-end text-xl text-right text-blue-text bg-white border-2 border-blue-text rounded-md font-semibold px-4 py-3">
                <span className="mr-4">Mulai Membaca</span>
                <Image
                  className="-rotate-90 transform"
                  src="/loadmore.svg"
                  alt="Menu"
                  height="32px"
                  width="32px"
                />
              </a>
            </Link>
          </div>
        </div>
      </main>
    </Navigation>
  );
}
