type Website = {
  url: string;
};
type Article = {
  title: string;
  content: string;
};
type BlogPost = Website &
  Article & {
    view: number;
  };

type Role = 'Admin' | 'Moderator' | 'Editor';
let role: Role = 'Admin';
console.log(role);
