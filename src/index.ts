interface Website {
  url: string;
}
interface Article {
  title: string;
  content: string;
}
interface BlogPost extends Website, Article {
  view: number;
}
const post: BlogPost = {
  url: 'www.google.com',
  title: 'extent interface',
  content: '...',
  view: 999,
};
console.log(post);
