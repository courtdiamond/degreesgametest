// ============================================================
// DEGREE — A daily connection puzzle game
// ============================================================

// ===== PASSWORD GATE =====
// Change this password to whatever you want to share with friends
const ACCESS_PASSWORD = 'degree2026';

(function initGate() {
  const gate = document.getElementById('password-gate');
  const app = document.getElementById('app');
  const input = document.getElementById('gate-input');
  const btn = document.getElementById('gate-btn');
  const error = document.getElementById('gate-error');

  // Check if already authenticated this session
  if (sessionStorage.getItem('degree-authed') === 'true') {
    gate.classList.add('hidden');
    app.classList.remove('hidden');
    return;
  }

  function tryPassword() {
    if (input.value.trim().toLowerCase() === ACCESS_PASSWORD.toLowerCase()) {
      sessionStorage.setItem('degree-authed', 'true');
      gate.classList.add('hidden');
      app.classList.remove('hidden');
    } else {
      error.textContent = 'Wrong password — try again';
      input.value = '';
      input.focus();
    }
  }

  btn.addEventListener('click', tryPassword);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') tryPassword();
    error.textContent = '';
  });

  input.focus();
})();

// ===== PUZZLE DATA =====
const PUZZLES = [
  {
    id: 1,
    start: "Leonardo DiCaprio",
    end: "Elmo",
    steps: [
      {
        correct: { name: "Kate Winslet", connection: "Co-starred in Titanic (1997)" },
        decoys: [
          { name: "Brad Pitt", connection: "Co-starred in Once Upon a Time in Hollywood" },
          { name: "Tom Hanks", connection: "Co-starred in Catch Me If You Can" },
          { name: "Margot Robbie", connection: "Co-starred in Wolf of Wall Street" }
        ]
      },
      {
        correct: { name: "Hugh Jackman", connection: "Co-starred in Movie 43 (2013)" },
        decoys: [
          { name: "Jim Carrey", connection: "Co-starred in Eternal Sunshine" },
          { name: "Jude Law", connection: "Co-starred in The Holiday" },
          { name: "Ralph Fiennes", connection: "Co-starred in The Reader" }
        ]
      },
      {
        correct: { name: "Elmo", connection: "Jackman appeared on Sesame Street" },
        decoys: [
          { name: "Big Bird", connection: "Both performed on Broadway" },
          { name: "Cookie Monster", connection: "Both love a good snack" },
          { name: "Oscar the Grouch", connection: "Both live in New York" }
        ]
      }
    ]
  },
  {
    id: 2,
    start: "Beyoncé",
    end: "William Shakespeare",
    steps: [
      {
        correct: { name: "Jay-Z", connection: "Married since 2008" },
        decoys: [
          { name: "Drake", connection: "Collaborated on music together" },
          { name: "Kanye West", connection: "Former label partners" },
          { name: "Pharrell Williams", connection: "Produced several of her hits" }
        ]
      },
      {
        correct: { name: "Baz Luhrmann", connection: "Jay-Z produced music for The Great Gatsby (2013)" },
        decoys: [
          { name: "Martin Scorsese", connection: "Directed Jay-Z's concert film" },
          { name: "Spike Lee", connection: "Frequent collaborator from Brooklyn" },
          { name: "Tyler Perry", connection: "Fellow entertainment mogul" }
        ]
      },
      {
        correct: { name: "William Shakespeare", connection: "Luhrmann directed Romeo + Juliet (1996)" },
        decoys: [
          { name: "Charles Dickens", connection: "Luhrmann considered adapting Great Expectations" },
          { name: "Jane Austen", connection: "Another classic author adapted to film" },
          { name: "Oscar Wilde", connection: "Known for dramatic flair like Luhrmann" }
        ]
      }
    ]
  },
  {
    id: 3,
    start: "Dwayne Johnson",
    end: "Anna Wintour",
    steps: [
      {
        correct: { name: "Emily Blunt", connection: "Co-starred in Jungle Cruise (2021)" },
        decoys: [
          { name: "Kevin Hart", connection: "Frequent comedy co-star" },
          { name: "Zac Efron", connection: "Co-starred in Baywatch" },
          { name: "Jason Statham", connection: "Co-starred in Hobbs & Shaw" }
        ]
      },
      {
        correct: { name: "Meryl Streep", connection: "Co-starred in The Devil Wears Prada (2006)" },
        decoys: [
          { name: "Amy Adams", connection: "Co-starred in Into the Woods" },
          { name: "John Krasinski", connection: "Married to Blunt in real life" },
          { name: "Cillian Murphy", connection: "Co-starred in A Quiet Place Part II" }
        ]
      },
      {
        correct: { name: "Anna Wintour", connection: "The Devil Wears Prada was inspired by her life" },
        decoys: [
          { name: "Coco Chanel", connection: "Another legendary fashion icon" },
          { name: "Donatella Versace", connection: "Streep wore Versace to events" },
          { name: "Vera Wang", connection: "Designed gowns for Hollywood stars" }
        ]
      }
    ]
  },
  {
    id: 4,
    start: "Snoop Dogg",
    end: "Queen Elizabeth II",
    steps: [
      {
        correct: { name: "Martha Stewart", connection: "Best friends & co-hosted Martha & Snoop's Potluck Dinner Party" },
        decoys: [
          { name: "Dr. Dre", connection: "Longtime collaborator since the '90s" },
          { name: "Pharrell Williams", connection: "Collaborated on Drop It Like It's Hot" },
          { name: "Wiz Khalifa", connection: "Fellow West Coast rapper" }
        ]
      },
      {
        correct: { name: "Justin Bieber", connection: "Martha Stewart famously roasted Bieber on Comedy Central" },
        decoys: [
          { name: "Ryan Reynolds", connection: "Guest on her cooking show" },
          { name: "David Beckham", connection: "Both lifestyle brand moguls" },
          { name: "Gordon Ramsay", connection: "Fellow TV cooking personality" }
        ]
      },
      {
        correct: { name: "Queen Elizabeth II", connection: "Bieber performed at the Queen's Diamond Jubilee Concert (2012)" },
        decoys: [
          { name: "Princess Diana", connection: "Beloved British royal icon" },
          { name: "Kate Middleton", connection: "Attended Bieber's concert" },
          { name: "Prince Philip", connection: "Patron of many charities" }
        ]
      }
    ]
  },
  {
    id: 5,
    start: "Taylor Swift",
    end: "The White House",
    steps: [
      {
        correct: { name: "Travis Kelce", connection: "In a relationship since 2023" },
        decoys: [
          { name: "Ed Sheeran", connection: "Frequent musical collaborator" },
          { name: "Joe Alwyn", connection: "Dated for six years" },
          { name: "Harry Styles", connection: "Briefly dated in 2012" }
        ]
      },
      {
        correct: { name: "Patrick Mahomes", connection: "Teammate on the Kansas City Chiefs" },
        decoys: [
          { name: "Tom Brady", connection: "Fellow NFL superstar quarterback" },
          { name: "Aaron Rodgers", connection: "Another NFL quarterback" },
          { name: "Lamar Jackson", connection: "NFL MVP quarterback" }
        ]
      },
      {
        correct: { name: "The White House", connection: "Mahomes visited after winning the Super Bowl" },
        decoys: [
          { name: "The Pentagon", connection: "Another famous D.C. landmark" },
          { name: "Hollywood", connection: "Where celebrities gather" },
          { name: "Times Square", connection: "Iconic American location" }
        ]
      }
    ]
  },
  {
    id: 6,
    start: "Adele",
    end: "James Bond",
    steps: [
      {
        correct: { name: "Daniel Craig", connection: "Adele sang 'Skyfall' — the theme for his Bond film" },
        decoys: [
          { name: "Sam Smith", connection: "Also sang a Bond theme (Spectre)" },
          { name: "Billie Eilish", connection: "Sang the theme for No Time to Die" },
          { name: "Paul McCartney", connection: "Sang Live and Let Die decades earlier" }
        ]
      },
      {
        correct: { name: "Judi Dench", connection: "Played M alongside Craig in Skyfall" },
        decoys: [
          { name: "Rami Malek", connection: "Played the villain in No Time to Die" },
          { name: "Javier Bardem", connection: "Played the villain in Skyfall" },
          { name: "Ben Whishaw", connection: "Played Q in recent Bond films" }
        ]
      },
      {
        correct: { name: "James Bond", connection: "Dench played M — Bond's boss — in 7 Bond films" },
        decoys: [
          { name: "Jason Bourne", connection: "Another famous spy character" },
          { name: "Ethan Hunt", connection: "Tom Cruise's spy character" },
          { name: "Indiana Jones", connection: "Another iconic adventure hero" }
        ]
      }
    ]
  },
  {
    id: 7,
    start: "Oprah Winfrey",
    end: "NASA",
    steps: [
      {
        correct: { name: "Barack Obama", connection: "Oprah's endorsement helped his 2008 campaign" },
        decoys: [
          { name: "Ellen DeGeneres", connection: "Fellow daytime TV icon" },
          { name: "Dr. Phil", connection: "Got his start on Oprah's show" },
          { name: "Gayle King", connection: "Oprah's best friend" }
        ]
      },
      {
        correct: { name: "John Glenn", connection: "Obama awarded Glenn the Presidential Medal of Freedom" },
        decoys: [
          { name: "Neil Armstrong", connection: "First person on the Moon" },
          { name: "Buzz Aldrin", connection: "Walked on the Moon with Armstrong" },
          { name: "Sally Ride", connection: "First American woman in space" }
        ]
      },
      {
        correct: { name: "NASA", connection: "Glenn was a NASA astronaut — first American to orbit Earth" },
        decoys: [
          { name: "SpaceX", connection: "Modern space exploration company" },
          { name: "The Air Force", connection: "Glenn served as a pilot" },
          { name: "MIT", connection: "Trained many astronauts" }
        ]
      }
    ]
  }
];

