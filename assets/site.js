/* ==========================================================================
   Portfolio template — instellingen en gedrag
   ========================================================================== */

// ---------- Instellingen: pas deze twee regels aan ----------
const SITE = {
  // true = demo-balk en demo-meldingen tonen. Zet op false voor je eigen site.
  demo: true,
  // Je Formspree-adres, bijvoorbeeld 'https://formspree.io/f/abcdwxyz'. Leeg = formulier verstuurt niets.
  formspree: ''
};

// ---------- Engelse teksten (de Nederlandse staan in de HTML zelf) ----------
const EN = {
  // Paginatitels en beschrijvingen
  title_home: `Aya Farah — Designer in Utrecht`,
  desc_home: `Aya Farah is an independent designer in Utrecht: visual identities, websites and packaging.`,
  title_privacy: `Demo portfolio · Aya Farah`,
  desc_privacy: `Information about this fictional demo portfolio.`,
  title_404: `Page not found · Aya Farah`,

  // Algemeen
  demo: `This is a <strong>demo portfolio</strong>. Aya and the projects are fictional. <a href="https://umpreneur.github.io/onlinedesk/#lang=en">Back to OnlineDesk</a> · <a href="https://umpreneur.github.io/onlinedesk/pakket.html?id=portfolio#pakketten">View the packages at OnlineDesk ↗</a>`,
  demo_form: `This is a sample form. The services and budgets belong to the fictional designer; they are not OnlineDesk prices. Messages are not sent in this demo.`,
  nav_work: `Work`,
  nav_services: `Services`,
  nav_about: `About`,
  to_top: `Back to top ↑`,
  privacy: `Privacy`,
  demo_footer: `Demo · Fictional details`,

  // Hero
  status: `Available for new projects`,
  about_title: `Hi, I'm Aya.<br>I'm a designer.`,
  intro: `I like working with type, colour and paper. Sometimes that becomes a visual identity, sometimes a website or packaging.`,
  about_p1: `My ideas usually start in a sketchbook. I try things out, move shapes around and leave out what isn't needed. You'll find a few examples below.`,
  cta_work: `View my work ↘`,
  cta_call: `Contact`,
  ph_title: `Your image here`,
  ph_sub: `A portrait or a photo of your work`,
  clients: `Clients I've worked with`,

  // Ervaring
  work_title: `My <em>work</em>`,
  f_all: `All`,
  f_web: `Web design`,
  f_pack: `Packaging`,
  p1: `Flora — identity and packaging`,
  p1t: `Brand identity · Packaging`,
  p2: `Studio Lune — website`,
  p2t: `Web design · Development`,
  p3: `Korrel — bakery identity`,
  p3t: `Logo · Visual identity · Signage`,
  p4: `Velo Utrecht — app design`,
  p5: `Ochtend — coffee packaging`,
  p5t: `Packaging · Illustration`,
  p6: `Atelier Mos — identity and print`,
  p6t: `Brand identity · Print`,

  // Diensten
  srv_title: `What I <em>do</em>`,
  srv_intro: `I design for screens and paper. These are the areas I work in.`,
  s1: `Brand identity`,
  s1d: `<p>A logo, type and colours that work together. I develop them into an identity for things like business cards, shopfronts and websites.</p>
        <ul><li>Brand strategy</li><li>Logo</li><li>Visual identity</li><li>Brand book</li></ul>`,
  s2: `Web design`,
  s2d: `<p>I arrange text and images on screen, paying attention to structure, readability and how you move between pages.</p>
        <ul><li>UX &amp; wireframes</li><li>UI design</li><li>Webflow</li><li>Framer</li></ul>`,
  s3: `Packaging`,
  s3d: `<p>A label, a box or a coffee bag. I explore how shape, material and print fit together, down to the small details.</p>
        <ul><li>Concept</li><li>Labels</li><li>Print-ready files</li></ul>`,
  s4d: `<p>I explore which images fit a design, from mood and composition to the choice of photography or illustration.</p>
        <ul><li>Campaigns</li><li>Photography</li><li>Social content</li></ul>`,

  // Contact
  contact_title: `Let's <em>talk.</em>`,
  contact_intro: `Tell me about yourself and your plans. I'll get back to you within one working day.`,
  f_name: `Name`,
  f_type: `What can I help you with?`,
  f_other: `Something else`,
  f_msg: `Tell me about your project`,
  f_send: `Send message →`,
  f_sending: `Sending…`,
  f_note: `Messages are not sent in this demo.`,
  f_thanks: `Thank you! Your message has been sent. I'll get back to you within one working day.`,
  f_error: `Something went wrong while sending. Please try again or email me directly.`,
  f_demo: `This is a demo: nothing has been sent. Once the form is connected on your own site, messages can be delivered to your inbox.`,
  f_notset: `The form isn't connected yet. Add your Formspree address in assets/site.js.`,

  // Privacy
  back: `← Back to the website`,
  pv_title: `Demo portfolio`,
  pv_updated: `Last updated: [date]`,
  pv_body: `<p>This is a demo portfolio. Aya and the projects are fictional. The contact form does not send messages.</p>`,

  // 404
  nf_title: `This page doesn't exist`,
  nf_text: `The page may have moved or the link may be wrong.`,
  nf_btn: `Back to home`
};

