// Content for the group site. Figures in RESULTS are taken from the group paper
// "A Bilingual Narrative-Based AR Storybook Framework for Primary STEAM Education".

export type Tone = "primary" | "warm" | "cool" | "fresh";

export type ComponentSlug = "measurement" | "life-science" | "physical-science" | "number-concepts";

// Tailwind Safelist for dynamic slug-based colors
// text-comp-measurement text-comp-life-science text-comp-physical-science text-comp-number-concepts
// bg-comp-measurement bg-comp-life-science bg-comp-physical-science bg-comp-number-concepts
// bg-comp-measurement-bg bg-comp-life-science-bg bg-comp-physical-science-bg bg-comp-number-concepts-bg
// ring-comp-measurement ring-comp-life-science ring-comp-physical-science ring-comp-number-concepts

export type SessionMetrics = {
  n: number;
  arTime: [number, number]; // mean, SD (seconds)
  quizTime: [number, number];
  mistakes: [number, number];
  retries: [number, number];
};

export type ResourceLink = {
  label: string;
  href: string;
  type: "pdf" | "link" | "apk" | "github" | "mp4" | "pending";
  download?: string;
};

export type StudyComponent = {
  slug: ComponentSlug;
  name: string;
  short: string;
  tagline: string;
  tone: Tone;
  /** Tailwind text colour class used for small accents on dark backgrounds. */
  accent: string;
  /** Storybook title as printed on the cover (paper Fig. 2). */
  storybook: string;
  /** Student ID of the member who owns this component, when known. */
  studentId?: string;
  problem: string;
  summary: string;
  concepts: string[];
  interactions: { title: string; body: string }[];
  favouriteVotes: number;
  favouriteLabel: string;
  metrics: SessionMetrics;
};

export const GROUP = {
  id: "R26-IM-003",
  title: "Narrative Based Augmented Reality for Early STEAM Education",
  paperTitle:
    "A Bilingual Narrative-Based Augmented Reality Storybook Framework for Primary STEAM Education",
  institute: "SLIIT",
  year: 2026,
  github: "https://github.com/Uvindu-Induwara-Mendis/R26-IM-003.git",
};

