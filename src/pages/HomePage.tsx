import { Hero } from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Experience } from "@/components/home/Experience";
import { EnterpriseProjects } from "@/components/home/EnterpriseProjects";
import { AiWorks } from "@/components/home/AiWorks";
import { Skills } from "@/components/home/Skills";
import { Contact } from "@/components/home/Contact";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export default function HomePage() {
  useDocumentTitle("朱越洋｜AI产品经理个人作品集");
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <EnterpriseProjects />
      <AiWorks />
      <Skills />
      <Contact />
    </>
  );
}
