// ═══════════════════════════════════════════
//  CyberPod — Sri Lanka Cyber Dashboard
//  Incident data sourced from FalconFeeds.io,
//  Dark Web Informer, BreachForums screenshots,
//  and verified news outlets.
// ═══════════════════════════════════════════

const incidents = [
  {
    date: "2020-05-25", year: 2020,
    target: "Sri Lanka Telecom (SLT)",
    sector: "Telecom", type: "Ransomware Attempt",
    confidence: "confirmed",
    description: "Attempted REvil ransomware attack detected and contained. Only a few internal IT systems touched; customer data reportedly not impacted.",
    severity: 2, dotColor: "#00ff88",
    sources: ["SLT Official Statement", "EconomyNext", "ReadMe.lk"]
  },
  {
    date: "2021-02-06", year: 2021,
    target: "LK Domain Registry",
    sector: "Government Infrastructure", type: "DNS Hijack / Redirection",
    confidence: "confirmed",
    description: "Malicious DNS redirection affected many Sri Lankan government websites. IPs changed to redirect visitors. No data exfiltration confirmed.",
    severity: 2, dotColor: "#00d4ff",
    sources: ["Daily Mirror", "NewsFirst", "LK Domain Registry Statement"]
  },
  {
    date: "2022-04-02", year: 2022,
    target: "PayHere",
    sector: "Fintech / Payments", type: "Data Breach",
    confidence: "confirmed",
    description: "Cyberattack caused ~36h outage. Over 1.5M records and ~65GB exposed including emails, phone numbers, payment data.",
    severity: 4, dotColor: "#ff4444",
    sources: ["PayHere Official Blog", "ReadMe.lk", "EconomyNext", "Sri Lanka CERT"]
  },
  {
    date: "2022-04-20", year: 2022,
    target: "Sri Lanka Bureau of Foreign Employment",
    sector: "Government", type: "Data Leak Claim",
    confidence: "claimed",
    description: "Group 'LulzSecSL' claimed database leak including emails and passwords. No official SLBFE confirmation found.",
    severity: 2, dotColor: "#ff8c00",
    sources: ["The Morning (Sri Lanka)"]
  },
  {
    date: "2022-12-28", year: 2022,
    target: "Ministry of Education",
    sector: "Government / Education", type: "Data Sale (Forum)",
    confidence: "confirmed",
    description: "Posted by 'kelvinsecurity' on hacker forum. 12,398 files totaling 10.2 GB including admin login access, databases (XLS, SQL) and personal documents.",
    severity: 3, dotColor: "#ff4444",
    evidence: "FlCwX8_aEAAnaRc.jpg",
    sources: ["FalconFeeds.io (@FalconFeedsio)", "BreachForums Screenshot"]
  },
  {
    date: "2023-02-25", year: 2023,
    target: "Central Bank of Sri Lanka (CBSL)",
    sector: "Banking / Finance", type: "Admin Data Leak Claim",
    confidence: "claimed",
    description: "Forum user claimed leak of 32 admin credentials from cbsl.gov.lk. No official CBSL response found.",
    severity: 3, dotColor: "#ff8c00",
    evidence: "Fpyw7axXwAEWhnW.png",
    sources: ["FalconFeeds.io (@FalconFeedsio)", "Hacker Forum Screenshot"]
  },
  {
    date: "2023-08-26", year: 2023,
    target: "Gov.lk Email System (ICTA)",
    sector: "Government", type: "Ransomware",
    confidence: "confirmed",
    description: "Ransomware destroyed ~5,000 govt email accounts. 3 months of data wiped. Root cause: Exchange 2013 + zero offline backups.",
    severity: 5, dotColor: "#ff4444",
    sources: ["ICTA Official Statement", "Daily FT (ft.lk)", "EconomyNext", "NewsFirst"]
  },
  {
    date: "2024-04-04", year: 2024,
    target: "Ministry of Education (Website)",
    sector: "Government", type: "Website Compromise",
    confidence: "confirmed",
    description: "Website hacked by a local individual. CERT confirmed: missing patches and no vulnerability assessments.",
    severity: 2, dotColor: "#00d4ff",
    sources: ["Ada Derana", "Sri Lanka CERT Confirmation", "Daily Mirror"]
  },
  {
    date: "2024-05-07", year: 2024,
    target: "Lal Construction & Engineering",
    sector: "Private / Construction", type: "Ransomware",
    confidence: "confirmed",
    description: "RansomHub ransomware group added Lal Engineering to their dark web portal. 100GB data size, 210 visits on leak page.",
    severity: 3, dotColor: "#ff4444",
    evidence: "GM_CyeGWcAE5Gnx.jpg",
    sources: ["FalconFeeds.io (@FalconFeedsio)", "RansomHub Dark Web Portal"]
  },
  {
    date: "2024-05-10", year: 2024,
    target: "PickMe (ride-hailing)",
    sector: "Tech / Transport", type: "Data Leak Claim (Refuted)",
    confidence: "claimed",
    description: "4M record leak claim resurfaced from 2020 data. PickMe publicly refuted, said post overstated or repackaged old issue.",
    severity: 1, dotColor: "#475569",
    sources: ["PickMe Official Response", "ReadMe.lk"]
  },
  {
    date: "2024-07-08", year: 2024,
    target: "Airport & Aviation Services Sri Lanka",
    sector: "Critical Infrastructure", type: "Data Breach (Forum)",
    confidence: "confirmed",
    description: "BreachForums post: 7,083 records including slot IDs, login IDs, passenger details, passport numbers. 2.66MB compressed, 12.86MB uncompressed.",
    severity: 4, dotColor: "#ff4444",
    evidence: "GR9s43TX0AAp2Rb.jpg",
    sources: ["FalconFeeds.io (@FalconFeedsio)", "BreachForums Screenshot"]
  },
  {
    date: "2024-08-22", year: 2024,
    target: "Dept. of Agrarian Development",
    sector: "Government / Agriculture", type: "Data Breach (Forum)",
    confidence: "confirmed",
    description: "Actor 'SilkFin' (GOD User) posted full farmer database from agrariandept.gov.lk on BreachForums. Database covers 1,450,000 farmers with NIC numbers and field data.",
    severity: 4, dotColor: "#ff4444",
    evidence: "incident-000500.png",
    sources: ["Daily Dark Web", "BreachForums Screenshot"]
  },
  {
    date: "2025-03-20", year: 2025,
    target: "Cargills Bank",
    sector: "Banking / Finance", type: "Ransomware / Data Breach",
    confidence: "confirmed",
    description: "HUNTERS INTERNATIONAL ransomware. Over 1M files (~1.9 TB) exfiltrated. Legal action sought to suppress leaked data.",
    severity: 5, dotColor: "#ff4444",
    evidence: "GmfbOcEa0AAaEIq.jpg",
    sources: ["FalconFeeds.io (@FalconFeedsio)", "Sunday Times", "The Morning", "ReadMe.lk"]
  },
  {
    date: "2025-04-05", year: 2025,
    target: "WishQue (e-commerce)",
    sector: "E-Commerce", type: "Data Breach (Forum)",
    confidence: "confirmed",
    description: "BreachForums post: 19.7M lines of data including names, emails, phones, credit cards. Breached March 30, 2025. Full SQL database leaked.",
    severity: 4, dotColor: "#ff4444",
    evidence: "GntjluYa4AAcMnb.jpg",
    sources: ["FalconFeeds.io (@FalconFeedsio)", "BreachForums Screenshot"]
  },
  {
    date: "2025-04-24", year: 2025,
    target: "Ministry of Public Security",
    sector: "Government", type: "Website Hack",
    confidence: "confirmed",
    description: "Ministry website compromised via outdated CMS plugins. No confirmed data breach but major reputational damage.",
    severity: 2, dotColor: "#00d4ff",
    sources: ["ReadMe.lk"]
  },
  {
    date: "2025-05-26", year: 2025,
    target: "Department of Pensions",
    sector: "Government", type: "Ransomware",
    confidence: "confirmed",
    description: "Cloak ransomware. Initially posted as pe*.lk on Apr 2, 2025. Full domain revealed May 26 with 617GB of pensioner data uploaded for download.",
    severity: 5, dotColor: "#ff4444",
    evidence: "Gr79QgwW8AAslZZ.jpg",
    sources: ["FalconFeeds.io (@FalconFeedsio)", "Dept. of Pensions Press Release", "Sunday Times", "Newswire.lk", "BlackFog"]
  },
  {
    date: "2025-05-27", year: 2025,
    target: "VS One Technology",
    sector: "Private / IT Services", type: "Ransomware",
    confidence: "confirmed",
    description: "Nova ransomware group. 20GB compromised data. Group announced intent to publish within 8-9 days.",
    severity: 3, dotColor: "#ff4444",
    evidence: "Gr7mmeSWgAAgO31.jpg",
    sources: ["FalconFeeds.io (@FalconFeedsio)", "Nova Ransomware Portal"]
  },
  {
    date: "2025-06-01", year: 2025,
    target: "NWSDB (Water Board)",
    sector: "Critical Infrastructure", type: "SMS Gateway Breach",
    confidence: "confirmed",
    description: "SMS gateway hijacked — Bitcoin extortion messages sent from NWSDB's official trusted short code to ~8,000 customers.",
    severity: 3, dotColor: "#ff8c00",
    sources: ["NWSDB Confirmation", "Sunday Times", "Daily News", "Ada Derana"]
  },
  {
    date: "2025-08-11", year: 2025,
    target: "Ministry of Health",
    sector: "Government / Healthcare", type: "Data Sale (Forum)",
    confidence: "claimed",
    description: "398,769 records from health.gov.lk for sale at $300. Actor 'Kazu' (GOD user, Rep 35) demanded $3,000 ransom. No official response.",
    severity: 3, dotColor: "#ff8c00",
    evidence: "1342598729873659872312.webp",
    sources: ["FalconFeeds.io (@FalconFeedsio)", "Daily Dark Web", "BreachForums Screenshot"]
  },
  {
    date: "2025-09-15", year: 2025,
    target: "Ministry of Finance (Data Claim)",
    sector: "Government / Finance", type: "Data + Access Sale Claim",
    confidence: "claimed",
    description: "Full database + RDP/SSH root access to core servers for $4,000 BTC. Includes plain text passwords, salary grades, domain admin privileges. Actor joined Sep 2025, 1 post.",
    severity: 5, dotColor: "#ff8c00",
    evidence: "srilanka.webp",
    sources: ["Daily Dark Web", "BreachForums Screenshot"]
  },
  {
    date: "2025-11-07", year: 2025,
    target: "Provincial Dept. of Health Services (NW)",
    sector: "Government / Healthcare", type: "Ransomware",
    confidence: "confirmed",
    description: "Kryptos ransomware group targeted healthdept.nw.gov.lk. 145 institutions, 439 field clinics, 850 medical officers affected.",
    severity: 4, dotColor: "#ff4444",
    evidence: "G5GNi7db0AAqI97.jpg",
    sources: ["FalconFeeds.io (@FalconFeedsio)", "Kryptos Ransomware Portal"]
  },
  {
    date: "2026-03-30", year: 2026,
    target: "NKAR Travels & Tours",
    sector: "Private / Tourism", type: "Ransomware",
    confidence: "confirmed",
    description: "Payload ransomware group. 60GB compromised data. Group intended to publish within 7-8 days.",
    severity: 2, dotColor: "#ff4444",
    evidence: "HErRq7PbgAAvAkE.jpg",
    sources: ["FalconFeeds.io (@FalconFeedsio)", "Payload Ransomware Portal"]
  },
  {
    date: "2026-04-03", year: 2026,
    target: "Provincial Dept. of Education (Northern)",
    sector: "Government / Education", type: "Data Sale (Forum)",
    confidence: "confirmed",
    description: "edudept.np.gov.lk — Education Management Information System. Teacher details, school lists, student data for $50. Actor 'Citizen' posted with full SQL samples.",
    severity: 4, dotColor: "#ff4444",
    evidence: "04-03-2026-09-e1775212047790.webp",
    sources: ["Daily Dark Web", "BreachForums Screenshot"]
  },
  {
    date: "2026-04-17", year: 2026,
    target: "Ministry of Public Administration",
    sector: "Government", type: "Data Sale (Forum)",
    confidence: "claimed",
    description: "pubad.gov.lk data listed for $200. Includes full names, NIC numbers, hashed passwords, internal govt documents. Posted by 'whi6ami'.",
    severity: 4, dotColor: "#ff8c00",
    evidence: "HGK36IGaQAAV9WM.jpg",
    sources: ["FalconFeeds.io (@FalconFeedsio)", "Tamil Guardian", "Dark Web Forum Screenshot"]
  },
  {
    date: "2026-04-22", year: 2026,
    target: "Dept. of External Resources (Finance Ministry)",
    sector: "Government / Finance", type: "Financial Cybercrime",
    confidence: "confirmed",
    description: "Hackers siphoned US$2.5M from foreign debt repayment to Australia. Email system infiltrated. CID, FIU investigating.",
    severity: 5, dotColor: "#ff4444",
    sources: ["Finance Ministry Official Statement", "NewsFirst", "Ada Derana", "Newswire.lk", "EconomyNext"]
  }
];

