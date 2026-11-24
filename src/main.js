
import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
<div class="app-shell">

  <header class="topbar">
    <div class="brand">
      <div class="brand-mark">Ω</div>
      <div>
        <div class="brand-name">OMEGA</div>
        <div class="brand-subtitle">VENOM INTELLIGENCE SYSTEMS</div>
      </div>
    </div>
    <div class="system-status">
      <span class="status-dot"></span>
      SYSTEM ONLINE
    </div>
  </header>

  <div class="main-layout">

    <aside class="sidebar">
      <div class="sidebar-heading">COMMAND CENTER</div>
      <button class="nav-item active" data-page="Overview">◈ Overview</button>
      <button class="nav-item" data-page="Architecture">▦ Architecture</button>
      <button class="nav-item" data-page="Cybersecurity">◉ Cybersecurity</button>
      <button class="nav-item" data-page="AI Validation">◎ AI Validation</button>
      <button class="nav-item" data-page="Threat Intelligence">⌁ Threat Intelligence</button>
      <button class="nav-item" data-page="Software Testing">⌘ Software Testing</button>
      <button class="nav-item" data-page="Infrastructure">▤ Infrastructure</button>
      <button class="nav-item" data-page="Intelligence Refinery">◆ Intelligence Refinery</button>
      <button class="nav-item" data-page="Security Factory">⚙ Security Factory</button>
      <button class="nav-item" data-page="Risk Register">▥ Risk Register</button>
      <button class="nav-item" data-page="Audit Ledger">▧ Audit Ledger</button>
      <button class="nav-item" data-page="Approvals">✓ Approvals</button>
    </aside>

    <main class="content">

      <div class="page-heading">
        <div class="eyebrow">SHELBY PREDATOR ENTERPRISE / 427 PROTOCOL</div>
        <h1 class="page-title" id="page-title">OMEGA COMMAND CENTER</h1>
        <p class="page-description">
          Independent intelligence. Adversarial validation.
          Enterprise-wide security assurance.
        </p>
      </div>

      <section class="metrics-grid">
        <div class="metric-card">
          <div class="metric-label">INTELLIGENCE ENGINES</div>
          <div class="metric-value">08</div>
          <div class="metric-detail">Registered modules</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">ASSESSMENTS</div>
          <div class="metric-value">024</div>
          <div class="metric-detail">Demo assessment records</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">OPEN FINDINGS</div>
          <div class="metric-value">07</div>
          <div class="metric-detail">Demo risk records</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">SYSTEM STATUS</div>
          <div class="metric-value" style="color:#35c98a">ACTIVE</div>
          <div class="metric-detail">Local interface demonstration</div>
        </div>
      </section>

      <section class="panel-grid">

        <div class="panel">
          <div class="panel-header">
            <h2 class="panel-title">INTELLIGENCE ENGINES</h2>
            <span class="panel-tag">OMEGA CORE</span>
          </div>
          <div class="engine-list">
            ${[
              ["Architecture Red Team","Structural validation"],
              ["Cybersecurity","Security assessment"],
              ["AI Adversarial","AI reliability testing"],
              ["Infrastructure","Infrastructure validation"],
              ["Software Testing","Application quality"],
              ["Threat Intelligence","Threat classification"],
              ["Governance","Compliance and audit"],
              ["Failure Analysis","Root cause analysis"]
            ].map(([name,desc]) => `
              <div class="engine-item">
                <div>
                  <div class="engine-name">${name}</div>
                  <div class="engine-description">${desc}</div>
                </div>
                <span class="engine-status">REGISTERED</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="panel">
          <div class="panel-header">
            <h2 class="panel-title">RISK DISTRIBUTION</h2>
            <span class="panel-tag">DEMO DATA</span>
          </div>
          <div class="risk-list">
            ${[
              ["CRITICAL",20,"#ff4053"],
              ["HIGH",45,"#e32636"],
              ["MEDIUM",65,"#e8a83e"],
              ["LOW",80,"#35c98a"],
              ["INFORMATIONAL",35,"#8c99ad"]
            ].map(([name,value,color]) => `
              <div class="risk-row">
                <span class="risk-label">${name}</span>
                <div class="risk-track">
                  <div class="risk-fill"
                    style="width:${value}%;background:${color}">
                  </div>
                </div>
                <span class="risk-value">${value}%</span>
              </div>
            `).join("")}
          </div>

          <div style="margin-top:35px">
            <div class="panel-header">
              <h2 class="panel-title">INTELLIGENCE REFINERY</h2>
              <span class="panel-tag">PROCESS FLOW</span>
            </div>
            <div class="engine-list">
              <div class="engine-item">
                <span class="engine-name">01 / DATA INGRESS</span>
                <span class="engine-status">READY</span>
              </div>
              <div class="engine-item">
                <span class="engine-name">02 / CLASSIFICATION</span>
                <span class="engine-status">READY</span>
              </div>
              <div class="engine-item">
                <span class="engine-name">03 / ANALYSIS</span>
                <span class="engine-status">READY</span>
              </div>
              <div class="engine-item">
                <span class="engine-name">04 / VALIDATION</span>
                <span class="engine-status">READY</span>
              </div>
              <div class="engine-item">
                <span class="engine-name">05 / INTELLIGENCE OUTPUT</span>
                <span class="engine-status">READY</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section class="panel-grid">

        <div class="panel">
          <div class="panel-header">
            <h2 class="panel-title">SYSTEM ACTIVITY</h2>
            <span class="panel-tag">DEMO FEED</span>
          </div>
          <div class="activity-list">
            <div class="activity-item">
              <span class="activity-indicator"></span>
              <div class="activity-text">
                Omega intelligence network initialized.
                <div class="activity-time">SYSTEM EVENT / DEMO</div>
              </div>
            </div>
            <div class="activity-item">
              <span class="activity-indicator"></span>
              <div class="activity-text">
                Eight intelligence modules registered.
                <div class="activity-time">MODULE REGISTRY / DEMO</div>
              </div>
            </div>
            <div class="activity-item">
              <span class="activity-indicator"></span>
              <div class="activity-text">
                Refinery processing pipeline configured.
                <div class="activity-time">REFINERY / DEMO</div>
              </div>
            </div>
            <div class="activity-item">
              <span class="activity-indicator"></span>
              <div class="activity-text">
                Human approval controls enabled.
                <div class="activity-time">GOVERNANCE / DEMO</div>
              </div>
            </div>
          </div>
        </div>

        <div class="panel">
          <div class="panel-header">
            <h2 class="panel-title">COMMAND ACTIONS</h2>
            <span class="panel-tag">CONTROL</span>
          </div>
          <div class="engine-list">
            <button class="action-button" id="assessment">
              RUN DEMO ASSESSMENT
            </button>
            <button class="secondary-button" id="report">
              GENERATE DEMO REPORT
            </button>
            <button class="secondary-button" id="reset">
              RESET DEMONSTRATION
            </button>
            <p id="action-result" class="page-description">
              Awaiting command input.
            </p>
          </div>
        </div>

      </section>

    </main>
  </div>

  <footer class="footer">
    <span>SHELBY PREDATOR ENTERPRISE</span>
    <span>OMEGA INTELLIGENCE ENGINE</span>
    <span>427 PROTOCOL</span>
  </footer>

</div>
`;

document.querySelectorAll(".nav-item").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".nav-item")
      .forEach(item => item.classList.remove("active"));

    button.classList.add("active");

    document.querySelector("#page-title").textContent =
      button.dataset.page.toUpperCase();
  });
});

document.querySelector("#assessment").addEventListener("click", () => {
  document.querySelector("#action-result").textContent =
    "Demo assessment completed. No real security scan performed.";
});

document.querySelector("#report").addEventListener("click", () => {
  document.querySelector("#action-result").textContent =
    "Demo report generated from sample data.";
});

document.querySelector("#reset").addEventListener("click", () => {
  document.querySelector("#action-result").textContent =
    "Demonstration interface reset.";
});


