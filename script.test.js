const assert = require('node:assert/strict');
const {
  AUTO_ADVANCE_DELAY_MS,
  TOTAL_QUESTIONS,
  chooseOption,
  createGameState,
  getFinalAssessment,
  getChallengeByRoll,
  recordRound,
  vibeChecks,
} = require('./script.js');

const firstChallenge = getChallengeByRoll(0);
assert.equal(firstChallenge.title, vibeChecks[0].title);
assert.equal(firstChallenge.options.length, 3);
assert.ok(firstChallenge.options.every((option) => option.path && option.outcome && option.metric));
assert.equal(vibeChecks.length, TOTAL_QUESTIONS);

const lastChallenge = getChallengeByRoll(0.999);
assert.equal(lastChallenge.title, vibeChecks[vibeChecks.length - 1].title);

const state = createGameState();
assert.deepEqual(state, { round: 0, score: 0, incidents: 0, usedChallengeIndexes: [] });

const chosen = chooseOption(firstChallenge, 1);
assert.equal(chosen.path, firstChallenge.options[1].path);

recordRound(state, { points: 2 });
recordRound(state, { points: -1 });

assert.deepEqual(state, { round: 2, score: 1, incidents: 1, usedChallengeIndexes: [] });
assert.ok(getFinalAssessment({ score: 8 }).includes('good vibe coder'));
assert.equal(AUTO_ADVANCE_DELAY_MS, 6500);
