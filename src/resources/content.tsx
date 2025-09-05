import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Islam",
  lastName: "Sultanov",
  name: `Islam Sultanov`,
  role: "Artist, Creative Director",
  avatar: "/images/avatar.jpg",
  email: "IslamSultanov@gmail.com",
  location: "Asia/Tashkent", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Uzbek", "Russian", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and music</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/_islamsultanov_",
  },
  {
    name: "Telegram",
    icon: "telegram",
    link: "https://t.me/DBBWA",
  },
  {
    name: "Youtube",
    icon: "youtube",
    link: "https://www.youtube.com/@DBBWA",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning ideas into sound and visuals</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Join  </strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Instagram
        </Text>
      </Row>
    ),
    href: "https://www.instagram.com/_islamsultanov_",
  },
  subline: (
    <>
      <br />
      I'm <strong> Islom Sultonov | dbbwa </strong> — a multidisciplinary creative. 
      <br/> 
      <br /> I write lyrics, compose and perform music, shoot and edit videos, capture authentic moments as a mobilographer, and craft stories through SMM.
      <br /> For me, it’s all about blending music, visuals, and emotions into one flow.
      
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://t.me/IslamSultanov",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Islom Sultonov (dbbwa) is a multidisciplinary creative with a passion for blending music and visuals into powerful stories. 
        My work spans songwriting, performing, filmmaking, mobile photography, video editing, and SMM — exploring the intersection of sound, motion, and creativity.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Songwriting & Music",
        description: (
          <>Creating original lyrics, composing melodies, and performing songs with unique style.</>
        ),
        tags: [
          {
            name: "Songwriting",
            icon: "music",
          },
          {
            name: "Vocal",
            icon: "mic",
          },
          {
            name: "Composition",
            icon: "note",
          },
        ],
        images: [],
      },
      {
        title: "Filmmaking & Video Editing",
        description: (
          <>Shooting, directing, and editing music videos and creative short clips.</>
        ),
        tags: [
          {
            name: "Filmmaking",
            icon: "camera",
          },
          {
            name: "Editing",
            icon: "clapperboard",
          },
          {
            name: "Adobe Premiere Pro",
            icon: "premierepro",
          },
        ],
        images: [],
      },
      {
        title: "Photography & Mobilography",
        description: (
          <>Capturing authentic moments and visuals using mobile and professional tools.</>
        ),
        tags: [
          {
            name: "Photography",
            icon: "camera",
          },
          {
            name: "Mobilography",
            icon: "smartphone",
          },
        ],
        images: [],
      },
      {
        title: "SMM & Creative Strategy",
        description: (
          <>Building digital presence, storytelling for brands, and engaging communities through social media.</>
        ),
        tags: [
          {
            name: "SMM",
            icon: "megaphone",
          },
          {
            name: "Content Creation",
            icon: "edit",
          },
          {
            name: "Branding",
            icon: "palette",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
