// メタデータの型
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
