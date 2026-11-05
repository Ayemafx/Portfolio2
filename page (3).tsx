import type { Metadata } from "next";
import CaseStudy from "@/components/casestudies/CaseStudy";
import { markup, script } from "@/components/casestudies/wizefulfill/content";
import "@/components/casestudies/wizefulfill/styles.css";

export const metadata: Metadata = {
  title: "WizeFulfill Case Study · Ayema Faisal",
  description: "Case study for the WizeFulfill warehouse management software website: structure, iterations, integrations page and mobile.",
};

export default function Page() {
  return <CaseStudy className="cs-wize" markup={markup} script={script} />;
}
