# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.2] - 2026-02-01

### Added

- **Custom Post Slugs**:
  - Full support for `slug` field in frontmatter (e.g., `/posts/my-title`).
  - Automated fallback to date-slug format (`YYYY-MM-DD-filename`) if no slug is provided.
  - Updated all systems (RSS, Search, OG-images) to respect custom identifiers.
- **Expanded Global Language Support**:
  - Added support for 40+ global languages (PL, BE, KK, TR, AR, HI, JA, etc.).
  - Support for both `uk` and `ua` codes for Ukrainian language.

### Fixed

- **Home Page Appearance Flags**: Added missing language indicators for the "Talks & Appearances" section on the index page.

## [1.2.1] - 2026-02-01

### Added

- **Initial Multi-language Support**:
  - Added `lang` field to posts and appearances (defaults to `en`).
  - Visual color flags for non-English content in lists and pages.
  - Dynamic `html lang` and JSON-LD `inLanguage` metadata for SEO.
- **Google Tag Manager (GTM) Support**:
  - Native support for both `GTM-XXXX` and `G-XXXX` IDs.
  - Performance-optimized via Partytown (zero main-thread impact).
  - Included `<noscript>` fallback for maximum compatibility.
- **Premium 404 Page**: Custom, animated Error 404 page for better user retention.

### Changed

- **Architecture Reorganization**:
  - Assets moved from `public/` to `site/public/` for cleaner engine/content separation.
  - User media moved to `site/assets/` with a new `@/site-assets` alias.
- **SEO Optimization**: Replaced static `robots.txt` with a dynamic API endpoint.

### Fixed

- **Giscus Theme Hydration**: Fixed internal script injection warning in Comments component.
- **Content Hierarchy**: Standardized H1 usage across all templates for better search ranking.

## [1.2.0] - 2026-02-01

### Added

- **Draft Posts**:
  - Added `draft` field to posts schema (boolean, default: false).
  - Draft posts are visible only in development mode with prominent amber "DRAFT" badge.
  - Draft posts are completely hidden in production builds.
  - Visual indicators appear both in post lists (PostCard) and individual post pages.
- **Publication Date Filtering**:
  - Created `getPublishedPosts()` utility function for smart post filtering.
  - Posts with future publication dates are hidden in production, visible in development.
  - Allows scheduling posts by setting future `pubDate`.
  - Development mode shows all posts regardless of date or draft status for easy preview.

- **CTA (Call-to-Action) Blocks**:
  - Added customizable CTA block system for blog posts.
  - CTA content managed via `site/cta.md` markdown file.
  - Global toggle in `site/config.ts` with `cta.enabled` option.
  - Per-post control via `showCTA: false` frontmatter option.
  - Compact, visually appealing design with proper typography and spacing.

- **Comments System (Giscus)**:
  - Integrated Giscus for GitHub Discussions-powered comments.
  - Full configuration in `site/config.ts` with theme matching.
  - Per-post toggle via `showComments: false` frontmatter option.
  - Privacy-friendly, no tracking, uses GitHub authentication.

- **Homepage Configuration**:
  - Added `featuredPostsCount` option (controls featured posts display).
  - Added `latestPostsCount` option (controls latest posts display).
  - Configurable in `site/config.ts` for flexible homepage layouts.

- **Comprehensive Documentation**:
  - Created "How to Publish Posts in Spaceship" guide post.
  - Created "Configuring Spaceship" guide post.
  - Updated README.md with new features and quick start guide.
  - Added documentation links in README to in-app guides.

### Changed

- **Content Collections Schema**:
  - Added `draft: z.boolean().default(false)` to posts schema.
  - Added `showCTA: z.boolean().default(true)` to posts schema.
  - Added `showComments: z.boolean().default(true)` to posts schema.

- **Post Filtering**:
  - Replaced all `getCollection('posts')` calls with `getPublishedPosts()` for consistent filtering.
  - Updated RSS feed, search API, OG images, and all page templates.
  - Ensured draft and future posts never leak into production RSS or search indexes.

- **Visual Design**:
  - Added amber/yellow color scheme for draft indicators (accessible and distinct).
  - Enhanced post header layout to accommodate draft badge.
  - Improved list item styling in CTA blocks with proper bullet points.

### Fixed

- **Tailwind CSS v4 Compatibility**:
  - Removed `@apply` directives from CTABlock component (not supported in Tailwind v4).
  - Converted to vanilla CSS with proper responsive utilities.

- **CTA Block Styling**:
  - Made CTA blocks more compact by reducing font sizes, line heights, and spacing.
  - Fixed bullet points display in CTA lists with proper `list-style: disc` and padding.

