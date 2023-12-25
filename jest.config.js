module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['./specs'],
  transform: { '^.+\\.(ts|tsx)?$': 'ts-jest' },
  moduleDirectories: ['node_modules', 'src'],
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      tsconfig: {
        // allow js in typescript
        allowJs: true
      }
    }
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  // for Cucumber
  testMatch: ['**/*.steps.tsx']
};
