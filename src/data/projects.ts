export type Project = {
  id: string;
  name: string;
  techStack: string;
  url?: string;
  bullets: string[];
};

export const projects: Project[] = [
  {
    id: "carepilot",
    name: "CarePilot",
    techStack: "Python, JavaScript/TypeScript, Next.js, CSS, Shell",
    url: "https://github.com/ashaikh23/carepilot",
    bullets: [
      "AI-powered healthcare navigation system that helps streamline your healthcare experience.",
    ],
  },
  {
    id: "vector-disease-globe",
    name: "Vector Disease Globe",
    techStack: "Python, JavaScript, HTML, CSS, CesiumJS, XGBoost",
    url: "https://github.com/ashaikh23/vector-disease-globe",
    bullets: [
      "Interactive 3D visualization and forecasting tool for global vector-borne disease risk.",
      "Explore, filter, and forecast disease risks (Dengue, Malaria, Lyme) across time and geography.",
    ],
  },
  {
    id: "alphatalks",
    name: "AlphaTalks (Generational Translator)",
    techStack:
      "Next.js, React, Tailwind CSS, Python, Azure OpenAI, GPT-4 Vision",
    url: "https://github.com/ashaikh23/AlphaTalks",
    bullets: [
      "Full-stack generational translation web app to help marketers/content creators adapt text, image, and PowerPoint content for Gen Z, Millennials, and Boomers using Azure OpenAI's GPT-4 and Grok-3.",
      "Built multimodal translation pipelines with OCR (Tesseract.js), NLP (sentence-transformers, NLTK), and semantic scoring for generation-specific analysis and adaptation.",
      "Built an interactive Next.js/React UI for real-time translation, image upload, and PowerPoint parsing with XML reconstruction and tone mapping.",
    ],
  },
  {
    id: "undergraduate-research-finder",
    name: "Undergraduate Research Finder",
    techStack: "Python, Flask, TypeScript, HTML, CSS, MongoDB",
    url: "https://github.com/ashaikh23/Undergraduate-Research-Finder",
    bullets: [
      "Flask web app connecting undergrads and professors at UMass Amherst to streamline finding/applying for research opportunities.",
      "Integrated a web scraper to auto-gather faculty + project data from public university pages.",
    ],
  },
  {
    id: "verifai",
    name: "VerifAI",
    techStack: "Python, data cleaning, model training, feature engineering",
    url: "https://github.com/ashaikh23/VerifAI",
    bullets: [
      "Web-based fake news detector using NLP + Flask with an integrated BERT model (HackUMass Hackathon).",
      "Built an AI system to detect fake news in articles using BERT.",
      "Implemented neural networks for regression-style confidence scoring per prediction.",
      "Built a UI for text input and real-time authenticity feedback.",
      "Results: 88% accuracy, 88.5% precision, 88% recall, 88% F1.",
    ],
  },
  {
    id: "clue-game",
    name: "Clue Game",
    techStack: "C, C++, CLion",
    bullets: [
      "Clue text-adventure game using three linked-list structures (characters, items, rooms).",
    ],
  },
  {
    id: "metasploit-break",
    name: "Metasploit Break",
    techStack: "Kali, Eclipse, VirtualBox, IntelliJ IDEA, Metasploitable 2",
    bullets: [
      "Offensive security project; gained access via backdoor command execution over Metasploitable's CLI.",
    ],
  },
  {
    id: "patient-triage-system",
    name: "Patient Triage System",
    techStack: "Java, IntelliJ IDEA",
    bullets: [
      "Automated ER triage system implemented with a heap-based priority queue.",
    ],
  },
  {
    id: "unit-converter",
    name: "Unit Converter",
    techStack: "C, CLion",
    bullets: [
      "Length/weight converter (metric → US) using pointers and OOP practices.",
    ],
  },
  {
    id: "cloud-classifying-weather-predictor",
    name: "Cloud Classifying Weather Predictor",
    techStack: "GCP Vision API, AutoML Vision",
    bullets: [
      "ML app to identify cloud types from images; supported one-off predictions and multi-label classification on a public dataset.",
    ],
  },
  {
    id: "the-hunted",
    name: "The Hunted",
    techStack: "C#, Unity",
    bullets: [
      "3D hide-and-seek Unity game with AI and WASD movement (MIT Blueprint Hackathon '20).",
    ],
  },
];

export const getProjects = (limit?: number): Project[] => {
  return limit ? projects.slice(0, limit) : projects;
};
