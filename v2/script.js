// ============================================================
// DEGREE v2 — Six Degrees of Separation puzzle game
// Retro Neon Edition
// ============================================================

// ===== PASSWORD GATE =====
const ACCESS_PASSWORD = 'degree2026';

(function initGate() {
  const gate = document.getElementById('password-gate');
  const input = document.getElementById('gate-input');
  const btn = document.getElementById('gate-btn');
  const error = document.getElementById('gate-error');

  if (sessionStorage.getItem('degree-authed') === 'true') {
    gate.classList.add('hidden');
    showScreen('mode-select');
    return;
  }

  function tryPassword() {
    if (input.value.trim().toLowerCase() === ACCESS_PASSWORD.toLowerCase()) {
      sessionStorage.setItem('degree-authed', 'true');
      gate.classList.add('hidden');
      showScreen('mode-select');
    } else {
      error.textContent = '> ACCESS DENIED — try again';
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

const TUTORIAL_PUZZLE = {
  id: 'tutorial',
  start: "The Lion King",
  end: "London",
  steps: [
    {
      correct: { name: "Elton John", connection: "Wrote 'Circle of Life' and 'Can You Feel the Love Tonight'" },
      decoys: [
        { name: "Hans Zimmer", connection: "Composed the orchestral score" },
        { name: "James Earl Jones", connection: "Voiced Mufasa" },
        { name: "Matthew Broderick", connection: "Voiced adult Simba" }
      ]
    },
    {
      correct: { name: "London", connection: "Elton John was born and raised in London, England" },
      decoys: [
        { name: "Las Vegas", connection: "Elton has a famous residency there" },
        { name: "New York", connection: "Elton performed at Madison Square Garden" },
        { name: "Los Angeles", connection: "Home of Hollywood" }
      ]
    }
  ]
};

const PRACTICE_PUZZLES = [
  {
    id: 'p1',
    start: "Tom Hanks",
    end: "Kevin Bacon",
    difficulty: "medium",
    steps: [
      {
        correct: { name: "Robin Wright", connection: "Co-starred in Forrest Gump (1994)" },
        decoys: [
          { name: "Sally Field", connection: "Played his mom in Forrest Gump" },
          { name: "Gary Sinise", connection: "Played Lieutenant Dan in Forrest Gump" },
          { name: "Meg Ryan", connection: "Co-starred in Sleepless in Seattle" }
        ]
      },
      {
        correct: { name: "Sean Penn", connection: "Penn was married to Wright (1996–2010)" },
        decoys: [
          { name: "Ben Affleck", connection: "Fellow A-list leading man" },
          { name: "Johnny Depp", connection: "Fellow '90s heartthrob actor" },
          { name: "Russell Crowe", connection: "Fellow Oscar-winning actor" }
        ]
      },
      {
        correct: { name: "Tim Robbins", connection: "Penn starred in Dead Man Walking, directed by Robbins" },
        decoys: [
          { name: "Clint Eastwood", connection: "Directed Penn in Mystic River" },
          { name: "Gus Van Sant", connection: "Directed Penn in Milk" },
          { name: "Woody Harrelson", connection: "Co-starred in various dramas" }
        ]
      },
      {
        correct: { name: "Morgan Freeman", connection: "Co-starred in The Shawshank Redemption (1994)" },
        decoys: [
          { name: "Denzel Washington", connection: "Fellow acclaimed dramatic actor" },
          { name: "Samuel L. Jackson", connection: "Fellow iconic screen presence" },
          { name: "Clint Eastwood", connection: "Directed Freeman in Unforgiven" }
        ]
      },
      {
        correct: { name: "Jack Nicholson", connection: "Co-starred in The Bucket List (2007)" },
        decoys: [
          { name: "Robert De Niro", connection: "Fellow Hollywood legend" },
          { name: "Al Pacino", connection: "Fellow acting icon" },
          { name: "Dustin Hoffman", connection: "Fellow Oscar-winning legend" }
        ]
      },
      {
        correct: { name: "Kevin Bacon", connection: "Co-starred in A Few Good Men (1992)" },
        decoys: [
          { name: "Tom Cruise", connection: "Starred in A Few Good Men" },
          { name: "Demi Moore", connection: "Co-starred in A Few Good Men" },
          { name: "Kiefer Sutherland", connection: "Co-starred in A Few Good Men" }
        ]
      }
    ]
  },
  {
    id: 'p2',
    start: "Pikachu",
    end: "The White House",
    difficulty: "medium",
    steps: [
      {
        correct: { name: "Ryan Reynolds", connection: "Voiced Detective Pikachu in the 2019 film" },
        decoys: [
          { name: "Danny DeVito", connection: "Fans petitioned for him to voice Pikachu" },
          { name: "Chris Pratt", connection: "Hollywood's go-to voice actor" },
          { name: "Ash Ketchum", connection: "Pikachu's trainer in the anime" }
        ]
      },
      {
        correct: { name: "Hugh Jackman", connection: "Best friends with Reynolds — legendary prank war" },
        decoys: [
          { name: "Jake Gyllenhaal", connection: "Part of Reynolds' friend trio" },
          { name: "Will Ferrell", connection: "Co-starred in Spirited" },
          { name: "Mark Ruffalo", connection: "Fellow Marvel actor" }
        ]
      },
      {
        correct: { name: "Anne Hathaway", connection: "Co-starred in Les Misérables (2012)" },
        decoys: [
          { name: "Russell Crowe", connection: "Also in Les Misérables" },
          { name: "Nicole Kidman", connection: "Co-starred in Australia" },
          { name: "Halle Berry", connection: "Fellow X-Men co-star" }
        ]
      },
      {
        correct: { name: "Meryl Streep", connection: "Co-starred in The Devil Wears Prada (2006)" },
        decoys: [
          { name: "Emily Blunt", connection: "Also in The Devil Wears Prada" },
          { name: "Amy Adams", connection: "Fellow award-winning actress" },
          { name: "Cate Blanchett", connection: "Fellow multiple Oscar nominee" }
        ]
      },
      {
        correct: { name: "Barack Obama", connection: "Obama awarded Streep the Presidential Medal of Freedom" },
        decoys: [
          { name: "Joe Biden", connection: "Current U.S. President" },
          { name: "George W. Bush", connection: "Former U.S. President" },
          { name: "Bill Clinton", connection: "Former U.S. President" }
        ]
      },
      {
        correct: { name: "The White House", connection: "Obama served as President at The White House (2009–2017)" },
        decoys: [
          { name: "Capitol Hill", connection: "Seat of Congress in D.C." },
          { name: "Camp David", connection: "Presidential retreat" },
          { name: "The Pentagon", connection: "Department of Defense HQ" }
        ]
      }
    ]
  },
  {
    id: 'p3',
    start: "Gordon Ramsay",
    end: "Mount Everest",
    difficulty: "medium",
    steps: [
      {
        correct: { name: "David Beckham", connection: "Close friends — Beckham appears on Ramsay's shows" },
        decoys: [
          { name: "Jamie Oliver", connection: "Rival British celebrity chef" },
          { name: "Guy Fieri", connection: "Fellow TV food personality" },
          { name: "Anthony Bourdain", connection: "Legendary chef and traveler" }
        ]
      },
      {
        correct: { name: "Ryan Reynolds", connection: "Beckham and Reynolds co-own Wrexham AFC" },
        decoys: [
          { name: "Tom Cruise", connection: "Both attend high-profile events" },
          { name: "Cristiano Ronaldo", connection: "Fellow global sports icon" },
          { name: "LeBron James", connection: "Fellow athlete-entrepreneur" }
        ]
      },
      {
        correct: { name: "Hugh Jackman", connection: "Best friends with Reynolds — famous ongoing prank war" },
        decoys: [
          { name: "Will Ferrell", connection: "Co-starred with Reynolds in Spirited" },
          { name: "Chris Hemsworth", connection: "Fellow Australian actor" },
          { name: "Chris Evans", connection: "Fellow action movie star" }
        ]
      },
      {
        correct: { name: "Jake Gyllenhaal", connection: "Co-starred in Prisoners (2013)" },
        decoys: [
          { name: "Christian Bale", connection: "Fellow intense method actor" },
          { name: "Robert Pattinson", connection: "Fellow dramatic leading man" },
          { name: "Tom Hardy", connection: "Fellow acclaimed actor" }
        ]
      },
      {
        correct: { name: "Josh Brolin", connection: "Co-starred in Everest (2015)" },
        decoys: [
          { name: "Jason Clarke", connection: "Also in Everest" },
          { name: "Benicio Del Toro", connection: "Co-starred in Sicario" },
          { name: "Jeff Bridges", connection: "Both Western film actors" }
        ]
      },
      {
        correct: { name: "Mount Everest", connection: "Brolin starred in Everest — about the deadly 1996 expedition" },
        decoys: [
          { name: "K2", connection: "World's second-highest peak" },
          { name: "Kilimanjaro", connection: "Africa's tallest mountain" },
          { name: "The Alps", connection: "Famous European mountain range" }
        ]
      }
    ]
  }
];

const DAILY_PUZZLES = [
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
        correct: { name: "Jude Law", connection: "Co-starred in The Holiday (2006)" },
        decoys: [
          { name: "Jim Carrey", connection: "Co-starred in Eternal Sunshine" },
          { name: "Ralph Fiennes", connection: "Co-starred in The Reader" },
          { name: "Cate Blanchett", connection: "Fellow British acting royalty" }
        ]
      },
      {
        correct: { name: "Robert Downey Jr.", connection: "Co-starred in Sherlock Holmes (2009)" },
        decoys: [
          { name: "Nicole Kidman", connection: "Fellow award-winning star" },
          { name: "Matt Damon", connection: "Fellow A-list leading man" },
          { name: "Hugh Grant", connection: "Fellow British romantic lead" }
        ]
      },
      {
        correct: { name: "Jon Favreau", connection: "Directed Downey in Iron Man (2008)" },
        decoys: [
          { name: "Chris Evans", connection: "Fellow Marvel Avenger" },
          { name: "Scarlett Johansson", connection: "Fellow Marvel star" },
          { name: "Gwyneth Paltrow", connection: "Played Pepper Potts in Iron Man" }
        ]
      },
      {
        correct: { name: "Will Ferrell", connection: "Favreau directed Ferrell in Elf (2003)" },
        decoys: [
          { name: "Vince Vaughn", connection: "Favreau's real-life best friend" },
          { name: "Adam Sandler", connection: "Fellow comedy legend" },
          { name: "Ben Stiller", connection: "Fellow comedy A-lister" }
        ]
      },
      {
        correct: { name: "Elmo", connection: "Ferrell appeared on Sesame Street with Elmo" },
        decoys: [
          { name: "Big Bird", connection: "Another Sesame Street icon" },
          { name: "Cookie Monster", connection: "Another beloved Muppet" },
          { name: "Oscar the Grouch", connection: "Lives on Sesame Street too" }
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
        correct: { name: "Leonardo DiCaprio", connection: "Luhrmann directed him in Romeo + Juliet (1996)" },
        decoys: [
          { name: "Nicole Kidman", connection: "Luhrmann directed Moulin Rouge!" },
          { name: "Ewan McGregor", connection: "Starred in Moulin Rouge!" },
          { name: "Claire Danes", connection: "Co-starred in Romeo + Juliet" }
        ]
      },
      {
        correct: { name: "Kate Winslet", connection: "Co-starred in Titanic (1997)" },
        decoys: [
          { name: "Cate Blanchett", connection: "Fellow acclaimed actress" },
          { name: "Marion Cotillard", connection: "Co-starred in Inception" },
          { name: "Margot Robbie", connection: "Co-starred in Wolf of Wall Street" }
        ]
      },
      {
        correct: { name: "Judi Dench", connection: "Co-starred in Iris (2001)" },
        decoys: [
          { name: "Emma Thompson", connection: "Fellow British acting legend" },
          { name: "Helena Bonham Carter", connection: "Fellow British star" },
          { name: "Maggie Smith", connection: "Fellow Dame of British cinema" }
        ]
      },
      {
        correct: { name: "William Shakespeare", connection: "Dench won an Oscar for Shakespeare in Love (1998)" },
        decoys: [
          { name: "Charles Dickens", connection: "Classic British author" },
          { name: "Jane Austen", connection: "Classic English novelist" },
          { name: "Oscar Wilde", connection: "Legendary Irish playwright" }
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
        correct: { name: "Matt Damon", connection: "Co-starred in The Adjustment Bureau (2011)" },
        decoys: [
          { name: "Ryan Gosling", connection: "Fellow Hollywood heartthrob" },
          { name: "Chris Hemsworth", connection: "Fellow action star" },
          { name: "Bradley Cooper", connection: "Fellow leading man" }
        ]
      },
      {
        correct: { name: "Ben Affleck", connection: "Best friends since childhood — wrote Good Will Hunting" },
        decoys: [
          { name: "George Clooney", connection: "Fellow Batman actor" },
          { name: "Mark Wahlberg", connection: "Fellow Boston-area star" },
          { name: "Brad Pitt", connection: "Co-starred in Ocean's Thirteen" }
        ]
      },
      {
        correct: { name: "Jennifer Lopez", connection: "Married to Affleck (the famous 'Bennifer')" },
        decoys: [
          { name: "Shakira", connection: "Fellow global pop superstar" },
          { name: "Madonna", connection: "Fellow pop culture icon" },
          { name: "Rihanna", connection: "Fellow music mogul" }
        ]
      },
      {
        correct: { name: "Donatella Versace", connection: "Lopez wore the iconic Versace jungle dress at the 2000 Grammys" },
        decoys: [
          { name: "Giorgio Armani", connection: "Another legendary Italian designer" },
          { name: "Tom Ford", connection: "Famous fashion designer" },
          { name: "Marc Jacobs", connection: "Acclaimed American designer" }
        ]
      },
      {
        correct: { name: "Anna Wintour", connection: "Wintour and Versace are longtime collaborators at the Met Gala" },
        decoys: [
          { name: "Victoria Beckham", connection: "Fashion designer and icon" },
          { name: "Coco Chanel", connection: "Legendary fashion pioneer" },
          { name: "Vera Wang", connection: "Iconic gown designer" }
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
        correct: { name: "Martha Stewart", connection: "Best friends — co-hosted Martha & Snoop's Potluck Dinner Party" },
        decoys: [
          { name: "Dr. Dre", connection: "Longtime collaborator since the '90s" },
          { name: "Pharrell Williams", connection: "Collaborated on Drop It Like It's Hot" },
          { name: "Wiz Khalifa", connection: "Fellow West Coast rapper" }
        ]
      },
      {
        correct: { name: "Justin Bieber", connection: "Martha famously roasted Bieber on Comedy Central" },
        decoys: [
          { name: "Ryan Reynolds", connection: "Guest on her cooking show" },
          { name: "David Beckham", connection: "Both lifestyle brand moguls" },
          { name: "Gordon Ramsay", connection: "Fellow TV cooking personality" }
        ]
      },
      {
        correct: { name: "Ed Sheeran", connection: "Bieber and Sheeran collaborated on 'I Don't Care' (2019)" },
        decoys: [
          { name: "Drake", connection: "Fellow pop music superstar" },
          { name: "Shawn Mendes", connection: "Fellow young pop artist" },
          { name: "The Weeknd", connection: "Fellow chart-topping artist" }
        ]
      },
      {
        correct: { name: "Elton John", connection: "Sheeran performed duets with Elton — Elton is his mentor" },
        decoys: [
          { name: "Paul McCartney", connection: "Fellow British music legend" },
          { name: "Mick Jagger", connection: "Fellow iconic British rocker" },
          { name: "Rod Stewart", connection: "Fellow British pop star" }
        ]
      },
      {
        correct: { name: "Princess Diana", connection: "Elton performed 'Candle in the Wind' at her funeral (1997)" },
        decoys: [
          { name: "Prince Charles", connection: "Met Elton at many royal events" },
          { name: "Prince William", connection: "Elton performed at his wedding" },
          { name: "Camilla Parker Bowles", connection: "Attended Elton's events" }
        ]
      },
      {
        correct: { name: "Queen Elizabeth II", connection: "Diana's mother-in-law — the Queen" },
        decoys: [
          { name: "Kate Middleton", connection: "Married into the royal family" },
          { name: "Prince Philip", connection: "Diana's father-in-law" },
          { name: "Margaret Thatcher", connection: "Prime Minister during Diana's era" }
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
        correct: { name: "Jason Kelce", connection: "Travis's brother — fellow NFL legend" },
        decoys: [
          { name: "Patrick Mahomes", connection: "Teammate on the Kansas City Chiefs" },
          { name: "Tom Brady", connection: "Fellow NFL superstar" },
          { name: "Aaron Rodgers", connection: "Another NFL quarterback" }
        ]
      },
      {
        correct: { name: "Bradley Cooper", connection: "Both huge Philadelphia Eagles fans — celebrated together at games" },
        decoys: [
          { name: "Mark Wahlberg", connection: "Famous sports fan" },
          { name: "Ryan Reynolds", connection: "Football team co-owner" },
          { name: "Chris Pratt", connection: "Football enthusiast" }
        ]
      },
      {
        correct: { name: "Lady Gaga", connection: "Co-starred in A Star Is Born (2018)" },
        decoys: [
          { name: "Jennifer Lawrence", connection: "Fellow Oscar-winning actress" },
          { name: "Scarlett Johansson", connection: "Fellow A-list star" },
          { name: "Margot Robbie", connection: "Fellow leading actress" }
        ]
      },
      {
        correct: { name: "Tony Bennett", connection: "Recorded two duet albums with Gaga — lifelong collaborators" },
        decoys: [
          { name: "Frank Sinatra", connection: "Fellow legendary crooner" },
          { name: "Andrea Bocelli", connection: "Famous duet partner" },
          { name: "Michael Bublé", connection: "Fellow classic-style singer" }
        ]
      },
      {
        correct: { name: "The White House", connection: "Bennett performed at The White House for multiple presidents" },
        decoys: [
          { name: "The Pentagon", connection: "Famous D.C. building" },
          { name: "Times Square", connection: "Iconic NYC landmark" },
          { name: "Hollywood", connection: "Entertainment capital" }
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
          { name: "Paul McCartney", connection: "Sang Live and Let Die" }
        ]
      },
      {
        correct: { name: "Rachel Weisz", connection: "Married to Craig since 2011" },
        decoys: [
          { name: "Sienna Miller", connection: "Fellow British actress" },
          { name: "Kate Winslet", connection: "Fellow British star" },
          { name: "Emma Watson", connection: "Fellow British talent" }
        ]
      },
      {
        correct: { name: "Ralph Fiennes", connection: "Co-starred in The Constant Gardener (2005)" },
        decoys: [
          { name: "Liam Neeson", connection: "Fellow dramatic actor" },
          { name: "Bill Nighy", connection: "Fellow British actor" },
          { name: "Colin Firth", connection: "Fellow Oscar-winning Brit" }
        ]
      },
      {
        correct: { name: "Judi Dench", connection: "Both played M in the Bond franchise" },
        decoys: [
          { name: "Helen Mirren", connection: "Fellow Dame of British cinema" },
          { name: "Maggie Smith", connection: "Fellow legendary British actress" },
          { name: "Emma Thompson", connection: "Fellow acclaimed British actress" }
        ]
      },
      {
        correct: { name: "Pierce Brosnan", connection: "Dench played M in all four of Brosnan's Bond films" },
        decoys: [
          { name: "Sean Connery", connection: "The original Bond" },
          { name: "Roger Moore", connection: "Played Bond in seven films" },
          { name: "Timothy Dalton", connection: "Played Bond in the late '80s" }
        ]
      },
      {
        correct: { name: "James Bond", connection: "Brosnan played Agent 007 in four films (1995–2002)" },
        decoys: [
          { name: "Jason Bourne", connection: "Another famous spy" },
          { name: "Ethan Hunt", connection: "Tom Cruise's spy character" },
          { name: "Indiana Jones", connection: "Iconic adventure hero" }
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
        correct: { name: "Whoopi Goldberg", connection: "Both starred in The Color Purple (1985)" },
        decoys: [
          { name: "Ellen DeGeneres", connection: "Fellow daytime TV icon" },
          { name: "Dr. Phil", connection: "Got his start on Oprah's show" },
          { name: "Gayle King", connection: "Oprah's best friend" }
        ]
      },
      {
        correct: { name: "Patrick Stewart", connection: "Goldberg played Guinan on Star Trek: TNG" },
        decoys: [
          { name: "Robin Williams", connection: "Close friend and comedy partner" },
          { name: "Billy Crystal", connection: "Co-hosted the Oscars" },
          { name: "Ted Danson", connection: "Close friend and co-star" }
        ]
      },
      {
        correct: { name: "William Shatner", connection: "Both played legendary Star Trek captains" },
        decoys: [
          { name: "Ian McKellen", connection: "Co-starred in X-Men" },
          { name: "Hugh Jackman", connection: "Fellow X-Men franchise star" },
          { name: "James McAvoy", connection: "Played young Professor X" }
        ]
      },
      {
        correct: { name: "Jeff Bezos", connection: "Shatner flew to space on Bezos's Blue Origin rocket (2021)" },
        decoys: [
          { name: "Richard Branson", connection: "Also flew to space in 2021" },
          { name: "Mark Cuban", connection: "Fellow billionaire entrepreneur" },
          { name: "Larry Page", connection: "Google co-founder" }
        ]
      },
      {
        correct: { name: "Elon Musk", connection: "Bezos and Musk run rival space companies (Blue Origin vs SpaceX)" },
        decoys: [
          { name: "Bill Gates", connection: "Fellow tech billionaire" },
          { name: "Mark Zuckerberg", connection: "Fellow tech mogul" },
          { name: "Tim Cook", connection: "Apple CEO" }
        ]
      },
      {
        correct: { name: "NASA", connection: "SpaceX launches astronauts to the ISS under contract with NASA" },
        decoys: [
          { name: "SpaceX", connection: "Musk's own space company" },
          { name: "The Pentagon", connection: "Government defense HQ" },
          { name: "MIT", connection: "Trained many engineers and astronauts" }
        ]
      }
    ]
  }
];

// ===== CONSTANTS =====
const MAX_MISSES = 4;
const MAX_UNDOS = 2;
const MAX_HINTS = 1;
const EPOCH = new Date('2026-03-19T00:00:00');

// ===== STATE =====
let currentMode = null;
let activePuzzle = null;
let state = {
  currentStep: 0,
  misses: 0,
  guesses: [],
  undosLeft: MAX_UNDOS,
  hintsLeft: MAX_HINTS,
  hinted: [],
  completed: false,
  won: false
};

// ===== HELPERS =====
function getTodayString() {
  const n = new Date();
  return `${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,'0')}-${String(n.getDate()).padStart(2,'0')}`;
}

function getDaysSinceEpoch() {
  const n = new Date(), t = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  return Math.floor((t - EPOCH) / 864e5);
}

function getTodaysPuzzleIndex() {
  const d = getDaysSinceEpoch();
  return ((d % DAILY_PUZZLES.length) + DAILY_PUZZLES.length) % DAILY_PUZZLES.length;
}

function formatDate(d) {
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function seededShuffle(arr, seed) {
  const a = [...arr]; let s = seed;
  const next = () => { s = (s*16807)%2147483647; return (s-1)/2147483646; };
  for (let i = a.length-1; i > 0; i--) { const j = Math.floor(next()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}

// ===== SCREENS =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

// ===== LOCAL STORAGE =====
function loadDailyState() {
  try {
    const s = localStorage.getItem('degree-daily-v2');
    if (s) { const p = JSON.parse(s); if (p.date === getTodayString()) return p; }
  } catch(e) {}
  return null;
}

function saveDailyState() {
  if (currentMode !== 'daily') return;
  localStorage.setItem('degree-daily-v2', JSON.stringify({
    date: getTodayString(),
    puzzleIndex: getTodaysPuzzleIndex(),
    ...state
  }));
}

function loadStats() {
  try { const s = localStorage.getItem('degree-stats-v2'); if (s) return JSON.parse(s); } catch(e) {}
  return { played: 0, won: 0, streak: 0, maxStreak: 0 };
}

function saveStats(s) { localStorage.setItem('degree-stats-v2', JSON.stringify(s)); }

function loadPracticeCompleted() {
  try { const s = localStorage.getItem('degree-practice-v2'); if (s) return JSON.parse(s); } catch(e) {}
  return [];
}

function savePracticeCompleted(id) {
  const done = loadPracticeCompleted();
  if (!done.includes(id)) { done.push(id); localStorage.setItem('degree-practice-v2', JSON.stringify(done)); }
}

// ===== DOM REFS =====
const $ = (sel) => document.querySelector(sel);
const $startName = $('#start-name'), $endName = $('#end-name');
const $chainContainer = $('#chain-container'), $missesDots = $('#misses-dots');
const $puzzleNumber = $('#puzzle-number'), $puzzleDate = $('#puzzle-date');
const $gameOver = $('#game-over'), $gameOverTitle = $('#game-over-title');
const $gameOverSubtitle = $('#game-over-subtitle'), $sharePreview = $('#share-preview');
const $shareBtn = $('#share-btn'), $helpOverlay = $('#help-overlay');
const $statsOverlay = $('#stats-overlay');
const $undoBtn = $('#undo-btn'), $hintBtn = $('#hint-btn');
const $undoCount = $('#undo-count'), $hintCount = $('#hint-count');
const $tutorialTip = $('#tutorial-tip'), $tutorialTipText = $('#tutorial-tip-text');

// ===== MODE SELECTION =====
$('#mode-tutorial').addEventListener('click', () => startGame('tutorial', TUTORIAL_PUZZLE));
$('#mode-practice').addEventListener('click', showPracticeSelect);
$('#mode-daily').addEventListener('click', () => startGame('daily', DAILY_PUZZLES[getTodaysPuzzleIndex()]));

function showPracticeSelect() {
  const list = $('#practice-list'), done = loadPracticeCompleted();
  list.innerHTML = '';
  PRACTICE_PUZZLES.forEach(p => {
    const card = document.createElement('button');
    card.className = 'practice-card';
    card.innerHTML = `
      <div class="practice-card-left">
        <span class="practice-chain">${p.start} → ${p.end}</span>
        <div class="practice-meta">
          <span class="difficulty-badge ${p.difficulty}">${p.difficulty}</span>
          <span class="practice-steps">${p.steps.length} degrees</span>
        </div>
      </div>
      ${done.includes(p.id) ? '<span class="practice-done">✓</span>' : ''}
    `;
    card.addEventListener('click', () => startGame('practice', p));
    list.appendChild(card);
  });
  showScreen('practice-select');
}

$('#practice-back').addEventListener('click', () => showScreen('mode-select'));

// ===== START GAME =====
function startGame(mode, puzzle) {
  currentMode = mode;
  activePuzzle = puzzle;

  if (mode === 'daily') {
    const saved = loadDailyState();
    if (saved && saved.puzzleIndex === getTodaysPuzzleIndex()) {
      state = { currentStep: saved.currentStep, misses: saved.misses, guesses: saved.guesses,
        undosLeft: saved.undosLeft ?? MAX_UNDOS, hintsLeft: saved.hintsLeft ?? MAX_HINTS,
        hinted: saved.hinted ?? [], completed: saved.completed, won: saved.won };
    } else { resetState(); }
  } else { resetState(); }

  renderGame();
  showScreen('app');

  if (mode === 'tutorial') showTutorialTip('welcome');
  else $tutorialTip.classList.add('hidden');

  if (mode === 'daily' && state.completed) setTimeout(() => showGameOver(), 400);
}

function resetState() {
  state = { currentStep: 0, misses: 0, guesses: [], undosLeft: MAX_UNDOS,
    hintsLeft: MAX_HINTS, hinted: [], completed: false, won: false };
}

// ===== RENDER =====
function renderGame() {
  renderHeader(); renderEndpoints(); renderMisses(); renderChain(); renderActionBar();
}

function renderHeader() {
  if (currentMode === 'daily') {
    $puzzleNumber.textContent = `#${getDaysSinceEpoch()+1}`;
    $puzzleDate.textContent = formatDate(new Date());
  } else if (currentMode === 'tutorial') {
    $puzzleNumber.textContent = '🎓 TUTORIAL';
    $puzzleDate.textContent = '';
  } else {
    $puzzleNumber.textContent = '🏋️ PRACTICE';
    $puzzleDate.textContent = '';
  }
  $('#stats-btn').style.display = currentMode === 'daily' ? '' : 'none';
}

function renderEndpoints() {
  $startName.textContent = activePuzzle.start;
  $endName.textContent = activePuzzle.end;
}

function renderMisses() {
  $missesDots.innerHTML = '';
  for (let i = 0; i < MAX_MISSES; i++) {
    const d = document.createElement('div');
    d.className = 'miss-dot' + (i < state.misses ? ' used' : '');
    $missesDots.appendChild(d);
  }
}

function renderActionBar() {
  $undoCount.textContent = `(${state.undosLeft})`;
  $hintCount.textContent = `(${state.hintsLeft})`;
  $undoBtn.disabled = state.undosLeft <= 0 || state.misses <= 0 || state.completed;
  $hintBtn.disabled = state.hintsLeft <= 0 || state.completed || state.currentStep >= activePuzzle.steps.length;
}

function renderChain() {
  $chainContainer.innerHTML = '';

  for (let i = 0; i < state.currentStep; i++) {
    const step = activePuzzle.steps[i];
    const el = document.createElement('div'); el.className = 'chain-step';
    const conn = document.createElement('div'); conn.className = 'chain-connector active';
    const node = document.createElement('div'); node.className = 'completed-node';
    node.innerHTML = `<span class="node-name">${step.correct.name}</span><span class="node-connection">${step.correct.connection}</span>`;
    el.appendChild(conn); el.appendChild(node); $chainContainer.appendChild(el);
  }

  if (state.completed && !state.won) {
    for (let i = state.currentStep; i < activePuzzle.steps.length; i++) {
      const step = activePuzzle.steps[i];
      const el = document.createElement('div'); el.className = 'chain-step';
      const conn = document.createElement('div'); conn.className = 'chain-connector';
      const node = document.createElement('div'); node.className = 'completed-node revealed';
      node.innerHTML = `<span class="node-name">${step.correct.name}</span><span class="node-connection">${step.correct.connection}</span>`;
      el.appendChild(conn); el.appendChild(node); $chainContainer.appendChild(el);
    }
  } else if (!state.completed && state.currentStep < activePuzzle.steps.length) {
    renderOptions();
  }
}

function renderOptions() {
  const step = activePuzzle.steps[state.currentStep];
  const area = document.createElement('div'); area.className = 'options-area';
  const conn = document.createElement('div'); conn.className = 'chain-connector';
  area.appendChild(conn);
  const grid = document.createElement('div'); grid.className = 'options-grid';

  const all = [{ ...step.correct, isCorrect: true }, ...step.decoys.map(d => ({ ...d, isCorrect: false }))];
  const seed = (activePuzzle.id === 'tutorial' ? 999 : typeof activePuzzle.id === 'string' ? 888 + PRACTICE_PUZZLES.indexOf(activePuzzle) : getDaysSinceEpoch() * 100) + state.currentStep * 10;
  const shuffled = seededShuffle(all, seed);

  const sg = state.guesses[state.currentStep] || [];
  const sh = state.hinted[state.currentStep] || [];

  shuffled.forEach(opt => {
    const card = document.createElement('div'); card.className = 'option-card';
    card.innerHTML = `<span class="option-name">${opt.name}</span><span class="option-hint">${opt.connection}</span>`;
    if (sg.some(g => !g.correct && g.name === opt.name)) card.classList.add('dead-end');
    else if (sh.includes(opt.name)) card.classList.add('hinted');
    else card.addEventListener('click', () => handleGuess(opt, card));
    grid.appendChild(card);
  });

  area.appendChild(grid); $chainContainer.appendChild(area);
}

// ===== GAME LOGIC =====
function handleGuess(opt, cardEl) {
  if (state.completed) return;
  if (!state.guesses[state.currentStep]) state.guesses[state.currentStep] = [];

  if (opt.isCorrect) {
    state.guesses[state.currentStep].push({ name: opt.name, correct: true });
    state.currentStep++;
    if (state.currentStep >= activePuzzle.steps.length) { state.completed = true; state.won = true; onGameEnd(); }
    saveDailyState(); renderChain(); renderMisses(); renderActionBar();
    if (currentMode === 'tutorial') showTutorialTip(state.completed ? 'complete' : 'correct');
  } else {
    state.guesses[state.currentStep].push({ name: opt.name, correct: false, undone: false });
    state.misses++;
    cardEl.classList.add('dead-end'); cardEl.style.pointerEvents = 'none';
    renderMisses(); renderActionBar(); saveDailyState();
    showToast(`Dead end! Doesn't lead to ${activePuzzle.end}`);
    if (currentMode === 'tutorial') showTutorialTip('dead-end');
    if (state.misses >= MAX_MISSES) {
      state.completed = true; state.won = false; saveDailyState();
      setTimeout(() => { onGameEnd(); renderChain(); renderActionBar(); }, 600);
    }
  }
}

// ===== UNDO =====
$undoBtn.addEventListener('click', () => {
  if (state.undosLeft <= 0 || state.misses <= 0 || state.completed) return;
  state.misses--; state.undosLeft--;
  outer: for (let i = state.guesses.length-1; i >= 0; i--) {
    if (!state.guesses[i]) continue;
    for (let j = state.guesses[i].length-1; j >= 0; j--) {
      if (!state.guesses[i][j].correct && !state.guesses[i][j].undone) {
        state.guesses[i][j].undone = true; break outer;
      }
    }
  }
  renderMisses(); renderActionBar(); saveDailyState();
  showToast('Dead end forgiven! ↩');
  if (currentMode === 'tutorial') showTutorialTip('undo-used');
});

// ===== HINT =====
$hintBtn.addEventListener('click', () => {
  if (state.hintsLeft <= 0 || state.completed || state.currentStep >= activePuzzle.steps.length) return;
  const step = activePuzzle.steps[state.currentStep];
  const sg = state.guesses[state.currentStep] || [];
  if (!state.hinted[state.currentStep]) state.hinted[state.currentStep] = [];
  const sh = state.hinted[state.currentStep];
  const avail = step.decoys.filter(d => !sg.some(g => g.name === d.name) && !sh.includes(d.name));
  if (!avail.length) return;
  sh.push(avail[Math.floor(Math.random() * avail.length)].name);
  state.hintsLeft--;
  renderChain(); renderActionBar(); saveDailyState();
  showToast('Hint — one option eliminated! 💡');
  if (currentMode === 'tutorial') showTutorialTip('hint-used');
});

// ===== GAME END =====
function onGameEnd() {
  if (currentMode === 'daily') {
    const s = loadStats(); s.played++;
    if (state.won) { s.won++; s.streak++; if (s.streak > s.maxStreak) s.maxStreak = s.streak; }
    else s.streak = 0;
    saveStats(s);
  }
  if (currentMode === 'practice' && state.won) savePracticeCompleted(activePuzzle.id);
  saveDailyState();
  setTimeout(() => showGameOver(), state.won ? 500 : 300);
}

function buildShareText() {
  const n = activePuzzle.steps.length;
  let title = currentMode === 'daily' ? `Degree #${getDaysSinceEpoch()+1} 🔗` : currentMode === 'practice' ? 'Degree Practice 🔗' : 'Degree Tutorial 🔗';
  let lines = [title, `${activePuzzle.start} → ${activePuzzle.end}`, ''];
  for (let i = 0; i < n; i++) {
    const sg = state.guesses[i] || [];
    if (!state.won && i >= state.currentStep) { lines.push('⬛'); continue; }
    let row = '';
    for (const g of sg) row += g.correct ? '🟩' : (g.undone ? '🟧' : '🟥');
    lines.push(row);
  }
  lines.push('');
  if (state.won) {
    let msg = state.misses === 0 ? 'Perfect! ✨' : `${state.misses}/${MAX_MISSES} dead ends`;
    if (state.undosLeft < MAX_UNDOS) msg += ` · ${MAX_UNDOS-state.undosLeft} undo used`;
    lines.push(msg);
  } else lines.push('❌ Better luck tomorrow!');
  return lines.join('\n');
}

function showGameOver() {
  $gameOverTitle.textContent = state.won ? (state.misses === 0 ? '✨ PERFECT' : '🎉 CONNECTED') : '💀 GAME OVER';
  $gameOverSubtitle.textContent = state.won
    ? (state.misses === 0 ? 'Flawless — zero dead ends!' : `Chain complete — ${state.misses} dead end${state.misses>1?'s':''}`)
    : 'The chain has been revealed';
  $shareBtn.style.display = currentMode === 'daily' ? '' : 'none';
  $sharePreview.textContent = buildShareText();
  $gameOver.classList.remove('hidden');
}

// ===== TUTORIAL TIPS =====
const TIPS = {
  welcome: "👋 Welcome! Connect <strong>The Lion King</strong> to <strong>London</strong>. All 4 options are real connections — but only one is on the right path. Choose wisely!",
  correct: "✅ Nice! You found a link. Keep building the chain!",
  'dead-end': "🚧 Dead end! That was real, but not on the path. Try <strong>Undo</strong> to forgive it, or <strong>Hint</strong> to eliminate a wrong option!",
  'undo-used': "↩️ Forgiven! The dead end stays visible (helpful info!) but doesn't count against you.",
  'hint-used': "💡 One wrong option eliminated! Fewer choices, better odds.",
  complete: "🎉 You connected them! Head back to the menu and try the <strong>Daily Degree</strong>!"
};

function showTutorialTip(evt) {
  if (currentMode !== 'tutorial') { $tutorialTip.classList.add('hidden'); return; }
  if (TIPS[evt]) { $tutorialTipText.innerHTML = TIPS[evt]; $tutorialTip.classList.remove('hidden'); }
}

// ===== STATS =====
function renderStats() {
  const s = loadStats();
  $('#stat-played').textContent = s.played;
  $('#stat-win-pct').textContent = s.played > 0 ? Math.round((s.won/s.played)*100) : 0;
  $('#stat-streak').textContent = s.streak;
  $('#stat-max-streak').textContent = s.maxStreak;
}

// ===== TOAST =====
function showToast(msg) {
  const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg;
  document.body.appendChild(t); setTimeout(() => t.remove(), 2500);
}

// ===== EVENT LISTENERS =====
$('#back-to-menu').addEventListener('click', () => { $tutorialTip.classList.add('hidden'); showScreen('mode-select'); });
$('#back-menu-btn').addEventListener('click', () => { $gameOver.classList.add('hidden'); $tutorialTip.classList.add('hidden'); showScreen('mode-select'); });
$('#close-overlay-btn').addEventListener('click', () => $gameOver.classList.add('hidden'));
$shareBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(buildShareText())
    .then(() => showToast('Copied to clipboard!'))
    .catch(() => showToast('Could not copy'));
});
$('#stats-btn').addEventListener('click', () => { renderStats(); $statsOverlay.classList.remove('hidden'); });
$('#close-stats-btn').addEventListener('click', () => $statsOverlay.classList.add('hidden'));
$('#close-help-btn').addEventListener('click', () => $helpOverlay.classList.add('hidden'));
[$gameOver, $helpOverlay, $statsOverlay].forEach(o => o.addEventListener('click', e => { if (e.target === o) o.classList.add('hidden'); }));
