(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const X="/Resume.pdf",h={name:"Sina Roomi",role:"Computer science graduate and software developer",location:"Based in Baltimore, MD",email:"sinar.roomi@gmail.com",github:"https://github.com/S-Roomi",linkedin:"https://www.linkedin.com/in/sina-roomi"},T=document.querySelector("#app");if(!T)throw new Error("App root was not found.");T.innerHTML=`
  <div class="sand-fill" aria-hidden="true"></div>
  <canvas class="sand" aria-hidden="true"></canvas>
  <header class="site-header">
    <button class="theme-toggle" type="button" aria-label="Toggle color theme" aria-pressed="false">
      <span aria-hidden="true">☼</span>
    </button>
    <nav aria-label="Main navigation">
      <a class="active" href="#top" data-section="top">Hey</a>
      <a href="#work" data-section="work">Work</a>
      <a href="#about" data-section="about">Story</a>
      <a href="#contact" data-section="contact">Chat</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="top" aria-labelledby="hero-title">
      <div class="hero-copy">
        <h1 id="hero-title" class="sand-word">abc</h1>
        <p class="eyebrow">Software Engineer ${h.location}</p>
        <p class="intro">${h.role}. I turn complex problems into useful tools, from full-stack web applications to interactive experiments.</p>
        <div class="hero-actions">
          <a class="button" href="#work">See my work <span aria-hidden="true">↓</span></a>
          <a class="text-link" href="mailto:${h.email}">Let's talk <span aria-hidden="true">↗</span></a>
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
          <a class="email-link" href="mailto:${h.email}">
            ${h.email} <span aria-hidden="true">↗</span>
          </a>
          <a class="linkedin-link" href="${h.linkedin}" target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div class="resume-slot">
          <a class="resume-link" href="${X}" download="Sina-Roomi-Resume.pdf">
            <span class="resume-link__label">Download resume</span>
            <span class="resume-link__icon" aria-hidden="true">↓</span>
          </a>
        </div>

      </section>
  </main>

  <footer><p>© ${new Date().getFullYear()} ${h.name}</p><div><a href="${h.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a><a href="${h.github}" target="_blank" rel="noreferrer">GitHub</a></div></footer>
`;const D=document.querySelector(".sand");if(!D)throw new Error("Sand canvas was not found.");const u=D,O=u.getContext("2d",{alpha:!0});if(!O)throw new Error("Canvas 2D context is not available.");const s=O,H=window.matchMedia("(prefers-reduced-motion: reduce)"),y=["#dd5b34","#d85a35","#df603a","#d35331"],l=2,g=l*2,J=320,K=1e3/60,Q=100,C=128,Z=48,ee=160,te=300;let d,k,w=0,x=0,f=0,m=0,r=new Float32Array,I=new Float32Array,S=[],$=null,M,N=0,j=0;const p=document.querySelector(".sand-word");if(!p)throw new Error("Hero title was not found.");const _=document.querySelector(".sand-fill");if(!_)throw new Error("Completed sand layer was not found.");const A=_;function ae(){const a=document.createElement("canvas");a.width=12*l,a.height=12*l;const t=a.getContext("2d");if(!t)return a;for(let n=0;n<12;n+=1)for(let i=0;i<12;i+=1){const o=Math.random()<.7?0:1+Math.floor(Math.random()*(y.length-1));t.fillStyle=y[o],t.fillRect(i*l,n*l,l,l)}return a}const B=ae();A.style.backgroundImage=`url("${B.toDataURL()}")`;A.style.backgroundSize=`${B.width}px ${B.height}px`;function ne(){const e=u.getBoundingClientRect(),a=Math.min(window.devicePixelRatio||1,2);u.width=Math.max(1,Math.floor(e.width*a)),u.height=Math.max(1,Math.floor(C*a)),s.setTransform(a,0,0,a,0,0),s.imageSmoothingEnabled=!1,$=s.createPattern(B,"repeat"),w=e.width,x=T.scrollHeight;const t=Math.ceil(w/g)+1;r=new Float32Array(t),I=new Float32Array(t);for(let n=0;n<t;n+=1)I[n]=(Math.random()-.5)*7;S=[],f=0,m=0,A.style.clipPath="inset(0 0 100% 0)",u.style.transform="translate3d(0, 0, 0)",u.hidden=!1,p.classList.remove("sand-word--settled"),k=void 0,ie(),q()}function ie(){const e=p.getBoundingClientRect(),a=T.getBoundingClientRect(),t=document.createElement("canvas");t.width=Math.max(1,Math.ceil(e.width)),t.height=Math.max(1,Math.ceil(e.height));const n=t.getContext("2d");if(!n)return;const i=document.createTreeWalker(p,NodeFilter.SHOW_TEXT);let o=i.nextNode();for(;o;){const c=o.textContent??"",W=o.parentElement??p,b=window.getComputedStyle(W),E=Number.parseFloat(b.fontSize),V=Number.parseFloat(b.lineHeight)||E;n.font=`${b.fontStyle} ${b.fontWeight} ${b.fontSize} ${b.fontFamily}`,n.textBaseline="alphabetic",n.fillStyle="#000";for(let v=0;v<c.length;v+=1){if(/\s/.test(c[v]))continue;const P=document.createRange();P.setStart(o,v),P.setEnd(o,v+1);const F=P.getBoundingClientRect();if(!F.width||!F.height)continue;const Y=F.top-e.top+(V-E)/2+E*.8;n.fillText(c[v],F.left-e.left,Y)}o=i.nextNode()}M=t,N=e.left-a.left,j=e.top-a.top,p.classList.add("sand-word--ready")}function oe(e){f=Math.min(x,f+e*ee),m=Math.max(0,Math.min(x-C,f-Z));const a=f-m;for(let t=0;t<r.length;t+=1){const i=Math.max(0,a+I[t])-r[t];r[t]+=Math.sign(i)*Math.min(Math.abs(i),e*te)}for(let t=0;t<2;t+=1)for(let n=1;n<r.length-1;n+=1){const i=n+(Math.random()<.5?-1:1),o=r[n]-r[i];if(Math.abs(o)>g*1.5){const c=Math.sign(o)*Math.min(1.2,Math.abs(o)*.18);r[n]-=c,r[i]+=c}}A.style.clipPath=`inset(0 0 ${Math.max(0,x-m)}px 0)`,u.style.transform=`translate3d(0, ${Math.floor(m)}px, 0)`,M&&m>=j+M.height&&p.classList.add("sand-word--settled")}function re(e){const a=Math.min(J,Math.ceil(w/6));for(;S.length<a&&f<x;){const t=Math.random()*w,n=r[Math.min(r.length-1,Math.floor(t/g))];S.push({x:t,y:n+Math.random()*8,speed:70+Math.random()*90,colorIndex:Math.floor(Math.random()*y.length),size:Math.random()<.8?2:3})}for(const t of S){t.y+=t.speed*e;const n=r[Math.min(r.length-1,Math.floor(t.x/g))];if(t.y>n+54||t.y>C){t.x=Math.random()*w;const i=r[Math.min(r.length-1,Math.floor(t.x/g))];t.y=i+Math.random()*8,t.speed=70+Math.random()*90}}}function q(){s.clearRect(0,0,w,C),$?.setTransform(new DOMMatrix().translate(0,-m)),s.fillStyle=$??y[0],s.beginPath();for(let e=0;e<r.length;e+=1){const a=Math.ceil(r[e]/l)*l;s.rect(e*g,0,g,a)}s.fill();for(let e=0;e<y.length;e+=1){s.beginPath();for(const a of S)if(a.colorIndex===e){const t=Math.floor(a.x/l)*l,n=Math.floor(a.y/l)*l,i=Math.max(l,Math.round(a.size/l)*l);s.rect(t,n,i,i)}s.fillStyle=y[e],s.fill()}if(M&&!p.classList.contains("sand-word--settled")){const e=j-m;e<C&&e+M.height>0&&(s.save(),s.globalCompositeOperation="destination-out",s.drawImage(M,N,e),s.restore())}}function L(e){const a=Math.min(e-(k??e),Q);if(k!==void 0&&a<K){d=requestAnimationFrame(L);return}if(k=e,oe(a/1e3),re(a/1e3),q(),f>=x){A.style.clipPath="inset(0)",u.hidden=!0,d=void 0;return}d=requestAnimationFrame(L)}function R(){if(d!==void 0&&cancelAnimationFrame(d),ne(),H.matches){p.classList.remove("sand-word--ready");return}d=requestAnimationFrame(L)}const se=new ResizeObserver(R);se.observe(T);document.addEventListener("visibilitychange",()=>{document.hidden?(d!==void 0&&cancelAnimationFrame(d),d=void 0):H.matches||(k=void 0,d=requestAnimationFrame(L))});H.addEventListener("change",R);R();document.fonts?.ready.then(R);const z=document.querySelector(".theme-toggle"),G=[...document.querySelectorAll(".site-header [data-section]")];function U(e){document.documentElement.dataset.theme=e,z?.setAttribute("aria-pressed",String(e==="dark"))}const le=localStorage.getItem("theme");U(le==="dark"?"dark":"light");z?.addEventListener("click",()=>{const e=document.documentElement.dataset.theme==="dark"?"light":"dark";U(e),localStorage.setItem("theme",e)});const ce=G.map(e=>document.getElementById(e.dataset.section??"")).filter(e=>e!==null),de=new IntersectionObserver(e=>{const a=e.filter(t=>t.isIntersecting).sort((t,n)=>n.intersectionRatio-t.intersectionRatio)[0];if(a)for(const t of G){const n=t.dataset.section===a.target.id;t.classList.toggle("active",n),n?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")}},{rootMargin:"-20% 0px -55%",threshold:[0,.15,.35,.6]});for(const e of ce)de.observe(e);
