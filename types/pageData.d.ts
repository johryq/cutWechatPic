export interface IUser {
  name: string;
  avatar: iURL;
  text: string;
  pic: IURL[];
}

export interface IURL {
  url: string;
  alt: string;
}

export default { PageDate, IURL };
