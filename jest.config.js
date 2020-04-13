require('./env.js');

module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // setupFiles: ['<rootDir>/src/__tests__/setup-tests.tsx'],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup-tests.tsx'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  testRegex: '/__tests__/.*\\.(test|spec)\\.tsx?$',
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  testPathIgnorePatterns: [
    /** Dist  */
    '<rootDir>/.next/',
    '<rootDir>/out/',
    /** External Services */
    '<rootDir>/.gitlab/',
    '<rootDir>/.now/',
    '<rootDir>/logo/',
    /** Deps */
    '<rootDir>/node_modules/',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/.gitlab/',
    '<rootDir>/node_modules/',
    '<rootDir>/out/',
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
    './src/components/': {
      branches: 40,
      statements: 40,
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|svg|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/mocks.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/mocks.js',
  },
  globals: {
    env: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_DATABASE_URL: process.env.FIREBASE_DATABASE_URL,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID:
        process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    },
  },
};
