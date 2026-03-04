// ══════════════════════════════════════
//  DATA
// ══════════════════════════════════════
const CLASSES = [
  { name: "Advanced Web Development", sub: "Dr. Sarah Hassan • CS 431", time: "09:00 AM", status: "Starting Soon", sc: "st-live", dot: "#e53935" },
  { name: "Database Systems", sub: "Dr. Ahmed Ali • CS 412", time: "11:00 AM", status: "Upcoming", sc: "st-up", dot: "#2979ff" },
  { name: "Machine Learning", sub: "Dr. Layla Nour • IT Lab 411", time: "07:00 PM", status: "Scheduled", sc: "st-sch", dot: "#555b72" },
];
const ASSIGNS = [
  { name: "Web Development Project 3", course: "CS431", due: "Due Dec 15", prio: "High Priority", pc: "ph", bar: "#e53935" },
  { name: "Linear Algebra Problem Set", course: "MATH301", due: "Due Dec 16", prio: "Medium Priority", pc: "pm", bar: "#ff6d00" },
  { name: "Technical Writing Essay", course: "ARBLEET", due: "Due Dec 20", prio: "Low Priority", pc: "pl", bar: "#555b72" },
];
const GRADES = [
  { code: "CS431", name: "Project 3", pct: 95, color: "#00c853" },
  { code: "MATH301", name: "Midterm Exam", pct: 38, color: "#e53935" },
  { code: "ENG101", name: "Essay", pct: 92, color: "#00c853" },
];
const NOTIFS = [
  { ic: "📅", title: "Class Starting Soon", desc: "Advanced Web Development starts in 15 min", time: "10 min ago" },
  { ic: "📝", title: "Assignment Due Tomorrow", desc: "Web Development Project 3 - CS431", time: "1 hour ago" },
  { ic: "📊", title: "Grade Posted", desc: "MATH301 Midterm Exam: 38%", time: "3 hours ago" },
  { ic: "⚠️", title: "Attendance Warning", desc: "You missed 2 sessions in ENG101", time: "Yesterday" },
];
const CUR_YEARS = [
  {
    year: "First Year", sems: [
      { sem: "Fall 2022", courses: [{ code: "CS101", name: "Intro to CS", st: "done" }, { code: "MATH101", name: "Calculus I", st: "done" }, { code: "ENG101", name: "English I", st: "done" }, { code: "PHYS101", name: "Physics I", st: "done" }] },
      { sem: "Spring 2023", courses: [{ code: "CS102", name: "Programming Basics", st: "done" }, { code: "MATH102", name: "Calculus II", st: "done" }, { code: "ENG102", name: "English II", st: "done" }, { code: "PHYS102", name: "Physics II", st: "done" }] },
    ]
  },
  {
    year: "Second Year", sems: [
      { sem: "Fall 2023", courses: [{ code: "CS201", name: "Data Structures", st: "done" }, { code: "CS203", name: "OOP", st: "done" }, { code: "MATH201", name: "Linear Algebra", st: "done" }, { code: "SOC201", name: "Society & Tech", st: "done" }] },
      { sem: "Spring 2024", courses: [{ code: "CS211", name: "Algorithms", st: "done" }, { code: "CS214", name: "OS Concepts", st: "done" }, { code: "MATH204", name: "Discrete Math", st: "done" }, { code: "HUM206", name: "Humanities", st: "done" }] },
    ]
  },
  {
    year: "Third Year", sems: [
      { sem: "Fall 2024", courses: [{ code: "CS301", name: "Database Systems", st: "done" }, { code: "CS302", name: "Software Eng", st: "done" }, { code: "CS303", name: "Networks", st: "done" }, { code: "HUM301", name: "Research Methods", st: "done" }] },
      { sem: "Spring 2025", courses: [{ code: "CS311", name: "AI Fundamentals", st: "prog" }, { code: "CS321", name: "Web Development", st: "prog" }, { code: "MATH301", name: "Prob & Stats", st: "prog" }, { code: "ENG301", name: "Technical Writing", st: "prog" }] },
    ]
  },
  {
    year: "Fourth Year", sems: [
      { sem: "Fall 2025", courses: [{ code: "CS401", name: "Graduation Project", st: "pend" }, { code: "CS411", name: "Machine Learning", st: "pend" }, { code: "CS421", name: "Cloud Computing", st: "pend" }] },
      { sem: "Spring 2026", courses: [{ code: "CS431", name: "Adv Web Dev", st: "pend" }, { code: "CS441", name: "Security", st: "pend" }, { code: "CS451", name: "Capstone", st: "pend" }] },
    ]
  },
];
const ENROLLMENT = [
  { name: "Advanced Software Engineering", code: "CS402", credits: 3, type: "CORE", typeCls: "core-b", status: "Registered" },
  { name: "Database Systems II", code: "CS412", credits: 3, type: "CORE", typeCls: "core-b", status: "Registered" },
  { name: "Discrete Mathematics", code: "MATH301", credits: 4, type: "REQUIRED", typeCls: "req-b", status: "Registered" },
  { name: "Professional Ethics", code: "ETHI201", credits: 2, type: "ELECTIVE", typeCls: "elec-b", status: "Registered" },
];
const MILESTONES = [
  { name: "Freshman Year", date: "June 2023", pct: 100, st: "COMPLETED", sc: "mst-done", color: "#00c853" },
  { name: "Sophomore Year", date: "June 2024", pct: 100, st: "COMPLETED", sc: "mst-done", color: "#00c853" },
  { name: "Junior Year", date: "1-4 June 2025", pct: 65, st: "IN PROGRESS", sc: "mst-prog", color: "#2979ff" },
  { name: "Senior Project", date: "Pending", pct: 0, st: "PENDING", sc: "mst-pend", color: "#555b72" },
];
const ADM_EXCUSES = [
  { sname: "Ahmed Ali", sid: "ID: 20-2341", issue: "Severe Flu", type: "MEDICAL", date: "15 Oct" },
  { sname: "Sarah Smith", sid: "ID: 20-4122", issue: "Medical Surgery", type: "MEDICAL", date: "14 Oct" },
  { sname: "Omar Hassan", sid: "ID: 20-5532", issue: "Dental Appointment", type: "MEDICAL", date: "14 Oct" },
];
const LOGS = [
  { dot: "#00c853", when: "2 MIN AGO", who: "Admin Sarah", what: "Approved Course #92" },
  { dot: "#ff6d00", when: "19 MIN AGO", who: "System", what: "Flagged Pending Attendance" },
  { dot: "#2979ff", when: "31 MIN AGO", who: "Admin Mike", what: "Responded to Complaint" },
];
const SS_SERVICES = [
  { ic: "🩺", name: "Medical Excuse", desc: "Submit and track your medical excuses for missed classes.", color: "#e53935", page: "medical" },
  { ic: "💬", name: "Complaints", desc: "Submit academic or general complaints to the administration.", color: "#ff6d00", page: "complaints" },
  { ic: "💳", name: "Online Payment", desc: "Pay your tuition fees and other charges securely online.", color: "#00c853", page: "payment" },
  { ic: "⚠️", name: "Warning", desc: "View any academic warnings or attendance notifications.", color: "#ffd600", page: "warning" },
  { ic: "📄", name: "Requests", desc: "Submit general requests for certificates and documents.", color: "#aa00ff", page: "requests" },
];