// ===== CONSTANTS =====
const MAX_MISSES = 4;
const EPOCH = new Date('2026-03-19T00:00:00'); // launch date

// ===== STATE =====
let state = {
  puzzleIndex: 0,
  currentStep: 0,
  misses: 0,
  guesses: [],       // array of arrays — per step, list of guesses (true/false)
  completed: false,
  won: false
};

// ===== HELPERS =====
function getTodayString() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

function getDaysSinceEpoch() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = today - EPOCH;
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function getTodaysPuzzleIndex() {
  const days = getDaysSinceEpoch();
  return ((days % PUZZLES.length) + PUZZLES.length) % PUZZLES.length;
}

function getTodaysPuzzle() {
  return PUZZLES[getTodaysPuzzleIndex()];
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Seeded shuffle so daily options order is consistent for everyone
function seededShuffle(arr, seed) {
  const a = [...arr];
  let s = seed;
  function next() {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  }
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ===== LOCAL STORAGE =====
function loadGameState() {
  try {
    const saved = localStorage.getItem('degree-state');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.date === getTodayString()) {
        return parsed;
      }
    }
  } catch (e) { /* ignore */ }
  return null;
}

function saveGameState() {
  const data = {
    date: getTodayString(),
    puzzleIndex: state.puzzleIndex,
    currentStep: state.currentStep,
    misses: state.misses,
    guesses: state.guesses,
    completed: state.completed,
    won: state.won
  };
  localStorage.setItem('degree-state', JSON.stringify(data));
}

