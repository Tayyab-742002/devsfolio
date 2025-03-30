// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

interface CoverImageDocumentData {}

/**
 * Cover Image document from Prismic
 *
 * - **API ID**: `cover_image`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CoverImageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CoverImageDocumentData>,
    "cover_image",
    Lang
  >;

interface DescriptionDocumentData {}

/**
 * Description document from Prismic
 *
 * - **API ID**: `description`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type DescriptionDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<DescriptionDocumentData>,
    "description",
    Lang
  >;

interface GithubUrlDocumentData {}

/**
 * GitHub URL document from Prismic
 *
 * - **API ID**: `github_url`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GithubUrlDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<GithubUrlDocumentData>,
    "github_url",
    Lang
  >;

type LandingPageDocumentDataSlicesSlice =
  | AboutMeSlice
  | HeroSlice
  | NavbarSlice;

/**
 * Content for Landing Page documents
 */
interface LandingPageDocumentData {
  /**
   * Slice Zone field in *Landing Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<LandingPageDocumentDataSlicesSlice> /**
   * Meta Title field in *Landing Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: landing_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Landing Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: landing_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Landing Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Landing Page document from Prismic
 *
 * - **API ID**: `landing_page`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LandingPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<LandingPageDocumentData>,
    "landing_page",
    Lang
  >;

interface LiveUrlDocumentData {}

/**
 * Live URL document from Prismic
 *
 * - **API ID**: `live_url`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LiveUrlDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<LiveUrlDocumentData>,
    "live_url",
    Lang
  >;

interface TechStackDocumentData {}

/**
 * Tech Stack document from Prismic
 *
 * - **API ID**: `tech_stack`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TechStackDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<TechStackDocumentData>,
    "tech_stack",
    Lang
  >;

interface TitleDocumentData {}

/**
 * TItle document from Prismic
 *
 * - **API ID**: `title`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TitleDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<TitleDocumentData>, "title", Lang>;

interface UidDocumentData {}

/**
 * UID document from Prismic
 *
 * - **API ID**: `uid`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type UidDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<UidDocumentData>, "uid", Lang>;

export type AllDocumentTypes =
  | CoverImageDocument
  | DescriptionDocument
  | GithubUrlDocument
  | LandingPageDocument
  | LiveUrlDocument
  | TechStackDocument
  | TitleDocument
  | UidDocument;

/**
 * Item in *AboutMe → Default → Primary → TechAreas*
 */
export interface AboutMeSliceDefaultPrimaryTechareasItem {
  /**
   * Title field in *AboutMe → Default → Primary → TechAreas*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.default.primary.techareas[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Percentage field in *AboutMe → Default → Primary → TechAreas*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.default.primary.techareas[].percentage
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  percentage: prismic.KeyTextField;
}

/**
 * Item in *AboutMe → Default → Primary → Tags*
 */
export interface AboutMeSliceDefaultPrimaryTagsItem {
  /**
   * Tag name field in *AboutMe → Default → Primary → Tags*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.default.primary.tags[].tag_name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tag_name: prismic.KeyTextField;
}

/**
 * Item in *AboutMe → Default → Primary → Tech Skills*
 */
export interface AboutMeSliceDefaultPrimaryTechSkillsItem {
  /**
   * skill field in *AboutMe → Default → Primary → Tech Skills*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.default.primary.tech_skills[].skill
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  skill: prismic.KeyTextField;
}

/**
 * Primary content in *AboutMe → Default → Primary*
 */
export interface AboutMeSliceDefaultPrimary {
  /**
   * avatar field in *AboutMe → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.default.primary.avatar
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  avatar: prismic.ImageField<never>;

  /**
   * TechAreas field in *AboutMe → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.default.primary.techareas[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  techareas: prismic.GroupField<
    Simplify<AboutMeSliceDefaultPrimaryTechareasItem>
  >;

  /**
   * My Journey field in *AboutMe → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.default.primary.my_journey
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  my_journey: prismic.KeyTextField;

  /**
   * Journey Detail field in *AboutMe → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.default.primary.journey_detail
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  journey_detail: prismic.KeyTextField;

  /**
   * Tags field in *AboutMe → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.default.primary.tags[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  tags: prismic.GroupField<Simplify<AboutMeSliceDefaultPrimaryTagsItem>>;

  /**
   * Tech Expertise field in *AboutMe → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.default.primary.tech_expertise
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tech_expertise: prismic.KeyTextField;

  /**
   * Tech Skills field in *AboutMe → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.default.primary.tech_skills[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  tech_skills: prismic.GroupField<
    Simplify<AboutMeSliceDefaultPrimaryTechSkillsItem>
  >;
}

/**
 * Default variation for AboutMe Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutMeSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutMeSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutMe*
 */
type AboutMeSliceVariation = AboutMeSliceDefault;

/**
 * AboutMe Shared Slice
 *
 * - **API ID**: `about_me`
 * - **Description**: AboutMe
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutMeSlice = prismic.SharedSlice<
  "about_me",
  AboutMeSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Name field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Your Name
   * - **API ID Path**: hero.default.primary.name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * title field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Your Profession
   * - **API ID Path**: hero.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * expertise field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Your tech fields
   * - **API ID Path**: hero.default.primary.expertise
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  expertise: prismic.RichTextField;

  /**
   * CTA field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Call To Action Button
   * - **API ID Path**: hero.default.primary.cta
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *Navbar → Default → Primary → Links*
 */
export interface NavbarSliceDefaultPrimaryLinksItem {
  /**
   * URL field in *Navbar → Default → Primary → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.default.primary.links[].url
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  url: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Primary content in *Navbar → Default → Primary*
 */
export interface NavbarSliceDefaultPrimary {
  /**
   * Logo field in *Navbar → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.default.primary.logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * LogoText field in *Navbar → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.default.primary.logotext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  logotext: prismic.KeyTextField;

  /**
   * Links field in *Navbar → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navbar.default.primary.links[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<NavbarSliceDefaultPrimaryLinksItem>>;
}

/**
 * Default variation for Navbar Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavbarSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NavbarSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Navbar*
 */
type NavbarSliceVariation = NavbarSliceDefault;

/**
 * Navbar Shared Slice
 *
 * - **API ID**: `navbar`
 * - **Description**: Navbar
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NavbarSlice = prismic.SharedSlice<"navbar", NavbarSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      CoverImageDocument,
      CoverImageDocumentData,
      DescriptionDocument,
      DescriptionDocumentData,
      GithubUrlDocument,
      GithubUrlDocumentData,
      LandingPageDocument,
      LandingPageDocumentData,
      LandingPageDocumentDataSlicesSlice,
      LiveUrlDocument,
      LiveUrlDocumentData,
      TechStackDocument,
      TechStackDocumentData,
      TitleDocument,
      TitleDocumentData,
      UidDocument,
      UidDocumentData,
      AllDocumentTypes,
      AboutMeSlice,
      AboutMeSliceDefaultPrimaryTechareasItem,
      AboutMeSliceDefaultPrimaryTagsItem,
      AboutMeSliceDefaultPrimaryTechSkillsItem,
      AboutMeSliceDefaultPrimary,
      AboutMeSliceVariation,
      AboutMeSliceDefault,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      NavbarSlice,
      NavbarSliceDefaultPrimaryLinksItem,
      NavbarSliceDefaultPrimary,
      NavbarSliceVariation,
      NavbarSliceDefault,
    };
  }
}