// ══════════════════════════════════════
//  SHARED COMPONENTS
// ══════════════════════════════════════
function QRSvg() {
  const g = [[1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1], [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1], [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1], [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0], [0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1], [1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1], [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0], [1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0], [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0], [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0], [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0], [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1], [1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1], [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1]];
  const cells = 21, sz = 110, cs = sz / cells;
  return React.createElement('svg', { width: sz, height: sz, viewBox: `0 0 ${sz} ${sz}`, xmlns: "http://www.w3.org/2000/svg" },
    React.createElement('rect', { width: sz, height: sz, fill: "#f5f5f5", rx: 4 }),
    ...g.flatMap((row, r) => row.map((v, c) => v ? React.createElement('rect', { key: `${r}-${c}`, x: c * cs, y: r * cs, width: cs, height: cs, fill: "#111318" }) : null).filter(Boolean))
  );
}

function CountUp({ target, duration = 1500 }) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    let start = 0, step = target / 60, timer = setInterval(() => {
      start += step; if (start >= target) { setVal(target); clearInterval(timer); }
      else setVal(Math.floor(start));
    }, duration / 60);
    return () => clearInterval(timer);
  }, [target]);
  return React.createElement(React.Fragment, null, val);
}

// ══════════════════════════════════════
//  PAGES
// ══════════════════════════════════════
function PageDashboard({ setPage }) {
  const STATS = [
    { ic: "📘", lbl: "Total Courses", val: 6, tr: "+2 this sem", dir: "up", cl: "red" },
    { ic: "⭐", lbl: "Average GPA", val: "3.8", tr: "+0.2 pts", dir: "up", cl: "blu" },
    { ic: "📋", lbl: "Classes Today", val: 4, tr: "On track", dir: "up", cl: "org" },
    { ic: "⏰", lbl: "Pending Tasks", val: 8, tr: "2 overdue", dir: "dn", cl: "pur" },
  ];
  return React.createElement('div', { className: "page-enter" },
    React.createElement('div', { className: "pheader" },
      React.createElement('h1', null, "Welcome back, Rawda Ayman! 👋"),
      React.createElement('p', null, "Here's what's happening with your classes today.")
    ),
    React.createElement('div', { className: "sgrid" },
      STATS.map(s => React.createElement('div', { key: s.lbl, className: `card card-hover scard ${s.cl}`, onClick: () => { } },
        React.createElement('div', { className: `sc-ic ${s.cl}` }, s.ic),
        React.createElement('div', null,
          React.createElement('div', { className: "sc-lbl" }, s.lbl),
          React.createElement('div', { className: "sc-val" }, typeof s.val === 'number' ? React.createElement(CountUp, { target: s.val }) : s.val),
          React.createElement('div', { className: `sc-tr ${s.dir}` }, s.dir === 'up' ? "▲" : "▼", " ", s.tr)
        )
      ))
    ),
    React.createElement('div', { className: "cgrid" },
      React.createElement('div', { className: "lcol" },
        React.createElement('div', { className: "card sec" },
          React.createElement('div', { className: "sec-hd" }, React.createElement('span', { className: "sec-ttl" }, "📅 Today's Classes"), React.createElement('span', { className: "sec-act", onClick: () => setPage('attendance') }, "View Schedule →")),
          React.createElement('div', { className: "clist" }, CLASSES.map(c => React.createElement('div', { key: c.name, className: "citem" }, React.createElement('span', { className: "cdot", style: { background: c.dot } }), React.createElement('div', { className: "ci" }, React.createElement('div', { className: "cn" }, c.name), React.createElement('div', { className: "cs" }, c.sub)), React.createElement('div', { className: "cm" }, React.createElement('div', { className: "ct" }, c.time), React.createElement('span', { className: `cst ${c.sc}` }, c.status)))))
        ),
        React.createElement('div', { className: "card sec" },
          React.createElement('div', { className: "sec-hd" }, React.createElement('span', { className: "sec-ttl" }, "📝 Pending Assignments"), React.createElement('span', { className: "sec-act" }, "View All →")),
          React.createElement('div', { className: "alist" }, ASSIGNS.map(a => React.createElement('div', { key: a.name, className: "aitem" }, React.createElement('div', { className: "apbar", style: { background: a.bar } }), React.createElement('div', { className: "ai" }, React.createElement('div', { className: "an" }, a.name), React.createElement('div', { className: "ac" }, a.course)), React.createElement('div', { className: "am" }, React.createElement('div', { className: "ad" }, a.due), React.createElement('span', { className: `pb ${a.pc}` }, a.prio)))))
        )
      ),
      React.createElement('div', { className: "rcol" },
        React.createElement('div', { className: "card sec" },
          React.createElement('div', { className: "sec-hd" }, React.createElement('span', { className: "sec-ttl" }, "📊 Recent Grades"), React.createElement('span', { className: "sec-act" }, "All →")),
          React.createElement('div', { className: "glist" }, GRADES.map(g => React.createElement('div', { key: g.code, className: "gitem" }, React.createElement('div', { className: "gh" }, React.createElement('div', null, React.createElement('div', { className: "gcode" }, g.code), React.createElement('div', { className: "gname" }, g.name)), React.createElement('div', { className: "gpct", style: { color: g.color } }, g.pct, "%")), React.createElement('div', { className: "gbg" }, React.createElement('div', { className: "gbar", style: { width: `${g.pct}%`, background: g.color } })))))
        ),
        React.createElement('div', { className: "card qrcard" },
          React.createElement('div', { className: "qrhd" }, React.createElement('span', null, "📷"), React.createElement('span', { className: "qrtit" }, "Smart Attendance")),
          React.createElement('div', { className: "qrbox" }, React.createElement(QRSvg), React.createElement('div', { className: "qrovl" }, React.createElement('span', { className: "qrbdg" }, "CS4101"), React.createElement('span', { className: "qrtmr" }, "⏱ Scan now"))),
          React.createElement('button', { className: "qrbtn", onClick: () => setPage('attendance') }, "📷 Scan Now")
        ),
        React.createElement('div', { className: "card qacard" },
          React.createElement('div', { className: "qatit" }, "⚡ Quick Actions"),
          React.createElement('div', null,
            React.createElement('button', { className: "qbtn", onClick: () => setPage('assignments') }, "📋 View All Assignments"),
            React.createElement('button', { className: "qbtn", onClick: () => setPage('grades') }, "� Check My Grades"),
            React.createElement('button', { className: "qbtn", onClick: () => setPage('adddrop') }, "➕ Add/Drop Courses"),
            React.createElement('button', { className: "qbtn pri", onClick: () => setPage('timetable') }, "📅 View Timetable")
          )
        )
      )
    )
  );
}

