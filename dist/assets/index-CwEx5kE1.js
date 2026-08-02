(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();const ne="/Resume.pdf",p={name:"Sina Roomi",role:"Computer science graduate and software developer",location:"Based in Baltimore, MD",email:"sinar.roomi@gmail.com",github:"https://github.com/S-Roomi",linkedin:"https://www.linkedin.com/in/sina-roomi"},c=[{number:"01",type:"Data tracker website",title:"Arena Tracker",description:"A tool for tracking and exploring arena data in one focused, easy-to-use place.",color:"teal",url:"https://github.com/S-Roomi/arena_tracker"},{number:"02",type:"Computer vision research",title:"Eye Blink Detection",description:"Research exploring computer-vision methods for detecting eye blinks from video.",color:"lilac",url:"https://github.com/S-Roomi/iBlink"},{number:"03",type:"Python simulation",title:"BotCT",description:"A multiplayer simulation of Blood on the Clocktower with role logic, character abilities, and Discord integration.",color:"amber",url:"https://github.com/arenvista/BotCT"}],ie=c.map((e,a)=>`
  <article class="project-card ${e.color}" data-project-index="${a}">
    <p class="project-number">${e.number}</p>
    <div>
      <p class="project-type">${e.type}</p>
      <h3>${e.title}</h3>
      <p>${e.description}</p>
    </div>
    <a href="${e.url}" target="_blank" rel="noreferrer" aria-label="View ${e.title} on GitHub">
      View on GitHub <span aria-hidden="true">↗</span>
    </a>
  </article>
`).join(""),P=document.querySelector("#app");if(!P)throw new Error("App root was not found.");P.innerHTML=`
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
        <h1 id="hero-title" class="sand-word">abc</h1>
        <p class="eyebrow">Software Engineer ${p.location}</p>
        <p class="intro">${p.role}. I turn complex problems into useful tools, from full-stack web applications to interactive experiments.</p>
        <div class="hero-actions">
          <a class="button" href="#work">See my work <span aria-hidden="true">↓</span></a>
          <a class="text-link" href="mailto:${p.email}">Let's talk <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>

    <section class="section work" id="work" aria-labelledby="work-title">
      <div class="section-heading">
        <p class="eyebrow">Selected work</p>
        <h2 id="work-title">Projects built to make ideas tangible.</h2>
      </div>
      <div class="project-carousel" role="region" aria-roledescription="carousel" aria-label="Selected projects" tabindex="0">
        <button class="carousel-control carousel-control--previous" type="button" aria-label="Previous project">←</button>
        <div class="carousel-stage">
          ${ie}
        </div>
        <button class="carousel-control carousel-control--next" type="button" aria-label="Next project">→</button>
        <div class="carousel-pagination" aria-label="Choose a project">
          ${c.map((e,a)=>`
            <button type="button" data-carousel-page="${a}" aria-label="Show ${e.title}"></button>
          `).join("")}
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
          <a class="email-link" href="mailto:${p.email}">
            ${p.email} <span aria-hidden="true">↗</span>
          </a>
          <a class="linkedin-link" href="${p.linkedin}" target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div class="resume-slot">
          <a class="resume-link" href="${ne}" target="_blank">
            <span class="resume-link__label">Download resume</span>
            <span class="resume-link__icon" aria-hidden="true">↓</span>
          </a>
        </div>

      </section>
  </main>

  <footer><p>© ${new Date().getFullYear()} ${p.name}</p><div><a href="${p.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a><a href="${p.github}" target="_blank" rel="noreferrer">GitHub</a></div></footer>
`;const W=document.querySelector(".sand");if(!W)throw new Error("Sand canvas was not found.");const f=W,G=f.getContext("2d",{alpha:!0});if(!G)throw new Error("Canvas 2D context is not available.");const s=G,z=window.matchMedia("(prefers-reduced-motion: reduce)"),M=["#dd5b34","#d85a35","#df603a","#d35331"],l=2,y=l*2,re=320,se=1e3/60,le=100,E=128,ce=48,de=160,ue=300;let h,$,k=0,S=0,v=0,g=0,r=new Float32Array,H=new Float32Array,L=[],N=null,C,X=0,_=0;const m=document.querySelector(".sand-word");if(!m)throw new Error("Hero title was not found.");const Y=document.querySelector(".sand-fill");if(!Y)throw new Error("Completed sand layer was not found.");const F=Y;function he(){const a=document.createElement("canvas");a.width=12*l,a.height=12*l;const t=a.getContext("2d");if(!t)return a;for(let o=0;o<12;o+=1)for(let n=0;n<12;n+=1){const i=Math.random()<.7?0:1+Math.floor(Math.random()*(M.length-1));t.fillStyle=M[i],t.fillRect(n*l,o*l,l,l)}return a}const I=he();F.style.backgroundImage=`url("${I.toDataURL()}")`;F.style.backgroundSize=`${I.width}px ${I.height}px`;function pe(){const e=f.getBoundingClientRect(),a=Math.min(window.devicePixelRatio||1,2);f.width=Math.max(1,Math.floor(e.width*a)),f.height=Math.max(1,Math.floor(E*a)),s.setTransform(a,0,0,a,0,0),s.imageSmoothingEnabled=!1,N=s.createPattern(I,"repeat"),k=e.width,S=P.scrollHeight;const t=Math.ceil(k/y)+1;r=new Float32Array(t),H=new Float32Array(t);for(let o=0;o<t;o+=1)H[o]=(Math.random()-.5)*7;L=[],v=0,g=0,F.style.clipPath="inset(0 0 100% 0)",f.style.transform="translate3d(0, 0, 0)",f.hidden=!1,m.classList.remove("sand-word--settled"),$=void 0,me(),V()}function me(){const e=m.getBoundingClientRect(),a=P.getBoundingClientRect(),t=document.createElement("canvas");t.width=Math.max(1,Math.ceil(e.width)),t.height=Math.max(1,Math.ceil(e.height));const o=t.getContext("2d");if(!o)return;const n=document.createTreeWalker(m,NodeFilter.SHOW_TEXT);let i=n.nextNode();for(;i;){const u=i.textContent??"",te=i.parentElement??m,x=window.getComputedStyle(te),q=Number.parseFloat(x.fontSize),ae=Number.parseFloat(x.lineHeight)||q;o.font=`${x.fontStyle} ${x.fontWeight} ${x.fontSize} ${x.fontFamily}`,o.textBaseline="alphabetic",o.fillStyle="#000";for(let w=0;w<u.length;w+=1){if(/\s/.test(u[w]))continue;const D=document.createRange();D.setStart(i,w),D.setEnd(i,w+1);const T=D.getBoundingClientRect();if(!T.width||!T.height)continue;const oe=T.top-e.top+(ae-q)/2+q*.8;o.fillText(u[w],T.left-e.left,oe)}i=n.nextNode()}C=t,X=e.left-a.left,_=e.top-a.top,m.classList.add("sand-word--ready")}function fe(e){v=Math.min(S,v+e*de),g=Math.max(0,Math.min(S-E,v-ce));const a=v-g;for(let t=0;t<r.length;t+=1){const n=Math.max(0,a+H[t])-r[t];r[t]+=Math.sign(n)*Math.min(Math.abs(n),e*ue)}for(let t=0;t<2;t+=1)for(let o=1;o<r.length-1;o+=1){const n=o+(Math.random()<.5?-1:1),i=r[o]-r[n];if(Math.abs(i)>y*1.5){const u=Math.sign(i)*Math.min(1.2,Math.abs(i)*.18);r[o]-=u,r[n]+=u}}F.style.clipPath=`inset(0 0 ${Math.max(0,S-g)}px 0)`,f.style.transform=`translate3d(0, ${Math.floor(g)}px, 0)`,C&&g>=_+C.height&&m.classList.add("sand-word--settled")}function ge(e){const a=Math.min(re,Math.ceil(k/6));for(;L.length<a&&v<S;){const t=Math.random()*k,o=r[Math.min(r.length-1,Math.floor(t/y))];L.push({x:t,y:o+Math.random()*8,speed:70+Math.random()*90,colorIndex:Math.floor(Math.random()*M.length),size:Math.random()<.8?2:3})}for(const t of L){t.y+=t.speed*e;const o=r[Math.min(r.length-1,Math.floor(t.x/y))];if(t.y>o+54||t.y>E){t.x=Math.random()*k;const n=r[Math.min(r.length-1,Math.floor(t.x/y))];t.y=n+Math.random()*8,t.speed=70+Math.random()*90}}}function V(){s.clearRect(0,0,k,E),N?.setTransform(new DOMMatrix().translate(0,-g)),s.fillStyle=N??M[0],s.beginPath();for(let e=0;e<r.length;e+=1){const a=Math.ceil(r[e]/l)*l;s.rect(e*y,0,y,a)}s.fill();for(let e=0;e<M.length;e+=1){s.beginPath();for(const a of L)if(a.colorIndex===e){const t=Math.floor(a.x/l)*l,o=Math.floor(a.y/l)*l,n=Math.max(l,Math.round(a.size/l)*l);s.rect(t,o,n,n)}s.fillStyle=M[e],s.fill()}if(C&&!m.classList.contains("sand-word--settled")){const e=_-g;e<E&&e+C.height>0&&(s.save(),s.globalCompositeOperation="destination-out",s.drawImage(C,X,e),s.restore())}}function R(e){const a=Math.min(e-($??e),le);if($!==void 0&&a<se){h=requestAnimationFrame(R);return}if($=e,fe(a/1e3),ge(a/1e3),V(),v>=S){F.style.clipPath="inset(0)",f.hidden=!0,h=void 0;return}h=requestAnimationFrame(R)}function B(){if(h!==void 0&&cancelAnimationFrame(h),pe(),z.matches){m.classList.remove("sand-word--ready");return}h=requestAnimationFrame(R)}const be=new ResizeObserver(B);be.observe(P);document.addEventListener("visibilitychange",()=>{document.hidden?(h!==void 0&&cancelAnimationFrame(h),h=void 0):z.matches||($=void 0,h=requestAnimationFrame(R))});z.addEventListener("change",B);B();document.fonts?.ready.then(B);const j=document.querySelector(".project-carousel"),J=[...document.querySelectorAll(".project-card")],K=[...document.querySelectorAll("[data-carousel-page]")],U=document.querySelector(".carousel-status");let d=0,A,O=!1;function ve(e){let a=e-d;return a>c.length/2&&(a-=c.length),a<-c.length/2&&(a+=c.length),a}function b(e){d=(e+c.length)%c.length;for(const[a,t]of J.entries()){const o=ve(a);t.dataset.position=o===0?"active":o<0?"previous":"next",t.setAttribute("aria-label",`Project ${a+1} of ${c.length}: ${c[a].title}`),t.querySelector("a").tabIndex=o===0?0:-1}for(const[a,t]of K.entries()){const o=a===d;t.classList.toggle("active",o),t.setAttribute("aria-pressed",String(o))}U&&(U.textContent=`Project ${d+1} of ${c.length}: ${c[d].title}`)}document.querySelector(".carousel-control--previous")?.addEventListener("click",()=>{b(d-1)});document.querySelector(".carousel-control--next")?.addEventListener("click",()=>{b(d+1)});for(const e of K)e.addEventListener("click",()=>b(Number(e.dataset.carouselPage)));for(const[e,a]of J.entries())a.addEventListener("click",t=>{if(O)return;const o=t.target instanceof Element?t.target.closest("a"):null;o&&e===d||(o&&t.preventDefault(),b(e))});j?.addEventListener("keydown",e=>{e.key==="ArrowLeft"?(e.preventDefault(),b(d-1)):e.key==="ArrowRight"&&(e.preventDefault(),b(d+1))});j?.addEventListener("pointerdown",e=>{e.isPrimary&&(A=e.clientX)});j?.addEventListener("pointerup",e=>{if(A===void 0)return;const a=e.clientX-A;A=void 0,!(Math.abs(a)<45)&&(O=!0,b(d+(a<0?1:-1)),queueMicrotask(()=>{O=!1}))});j?.addEventListener("pointercancel",()=>{A=void 0});b(0);const Q=document.querySelector(".theme-toggle"),Z=[...document.querySelectorAll(".site-header [data-section]")];function ee(e){document.documentElement.dataset.theme=e,Q?.setAttribute("aria-pressed",String(e==="dark"))}const ye=localStorage.getItem("theme");ee(ye==="dark"?"dark":"light");Q?.addEventListener("click",()=>{const e=document.documentElement.dataset.theme==="dark"?"light":"dark";ee(e),localStorage.setItem("theme",e)});const xe=Z.map(e=>document.getElementById(e.dataset.section??"")).filter(e=>e!==null),we=new IntersectionObserver(e=>{const a=e.filter(t=>t.isIntersecting).sort((t,o)=>o.intersectionRatio-t.intersectionRatio)[0];if(a)for(const t of Z){const o=t.dataset.section===a.target.id;t.classList.toggle("active",o),o?t.setAttribute("aria-current","page"):t.removeAttribute("aria-current")}},{rootMargin:"-20% 0px -55%",threshold:[0,.15,.35,.6]});for(const e of xe)we.observe(e);
