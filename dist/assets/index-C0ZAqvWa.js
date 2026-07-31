(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();const W="/Resume.pdf",d={name:"Sina Roomi",role:"Computer science graduate and software developer",location:"Based in Baltimore, MD",email:"sinar.roomi@gmail.com",github:"https://github.com/S-Roomi",linkedin:"https://www.linkedin.com/in/sina-roomi"},F=document.querySelector("#app");if(!F)throw new Error("App root was not found.");F.innerHTML=`
  <div class="sand-fill" aria-hidden="true"></div>
  <canvas class="sand" aria-hidden="true"></canvas>
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="${d.name}, home">SR<span>.</span></a>
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
        <h1 id="hero-title" class="sand-word">abc</h1>
        <p class="eyebrow">Software Engineer ${d.location}</p>
        <p class="intro">${d.role}. I turn complex problems into useful tools, from full-stack web applications to interactive experiments.</p>
        <div class="hero-actions">
          <a class="button" href="#work">See my work <span aria-hidden="true">↓</span></a>
          <a class="text-link" href="mailto:${d.email}">Let's talk <span aria-hidden="true">↗</span></a>
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
          <a class="email-link" href="mailto:${d.email}">
            ${d.email} <span aria-hidden="true">↗</span>
          </a>
          <a class="linkedin-link" href="${d.linkedin}" target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div class="resume-slot">
          <a class="resume-link" href="${W}" download="Sina-Roomi-Resume.pdf">
            <span class="resume-link__label">Download resume</span>
            <span class="resume-link__icon" aria-hidden="true">↓</span>
          </a>
        </div>

      </section>
  </main>

  <footer><p>© ${new Date().getFullYear()} ${d.name}</p><div><a href="${d.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a><a href="${d.github}" target="_blank" rel="noreferrer">GitHub</a></div></footer>
`;const I=document.querySelector(".sand");if(!I)throw new Error("Sand canvas was not found.");const u=I,N=u.getContext("2d",{alpha:!0});if(!N)throw new Error("Canvas 2D context is not available.");const l=N,j=window.matchMedia("(prefers-reduced-motion: reduce)"),y=["#dd5b34","#d85a35","#df603a","#d35331"],s=3,g=s*2,V=320,Y=1e3/60,X=100,C=128,J=48,K=160,Q=300;let h,k,v=0,x=0,f=0,m=0,r=new Float32Array,E=new Float32Array,S=[],H=null,M,_=0,D=0;const p=document.querySelector(".sand-word");if(!p)throw new Error("Hero title was not found.");const z=document.querySelector(".sand-fill");if(!z)throw new Error("Completed sand layer was not found.");const B=z;function Z(){const i=document.createElement("canvas");i.width=12*s,i.height=12*s;const e=i.getContext("2d");if(!e)return i;for(let n=0;n<12;n+=1)for(let a=0;a<12;a+=1){const o=Math.random()<.7?0:1+Math.floor(Math.random()*(y.length-1));e.fillStyle=y[o],e.fillRect(a*s,n*s,s,s)}return i}const T=Z();B.style.backgroundImage=`url("${T.toDataURL()}")`;B.style.backgroundSize=`${T.width}px ${T.height}px`;function ee(){const t=u.getBoundingClientRect(),i=Math.min(window.devicePixelRatio||1,2);u.width=Math.max(1,Math.floor(t.width*i)),u.height=Math.max(1,Math.floor(C*i)),l.setTransform(i,0,0,i,0,0),l.imageSmoothingEnabled=!1,H=l.createPattern(T,"repeat"),v=t.width,x=F.scrollHeight;const e=Math.ceil(v/g)+1;r=new Float32Array(e),E=new Float32Array(e);for(let n=0;n<e;n+=1)E[n]=(Math.random()-.5)*7;S=[],f=0,m=0,B.style.clipPath="inset(0 0 100% 0)",u.style.transform="translate3d(0, 0, 0)",u.hidden=!1,p.classList.remove("sand-word--settled"),k=void 0,te(),O()}function te(){const t=p.getBoundingClientRect(),i=F.getBoundingClientRect(),e=document.createElement("canvas");e.width=Math.max(1,Math.ceil(t.width)),e.height=Math.max(1,Math.ceil(t.height));const n=e.getContext("2d");if(!n)return;const a=document.createTreeWalker(p,NodeFilter.SHOW_TEXT);let o=a.nextNode();for(;o;){const c=o.textContent??"",q=o.parentElement??p,b=window.getComputedStyle(q),P=Number.parseFloat(b.fontSize),G=Number.parseFloat(b.lineHeight)||P;n.font=`${b.fontStyle} ${b.fontWeight} ${b.fontSize} ${b.fontFamily}`,n.textBaseline="alphabetic",n.fillStyle="#000";for(let w=0;w<c.length;w+=1){if(/\s/.test(c[w]))continue;const $=document.createRange();$.setStart(o,w),$.setEnd(o,w+1);const R=$.getBoundingClientRect();if(!R.width||!R.height)continue;const U=R.top-t.top+(G-P)/2+P*.8;n.fillText(c[w],R.left-t.left,U)}o=a.nextNode()}M=e,_=t.left-i.left,D=t.top-i.top,p.classList.add("sand-word--ready")}function ae(t){f=Math.min(x,f+t*K),m=Math.max(0,Math.min(x-C,f-J));const i=f-m;for(let e=0;e<r.length;e+=1){const a=Math.max(0,i+E[e])-r[e];r[e]+=Math.sign(a)*Math.min(Math.abs(a),t*Q)}for(let e=0;e<2;e+=1)for(let n=1;n<r.length-1;n+=1){const a=n+(Math.random()<.5?-1:1),o=r[n]-r[a];if(Math.abs(o)>g*1.5){const c=Math.sign(o)*Math.min(1.2,Math.abs(o)*.18);r[n]-=c,r[a]+=c}}B.style.clipPath=`inset(0 0 ${Math.max(0,x-m)}px 0)`,u.style.transform=`translate3d(0, ${Math.floor(m)}px, 0)`,M&&m>=D+M.height&&p.classList.add("sand-word--settled")}function ie(t){const i=Math.min(V,Math.ceil(v/6));for(;S.length<i&&f<x;){const e=Math.random()*v,n=r[Math.min(r.length-1,Math.floor(e/g))];S.push({x:e,y:n+Math.random()*8,speed:70+Math.random()*90,colorIndex:Math.floor(Math.random()*y.length),size:Math.random()<.8?2:3})}for(const e of S){e.y+=e.speed*t;const n=r[Math.min(r.length-1,Math.floor(e.x/g))];if(e.y>n+54||e.y>C){e.x=Math.random()*v;const a=r[Math.min(r.length-1,Math.floor(e.x/g))];e.y=a+Math.random()*8,e.speed=70+Math.random()*90}}}function O(){l.clearRect(0,0,v,C),H?.setTransform(new DOMMatrix().translate(0,-m)),l.fillStyle=H??y[0],l.beginPath();for(let t=0;t<r.length;t+=1){const i=Math.ceil(r[t]/s)*s;l.rect(t*g,0,g,i)}l.fill();for(let t=0;t<y.length;t+=1){l.beginPath();for(const i of S)if(i.colorIndex===t){const e=Math.floor(i.x/s)*s,n=Math.floor(i.y/s)*s,a=Math.max(s,Math.round(i.size/s)*s);l.rect(e,n,a,a)}l.fillStyle=y[t],l.fill()}if(M&&!p.classList.contains("sand-word--settled")){const t=D-m;t<C&&t+M.height>0&&(l.save(),l.globalCompositeOperation="destination-out",l.drawImage(M,_,t),l.restore())}}function A(t){const i=Math.min(t-(k??t),X);if(k!==void 0&&i<Y){h=requestAnimationFrame(A);return}if(k=t,ae(i/1e3),ie(i/1e3),O(),f>=x){B.style.clipPath="inset(0)",u.hidden=!0,h=void 0;return}h=requestAnimationFrame(A)}function L(){if(h!==void 0&&cancelAnimationFrame(h),ee(),j.matches){p.classList.remove("sand-word--ready");return}h=requestAnimationFrame(A)}const ne=new ResizeObserver(L);ne.observe(F);document.addEventListener("visibilitychange",()=>{document.hidden?(h!==void 0&&cancelAnimationFrame(h),h=void 0):j.matches||(k=void 0,h=requestAnimationFrame(A))});j.addEventListener("change",L);L();document.fonts?.ready.then(L);
