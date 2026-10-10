// Media and downloadable files per component. Add a component's assets here as they become
// available; the home page (Documents, Presentations) and component pages both read from this.

import demoVideo from "@/assets/Demo.mp4";
import storyBookMarker from "@/assets/story_book_marker.png";
import systemDiagram from "@/assets/System_diagram.png";
import ui1 from "@/assets/1.jpg";
import ui2 from "@/assets/2.jpg";
import ui3 from "@/assets/3.jpg";
import ui4 from "@/assets/4.jpg";
import ui5 from "@/assets/5.jpg";
import ui6 from "@/assets/6.jpg";
import ui7 from "@/assets/7.jpg";
import ui8 from "@/assets/8.jpg";
import ui9 from "@/assets/9.jpg";
import physicalProposal from "@/assets/Project_Proposal.pdf";
import physicalGrade4 from "@/assets/Grade_4.pdf";
import physicalGrade5 from "@/assets/Grade_5.pdf";

import type { ComponentSlug, PresentationKey, ResourceLink } from "@/data/project";

export type ComponentAssets = {
  demoVideo?: string;
  marker?: string;
  diagram?: string;
  screens: string[];
  proposalDoc?: ResourceLink;
  finalDoc?: ResourceLink;
  slides: Partial<Record<PresentationKey, string>>;
  apk?: string;
  guides: ResourceLink[];
};

export const ASSETS: Record<ComponentSlug, ComponentAssets> = {
  "physical-science": {
    demoVideo,
    marker: storyBookMarker,
    diagram: systemDiagram,
    screens: [ui1, ui2, ui3, ui4, ui5, ui6, ui7, ui8, ui9],
    proposalDoc: {
      label: "Download PDF",
      href: physicalProposal,
      download: "Project_Proposal.pdf",
      type: "pdf",
    },
    slides: {
      proposal:
        "https://docs.google.com/presentation/d/1FDqdWzSrDYMExZTPc244BUZwVIMCgFHs/edit?usp=sharing&ouid=104282320511871493654&rtpof=true&sd=true",
      pp1: "https://docs.google.com/presentation/d/17eSOtE-wsy5l876LlMfQFeo0NROwMB_N/edit?usp=sharing&ouid=104282320511871493654&rtpof=true&sd=true",
    },
    apk: "https://drive.google.com/file/d/14vEFScXLe1Lpj0IMpz85U8tPWHk5bVAD/view?usp=sharing",
    guides: [
      { label: "Grade 4 Guide", href: physicalGrade4, download: "Grade_4.pdf", type: "pdf" },
      { label: "Grade 5 Guide", href: physicalGrade5, download: "Grade_5.pdf", type: "pdf" },
    ],
  },
  measurement: { screens: [], slides: {}, guides: [] },
  "life-science": { screens: [], slides: {}, guides: [] },
  "number-concepts": { screens: [], slides: {}, guides: [] },
};

export const pending = (label = "Coming soon"): ResourceLink => ({
  label,
  href: "#",
  type: "pending",
});

/** Link for one component's slides at one presentation, or a pending placeholder. */
export function slideLink(slug: ComponentSlug, key: PresentationKey, label: string): ResourceLink {
  const href = ASSETS[slug].slides[key];
  return href ? { label, href, type: "link" } : pending(label);
}
