(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();const le="/Resume.pdf",f={name:"Sina Roomi",role:"Computer science graduate and software developer",location:"Based in Baltimore, MD",email:"sinar.roomi@gmail.com",github:"https://github.com/S-Roomi",linkedin:"https://www.linkedin.com/in/sina-roomi"},V=document.querySelector("#app");if(!V)throw new Error("App root was not found.");V.innerHTML=`
  <canvas class="sand" aria-hidden="true"></canvas>
  <header class="site-header">
    <a class="wordmark" href="#top" aria-label="${f.name}, home">SR<span>.</span></a>
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
        <p class="eyebrow">${f.location}</p>
        <h1 id="hero-title" class="sand-word">I build practical, <em>thoughtful</em> software.</h1>
        <p class="intro">${f.role}. I turn complex problems into useful tools, from full-stack web applications to interactive experiments.</p>
        <div class="hero-actions">
          <a class="button" href="#work">See my work <span aria-hidden="true">↓</span></a>
          <a class="text-link" href="mailto:${f.email}">Let's talk <span aria-hidden="true">↗</span></a>
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
          <a class="email-link" href="mailto:${f.email}">
            ${f.email} <span aria-hidden="true">↗</span>
          </a>
          <a class="linkedin-link" href="${f.linkedin}" target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div class="resume-slot">
          <a class="resume-link" href="${le}" download="Sina-Roomi-Resume.pdf">
            <span class="resume-link__label">Download resume</span>
            <span class="resume-link__icon" aria-hidden="true">↓</span>
          </a>
        </div>

      </section>
  </main>

  <footer><p>© ${new Date().getFullYear()} ${f.name}</p><div><a href="${f.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a><a href="${f.github}" target="_blank" rel="noreferrer">GitHub</a></div></footer>
`;const z=document.querySelector(".sand");if(!z)throw new Error("Sand canvas was not found.");const x=z,J=x.getContext("2d",{alpha:!0});if(!J)throw new Error("Canvas 2D context is not available.");const R=J,K=window.matchMedia("(prefers-reduced-motion: reduce)"),h=2,ce=3e5,de=1200,W=4,Y=24,he=4,ue=50,pe=1,H=4,fe=72,Q=["#dd5b34","#d85a35","#df603a","#d35331"];let F,N,B=0,d=new Uint8Array,c=0,p=0,Z=0,ee=0,g=new Uint8Array,L=[],M=[],I=new Uint8Array,$=[],j=new Uint8Array,U=0,_=0,P=!1,T=0,k=0,D=new Int32Array,X=new Uint8Array,b=!1,te=0,ne=0,G=0;const ae=document.querySelector(".sand-word");if(!ae)throw new Error("Hero title was not found.");const E=ae;function me(){const e=x.getBoundingClientRect(),t=Math.min(window.devicePixelRatio||1,2);x.width=Math.max(1,Math.floor(e.width*t)),x.height=Math.max(1,Math.floor(e.height*t)),R.setTransform(t,0,0,t,0,0),Z=e.width,ee=e.height,c=Math.ceil(e.width/h),p=Math.ceil(e.height/h),d=new Uint8Array(c*p),g=new Uint8Array(c*p),L=[],M=[],I=new Uint8Array(c*p),$=[],j=new Uint8Array(c*p),U=0,_=0,P=!1,T=0,k=0,D=new Int32Array(c),D.fill(-1),X=new Uint8Array(c),ge(),N=void 0,B=0,we()}function y(e,t){return e+t*c}function S(e){!d[e]||I[e]||(I[e]=1,M.push(e))}function w(e){j[e]||(j[e]=1,$.push(e))}function O(e){const t=e%c,i=Math.floor(e/c);if(i!==0)for(let a=-1;a<=1;a+=1){const n=t+a;n>=0&&n<c&&S(y(n,i-1))}}function we(){const e=document.createElement("canvas");e.width=Math.max(1,Math.ceil(Z)),e.height=Math.max(1,Math.ceil(ee));const t=e.getContext("2d");if(!t)return;const i=x.getBoundingClientRect(),a=document.createTreeWalker(E,NodeFilter.SHOW_TEXT);let n=a.nextNode();for(;n;){const r=n.textContent??"",s=n.parentElement??E,l=window.getComputedStyle(s),u=Number.parseFloat(l.fontSize),C=Number.parseFloat(l.lineHeight)||u;t.font=`${l.fontStyle} ${l.fontWeight} ${l.fontSize} ${l.fontFamily}`,t.textBaseline="alphabetic",t.fillStyle="#000";for(let m=0;m<r.length;m+=1){if(/\s/.test(r[m]))continue;const v=document.createRange();v.setStart(n,m),v.setEnd(n,m+1);const A=v.getBoundingClientRect();if(!A.width||!A.height)continue;const se=A.top-i.top+(C-u)/2+u*.8;t.fillText(r[m],A.left-i.left,se)}n=a.nextNode()}const o=t.getImageData(0,0,e.width,e.height).data;for(let r=0;r<p;r+=1)for(let s=0;s<c;s+=1){const l=Math.min(e.width-1,Math.floor(s*h+h/2)),u=Math.min(e.height-1,Math.floor(r*h+h/2));o[(l+u*e.width)*4+3]&&(g[y(s,r)]=1)}E.classList.add("sand-word--ready");for(const r of g)r||(_+=1)}function ge(){let e=Math.floor(Math.random()*(W+1));for(let t=0;t<c;t+=Y){const i=Math.min(c,t+Y),a=Math.floor(Math.random()*(W+1));for(let n=t;n<i;n+=1){const o=(n-t)/Math.max(1,i-t);X[n]=Math.round(e+(a-e)*o)}e=a}}function be(){for(;T<p;){const e=k,t=Math.min(p-1,T+X[e]);let i=D[e]+1;for(;i<=t;){D[e]=i;const a=y(e,i);if(i+=1,!g[a]&&!d[a])return a}k+=1,k===c&&(k=0,T+=1)}return-1}function ye(e){if(P)return;B+=ce*(e/1e3);const t=Math.min(de,Math.floor(B));if(t!==0){B-=t;for(let i=0;i<t;i+=1){const a=be();if(a===-1){P=!0;break}d[a]=Math.floor(Math.random()*Q.length)+1,U+=1,w(a)}U>=_&&(P=!0)}}function ve(e,t){d[t]=d[e],d[e]=0,w(e),w(t),S(t),O(e)}function xe(e,t,i){const a=[e];let n=e%c,o=Math.floor(e/c);for(;;){if(n+=t,o+=i,n<0||n>=c||o<0||o>=p){for(let s=a.length-1;s>0;s-=1){const l=a[s],u=a[s-1];d[l]=d[u],w(l),S(l)}d[e]=0,U-=1,w(e),O(e);return}const r=y(n,o);if(g[r])return;if(!d[r]){for(let s=a.length-1;s>0;s-=1){const l=a[s],u=a[s-1];d[l]=d[u],w(l),S(l)}d[r]=d[a[a.length-1]],d[e]=0,w(r),w(e),S(r),O(e);return}a.push(r)}}function ke(){if(!b||!c||!p)return;const e=Math.floor(te/h),t=Math.floor(ne/h),i=Math.ceil(pe/h),a=i**2,n=G;let o=0;G=(G+1)%H;for(let r=t-i+n;r<=t+i;r+=H)if(!(r<0||r>=p))for(let s=e-i+n;s<=e+i;s+=H){if(s<0||s>=c||o>=fe)continue;const l=s-e,u=r-t;if(l**2+u**2>a)continue;const C=y(s,r);if(!d[C])continue;let m=0,v=0;Math.abs(l)>=Math.abs(u)?m=l===0?Math.random()<.5?-1:1:Math.sign(l):v=Math.sign(u),xe(C,m,v),o+=1}}function Me(){for(const t of L){if(I[t]=0,!d[t])continue;const i=t%c,a=Math.floor(t/c);let n=-1;if(a+1<p){const o=y(i,a+1);!d[o]&&!g[o]&&(n=o)}if(n===-1&&a+1<p){const o=Math.random()>.5?-1:1;for(const r of[o,-o]){const s=i+r;if(s<0||s>=c)continue;const l=y(s,a+1);if(!d[l]&&!g[l]){n=l;break}}}n!==-1&&ve(t,n)}const e=L;L=M,M=e,M.length=0}function ie(){for(const e of $){const t=e%c,i=Math.floor(e/c);R.clearRect(t*h,i*h,h,h);const a=d[e];a&&!g[e]&&(R.fillStyle=Q[a-1],R.fillRect(t*h,i*h,h,h)),j[e]=0}$.length=0}function oe(e){const t=Math.min(e-(N??e-16.666666666666668),ue);N=e,ye(t),ke();for(let i=0;i<he;i+=1)Me();ie(),F=requestAnimationFrame(oe)}function q(){if(F!==void 0&&cancelAnimationFrame(F),me(),K.matches){E.classList.remove("sand-word--ready"),ie();return}F=requestAnimationFrame(oe)}function re(e){const t=x.getBoundingClientRect(),i=e.clientX-t.left,a=e.clientY-t.top;return i<0||i>t.width||a<0||a>t.height?!1:(te=i,ne=a,!0)}window.addEventListener("pointerdown",e=>{e.button===0&&(b=re(e))});window.addEventListener("pointermove",e=>{b&&(b=re(e))});window.addEventListener("pointerup",()=>{b=!1});window.addEventListener("pointercancel",()=>{b=!1});window.addEventListener("blur",()=>{b=!1});K.addEventListener("change",q);q();document.fonts?.ready.then(q);