export const COMPONENTS: StudyComponent[] = [
  {
    slug: "measurement",
    name: "Basic Measurement",
    short: "Measurement",
    tagline: "Capacity, mass and time you can pour, weigh and read",
    tone: "warm",
    accent: "text-steam-orange",
    storybook: "A Measuring Day at Grandma's",
    problem:
      "Measurement units and instruments are taught through static drawings of jars, scales and clocks, so learners never see a quantity change as it is being measured.",
    summary:
      "Learners pour liquid into a measuring jar, place weights on a scale and read a clock face, turning instrument reading into a hands-on activity anchored to the storybook page.",
    concepts: [
      "Capacity & measuring jars",
      "Mass & weighing scales",
      "Reading time on a clock face",
      "Units of measurement",
    ],
    interactions: [
      {
        title: "Pouring into a Measuring Jar",
        body: "Learners tap each glass to pour juice into a 3D measuring jar and watch the level rise against the scale markings.",
      },
      {
        title: "Weights on a Scale",
        body: "Learners place 3D weights on a scale and read the result, linking the instrument to the quantity it measures.",
      },
      {
        title: "Reading the Clock",
        body: "Learners read the time on a 3D clock face anchored to the storybook page.",
      },
    ],
    favouriteVotes: 7,
    favouriteLabel: "Time",
    metrics: {
      n: 11,
      arTime: [77.4, 33.1],
      quizTime: [47.9, 20.3],
      mistakes: [1.0, 1.0],
      retries: [1.0, 1.0],
    },
  },
  {
    slug: "life-science",
    name: "Basic Life Science",
    short: "Life Science",
    tagline: "Life cycles that grow and change in front of you",
    tone: "fresh",
    accent: "text-steam-green",
    storybook: "Wonders of the Living World",
    problem:
      "Biological processes such as germination and metamorphosis take days or weeks, yet the textbook shows them as a few still frames.",
    summary:
      "Learners trigger and order staged biological processes, such as the plant and butterfly life cycles, so a change that takes weeks plays out as an ordered sequence in 3D.",
    concepts: [
      "Plant life cycle",
      "Butterfly life cycle",
      "Stages of growth",
      "Ordering staged processes",
    ],
    interactions: [
      {
        title: "Growing a Plant",
        body: "Learners trigger each stage, from seed to germination to a full plant, and watch it grow on the storybook page.",
      },
      {
        title: "Butterfly Metamorphosis",
        body: "Egg, caterpillar, pupa and butterfly appear in 3D around a tree, and learners put the stages in the right order.",
      },
    ],
    favouriteVotes: 9,
    favouriteLabel: "Life cycle",
    metrics: {
      n: 11,
      arTime: [66.3, 18.7],
      quizTime: [54.1, 25.1],
      mistakes: [1.0, 0.77],
      retries: [0.18, 0.4],
    },
  },
  {
    slug: "physical-science",
    name: "Basic Physical Science",
    short: "Physical Science",
    tagline: "Making the invisible visible: forces, circuits and simple machines",
    tone: "cool",
    accent: "text-steam-purple",
    storybook: "Dasun and the Moonstone",
    studentId: "IT22177100",
    problem:
      "Textbooks rely on static 2D diagrams to explain invisible, dynamic processes such as force vectors and energy transfer.",
    summary:
      "Learners apply force vectors, build simple series circuits and manipulate simple machines, with 3D simulations that respond in real time.",
    concepts: ["Forces & motion", "Simple series circuits", "Simple machines", "Energy transfer"],
    interactions: [
      {
        title: "Building the Basic Circuit",
        body: "Students tap the 3D battery and bulb terminals to draw wires between them. Once the loop is closed, the bulb glows.",
      },
      {
        title: "Stacking Batteries in Series",
        body: "Students are challenged to make the bulb brighter by stacking up to three 3D batteries and watching the light flare up.",
      },
      {
        title: "Forces & Simple Machines",
        body: "A force slider moves objects on the page, with force and friction arrows drawn live and simple machines responding to the effort applied.",
      },
    ],
    favouriteVotes: 8,
    favouriteLabel: "Circuits",
    metrics: {
      n: 6,
      arTime: [56.7, 12.6],
      quizTime: [40.9, 12.3],
      mistakes: [0.33, 0.52],
      retries: [0, 0],
    },
  },
  {
    slug: "number-concepts",
    name: "Basic Number Concepts",
    short: "Number Concepts",
    tagline: "Fractions, decimals, parity and place value built from 3D blocks",
    tone: "primary",
    accent: "text-steam-yellow",
    storybook: "Dinal and the Prism Temple",
    problem:
      "Fractions and place value are abstract symbolic relationships, and a printed figure cannot show a whole being split and recombined.",
    summary:
      "Learners group and recombine 3D unit objects to construct fractions, decimals, parity and place-value quantities.",
    concepts: ["Fractions", "Decimals", "Odd & even numbers (parity)", "Place value"],
    interactions: [
      {
        title: "Odd or Even?",
        body: "Numbered tiles appear beside the story character, and learners decide which numbers are odd or even by grouping 3D objects into pairs.",
      },
      {
        title: "Constructing Fractions",
        body: "Learners split a 3D whole into equal parts and select pieces to build a given fraction.",
      },
      {
        title: "Place Value Blocks",
        body: "Units, tens and hundreds are grouped and regrouped as 3D blocks to build a number.",
      },
    ],
    favouriteVotes: 8,
    favouriteLabel: "Fractions",
    metrics: {
      n: 7,
      arTime: [57.4, 29.2],
      quizTime: [30.5, 15.3],
      mistakes: [0.29, 0.49],
      retries: [0, 0],
    },
  },
];

export const getComponent = (slug: string) => COMPONENTS.find((c) => c.slug === slug);

export const OVERALL_METRICS: SessionMetrics = {
  n: 35,
  arTime: [66.4, 25.9],
  quizTime: [45.2, 21.1],
  mistakes: [0.74, 0.82],
  retries: [0.37, 0.73],
};

export const RESULTS = {
  arN: 32,
  controlN: 30,
  maxScore: 55,
  groups: [
    {
      key: "pre",
      label: "AR pre-test",
      n: 32,
      mean: 34.25,
      pct: 62.3,
      sd: 7.13,
      median: 34.5,
      ci: [31.7, 36.8],
    },
    {
      key: "post",
      label: "AR post-test",
      n: 32,
      mean: 44.47,
      pct: 80.9,
      sd: 8.52,
      median: 46.0,
      ci: [41.4, 47.5],
    },
    {
      key: "control",
      label: "Control (textbook)",
      n: 30,
      mean: 33.9,
      pct: 61.6,
      sd: 6.87,
      median: 33.5,
      ci: [31.3, 36.5],
    },
  ],
  gain: { mean: 10.22, ci: [8.67, 11.77], t: 13.42, dz: 2.37 },
  between: { diff: 10.57, ci: [6.65, 14.49], t: 5.39, g: 1.34 },
  improved: 31,
  session: { logged: 41, analysable: 35, duration: 157.8, onTask: 112.1, onTaskRatio: 0.72 },
  survey: [
    { label: "Enjoyed seeing the 3D objects appear", count: 32 },
    { label: "Enjoyed the AR activities", count: 31 },
    { label: "Enjoyed the story", count: 30 },
    { label: "Activity helped them understand the lesson", count: 28 },
    { label: "Would definitely use an AR storybook again", count: 28 },
    { label: "Found the instructions easy to understand", count: 26 },
  ],
  teacher: [
    { label: "AR activities hold students' attention", mean: 4.8, sd: 0.45, median: 5 },
    { label: "Story-based approach increases enjoyment", mean: 4.8, sd: 0.45, median: 5 },
    { label: "Would recommend to other teachers", mean: 4.6, sd: 0.55, median: 5 },
    { label: "Quizzes support the learning objectives", mean: 4.2, sd: 0.45, median: 4 },
    { label: "Overall rating of the AR storybook", mean: 4.2, sd: 0.84, median: 4 },
    { label: "Content appropriate for primary students", mean: 3.8, sd: 0.84, median: 4 },
  ],
};

