module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.component.ts',
        'src/**/*.service.ts',
        'src/**/*.pipe.ts'
    ],
    coveragePathIgnorePatterns: [
        '.app.component.ts'
    ],
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/test/setup-jest.ts'],
    globals: {
        'ts-jest': {tsconfig: 'tsconfig.spec.json'}
    },
    modulePathIgnorePatterns: ['<rootDir>/dist/'],
    resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',
    transformIgnorePatterns: ['node_modules/(?!@angular)'],
    transform: {
        '^.+\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',
    }
};
