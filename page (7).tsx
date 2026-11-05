import type { Metadata } from "next";
import CaseStudy from "@/components/casestudies/CaseStudy";
import { markup, script } from "@/components/casestudies/curlycrowns/content";
import "@/components/casestudies/curlycrowns/styles.css";

export const metadata: Metadata = {
  title: "Curly Crowns Case Study · Ayema Faisal",
  description: "Case study for Curly Crowns, a curly hair care e-commerce website: hair match, shop, cart and five homepage directions.",
};

export default function Page() {
  return <CaseStudy className="cs-curly" markup={markup} script={script} />;
}