/* ───────── site structure content ───────── */

export type PresentationKey = "proposal" | "pp1" | "pp2" | "final";

export const PRESENTATIONS: { key: PresentationKey; title: string; description: string }[] = [
  {
    key: "proposal",
    title: "Proposal Presentation",
    description: "Research problem, objectives and proposed methodology",
  },
  {
    key: "pp1",
    title: "Progress Presentation 1",
    description: "Design, architecture and early prototype",
  },
  {
    key: "pp2",
    title: "Progress Presentation 2",
    description: "Near-complete system and evaluation plan",
  },
  {
    key: "final",
    title: "Final Presentation",
    description: "Completed system, classroom results and conclusions",
  },
];

// Dates and mark allocations: replace "TBA" with the values from the module outline.
export const MILESTONES: {
  title: string;
  date: string;
  marks: string;
  description: string;
  deliverables: string[];
}[] = [
  {
    title: "Project Proposal",
    date: "TBA",
    marks: "TBA",
    description:
      "Defines the research problem, gap, objectives and methodology for the group and for each of the four components, assessed through a proposal report and presentation.",
    deliverables: ["Project Charter", "Proposal documents", "Proposal presentation"],
  },
  {
    title: "Progress Presentation 1",
    date: "TBA",
    marks: "TBA",
    description:
      "Reviews the system design, the shared AR framework and the first working prototype of each component.",
    deliverables: ["Progress presentation 1 slides", "Check list document"],
  },
  {
    title: "Progress Presentation 2",
    date: "TBA",
    marks: "TBA",
    description:
      "Demonstrates the near-complete storybooks and AR scenes and presents the classroom evaluation plan.",
    deliverables: ["Progress presentation 2 slides", "Check list document"],
  },
  {
    title: "Final Assessment",
    date: "TBA",
    marks: "TBA",
    description:
      "Final demonstration of the complete framework with the classroom study results, together with the final reports, research paper and project website.",
    deliverables: ["Group final report", "Individual final reports", "Research paper", "Website"],
  },
  {
    title: "Viva",
    date: "TBA",
    marks: "TBA",
    description:
      "Individual oral examination on each member's component, contribution and understanding of the research.",
    deliverables: ["Individual viva"],
  },
];

export const TEAM: { name: string; role: string; email?: string }[] = [
  { name: "Mendis B.M.U.I", role: "Group Leader" },
  { name: "Bandara M.R.J.K", role: "Member" },
  { name: "Jayasundara R.K.M.J.Y", role: "Member" },
  { name: "Ilayperuma M.I", role: "Member" },
];

export const SUPERVISORS: { name: string; role: string; email?: string }[] = [
  { name: "Mr. Ishara Gamage", role: "Supervisor" },
  { name: "Mr. Nushkan Nismi", role: "Co-Supervisor" },
];

export const CONTACT = {
  email: "it22177100@my.sliit.lk",
  institute: "Sri Lanka Institute of Information Technology",
  address: "New Kandy Road, Malabe, Sri Lanka",
  phone: "+94 11 754 4801",
};

export const COMPARISON = [
  {
    system: "Wangid et al. (2020)",
    domain: "Mathematics",
    bilingual: "No",
    multi: "No",
    offline: "N/R",
  },
  {
    system: "Metabook (2024)",
    domain: "Generic storybooks",
    bilingual: "No",
    multi: "No",
    offline: "No",
  },
  {
    system: "Volioti et al. (2022)",
    domain: "Physics",
    bilingual: "No",
    multi: "No",
    offline: "N/R",
  },
  {
    system: "Cai et al. (2019)",
    domain: "Mathematics",
    bilingual: "No",
    multi: "No",
    offline: "N/R",
  },
  {
    system: "Cai et al. (2022)",
    domain: "Science (BCI)",
    bilingual: "No",
    multi: "No",
    offline: "N/R",
  },
  {
    system: "This work",
    domain: "All four domains",
    bilingual: "Yes",
    multi: "Yes",
    offline: "Yes",
  },
];
