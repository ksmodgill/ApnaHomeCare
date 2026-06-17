export const SITE = {
  name: "Apna Home Care Nursing Services",
  shortName: "Apna Home Care",
  tagline: "Professional Nursing Care at Your Home",
  url: "https://apnahomecare.in",
  phone: "+916209495879",
  phoneDisplay: "+91 62094 95879",
  whatsapp: "916209495879",
  email: "info@apnahomecare.in",
  address: {
    street: "Traffic light, Aghoriya bazar, Kalambagh Rd, Pokhraira",
    city: "Muzaffarpur",
    state: "Bihar",
    postalCode: "842001",
    country: "IN",
    full: "Traffic light, Aghoriya bazar, Kalambagh Rd, Pokhraira, Muzaffarpur, Bihar 842001",
  },
  hours: "24 Hours Available",
  familiesAssisted: 500,
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#coverage", label: "Areas We Serve" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
] as const;

export const TRUST_BADGES = [
  "Experienced Nursing Team",
  "Home Patient Care",
  "Elder Care Support",
  "Post Surgery Assistance",
  "Emergency Support",
] as const;

export const TRUST_STRIP = [
  { value: "500+", label: "Families Assisted" },
  { value: "24/7", label: "Support" },
  { value: "Experienced", label: "Nursing Staff" },
  { value: "Muzaffarpur", label: "Service Coverage" },
] as const;

export const SERVICES = [
  {
    id: "home-nursing-care",
    title: "Home Nursing Care",
    description:
      "A qualified nurse at your door for medications, vitals, and daily monitoring — without the stress of hospital visits.",
    icon: "Stethoscope",
  },
  {
    id: "elder-care",
    title: "Elder Care Services",
    description:
      "Someone patient and kind for your mother or father — help with walking, meals, medicines, and everyday dignity.",
    icon: "HeartHandshake",
  },
  {
    id: "bedridden-care",
    title: "Bedridden Patient Care",
    description:
      "Dedicated daily assistance for immobile patients including hygiene, positioning, feeding support, and vital monitoring.",
    icon: "BedDouble",
  },
  {
    id: "post-surgery-care",
    title: "Post Surgery Care",
    description:
      "Structured recovery support with wound care, pain management assistance, and rehabilitation coordination at home.",
    icon: "Activity",
  },
  {
    id: "stroke-care",
    title: "Stroke Patient Care",
    description:
      "Specialized rehabilitation assistance with mobility exercises, speech support coordination, and continuous patient monitoring.",
    icon: "Brain",
  },
  {
    id: "icu-setup",
    title: "ICU Setup Assistance",
    description:
      "Home ICU coordination including medical equipment setup, oxygen support, and trained nursing staff for critical care.",
    icon: "Hospital",
  },
  {
    id: "injection-dressing",
    title: "Injection & Dressing Support",
    description:
      "Safe administration of injections, IV support, and professional wound dressing by qualified nursing professionals.",
    icon: "Syringe",
  },
  {
    id: "caregiver-services",
    title: "Caregiver Services",
    description:
      "Trained patient attendants providing daily living support, meal assistance, and continuous bedside care for families.",
    icon: "Users",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    title: "Nurses We Would Trust With Our Own Parents",
    description:
      "Every caregiver is background-checked, credential-verified, and trained in home care protocols before their first visit.",
  },
  {
    title: "Care Plans Your Doctor Signs Off On",
    description:
      "We build around your physician's instructions — wound care, medications, vitals — and share updates your doctor can act on.",
  },
  {
    title: "Costs That Make Sense for Families",
    description:
      "Flexible hourly to monthly plans. Most families spend far less than keeping a loved one in hospital longer than necessary.",
  },
  {
    title: "Here When It Cannot Wait",
    description:
      "Discharged today? Need a nurse tonight? We deploy across Muzaffarpur, Kanti, and Motihari — often within hours.",
  },
  {
    title: "Dignity in Every Interaction",
    description:
      "Bathing, feeding, mobility — handled with patience and respect, especially for elders and bedridden patients.",
  },
  {
    title: "24/7 Backup You Can Call",
    description:
      "Dedicated coordinators, shift coverage, and WhatsApp updates so you are never guessing about your patient's care.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Call or Submit Inquiry",
    description: "Reach us by phone, WhatsApp, or our quick inquiry form — available 24/7.",
  },
  {
    step: 2,
    title: "Discuss Patient Requirements",
    description: "Our care coordinator understands the patient's condition, needs, and family preferences.",
  },
  {
    step: 3,
    title: "Care Plan Preparation",
    description: "We design a personalized care plan aligned with medical requirements and daily routines.",
  },
  {
    step: 4,
    title: "Nurse Assignment",
    description: "A qualified nurse or caregiver matched to your patient's specific care needs is assigned.",
  },
  {
    step: 5,
    title: "Start Home Care Services",
    description: "Professional home nursing care begins with ongoing supervision and family updates.",
  },
] as const;

