import './style.css';

const resumeUrl = '/Resume.pdf';

type Profile = {
  name: string;
  role: string;
  location: string;
  email: string;
  availability: string;
  github: string;
  linkedin: string;
};

const profile: Profile = {
  name: 'Sina Roomi',
  role: 'Computer science graduate and software developer',
  location: 'Based in Baltimore, MD',
  email: 'sinar.roomi@gmail.com',
  availability: 'Open to software engineering opportunities',
  github: 'https://github.com/S-Roomi',
  linkedin: 'https://www.linkedin.com/in/sina-roomi',
};

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('App root was not found.');

app.innerHTML = `
  <canvas class="sand" aria-hidden="true"></canvas>
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="${profile.name}, home">SR<span>.</span></a>
    <nav aria-label="Main navigation">
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <h1 id="hero-title" class="sand-word">.</h1>
        <p class="eyebrow">Software Engineer ${profile.location}</p>
        <p class="intro">${profile.role}. I turn complex problems into useful tools, from full-stack web applications to interactive experiments.</p>
        <div class="hero-actions">
          <a class="button" href="#work">See my work <span aria-hidden="true">↓</span></a>
          <a class="text-link" href="mailto:${profile.email}">Let's talk <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>

    <section class="section work" id="work" aria-labelledby="work-title">
      <div class="section-heading">
        <p class="eyebrow">Selected work</p>
        <h2 id="work-title">Projects built to make ideas tangible.</h2>
      </div>
      <div class="project-list">
        <article class="project-card teal">
          <p class="project-number">01</p>
          <div><p class="project-type">Data tracker website</p><h3>Arena Tracker</h3><p>A tool for tracking and exploring arena data in one focused, easy-to-use place.</p></div>
          <a href="https://github.com/S-Roomi/arena_tracker" target="_blank" rel="noreferrer" aria-label="View Arena Tracker on GitHub">View on GitHub <span aria-hidden="true">↗</span></a>
        </article>
        <article class="project-card lilac">
          <p class="project-number">02</p>
          <div><p class="project-type">Computer vision research</p><h3>Eye Blink Detection</h3><p>Research exploring computer-vision methods for detecting eye blinks from video.</p></div>
          <a href="https://github.com/S-Roomi/iBlink" target="_blank" rel="noreferrer" aria-label="View Eye Blink Detection research on GitHub">View on GitHub <span aria-hidden="true">↗</span></a>
        </article>
        <article class="project-card amber">
          <p class="project-number">03</p>
          <div><p class="project-type">Python simulation</p><h3>BotCT</h3><p>A multiplayer simulation of Blood on the Clocktower with role logic, character abilities, and Discord integration.</p></div>
          <a href="https://github.com/arenvista/BotCT" target="_blank" rel="noreferrer" aria-label="View BotCT">View on GitHub <span aria-hidden="true">↗</span></a>
        </article>
      </div>
    </section>

    <section class="section about" id="about" aria-labelledby="about-title">
      <p class="eyebrow">About</p>
      <div class="about-grid">
        <h2 id="about-title">I make complex systems feel approachable.</h2>
        <div>
          <p>I'm a UMBC computer science graduate with a minor in philosophy. I enjoy building reliable software and explaining the ideas behind it clearly.</p>
          <p>My tutoring and mentoring work has made me a patient collaborator who can break down difficult problems, listen closely, and help a team move forward.</p>
          <ul class="skills" aria-label="Technical skills"><li>Python</li><li>C/C++</li><li>JavaScript</li><li>TypeScript</li><li>HTML/CSS</li><li>SQL</li><li>React</li><li>Next.js</li><li>Node.js</li><li>Flask</li><li>FastAPI</li><li>Git</li><li>Docker</li><li>Podman</li></ul>
        </div>
      </div>
    </section>

    <section class="section experience" id="experience" aria-labelledby="experience-title">
      <div class="section-heading">
        <p class="eyebrow">Experience & education</p>
        <h2 id="experience-title">Teaching, mentorship, and a foundation in computer science.</h2>
      </div>
      <div class="experience-list">
        <article>
          <p class="experience-date">2025 — 2026</p>
          <div><h3>Tutor Mentor</h3><p class="experience-place">University of Maryland, Baltimore County</p><p>Dedicated 500 hours to tutoring and advising, led one-on-one mentor sessions, and helped junior tutors strengthen their practice through structured feedback.</p></div>
        </article>
        <article>
          <p class="experience-date">2025 — 2026</p>
          <div><h3>CRLA Certified & Student-Athlete Tutor</h3><p class="experience-place">University of Maryland, Baltimore County</p><p>Supported students across computer science coursework with personalized study strategies, practice materials, and technical problem-solving sessions.</p></div>
        </article>
        <article>
          <p class="experience-date">2022 — 2026</p>
          <div><h3>B.S. in Computer Science</h3><p class="experience-place">University of Maryland, Baltimore County</p><p>Graduated with a minor in philosophy.</p></div>
        </article>
      </div>
    </section>

      <section class="contact" id="contact" aria-labelledby="contact-title">
        <div class="contact-content">
          <p class="eyebrow">Have a role in mind?</p>
          <h2 id="contact-title">Reach out</h2>
          <a class="email-link" href="mailto:${profile.email}">
            ${profile.email} <span aria-hidden="true">↗</span>
          </a>
          <a class="linkedin-link" href="${profile.linkedin}" target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div class="resume-slot">
          <a class="resume-link" href="${resumeUrl}" download="Sina-Roomi-Resume.pdf">
            <span class="resume-link__label">Download resume</span>
            <span class="resume-link__icon" aria-hidden="true">↓</span>
          </a>
        </div>

      </section>
  </main>

  <footer><p>© ${new Date().getFullYear()} ${profile.name}</p><div><a href="${profile.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a><a href="${profile.github}" target="_blank" rel="noreferrer">GitHub</a></div></footer>
`;

