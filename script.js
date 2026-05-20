const TOTAL_QUESTIONS = 10;
const AUTO_ADVANCE_DELAY_MS = 6500;

const vibeChecks = [
  {
    title: 'The One-Prompt SaaS Rewrite',
    brief: 'This is about to happen: a founder needs billing, auth, analytics, and "maybe multiplayer" before the investor update. Which path do you choose?',
    options: [
      {
        path: 'Ask the AI for "production-grade" and agree not to interrogate what that means.',
        outcome: 'You receive a pricing page with three login systems and a webhook named probablyImportant.',
        metric: 'Investor confidence: weirdly stable',
        recovery: 'Excellent vibe coder behavior: nod thoughtfully and say the platform is "emerging."',
        points: 1,
      },
      {
        path: 'Draw a diagram with enough boxes that everyone assumes architecture happened.',
        outcome: 'Nobody understands the diagram, which makes it feel enterprise.',
        metric: 'Whiteboard gravity: severe',
        recovery: 'Good vibe coders know when a rectangle deserves a name and when it deserves deletion.',
        points: 2,
      },
      {
        path: 'Explain that the framework is blocking your personal relationship with state.',
        outcome: 'The app remains unfinished, but the room now has a shared enemy.',
        metric: 'Accountability latency: 3 sprints',
        recovery: 'A true vibe coder blames tooling with enough specificity to sound employable.',
        points: -1,
      },
    ],
  },
  {
    title: 'The Cursor Tab Cathedral',
    brief: 'This is about to happen: your editor has 41 open files, two half-applied suggestions, and one README quietly judging everyone. Which path do you choose?',
    options: [
      {
        path: 'Accept every suggestion in sequence and trust the shape of the vibes.',
        outcome: 'The app now has momentum, imports, and a spiritual objection to loading.',
        metric: 'Tab pressure: atmospheric',
        recovery: 'Good vibe coders accept help from machines, then pretend they meant to review it.',
        points: 1,
      },
      {
        path: 'Rename everything until it sounds like a platform team was involved.',
        outcome: 'Product says it feels faster because the meeting ended.',
        metric: 'Semantic density: premium',
        recovery: 'Naming is hard. Naming everything the same is technically a strategy.',
        points: -1,
      },
      {
        path: 'Diagnose the bug as "context drift" and let the phrase do the work.',
        outcome: 'Nobody knows what that means, but it sounds expensive enough to pause the conversation.',
        metric: 'Plausibility: high',
        recovery: 'This is advanced vibe coding: a diagnosis that is both meaningless and difficult to disprove.',
        points: 2,
      },
    ],
  },
  {
    title: 'The Demo-Driven Incident',
    brief: 'This is about to happen: the customer demo starts in seven minutes, and the happy path works if nobody asks about permissions. Which path do you choose?',
    options: [
      {
        path: 'Steer the demo like a magician avoiding audience participation.',
        outcome: 'Nobody clicks the dangerous button. You call this product-market fit.',
        metric: 'Click avoidance: 94%',
        recovery: 'A good vibe coder knows the most stable feature is narrative control.',
        points: 2,
      },
      {
        path: 'Open with caveats until the room forgets what the product does.',
        outcome: 'The demo becomes academically defensible and emotionally unavailable.',
        metric: 'Trust: technically present',
        recovery: 'The vibe is responsible, but the room has spiritually left the call.',
        points: 0,
      },
      {
        path: 'Say the demo environment is stale and gesture vaguely at infrastructure.',
        outcome: 'The demo environment is your laptop, but nobody wants that conversation right now.',
        metric: 'Panic abstraction: clean',
        recovery: 'Classic move. Not noble, but extremely recognizable.',
        points: -1,
      },
    ],
  },
  {
    title: 'The Product Requirement Haiku',
    brief: 'This is about to happen: the ticket says "make onboarding feel premium" and includes no acceptance criteria, only urgency. Which path do you choose?',
    options: [
      {
        path: 'Add a progress bar, a confetti moment, and one lowercase phrase that sounds funded.',
        outcome: 'The flow feels more premium because there is now less white space where doubt used to live.',
        metric: 'Premium aura: plausible',
        recovery: 'Good vibe coders understand that "premium" is often just spacing with confidence.',
        points: 2,
      },
      {
        path: 'Schedule a naming alignment session and call it discovery.',
        outcome: 'The feature remains untouched but now has stakeholders.',
        metric: 'Meeting surface area: expanding',
        recovery: 'Sometimes the vibe is not coding. Sometimes the vibe is calendar damage.',
        points: -1,
      },
      {
        path: 'Claim the component library lacks a PremiumFeelingProvider.',
        outcome: 'Nobody can prove otherwise without reading Storybook, so the point stands.',
        metric: 'Roadmap camouflage: excellent',
        recovery: 'A sophisticated vibe coder can turn missing taste into missing infrastructure.',
        points: 1,
      },
    ],
  },
  {
    title: 'The AI Code Review Victory Lap',
    brief: 'This is about to happen: the assistant says "LGTM" on a diff containing a race condition and a function named doStuff2. Which path do you choose?',
    options: [
      {
        path: 'Merge it because the bot sounded confident and humans are tired.',
        outcome: 'Confidence has been successfully laundered into production.',
        metric: 'Certainty laundering: complete',
        recovery: 'Good vibe coders know confidence is transferable, even when correctness is not.',
        points: -1,
      },
      {
        path: 'Leave 14 comments about naming and miss the actual bug.',
        outcome: 'The review feels senior because it is specific, numerous, and mostly beside the point.',
        metric: 'Nit density: artisanal',
        recovery: 'This is smart funny because it hurts a little.',
        points: 1,
      },
      {
        path: 'Say CI should have caught it, then remember who wrote CI.',
        outcome: 'CI remains three shell scripts and hope in a trench coat.',
        metric: 'Pipeline dignity: compromised',
        recovery: 'A good vibe coder never asks "who wrote CI" while standing near a mirror.',
        points: 2,
      },
    ],
  },
  {
    title: 'The Slack Architecture Review',
    brief: 'This is about to happen: a major technical decision is happening in a thread that began with "quick q." Which path do you choose?',
    options: [
      {
        path: 'Approve the plan with a rocket emoji and plausible deniability.',
        outcome: 'Six people interpret the emoji as binding architecture.',
        metric: 'Governance maturity: decorative',
        recovery: 'A good vibe coder knows every emoji is a lightweight RFC if you squint.',
        points: 1,
      },
      {
        path: 'Create an ADR template so complete the original question expires.',
        outcome: 'The decision is now too boring to be dangerous.',
        metric: 'Decision freshness: archived',
        recovery: 'Sometimes the best architecture decision is making the decision too boring to survive.',
        points: 0,
      },
      {
        path: 'Move the conversation to another tool and call that progress.',
        outcome: 'Confusion has been relocated without being reduced.',
        metric: 'Tool switch velocity: sprintly',
        recovery: 'Elite vibe coder move: change the room and keep the fog.',
        points: 2,
      },
    ],
  },
  {
    title: 'The Standup Side Quest',
    brief: 'This is about to happen: standup begins, and your update is mostly vibes, tabs, and one branch you are emotionally avoiding. Which path do you choose?',
    options: [
      {
        path: 'Say "mostly plumbing" and hope nobody asks where the pipes go.',
        outcome: 'Everyone nods because plumbing sounds necessary and damp.',
        metric: 'Status opacity: useful',
        recovery: 'A good vibe coder understands that "plumbing" is a sprint-safe word.',
        points: 2,
      },
      {
        path: 'Share a screenful of logs and let density imply progress.',
        outcome: 'The team sees timestamps, warnings, and your cursor hovering over panic.',
        metric: 'Observable effort: high',
        recovery: 'Smart funny means knowing logs are just confetti for backend people.',
        points: 1,
      },
      {
        path: 'Declare yourself blocked by an acronym no one wants expanded.',
        outcome: 'The blocker survives because curiosity is low before coffee.',
        metric: 'Acronym shield: intact',
        recovery: 'Risky, but a classic move in the vibe coder oral tradition.',
        points: -1,
      },
    ],
  },
  {
    title: 'The Dashboard Request',
    brief: 'This is about to happen: leadership wants a dashboard by Friday that answers "how are we doing?" without defining "we" or "doing." Which path do you choose?',
    options: [
      {
        path: 'Add three charts and make the labels emotionally reassuring.',
        outcome: 'The dashboard says things are trending, which is what everyone came for.',
        metric: 'Executive readability: glossy',
        recovery: 'A good vibe coder knows the first job of a chart is to survive a meeting.',
        points: 2,
      },
      {
        path: 'Ask what decision the dashboard should support.',
        outcome: 'A silence opens in the room where requirements might have lived.',
        metric: 'Meeting honesty: uncomfortable',
        recovery: 'Technically correct, socially spicy.',
        points: 1,
      },
      {
        path: 'Use a metric already in the warehouse because it has a nice name.',
        outcome: 'Nobody knows what Activation Index means, but it went up and morale improves.',
        metric: 'Metric vibes: immaculate',
        recovery: 'Good vibe coders respect that naming is half of analytics.',
        points: 0,
      },
    ],
  },
  {
    title: 'The Hotfix Ritual',
    brief: 'This is about to happen: production is weird, nobody says broken, and the fix is one line if you ignore causality. Which path do you choose?',
    options: [
      {
        path: 'Patch the one line and write "follow-up cleanup" in the PR description.',
        outcome: 'The incident ends. The follow-up enters a peaceful, permanent sleep.',
        metric: 'Urgency conversion: complete',
        recovery: 'A good vibe coder knows every hotfix creates a tiny ghost in the backlog.',
        points: 1,
      },
      {
        path: 'Start a root-cause doc while the alert is still yelling.',
        outcome: 'The doc is beautiful. Production remains emotionally complicated.',
        metric: 'Documentation timing: bold',
        recovery: 'The vibe is principled, but the pager is not a literature circle.',
        points: -1,
      },
      {
        path: 'Post "mitigated" once the graph looks less rude.',
        outcome: 'Nobody knows what changed, but the line went down and language did the rest.',
        metric: 'Incident poetry: acceptable',
        recovery: 'Good vibe coders know mitigated is not fixed; it is fixed with a cardigan.',
        points: 2,
      },
    ],
  },
  {
    title: 'The Roadmap Tarot Reading',
    brief: 'This is about to happen: product asks whether the feature is "Q2 realistic" while engineering quietly checks what month it is. Which path do you choose?',
    options: [
      {
        path: 'Say "Q2-ish" with enough warmth to feel collaborative.',
        outcome: 'The roadmap gains a feature-shaped cloud and everyone agrees to revisit.',
        metric: 'Commitment softness: premium',
        recovery: 'A good vibe coder knows "-ish" is the seatbelt of planning.',
        points: 2,
      },
      {
        path: 'Break the work into phases until nobody remembers the original feature.',
        outcome: 'Phase one is a button. Phase two is the product.',
        metric: 'Scope nutrition: reduced',
        recovery: 'This is how grownups turn a moonshot into a settings toggle.',
        points: 1,
      },
      {
        path: 'Mention technical debt and watch the room become very still.',
        outcome: 'Everyone respects the phrase and immediately routes around it.',
        metric: 'Debt visibility: ceremonial',
        recovery: 'Good vibe coders know technical debt is real, but also bad at calendars.',
        points: 0,
      },
    ],
  },
];

