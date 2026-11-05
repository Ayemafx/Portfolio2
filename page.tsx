import type { Metadata } from "next";
import CaseStudy from "@/components/casestudies/CaseStudy";
import { markup, script } from "@/components/casestudies/nette/content";
import "@/components/casestudies/nette/styles.css";

export const metadata: Metadata = {
  title: "Nette Case Study · Ayema Faisal",
  description: "UI/UX case study for Nette, a padel and racquet sports club booking app. Designed in one month.",
};

export default function Page() {
  return <CaseStudy className="cs-nette" markup={markup} script={script} />;
}
