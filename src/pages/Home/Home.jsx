import React from "react";
import Hero from "../../components/Hero";
import Menu from "../../components/Menu";
import About from "../../components/About";
import PrebookForm from "../../components/PrebookForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <About />
      <PrebookForm />
    </>
  );
}