const NL_EXTRA = {
  f_sending: `Versturen…`,
  f_thanks: `Bedankt! Je bericht is verstuurd. Ik neem binnen één werkdag contact met je op.`,
  f_error: `Er ging iets mis bij het versturen. Probeer het opnieuw of mail me direct.`,
  f_demo: `Dit is een demo: er is niets verstuurd. Na koppeling op je eigen site kunnen berichten in je inbox worden afgeleverd.`,
  f_notset: `Het formulier is nog niet gekoppeld. Vul je Formspree-adres in bij assets/site.js.`
};

// ---------- Demo-modus ----------
document.documentElement.classList.remove('no-js');
if (!SITE.demo) document.querySelectorAll('[data-demo]').forEach(el => el.remove());

// ---------- Talen ----------
const page = document.body.dataset.page || 'home';
const i18nNodes = document.querySelectorAll('[data-i18n]');
const textNodes = document.querySelectorAll('[data-i18n-text]');
i18nNodes.forEach(n => n.dataset.nl = n.innerHTML);
textNodes.forEach(n => n.dataset.nl = n.textContent);
const descMeta = document.querySelector('meta[name=description]');
const NL_META = { title: document.title, desc: descMeta ? descMeta.content : '' };

let lang = 'nl';
const t = key => (lang === 'en' ? EN[key] : NL_EXTRA[key]) || '';

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  i18nNodes.forEach(n => {
    const en = EN[n.dataset.i18n];
    n.innerHTML = l === 'en' && en !== undefined ? en : n.dataset.nl;
  });
  const demoBar = document.querySelector('.demo-bar');
  if (l === 'nl' && demoBar && !demoBar.querySelector('a[data-od-home]')) {
    const homeLink = document.createElement('a');
    homeLink.href = 'https://umpreneur.github.io/onlinedesk/';
    homeLink.dataset.odHome = '';
    homeLink.textContent = 'Terug naar OnlineDesk';
    demoBar.append(' ', homeLink);
  }
  textNodes.forEach(n => n.textContent = l === 'en' ? EN[n.dataset.i18nText] : n.dataset.nl);
  document.querySelectorAll('a[href*="onlinedesk/pakket.html?id=portfolio"]').forEach(link => {
    const destination = new URL(link.href);
    destination.hash = 'lang=' + l;
    link.href = destination.href;
  });
  document.title = l === 'en' && EN['title_' + page] ? EN['title_' + page] : NL_META.title;
  if (descMeta) descMeta.content = l === 'en' && EN['desc_' + page] ? EN['desc_' + page] : NL_META.desc;
  document.querySelectorAll('.lang button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === l);
    b.setAttribute('aria-pressed', b.dataset.lang === l);
  });
  if (formMsg && formMsg.dataset.key) formMsg.textContent = t(formMsg.dataset.key);
  try { localStorage.setItem('lang', l); } catch (e) {}
}
document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

// ---------- Header + mobiel menu ----------
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
if (header) addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 10), { passive: true });
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', false);
  }));
}

// ---------- Inschuiven bij scrollen ----------
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => {
  // Wat direct in beeld staat meteen tonen, de rest bij scrollen
  if (el.getBoundingClientRect().top < innerHeight) setTimeout(() => el.classList.add('in'), 60);
  else io.observe(el);
});

// ---------- Projecten filteren ----------
document.querySelectorAll('.filters button').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.filters button').forEach(b => b.classList.toggle('active', b === btn));
  const f = btn.dataset.filter;
  document.querySelectorAll('.card').forEach(card => {
    card.classList.toggle('hidden', f !== 'all' && !card.dataset.cat.includes(f));
  });
}));

// ---------- Contactformulier ----------
const form = document.querySelector('form.contact-form');
const formMsg = form ? form.querySelector('.form-msg') : null;

function showMsg(key, isError) {
  formMsg.dataset.key = key;
  formMsg.textContent = t(key);
  formMsg.classList.add('show');
  formMsg.classList.toggle('error', !!isError);
}

if (form) form.addEventListener('submit', async e => {
  e.preventDefault();
  const name = form.elements.naam, email = form.elements.email;
  const okName = name.value.trim() !== '';
  const okEmail = /\S+@\S+\.\S+/.test(email.value);
  name.classList.toggle('invalid', !okName);
  email.classList.toggle('invalid', !okEmail);
  if (!okName || !okEmail) return;

  if (!SITE.formspree) {
    if (SITE.demo) showMsg('f_demo');
    else { showMsg('f_notset', true); console.warn('Formulier: vul SITE.formspree in assets/site.js in.'); }
    return;
  }

  const btn = form.querySelector('button[type=submit]');
  const label = btn.innerHTML;
  btn.disabled = true;
  btn.textContent = t('f_sending');
  try {
    const res = await fetch(SITE.formspree, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error(res.status);
    form.reset();
    showMsg('f_thanks');
  } catch (err) {
    showMsg('f_error', true);
  } finally {
    btn.disabled = false;
    btn.innerHTML = label;
  }
});

// ---------- Taal kiezen: eerder gekozen taal, anders de taal van de browser ----------
let saved = null;
try { saved = localStorage.getItem('lang'); } catch (e) {}
setLang(saved || ((navigator.language || 'nl').toLowerCase().startsWith('nl') ? 'nl' : 'en'));

// ---------- Jaar in de footer ----------
document.querySelectorAll('.year-now').forEach(el => el.textContent = new Date().getFullYear());