function PageAttendance() {
  const [clock, setClock] = React.useState(new Date());
  React.useEffect(() => { const t = setInterval(() => setClock(new Date()), 1000); return () => clearInterval(t); }, []);
  const fmt = d => d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  return React.createElement('div', { className: "page-enter" },
    React.createElement('div', { className: "pheader", style: { display: "flex", alignItems: "center", justifyContent: "space-between" } },
      React.createElement('div', null, React.createElement('h1', null, "📷 QR Attendance"), React.createElement('p', null, "EduSphere Smart Attendance System")),
      React.createElement('div', { className: "clock-badge" }, "🕐 ", fmt(clock))
    ),
    React.createElement('div', { className: "aqr-wrap" },
      React.createElement('div', { className: "card", style: { padding: "22px" } },
        React.createElement('span', { className: "aqr-badge" }, "ONGOING LECTURE"),
        React.createElement('div', { className: "aqr-course" }, "Advanced Software Engineering"),
        React.createElement('div', { className: "aqr-sub" }, "CS402 • Dr. Sarah Johnson"),
        React.createElement('div', { className: "aqr-row" }, React.createElement('span', { className: "aqr-row-ic" }, "📍"), React.createElement('div', null, React.createElement('div', { className: "aqr-row-lbl" }, "Location"), React.createElement('div', { className: "aqr-row-val" }, "Hall 302"))),
        React.createElement('div', { className: "aqr-row" }, React.createElement('span', { className: "aqr-row-ic" }, "🛰️"), React.createElement('div', null, React.createElement('div', { className: "aqr-row-lbl" }, "GPS Verification"), React.createElement('div', { className: "aqr-row-val checking" }, "Checking Location..."))),
        React.createElement('div', { className: "aqr-status" }, React.createElement('div', { className: "aqr-status-lbl" }, "Status"), React.createElement('div', { className: "aqr-status-val" }, "⏳ Waiting for scan..."))
      ),
      React.createElement('div', null,
        React.createElement('div', { className: "aqr-cam" },
          React.createElement('div', { className: "aqr-cam-ic" }, "📷"),
          React.createElement('div', { className: "aqr-cam-txt" }, "Camera Ready"),
          React.createElement('div', { className: "aqr-cam-sub" }, "Center the lecture QR code in the frame to record attendance"),
          React.createElement('div', { className: "scan-line" })
        ),
        React.createElement('button', { className: "qrbtn", style: { marginTop: "12px", width: "100%" } }, "📷 Scan QR Code")
      )
    )
  );
}

