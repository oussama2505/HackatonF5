module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  testMatch: [
    '**/__tests__/**/*.spec.js',
    '**/__tests__/**/*.test.js',
    '**/tests/**/*.spec.js',
    '**/tests/**/*.test.js'
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Assuming '@' points to your 'src' directory
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '\\.pnp\\.[^\\/]+$',
    '\\.(css|less|scss|sass)$',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico|xml)$',
  ],
};
