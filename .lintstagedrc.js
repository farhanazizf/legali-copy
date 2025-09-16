module.exports = {
  "**/*.{js,jsx,ts,tsx}": [
    "biome check --write",
    () => "pnpm type-check",
    () => "pnpm build",
  ],
  "**/*.{json,md,css,scss,yaml,yml}": ["prettier --write"],
};
