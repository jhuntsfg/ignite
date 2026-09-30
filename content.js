/*
 * Hunt Agency — IGNITE 2027 page content.
 * Edit this file to update prices, links, video, and FAQs. No build step needed.
 * Search for TODO to find everything that still needs a real value.
 */
window.SITE = {
  agencyName: "Hunt Agency",
  ownerFirstName: "", // e.g. "Jon" -> "This is Jon's favorite event..." (TODO)

  event: {
    name: "IGNITE 2027",
    theme: "Going the Distance",
    dates: "March 1–3, 2027",
    location: "Dallas, Texas",
    website: "https://ignite-event.com",
    // Optional: path to the official event banner image (e.g. "assets/ignite-banner.jpg").
    // Leave empty to use the built-in text banner.
    bannerImage: "",
  },

  // Pricing cards. Confirm prices and deadlines before launch. (TODO)
  cards: [
    {
      title: "General Admission Ticket",
      price: "$145",
      note: "What's included",
      features: [
        "Full access to all three days",
        "All fees included in the price",
        "Non-transferable and non-refundable",
        "Limited number available at this price",
      ],
      cta: "Get Your Ticket",
      url: "#", // TODO: ticket purchase link
    },
    {
      title: "Hilton Anatole Room Block",
      price: "$279",
      priceSuffix: "/night",
      note: "What's included",
      features: [
        "Stay at the event hotel",
        "Standard rate is $355/night",
        "Split the room with a teammate",
        "Block closes February 8",
      ],
      cta: "Book Your Room",
      url: "#", // TODO: room block booking link
    },
  ],

  // Owner video. Accepts:
  //   Wistia:  https://fast.wistia.net/embed/iframe/VIDEO_ID  (or just the ID, e.g. "abc123xyz0")
  //   YouTube: https://www.youtube.com/embed/VIDEO_ID
  //   Vimeo:   https://player.vimeo.com/video/VIDEO_ID
  //   Local:   "assets/invite.mp4"
  video: "", // TODO

  faq: [
    {
      q: "When and where is IGNITE 2027?",
      a: "March 1–3, 2027, in Dallas, Texas. The agency room block is at the Hilton Anatole.",
    },
    {
      q: "Can I get a refund or give my ticket to someone else?",
      a: "No. Tickets are non-refundable and can't be transferred, so make sure you can attend before you buy.",
    },
    {
      q: "Do I have to stay at the Hilton Anatole?",
      a: "No, but it's the easiest option: you'll be steps from every session and the rest of the team. The discounted room block closes February 8.",
    },
    {
      q: "Can I share a room?",
      a: "Yes. Many agents pair up with a teammate to split the cost. Post in the team chat to find a roommate.",
    },
    {
      q: "Who do I ask if I have other questions?",
      a: "Reach out to your upline, or check the official event site for full details.",
    },
  ],
};