function PageStudentServices({ setPage }) {
  return React.createElement('div', { className: "page-enter" },
    React.createElement('div', { className: "pheader" },
      React.createElement('h1', null, "🎓 Student Services"),
      React.createElement('p', null, React.createElement('span', null, "Manage your academic requests, payments, and administrative needs in "), React.createElement('span', { style: { color: "var(--red)", fontWeight: 600 } }, "one convenient place."))
    ),
    React.createElement('div', { className: "ss-grid" },
      SS_SERVICES.map(s => React.createElement('div', { key: s.name, className: "card card-hover ss-card", onClick: () => setPage(s.page) },
        React.createElement('div', { className: "ss-top-border", style: { background: s.color } }),
        React.createElement('span', { className: "ss-ic" }, s.ic),
        React.createElement('div', { className: "ss-name" }, s.name),
        React.createElement('div', { className: "ss-desc" }, s.desc),
        React.createElement('span', { className: "ss-arrow" }, "→")
      ))
    )
  );
}

function PagePayment({ setPage }) {
  return React.createElement('div', { className: "page-enter" },
    React.createElement('button', { className: "back-btn", onClick: () => setPage('students') }, "← Back to Student Services"),
    React.createElement('div', { className: "pheader" }, React.createElement('h1', null, "💳 Online Payment"), React.createElement('p', null, "Pay your tuition fees and other charges securely.")),
    React.createElement('div', { className: "pay-grid" },
      React.createElement('div', { className: "pay-stat" }, React.createElement('span', { style: { fontSize: 26 } }, "💰"), React.createElement('div', null, React.createElement('div', { style: { fontSize: 11, color: "var(--t3)" }, }, "Total Due"), React.createElement('div', { style: { fontSize: 22, fontWeight: 700, color: "var(--t1)" } }, "$4,250"))),
      React.createElement('div', { className: "pay-stat" }, React.createElement('span', { style: { fontSize: 26 } }, "✅"), React.createElement('div', null, React.createElement('div', { style: { fontSize: 11, color: "var(--t3)" } }, "Paid"), React.createElement('div', { style: { fontSize: 22, fontWeight: 700, color: "var(--grn)" } }, "$1,500")))
    ),
    React.createElement('div', { className: "pay-inv" },
      React.createElement('div', { className: "inv-hd" }, React.createElement('span', null, "Description"), React.createElement('span', null, "Amount")),
      React.createElement('div', { className: "inv-row" }, React.createElement('span', null, "Tuition Fees - Spring 2026"), React.createElement('span', null, "$3,200")),
      React.createElement('div', { className: "inv-row" }, React.createElement('span', null, "Lab Fees"), React.createElement('span', null, "$450")),
      React.createElement('div', { className: "inv-row" }, React.createElement('span', null, "Activity Fees"), React.createElement('span', null, "$100")),
      React.createElement('div', { className: "inv-row", style: { fontWeight: 700, background: "var(--bg3)" } }, React.createElement('span', null, "💳 Total Remaining"), React.createElement('span', { style: { color: "var(--red)" } }, "$2,750"))
    ),
    React.createElement('button', { className: "pay-btn" }, "🔐 Pay Now — $2,750")
  );
}

