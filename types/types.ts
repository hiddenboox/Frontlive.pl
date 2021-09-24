export type Variant = 'blue' | 'green' | 'orange' | 'yellow' | 'purple' | 'black';

export type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type Category = {
  title: string;
  path: string;
};

type Frontmatter = {
  title: string;
  excerpt: string;
};

export type PostFrontmatter = {
  category: string;
  publishedAt: string;
  popular: boolean;
  isPublished: boolean;
  image: string;
  readingTime: number;
} & Frontmatter;

export type Post = {
  title: string;
  category: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  popular: boolean;
  isPublished: boolean;
  imageOpenGraph: string;
};

export type GistWithoutContent = {
  git_pull_url: string;
  id: string;
  created_at: string;
  description: string;
  files: {
    [key: string]: {
      filename: string;
    };
  };
};

export type GistWithContent = {
  git_pull_url: string;
  id: string;
  created_at: string;
  description: string;
  files: {
    [key: string]: {
      language: string;
      content: string;
      filename: string;
    };
  };
};

export type Snippet = {
  url: string;
  id: string;
  createdAt: string;
  description: string;
  filename: string;
  content: string;
};