incidents.sort((a,b) => new Date(a.date) - new Date(b.date));

// ── CHART DEFAULTS ───────────────────────
Chart.defaults.color = '#94a3b8';
Chart.defaults.borderColor = 'rgba(0,212,255,0.08)';
Chart.defaults.font.family = 'Inter, sans-serif';

const COLORS = {
  cyan: '#00d4ff', green: '#00ff88', red: '#ff4444',
  orange: '#ff8c00', purple: '#a855f7', muted: '#475569'
};

function incidentsByYear() {
  const byYear = {};
  for (const inc of incidents) {
    if (!byYear[inc.year]) byYear[inc.year] = { confirmed: 0, claimed: 0 };
    if (inc.confidence === 'confirmed') byYear[inc.year].confirmed++;
    else byYear[inc.year].claimed++;
  }
  return byYear;
}

function buildYearChart() {
  const ctx = document.getElementById('chart-year').getContext('2d');
  const byYear = incidentsByYear();
  const labels = Object.keys(byYear).sort();
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        { label: 'Confirmed', data: labels.map(y => byYear[y].confirmed), backgroundColor: 'rgba(0,255,136,0.7)', borderRadius: 6 },
        { label: 'Claimed', data: labels.map(y => byYear[y].claimed), backgroundColor: 'rgba(255,140,0,0.7)', borderRadius: 6 }
      ]
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top' } }, scales: { x: { stacked: true, grid: { display: false } }, y: { stacked: true, ticks: { stepSize: 1 } } } }
  });
}