const foundCanvas = document.querySelector<HTMLCanvasElement>('.sand');
if (!foundCanvas) throw new Error('Sand canvas was not found.');
const canvas: HTMLCanvasElement = foundCanvas;

const foundContext = canvas.getContext('2d', { alpha: true });
if (!foundContext) throw new Error('Canvas 2D context is not available.');
const context: CanvasRenderingContext2D = foundContext;

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const grainSize = 2;
// A grain may only cross one visible cell per paint. Raising this value makes
// the simulation skip cells, which reads as teleporting rather than faster sand.
const riseRowsPerFrame = 1000;
// Increase this to make the scene build up faster without changing grain detail
// or the distance an individual grain travels in a rendered frame.
const sandEmissionMultiplier = 20;
const simulationStepsPerFrame = 4;
const maxFrameDelta = 50;


const sandColors = ['#dd5b34', '#d85a35', '#df603a', '#d35331'];
let animationFrame: number | undefined;
let lastFrameTime: number | undefined;
let spawnRemainder = 0;
let cells = new Uint8Array();
let columns = 0;
let rows = 0;
let canvasWidth = 0;
let canvasHeight = 0;
let targetCells = new Uint8Array();
let activeCells: number[] = [];
let pendingActiveCells: number[] = [];
let activeFlags = new Uint8Array();
let queuedActiveGrains = 0;
let maxActiveGrains = 0;
let dirtyCells: number[] = [];
let dirtyFlags = new Uint8Array();

const title = document.querySelector<HTMLElement>('.sand-word');
if (!title) throw new Error('Hero title was not found.');

function resetSand(): void {
  const box = canvas.getBoundingClientRect();
  const scale = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.max(1, Math.floor(box.width * scale));
  canvas.height = Math.max(1, Math.floor(box.height * scale));
  context.setTransform(scale, 0, 0, scale, 0, 0);
  canvasWidth = box.width;
  canvasHeight = box.height;
  columns = Math.ceil(box.width / grainSize);
  rows = Math.ceil(box.height / grainSize);
  cells = new Uint8Array(columns * rows);
  targetCells = new Uint8Array(columns * rows);
  activeCells = [];
  pendingActiveCells = [];
  activeFlags = new Uint8Array(columns * rows);
  queuedActiveGrains = 0;
  maxActiveGrains = Math.min(3600, Math.max(1200, Math.ceil(columns * rows * 0.04)));
  dirtyCells = [];
  dirtyFlags = new Uint8Array(columns * rows);
  lastFrameTime = undefined;
  spawnRemainder = 0;
  buildTextMask();
}

function cellIndex(x: number, y: number): number {
  return x + y * columns;
}

function wakeCell(index: number): void {
  if (!cells[index] || activeFlags[index]) return;

  activeFlags[index] = 1;
  queuedActiveGrains += 1;
  pendingActiveCells.push(index);
}

function markDirty(index: number): void {
  if (dirtyFlags[index]) return;

  dirtyFlags[index] = 1;
  dirtyCells.push(index);
}

function wakeGrainsBelow(index: number): void {
  const x = index % columns;
  const y = Math.floor(index / columns);
  if (y === rows - 1) return;

  for (let dx = -1; dx <= 1; dx += 1) {
    const belowX = x + dx;
    if (belowX >= 0 && belowX < columns) wakeCell(cellIndex(belowX, y + 1));
  }
}

