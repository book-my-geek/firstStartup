export type NextImageSrc =
    | {
          src: string;
          height: number;
          width: number;
          blurDataURL?: string;
      }
    | string;

export type TechStack = string;

export type DevInfoType = {
    Avatar: string;
    Name: string;
    role: string;
    experience: string;
    projects: number;
    techStack: TechStack[];
};