function buildTypeChart() {
  const ctx = document.getElementById('chart-type').getContext('2d');
  const tc = {};
  for (const i of incidents) { const t = i.type.split('(')[0].split('/')[0].trim(); tc[t] = (tc[t]||0)+1; }
  new Chart(ctx, {
    type: 'doughnut',
    data: { labels: Object.keys(tc), datasets: [{ data: Object.values(tc), backgroundColor: [COLORS.red,COLORS.orange,COLORS.cyan,COLORS.green,COLORS.purple,'#ec4899','#f59e0b','#3b82f6','#14b8a6','#6366f1'], borderWidth: 2, borderColor: '#0d1421' }] },
    options: { responsive: true, maintainAspectRatio: false, cutout: '62%', plugins: { legend: { position: 'right', labels: { boxWidth: 12, font: { size: 11 } } } } }
  });
}

function buildSectorChart() {
  const ctx = document.getElementById('chart-sector').getContext('2d');
  const sc = {};
  for (const i of incidents) { const s = i.sector.split('/')[0].trim(); sc[s] = (sc[s]||0)+1; }
  const sorted = Object.entries(sc).sort((a,b) => b[1]-a[1]);
  new Chart(ctx, {
    type: 'bar',
    data: { labels: sorted.map(s=>s[0]), datasets: [{ label: 'Incidents', data: sorted.map(s=>s[1]), backgroundColor: sorted.map((_,i) => [COLORS.red,COLORS.orange,COLORS.cyan,COLORS.green,COLORS.purple,COLORS.muted,'#ec4899','#f59e0b'][i%8]), borderRadius: 6 }] },
    options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { ticks: { stepSize: 1 } }, y: { grid: { display: false } } } }
  });
}

