export interface CoursesInt {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: GUID;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: GUID;
  content: Content;
  excerpt: Content;
  author: number;
  featured_media: number;
  template: string;
  meta: Meta;
  'course-category': number[];
  'course-tag': number[];
  class_list: string[];
  yoast_head: string;
  yoast_head_json: YoastHeadJSON;
  _links: Links;
}

export interface CoursesId {
  id: number;
}

export interface Links {
  self: Self[];
  collection: About[];
  about: About[];
  author: Author[];
  'version-history': VersionHistory[];
  'wp:featuredmedia': Author[];
  'wp:attachment': About[];
  'wp:term': WpTerm[];
  curies: Cury[];
}

export interface About {
  href: string;
}

export interface Author {
  embeddable: boolean;
  href: string;
}

export interface Cury {
  name: string;
  href: string;
  templated: boolean;
}

export interface Self {
  href: string;
  targetHints: TargetHints;
}

export interface TargetHints {
  allow: string[];
}

export interface VersionHistory {
  count: number;
  href: string;
}

export interface WpTerm {
  taxonomy: string;
  embeddable: boolean;
  href: string;
}

export interface Content {
  rendered: string;
  protected: boolean;
}

export interface GUID {
  rendered: string;
}

export interface Meta {
  pmpro_default_level: string;
  'site-sidebar-layout': string;
  'site-content-layout': string;
  'ast-site-content-layout': string;
  'site-content-style': string;
  'site-sidebar-style': string;
  'ast-global-header-display': string;
  'ast-banner-title-visibility': string;
  'ast-main-header-display': string;
  'ast-hfb-above-header-display': string;
  'ast-hfb-below-header-display': string;
  'ast-hfb-mobile-header-display': string;
  'site-post-title': string;
  'ast-breadcrumbs-content': string;
  'ast-featured-img': string;
  'footer-sml-layout': string;
  'ast-disable-related-posts': string;
  'theme-transparent-header-meta': string;
  'adv-header-id-meta': string;
  'stick-header-meta': string;
  'header-above-stick-meta': string;
  'header-main-stick-meta': string;
  'header-below-stick-meta': string;
  'astra-migrate-meta-layouts': string;
  'ast-page-background-enabled': string;
  'ast-page-background-meta': ASTBackgroundMeta;
  'ast-content-background-meta': ASTBackgroundMeta;
  _joinchat: any[];
}

export interface ASTBackgroundMeta {
  desktop: Desktop;
  tablet: Desktop;
  mobile: Desktop;
}

export interface Desktop {
  'background-color': string;
  'background-image': string;
  'background-repeat': string;
  'background-position': string;
  'background-size': string;
  'background-attachment': string;
  'background-type': string;
  'background-media': string;
  'overlay-type': string;
  'overlay-color': string;
  'overlay-opacity': string;
  'overlay-gradient': string;
}

export interface YoastHeadJSON {
  title: string;
  description: string;
  robots: Robots;
  canonical: string;
  og_locale: string;
  og_type: string;
  og_title: string;
  og_description: string;
  og_url: string;
  og_site_name: string;
  article_publisher: string;
  article_modified_time: Date;
  og_image: OgImage[];
  twitter_card: string;
  twitter_misc: TwitterMisc;
  schema: Schema;
}

export interface OgImage {
  width: number;
  height: number;
  url: string;
  type: string;
}

export interface Robots {
  index: string;
  follow: string;
  'max-snippet': string;
  'max-image-preview': string;
  'max-video-preview': string;
}

export interface Schema {
  '@context': string;
  '@graph': Graph[];
}

export interface Graph {
  '@type': string;
  '@id': string;
  url?: string;
  name?: string;
  isPartOf?: Breadcrumb;
  primaryImageOfPage?: Breadcrumb;
  image?: Breadcrumb;
  thumbnailUrl?: string;
  datePublished?: Date;
  dateModified?: Date;
  description?: string;
  breadcrumb?: Breadcrumb;
  inLanguage?: string;
  potentialAction?: PotentialAction[];
  contentUrl?: string;
  width?: number;
  height?: number;
  caption?: string;
  itemListElement?: ItemListElement[];
  publisher?: Breadcrumb;
  alternateName?: string;
  logo?: Logo;
  sameAs?: string[];
}

export interface Breadcrumb {
  '@id': string;
}

export interface ItemListElement {
  '@type': string;
  position: number;
  name: string;
  item?: string;
}

export interface Logo {
  '@type': string;
  inLanguage: string;
  '@id': string;
  url: string;
  contentUrl: string;
  width: number;
  height: number;
  caption: string;
}

export interface PotentialAction {
  '@type': string;
  target: string[] | TargetClass;
  'query-input'?: QueryInput;
}

export interface QueryInput {
  '@type': string;
  valueRequired: boolean;
  valueName: string;
}

export interface TargetClass {
  '@type': string;
  urlTemplate: string;
}

export interface TwitterMisc {
  'Est. reading time': string;
}