export const LOCATIONS = [
  {
    slug: "muzaffarpur",
    name: "Muzaffarpur",
    description:
      "Comprehensive home nursing services across Muzaffarpur city including trained nurses, elder care, and post-surgery support for families.",
  },
  {
    slug: "kanti",
    name: "Kanti",
    description:
      "Professional patient care and nursing assistance in Kanti with prompt response times and compassionate home healthcare support.",
  },
  {
    slug: "motihari",
    name: "Motihari",
    description:
      "Reliable home nursing and caregiver services in Motihari for elderly patients, bedridden care, and recovery assistance.",
  },
  {
    slug: "bela",
    name: "Bela",
    description:
      "Dedicated home healthcare services in Bela with experienced nursing staff for daily patient monitoring and clinical support.",
  },
  {
    slug: "ahiyapur",
    name: "Ahiyapur",
    description:
      "Trusted nursing care at home in Ahiyapur including injection support, dressing, and long-term patient attendant services.",
  },
  {
    slug: "kalambagh",
    name: "Kalambagh",
    description:
      "Quality elder care and home nursing in Kalambagh with flexible care durations tailored to each family's needs.",
  },
  {
    slug: "mithanpura",
    name: "Mithanpura",
    description:
      "Compassionate home patient care in Mithanpura with trained caregivers and professional nursing procedures at your doorstep.",
  },
  {
    slug: "pokhraira",
    name: "Pokhraira",
    description:
      "Accessible home nursing services in Pokhraira for post-operative recovery, chronic illness management, and emergency support.",
  },
] as const;

export const FEATURED_REVIEW = {
  name: "Rahul Kumar",
  location: "Muzaffarpur",
  rating: 5,
  text: "The nursing team cared for my father as if he were their own family member. Their professionalism, kindness and timely support made a huge difference in his recovery. I would highly recommend Apna Home Care to anyone looking for dependable home nursing services in Muzaffarpur.",
} as const;

export const REVIEWS = [
  {
    name: "Rahul Kumar",
    rating: 5,
    text: "My father needed nursing support after surgery and the team provided excellent care at home. The nurse was punctual, polite and experienced. It helped us avoid frequent hospital visits.",
    date: "Jan 2026",
  },
  {
    name: "Karan Arora",
    rating: 5,
    text: "Very professional service. We hired a caregiver for my elderly mother and the experience has been smooth. The staff is supportive and responsive whenever we need assistance.",
    date: "Jan 2026",
  },
  {
    name: "Isha Gupta",
    rating: 5,
    text: "The nursing team took care of my grandmother with great patience and compassion. Their home care service gave our family peace of mind during a difficult time.",
    date: "Dec 2025",
  },
  {
    name: "Rohit Singh",
    rating: 5,
    text: "Reliable and trustworthy home nursing service in Muzaffarpur. The nurse handled medicines, vitals monitoring and daily care professionally.",
    date: "Dec 2025",
  },
  {
    name: "Subhajit Das",
    rating: 5,
    text: "Excellent support for bedridden patients. The caregiver assigned to us was well-trained and treated my father with respect and kindness.",
    date: "Nov 2025",
  },
  {
    name: "Pooja Verma",
    rating: 5,
    text: "We urgently needed nursing care after my mother's discharge from the hospital. Apna Home Care arranged support quickly and the service exceeded our expectations.",
    date: "Nov 2025",
  },
  {
    name: "Amit Raj",
    rating: 5,
    text: "Good communication, experienced staff and reasonable service. The nurse regularly updated us about the patient's condition and recovery progress.",
    date: "Oct 2025",
  },
  {
    name: "Neha Kumari",
    rating: 5,
    text: "The caregiver helped my grandfather with daily activities and mobility support. We noticed a significant improvement in his comfort and confidence.",
    date: "Oct 2025",
  },
  {
    name: "Vikash Kumar",
    rating: 5,
    text: "Professional home care services with a caring approach. The staff always arrived on time and maintained proper hygiene standards.",
    date: "Sep 2025",
  },
  {
    name: "Anjali Sharma",
    rating: 4,
    text: "Good experience overall. The nursing staff was knowledgeable and cooperative. Scheduling could have been slightly faster, but the care provided was excellent.",
    date: "Sep 2025",
  },
  {
    name: "Manoj Kumar",
    rating: 4,
    text: "We used their post-surgery home care service for two weeks. The nurse was attentive and helpful. Very satisfied with the overall support.",
    date: "Aug 2025",
  },
  {
    name: "Priya Sinha",
    rating: 4,
    text: "The team was responsive and caring. Our caregiver was patient and friendly with my elderly mother. A good option for home nursing services in Muzaffarpur.",
    date: "Aug 2025",
  },
] as const;

