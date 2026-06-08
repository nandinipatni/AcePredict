# ADR-002 — Repository Strategy: Monorepo vs Multi-Repository

Status: Accepted

Date: June 2026

Project: AcePredict

---

# Purpose

This document records the repository organization strategy for AcePredict.

The goal is to determine how project components should be structured in source control to maximize:

* Maintainability
* Developer productivity
* Learning outcomes
* Portfolio value
* Recruiter readability

---

# Problem Statement

AcePredict contains multiple components:

* Frontend application
* Backend API
* Machine learning pipeline
* Database resources
* Documentation
* Deployment configurations

A decision must be made regarding whether these components should be stored in:

1. A single repository (Monorepo)
2. Multiple repositories (Multi-Repo)

---

# Option A — Multi-Repository Architecture

## Example Structure

AcePredict-Frontend

AcePredict-Backend

AcePredict-ML

AcePredict-Docs

AcePredict-Infrastructure

---

## Advantages

### Strong Separation

Each service has an isolated codebase.

---

### Independent Release Cycles

Frontend and backend can be deployed independently.

---

### Team Scalability

Different teams can own different repositories.

---

### Permission Control

Access can be managed per repository.

---

## Disadvantages

### Higher Management Overhead

Multiple repositories require:

* Separate setup
* Separate CI/CD
* Separate documentation

---

### Fragmented Git History

Project evolution becomes difficult to follow.

---

### Increased Complexity

Developers must coordinate changes across repositories.

---

### Poorer Portfolio Experience

Recruiters must open several repositories to understand the project.

---

## Suitability for AcePredict

Low

The project is being developed primarily by a single engineer and does not currently require independent teams or release cycles.

---

# Option B — Monorepo Architecture

## Example Structure

AcePredict/

├── backend/

├── frontend/

├── database/

├── data/

├── models/

├── docs/

├── deployment/

├── tests/

└── README.md

---

## Advantages

### Single Source of Truth

All project components exist in one location.

---

### Simpler Development Workflow

One clone command provides access to:

* Frontend
* Backend
* ML pipeline
* Documentation

---

### Unified Git History

Architecture evolution can be tracked in one place.

Example:

Commit:

"Add Elo feature engineering and prediction endpoint"

can contain:

* ML changes
* Database changes
* API changes

in a single commit.

---

### Better Recruiter Experience

A recruiter can understand the project from one repository.

---

### Better Learning Experience

Encourages understanding of how all system components interact.

---

### Easier Documentation

One documentation directory.

One roadmap.

One README.

One architecture reference.

---

### Faster Iteration

No cross-repository synchronization required.

---

## Disadvantages

### Larger Repository Size

Repository grows as project expands.

---

### Less Team Isolation

Not ideal for large engineering organizations.

---

### Shared Release Process

All components exist within the same repository structure.

---

## Suitability for AcePredict

High

The project is currently:

* Single-developer
* Learning-focused
* Portfolio-focused
* Interview-focused

---

# Alternative Considered

## Hybrid Repository Structure

Example

Main Repository:

AcePredict

Separate Repository:

AcePredict-Data

---

### Reason Rejected

Adds complexity without significant educational or portfolio benefit.

The expected dataset size does not justify repository separation at this stage.

---

# Decision

Use a Monorepo.

---

# Rationale

AcePredict is intended to demonstrate end-to-end engineering ownership.

The primary audience includes:

* Internship recruiters
* ML interviewers
* Software engineering interviewers
* Technical reviewers

For these audiences, a monorepo provides the clearest representation of the entire system.

A reviewer should be able to:

1. Read the README
2. Understand the architecture
3. Explore backend code
4. Explore frontend code
5. Review ML components
6. Review documentation

without switching repositories.

---

# Repository Structure

AcePredict/

├── backend/

│   ├── api/

│   ├── services/

│   ├── ml/

│   ├── database/

│   └── tests/

│

├── frontend/

│   ├── app/

│   ├── components/

│   ├── lib/

│   └── public/

│

├── data/

│   ├── raw/

│   ├── processed/

│   └── features/

│

├── models/

│

├── notebooks/

│

├── docs/

│

├── diagrams/

│

├── deployment/

│

├── .github/

│   └── workflows/

│

├── README.md

├── LICENSE

└── CONTRIBUTING.md

---

# Future Reassessment Criteria

This decision should be reconsidered if:

* Multiple developers join the project
* Independent deployment cycles become necessary
* Infrastructure complexity increases significantly
* Individual services become large enough to justify isolation

Until those conditions are met, the monorepo remains the preferred architecture.

---

# Consequences

## Positive

* Easier project management
* Better recruiter experience
* Cleaner GitHub presentation
* Faster development iteration
* Stronger portfolio value
* Simpler onboarding

---

## Negative

* Larger repository size
* Less service isolation
* Potential future migration effort if the project scales significantly

---

# Final Decision

Repository Strategy:

Monorepo

Reason:

Optimize for learning, engineering clarity, portfolio quality, recruiter readability, and end-to-end system ownership.