function buildSeverityChart() {
  const ctx = document.getElementById('chart-severity').getContext('2d');
  const data = incidents.map(i => ({ x: i.date, y: i.severity, label: i.target }));
  new Chart(ctx, {
    type: 'line',
    data: { datasets: [{ label: 'Severity', data, parsing: { xAxisKey: 'x', yAxisKey: 'y' }, borderColor: COLORS.cyan, backgroundColor: 'rgba(0,212,255,0.08)', pointBackgroundColor: data.map(d => d.y>=5?COLORS.red:d.y>=3?COLORS.orange:COLORS.cyan), pointRadius: 5, pointHoverRadius: 8, fill: true, tension: 0.3 }] },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { callbacks: { title: c=>c[0].raw.label, label: c=>`Severity: ${c.raw.y}/5` } } }, scales: { x: { type: 'time', time: { unit: 'quarter', tooltipFormat: 'MMM yyyy' }, grid: { display: false } }, y: { min: 0, max: 5, ticks: { stepSize: 1 } } } }
  });
}

// ── TIMELINE WITH SOURCE TAGS ────────────
function renderTimeline(filter = 'all') {
  const container = document.getElementById('timeline-container');
  container.innerHTML = '';
  const filtered = filter === 'all' ? incidents :
    filter === 'confirmed' ? incidents.filter(i => i.confidence === 'confirmed') :
    incidents.filter(i => i.confidence === 'claimed');

  filtered.forEach((inc, idx) => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.style.animationDelay = `${idx * 0.05}s`;

    const badgeClass = inc.confidence === 'confirmed' ? 'badge-confirmed' : 'badge-claimed';
    const badgeLabel = inc.confidence === 'confirmed' ? '✓ Confirmed' : '? Claimed';

    const sourceTags = (inc.sources || []).map(s =>
      `<span class="source-tag">📰 ${s}</span>`
    ).join('');

    const evidenceThumb = inc.evidence
      ? `<div class="timeline-evidence" onclick="openLightbox('${inc.evidence}','${inc.target.replace(/'/g,"\\'")}')"><img src="${inc.evidence}" alt="${inc.target}" loading="lazy"/><span class="ev-label">🖼 View Evidence</span></div>`
      : '';

    item.innerHTML = `
      <div class="timeline-dot" style="--dot-color: ${inc.dotColor}"></div>
      <div class="timeline-card">
        <div class="timeline-meta">
          <span class="timeline-date">${inc.date}</span>
          <span class="badge ${badgeClass}">${badgeLabel}</span>
          <span class="badge type-badge">${inc.type}</span>
        </div>
        <div class="timeline-target">${inc.target}</div>
        <div class="timeline-desc" style="margin-top:0.5rem;">${inc.description}</div>
        ${evidenceThumb}
        ${sourceTags ? `<div class="source-links"><span class="sources-label">Sources:</span>${sourceTags}</div>` : ''}
      </div>
    `;
    container.appendChild(item);
  });
}

