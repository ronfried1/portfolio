export const profile = {
  github: "https://github.com/ronfried1",
  linkedin: "https://www.linkedin.com/in/ron-fried/",
  cv: "/files/Ron-Fried-cv.pdf",
  email: "Ron.fried15@gmail.com",
};

export const studies = [
  {
    slug: "firefly",
    name: "Firefly",
    title: "Streaming infrastructure code",
    kind: "Product engineering",
    summary:
      "Bringing AI agents into a cloud infrastructure product, from backend services to live output in React.",
    role: "Full-Stack Developer",
    intro:
      "Infrastructure code takes time to generate. I built the streaming connection that lets Firefly display code and suggested fixes in the interface while the backend is still producing them.",
    sections: [
      [
        "My contribution",
        "I implement AI agents inside Firefly and work on the services and interfaces around them. For infrastructure code generation and remediation, my contribution included carrying the generated output from backend services into React.",
      ],
      [
        "Why stream the result?",
        "A single response can deliver a finished result. To show work in progress, the interface needs smaller updates before generation finishes. I used Server-Sent Events to send those updates from the service to the browser.",
      ],
      [
        "What the visitor sees",
        "The interface can show output as it arrives. The small replay here uses a local Terraform example to illustrate how individual fragments become readable code.",
      ],
      [
        "Alongside the AI work",
        "I also build Go services for Terraform variable discovery and plan parsing. As Full-Stack Guild lead and Code Owner, I guide technical decisions, review code and help set engineering standards across the guild.",
      ],
    ],
    links: [["Read my CV", profile.cv]],
  },
  {
    slug: "landly",
    name: "Landly",
    title: "A parcel in context",
    kind: "Independent startup",
    summary:
      "A live Israeli real-estate startup I build on the side. Search a parcel and explore the plans around it.",
    role: "Technology lead",
    intro:
      "A block and parcel number can identify a plot in Israel. It tells you very little about what surrounds it. Landly gives landowners and buyers a way to move from that identifier into planning information.",
    sections: [
      [
        "My responsibility",
        "I build Landly alongside my role at Firefly. It’s a working startup for landowners and buyers in Israel, and I lead its technology. My scope spans the Next.js interface, content management, geographic data and the infrastructure that serves them. The wider Landly team brings the real-estate and planning expertise.",
      ],
      [
        "Two ways into the same place",
        "Some visitors already have a block and parcel number. Others know only a city or a planning area. Landly exposes both a direct parcel search and a browsable index of places. An identifier makes lookup precise. Browsing helps when the visitor doesn’t know which identifier to enter.",
      ],
      [
        "What a reader can verify",
        "The public site lets you look up a parcel, browse a city’s planning areas and read planning updates. Each entry point answers a different question about the same landscape.",
      ],
      [
        "Engineering takeaway",
        "A geographic identifier works well as a lookup key. A person researching land also needs names, context and a way to explore. Those are different interface requirements, even when both journeys concern the same place.",
      ],
    ],
    links: [
      ["Open the live product", "https://landly.co.il/"],
      ["Meet the team", "https://landly.co.il/en/about-us"],
    ],
  },
  {
    slug: "fastride",
    name: "FastRide",
    title: "Remembering a ride reservation",
    kind: "Booking application",
    summary:
      "Keeping a park visitor’s return time and access code through a page refresh.",
    role: "Application developer",
    intro:
      "The park’s booking API returns an access code and a time to come back. A visitor who refreshes the page still needs both. I built the Next.js client that takes a rider from choosing an attraction to retrieving that ticket.",
    sections: [
      [
        "My responsibility",
        "I implemented the ride list, PIN checks, booking request and ticket display. The booking service was an existing API. The public repository contains my client implementation.",
      ],
      [
        "Where the ticket lives",
        "The page fetches attractions on the server. The browser validates the PIN format, sends the selected ride and stores a successful ticket locally. Keeping the ticket only in React state would have lost it on refresh. Adding accounts would have introduced an identity requirement to a single-device task.",
      ],
      [
        "What happens on a second request",
        "During booking hours, a visitor who requests another ride with an unexpired ticket gets the existing code and return time. An expired ticket is cleared before the next request proceeds. The local check is specific to that browser and device.",
      ],
      [
        "Engineering takeaway",
        "Persistence is a product decision. A local ticket makes recovery convenient on one device. A guarantee across devices would have to come from the booking service.",
      ],
    ],
    links: [
      [
        "Inspect the booking flow",
        "https://github.com/ronfried1/The-Jungle-FastRide-app/blob/f7dccd7b35b4c5f71bb024a0e6144206b2d15890/src/pages/index.js",
      ],
      [
        "Open the original demo",
        "https://the-jungle-fast-ride-app.vercel.app/",
      ],
      [
        "View the repository",
        "https://github.com/ronfried1/The-Jungle-FastRide-app",
      ],
    ],
  },
];

export const experience = [
  [
    "Firefly",
    "Full-Stack Developer · June 2025–present",
    "I build Go services that discover Terraform variables and parse plans, implement AI agents in the product, and work across the frontend and APIs. As Full-Stack Guild lead and Code Owner, I guide technical decisions and code reviews.",
  ],
  [
    "Landly",
    "Technology lead",
    "Alongside Firefly, I lead technology at Landly, our live real-estate startup. We help people research Israeli land through parcel search, geographic data and planning updates.",
  ],
  [
    "Aporia",
    "Full-Stack Developer · 2023–May 2025",
    "I led frontend development, configured and customized an IDE, and built applications and APIs backed by services on AWS.",
  ],
  [
    "Signature-IT",
    "Full-Stack Developer · 2022–2023",
    "I worked on React and Magento commerce applications, API integrations and deployment environments. I led the integration of Xdebug and Git blame into the team’s debugging workflow.",
  ],
];

export const archive = [
  [
    "Chat and Game",
    "https://github.com/ronfried1/chat-game-app",
    "https://ronfried1.github.io/chat-game-app/",
  ],
  ["Gypsica", "", "https://gypsica.com/"],
  [
    "Portfolio",
    "https://github.com/ronfried1/portfolio",
    "https://ronfried-portfolio.vercel.app/",
  ],
];
