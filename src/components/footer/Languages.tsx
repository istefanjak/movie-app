import React, { FC } from "react";
import Link from "next/link";

const Languages: FC = () => {
  const className =
    "text-center md:text-left w-full md:w-1/2 lg:w-1/4 px-10 mx-auto";

  return (
    <section className="flex flex-col gap-8 items-center">
      <h2 className="font-primary font-bold">JustWatch je dostupan u</h2>
      <div className="flex flex-wrap gap-y-10">
        <Container
          className={className}
          title="North America"
          links={[
            { text: "Bermudski otoci", href: "#" },
            { text: "Kanada", href: "#" },
            { text: "Meksiko", href: "#" },
            { text: "Sjedinjene Američke Države", href: "#" },
          ]}
        />
        <Container
          className={className}
          title="Europe"
          links={[
            { text: "Albanija", href: "#" },
            { text: "Andora", href: "#" },
            { text: "Austrija", href: "#" },
            { text: "Hrvatska", href: "#" },
          ]}
        />
        <Container
          className={className}
          title="Asia"
          links={[
            { text: "Filipni", href: "#" },
            { text: "Hong Kong", href: "#" },
            { text: "Indija", href: "#" },
            { text: "Japan", href: "#" },
          ]}
        />
        <Container
          className={className}
          title="Africa"
          links={[
            { text: "Alžir", href: "#" },
            { text: "Čad", href: "#" },
            { text: "Gana", href: "#" },
            { text: "Kenija", href: "#" },
          ]}
        />
      </div>
    </section>
  );
};

const Container: FC<{
  title: string;
  links: { text: string; href: string }[];
  className?: string;
}> = ({ title, links, className }) => {
  return (
    <div className={className}>
      <h4 className="font-bold mb-3">{title}</h4>
      <div>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className="font-tertiary hover:text-white">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Languages;