function openLightbox(src, caption) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  document.getElementById('lightbox-caption').textContent = caption;
  // Charts (data URLs) get stretched to fill viewport
  if (src.startsWith('data:')) {
    img.classList.add('chart-zoom');
  } else {
    img.classList.remove('chart-zoom');
  }
  lb.classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderTimeline(btn.dataset.filter);
    });
  });
}

function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  window.addEventListener('scroll', () => {
    const total = document.body.scrollHeight - window.innerHeight;
    bar.style.width = (window.scrollY / total * 100) + '%';
  });
}

function animateCounter(el, target, suffix = '') {
  const duration = 1500, start = performance.now();
  const isFloat = String(target).includes('.');
  const update = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = (isFloat ? (target * eased).toFixed(1) : Math.round(target * eased)) + suffix;
    if (p < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

function initCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !e.target.dataset.counted) {
        e.target.dataset.counted = '1';
        animateCounter(e.target, parseFloat(e.target.dataset.target), e.target.dataset.suffix || '');
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.count-up').forEach(el => obs.observe(el));
}

function initNav() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const t = document.querySelector(link.getAttribute('href'));
      if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// ── CRITICALITY DASHBOARD: THREAT ACTORS ──
function extractActors() {
  const actorMap = {
    'REvil': ['REvil'], 'Cloak': ['Cloak'], 'Hunters International': ['HUNTERS','Hunters International'],
    'Nova': ['Nova'], 'RansomHub': ['RansomHub'], 'Kryptos': ['Kryptos'],
    'Payload': ['Payload'], 'kelvinsecurity': ['kelvinsecurity'], 'SilkFin': ['SilkFin'],
    'Kazu': ['Kazu'], 'whi6ami': ['whi6ami'], 'LulzSecSL': ['LulzSecSL'],
    'DNI': ['DNI']
  };
  const counts = {};
  for (const inc of incidents) {
    for (const [name, keywords] of Object.entries(actorMap)) {
      if (keywords.some(k => inc.description.includes(k) || inc.target.includes(k))) {
        counts[name] = (counts[name] || 0) + 1;
      }
    }
  }
  return counts;
}

function buildActorChart() {
  const ctx = document.getElementById('chart-actors');
  if (!ctx) return;
  const actors = extractActors();
  const sorted = Object.entries(actors).sort((a,b) => b[1]-a[1]);
  const colors = sorted.map((_,i) => [
    '#ff4444','#ff8c00','#00d4ff','#00ff88','#a855f7','#ec4899','#f59e0b','#3b82f6','#14b8a6','#6366f1','#ef4444','#8b5cf6','#06b6d4'
  ][i % 13]);
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sorted.map(s => s[0]),
      datasets: [{ label: 'Incidents', data: sorted.map(s => s[1]), backgroundColor: colors, borderRadius: 6 }]
    },
    options: {
      indexAxis: 'y', responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: { x: { ticks: { stepSize: 1 } }, y: { grid: { display: false } } }
    }
  });
}