function createGameState() {
  return {
    round: 0,
    score: 0,
    incidents: 0,
    usedChallengeIndexes: [],
  };
}

function getChallengeByRoll(roll = Math.random()) {
  const index = Math.min(Math.floor(roll * vibeChecks.length), vibeChecks.length - 1);
  return vibeChecks[index];
}

function getNextChallenge(state) {
  const index = state.usedChallengeIndexes.length % vibeChecks.length;
  state.usedChallengeIndexes.push(index);
  return vibeChecks[index];
}

function chooseOption(challenge, optionIndex) {
  return challenge.options[optionIndex];
}

function recordRound(state, choice) {
  state.round += 1;
  state.score += choice.points;

  if (choice.points < 0) {
    state.incidents += 1;
  }

  return state;
}

function getRank(state) {
  if (state.score >= 12) return 'Certified Good Vibe Coder';
  if (state.score >= 7) return 'Surprisingly Employable Vibe Coder';
  if (state.score >= 0) return 'Vibe Coder In Good Standing';
  return 'LinkedIn Thought Leader, Engineering Adjacent';
}

function getFinalAssessment(state) {
  if (state.score >= 12) {
    return 'You are a good vibe coder. Dangerous, charming, and somehow still invited to planning.';
  }
  if (state.score >= 7) {
    return 'You probably have what it takes to be a good vibe coder, which is mostly timing and plausible confidence.';
  }
  if (state.score >= 0) {
    return 'You survived the vibe coder gauntlet. The bar was strange, but you cleared enough of it.';
  }
  return 'You may not be a good vibe coder yet, but you have tremendous potential as a meeting subplot.';
}

