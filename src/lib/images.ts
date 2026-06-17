/** Healthcare photography — swap for owned Indian patient/nurse images in production */
const u = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format&fit=crop`;

export const IMAGES = {
  hero: {
    main: u("photo-1576091160550-2173dba999ef", 1200),
    accent: u("photo-1582750433449-648ed127bb54", 600),
  },
  about: {
    main: u("photo-1631217868264-e5b90bb5e213", 900),
    nurse: u("photo-1576765798657-d43658835f75", 500),
    elder: u("photo-1559839734-2b71ea197ec2", 500),
    family: u("photo-1584515933487-779824d29309", 500),
  },
  services: {
    nursing: u("photo-1576091160399-112ba8d25d1d", 600),
    elder: u("photo-1559839734-2b71ea197ec2", 600),
    bedridden: u("photo-1579684385127-1ef15f508118", 600),
    surgery: u("photo-1581594693702-fbdc00b496e0", 600),
    stroke: u("photo-1576091160550-2173dba999ef", 600),
    icu: u("photo-1516549655169-a5e4eb7a0b8b", 600),
    injection: u("photo-1584982751601-97dcc096659c", 600),
    caregiver: u("photo-1582750433449-648ed127bb54", 600),
  },
  caseStudies: [
    u("photo-1581594693702-fbdc00b496e0", 700),
    u("photo-1579684385127-1ef15f508118", 700),
    u("photo-1576091160550-2173dba999ef", 700),
  ],
  packages: [
    u("photo-1576765798657-d43658835f75", 500),
    u("photo-1584515933487-779824d29309", 500),
    u("photo-1631217868264-e5b90bb5e213", 500),
    u("photo-1559839734-2b71ea197ec2", 500),
  ],
  team: [
    u("photo-1576765798657-d43658835f75", 400),
    u("photo-1584515933487-779824d29309", 400),
    u("photo-1582750433449-648ed127bb54", 400),
  ],
  doctorCare: u("photo-1584982751601-97dcc096659c", 900),
  coverage: u("photo-1524661135-423995f22d0b", 1000),
  comparison: {
    home: u("photo-1576091160550-2173dba999ef", 700),
    hospital: u("photo-1519494026892-80bbd2d6fd0d", 700),
  },
  process: u("photo-1582750433449-648ed127bb54", 800),
  emergency: u("photo-1576765798657-d43658835f75", 1000),
  faq: u("photo-1631217868264-e5b90bb5e213", 800),
  contact: {
    main: u("photo-1576091160550-2173dba999ef", 900),
    support: u("photo-1584515933487-779824d29309", 600),
  },
} as const;

export const SERVICE_IMAGE_MAP: Record<string, string> = {
  "home-nursing-care": IMAGES.services.nursing,
  "elder-care": IMAGES.services.elder,
  "bedridden-care": IMAGES.services.bedridden,
  "post-surgery-care": IMAGES.services.surgery,
  "stroke-care": IMAGES.services.stroke,
  "icu-setup": IMAGES.services.icu,
  "injection-dressing": IMAGES.services.injection,
  "caregiver-services": IMAGES.services.caregiver,
};