// ── DATA VOLUME CHART ──
function buildVolumeChart() {
  const ctx = document.getElementById('chart-volume');
  if (!ctx) return;
  const volumeData = [
    { target: 'Cargills Bank', gb: 1945.6, label: '1.9 TB' },
    { target: 'Dept. of Pensions', gb: 617, label: '617 GB' },
    { target: 'Lal Engineering', gb: 100, label: '100 GB' },
    { target: 'PayHere', gb: 65, label: '65 GB' },
    { target: 'NKAR Travels', gb: 60, label: '60 GB' },
    { target: 'VS One Tech', gb: 20, label: '20 GB' },
    { target: 'WishQue (SQL)', gb: 15, label: '19.7M lines' },
    { target: 'Min. of Education', gb: 10.2, label: '10.2 GB' },
    { target: 'Airport & Aviation', gb: 0.013, label: '12.86 MB' },
  ];
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: volumeData.map(d => d.target),
      datasets: [{
        label: 'Data Size (GB)',
        data: volumeData.map(d => Math.log10(d.gb + 1) * 100),
        backgroundColor: volumeData.map(d => d.gb > 500 ? '#ff4444' : d.gb > 50 ? '#ff8c00' : '#00d4ff'),
        borderRadius: 6
      }]
    },
    options: {
      indexAxis: 'y', responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { callbacks: { label: (c) => volumeData[c.dataIndex].label } }
      },
      scales: {
        x: { display: false },
        y: { grid: { display: false } }
      }
    }
  });
}