function loadStats() {
  try {
    const saved = localStorage.getItem('degree-stats');
    if (saved) return JSON.parse(saved);
  } catch (e) { /* ignore */ }
  return { played: 0, won: 0, streak: 0, maxStreak: 0 };
}

function saveStats(stats) {
  localStorage.setItem('degree-stats', JSON.stringify(stats));
}

// ===== DOM REFS =====
const $startName = document.getElementById('start-name');
const $endName = document.getElementById('end-name');
const $chainContainer = document.getElementById('chain-container');
const $missesDots = document.getElementById('misses-dots');
const $puzzleNumber = document.getElementById('puzzle-number');
const $puzzleDate = document.getElementById('puzzle-date');
const $gameOver = document.getElementById('game-over');
const $gameOverTitle = document.getElementById('game-over-title');
const $gameOverSubtitle = document.getElementById('game-over-subtitle');
const $sharePreview = document.getElementById('share-preview');
const $shareBtn = document.getElementById('share-btn');
const $helpOverlay = document.getElementById('help-overlay');
const $statsOverlay = document.getElementById('stats-overlay');

// ===== RENDER =====
function renderHeader() {
  const puzzle = getTodaysPuzzle();
  $puzzleNumber.textContent = `#${getDaysSinceEpoch() + 1}`;
  $puzzleDate.textContent = formatDate(new Date());
}

function renderEndpoints() {
  const puzzle = getTodaysPuzzle();
  $startName.textContent = puzzle.start;
  $endName.textContent = puzzle.end;
}

function renderMisses() {
  $missesDots.innerHTML = '';
  for (let i = 0; i < MAX_MISSES; i++) {
    const dot = document.createElement('div');
    dot.className = 'miss-dot' + (i < state.misses ? ' used' : '');
    $missesDots.appendChild(dot);
  }
}

