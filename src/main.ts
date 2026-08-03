import './style.css';

const resumeUrl = '/Resume.pdf';

type Profile = {
  name: string;
  role: string;
  email: string;
  availability: string;
  github: string;
  linkedin: string;
};

const profile: Profile = {
  name: 'Sina Roomi',
  role: 'Computer science graduate and software developer',
  email: 'sinar.roomi@gmail.com',
  availability: 'Open to software engineering opportunities',
  github: 'https://github.com/S-Roomi',
  linkedin: 'https://www.linkedin.com/in/sina-roomi',
};

const projects = [
  {
    number: '01',
    type: 'Data tracker website',
    title: 'Arena Tracker',
    description: 'A tool for tracking and exploring arena data in one focused, easy-to-use place.',
    color: 'teal',
    url: 'https://github.com/S-Roomi/arena_tracker',
  },
  {
    number: '02',
    type: 'Computer vision research',
    title: 'Eye Blink Detection',
    description: 'Research exploring computer-vision methods for detecting eye blinks from video.',
    color: 'lilac',
    url: 'https://github.com/S-Roomi/iBlink',
  },
  {
    number: '03',
    type: 'Python simulation',
    title: 'BotCT',
    description: 'A multiplayer simulation of Blood on the Clocktower with role logic, character abilities, and Discord integration.',
    color: 'amber',
    url: 'https://github.com/arenvista/BotCT',
  },
] as const;

const projectCards = projects.map((project, index) => `
  <article class="project-card ${project.color}" data-project-index="${index}">
    <p class="project-number">${project.number}</p>
    <div>
      <p class="project-type">${project.type}</p>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </div>
    <a href="${project.url}" target="_blank" rel="noreferrer" aria-label="View ${project.title} on GitHub">
      View on GitHub <span aria-hidden="true">↗</span>
    </a>
  </article>
`).join('');

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('App root was not found.');

