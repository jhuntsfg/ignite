/*
 * Hunt Agency — IGNITE site content.
 * Edit this file to update videos, links, and schedule. No build step needed.
 *
 * Video URLs: paste a YouTube or Vimeo *embed* URL, e.g.
 *   https://www.youtube.com/embed/VIDEO_ID
 *   https://player.vimeo.com/video/VIDEO_ID
 * Leave `video` empty ("") to show a "Coming soon" placeholder.
 */
window.SITE = {
  agencyName: "Hunt Agency",
  ownerName: "the Hunt Agency leadership team",
  contactEmail: "hello@huntagency.com", // TODO: replace with the real address

  welcomeVideo: "", // TODO: welcome message embed URL

  // Weekly small-group Q&A
  meetAndGreet: {
    days: ["Monday", "Wednesday", "Friday"],
    time: "10:00 AM ET",
    maxSeats: 5,
    bookingUrl: "#", // TODO: Calendly / Zoom registration link
  },

  // New agent -> new writer roadmap. `link` is optional.
  roadmap: [
    {
      title: "Get licensed",
      text: "Complete your pre-licensing course, pass the state exam, and apply for your resident license.",
      link: { label: "Licensing guide", url: "#" },
    },
    {
      title: "Get contracted",
      text: "Submit your contracting paperwork, E&O, and direct deposit so carriers can pay you.",
      link: { label: "Contracting checklist", url: "#" },
    },
    {
      title: "Set up your systems",
      text: "Log in to the CRM, calendar, and dialer. Join the team chat and add the training calendar.",
      link: { label: "Tech setup", url: "#" },
    },
    {
      title: "Learn the core products",
      text: "Work through the product training for mortgage protection, final expense, term, and IUL.",
      link: { label: "Product training", url: "#" },
    },
    {
      title: "Practice the presentation",
      text: "Role-play the full appointment with your mentor until you can run it start to finish.",
      link: { label: "Scripts & role-play", url: "#" },
    },
    {
      title: "Book your first appointments",
      text: "Work your leads, set appointments, and shadow a senior agent on live calls.",
      link: null,
    },
    {
      title: "Write your first policy",
      text: "Submit your first application and ring the bell. You're officially a writer.",
      link: null,
    },
  ],

  // IGNITE conference sessions
  sessions: [
    { title: "Opening Keynote: Why You're Here", speaker: "Agency Leadership", length: "", video: "" },
    { title: "Your First 30 Days", speaker: "Top New Writer Panel", length: "", video: "" },
    { title: "Lead Management That Works", speaker: "Senior Agent", length: "", video: "" },
    { title: "Running a Great Appointment", speaker: "Field Trainer", length: "", video: "" },
    { title: "Objections & Follow-Up", speaker: "Senior Agent", length: "", video: "" },
    { title: "Building Your Team", speaker: "Agency Owner", length: "", video: "" },
  ],

  // Resource library
  resources: [
    { group: "Getting started", items: [
      { label: "New agent checklist", url: "#" },
      { label: "Licensing course sign-up", url: "#" },
      { label: "Contracting portal", url: "#" },
    ]},
    { group: "Tools", items: [
      { label: "CRM login", url: "#" },
      { label: "Quoting tool", url: "#" },
      { label: "Team calendar", url: "#" },
    ]},
    { group: "Training", items: [
      { label: "Product training library", url: "#" },
      { label: "Scripts & rebuttals", url: "#" },
      { label: "Weekly training call recordings", url: "#" },
    ]},
  ],

  faq: [
    {
      q: "Do I need to be licensed before I start?",
      a: "No. We'll walk you through getting licensed, and you can start training while you study.",
    },
    {
      q: "How do I get paid?",
      a: "You're contracted directly with the carriers, and each carrier pays you when your policies are issued.",
    },
    {
      q: "Can I work part-time?",
      a: "Yes. Many of our agents start part-time and move to full-time as their business grows. You set your own schedule.",
    },
    {
      q: "Who do I go to with questions?",
      a: "Your upline mentor is your first contact. You can also bring any question to the Monday, Wednesday, or Friday Q&A.",
    },
  ],
};