function PageCurriculum() {
  const stMap = { done: "crs-done", prog: "crs-prog", pend: "crs-pend" };
  const stLabel = { done: "✓ Done", prog: "In Progress", pend: "Pending" };
  return React.createElement('div', { className: "page-enter" },
    React.createElement('div', { className: "pheader" }, React.createElement('h1', null, "📚 Curriculum Management"), React.createElement('p', null, "Bachelor of Science in Computer Science")),
    React.createElement('div', { className: "cur-stats" },
      React.createElement('div', { className: "card", style: { padding: "16px 18px" } }, React.createElement('div', { className: "cur-title" }, "Overall Progress"), React.createElement('div', { className: "cur-val", style: { color: "var(--red)" } }, "63%"), React.createElement('div', { className: "cur-sub" }, "of curriculum")),
      React.createElement('div', { className: "card", style: { padding: "16px 18px" } }, React.createElement('div', { className: "cur-title" }, "Credit Hours"), React.createElement('div', { className: "cur-val" }, "75"), React.createElement('div', { className: "cur-sub" }, "of 120 completed")),
      React.createElement('div', { className: "card", style: { padding: "16px 18px" } }, React.createElement('div', { className: "cur-title" }, "Current GPA"), React.createElement('div', { className: "cur-val" }, "3.8"), React.createElement('div', { className: "cur-sub" }, "out of 4.0")),
      React.createElement('div', { className: "card", style: { padding: "16px 18px" } }, React.createElement('div', { className: "cur-title" }, "Remaining"), React.createElement('div', { className: "cur-val" }, "45"), React.createElement('div', { className: "cur-sub" }, "credit hours left"))
    ),
    CUR_YEARS.map(y => React.createElement('div', { key: y.year, className: "yr-block" },
      React.createElement('div', { className: "yr-ttl" }, React.createElement('span'), y.year),
      React.createElement('div', { className: "sem-grid" },
        y.sems.map(s => React.createElement('div', { key: s.sem, className: "sem-card" },
          React.createElement('div', { className: "sem-hd" }, s.sem),
          s.courses.map(c => React.createElement('div', { key: c.code, className: "crs-row" },
            React.createElement('div', null, React.createElement('div', { className: "crs-code" }, c.code), React.createElement('div', { className: "crs-name" }, c.name)),
            React.createElement('span', { className: `crs-st ${stMap[c.st]}` }, stLabel[c.st])
          ))
        ))
      )
    ))
  );
}

