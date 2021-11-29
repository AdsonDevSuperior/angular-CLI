export interface Post{
  id: string;
  title: string;
  category: string;
  likes: number;
  outor?: string;
  tags?: string[];
  created: string;
  info: string;
}
