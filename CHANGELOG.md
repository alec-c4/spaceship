# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

[1.1.0]: https://github.com/alec-c4/spaceship/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/alec-c4/spaceship/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/alec-c4/spaceship/releases/tag/v1.0.0
