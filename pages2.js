// ── DATA ─────────────────────────────────────────────────────
var GR = [
    { code: "CS431", name: "Advanced Web Dev", inst: "Dr. Sarah Johnson", ic: "💻", clr: "#2979ff", grade: "A", pct: 95, items: [["Project 1", 90, 100], ["Project 2", 86, 100], ["Midterm Exam", 82, 100], ["Final Project", 95, 100]] },
    { code: "MATH301", name: "Advanced Mathematics", inst: "Prof. Michael Chen", ic: "📐", clr: "#ff6d00", grade: "B+", pct: 88, items: [["Problem Set 1", 82, 100], ["Problem Set 2", 86, 100], ["Midterm Exam", 88, 100], ["Final Quiz", 87, 100]] },
    { code: "CS302", name: "Machine Learning", inst: "Dr. James Wilson", ic: "🤖", clr: "#9c27b0", grade: "A", pct: 92, items: [["Assignment 1", 88, 100], ["Assignment 2", 89, 100], ["Project", 92, 100], ["Final Exam", 95, 100]] },
];
var ASGN = [
    { id: 1, code: "CS431", clr: "#e53935", name: "Web Development Project 3", desc: "Build a full-stack web app using React and Node.js", due: "Dec 15, 2024", pts: 60, st: "pending" },
    { id: 2, code: "MATH301", clr: "#ff6d00", name: "Linear Algebra Problem Set", desc: "Complete problems 1–13 from Chapter 3", due: "Dec 16, 2024", pts: 30, st: "pending" },
    { id: 3, code: "ARBLEET", clr: "#607d8b", name: "Technical Writing Essay", desc: "Write a 2,000 word essay on emerging technologies", due: "Dec 20, 2024", pts: 75, st: "pending" },
    { id: 4, code: "CS302", clr: "#9c27b0", name: "Machine Learning Assignment 2", desc: "Implement and train a neural network model", due: "Dec 12, 2024", pts: 100, st: "submitted" },
    { id: 5, code: "CS412", clr: "#e91e63", name: "Database Design Project", desc: "Design and implement a relational database", due: "Dec 22, 2024", pts: 80, st: "pending" },
    { id: 6, code: "CS431", clr: "#2979ff", name: "Semester Repo Draft", desc: "Submit a draft of your final repository documentation", due: "Nov 30, 2024", pts: 50, st: "graded", grade: "93/100" },
];
var TTE = [
    { d: 0, n: "Advanced Web Dev", c: "CS431", r: "CS Lab 101", s: 9, dur: 1.5, clr: "#2979ff" },
    { d: 0, n: "Database Systems", c: "CS412", r: "Lab 103", s: 11, dur: 1.5, clr: "#e91e63" },
    { d: 1, n: "Linear Algebra", c: "MATH301", r: "Hall 201", s: 8, dur: 1.5, clr: "#ff6d00" },
    { d: 1, n: "Machine Learning", c: "CS302", r: "AI Lab", s: 10, dur: 1.5, clr: "#9c27b0" },
    { d: 2, n: "Advanced Web Dev", c: "CS431", r: "CS Lab 101", s: 9, dur: 1.5, clr: "#2979ff" },
    { d: 2, n: "Web Dev Lab", c: "CS431L", r: "Lab 101", s: 14, dur: 1.5, clr: "#00bcd4" },
    { d: 3, n: "Linear Algebra", c: "MATH301", r: "Hall 201", s: 8, dur: 1.5, clr: "#ff6d00" },
    { d: 3, n: "Database Systems", c: "CS412", r: "Lab 103", s: 11, dur: 1.5, clr: "#e91e63" },
    { d: 3, n: "Technical Writing", c: "ARBLEET", r: "ENG Room", s: 14.5, dur: 1.5, clr: "#607d8b" },
    { d: 4, n: "Advanced Web Dev", c: "CS431", r: "CS Lab 101", s: 9, dur: 1.5, clr: "#2979ff" },
    { d: 4, n: "Database Systems", c: "CS412", r: "Lab 103", s: 11, dur: 1.5, clr: "#e91e63" },
];
var ADE = [
    { code: "CS431", name: "Advanced Web Development", sched: "MWF 9:00–10:30", room: "CS Lab 101", ic: "💻", clr: "#2979ff" },
    { code: "MATH301", name: "Linear Algebra", sched: "TTH 8:00–9:30", room: "Hall 201", ic: "📐", clr: "#ff6d00" },
];
var ADA = [
    { code: "CS412", name: "Database Systems", inst: "Dr. Bob Rodriguez", sched: "MWF 11:00–12:30", enrolled: 20, total: 30, full: false, credits: 3 },
    { code: "CS302", name: "Machine Learning", inst: "Dr. James Wilson", sched: "TTH 10:00–11:30", enrolled: 30, total: 30, full: true, credits: 3 },
    { code: "ARBLEET", name: "Technical Writing", inst: "Prof. Laila Ahmadi", sched: "MWF 1:00–2:00", enrolled: 20, total: 30, full: false, credits: 2 },
];

