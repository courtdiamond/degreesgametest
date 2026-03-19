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
          { name: "Brad Pitt", connection: "Co-starred in Once Upon a Time in Hollywood (2019)" },
          { name: "Tom Hanks", connection: "Co-starred in Catch Me If You Can (2002)" },
          { name: "Margot Robbie", connection: "Co-starred in The Wolf of Wall Street (2013)" }
        ]
      },
      {
        correct: { name: "Jude Law", connection: "Co-starred in The Holiday (2006)" },
        decoys: [
          { name: "Jim Carrey", connection: "Co-starred in Eternal Sunshine of the Spotless Mind (2004)" },
          { name: "Ralph Fiennes", connection: "Co-starred in The Reader (2008)" },
          { name: "Michael Fassbender", connection: "Co-starred in Steve Jobs (2015)" }
        ]
      },
      {
        correct: { name: "Robert Downey Jr.", connection: "Co-starred in Sherlock Holmes (2009)" },
        decoys: [
          { name: "Matt Damon", connection: "Co-starred in The Talented Mr. Ripley (1999)" },
          { name: "Nicole Kidman", connection: "Co-starred in Cold Mountain (2003)" },
          { name: "Natalie Portman", connection: "Co-starred in Closer (2004)" }
        ]
      },
      {
        correct: { name: "Jon Favreau", connection: "Directed Iron Man (2008), also played Happy Hogan" },
        decoys: [
          { name: "Chris Evans", connection: "Co-starred in The Avengers (2012)" },
          { name: "Gwyneth Paltrow", connection: "Played Pepper Potts in Iron Man (2008)" },
          { name: "Scarlett Johansson", connection: "Co-starred in Iron Man 2 (2010)" }
        ]
      },
      {
        correct: { name: "Will Ferrell", connection: "Directed Ferrell in Elf (2003)" },
        decoys: [
          { name: "Vince Vaughn", connection: "Co-wrote and co-starred in Swingers (1996)" },
          { name: "Donald Glover", connection: "Directed Glover as Simba in The Lion King (2019)" },
          { name: "Seth Rogen", connection: "Directed Rogen as Pumbaa in The Lion King (2019)" }
        ]
      },
      {
        correct: { name: "Elmo", connection: "Appeared alongside Elmo on Sesame Street" },
        decoys: [
          { name: "John C. Reilly", connection: "Co-starred in Step Brothers (2008)" },
          { name: "Mark Wahlberg", connection: "Co-starred in The Other Guys (2010)" },
          { name: "Zooey Deschanel", connection: "Co-starred in Elf (2003)" }
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
          { name: "Kendrick Lamar", connection: "Collaborated on 'Freedom' from Lemonade (2016)" },
          { name: "Ed Sheeran", connection: "Collaborated on 'Perfect Duet' (2017)" },
          { name: "Donald Glover", connection: "Co-starred in The Lion King (2019)" }
        ]
      },
      {
        correct: { name: "Baz Luhrmann", connection: "Jay-Z executive-produced the soundtrack for The Great Gatsby (2013)" },
        decoys: [
          { name: "Kanye West", connection: "Collaborated on Watch the Throne album (2011)" },
          { name: "Rihanna", connection: "Jay-Z signed Rihanna to Def Jam Records in 2005" },
          { name: "Alicia Keys", connection: "Collaborated on 'Empire State of Mind' (2009)" }
        ]
      },
      {
        correct: { name: "Leonardo DiCaprio", connection: "Luhrmann directed Romeo + Juliet (1996) and The Great Gatsby (2013)" },
        decoys: [
          { name: "Nicole Kidman", connection: "Luhrmann directed Moulin Rouge! (2001)" },
          { name: "Hugh Jackman", connection: "Luhrmann directed Australia (2008)" },
          { name: "Ewan McGregor", connection: "Starred in Moulin Rouge! (2001)" }
        ]
      },
      {
        correct: { name: "Kate Winslet", connection: "Co-starred in Titanic (1997)" },
        decoys: [
          { name: "Cate Blanchett", connection: "Co-starred in The Aviator (2004)" },
          { name: "Marion Cotillard", connection: "Co-starred in Inception (2010)" },
          { name: "Jonah Hill", connection: "Co-starred in The Wolf of Wall Street (2013)" }
        ]
      },
      {
        correct: { name: "Judi Dench", connection: "Co-starred in Iris (2001)" },
        decoys: [
          { name: "Emma Thompson", connection: "Co-starred in Sense and Sensibility (1995)" },
          { name: "Jim Carrey", connection: "Co-starred in Eternal Sunshine of the Spotless Mind (2004)" },
          { name: "Idris Elba", connection: "Co-starred in The Mountain Between Us (2017)" }
        ]
      },
      {
        correct: { name: "William Shakespeare", connection: "Dench won an Oscar for Shakespeare in Love (1998)" },
        decoys: [
          { name: "Queen Victoria", connection: "Dench played Queen Victoria in Mrs Brown (1997)" },
          { name: "M (James Bond)", connection: "Dench played M in seven James Bond films (1995–2012)" },
          { name: "Philomena Lee", connection: "Dench starred as Philomena in Philomena (2013)" }
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
          { name: "Kevin Hart", connection: "Co-starred in Central Intelligence (2016)" },
          { name: "Zac Efron", connection: "Co-starred in Baywatch (2017)" },
          { name: "Jason Statham", connection: "Co-starred in Hobbs & Shaw (2019)" }
        ]
      },
      {
        correct: { name: "Matt Damon", connection: "Co-starred in The Adjustment Bureau (2011)" },
        decoys: [
          { name: "John Krasinski", connection: "Married since 2010" },
          { name: "Cillian Murphy", connection: "Co-starred in A Quiet Place Part II (2020)" },
          { name: "Lin-Manuel Miranda", connection: "Co-starred in Mary Poppins Returns (2018)" }
        ]
      },
      {
        correct: { name: "Ben Affleck", connection: "Co-wrote and co-starred in Good Will Hunting (1997)" },
        decoys: [
          { name: "George Clooney", connection: "Co-starred in the Ocean's trilogy (2001–2007)" },
          { name: "Christian Bale", connection: "Co-starred in Ford v Ferrari (2019)" },
          { name: "Ridley Scott", connection: "Directed Damon in The Martian (2015)" }
        ]
      },
      {
        correct: { name: "Jennifer Lopez", connection: "Married in 2022 (the famous 'Bennifer' reunion)" },
        decoys: [
          { name: "Ana de Armas", connection: "Co-starred in Deep Water (2022)" },
          { name: "Rosamund Pike", connection: "Co-starred in Gone Girl (2014)" },
          { name: "Henry Cavill", connection: "Both played DC superheroes — Affleck as Batman, Cavill as Superman" }
        ]
      },
      {
        correct: { name: "Donatella Versace", connection: "Lopez wore the iconic Versace jungle dress at the 2000 Grammys" },
        decoys: [
          { name: "Shakira", connection: "Co-performed at the Super Bowl LIV Halftime Show (2020)" },
          { name: "Constance Wu", connection: "Co-starred in Hustlers (2019)" },
          { name: "Jane Fonda", connection: "Co-starred in Monster-in-Law (2005)" }
        ]
      },
      {
        correct: { name: "Anna Wintour", connection: "Versace and Wintour co-chair the annual Met Gala" },
        decoys: [
          { name: "Lady Gaga", connection: "Versace dressed Gaga for the 2019 Met Gala" },
          { name: "Naomi Campbell", connection: "Longtime Versace supermodel since the 1990s" },
          { name: "Gianni Versace", connection: "Donatella's brother, founder of the Versace fashion house" }
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
        correct: { name: "Martha Stewart", connection: "Co-hosted Martha & Snoop's Potluck Dinner Party (2016–2020)" },
        decoys: [
          { name: "Dr. Dre", connection: "Produced Snoop's debut album Doggystyle (1993)" },
          { name: "Pharrell Williams", connection: "Collaborated on 'Drop It Like It's Hot' (2004)" },
          { name: "Eminem", connection: "Co-starred in the Up in Smoke Tour (2000)" }
        ]
      },
      {
        correct: { name: "Justin Bieber", connection: "Martha roasted Bieber on Comedy Central's Roast of Justin Bieber (2015)" },
        decoys: [
          { name: "Ellen DeGeneres", connection: "Frequent guest on The Ellen DeGeneres Show" },
          { name: "Snoop Dogg", connection: "Co-hosted Martha & Snoop's Potluck Dinner Party" },
          { name: "Kim Kardashian", connection: "Appeared together on The Apprentice (2005)" }
        ]
      },
      {
        correct: { name: "Ed Sheeran", connection: "Collaborated on 'I Don't Care' (2019)" },
        decoys: [
          { name: "Drake", connection: "Collaborated on 'Right Here' (2012)" },
          { name: "Ludacris", connection: "Featured on 'Baby' (2010)" },
          { name: "Usher", connection: "Usher discovered and mentored Bieber in 2008" }
        ]
      },
      {
        correct: { name: "Elton John", connection: "Sheeran recorded 'Merry Christmas' duet with Elton (2021)" },
        decoys: [
          { name: "Taylor Swift", connection: "Collaborated on 'Everything Has Changed' (2012)" },
          { name: "Beyoncé", connection: "Collaborated on 'Perfect Duet' (2017)" },
          { name: "Eminem", connection: "Collaborated on 'River' (2017)" }
        ]
      },
      {
        correct: { name: "Princess Diana", connection: "Elton performed 'Candle in the Wind' at Diana's funeral (1997)" },
        decoys: [
          { name: "Freddie Mercury", connection: "Close friends; both performed at Live Aid (1985)" },
          { name: "John Lennon", connection: "Performed together at Madison Square Garden (1974)" },
          { name: "Billie Jean King", connection: "Elton attended her tennis matches; lifelong friends" }
        ]
      },
      {
        correct: { name: "Queen Elizabeth II", connection: "Diana's mother-in-law — Diana married Prince Charles in 1981" },
        decoys: [
          { name: "Prince William", connection: "Diana's eldest son, born 1982" },
          { name: "Prince Harry", connection: "Diana's youngest son, born 1984" },
          { name: "Camilla Parker Bowles", connection: "Married Prince Charles in 2005" }
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
          { name: "Ed Sheeran", connection: "Collaborated on 'Everything Has Changed' (2012)" },
          { name: "Selena Gomez", connection: "Best friends since 2008, met as teenagers" },
          { name: "Joe Alwyn", connection: "Dated from 2017 to 2023" }
        ]
      },
      {
        correct: { name: "Jason Kelce", connection: "Brothers — both NFL legends for the Chiefs and Eagles" },
        decoys: [
          { name: "Patrick Mahomes", connection: "Teammate on the Kansas City Chiefs since 2018" },
          { name: "Donna Kelce", connection: "Travis's mother, famous for attending both sons' games" },
          { name: "Andy Reid", connection: "Head coach of the Kansas City Chiefs" }
        ]
      },
      {
        correct: { name: "Bradley Cooper", connection: "Both passionate Philadelphia Eagles fans — celebrated the 2018 Super Bowl together" },
        decoys: [
          { name: "Nick Foles", connection: "Teammate on the Eagles' Super Bowl LII-winning team (2018)" },
          { name: "Jalen Hurts", connection: "Kelce's quarterback on the Eagles" },
          { name: "Ryan Gosling", connection: "Both appeared in viral sports moments" }
        ]
      },
      {
        correct: { name: "Lady Gaga", connection: "Co-starred in A Star Is Born (2018)" },
        decoys: [
          { name: "Jennifer Lawrence", connection: "Co-starred in Silver Linings Playbook (2012)" },
          { name: "Robert De Niro", connection: "Co-starred in Silver Linings Playbook (2012)" },
          { name: "Sienna Miller", connection: "Co-starred in American Sniper (2014)" }
        ]
      },
      {
        correct: { name: "Tony Bennett", connection: "Recorded two duet albums: Cheek to Cheek (2014) and Love for Sale (2021)" },
        decoys: [
          { name: "Ariana Grande", connection: "Collaborated on 'Rain on Me' (2020)" },
          { name: "Beyoncé", connection: "Both performed at the Super Bowl halftime show" },
          { name: "Adam Driver", connection: "Co-starred in House of Gucci (2021)" }
        ]
      },
      {
        correct: { name: "The White House", connection: "Bennett performed at The White House for Presidents Kennedy, Clinton, and Obama" },
        decoys: [
          { name: "Frank Sinatra", connection: "Close friends and fellow Rat Pack era icons" },
          { name: "Central Park", connection: "Bennett recorded his famous 'I Left My Heart in San Francisco' (1962)" },
          { name: "The Grammy Awards", connection: "Bennett won 20 Grammy Awards over his career" }
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
        correct: { name: "Daniel Craig", connection: "Adele sang 'Skyfall' — the theme for Craig's Bond film (2012)" },
        decoys: [
          { name: "Sam Smith", connection: "Both sang Bond themes — Smith sang 'Writing's on the Wall' for Spectre (2015)" },
          { name: "Billie Eilish", connection: "Both sang Bond themes — Eilish sang 'No Time to Die' (2020)" },
          { name: "Paul McCartney", connection: "Both sang Bond themes — McCartney sang 'Live and Let Die' (1973)" }
        ]
      },
      {
        correct: { name: "Rachel Weisz", connection: "Married since 2011" },
        decoys: [
          { name: "Rami Malek", connection: "Co-starred in No Time to Die (2021)" },
          { name: "Javier Bardem", connection: "Co-starred in Skyfall (2012)" },
          { name: "Halle Berry", connection: "Both starred in Bond films — Berry in Die Another Day (2002)" }
        ]
      },
      {
        correct: { name: "Ralph Fiennes", connection: "Co-starred in The Constant Gardener (2005)" },
        decoys: [
          { name: "Brendan Fraser", connection: "Co-starred in The Mummy (1999)" },
          { name: "Hugh Jackman", connection: "Co-starred in The Fountain (2006)" },
          { name: "Keanu Reeves", connection: "Co-starred in Constantine (2005)" }
        ]
      },
      {
        correct: { name: "Judi Dench", connection: "Both played M in the Bond franchise — Fiennes succeeded Dench as M" },
        decoys: [
          { name: "Liam Neeson", connection: "Co-starred in Schindler's List (1993)" },
          { name: "Uma Thurman", connection: "Co-starred in The Avengers (1998, not Marvel)" },
          { name: "Cate Blanchett", connection: "Co-starred in The English Patient (1996)" }
        ]
      },
      {
        correct: { name: "Pierce Brosnan", connection: "Dench played M in all four Brosnan Bond films (1995–2002)" },
        decoys: [
          { name: "Daniel Craig", connection: "Dench played M in Craig's first three Bond films" },
          { name: "Ben Whishaw", connection: "Played Q alongside Dench's M in Skyfall (2012)" },
          { name: "Ian Fleming", connection: "Fleming created the character M that Dench portrayed" }
        ]
      },
      {
        correct: { name: "James Bond", connection: "Brosnan played Agent 007 in four films (1995–2002)" },
        decoys: [
          { name: "Rene Russo", connection: "Co-starred in The Thomas Crown Affair (1999)" },
          { name: "Meryl Streep", connection: "Co-starred in Mamma Mia! (2008)" },
          { name: "Robin Williams", connection: "Co-starred in Mrs. Doubtfire (1993)" }
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
        correct: { name: "Whoopi Goldberg", connection: "Co-starred in The Color Purple (1985)" },
        decoys: [
          { name: "Danny Glover", connection: "Co-starred in The Color Purple (1985)" },
          { name: "Reese Witherspoon", connection: "Co-produced and co-starred in A Wrinkle in Time (2018)" },
          { name: "David Letterman", connection: "Famous rival late-night host; appeared on each other's shows" }
        ]
      },
      {
        correct: { name: "Patrick Stewart", connection: "Goldberg played Guinan on Star Trek: The Next Generation (1988–1993)" },
        decoys: [
          { name: "Robin Williams", connection: "Co-hosted Comic Relief charity specials (1986–1998)" },
          { name: "Demi Moore", connection: "Co-starred in Ghost (1990)" },
          { name: "Billy Crystal", connection: "Co-hosted Comic Relief charity specials (1986–1998)" }
        ]
      },
      {
        correct: { name: "William Shatner", connection: "Both played Star Trek captains — Stewart as Picard, Shatner as Kirk" },
        decoys: [
          { name: "Ian McKellen", connection: "Co-starred in the X-Men franchise (2000–2014)" },
          { name: "Hugh Jackman", connection: "Co-starred in X-Men (2000) and Logan (2017)" },
          { name: "Brent Spiner", connection: "Co-starred as Data on Star Trek: TNG (1987–2002)" }
        ]
      },
      {
        correct: { name: "Jeff Bezos", connection: "Shatner flew to space on Bezos's Blue Origin rocket in October 2021" },
        decoys: [
          { name: "Leonard Nimoy", connection: "Co-starred as Spock on Star Trek (1966–2013)" },
          { name: "Chris Pine", connection: "Both played Captain Kirk — Pine in the reboot films (2009–2016)" },
          { name: "James Spader", connection: "Co-starred in Boston Legal (2004–2008)" }
        ]
      },
      {
        correct: { name: "Elon Musk", connection: "Rival space entrepreneurs — Blue Origin vs SpaceX" },
        decoys: [
          { name: "Richard Branson", connection: "Flew to space on Virgin Galactic 9 days before Shatner's flight (2021)" },
          { name: "MacKenzie Scott", connection: "Bezos's ex-wife, divorced in 2019" },
          { name: "Andy Jassy", connection: "Succeeded Bezos as Amazon CEO in 2021" }
        ]
      },
      {
        correct: { name: "NASA", connection: "SpaceX launches astronauts to the ISS under NASA's Commercial Crew Program" },
        decoys: [
          { name: "Tesla", connection: "Musk is CEO of Tesla, the electric car company" },
          { name: "Twitter/X", connection: "Musk acquired Twitter for $44 billion in 2022" },
          { name: "Grimes", connection: "Former partner; had children together" }
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
  const seed = (activePuzzle.id === 'tutorial' ? 999 : typeof activePuzzle.id === 'string' ? 888 + PRACTICE_PUZZLES.indexOf(activePuzzle) : (getDaysSinceEpoch() + 1) * 100) + state.currentStep * 10 + 7;
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
