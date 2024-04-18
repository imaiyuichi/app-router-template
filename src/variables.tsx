// NAME
export const URL_ORIGIN = '/';
export const URL_ABOUT = '/about';

// API
export const API_KEY =
  'https://public-api.wordpress.com/rest/v1.1/sites/test85446.wordpress.com/posts';

// GTM
export const ID_GTM = 'GTM-SAMPLE';

// IMAGES
export const URL_FAVICON = '/common/favicon.ico';
export const URL_TOUCH_ICON =
  '/common/apple-touch-icon.png';
export const URL_OGP = 'common/ogimg.png';

// ブレークポイント
export const BREAKPOINT = 768;
export const MQ_MAX = `(max-width: ${BREAKPOINT}px)`;

// 一覧ページの記事表示数
export const ITEMS_PER_PAGE = 8;

// SNS API共通パーツに追加があればここにも追加、types.d.tsで参照する
export const SNS_NAMES = [
  'facebook',
  'x',
  'twitter',
  'instagram',
  'youtube',
  'line',
  'linkedin',
] as const;
export type SnsName = (typeof SNS_NAMES)[number];

// カラーコード
export const DEFAULT = '#7d7d7d'; // デフォルトのカラー

//Googleアナリティクス GTM-ID
export const GTM_ID = 'GTM-XXXXXX';