function PageRecords() {
  return React.createElement('div', { className: "page-enter" },
    React.createElement('div', { className: "pheader" }, React.createElement('h1', null, "📁 Records & Enrollment"), React.createElement('p', null, "Your official academic record and status")),
    React.createElement('div', { className: "rec-wrap" },
      React.createElement('div', { className: "rec-profile" },
        React.createElement('div', { className: "rec-av" }, "👤"),
        React.createElement('div', { className: "rec-name" }, "Rawda Ayman"),
        React.createElement('div', { className: "rec-id" }, "ID: 21at41"),
        React.createElement('div', { className: "rec-row" }, React.createElement('span', { className: "rec-row-ic" }, "🏛️"), React.createElement('div', null, React.createElement('div', { className: "rec-row-lbl" }, "Faculty"), React.createElement('div', { className: "rec-row-val" }, "Engineering & Technology"))),
        React.createElement('div', { className: "rec-row" }, React.createElement('span', { className: "rec-row-ic" }, "📚"), React.createElement('div', null, React.createElement('div', { className: "rec-row-lbl" }, "Program"), React.createElement('div', { className: "rec-row-val" }, "B.Sc. in Computer Science"))),
        React.createElement('div', { className: "rec-row" }, React.createElement('span', { className: "rec-row-ic" }, "🎓"), React.createElement('div', null, React.createElement('div', { className: "rec-row-lbl" }, "Year"), React.createElement('div', { className: "rec-row-val" }, "4th Year"))),
        React.createElement('div', { className: "rec-row" }, React.createElement('span', { className: "rec-row-ic" }, "⭐"), React.createElement('div', null, React.createElement('div', { className: "rec-row-lbl" }, "GPA"), React.createElement('div', { className: "rec-row-val" }, "3.82 / 4.0"))),
        React.createElement('div', { className: "enroll-badge" }, "✅ Active Enrollment • VALID")
      ),
      React.createElement('div', { className: "rec-right" },
        React.createElement('div', { className: "cur-sem-card" },
          React.createElement('div', { className: "cse-hd" },
            React.createElement('span', { className: "cse-ttl" }, "📋 Current Semester Enrollment"),
            React.createElement('span', { className: "dl-btn" }, "⬇ Download Proof")
          ),
          React.createElement('div', { className: "ethead" }, React.createElement('span', null, "COURSE"), React.createElement('span', null, "CREDITS"), React.createElement('span', null, "TYPE"), React.createElement('span', null, "STATUS")),
          ENROLLMENT.map(e => React.createElement('div', { key: e.code, className: "etrow" },
            React.createElement('div', null, React.createElement('div', { className: "et-name" }, e.name), React.createElement('div', { className: "et-code" }, e.code)),
            React.createElement('span', { style: { color: "var(--t2)" } }, e.credits),
            React.createElement('span', { className: `typbdg ${e.typeCls}` }, e.type),
            React.createElement('span', { className: "regbdg" }, "● ", e.status)
          ))
        ),
        React.createElement('div', null,
          React.createElement('div', { className: "sec-ttl", style: { marginBottom: 12 } }, "🏆 Academic Milestones"),
          React.createElement('div', { className: "milestones" },
            MILESTONES.map(m => React.createElement('div', { key: m.name, className: "mcard" },
              React.createElement('div', { className: "m-name" }, m.name),
              React.createElement('div', { className: "m-date" }, m.date),
              React.createElement('div', { className: "mbar" }, React.createElement('div', { className: "mfill", style: { width: `${m.pct}%`, background: m.color } })),
              React.createElement('span', { className: `mst ${m.sc}` }, m.st)
            ))
          )
        )
      )
    )
  );
}