function renderChain() {
  $chainContainer.innerHTML = '';
  const puzzle = getTodaysPuzzle();

  // Render completed steps
  for (let i = 0; i < state.currentStep; i++) {
    const step = puzzle.steps[i];
    const stepEl = document.createElement('div');
    stepEl.className = 'chain-step';

    const connector = document.createElement('div');
    connector.className = 'chain-connector active';

    const node = document.createElement('div');
    node.className = 'completed-node';
    node.innerHTML = `
      <span class="node-name">${step.correct.name}</span>
      <span class="node-connection">${step.correct.connection}</span>
    `;

    stepEl.appendChild(connector);
    stepEl.appendChild(node);
    $chainContainer.appendChild(stepEl);
  }

  // Render current step options (or remaining revealed steps if game over)
  if (state.completed && !state.won) {
    // Reveal remaining steps
    for (let i = state.currentStep; i < puzzle.steps.length; i++) {
      const step = puzzle.steps[i];
      const stepEl = document.createElement('div');
      stepEl.className = 'chain-step';

      const connector = document.createElement('div');
      connector.className = 'chain-connector';

      const node = document.createElement('div');
      node.className = 'completed-node revealed';
      node.innerHTML = `
        <span class="node-name">${step.correct.name}</span>
        <span class="node-connection">${step.correct.connection}</span>
      `;

      stepEl.appendChild(connector);
      stepEl.appendChild(node);
      $chainContainer.appendChild(stepEl);
    }
  } else if (!state.completed && state.currentStep < puzzle.steps.length) {
    renderOptions();
  }

  // Final connector to end node
  if (state.currentStep > 0 || state.completed) {
    const finalConnector = document.createElement('div');
    finalConnector.className = 'chain-connector' + (state.won ? ' active' : '');
    // Only add if last step is complete
    if (state.completed || state.currentStep === puzzle.steps.length) {
      // Don't need extra connector — end node is already there
    }
  }
}

function renderOptions() {
  const puzzle = getTodaysPuzzle();
  const step = puzzle.steps[state.currentStep];

  const area = document.createElement('div');
  area.className = 'options-area';

  const connector = document.createElement('div');
  connector.className = 'chain-connector';
  area.appendChild(connector);

  const grid = document.createElement('div');
  grid.className = 'options-grid';

  // Combine correct + decoys and shuffle with seed
  const allOptions = [
    { ...step.correct, isCorrect: true },
    ...step.decoys.map(d => ({ ...d, isCorrect: false }))
  ];

  const seed = getDaysSinceEpoch() * 100 + state.currentStep * 10 + puzzle.id;
  const shuffled = seededShuffle(allOptions, seed);

  // Track which options were already guessed wrong
  const stepGuesses = state.guesses[state.currentStep] || [];

  shuffled.forEach((option, idx) => {
    const card = document.createElement('div');
    card.className = 'option-card';
    card.innerHTML = `
      <span class="option-name">${option.name}</span>
      <span class="option-hint">${option.connection}</span>
    `;

    // Check if this option was already guessed wrong
    const wasGuessedWrong = stepGuesses.some(g => !g.correct && g.name === option.name);

    if (wasGuessedWrong) {
      card.classList.add('wrong');
    } else {
      card.addEventListener('click', () => handleGuess(option, card));
    }

    grid.appendChild(card);
  });

  area.appendChild(grid);
  $chainContainer.appendChild(area);
}

function handleGuess(option, cardEl) {
  if (state.completed) return;

  // Initialize guesses for this step
  if (!state.guesses[state.currentStep]) {
    state.guesses[state.currentStep] = [];
  }

  if (option.isCorrect) {
    state.guesses[state.currentStep].push({ name: option.name, correct: true });
    state.currentStep++;

    const puzzle = getTodaysPuzzle();
    if (state.currentStep >= puzzle.steps.length) {
      state.completed = true;
      state.won = true;
      onGameEnd();
    }

    saveGameState();
    renderChain();
    renderMisses();
  } else {
    // Wrong guess
    state.guesses[state.currentStep].push({ name: option.name, correct: false });
    state.misses++;

    cardEl.classList.add('wrong');
    cardEl.style.pointerEvents = 'none';

    renderMisses();
    saveGameState();

    if (state.misses >= MAX_MISSES) {
      state.completed = true;
      state.won = false;
      saveGameState();
      // Short delay so the player sees the last wrong answer
      setTimeout(() => {
        onGameEnd();
        renderChain();
      }, 600);
    }
  }
}

