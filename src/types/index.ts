interface HomeHero {
  nick_name: string;
  first_name: string;
  last_name: string;
  role: string;
  company: string;
}

export interface HomeHeroProps {
  data: HomeHero;
}

interface IExperience {
  id: string;
  year: string;
  role: string;
  description: string;
}

export interface ExperiencesProps {
  data: IExperience[];
}

// export interface ProjectProps {
//   title: string;
//   type: string;
//   description: string;
//   link: {
//     url: string;
//   };
//   image: string;
// }

export interface ProjectProps {
  project: {
    id: string;
    uid: string;
    title: string;
    type: string;
    content: any;
    link: {
      url: string;
    };
    image: string;
    github: {
      url: string;
    };
    technologies: string[];
  };
}

export interface ProjectsProps {
  projects: {
    id: string;
    uid: string;
    title: string;
    type: string;
    link: {
      url: string;
    };
    image: string;
  }[];
}
