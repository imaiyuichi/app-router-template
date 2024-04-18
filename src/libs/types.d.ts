// メタデータの型 適当なのであとで修正
export type MetaDataType = {
  favicon?: ImageType;
  appleTouchIcon?: ImageType;
  title: string;
  description?: string;
  ogType: string;
  currentUrl: string;
  ogImage?: ImageType;
  noIndex: boolean | undefined;
};

// 記事　適当なのであとで修正
export type PostType = {
  posts: PostDataType[];
};

export type PostDataType = {
  id: string;
  title: string;
  content: string;
};
