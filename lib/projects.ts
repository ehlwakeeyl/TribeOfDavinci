export type UnitType = {
  name: string;
  description: string;
};

export type Project = {
  slug: string;
  name: string;
  location: string;
  image: string;
  tagline: string;
  description: string;
  units: number;
  land: string | null;
  sourceUrl: string;
  types: UnitType[];
};

export const projects: Project[] = [
  {
    slug: "amazon",
    name: "Amazon",
    location: "Maitama, Abuja",
    image: "/images/proj-amazon.jpg",
    tagline: "An exclusive enclave of just 20 impeccably designed homes",
    description:
      "The Amazon blends spacious interiors with serene outdoor spaces — landscaped recreational areas, pedestrian-friendly walkways, solar-powered street lights, automated sprinklers, fibre-optic connectivity, 24/7 CCTV surveillance and automated gate access.",
    units: 20,
    land: null,
    sourceUrl: "https://www.bilaadnigeria.com/the-amazon-by-bilaad/",
    types: [
      {
        name: "Peridot",
        description:
          "Six-bedroom twin villa with a rooftop terrace and sleek, modern design elements.",
      },
    ],
  },
  {
    slug: "bahamas",
    name: "Bahamas",
    location: "Maitama II, Abuja",
    image: "/images/proj-bahamas.jpg",
    tagline: "One of the most picturesque streets in the FCT",
    description:
      "Bilaad Realty's largest development — a secure, serene environment across nine distinct residence types, from five-bedroom villas to studio apartments, suited for every stage of family life.",
    units: 505,
    land: "11.37 Ha",
    sourceUrl: "https://www.bilaadnigeria.com/the-bahamas-by-bilaad/",
    types: [
      { name: "Onyx", description: "5-bed villa with employee quarters" },
      { name: "Amethyst", description: "4-bed twin villa" },
      { name: "Opal", description: "4-bed townhouse" },
      { name: "Petalite / Ammolite", description: "2-bed apartment & penthouse" },
      { name: "Fluorite / Azurite / Iolite", description: "2 & 1-bed apartments" },
      { name: "Jadeite", description: "Studio apartment" },
    ],
  },
  {
    slug: "bimini",
    name: "Bimini",
    location: "Ministers' Quarters, Mabushi",
    image: "/images/proj-bimini.jpg",
    tagline: "Quiet sophistication in the heart of Abuja",
    description:
      "Just 8 limited-edition townhouses named The Pearl, tucked within the prestigious Ministers' Quarters — privacy, quality and timeless design in a secure, connected community.",
    units: 8,
    land: null,
    sourceUrl: "https://www.bilaadnigeria.com/bimini/",
    types: [
      {
        name: "The Pearl",
        description:
          "Four-bedroom townhouse with spacious en-suite bedrooms, dedicated maid's quarters and premium finishes.",
      },
    ],
  },
  {
    slug: "bali-island",
    name: "Bali Island",
    location: "Life Camp, Abuja",
    image: "/images/proj-bali-island.jpg",
    tagline: "An exciting and dynamic new way to live",
    description:
      "A mid-premium estate across seven distinct home types, featuring innovative home automation, lush landscaped lawns and expansive open areas for an active, family-friendly lifestyle.",
    units: 412,
    land: null,
    sourceUrl: "https://www.bilaadnigeria.com/bali-island-by-bilaad/",
    types: [
      { name: "Sapphire", description: "5-bed villa" },
      { name: "Amethyst / Opal", description: "4-bed townhouses" },
      { name: "Topaz", description: "3-bed apartment" },
      { name: "Aventurine / Ametrine", description: "2-bed apartments" },
      { name: "Vermarine", description: "1-bed apartment" },
    ],
  },
  {
    slug: "bali-grove",
    name: "Bali Grove",
    location: "Kafe District, Abuja FCT",
    image: "/images/proj-bali-grove.png",
    tagline: "Modern living in a serene, secure environment",
    description:
      "An exclusive residential development of 25 meticulously crafted homes blending contemporary architecture, comfort and functionality.",
    units: 25,
    land: "9,478 sqm",
    sourceUrl: "https://www.bilaadnigeria.com/bali-grove/",
    types: [
      { name: "Onyx Villa", description: "5-bed with employee quarters" },
      { name: "Opal Townhouse", description: "4-bed with staff quarter" },
    ],
  },
  {
    slug: "barbados",
    name: "Barbados Island",
    location: "Abuja FCT",
    image: "/images/proj-barbados.png",
    tagline: "Where a breathtaking landscape meets architectural brilliance",
    description:
      "Vibrant, colourful gardens surround 24 five-bedroom villas with employee quarters — a perfect blend of creativity and craftsmanship.",
    units: 24,
    land: null,
    sourceUrl: "https://www.bilaadnigeria.com/barbados-by-bilaad/",
    types: [
      {
        name: "Onyx",
        description:
          "Five en-suite bedrooms, employee quarters, expansive kitchen and balcony with landscape views.",
      },
    ],
  },
  {
    slug: "bobowasi",
    name: "Bobowasi Island",
    location: "Jabi, Abuja",
    image: "/images/proj-bobowasi.jpg",
    tagline: "A vibrant, sustainable community",
    description:
      "40 exclusive Garnet Homes with 24-hour CCTV surveillance, a fully equipped gym, swimming pool, children's play area, fibre-optic internet, centralised gas network, alternative power supply and ample green spaces.",
    units: 40,
    land: null,
    sourceUrl: "https://www.bilaadnigeria.com/bobowasi-by-bilaad/",
    types: [
      {
        name: "The Garnet",
        description: "Stylish four-bedroom home offering a refined blend of comfort and modern design.",
      },
    ],
  },
  {
    slug: "bora-bora",
    name: "Bora Bora Island",
    location: "Wuye, Abuja",
    image: "/images/proj-borabora.jpg",
    tagline: "A premium sustainable estate in Wuye",
    description:
      "63 elegant homes combining smart-home automation with energy efficiency — a gym, adult and children's pools, fibre-optic internet, alternative power and landscaped green spaces, minutes from the city centre and airport.",
    units: 63,
    land: null,
    sourceUrl: "https://www.bilaadnigeria.com/7622-2/",
    types: [
      { name: "Sapphire", description: "5-bed villa with employee quarter" },
      { name: "Ruby", description: "4-bed townhouse" },
      { name: "Topaz", description: "3-bed apartment" },
    ],
  },
  {
    slug: "capri-island",
    name: "Capri Island",
    location: "Lifecamp, Abuja",
    image: "/images/proj-capri-card.png",
    tagline: "For those who dream in colour — Project of the Month",
    description:
      "More than just a place to live, Capri Island is a lifestyle destination — an exclusive haven across three distinct house types tailored to the highest standards of living.",
    units: 87,
    land: "3.04 Ha",
    sourceUrl: "https://www.bilaadnigeria.com/capri-island/",
    types: [
      { name: "The Aquamarine", description: "5-bed detached villa" },
      { name: "The Citrine", description: "4-bed townhouse" },
      { name: "The Aventurine", description: "3-bed home" },
    ],
  },
  {
    slug: "fiji",
    name: "Fiji Island",
    location: "Jabi, Abuja",
    image: "/images/proj-fiji.jpg",
    tagline: "Refined taste, a love for comfort",
    description:
      "18 spacious stand-alone Sapphire homes equipped with state-of-the-art intelligent home features, redefining modern family living.",
    units: 18,
    land: "1 Ha",
    sourceUrl: "https://www.bilaadnigeria.com/fiji-by-bilaad/",
    types: [
      {
        name: "Sapphire",
        description: "Five-bedroom villa with an employee quarter across two elegant suspended floors.",
      },
    ],
  },
  {
    slug: "langkawi",
    name: "Langkawi Island",
    location: "Katampe Layout, Abuja",
    image: "/images/proj-langkawi.jpg",
    tagline: "103 thoughtfully crafted homes",
    description:
      "From elegant five-bedroom villas to stylish two- and three-bedroom apartments, every unit is designed for comfort, functionality and sophistication amid serene, secure surroundings.",
    units: 103,
    land: "2.63 Ha",
    sourceUrl: "https://www.bilaadnigeria.com/langkawi-by-bilaad/",
    types: [
      { name: "Onyx", description: "5-bed villa" },
      { name: "Opal", description: "4-bed townhouse" },
      { name: "Topaz / Aventurine", description: "3-bed apartments" },
      { name: "Ametrine", description: "2-bed apartment" },
    ],
  },
  {
    slug: "maldives",
    name: "Maldives",
    location: "Gwarinpa II, Abuja FCT",
    image: "/images/proj-maldives.jpg",
    tagline: "High taste, an appeal for comfort",
    description:
      "19 spacious stand-alone Onyx homes in a secure, serene environment, each designed for a tranquil living experience.",
    units: 19,
    land: "1.29 Ha",
    sourceUrl: "https://www.bilaadnigeria.com/maldives-by-bilaad/",
    types: [
      {
        name: "Onyx",
        description:
          "Five en-suite bedrooms with employee quarters, an expansive kitchen and a balcony overlooking the landscape.",
      },
    ],
  },
  {
    slug: "mauritius",
    name: "Mauritius Island",
    location: "Ministers' Quarters, Mabushi",
    image: "/images/proj-mauritius.jpg",
    tagline: "A distinguished golf estate",
    description:
      "30 meticulously crafted homes across two signature residences, with a private amphitheatre and tranquil views of the estate's lush fairways — where elegance meets experience.",
    units: 30,
    land: null,
    sourceUrl: "https://www.bilaadnigeria.com/mauritius/",
    types: [
      { name: "The Platinum", description: "5-bed villa with maid's quarters" },
      { name: "The Peridot", description: "5-bed twin villa with guest chalet" },
    ],
  },
  {
    slug: "seychelles",
    name: "Seychelles",
    location: "Jabi District, Abuja",
    image: "/images/proj-seychelles.jpg",
    tagline: "Where nature and luxury coexist",
    description:
      "A serene enclave of 8 exquisite five-bedroom Amber homes surrounded by greenery, with captivating lake views for a refined, eco-conscious lifestyle.",
    units: 8,
    land: "4,692 sqm",
    sourceUrl: "https://www.bilaadnigeria.com/seychelles/",
    types: [
      {
        name: "The Amber",
        description: "Five-bedroom residence with lounges on every floor, flexible rooms and a charming terrace.",
      },
    ],
  },
  {
    slug: "zanzibar",
    name: "Zanzibar",
    location: "Jabi District, Abuja",
    image: "/images/proj-zanzibar.png",
    tagline: "Spacious, upscale living",
    description:
      "A Premium Plus estate of 27 limited-edition five-bedroom residences, setting a new benchmark in design and comfort with modern architecture and high-end finishes.",
    units: 27,
    land: null,
    sourceUrl: "https://www.bilaadnigeria.com/zanzibar/",
    types: [
      {
        name: "The Emerald",
        description: "Five-bedroom villa with staff quarters, a guest chalet and a terrace opening to breathtaking views.",
      },
    ],
  },
];

export const totalUnits = projects.reduce((sum, p) => sum + p.units, 0);

export const featuredProject = projects.find((p) => p.slug === "capri-island")!;

export const whatsappNumber = "2349133423363";

export function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
