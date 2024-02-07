import React, { FC } from "react";
import AboutCard from "@/components/about/AboutCard";

const AboutSection: FC = () => {
  return (
    <section className="grid grid-cols-1 xl:grid-cols-3 gap-5 place-items-center">
      <AboutCard
        imageUrl="/assets/images/about/1.png"
        text1="Sve na jednom mjestu"
        text2="Vaš potpuni vodič za streaming"
        text3="Dobijte osobne preporuke za svoje omiljene platforme za streaming. Pokazat ćemo vam gdje možete pogledati filmove, serije i sport."
      />
      <AboutCard
        imageUrl="/assets/images/about/2.png"
        text1="Jedno pretraživanje"
        text2="Sve platforme u jednom pretraživanju"
        text3="Ne morate se više prebacivati s jedne platforme na drugu kako biste vidjeli jesu li film ili serija dostupni. Naša funkcionalnost jedinstvenog pretraživanja rješava taj problem."
      />
      <AboutCard
        imageUrl="/assets/images/about/3.png"
        text1="Jedinstvena moja lista"
        text2="Spojite sve svoje liste"
        text3="Napravite jedinstvenu listu sa svakim filmom i serijom koje želite gledati: jednom listom pokrijte sve platforme za streaming na svim svojim uređajima."
      />
    </section>
  );
};

export default AboutSection;