app.innerHTML = `
  <div class="sand-fill" aria-hidden="true"></div>
  <canvas class="sand" aria-hidden="true"></canvas>
  <header class="site-header">
    <nav aria-label="Main navigation">
      <a class="active" href="#top" data-section="top">Home</a>
      <a href="#work" data-section="work">Work</a>
      <a href="#about" data-section="about">About</a>
      <a href="#contact" data-section="contact">Contact</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="top" aria-labelledby="hero-title">
      <div class="hero-copy">
        <h1 id="hero-title" class="sand-word">Sina Roomi</h1>
        <p class="intro">${profile.role}. I turn complex problems into simple ones.</p>
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
      <div class="project-carousel" role="region" aria-roledescription="carousel" aria-label="Selected projects" tabindex="0">
        <button class="carousel-control carousel-control--previous" type="button" aria-label="Previous project">🢤</button>
        <div class="carousel-stage">
          ${projectCards}
        </div>
        <button class="carousel-control carousel-control--next" type="button" aria-label="Next project">➪</button>
        <div class="carousel-pagination" aria-label="Choose a project">
          ${projects.map((project, index) => `
            <button type="button" data-carousel-page="${index}" aria-label="Show ${project.title}"></button>
          `).join('')}
        </div>
        <p class="visually-hidden carousel-status" aria-live="polite"></p>
      </div>
    </section>

    <section class="section about" id="about" aria-labelledby="about-title">
      <p class="eyebrow">About</p>
      <div class="about-grid">
        <h2 id="about-title">I make complex systems feel approachable.</h2>
        <div>
          <p>I'm a UMBC computer science graduate with a minor in philosophy. I enjoy building reliable software and explaining the ideas behind it clearly.</p>
          <p>My tutoring and mentoring work has made me a patient collaborator who can break down difficult problems, listen closely, and help a team move forward.</p>
          <p>Technical Skills:</p>
          <ul class="skills" aria-label="Technical skills"><li>Python</li><li>C/C++</li><li>JavaScript</li><li>TypeScript</li><li>HTML/CSS</li><li>SQL</li><li>React</li><li>Next.js</li><li>NumPy</li><li>Pandas</li><li>Git</li><li>Docker</li></ul>
        </div>
      </div>
    </section>

    <section class="section experience" id="experience" aria-labelledby="experience-title">
      <div class="section-heading">
        <p class="eyebrow">Education & Experience</p>
        <h2 id="experience-title">Teaching, mentorship, and a foundation in computer science.</h2>
      </div>
      <div class="experience-list">
        <article>
          <p class="experience-date">2022 — 2026</p>
          <div><h3>B.S. in Computer Science</h3><p class="experience-place">University of Maryland, Baltimore County</p><p>Minor in philosophy.</p></div>
        </article>
        <article>
          <p class="experience-date">2025 — 2026</p>
          <div><h3>Tutor Mentor</h3><p class="experience-place">University of Maryland, Baltimore County</p><p>Dedicated 500 hours to tutoring and advising, led one-on-one mentor sessions, and helped junior tutors strengthen their practice through structured feedback.</p></div>
        </article>
        <article>
          <p class="experience-date">2025 — 2026</p>
          <div><h3>CRLA Certified & Student-Athlete Tutor</h3><p class="experience-place">University of Maryland, Baltimore County</p><p>Tutored over 300+ students across computer science coursework with personalized study strategies, practice materials, and technical problem-solving sessions.</p></div>
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
          <a class="resume-link" href="${resumeUrl}" target="_blank">
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
const sandColors = ['#dd5b34', '#d85a35', '#df603a', '#d35331'];
// Change this one value to control the size of every visible sand pixel.
const sandPixelSize = 2;
const columnWidth = sandPixelSize * 2;
const maxParticles = 320;
const frameInterval = 1_000 / 60;
const maxFrameDelta = 100;
const edgeBandHeight = 128;
const edgeLead = 48;
const sandFallSpeed = 160;
const sandCatchUpSpeed = 300;

type SandParticle = {
  x: number;
  y: number;
  speed: number;
  colorIndex: number;
  size: number;
};

let animationFrame: number | undefined;
let lastFrameTime: number | undefined;
let canvasWidth = 0;
let siteHeight = 0;
let sandDepth = 0;
let bandTop = 0;
let heights = new Float32Array();
let edgeNoise = new Float32Array();
let particles: SandParticle[] = [];
let sandPattern: CanvasPattern | null = null;
let sandWordTop = 0;
let sandWordHeight = 0;

const title = document.querySelector<HTMLElement>('.sand-word');
if (!title) throw new Error('Hero title was not found.');
const foundFill = document.querySelector<HTMLElement>('.sand-fill');
if (!foundFill) throw new Error('Completed sand layer was not found.');
const sandFill: HTMLElement = foundFill;

function createSandTexture(): HTMLCanvasElement {
  const tileCells = 12;
  const texture = document.createElement('canvas');
  texture.width = tileCells * sandPixelSize;
  texture.height = tileCells * sandPixelSize;
  const textureContext = texture.getContext('2d');
  if (!textureContext) return texture;

  for (let y = 0; y < tileCells; y += 1) {
    for (let x = 0; x < tileCells; x += 1) {
      // Favor the base orange so the texture stays subtle at larger settings.
      const colorIndex = Math.random() < 0.7
        ? 0
        : 1 + Math.floor(Math.random() * (sandColors.length - 1));
      textureContext.fillStyle = sandColors[colorIndex];
      textureContext.fillRect(
        x * sandPixelSize,
        y * sandPixelSize,
        sandPixelSize,
        sandPixelSize,
      );
    }
  }

  return texture;
}

const sandTexture = createSandTexture();
sandFill.style.backgroundImage = `url("${sandTexture.toDataURL()}")`;
sandFill.style.backgroundSize = `${sandTexture.width}px ${sandTexture.height}px`;

function resetSand(): void {
  const box = canvas.getBoundingClientRect();
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.max(1, Math.floor(box.width * pixelRatio));
  canvas.height = Math.max(1, Math.floor(edgeBandHeight * pixelRatio));
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  context.imageSmoothingEnabled = false;
  sandPattern = context.createPattern(sandTexture, 'repeat');
  canvasWidth = box.width;
  siteHeight = app.scrollHeight;
  const columnCount = Math.ceil(canvasWidth / columnWidth) + 1;
  heights = new Float32Array(columnCount);
  edgeNoise = new Float32Array(columnCount);
  for (let column = 0; column < columnCount; column += 1) {
    edgeNoise[column] = (Math.random() - 0.5) * 7;
  }
  particles = [];
  sandDepth = 0;
  bandTop = 0;
  sandFill.style.clipPath = 'inset(0 0 100% 0)';
  canvas.style.transform = 'translate3d(0, 0, 0)';
  canvas.hidden = false;
  title.classList.remove('sand-word--settled');
  lastFrameTime = undefined;
  prepareSandWord();
  drawSand();
}

function prepareSandWord(): void {
  const titleBox = title.getBoundingClientRect();
  const appBox = app.getBoundingClientRect();
  sandWordTop = titleBox.top - appBox.top;
  sandWordHeight = titleBox.height;
  title.style.clipPath = `inset(0 0 ${sandWordHeight}px 0)`;
  title.classList.add('sand-word--ready');
}

function updateHeightField(deltaSeconds: number): void {
  sandDepth = Math.min(siteHeight, sandDepth + deltaSeconds * sandFallSpeed);
  bandTop = Math.max(0, Math.min(siteHeight - edgeBandHeight, sandDepth - edgeLead));
  const localDepth = sandDepth - bandTop;

  for (let column = 0; column < heights.length; column += 1) {
    const target = Math.max(0, localDepth + edgeNoise[column]);
    const difference = target - heights[column];
    heights[column] += Math.sign(difference) * Math.min(Math.abs(difference), deltaSeconds * sandCatchUpSpeed);
  }

  // A few relaxation passes keep the edge sand-like without simulating every grain.
  for (let pass = 0; pass < 2; pass += 1) {
    for (let column = 1; column < heights.length - 1; column += 1) {
      const neighbor = column + (Math.random() < 0.5 ? -1 : 1);
      const difference = heights[column] - heights[neighbor];
      if (Math.abs(difference) > columnWidth * 1.5) {
        const transfer = Math.sign(difference) * Math.min(1.2, Math.abs(difference) * 0.18);
        heights[column] -= transfer;
        heights[neighbor] += transfer;
      }
    }
  }

  sandFill.style.clipPath = `inset(0 0 ${Math.max(0, siteHeight - bandTop)}px 0)`;
  canvas.style.transform = `translate3d(0, ${Math.floor(bandTop)}px, 0)`;

  const revealedHeight = Math.max(0, Math.min(sandWordHeight, bandTop - sandWordTop));
  title.style.clipPath = `inset(0 0 ${sandWordHeight - revealedHeight}px 0)`;

  if (bandTop >= sandWordTop + sandWordHeight) {
    title.classList.add('sand-word--settled');
  }
}

function updateParticles(deltaSeconds: number): void {
  const desiredParticles = Math.min(maxParticles, Math.ceil(canvasWidth / 6));
  while (particles.length < desiredParticles && sandDepth < siteHeight) {
    const x = Math.random() * canvasWidth;
    const edge = heights[Math.min(heights.length - 1, Math.floor(x / columnWidth))];
    particles.push({
      x,
      y: edge + Math.random() * 8,
      speed: 70 + Math.random() * 90,
      colorIndex: Math.floor(Math.random() * sandColors.length),
      size: Math.random() < 0.8 ? 2 : 3,
    });
  }

  for (const particle of particles) {
    particle.y += particle.speed * deltaSeconds;
    const edge = heights[Math.min(heights.length - 1, Math.floor(particle.x / columnWidth))];
    if (particle.y > edge + 54 || particle.y > edgeBandHeight) {
      particle.x = Math.random() * canvasWidth;
      const nextEdge = heights[Math.min(heights.length - 1, Math.floor(particle.x / columnWidth))];
      particle.y = nextEdge + Math.random() * 8;
      particle.speed = 70 + Math.random() * 90;
    }
  }
}

function drawSand(): void {
  context.clearRect(0, 0, canvasWidth, edgeBandHeight);
  sandPattern?.setTransform(new DOMMatrix().translate(0, -bandTop));
  context.fillStyle = sandPattern ?? sandColors[0];
  context.beginPath();
  for (let column = 0; column < heights.length; column += 1) {
    const pixelHeight = Math.ceil(heights[column] / sandPixelSize) * sandPixelSize;
    context.rect(column * columnWidth, 0, columnWidth, pixelHeight);
  }
  context.fill();

  for (let colorIndex = 0; colorIndex < sandColors.length; colorIndex += 1) {
    context.beginPath();
    for (const particle of particles) {
      if (particle.colorIndex === colorIndex) {
        const x = Math.floor(particle.x / sandPixelSize) * sandPixelSize;
        const y = Math.floor(particle.y / sandPixelSize) * sandPixelSize;
        const size = Math.max(
          sandPixelSize,
          Math.round(particle.size / sandPixelSize) * sandPixelSize,
        );
        context.rect(x, y, size, size);
      }
    }
    context.fillStyle = sandColors[colorIndex];
    context.fill();
  }
}

function animateSand(timestamp: number): void {
  const deltaMs = Math.min(timestamp - (lastFrameTime ?? timestamp), maxFrameDelta);
  if (lastFrameTime !== undefined && deltaMs < frameInterval) {
    animationFrame = requestAnimationFrame(animateSand);
    return;
  }
  lastFrameTime = timestamp;

  updateHeightField(deltaMs / 1_000);
  updateParticles(deltaMs / 1_000);
  drawSand();

  if (sandDepth >= siteHeight) {
    sandFill.style.clipPath = 'inset(0)';
    canvas.hidden = true;
    animationFrame = undefined;
    return;
  }

  animationFrame = requestAnimationFrame(animateSand);
}

function startSand(): void {
  if (animationFrame !== undefined) cancelAnimationFrame(animationFrame);
  resetSand();
  if (reducedMotion.matches) {
    title.classList.remove('sand-word--ready');
    title.style.removeProperty('clip-path');
    return;
  }
  animationFrame = requestAnimationFrame(animateSand);
}

const resizeObserver = new ResizeObserver(startSand);
resizeObserver.observe(app);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (animationFrame !== undefined) cancelAnimationFrame(animationFrame);
    animationFrame = undefined;
  } else if (!reducedMotion.matches) {
    lastFrameTime = undefined;
    animationFrame = requestAnimationFrame(animateSand);
  }
});
reducedMotion.addEventListener('change', startSand);
startSand();
void document.fonts?.ready.then(startSand);

const carousel = document.querySelector<HTMLElement>('.project-carousel');
const carouselCards = [...document.querySelectorAll<HTMLElement>('.project-card')];
const carouselPages = [...document.querySelectorAll<HTMLButtonElement>('[data-carousel-page]')];
const carouselStatus = document.querySelector<HTMLElement>('.carousel-status');
let activeProjectIndex = 0;
let pointerStartX: number | undefined;
let suppressCardClick = false;

function projectOffset(index: number): number {
  let offset = index - activeProjectIndex;
  if (offset > projects.length / 2) offset -= projects.length;
  if (offset < -projects.length / 2) offset += projects.length;
  return offset;
}

function showProject(index: number): void {
  activeProjectIndex = (index + projects.length) % projects.length;

  for (const [cardIndex, card] of carouselCards.entries()) {
    const offset = projectOffset(cardIndex);
    card.dataset.position = offset === 0 ? 'active' : offset < 0 ? 'previous' : 'next';
    card.setAttribute('aria-label', `Project ${cardIndex + 1} of ${projects.length}: ${projects[cardIndex].title}`);
    card.querySelector<HTMLAnchorElement>('a')!.tabIndex = offset === 0 ? 0 : -1;
  }

  for (const [pageIndex, page] of carouselPages.entries()) {
    const isActive = pageIndex === activeProjectIndex;
    page.classList.toggle('active', isActive);
    page.setAttribute('aria-pressed', String(isActive));
  }

  if (carouselStatus) {
    carouselStatus.textContent =
      `Project ${activeProjectIndex + 1} of ${projects.length}: ${projects[activeProjectIndex].title}`;
  }
}

document.querySelector('.carousel-control--previous')?.addEventListener('click', () => {
  showProject(activeProjectIndex - 1);
});
document.querySelector('.carousel-control--next')?.addEventListener('click', () => {
  showProject(activeProjectIndex + 1);
});

for (const page of carouselPages) {
  page.addEventListener('click', () => showProject(Number(page.dataset.carouselPage)));
}

for (const [index, card] of carouselCards.entries()) {
  card.addEventListener('click', (event) => {
    if (suppressCardClick) return;
    const clickedLink = event.target instanceof Element ? event.target.closest('a') : null;
    if (clickedLink && index === activeProjectIndex) return;
    if (clickedLink) event.preventDefault();
    showProject(index);
  });
}

carousel?.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    showProject(activeProjectIndex - 1);
  } else if (event.key === 'ArrowRight') {
    event.preventDefault();
    showProject(activeProjectIndex + 1);
  }
});

carousel?.addEventListener('pointerdown', (event) => {
  if (event.isPrimary) pointerStartX = event.clientX;
});
carousel?.addEventListener('pointerup', (event) => {
  if (pointerStartX === undefined) return;
  const dragDistance = event.clientX - pointerStartX;
  pointerStartX = undefined;
  if (Math.abs(dragDistance) < 45) return;

  suppressCardClick = true;
  showProject(activeProjectIndex + (dragDistance < 0 ? 1 : -1));
  queueMicrotask(() => {
    suppressCardClick = false;
  });
});
carousel?.addEventListener('pointercancel', () => {
  pointerStartX = undefined;
});

showProject(0);

const themeToggle = document.querySelector<HTMLButtonElement>('.theme-toggle');
const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('.site-header [data-section]')];

function setTheme(theme: 'light' | 'dark'): void {
  document.documentElement.dataset.theme = theme;
  themeToggle?.setAttribute('aria-pressed', String(theme === 'dark'));
}

const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'dark' ? 'dark' : 'light');
themeToggle?.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(nextTheme);
  localStorage.setItem('theme', nextTheme);
});

const observedSections = navLinks
  .map((link) => document.getElementById(link.dataset.section ?? ''))
  .filter((section): section is HTMLElement => section !== null);

function setActiveNav(sectionId: string): void {
  for (const link of navLinks) {
    const isActive = link.dataset.section === sectionId;
    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
}

function updateActiveNav(): void {
  if (observedSections.length === 0) return;

  const pageBottom = window.scrollY + window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  let activeSection = observedSections[0];

  // The final section may be too short to reach the activation point.
  if (pageBottom >= documentHeight - 2) {
    activeSection = observedSections[observedSections.length - 1];
  } else {
    const activationPoint = window.scrollY + window.innerHeight * 0.35;
    for (const section of observedSections) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      if (sectionTop > activationPoint) break;
      activeSection = section;
    }
  }

  setActiveNav(activeSection.id);
}

let navUpdateFrame: number | undefined;
function scheduleNavUpdate(): void {
  if (navUpdateFrame !== undefined) return;
  navUpdateFrame = window.requestAnimationFrame(() => {
    navUpdateFrame = undefined;
    updateActiveNav();
  });
}

for (const link of navLinks) {
  link.addEventListener('click', () => {
    setActiveNav(link.dataset.section ?? '');
  });
}

window.addEventListener('scroll', scheduleNavUpdate, { passive: true });
window.addEventListener('resize', scheduleNavUpdate);
updateActiveNav();
