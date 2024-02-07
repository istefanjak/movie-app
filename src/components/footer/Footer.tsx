import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="py-16 px-10 flex flex-wrap justify-center gap-5 text-sm font-secondary">
      <div className="flex flex-col gap-1">
        <div>
          <span>
            © 2024 JustWatch - Vodič kroz platforme za streaming - - All
            external content remains the property of the rightful owner.
          </span>
        </div>
        <div>
          <Link href="#" className="hover:text-white">
            Impresum
          </Link>
          <Dot />
          <Link href="#" className="hover:text-white">
            Politika privatnosti
          </Link>
          <Dot />
          <Link href="#" className="hover:text-white">
            Suradnja
          </Link>
        </div>
      </div>
      <div className="flex gap-3">
        <Image src="/assets/images/eu1.png" alt="eu1" width={180} height={40} />
        <Image src="/assets/images/eu2.png" alt="eu1" width={116} height={40} />
      </div>
    </footer>
  );
};

const Dot: FC = () => {
  return <span className="px-2">·</span>;
};

export default Footer;
