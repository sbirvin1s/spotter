// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/.node_modules/",
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/styles(.*)$': '<rootDir>/styles/$1',
    '^@/components(.*)$': '<rootDir>/components/$1',
    '^@/contexts(.*)$': '<rootDir>/contexts/$1',
    '^@/controllers(.*)$': '<rootDir>/controllers/$1',
    '^@/firebase(.*)$': '<rootDir>/firebase/$1',
    '^@/pages(.*)$': '<rootDir>/src/pages/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)