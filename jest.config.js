/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/tests', '<rootDir>/src'],
    testMatch: ['**/?(*.)+(spec|test).+(ts|js)'],
    transform: {
        '^.+\\.(ts|js)$': 'ts-jest',
    },
    moduleFileExtensions: ['js', 'json', 'ts', 'd.ts'],
};