function PageAdmin() {
  const [tab, setTab] = React.useState("excuses");
  const ADM_STATS = [
    { ic: "👥", lbl: "TOTAL STUDENTS", val: 2450, cl: "cya" },
    { ic: "📋", lbl: "PENDING EXCUSES", val: 18, cl: "org" },
    { ic: "💬", lbl: "NEW COMPLAINTS", val: 5, cl: "red" },
    { ic: "⚠️", lbl: "WARNING ISSUED", val: 12, cl: "pur" },
  ];
  return React.createElement('div', { className: "page-enter" },
    React.createElement('div', { className: "pheader" }, React.createElement('h1', null, "🛡️ Admin Dashboard"), React.createElement('p', null, "Manage university services and student requests")),
    React.createElement('div', { className: "adm-stats" },
      ADM_STATS.map(s => React.createElement('div', { key: s.lbl, className: `card card-hover scard ${s.cl}` },
        React.createElement('div', { className: `sc-ic ${s.cl}` }, s.ic),
        React.createElement('div', null, React.createElement('div', { className: "sc-lbl" }, s.lbl), React.createElement('div', { className: "sc-val" }, React.createElement(CountUp, { target: s.val })))
      ))
    ),
    React.createElement('div', { className: "adm-wrap" },
      React.createElement('div', null,
        React.createElement('div', { className: "adm-tabs" },
          React.createElement('button', { className: `adm-tab ${tab === "excuses" ? "act" : ""}`, onClick: () => setTab("excuses") }, "🩺 Medical Excuses"),
          React.createElement('button', { className: `adm-tab ${tab === "complaints" ? "act" : ""}`, onClick: () => setTab("complaints") }, "💬 Complaints"),
          React.createElement('button', { className: `adm-tab ${tab === "students" ? "act" : ""}`, onClick: () => setTab("students") }, "👥 Students List")
        ),
        React.createElement('div', { className: "adm-table" },
          React.createElement('div', { className: "adm-thead" }, React.createElement('span', null, "STUDENT"), React.createElement('span', null, "ISSUE"), React.createElement('span', null, "DATE"), React.createElement('span', null, "DOCUMENT"), React.createElement('span', null, "ACTIONS")),
          ADM_EXCUSES.map(e => React.createElement('div', { key: e.sname, className: "adm-row" },
            React.createElement('div', null, React.createElement('div', { className: "adm-sname" }, e.sname), React.createElement('div', { className: "adm-sid" }, e.sid)),
            React.createElement('div', null, React.createElement('span', { className: "medib" }, e.type, " "), e.issue),
            React.createElement('span', { style: { color: "var(--t2)" } }, e.date),
            React.createElement('span', { className: "view-link" }, "📎 View"),
            React.createElement('div', { className: "act-icons" }, React.createElement('span', { className: "act-ic", title: "Approve" }, "✅"), React.createElement('span', { className: "act-ic", title: "Reject" }, "❌"), React.createElement('span', { className: "act-ic", title: "More" }, "⋮"))
          ))
        )
      ),
      React.createElement('div', null,
        React.createElement('div', { className: "logs-card" },
          React.createElement('div', { className: "logs-hd" }, "🔴 Recent Logs"),
          LOGS.map((l, i) => React.createElement('div', { key: i, className: "log-item" },
            React.createElement('div', { className: "log-dot", style: { background: l.dot } }),
            React.createElement('div', null, React.createElement('div', { className: "log-when" }, l.when), React.createElement('div', { className: "log-who" }, l.who), React.createElement('div', { className: "log-what" }, l.what))
          )),
          React.createElement('div', { style: { padding: "11px 16px", fontSize: 12, color: "var(--blu)", cursor: "pointer", textAlign: "center" } }, "View All Activity Logs →")
        ),
        React.createElement('div', { className: "policy-card" },
          React.createElement('div', { className: "pt" }, "📜 University Policy"),
          React.createElement('div', { className: "pd" }, "Administrative actions must comply with the 2026 EduSphere Academic Charter."),
          React.createElement('button', { className: "policy-btn" }, "⬇ Download Charter")
        )
      )
    )
  );
}

function PageSimple({ title, icon, desc }) {
  return React.createElement('div', { className: "page-enter" },
    React.createElement('div', { className: "pheader" }, React.createElement('h1', null, icon, " ", title), React.createElement('p', null, desc)),
    React.createElement('div', { className: "card", style: { padding: "40px", textAlign: "center", maxWidth: 500 } },
      React.createElement('div', { style: { fontSize: 48, marginBottom: 16 } }, icon),
      React.createElement('div', { style: { fontSize: 16, fontWeight: 700, color: "var(--t1)", marginBottom: 8 } }, title),
      React.createElement('div', { style: { fontSize: 13, color: "var(--t2)" } }, desc)
    )
  );
}

// ══════════════════════════════════════
//  SIDEBAR + TOPBAR
// ══════════════════════════════════════
const NAV = [
  { ic: "📊", lbl: "Dashboard", key: "dashboard" },
  { ic: "📷", lbl: "Attendance QR", key: "attendance", badge: "3" },
  { ic: "🎓", lbl: "Student Services", key: "students" },
  { ic: "📚", lbl: "Curriculum Management", key: "curriculum" },
  { ic: "📁", lbl: "Records and Enrollment", key: "records" },
  { ic: "🛡️", lbl: "Admin Panel", key: "admin" },
  { ic: "⚙️", lbl: "Settings", key: "settings" },
];
const NAV2 = [
  { ic: "📊", lbl: "My Grades", key: "grades" },
  { ic: "📋", lbl: "All Assignments", key: "assignments" },
  { ic: "📅", lbl: "My Timetable", key: "timetable" },
  { ic: "➕", lbl: "Add / Drop", key: "adddrop" },
];

function Sidebar({ page, setPage }) {
  return React.createElement('aside', { className: "sidebar" },
    React.createElement('div', { className: "slogo", onClick: () => setPage('dashboard') },
      React.createElement('div', { className: "logo-ic" }, "🎓"),
      React.createElement('div', null, React.createElement('div', { className: "logo-txt" }, "EduSphere"), React.createElement('span', { className: "logo-sub" }, "Student Portal"))
    ),
    React.createElement('nav', { className: "snav" },
      NAV.map(n => React.createElement('div', { key: n.key, className: `nitem${page === n.key ? ' active' : ''}`, onClick: () => setPage(n.key) },
        React.createElement('span', { className: "nic" }, n.ic), n.lbl, n.badge && React.createElement('span', { className: "nbadge" }, n.badge)
      ))
    ),
    React.createElement('div', { className: "sfooter" },
      React.createElement('div', { className: "sup-card" },
        React.createElement('p', null, "Need Help?"), React.createElement('small', null, "Contact support team"),
        React.createElement('button', { className: "sbtn" }, "Get Support")
      )
    )
  );
}

