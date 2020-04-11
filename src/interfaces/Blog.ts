import { BlogStatus } from "src/enums/BlogStatus";

export interface BlogInterface {
  title: string;
  id: number;
  tldr: string;
  tags: string[];
  author: string;
  createdAt: string;
  updatedAt: string;
  status: BlogStatus;
  slug: string;
  content: string;
}
