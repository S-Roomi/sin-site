(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const z="/Resume.pdf",c={name:"Sina Roomi",role:"Computer science graduate and software developer",location:"Based in Baltimore, MD",email:"sinar.roomi@gmail.com",github:"https://github.com/S-Roomi",linkedin:"https://www.linkedin.com/in/sina-roomi"},S=document.querySelector("#app");if(!S)throw new Error("App root was not found.");S.innerHTML=`
  <div class="sand-fill" aria-hidden="true"></div>
  <canvas class="sand" aria-hidden="true"></canvas>
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="${c.name}, home">SR<span>.</span></a>
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
        <p class="eyebrow">Software Engineer ${c.location}</p>
        <p class="intro">${c.role}. I turn complex problems into useful tools, from full-stack web applications to interactive experiments.</p>
        <div class="hero-actions">
          <a class="button" href="#work">See my work <span aria-hidden="true">↓</span></a>
          <a class="text-link" href="mailto:${c.email}">Let's talk <span aria-hidden="true">↗</span></a>
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
          <a class="email-link" href="mailto:${c.email}">
            ${c.email} <span aria-hidden="true">↗</span>
          </a>
          <a class="linkedin-link" href="${c.linkedin}" target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div class="resume-slot">
          <a class="resume-link" href="${z}" download="Sina-Roomi-Resume.pdf">
            <span class="resume-link__label">Download resume</span>
            <span class="resume-link__icon" aria-hidden="true">↓</span>
          </a>
        </div>

      </section>
  </main>

  <footer><p>© ${new Date().getFullYear()} ${c.name}</p><div><a href="${c.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a><a href="${c.github}" target="_blank" rel="noreferrer">GitHub</a></div></footer>
`;const P=document.querySelector(".sand");if(!P)throw new Error("Sand canvas was not found.");const h=P,j=h.getContext("2d",{alpha:!0});if(!j)throw new Error("Canvas 2D context is not available.");const r=j,E=window.matchMedia("(prefers-reduced-motion: reduce)"),F=["#dd5b34","#d85a35","#df603a","#d35331"],v=4,G=320,W=1e3/60,U=100,k=128,V=48,Y=240,X=300;let d,x,m=0,w=0,p=0,b=0,s=new Float32Array,L=new Float32Array,M=[],y,D=0,$=0;const u=document.querySelector(".sand-word");if(!u)throw new Error("Hero title was not found.");const I=document.querySelector(".sand-fill");if(!I)throw new Error("Completed sand layer was not found.");const H=I;function J(){const e=h.getBoundingClientRect(),i=Math.min(window.devicePixelRatio||1,2);h.width=Math.max(1,Math.floor(e.width*i)),h.height=Math.max(1,Math.floor(k*i)),r.setTransform(i,0,0,i,0,0),m=e.width,w=S.scrollHeight;const t=Math.ceil(m/v)+1;s=new Float32Array(t),L=new Float32Array(t);for(let n=0;n<t;n+=1)L[n]=(Math.random()-.5)*7;M=[],p=0,b=0,H.style.transform="scaleY(0)",h.style.transform="translate3d(0, 0, 0)",h.hidden=!1,u.classList.remove("sand-word--settled"),x=void 0,K(),N()}function K(){const e=u.getBoundingClientRect(),i=S.getBoundingClientRect(),t=document.createElement("canvas");t.width=Math.max(1,Math.ceil(e.width)),t.height=Math.max(1,Math.ceil(e.height));const n=t.getContext("2d");if(!n)return;const a=document.createTreeWalker(u,NodeFilter.SHOW_TEXT);let o=a.nextNode();for(;o;){const l=o.textContent??"",_=o.parentElement??u,f=window.getComputedStyle(_),A=Number.parseFloat(f.fontSize),O=Number.parseFloat(f.lineHeight)||A;n.font=`${f.fontStyle} ${f.fontWeight} ${f.fontSize} ${f.fontFamily}`,n.textBaseline="alphabetic",n.fillStyle="#000";for(let g=0;g<l.length;g+=1){if(/\s/.test(l[g]))continue;const R=document.createRange();R.setStart(o,g),R.setEnd(o,g+1);const C=R.getBoundingClientRect();if(!C.width||!C.height)continue;const q=C.top-e.top+(O-A)/2+A*.8;n.fillText(l[g],C.left-e.left,q)}o=a.nextNode()}y=t,D=e.left-i.left,$=e.top-i.top,u.classList.add("sand-word--ready")}function Q(e){p=Math.min(w,p+e*Y),b=Math.max(0,Math.min(w-k,p-V));const i=p-b;for(let t=0;t<s.length;t+=1){const a=Math.max(0,i+L[t])-s[t];s[t]+=Math.sign(a)*Math.min(Math.abs(a),e*X)}for(let t=0;t<2;t+=1)for(let n=1;n<s.length-1;n+=1){const a=n+(Math.random()<.5?-1:1),o=s[n]-s[a];if(Math.abs(o)>v*1.5){const l=Math.sign(o)*Math.min(1.2,Math.abs(o)*.18);s[n]-=l,s[a]+=l}}H.style.transform=`scaleY(${b/Math.max(1,w)})`,h.style.transform=`translate3d(0, ${Math.floor(b)}px, 0)`,y&&p>=$+y.height&&u.classList.add("sand-word--settled")}function Z(e){const i=Math.min(G,Math.ceil(m/6));for(;M.length<i&&p<w;){const t=Math.random()*m,n=s[Math.min(s.length-1,Math.floor(t/v))];M.push({x:t,y:n+Math.random()*8,speed:70+Math.random()*90,colorIndex:Math.floor(Math.random()*F.length),size:Math.random()<.8?2:3})}for(const t of M){t.y+=t.speed*e;const n=s[Math.min(s.length-1,Math.floor(t.x/v))];if(t.y>n+54||t.y>k){t.x=Math.random()*m;const a=s[Math.min(s.length-1,Math.floor(t.x/v))];t.y=a+Math.random()*8,t.speed=70+Math.random()*90}}}function N(){r.clearRect(0,0,m,k),r.fillStyle=F[0],r.beginPath(),r.moveTo(0,0),r.lineTo(m,0);for(let e=s.length-1;e>=0;e-=1)r.lineTo(e*v,s[e]);r.closePath(),r.fill();for(let e=0;e<F.length;e+=1){r.beginPath();for(const i of M)i.colorIndex===e&&r.rect(i.x,i.y,i.size,i.size);r.fillStyle=F[e],r.fill()}if(y){const e=$-b;e<k&&e+y.height>0&&(r.save(),r.globalCompositeOperation="destination-out",r.drawImage(y,D,e),r.restore())}}function B(e){const i=Math.min(e-(x??e),U);if(x!==void 0&&i<W){d=requestAnimationFrame(B);return}if(x=e,Q(i/1e3),Z(i/1e3),N(),p>=w){H.style.transform="scaleY(1)",h.hidden=!0,d=void 0;return}d=requestAnimationFrame(B)}function T(){if(d!==void 0&&cancelAnimationFrame(d),J(),E.matches){u.classList.remove("sand-word--ready");return}d=requestAnimationFrame(B)}const ee=new ResizeObserver(T);ee.observe(S);document.addEventListener("visibilitychange",()=>{document.hidden?(d!==void 0&&cancelAnimationFrame(d),d=void 0):E.matches||(x=void 0,d=requestAnimationFrame(B))});E.addEventListener("change",T);T();document.fonts?.ready.then(T);