function onGameEnd() {
  // Update stats
  const stats = loadStats();
  stats.played++;
  if (state.won) {
    stats.won++;
    stats.streak++;
    if (stats.streak > stats.maxStreak) stats.maxStreak = stats.streak;
  } else {
    stats.streak = 0;
  }
  saveStats(stats);
  saveGameState();

  // Show game over overlay after a beat
  setTimeout(() => showGameOver(), state.won ? 500 : 300);
}

function buildShareText() {
  const puzzle = getTodaysPuzzle();
  const puzzleNum = getDaysSinceEpoch() + 1;
  const totalSteps = puzzle.steps.length;

  let lines = [`Degree #${puzzleNum} 🔗`];
  lines.push(`${puzzle.start} → ${puzzle.end}`);
  lines.push('');

  // Build emoji grid: each step on its own line
  for (let i = 0; i < totalSteps; i++) {
    const stepGuesses = state.guesses[i] || [];
    let row = '';
    for (const g of stepGuesses) {
      row += g.correct ? '🟩' : '🟥';
    }
    if (!state.won && i >= state.currentStep) {
      row = '⬛'; // didn't reach this step
    }
    lines.push(row);
  }

  lines.push('');
  if (state.won) {
    lines.push(`${state.misses === 0 ? 'Perfect! ✨' : `${state.misses}/${MAX_MISSES} misses`}`);
  } else {
    lines.push('❌ Better luck tomorrow!');
  }

  return lines.join('\n');
}

function showGameOver() {
  if (state.won) {
    $gameOverTitle.textContent = state.misses === 0 ? '✨ Perfect!' : '🎉 Connected!';
    $gameOverSubtitle.textContent = state.misses === 0
      ? 'Flawless chain — no misses!'
      : `You found the chain with ${state.misses} miss${state.misses === 1 ? '' : 'es'}`;
  } else {
    $gameOverTitle.textContent = '😔 So Close';
    $gameOverSubtitle.textContent = 'The chain has been revealed above';
  }

  $sharePreview.textContent = buildShareText();
  $gameOver.classList.remove('hidden');
}

function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

// ===== STATS =====
function renderStats() {
  const stats = loadStats();
  document.getElementById('stat-played').textContent = stats.played;
  document.getElementById('stat-win-pct').textContent = stats.played > 0
    ? Math.round((stats.won / stats.played) * 100)
    : 0;
  document.getElementById('stat-streak').textContent = stats.streak;
  document.getElementById('stat-max-streak').textContent = stats.maxStreak;
}

// ===== EVENT LISTENERS =====
document.getElementById('help-btn').addEventListener('click', () => {
  $helpOverlay.classList.remove('hidden');
});

document.getElementById('close-help-btn').addEventListener('click', () => {
  $helpOverlay.classList.add('hidden');
});

document.getElementById('stats-btn').addEventListener('click', () => {
  renderStats();
  $statsOverlay.classList.remove('hidden');
});

document.getElementById('close-stats-btn').addEventListener('click', () => {
  $statsOverlay.classList.add('hidden');
});

document.getElementById('close-overlay-btn').addEventListener('click', () => {
  $gameOver.classList.add('hidden');
});

$shareBtn.addEventListener('click', () => {
  const text = buildShareText();
  navigator.clipboard.writeText(text).then(() => {
    showToast('Copied to clipboard!');
  }).catch(() => {
    showToast('Could not copy — try manually');
  });
});

// Close overlays on backdrop click
[$gameOver, $helpOverlay, $statsOverlay].forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.add('hidden');
  });
});

// ===== INIT =====
function init() {
  const savedState = loadGameState();
  const puzzleIndex = getTodaysPuzzleIndex();

  if (savedState && savedState.puzzleIndex === puzzleIndex) {
    Object.assign(state, savedState);
  } else {
    state = {
      puzzleIndex,
      currentStep: 0,
      misses: 0,
      guesses: [],
      completed: false,
      won: false
    };
    saveGameState();
  }

  renderHeader();
  renderEndpoints();
  renderMisses();
  renderChain();

  // Show game over if already completed today
  if (state.completed) {
    setTimeout(() => showGameOver(), 400);
  }

  // Show help on first ever visit
  if (!localStorage.getItem('degree-seen-help')) {
    $helpOverlay.classList.remove('hidden');
    localStorage.setItem('degree-seen-help', 'true');
  }
}

init();