// ── CONFIDENCE vs SEVERITY CHART ──
function buildConfidenceChart() {
  const ctx = document.getElementById('chart-confidence');
  if (!ctx) return;
  const confirmed = incidents.filter(i => i.confidence === 'confirmed');
  const claimed = incidents.filter(i => i.confidence === 'claimed');

  const sevBuckets = (arr) => {
    const b = [0,0,0,0,0];
    arr.forEach(i => { if(i.severity >= 1 && i.severity <= 5) b[i.severity-1]++; });
    return b;
  };

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Sev 1', 'Sev 2', 'Sev 3', 'Sev 4', 'Sev 5'],
      datasets: [
        { label: 'Confirmed', data: sevBuckets(confirmed), backgroundColor: 'rgba(0,255,136,0.7)', borderRadius: 6 },
        { label: 'Claimed', data: sevBuckets(claimed), backgroundColor: 'rgba(255,140,0,0.7)', borderRadius: 6 }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'top' } },
      scales: { x: { grid: { display: false } }, y: { ticks: { stepSize: 1 } } }
    }
  });
}

// ── ATTACK EVOLUTION CHART ──
function buildEvolutionChart() {
  const ctx = document.getElementById('chart-evolution');
  if (!ctx) return;
  const categories = {
    'Defacement/DNS': ['DNS','Website Compromise','Website Hack'],
    'Data Breach/Sale': ['Data Breach','Data Sale','Data Leak','Admin Data Leak','Data + Access'],
    'Ransomware': ['Ransomware'],
    'Financial Crime': ['Financial Cybercrime','SMS Gateway']
  };
  const years = [...new Set(incidents.map(i => i.year))].sort();
  const datasets = Object.entries(categories).map(([cat, keywords], idx) => {
    const colors = ['#00d4ff','#ff8c00','#ff4444','#a855f7'];
    return {
      label: cat,
      data: years.map(y => incidents.filter(i => i.year === y && keywords.some(k => i.type.includes(k))).length),
      backgroundColor: colors[idx] + '99',
      borderColor: colors[idx],
      borderWidth: 2,
      fill: true,
      tension: 0.3
    };
  });

  new Chart(ctx, {
    type: 'line',
    data: { labels: years.map(String), datasets },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'top', labels: { boxWidth: 12, font: { size: 10 } } } },
      scales: {
        x: { grid: { display: false } },
        y: { stacked: true, ticks: { stepSize: 1 } }
      }
    }
  });
}

// ── INCIDENT REGISTER TABLE ──
function extractActor(inc) {
  const actors = ['REvil','Cloak','Hunters International','Nova','RansomHub','Kryptos','Payload','kelvinsecurity','SilkFin','Kazu','whi6ami','LulzSecSL','Citizen'];
  for (const a of actors) {
    if (inc.description.includes(a)) return a;
  }
  return '—';
}

function extractVolume(inc) {
  const desc = inc.description;
  const patterns = [
    /(\d+\.?\d*)\s*TB/i, /(\d+\.?\d*)\s*terabytes?/i,
    /(\d+\.?\d*)\s*GB/i, /(\d+\.?\d*)\s*gigabytes?/i,
    /(\d[\d,.]*M)\s*(?:lines|records|files)/i,
    /(\d[\d,.]+)\s*records/i, /(\d[\d,.]+)\s*files/i
  ];
  for (const p of patterns) {
    const m = desc.match(p);
    if (m) return m[0];
  }
  return '—';
}

function sevColor(s) {
  if (s >= 5) return '#ff4444';
  if (s >= 4) return '#ff8c00';
  if (s >= 3) return '#f59e0b';
  return '#00d4ff';
}