// ── GRADES ───────────────────────────────────────────────────
function PageGrades() {
    return (
        <div className="page-enter">
            <div className="pheader"><h1>📊 My Grades</h1><p>Track your academic performance</p></div>
            <div className="sgrid">
                {[["🎓", "Overall GPA", "3.61", "red"], ["📈", "Avg Score", "90.4%", "grn"], ["📚", "Credits", "16", "blu"], ["🏆", "Courses", "5", "org"]].map(([ic, lbl, val, cl]) => (
                    <div key={lbl} className={`card scard ${cl}`}><div className={`sc-ic ${cl}`}>{ic}</div><div><div className="sc-lbl">{lbl}</div><div className="sc-val">{val}</div></div></div>
                ))}
            </div>
            {GR.map(c => (
                <div key={c.code} className="gr-course-card">
                    <div className="gr-course-hd">
                        <div className="gr-course-left">
                            <div className="gr-course-badge" style={{ background: c.clr + '22' }}>{c.ic}</div>
                            <div>
                                <div style={{ display: "flex", alignItems: "center", gap: 8 }}><span className="gr-course-code">{c.code}</span><span style={{ fontSize: 11, background: c.clr + '18', color: c.clr, padding: "1px 8px", borderRadius: 20, fontWeight: 600 }}>4 credits</span></div>
                                <div className="gr-course-name">{c.name}</div><div className="gr-course-inst">{c.inst}</div>
                            </div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <div className="gr-pct-big" style={{ color: c.clr }}>{c.pct}%</div>
                            <div className="gr-grade-lbl">Grade {c.grade}</div>
                            <div style={{ fontSize: 10, color: "var(--grn)", fontWeight: 600 }}>▲ Improving</div>
                        </div>
                    </div>
                    <div className="gr-breakdown">
                        <div className="gr-bd-title">Grade Breakdown</div>
                        {c.items.map(([n, s, m]) => (
                            <div key={n} className="gr-bd-row">
                                <div className="gr-bd-name">{n}</div>
                                <div className="gr-bd-bar-wrap"><div className="gr-bd-bar" style={{ width: `${s / m * 100}%`, background: c.clr }} /></div>
                                <div className="gr-bd-score">{s}/{m}</div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

// ── ASSIGNMENTS ───────────────────────────────────────────────
function PageAssignments() {
    const [filt, setFilt] = React.useState("all");
    const stM = { pending: { cls: "stbdg-pending", lbl: "Pending" }, submitted: { cls: "stbdg-submitted", lbl: "Submitted" }, graded: { cls: "stbdg-graded", lbl: "Graded" } };
    const list = filt === "all" ? ASGN : ASGN.filter(a => a.st === filt);
    return (
        <div className="page-enter">
            <div className="pheader"><h1>📋 All Assignments</h1><p>Manage and track all your course assignments</p></div>
            <div className="asgn-stats">
                {[["Total", 6, "var(--t1)"], ["Pending", 4, "var(--org)"], ["Submitted", 1, "var(--blu)"], ["Graded", 1, "var(--grn)"]].map(([l, v, c]) => (
                    <div key={l} className="asgn-stat card"><div className="asgn-stat-val" style={{ color: c }}>{v}</div><div className="asgn-stat-lbl">{l} Assignments</div></div>
                ))}
            </div>
            <div className="asgn-toolbar">
                <div style={{ position: "relative", flex: 1, maxWidth: 340 }}>
                    <span style={{ position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "var(--t3)", fontSize: 14 }}>🔍</span>
                    <input className="asgn-search" placeholder="Search assignments..." style={{ paddingLeft: 34 }} />
                </div>
                {["all", "pending", "submitted", "graded"].map(f => (
                    <button key={f} className="asgn-filter" onClick={() => setFilt(f)} style={filt === f ? { borderColor: "var(--red)", color: "var(--red)", background: "var(--redg)" } : {}}>
                        {{ all: "🗂 All Status", pending: "⏳ Pending", submitted: "📤 Submitted", graded: "✅ Graded" }[f]}
                    </button>
                ))}
            </div>
            {list.map(a => (
                <div key={a.id} className="asgn-item">
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                        <div style={{ flex: 1 }}>
                            <span className="asgn-course-tag" style={{ background: a.clr + '18', color: a.clr }}>{a.code}</span>
                            <div className="asgn-title" style={{ marginTop: 6 }}>{a.name}</div>
                            <div className="asgn-desc">{a.desc}</div>
                            <div className="asgn-meta"><span>📅 {a.due}</span><span>⭐ {a.pts} pts</span>{a.grade && <span style={{ color: "var(--grn)", fontWeight: 600 }}>🏆 {a.grade}</span>}</div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
                            <span className={`stbdg ${stM[a.st].cls}`}>{stM[a.st].lbl}</span>
                            {a.st === "pending" && <button className="asgn-submit-btn sbtn-submit">Submit</button>}
                            {a.st !== "pending" && <button className="asgn-submit-btn" style={{ background: "var(--bg1)", color: "var(--t2)", border: "1px solid var(--border)" }}>View</button>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

// ── TIMETABLE ─────────────────────────────────────────────────
function PageTimetable() {
    const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    const DATES = ["Jan 13", "Jan 14", "Jan 15", "Jan 16", "Jan 17"];
    const HRS = [8, 9, 10, 11, 12, 13, 14, 15, 16];
    const RH = 58;
    const getTop = s => (s - 8) * RH;
    const getH = d => d * RH - 4;
    const legend = [...new Map(TTE.map(e => [e.c, { c: e.c, n: e.n, clr: e.clr }])).values()];
    return (
        <div className="page-enter">
            <div className="pheader" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                <div><h1>📅 My Timetable</h1><p>Spring Semester 2024 – Week 1</p></div>
                <button style={{ background: "var(--red)", color: "#fff", border: "none", borderRadius: 8, padding: "9px 18px", fontFamily: "inherit", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>🔔 Set Reminder</button>
            </div>
            <div className="sgrid" style={{ marginBottom: 18 }}>
                {[["📚", "This Week", "11", "red"], ["📖", "Sections", "8", "blu"], ["💻", "Online", "2", "org"], ["📝", "Tutorials", "1", "pur"]].map(([ic, l, v, cl]) => (
                    <div key={l} className={`card scard ${cl}`}><div className={`sc-ic ${cl}`}>{ic}</div><div><div className="sc-lbl">{l}</div><div className="sc-val">{v}</div></div></div>
                ))}
            </div>
            <div className="tt-wrap">
                <div className="tt-header">
                    <div style={{ padding: "12px 0", textAlign: "center", borderRight: "1px solid var(--border2)", fontSize: 11, color: "var(--t3)", fontWeight: 600 }}>TIME</div>
                    {DAYS.map((d, i) => (
                        <div key={d} className="tt-day-hd">
                            <div style={{ fontWeight: 700, color: "var(--t1)", fontSize: 13 }}>{d}</div>
                            <div className="tt-day-date">{DATES[i]}</div>
                        </div>
                    ))}
                </div>
                <div className="tt-body">
                    <div className="tt-time-col">{HRS.map(h => <div key={h} className="tt-time-slot">{h}:00</div>)}</div>
                    {DAYS.map((d, di) => (
                        <div key={d} className="tt-day-col">
                            {HRS.map((_, i) => <div key={i} className="tt-grid-line" style={{ top: i * RH }} />)}
                            {TTE.filter(e => e.d === di).map(e => (
                                <div key={e.c + e.s} className="tt-event" style={{ top: getTop(e.s), height: getH(e.dur), background: e.clr }}>
                                    <div className="tt-event-code">{e.c}</div>
                                    <div className="tt-event-name">{e.n}</div>
                                    <div className="tt-event-room">{e.r}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="tt-legend">
                    {legend.map(e => (
                        <div key={e.c} className="tt-leg-item"><div className="tt-leg-dot" style={{ background: e.clr }} /><span>{e.c}</span></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// ── ADD / DROP ─────────────────────────────────────────────────
function PageAddDrop({ setPage }) {
    return (
        <div className="page-enter">
            <button className="back-btn" onClick={() => setPage('students')}>← Back to Student Services</button>
            <div className="pheader"><h1>➕ Add / Drop Courses</h1><p>Manage your course enrollment for Spring 2026</p></div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 22 }}>
                {[["📚", "Enrolled Courses", "2", "red"], ["⚡", "Lab Credits", "7", "blu"], ["✅", "Available", "4", "grn"]].map(([ic, lbl, val, cl]) => (
                    <div key={lbl} className={`card scard ${cl}`}><div className={`sc-ic ${cl}`}>{ic}</div><div><div className="sc-lbl">{lbl}</div><div className="sc-val">{val}</div></div></div>
                ))}
            </div>
            <div className="ad-grid">
                <div className="ad-card">
                    <div className="ad-card-hd">My Courses<span style={{ fontSize: 11, background: "rgba(229,57,53,.12)", color: "var(--red)", padding: "2px 8px", borderRadius: 20, fontWeight: 600 }}>2 enrolled</span></div>
                    {ADE.map(e => (
                        <div key={e.code} className="ad-enrolled-item">
                            <div className="ad-enr-ic" style={{ background: e.clr + '22' }}>{e.ic}</div>
                            <div style={{ flex: 1 }}>
                                <div className="ad-enr-code">{e.code} — {e.name}</div>
                                <div className="ad-enr-sched">🕐 {e.sched} &nbsp;📍 {e.room}</div>
                            </div>
                            <button className="ad-drop-btn" title="Drop course">✕</button>
                        </div>
                    ))}
                </div>
                <div className="ad-card">
                    <div className="ad-card-hd">Available Courses</div>
                    {ADA.map(a => (
                        <div key={a.code} className="ad-avail-item">
                            <div className="ad-avail-top">
                                <div>
                                    <div className="ad-avail-code">{a.code} <span style={{ fontWeight: 400, color: "var(--t3)", fontSize: 13 }}>{a.credits} cr</span></div>
                                    <div className="ad-avail-name">{a.name}</div>
                                    <div style={{ fontSize: 11, color: "var(--t3)", marginTop: 2 }}>👤 {a.inst} &nbsp;🕐 {a.sched}</div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 7 }}>
                                    <span className={a.full ? "ad-status-full" : "ad-status-avail"}>{a.full ? "Full" : "Available"}</span>
                                    <button className="ad-add-btn" disabled={a.full}>{a.full ? "Full" : "+ Add"}</button>
                                </div>
                            </div>
                            <div className="ad-enroll-bar"><div className={`ad-enroll-fill${a.full ? " full" : ""}`} style={{ width: `${a.enrolled / a.total * 100}%` }} /></div>
                            <div className="ad-enroll-count">{a.enrolled}/{a.total} enrolled</div>
                        </div>
                    ))}
                    <div className="ad-footer">
                        <button className="ad-cancel-btn" onClick={() => setPage('students')}>Cancel Changes</button>
                        <button className="ad-save-btn">✔ Save Enrollment</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ── SETTINGS ─────────────────────────────────────────────────
function PageSettings() {
    const [sect, setSect] = React.useState("profile");
    const [tog, setTog] = React.useState({ email: true, push: true, grades: true, assign: false, attend: true });
    const Tog = ({ k }) => (
        <button className={`set-toggle ${tog[k] ? "on" : ""}`} onClick={() => setTog(p => ({ ...p, [k]: !p[k] }))}>
            <div className="set-toggle-knob" />
        </button>
    );
    const NAVS = [["profile", "👤", "Profile"], ["notifications", "🔔", "Notifications"], ["appearance", "🎨", "Appearance"], ["security", "🔒", "Security"], ["language", "🌐", "Language"], ["academic", "📊", "Academic"]];
    return (
        <div className="page-enter">
            <div className="pheader"><h1>⚙️ Settings</h1><p>Manage your account and preferences</p></div>
            <div className="settings-grid">
                <div className="set-nav">
                    {NAVS.map(([k, ic, lbl]) => (
                        <div key={k} className={`set-nav-item${sect === k ? " act" : ""}`} onClick={() => setSect(k)}>
                            <span className="set-nav-item-ic">{ic}</span>{lbl}
                        </div>
                    ))}
                </div>
                <div>
                    {sect === "profile" && (
                        <div className="set-section">
                            <div className="set-avatar-row">
                                <div className="set-avatar">RA</div>
                                <div className="set-avatar-info">
                                    <div style={{ fontSize: 17, fontWeight: 700, color: "var(--t1)" }}>Rawda Ayman</div>
                                    <div style={{ fontSize: 12, color: "var(--t3)" }}>rawda.ayman@edusphere.edu</div>
                                    <button className="chg-photo-btn">📷 Change Photo</button>
                                </div>
                            </div>
                            <div className="set-section-title">Personal Information</div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
                                {[["Full Name", "Rawda Ayman"], ["Student ID", "21at41"], ["Email", "rawda@edusphere.edu"], ["Phone", "+20 100 000 0000"], ["Faculty", "Engineering & Technology"], ["Program", "B.Sc. Computer Science"]].map(([l, v]) => (
                                    <div key={l}><div style={{ fontSize: 11, color: "var(--t3)", marginBottom: 4, fontWeight: 500 }}>{l}</div><input className="set-input" defaultValue={v} /></div>
                                ))}
                            </div>
                            <button className="set-save-btn">💾 Save Changes</button>
                        </div>
                    )}
                    {sect === "notifications" && (
                        <div className="set-section">
                            <div className="set-section-title">🔔 Notification Preferences</div>
                            <div className="set-section-desc">Choose what notifications you want to receive</div>
                            {[["Email Notifications", "Receive updates via email", "email"], ["Push Notifications", "Browser push notifications", "push"], ["Grade Updates", "Notified when grades are posted", "grades"], ["Assignment Reminders", "Reminders for upcoming deadlines", "assign"], ["Attendance Alerts", "Alerts for attendance issues", "attend"]].map(([l, s, k]) => (
                                <div key={k} className="set-row">
                                    <div><div className="set-row-lbl">{l}</div><div className="set-row-sub">{s}</div></div>
                                    <Tog k={k} />
                                </div>
                            ))}
                        </div>
                    )}
                    {sect === "appearance" && (
                        <div className="set-section">
                            <div className="set-section-title">🎨 Appearance</div>
                            <div className="set-section-desc">Customize the look and feel of your student portal</div>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 20 }}>
                                {[["🌙", "Dark Mode", "dark"], ["☀️", "Light Mode", "light"], ["💻", "System", "system"]].map(([ic, lbl, k]) => (
                                    <div key={k} className="card" style={{ padding: "18px", cursor: "pointer", textAlign: "center", border: k === "dark" ? "2px solid var(--red)" : "1px solid var(--border)" }}>
                                        <div style={{ fontSize: 28, marginBottom: 8 }}>{ic}</div>
                                        <div style={{ fontSize: 13, fontWeight: 600, color: "var(--t1)" }}>{lbl}</div>
                                    </div>
                                ))}
                            </div>
                            <div style={{ display: "flex", justifyContent: "flex-end" }}><button className="set-save-btn">Apply Theme</button></div>
                        </div>
                    )}
                    {(sect === "security" || sect === "language" || sect === "academic") && (
                        <div className="set-section" style={{ textAlign: "center", padding: "40px" }}>
                            <div style={{ fontSize: 48, marginBottom: 16 }}>🚧</div>
                            <div style={{ fontSize: 16, fontWeight: 700, color: "var(--t1)", marginBottom: 8 }}>Coming Soon</div>
                            <div style={{ fontSize: 13, color: "var(--t2)" }}>This section is under development</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