function renderProgress(state, elements) {
  elements.round.textContent = `${state.round}/${TOTAL_QUESTIONS}`;
  elements.score.textContent = state.score;
  elements.incidents.textContent = state.incidents;
  elements.rank.textContent = getRank(state);
}

function renderScenario(challenge, state, elements) {
  elements.challengeTitle.textContent = challenge.title;
  elements.challengeBrief.textContent = challenge.brief;
  elements.result.innerHTML = `
    <p>Choose a path. History will pretend this was a process.</p>
    <span>Question ${state.round + 1} of ${TOTAL_QUESTIONS}</span>
  `;
  elements.recovery.textContent = 'Read the setup, pick a path, and find out if the vibe holds.';
  elements.nextBtn.disabled = false;
  elements.nextBtn.textContent = 'Skip Question';

  elements.choices.innerHTML = '';
  challenge.options.forEach((option, index) => {
    const button = elements.documentRef.createElement('button');
    button.className = 'choice-button';
    button.type = 'button';
    button.dataset.optionIndex = index;
    button.textContent = option.path;
    elements.choices.append(button);
  });
}

function renderOutcome(choice, state, elements) {
  elements.result.innerHTML = `
    <p>${choice.outcome}</p>
    <span>${choice.metric}</span>
  `;
  elements.recovery.textContent = choice.recovery;
  elements.nextBtn.disabled = false;
  elements.nextBtn.textContent = state.round >= TOTAL_QUESTIONS ? 'See Final Vibe' : 'Next Question';
  renderProgress(state, elements);

  elements.choices.querySelectorAll('button').forEach((button) => {
    button.disabled = true;
  });
}