export const FAQS = [
  {
    question: "What services are included in home nursing care?",
    answer:
      "Our home nursing care includes medication administration, vital sign monitoring, wound dressing, injection support, patient hygiene assistance, health reporting to families, and coordination with treating doctors. Services are customized based on each patient's medical condition and family requirements.",
  },
  {
    question: "Do you provide nurses for elderly patients?",
    answer:
      "Yes, we specialize in elder care services including mobility assistance, daily living support, companionship, medication reminders, and routine health monitoring. Our caregivers are trained to handle age-related conditions with patience and compassion.",
  },
  {
    question: "Can nursing care be arranged urgently?",
    answer:
      "Absolutely. We offer emergency home nursing support with rapid response across Muzaffarpur and nearby areas. Call us at +91 62094 95879 or message on WhatsApp for immediate assistance — we are available 24/7.",
  },
  {
    question: "Are your caregivers trained?",
    answer:
      "All our nurses and caregivers undergo professional training in patient care, hygiene protocols, emergency response, and compassionate communication. We verify credentials and match staff based on the specific care requirements of each patient.",
  },
  {
    question: "Do you offer post-surgery home care?",
    answer:
      "Yes, post-surgery care is one of our core services. We provide wound management, pain monitoring support, mobility assistance, nutritional guidance, and rehabilitation coordination to ensure safe recovery at home.",
  },
  {
    question: "How much does home nursing service cost?",
    answer:
      "Pricing depends on the type of care, duration (hourly, daily, weekly, or long-term), and specific medical requirements. Contact us for a personalized quote — we offer affordable home healthcare packages tailored to your budget and needs.",
  },
  {
    question: "Do you provide night nursing support?",
    answer:
      "Yes, we provide 24-hour nursing care including dedicated night shift support for patients who require continuous monitoring, bedridden care, or post-operative supervision during nighttime hours.",
  },
  {
    question: "What areas do you serve in Muzaffarpur?",
    answer:
      "We serve Muzaffarpur, Kanti, Motihari, Bela, Ahiyapur, Kalambagh, Mithanpura, Pokhraira, and surrounding districts in Bihar. Contact us to confirm service availability in your specific location.",
  },
  {
    question: "Can you set up ICU care at home?",
    answer:
      "We assist with home ICU setup coordination including oxygen support, medical equipment arrangement, and placement of trained critical care nursing staff. Our team works with families and doctors to create a safe home care environment.",
  },
  {
    question: "How do I book a home visit?",
    answer:
      "You can book a home visit by calling +91 62094 95879, messaging us on WhatsApp, or filling out the inquiry form on our website. Our care coordinator will discuss your requirements and schedule a visit promptly.",
  },
  {
    question: "Do you provide care for stroke patients?",
    answer:
      "Yes, we offer dedicated stroke patient care including mobility exercises, daily living assistance, feeding support, and coordination with physiotherapy and speech therapy as recommended by your doctor.",
  },
  {
    question: "Is home nursing safer than hospital stays for recovery?",
    answer:
      "For many patients, home nursing reduces infection risk, improves emotional well-being, and allows personalized attention in a familiar environment. We work with your doctor to determine if home care is appropriate for your patient's condition.",
  },
] as const;

export const CASE_STUDIES = [
  {
    title: "Knee Surgery — Back on His Feet at Home",
    patient: "Mr. R., 68",
    location: "Muzaffarpur",
    service: "Post-Surgery Care",
    duration: "21 days",
    challenge:
      "After knee replacement, daily hospital trips for dressing were exhausting the whole family. He could barely move without support.",
    careProvided:
      "Assigned nurse for daily wound dressing, vitals, and gentle mobility exercises. Coordinated with the orthopaedic surgeon's discharge plan.",
    outcome:
      "Walked independently by week 3. Family saved on hospital stay costs and slept better knowing a professional was there each morning.",
  },
  {
    title: "Bedridden Mother — Stable Care While Family Works",
    patient: "Mrs. S., 74",
    location: "Kanti",
    service: "Bedridden Patient Care",
    duration: "6+ months",
    challenge:
      "Completely bedridden with diabetes. Sons worked day jobs and could not manage hygiene, turning, and feeding safely on their own.",
    careProvided:
      "Full-day attendant plus weekly nursing supervision. Pressure sore prevention, glucose monitoring, and daily hygiene routines.",
    outcome:
      "No new bedsores in 6 months. Sons received WhatsApp health updates daily and could focus on work without guilt.",
  },
  {
    title: "Stroke Discharge — Nurse There the Same Evening",
    patient: "Mr. A., 55",
    location: "Motihari",
    service: "Stroke Recovery Care",
    duration: "8 weeks",
    challenge:
      "Hospital discharged him on short notice. Family panicked — he needed constant monitoring and could not be left alone.",
    careProvided:
      "Emergency nurse deployed within 4 hours. Mobility drills, feeding support, and neurologist-aligned rehab plan from day one.",
    outcome:
      "Noticeable arm and leg movement returned within 8 weeks. Family credited fast response and doctor coordination for the recovery.",
  },
] as const;

