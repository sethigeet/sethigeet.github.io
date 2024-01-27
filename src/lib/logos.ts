export type Technology =
  | "Linux"
  | "Docker"
  | "Apache"
  | "Nginx"
  | "AWS"
  | "Figma"
  | "Git"
  | "HTML"
  | "CSS"
  | "SCSS"
  | "Tailwind CSS"
  | "JavaScript"
  | "TypeScript"
  | "Node.js"
  | "React"
  | "Next.js"
  | "Astro"
  | "MongoDB"
  | "MySQL"
  | "PostgreSQL"
  | "Redis"
  | "Python"
  | "Django"
  | "FastAPI"
  | "C"
  | "C++"
  | "Rust"
  | "Lua";

// prettier-ignore
export const LOGOS: { name: Technology; path: string }[] = [
  { name: "Apache",  path: "/src/components/icons/tech-logos/apache.svg" },
  { name: "Astro", path: "/src/components/icons/tech-logos/astro.png" },
  { name: "AWS", path: "/src/components/icons/tech-logos/aws.svg" },
  { name: "C", path: "/src/components/icons/tech-logos/c.svg" },
  { name: "C++", path: "/src/components/icons/tech-logos/c++.svg" },
  { name: "CSS", path: "/src/components/icons/tech-logos/css.svg" },
  { name: "Django", path: "/src/components/icons/tech-logos/django.svg" },
  { name: "Docker", path: "/src/components/icons/tech-logos/docker.svg" },
  { name: "FastAPI", path: "/src/components/icons/tech-logos/fastapi.svg" },
  { name: "Figma", path: "/src/components/icons/tech-logos/figma.svg" },
  { name: "Git", path: "/src/components/icons/tech-logos/git.svg" },
  { name: "HTML", path: "/src/components/icons/tech-logos/html.svg" },
  { name: "JavaScript", path: "/src/components/icons/tech-logos/javascript.svg" },
  { name: "Linux", path: "/src/components/icons/tech-logos/linux.svg" },
  { name: "Lua", path: "/src/components/icons/tech-logos/lua.svg" },
  { name: "MongoDB", path: "/src/components/icons/tech-logos/mongodb.svg" },
  { name: "MySQL", path: "/src/components/icons/tech-logos/mysql.svg" },
  { name: "Next.js", path: "/src/components/icons/tech-logos/nextjs.png" },
  { name: "Nginx", path: "/src/components/icons/tech-logos/nginx.svg" },
  { name: "Node.js", path: "/src/components/icons/tech-logos/nodejs.svg" },
  { name: "PostgreSQL", path: "/src/components/icons/tech-logos/postgresql.svg" },
  { name: "Python", path: "/src/components/icons/tech-logos/python.svg" },
  { name: "React", path: "/src/components/icons/tech-logos/react.svg" },
  { name: "Redis", path: "/src/components/icons/tech-logos/redis.svg" },
  { name: "Rust", path: "/src/components/icons/tech-logos/rust.png" },
  { name: "SCSS", path: "/src/components/icons/tech-logos/sass.svg" },
  { name: "Tailwind CSS", path: "/src/components/icons/tech-logos/tailwind.svg" },
  { name: "TypeScript", path: "/src/components/icons/tech-logos/typescript.svg" },
];
