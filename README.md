 # CivicIQ
### Autonomous Civic Incident Intelligence System

> **"Different complaints. One hidden signal."**

> Cities don't have a shortage of complaints. They have a shortage of intelligence connecting those complaints.

---

## Table of Contents

1. [What Is This Project?](#1-what-is-this-project)
2. [The Problem](#2-the-problem)
3. [The Solution](#3-the-solution)
4. [Why This Is "Agentic AI" (Not Just a Chatbot)](#4-why-this-is-agentic-ai-not-just-a-chatbot)
5. [How It Works — The Agent Pipeline](#5-how-it-works--the-agent-pipeline)
6. [Meet the Agents](#6-meet-the-agents)
7. [Key Features](#7-key-features)
8. [Technology Stack](#8-technology-stack)
9. [Project Structure](#9-project-structure)
10. [Getting Started](#10-getting-started)
11. [Environment Variables](#11-environment-variables)
12. [API Reference](#12-api-reference)
13. [About the Data (Please Read)](#13-about-the-data-please-read)
14. [Demo Walkthrough](#14-demo-walkthrough)
15. [Human-in-the-Loop: Who's Really in Charge](#15-human-in-the-loop-whos-really-in-charge)
16. [Safety, Honesty, and Limitations](#16-safety-honesty-and-limitations)
17. [What We Built vs. What We'd Build Next](#17-what-we-built-vs-what-wed-build-next)
18. [Future Scope](#18-future-scope)
19. [Team](#19-team)

---

## 1. What Is This Project?

**CivicIQ** is a prototype system that helps city governments make sense of citizen
complaints — potholes, water leaks, broken streetlights, garbage overflow, and so on.

Instead of treating every complaint as its own isolated ticket, CivicIQ tries to
figure out **which complaints are actually connected**, investigates what might be
**causing** the problem, decides **how urgent** it really is, recommends **which
department should act first**, and then checks whether a claimed fix actually
worked — reopening the case if it didn't.

It is built as a working software prototype with a real backend, a real dashboard,
and a set of cooperating AI "agents" — not a slideshow concept.

---

## 2. The Problem

Every city receives a constant stream of complaints like these:

- A resident reports a pothole on Elm Street.
- Someone else reports water leaking near a footpath, 80 metres away.
- A third resident reports the road surface crumbling nearby.
- A fourth reports water pooling in the same street after rain.

Most municipal complaint systems treat these as **four unrelated tickets**. Four
different departments might each send someone out, fix the surface-level symptom
they were told about, and move on — without anyone noticing that all four reports
are actually **one underlying problem**: an underground water leak slowly weakening
the road, which caused the pothole, which is now collecting water.

The result: repeated repairs, wasted budget, and problems that keep coming back.

Cities aren't short on complaints. **They're short on the intelligence needed to
connect the dots between them.**

---

## 3. The Solution

CivicIQ acts like a team of specialists reviewing every incoming complaint:

1. It **understands** what the complaint is actually about (using the photo and description).
2. It **looks for other complaints nearby**, in time and location, that might be related.
3. It **investigates whether they share a root cause**, using a simple knowledge
   base of how civic problems tend to cascade (e.g., a leak weakens a road, which
   then cracks and forms a pothole).
4. It **calculates a real-world priority score** — so three reports of exposed
   electrical wiring near a school can outrank forty low-risk garbage complaints,
   instead of just going by complaint count.
5. It **recommends the order** in which departments should act (e.g., fix the leak
   *before* repaving the road, or you'll just be repairing the same pothole again).
6. Once someone claims the issue is fixed, it **checks the evidence** — comparing
   before/after photos, GPS location, and whether new complaints are still coming
   in from the same spot — before agreeing to close the case.

At every step, a human authority reviews and approves the important decisions.
CivicIQ investigates and recommends; **people decide.**

---

## 4. Why This Is "Agentic AI" (Not Just a Chatbot)

A chatbot answers a question and stops. CivicIQ does not work that way.

CivicIQ runs a continuous loop of specialized, cooperating pieces of software
("agents"), each with its own job, that hand off structured information to the
next one — and the whole process **persists and evolves over time**, tracking an
incident from first report through investigation, action, and verification (and
back to investigation again, if the fix didn't actually work).

The loop looks like this:

```
OBSERVE → UNDERSTAND → CONNECT → INVESTIGATE → PRIORITIZE
   → PLAN → ACT/RECOMMEND → TRACK → VERIFY → REPLAN OR ESCALATE
```

Two design rules make this trustworthy rather than a "black box":

- **Anything that can be calculated with plain logic (distances, dates, scores,
  statuses) is calculated with plain code — not guessed by an AI model.**
  The AI is only used where actual judgment or language understanding is needed:
  reading a photo, explaining a pattern in plain English, or writing a complaint.
- **Every AI decision is shown with its reasoning**: what was decided, what
  evidence supported it, how confident the system is, and what it recommends
  doing next. Nothing is presented as a fact without a visible trail behind it.

---

## 5. How It Works — The Agent Pipeline

Here's what happens, step by step, when a new report comes in:

| Step | What Happens |
|---|---|
| 1. Perception | The photo and description are analyzed to identify the issue type and how severe it looks. |
| 2. Clustering | The system checks whether other complaints nearby (in distance and time) might be related. |
| 3. Incident Detection | It decides whether this is a standalone complaint, a duplicate, or part of a bigger pattern. |
| 4. Root Cause Investigation | If it's a pattern, the system proposes a possible underlying cause and shows its reasoning — clearly labeled as a hypothesis, not a confirmed diagnosis. |
| 5. Impact Scoring | A priority score (0–100) is calculated from real-world factors like safety risk, not just how many people complained. |
| 6. Response Planning | The system suggests which department should act, and in what order, explaining why that order matters. |
| 7. Human Approval | A civic authority reviews and approves the plan before anything is officially actioned. |
| 8. Tracking & Escalation | If nothing happens within an expected time window, the system flags it and recommends escalation. |
| 9. Resolution Verification | Once marked "resolved," the system checks the before/after evidence and either confirms the fix or flags it for another look. |
| 10. Reopen or Close | Based on the evidence, the incident is formally closed — or reopened if the fix didn't hold. |

Every one of these steps is visible on the dashboard, in real time, as a pipeline
— so anyone watching can see exactly what the system is doing and why.

---

## 6. Meet the Agents

Think of each agent as a specialist with one clear job. They don't overlap, and
they pass clean, structured information to each other rather than vague text.

| Agent | Job | Uses AI For | Uses Plain Code For |
|---|---|---|---|
| **Perception Agent** | Reads the photo + description, classifies the issue and its severity | Describing what's visible in the photo | Looking up known classifications for demo reliability |
| **Geo-Temporal Clustering Agent** | Finds nearby, recent complaints that might be related | Reasoning about *why* two issues might be connected | Calculating actual distance and time gaps |
| **Incident Detection Agent** | Decides if a cluster is one bigger incident, duplicates, or unrelated | Explaining the reasoning in plain language | Applying the classification rules |
| **Root Cause Investigation Agent** | Proposes a likely underlying cause and the chain of events leading to it | Narrating the hypothesis and its confidence | Looking up known cause-and-effect relationships (e.g., leak → road damage) |
| **Civic Impact Agent** | Scores how urgent/important the incident really is | Explaining the score in plain language | Calculating the score itself from weighted factors |
| **Response Orchestration Agent** | Decides which department(s) should act, and in what order | Explaining why that sequence avoids wasted work | Looking up department responsibilities |
| **Complaint Drafting & Filing Agent** | Writes a clear, formal complaint record | Drafting the complaint text | Assigning IDs, timestamps, and status |
| **Escalation Agent** | Watches for incidents that are taking too long | — | Checking deadlines and triggering reminders/escalations |
| **Resolution Verification Agent** | Checks whether a "fix" is actually backed by real evidence | Comparing and explaining evidence | Comparing GPS coordinates and timestamps |
| **Orchestrator** | Runs the whole pipeline and keeps a running log of what every agent did | — | Manages the overall workflow and incident state |

---

## 7. Key Features

- 📸 **Citizen reporting** — upload a photo, pick a location, describe the issue, get a tracking ID.
- 🔗 **Automatic incident linking** — connects related complaints instead of treating them separately.
- 🧠 **Explainable root-cause hypotheses** — always labeled as AI-generated and recommending human inspection.
- 📊 **Real-world impact scoring** — urgency based on safety and consequences, not just complaint volume.
- 🏛️ **Department response planning** — a sensible action order, not everyone showing up at once.
- 🕒 **Live agent activity timeline** — see the system think, step by step, in real time.
- 🔍 **Resolution verification** — before/after evidence checked before a case is allowed to close.
- 🔁 **Reopen & escalate logic** — problems that come back are automatically flagged again.
- ✅ **Human approval gates** — every high-impact decision waits for a person to say yes.

---

## 8. Technology Stack

**Backend**
- Python 3.11+, FastAPI (web framework), Pydantic (data validation)
- JSON files as the prototype's data store (no external database required)
- AI model calls via the Anthropic API and/or Google Gemini API (see [Environment Variables](#11-environment-variables))

**Frontend**
- React 18 + Vite + TypeScript
- Tailwind CSS + shadcn/ui components
- Recharts (charts), Lucide (icons)

---

## 9. Project Structure

```
civiciq/
├── backend/
│   ├── main.py                  # FastAPI app entry point
│   ├── agents/                  # One file per agent (see Section 6)
│   ├── tools/                   # Plain-code helpers: distance math, scoring, lookups
│   ├── services/                # AI model wrappers (text + vision)
│   ├── data/                    # Synthetic complaints, incidents, knowledge bases
│   └── scripts/
│       ├── seed_data.py         # Generates the synthetic demo dataset
│       └── reset_demo.py        # Resets the demo to a clean starting state
├── frontend/
│   └── src/
│       ├── pages/               # CitizenView.tsx, AuthorityDashboard.tsx
│       ├── components/          # AgentPipeline, IncidentCard, ImpactScoreGauge, etc.
│       └── lib/api.ts           # Talks to the backend
├── requirements.txt
├── package.json
├── .env.example
└── README.md
```

---

## 10. Getting Started

### Prerequisites
- Python 3.11 or newer
- Node.js 18 or newer
- An API key for Anthropic and/or Google Gemini (see next section)

### Backend setup

```bash
cd backend
python -m venv venv
source venv/bin/activate          # on Windows: venv\Scripts\activate
pip install -r requirements.txt

cp .env.example .env              # then fill in your API key
python scripts/seed_data.py       # generates the synthetic demo dataset
uvicorn main:app --reload         # starts the backend at http://localhost:8000
```

### Frontend setup

```bash
cd frontend
npm install
npm run dev                       # starts the dashboard at http://localhost:5173
```

### Resetting the demo

Before any live demo or fresh test run:

```bash
python backend/scripts/reset_demo.py
```

This restores all four seeded scenarios to their starting state so the walkthrough
behaves identically every time.

---

## 11. Environment Variables

Copy `.env.example` to `.env` and fill in the values below.

| Variable | Description |
|---|---|
| `ANTHROPIC_API_KEY` | API key for Claude models (used for reasoning/narration steps) |
| `GEMINI_API_KEY` | API key for Google Gemini models (optional alternative/complement) |
| `AI_PROVIDER` | Which provider to use by default: `anthropic` or `gemini` |
| `DEMO_MODE` | Set to `true` to enable the "advance demo time" and reset endpoints |

**Never commit your `.env` file or any real API key to version control.**

---

## 12. API Reference

| Method | Route | Purpose |
|---|---|---|
| `POST` | `/reports` | Submit a new citizen report |
| `GET` | `/reports` | List all reports |
| `GET` | `/reports/{report_id}` | Get one report's details |
| `POST` | `/analyze/{report_id}` | Run the Perception Agent on a report |
| `GET` | `/incidents` | List all incidents |
| `GET` | `/incidents/{incident_id}` | Get one incident's full state |
| `POST` | `/incidents/{incident_id}/analyze` | Run clustering + root-cause analysis |
| `GET` | `/incidents/{incident_id}/impact` | Get the Civic Impact Score |
| `GET` | `/incidents/{incident_id}/response-plan` | Get the recommended department action order |
| `POST` | `/incidents/{incident_id}/approve-plan` | Human approval of the response plan |
| `POST` | `/incidents/{incident_id}/resolution` | Submit resolution evidence (after-photo, description) |
| `POST` | `/incidents/{incident_id}/verify-resolution` | Run the Resolution Verification Agent |
| `POST` | `/incidents/{incident_id}/advance-demo-time` | Fast-forward the demo clock to trigger escalation |
| `GET` | `/agent-logs` | View the full agent activity log |
| `GET` | `/dashboard/stats` | Summary numbers for the dashboard |
| `POST` | `/dev/reset-demo` | Reset all seeded scenarios to their starting state |
| `GET` | `/dev/scenarios` | List the pre-built demo scenarios |

---

## 13. About the Data (Please Read)

**CivicIQ uses entirely synthetic, made-up civic complaint data for this
prototype.** No real citizen reports, real photos of real infrastructure, real
department names, or real government officials are used or represented.

The dataset includes 50+ generated reports across several city wards, with four
scenarios deliberately built in so the agent pipeline can be demonstrated reliably:

1. Water leakage → road damage → pothole → waterlogging
2. Drain blockage → waterlogging → garbage accumulation
3. A low-complaint-count but high-risk case: exposed electrical wiring near a school
4. Repeated pothole reports after a previously claimed "resolved" status

Any complaint filing shown in this prototype is a **simulated municipal grievance
workflow for demonstration purposes only** — it does not connect to any real
government system.

---

## 14. Demo Walkthrough

This is the exact sequence used to demonstrate the system live:

1. A citizen submits a water-leakage report → the Perception Agent classifies it
   (High severity, 91% confidence).
2. The Clustering Agent finds 5 related reports within 180 metres.
3. The Incident Detection Agent creates a new connected incident (`INC-2026-001`).
4. The Root Cause Agent proposes: *Water Leakage → Road Weakening → Road Damage →
   Pothole → Waterlogging*, with 84% confidence — clearly labeled as a hypothesis.
5. The Impact Agent scores it 86/100, priority: **Critical**.
6. The Response Agent recommends a 5-step, dependency-ordered department plan.
   A human approves it.
7. A mismatched "after" photo is submitted → the system responds: *"Resolution
   could not be verified — location mismatch"* and refuses to close the case.
8. The correct after-photo is submitted → the system confirms: *"Resolution
   verified"* → the incident closes, risk level drops from Critical to Low.
9. (Optional) Clicking "Advance Demo Time +3 Days" on a separate, unresolved
   incident shows the escalation logic triggering live.

---

## 15. Human-in-the-Loop: Who's Really in Charge

CivicIQ is a **decision-support tool**, not an autonomous decision-maker. The
following actions always require a human authority to explicitly approve them:

- Approving a multi-department response plan
- Escalating an incident
- Closing a critical incident when verification confidence is low
- Reopening an incident based only on uncertain AI evidence

The system's job is to investigate, explain, and recommend. A person makes the
final call on anything with real-world consequences.

---

## 16. Safety, Honesty, and Limitations

- **Root-cause hypotheses are never presented as confirmed diagnoses.** They are
  always labeled *"AI-generated civic incident hypothesis — physical inspection
  recommended."*
- **The system never accuses anyone of wrongdoing.** If resolution evidence
  doesn't match up, the language used is neutral — e.g., *"evidence mismatch"* or
  *"additional inspection recommended"* — never an accusation of fraud or negligence.
- **This is a prototype built on synthetic data.** It has not been tested against
  real citizen data, real department workflows, or real-world edge cases, and
  should not be treated as production-ready.
- **AI-generated text can be wrong.** Confidence scores are estimates, not
  guarantees, and every AI-driven decision is shown with its supporting evidence
  so a human can judge it for themselves.

---

## 17. What We Built vs. What We'd Build Next

**Fully working in this prototype (the MVP):**
- End-to-end agent pipeline from report submission through resolution verification
- Deterministic geo-temporal clustering, impact scoring, and dependency-ordered response planning
- A reliable seed-image classification path (so the live demo doesn't depend on an
  unpredictable live model response) with AI-generated narrative text layered on top
- Live agent activity timeline on the dashboard
- Resolution verification with a realistic fail-then-succeed demo flow
- One-command demo reset for repeatable testing/demos

**Intentionally left as future work (stretch goals), due to time constraints:**
- Full vision-model analysis on freely-uploaded (non-seed) photos
- Complaint drafting in Hindi in addition to English
- The complete multi-level SLA reminder ladder for escalations
- Mobile-responsive polish and animation on the citizen-facing pages

We're listing these openly rather than hiding the gaps — we'd rather be honest
about scope than imply this is more finished than it is.

---

## 18. Future Scope

- Integration with a real municipal grievance/ERP system
- Real-time notifications to citizens as their linked incident progresses
- A public transparency view showing city-wide incident trends (with privacy safeguards)
- Expanding the civic dependency knowledge base with real engineering input
- Support for more languages beyond English and Hindi
- A feedback loop where verified outcomes improve future root-cause hypotheses

---

## 19. Team


| Team Member | Role |
|-------------|------|
| **Mayank Sharma** | Project Lead • Multi-Agent Architecture • Backend Integration |
| **Prakhar** | Frontend Development • UI/UX • Dashboard |
| **Om Rawat** | Backend Development • API Integration • Agent Workflow |
| **Kapil** | AI Engineering • Vision AI • Knowledge Base • Testing |

---

*CivicIQ is a prototype built for demonstration purposes. All data is synthetic.
This is not affiliated with, endorsed by, or connected to any real municipal
government or grievance system.*