export const CARE_PACKAGES = [
  {
    title: "Hourly Care",
    description:
      "Flexible short-duration nursing visits for injections, dressing, vitals check, or brief patient assistance. Ideal for families needing occasional clinical support.",
    features: ["Minimum 2-hour visits", "Injection & dressing", "Vitals monitoring", "Doctor-prescribed procedures"],
    cta: "Get Hourly Care Quote",
  },
  {
    title: "Daily Care",
    description:
      "Full-day nursing or caregiver support for patients requiring consistent daytime or nighttime assistance with daily living and health monitoring.",
    features: ["8-12 hour shifts", "Meal & mobility support", "Medication management", "Family health updates"],
    cta: "Get Daily Care Quote",
  },
  {
    title: "Weekly Care",
    description:
      "Structured weekly care plans for recovery periods, post-surgery support, or temporary family relief with dedicated nursing staff.",
    features: ["7-day care plans", "Consistent nurse assignment", "Care plan reviews", "Flexible scheduling"],
    cta: "Get Weekly Care Quote",
  },
  {
    title: "Long-Term Care",
    description:
      "Extended home nursing for chronic conditions, elderly care, and bedridden patients requiring ongoing professional support at home.",
    features: ["Monthly packages", "Dedicated caregivers", "Regular doctor coordination", "Priority support"],
    cta: "Get Long-Term Care Quote",
  },
] as const;

export const CARE_TEAM = [
  {
    name: "Priya Sharma",
    role: "Head Nurse",
    credential: "GNM · 12 yrs",
  },
  {
    name: "Rajesh Kumar",
    role: "Care Coordinator",
    credential: "10 yrs patient care",
  },
  {
    name: "Anita Devi",
    role: "Elder Care Lead",
    credential: "ANM · Geriatric care",
  },
] as const;

export const COMPARISON = {
  homeCare: [
    "Recover in familiar, comfortable surroundings",
    "Lower risk of hospital-acquired infections",
    "Personalized one-on-one nursing attention",
    "Family members can stay involved in care",
    "Significantly more affordable than hospital stays",
    "Flexible care duration based on recovery",
  ],
  hospitalStay: [
    "Higher daily accommodation and facility costs",
    "Limited personal attention in shared wards",
    "Emotional stress from hospital environment",
    "Restricted visiting hours for family",
    "Exposure to other patients' infections",
    "Fixed discharge timelines regardless of comfort",
  ],
} as const;

export const BLOG_POSTS = [
  {
    slug: "benefits-of-home-nursing-care",
    title: "5 Benefits of Home Nursing Care for Families in Muzaffarpur",
    excerpt:
      "Discover why more families in Bihar are choosing professional home nursing over extended hospital stays for patient recovery and elder care.",
    date: "2026-01-15",
    category: "Home Healthcare",
    readTime: "5 min read",
  },
  {
    slug: "elder-care-tips-at-home",
    title: "Essential Elder Care Tips for Families Caring for Seniors at Home",
    excerpt:
      "Practical guidance for families managing elderly care at home, from safety modifications to recognizing when professional nursing support is needed.",
    date: "2026-01-08",
    category: "Elder Care",
    readTime: "6 min read",
  },
  {
    slug: "post-surgery-recovery-guide",
    title: "Post-Surgery Recovery at Home: A Complete Guide for Patients",
    excerpt:
      "What to expect during home recovery after surgery, including wound care, mobility exercises, and when to call your home nursing team.",
    date: "2025-12-20",
    category: "Recovery",
    readTime: "7 min read",
  },
] as const;

export const FOOTER_SERVICES = SERVICES.map((s) => ({
  label: s.title,
  href: `/#services`,
}));

export const FOOTER_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Coverage", href: "/#coverage" },
  { label: "Care Packages", href: "/#packages" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
] as const;
