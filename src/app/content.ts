export const profile = {
  github: "https://github.com/ronfried1",
  linkedin: "https://www.linkedin.com/in/ron-fried/",
  cv: "/files/Ron-Fried-cv.pdf",
  email: "Ron.fried15@gmail.com",
};

export const studies = [
  {
    slug: "landly",
    name: "Landly",
    title: "A parcel in context",
    kind: "Geographic data",
    summary: "Connecting a plot of land to the planning information around it.",
    role: "Technology lead",
    intro:
      "A block and parcel number can identify a plot in Israel. It tells you very little about what surrounds it. Landly gives landowners and buyers a way to move from that identifier into planning information.",
    sections: [
      [
        "My responsibility",
        "I lead the technical work on Landly’s digital platform. My scope spans the Next.js interface, content management, geographic data and the infrastructure that serves them. The wider Landly team brings the real-estate and planning expertise.",
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
      ["Explore Landly", "https://landly.co.il/"],
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
      ["Open the original demo", "https://the-jungle-fast-ride-app.vercel.app/"],
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
    "Full-stack engineering",
    "My work spans the frontend and the backend-for-frontend (BFF). I also lead a full-stack engineering guild.",
  ],
  [
    "Landly",
    "Technology lead",
    "I lead development of a real-estate platform that brings geographic data, planning content and parcel search together.",
  ],
  [
    "Signature-it",
    "Full-stack development",
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