function renderFinal(state, elements) {
  elements.challengeTitle.textContent = 'Final Vibe Check';
  elements.challengeBrief.textContent = `You answered ${TOTAL_QUESTIONS} questions. The committee, which is just this browser tab, has reached a decision.`;
  elements.choices.innerHTML = '';
  elements.result.innerHTML = `
    <p>${getFinalAssessment(state)}</p>
    <span>Final judgment: ${state.score} points, ${state.incidents} incidents</span>
  `;
  elements.recovery.textContent = 'Refreshingly, no certification body was harmed in the making of this result.';
  elements.nextBtn.disabled = false;
  elements.nextBtn.textContent = 'Play Again';
  renderProgress(state, elements);
}

function initGame(documentRef = document) {
  const elements = {
    documentRef,
    nextBtn: documentRef.getElementById('nextBtn'),
    choices: documentRef.getElementById('choices'),
    challengeTitle: documentRef.getElementById('challengeTitle'),
    challengeBrief: documentRef.getElementById('challengeBrief'),
    result: documentRef.getElementById('result'),
    recovery: documentRef.getElementById('recovery'),
    round: documentRef.getElementById('round'),
    score: documentRef.getElementById('score'),
    incidents: documentRef.getElementById('incidents'),
    rank: documentRef.getElementById('rank'),
  };

  let state = createGameState();
  let currentChallenge = null;
  let advanceTimer = null;
  let isFinal = false;

  const clearAdvanceTimer = () => {
    if (advanceTimer) {
      window.clearTimeout(advanceTimer);
      advanceTimer = null;
    }
  };

  const startRound = () => {
    clearAdvanceTimer();

    if (state.round >= TOTAL_QUESTIONS) {
      isFinal = true;
      renderFinal(state, elements);
      return;
    }

    isFinal = false;
    currentChallenge = getNextChallenge(state);
    renderScenario(currentChallenge, state, elements);
  };

  const restartGame = () => {
    clearAdvanceTimer();
    state = createGameState();
    currentChallenge = null;
    isFinal = false;
    renderProgress(state, elements);
    startRound();
  };

  elements.nextBtn.addEventListener('click', () => {
    if (isFinal) {
      restartGame();
      return;
    }

    startRound();
  });

  elements.choices.addEventListener('click', (event) => {
    const choiceButton = event.target.closest('.choice-button');
    if (!choiceButton || !currentChallenge || choiceButton.disabled) return;

    const choice = chooseOption(currentChallenge, Number(choiceButton.dataset.optionIndex));
    recordRound(state, choice);
    renderOutcome(choice, state, elements);
    advanceTimer = window.setTimeout(startRound, AUTO_ADVANCE_DELAY_MS);
  });

  renderProgress(state, elements);
  startRound();
}

if (typeof document !== 'undefined') {
  initGame(document);
}

if (typeof module !== 'undefined') {
  module.exports = {
    AUTO_ADVANCE_DELAY_MS,
    TOTAL_QUESTIONS,
    chooseOption,
    createGameState,
    getChallengeByRoll,
    getFinalAssessment,
    getRank,
    recordRound,
    vibeChecks,
  };
}
