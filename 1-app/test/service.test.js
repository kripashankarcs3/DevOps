const test = require('node:test');
const assert = require('node:assert/strict');
const { buildGreeting } = require('../index');

test('buildGreeting includes the service name', () => {
  assert.equal(buildGreeting('release-train-app'), 'Hello from release-train-app');
});