function buildTextMask(): void {
  const mask = document.createElement('canvas');
  mask.width = Math.max(1, Math.ceil(canvasWidth));
  mask.height = Math.max(1, Math.ceil(canvasHeight));
  const maskContext = mask.getContext('2d');
  if (!maskContext) return;

  const canvasBox = canvas.getBoundingClientRect();
  const textWalker = document.createTreeWalker(title, NodeFilter.SHOW_TEXT);
  let textNode = textWalker.nextNode();

  while (textNode) {
    const value = textNode.textContent ?? '';
    const parent = textNode.parentElement ?? title;
    const styles = window.getComputedStyle(parent);
    const fontSize = Number.parseFloat(styles.fontSize);
    const lineHeight = Number.parseFloat(styles.lineHeight) || fontSize;
    maskContext.font = `${styles.fontStyle} ${styles.fontWeight} ${styles.fontSize} ${styles.fontFamily}`;
    maskContext.textBaseline = 'alphabetic';
    maskContext.fillStyle = '#000';

    for (let character = 0; character < value.length; character += 1) {
      if (/\s/.test(value[character])) continue;

      const range = document.createRange();
      range.setStart(textNode, character);
      range.setEnd(textNode, character + 1);
      const characterBox = range.getBoundingClientRect();
      if (!characterBox.width || !characterBox.height) continue;

      const baseline = characterBox.top - canvasBox.top + (lineHeight - fontSize) / 2 + fontSize * 0.8;
      maskContext.fillText(value[character], characterBox.left - canvasBox.left, baseline);
    }

    textNode = textWalker.nextNode();
  }

  const pixels = maskContext.getImageData(0, 0, mask.width, mask.height).data;
  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < columns; x += 1) {
      const sampleX = Math.min(mask.width - 1, Math.floor(x * grainSize + grainSize / 2));
      const sampleY = Math.min(mask.height - 1, Math.floor(y * grainSize + grainSize / 2));
      if (pixels[(sampleX + sampleY * mask.width) * 4 + 3]) targetCells[cellIndex(x, y)] = 1;
    }
  }

  title.classList.add('sand-word--ready');
}

function addSand(deltaMs: number): void {
  if (queuedActiveGrains >= maxActiveGrains) return;

  const baseGrainsPerSecond = Math.max(3_000, columns * 12);
  const availableCapacity = 1 - queuedActiveGrains / maxActiveGrains;
  spawnRemainder += baseGrainsPerSecond * sandEmissionMultiplier * (deltaMs / 1_000) * availableCapacity ** 2;
  const grainsPerFrame = Math.min(
    maxActiveGrains - queuedActiveGrains,
    Math.floor(spawnRemainder),
  );
  if (grainsPerFrame === 0) return;
  spawnRemainder -= grainsPerFrame;

  for (let grain = 0; grain < grainsPerFrame; grain += 1) {
    const x = Math.floor(Math.random() * columns);
    const index = cellIndex(x, rows - 1);
    if (!cells[index]) {
      cells[index] = Math.floor(Math.random() * sandColors.length) + 1;
      wakeCell(index);
      markDirty(index);
    }
  }
}

function moveSand(current: number, destination: number): void {
  cells[destination] = cells[current];
  cells[current] = 0;
  markDirty(current);
  markDirty(destination);
  wakeCell(destination);
  wakeGrainsBelow(current);
}

function stepSand(): void {
  for (const current of activeCells) {
    activeFlags[current] = 0;
    queuedActiveGrains -= 1;
    if (!cells[current]) continue;

    const x = current % columns;
    const y = Math.floor(current / columns);
    let destination = -1;

    for (let riseRow = 1; riseRow <= riseRowsPerFrame; riseRow += 1) {
      const nextY = y - riseRow;
      if (nextY < 0) break;

      const above = cellIndex(x, nextY);
      if (cells[above]) break;
      destination = above;
    }

    if (destination === -1 && y - 1 >= 0) {
      const direction = Math.random() > 0.5 ? -1 : 1;
      for (const dx of [direction, -direction]) {
        const nextX = x + dx;
        if (nextX < 0 || nextX >= columns) continue;

        const diagonal = cellIndex(nextX, y - 1);
        if (!cells[diagonal]) {
          destination = diagonal;
          break;
        }
      }
    }

    if (destination === -1) continue;

    moveSand(current, destination);
  }

  const processedCells = activeCells;
  activeCells = pendingActiveCells;
  pendingActiveCells = processedCells;
  pendingActiveCells.length = 0;
}

function drawSand(): void {
  for (const index of dirtyCells) {
    const x = index % columns;
    const y = Math.floor(index / columns);

    context.clearRect(x * grainSize, y * grainSize, grainSize, grainSize);
    const sand = cells[index];
    if (y < rows - 1 && sand && !targetCells[index]) {
      context.fillStyle = sandColors[sand - 1];
      context.fillRect(x * grainSize, y * grainSize, grainSize, grainSize);
    }

    dirtyFlags[index] = 0;
  }

  dirtyCells.length = 0;
}

function animateSand(timestamp: number): void {
  const deltaMs = Math.min(timestamp - (lastFrameTime ?? timestamp - 1_000 / 60), maxFrameDelta);
  lastFrameTime = timestamp;

  addSand(deltaMs);

  for (let step = 0; step < simulationStepsPerFrame; step += 1) {
    stepSand();
  }

  drawSand();
  animationFrame = requestAnimationFrame(animateSand);
}

function startSand(): void {
  if (animationFrame !== undefined) cancelAnimationFrame(animationFrame);
  resetSand();
  if (reducedMotion.matches) {
    title.classList.remove('sand-word--ready');
    drawSand();
    return;
  }
  animationFrame = requestAnimationFrame(animateSand);
}

// window.addEventListener('resize', startSand);
reducedMotion.addEventListener('change', startSand);
startSand();
void document.fonts?.ready.then(startSand);
