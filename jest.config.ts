import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'js', 'json', 'jsx', 'tsx'],
    transformIgnorePatterns: [
        'node_modules/(?!variables/.*)'
    ],
    verbose: true,
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.svg$': '<rootDir>/svgTransform.cjs',
    },
    moduleDirectories: [
        'node_modules',
        'src',
    ],
};

export default config;