function Topbar({ theme, setTheme, showNotif, setShowNotif }) {
  return React.createElement('header', { className: "topbar" },
    React.createElement('div', { className: "srchwrap" },
      React.createElement('span', { className: "srchic" }, "🔍"),
      React.createElement('input', { className: "srch", placeholder: "Search courses, assignments..." })
    ),
    React.createElement('div', { className: "tbactions" },
      React.createElement('div', { className: "icbtn", onClick: () => setTheme(t => t === 'dark' ? 'light' : 'dark'), title: "Toggle Theme" }, theme === 'dark' ? "☀️" : "🌙"),
      React.createElement('div', { className: "icbtn" }, "⚙️"),
      React.createElement('div', { className: "icbtn", onClick: () => setShowNotif(v => !v) }, "🔔", React.createElement('span', { className: "ndot" })),
      React.createElement('div', { className: "uavt" }, "RA"),
      React.createElement('div', null, React.createElement('div', { className: "uname" }, "Rawda Ayman"), React.createElement('div', { className: "urole" }, "Student"))
    )
  );
}

function NotifPanel({ onClose }) {
  return React.createElement('div', { className: "notif-panel" },
    React.createElement('div', { className: "notif-hd", style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
      React.createElement('span', null, "🔔 Notifications"),
      React.createElement('span', { onClick: onClose, style: { cursor: "pointer", fontSize: 18, color: "var(--t3)" }, title: "Close" }, "×")
    ),
    NOTIFS.map((n, i) => React.createElement('div', { key: i, className: "notif-item" },
      React.createElement('span', { className: "notif-ic" }, n.ic),
      React.createElement('div', null,
        React.createElement('div', { className: "notif-title" }, n.title),
        React.createElement('div', { className: "notif-desc" }, n.desc),
        React.createElement('div', { className: "notif-time" }, n.time)
      )
    ))
  );
}

// ══════════════════════════════════════
//  APP ROOT
// ══════════════════════════════════════
function App() {
  const [page, setPage] = React.useState('dashboard');
  const [theme, setTheme] = React.useState('dark');
  const [showNotif, setShowNotif] = React.useState(false);

  React.useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);

  const renderPage = () => {
    switch (page) {
      case 'dashboard': return React.createElement(PageDashboard, { setPage });
      case 'attendance': return React.createElement(PageAttendance);
      case 'students': return React.createElement(PageStudentServices, { setPage });
      case 'payment': return React.createElement(PagePayment, { setPage });
      case 'curriculum': return React.createElement(PageCurriculum);
      case 'records': return React.createElement(PageRecords);
      case 'admin': return React.createElement(PageAdmin);
      case 'grades': return React.createElement(PageGrades);
      case 'assignments': return React.createElement(PageAssignments);
      case 'timetable': return React.createElement(PageTimetable);
      case 'adddrop': return React.createElement(PageAddDrop, { setPage });
      case 'settings': return React.createElement(PageSettings);
      case 'medical': return React.createElement(PageSimple, { title: "Medical Excuse", icon: "🩺", desc: "Submit and track your medical excuses for missed classes." });
      case 'complaints': return React.createElement(PageSimple, { title: "Complaints", icon: "💬", desc: "Submit academic or general complaints to the administration." });
      case 'warning': return React.createElement(PageSimple, { title: "Academic Warnings", icon: "⚠️", desc: "View and manage your academic warnings and notifications." });
      case 'requests': return React.createElement(PageSimple, { title: "Requests", icon: "📄", desc: "Submit general requests for certificates and documents." });
      default: return React.createElement(PageDashboard, { setPage });
    }
  };

  return React.createElement('div', { className: "app" },
    React.createElement(Sidebar, { page, setPage }),
    React.createElement('div', { className: "main" },
      React.createElement(Topbar, { theme, setTheme, showNotif, setShowNotif }),
      showNotif && React.createElement(NotifPanel, { onClose: () => setShowNotif(false) }),
      showNotif && React.createElement('div', { onClick: () => setShowNotif(false), style: { position: "fixed", inset: 0, zIndex: 199 } }),
      React.createElement('div', { className: "pbody", key: page }, renderPage())
    )
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
