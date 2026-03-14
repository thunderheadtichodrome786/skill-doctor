export const PERFECT_SCORE = 100;
export const SCORE_BAR_WIDTH_CHARS = 24;
export const SCORE_GOOD_THRESHOLD = 90;
export const SCORE_OK_THRESHOLD = 75;
export const SUMMARY_LABEL_WIDTH_CHARS = 10;
export const SECTION_RULE_MIN_WIDTH_CHARS = 24;
export const SECTION_RULE_OFFSET_CHARS = 10;
export const TABLE_SEPARATOR_EXTRA_CHARS = 18;

export const SUMMARY_BOX_HORIZONTAL_PADDING_CHARS = 2;
export const SUMMARY_BOX_OUTER_INDENT_CHARS = 1;

export const DEFAULT_IGNORED_DIRECTORIES = new Set([
  ".git",
  ".hg",
  ".next",
  ".turbo",
  ".yarn",
  "build",
  "coverage",
  "dist",
  "node_modules",
  "out",
  "tmp",
]);

export const ALLOWED_FRONTMATTER_KEYS = new Set([
  "name",
  "description",
  "compatibility",
  "allowed-tools",
  "license",
  "metadata",
]);

export const RESOURCE_DIRECTORY_NAMES = ["agents", "assets", "evals", "references", "scripts"];
