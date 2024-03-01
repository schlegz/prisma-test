const base = require('./jest.config.base');

module.exports = {
  ...base,
  roots: ['<rootDir>'],
  projects: ['<rootDir>/packages/database', '<rootDir>/packages/shared', '<rootDir>/apps/cp-queue'],
  maxWorkers: 1,
};