## [1.1.3] - 2026-02-01

### Performance

- **Mobile Optimization (100/100)**: Resolved critical hydration bottlenecks on mobile devices.
  - Converted `Header` from Svelte to Astro to eliminate 40kB+ of hydration payload.
  - Removed `astro-loading-indicator` to fix a 31ms "Forced Reflow" penalty during initial paint.
  - Optimized hydration strategy for `ThemeToggle` and `Search` using `client:idle`.

### Changed

- **Accessibility**: Improved contrast ratios for project type badges ("Open Source", "Social") in dark mode to meet WCAG AAA standards.

## [1.1.2] - 2026-02-01

### Performance

- **Search Lazy Loading**: Refactored `SearchModal` to dynamically import the dialog component only upon interaction.
  - Reduces initial bundle size.
  - Eliminates critical request chaining for off-screen/hidden UI elements.
  - Restores Lighthouse Performance score to 100.

## [1.1.1] - 2026-02-01

### Fixed

- **Mermaid Diagrams**: Fixed styling issues in dark mode and resolved layout artifacts.
  - Ensured edge labels are visible and correctly styled in both themes.
  - Removed "phantom" labels (`L_D_F_0`) causing visual glitches.
  - Improved text contrast on colored nodes.

## [1.1.0] - 2026-01-31

### Added

- **Lighthouse 100/100/100/100**: Achieved perfect scores across Performance, Accessibility, Best Practices, and SEO.
- **Font Preloading**: Implemented critical font preloading for `Outfit` and `Inter Variable` to eliminate request chains and reduce LCP.
- **Responsive Images**: Optimized profile and hero images with multi-resolution scaling using Astro's `widths` and `sizes`.

### Changed

- **Accessibility Overhaul**:
  - Increased minimum font sizes to 12px (`text-xs`) across all navigational and metadata elements.
  - Hardened color contrast ratios to pass WCAG AAA (Zinc-900 for muted text).
  - Improved link descriptions for screen readers and SEO (e.g., "See all posts" instead of "See all").
- **Header Refinement**:
  - Redesigned header to gracefully handle long site titles without layout breakage.
  - Compacted navigation layout and gaps for better screen space efficiency.
  - Improved typography tracking for better legibility on high-resolution displays.

### Fixed

- **Open Graph (OG) Previews**: Fixed absolute URL generation for social sharing previews by correctly configuring the production domain.
- **Navigation Layout**: Resolved layout breakage on medium-sized screens (1024px) when using long site titles.

## [1.0.1] - 2026-01-31

### Security

- Fixed a security vulnerability in transitive dependency `lodash-es` by forcing version `4.17.23` via `pnpm.overrides`.

## [1.0.0] - 2026-01-31

### Changed

- **Astro 5 Content Layer**: Fully migrated to the new Content Layer API.
  - Linked posts and projects using `id` instead of `slug`.
  - Updated content rendering to use the new `render()` function from `astro:content`.
  - Corrected collection loader paths in `src/content/config.ts`.
- **Svelte 5 Reactivity**: Refactored components to use Svelte 5 runes (`$state`, `$props`, `$effect`).
  - Improved `SearchModal` focus logic and reactivity.
  - Simplified `Header` and `Search` component communication by removing redundant props.
- **Dependencies**: Upgraded core dependencies to latest versions:
  - `astro` to `^5.17.1`
  - `svelte` to `^5.49.1`
  - `svelte-check` to `^4.3.6`
  - `lefthook` to `^2.0.16`

### Fixed

- **Type Safety**: Resolved numerous TypeScript errors related to implicit `any` types in RSS and OG image generation.
- **Tooling**: Fixed `astro:loader` type resolution issues in `src/content/config.ts`.
- **Formatting**: Corrected style issues in `site/assets/site.webmanifest`.
- **Documentation**: Updated `README.md` with correct repository links.

### Added

- **Search Functionality**: Finalized the site-wide search indexing using Astro 5 Content Layer identifiers.
- **Pre-push Hooks**: Configured Lefthook to run linting and type-checking before every push.

---

[1.2.2]: https://github.com/alec-c4/spaceship/compare/v1.2.1...v1.2.2
[1.2.1]: https://github.com/alec-c4/spaceship/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/alec-c4/spaceship/compare/v1.1.3...v1.2.0
[1.1.0]: https://github.com/alec-c4/spaceship/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/alec-c4/spaceship/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/alec-c4/spaceship/releases/tag/v1.0.0
