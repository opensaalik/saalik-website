import Image from "next/image";
import vercel from "/public/saalik500.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-20 sticky top-0">
      <div className="container mx-auto px-4 py-2 h-full">
        <div className="flex items-center justify-between h-full ml-10">
          <Link href="/">
            <Image src={vercel} alt="SAALIK" width={100} height={100} />
          </Link>
          <div className="hidden md:flex w-full gap-x-6 list-none justify-around fold-bold">
            <li>
              <Link href="/about">About</Link>
            </li>

            <li>
              <Link href="/blog">Blog</Link>

            </li>

            <li>
              <Link href="/contact">Contact</Link>
            </li>


          </div>
        </div>
      </div>
    </div>
  );
}
