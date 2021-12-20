module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  modulePathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/dist"],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            jsx: true,
          },
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
};