function buildRegisterTable() {
  const tbody = document.getElementById('register-body');
  if (!tbody) return;
  tbody.innerHTML = '';
  incidents.forEach((inc, idx) => {
    const color = sevColor(inc.severity);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td style="font-family:'JetBrains Mono',monospace;color:${color};font-weight:700">${String(idx+1).padStart(2,'0')}</td>
      <td style="font-family:'JetBrains Mono',monospace;white-space:nowrap">${inc.date}</td>
      <td class="target-cell">${inc.target}</td>
      <td>${inc.sector}</td>
      <td>${inc.type}</td>
      <td style="color:${extractActor(inc) !== '—' ? '#a855f7' : 'var(--text-muted)'};font-weight:600">${extractActor(inc)}</td>
      <td style="font-family:'JetBrains Mono',monospace">${extractVolume(inc)}</td>
      <td>
        <div class="sev-bar">
          <div class="sev-fill" style="width:${inc.severity * 20}%;max-width:80px;background:${color}"></div>
          <span class="sev-num" style="color:${color}">${inc.severity}/5</span>
        </div>
      </td>
      <td class="${inc.confidence === 'confirmed' ? 'status-confirmed' : 'status-claimed'}">${inc.confidence === 'confirmed' ? '✓ CONFIRMED' : '? CLAIMED'}</td>
      <td class="${inc.evidence ? 'evidence-yes' : 'evidence-no'}">${inc.evidence ? '📸 Yes' : '—'}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ── RISK MATRIX ──
function buildRiskMatrix() {
  const grid = document.getElementById('risk-grid');
  if (!grid) return;
  grid.innerHTML = '';
  const sorted = [...incidents].sort((a,b) => b.severity - a.severity);
  sorted.forEach(inc => {
    const color = sevColor(inc.severity);
    const borderStyle = inc.confidence === 'claimed' ? 'border: 1px dashed ' + color + '66' : 'border: 1px solid ' + color + '44';
    const cell = document.createElement('div');
    cell.className = 'risk-cell';
    cell.style.cssText = borderStyle;
    cell.title = `${inc.target}\n${inc.type}\nSeverity: ${inc.severity}/5\n${inc.confidence.toUpperCase()}`;
    cell.innerHTML = `
      <div class="risk-cell-label">${inc.target.length > 18 ? inc.target.substring(0,18) + '…' : inc.target}</div>
      <div class="risk-cell-sev" style="color:${color}">${inc.severity}</div>
      <div class="risk-cell-type">${inc.year} · ${inc.type.split('(')[0].split('/')[0].trim()}</div>
    `;
    grid.appendChild(cell);
  });
}

// ── CHART ZOOM (canvas → image → lightbox) ──
function initChartZoom() {
  document.querySelectorAll('.chart-card').forEach(card => {
    const canvas = card.querySelector('canvas');
    if (!canvas) return;
    card.addEventListener('click', () => {
      const title = card.querySelector('.chart-title')?.textContent || 'Chart';
      const subtitle = card.querySelector('.chart-subtitle')?.textContent || '';
      // Create a high-res offscreen copy
      const chart = Chart.getChart(canvas);
      if (chart) {
        const scale = 3;
        const offscreen = document.createElement('canvas');
        offscreen.width = canvas.width * scale;
        offscreen.height = canvas.height * scale;
        const offCtx = offscreen.getContext('2d');
        offCtx.scale(scale, scale);
        offCtx.drawImage(canvas, 0, 0);
        openLightbox(offscreen.toDataURL('image/png', 1.0), title + ' — ' + subtitle);
      } else {
        openLightbox(canvas.toDataURL('image/png', 1.0), title + ' — ' + subtitle);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildYearChart();
  buildTypeChart();
  buildSectorChart();
  buildSeverityChart();
  buildActorChart();
  buildVolumeChart();
  buildConfidenceChart();
  buildEvolutionChart();
  buildRegisterTable();
  buildRiskMatrix();
  renderTimeline('all');
  initFilters();
  initScrollProgress();
  initCounters();
  initNav();
  initChartZoom();
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLightbox();
  });
});
