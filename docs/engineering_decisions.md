# Engineering Decisions

## Purpose

This document serves as the index for major architectural and engineering decisions made during the development of AcePredict.

Detailed decision records are stored as Architecture Decision Records (ADRs).

---

# Decision Log

## ADR-001

Title:

Core Technology Selection

Status:

Accepted

Topics:

* PostgreSQL
* FastAPI
* XGBoost
* Next.js
* Elo Ratings

Document:

adr_001_core_technology_selection.md

---

## ADR-002

Title:

Repository Strategy

Status:

Accepted

Topics:

* Monorepo
* Multi-Repo Evaluation

Document:

adr_002_repository_strategy.md

---

# Future ADRs

## ADR-003

Title:

Database Normalization Strategy

Status:

Planned

Topics:

* Normalized schema
* Analytical performance
* Feature generation

---

## ADR-004

Title:

Feature Computation Strategy

Status:

Planned

Topics:

* Online features
* Offline features
* Feature reproducibility

---

## ADR-005

Title:

Model Selection Strategy

Status:

Planned

Topics:

* Logistic Regression
* Random Forest
* XGBoost
* Model evaluation

---

## ADR-006

Title:

Prediction API Design

Status:

Planned

Topics:

* REST architecture
* Endpoint structure
* Versioning

---

# Decision Principles

AcePredict follows these engineering principles:

1. Simplicity before complexity
2. Reproducibility before optimization
3. Documentation before implementation
4. MVP before advanced features
5. Explainability before sophistication

---

# Version

Engineering Decisions Version: v1

Status: Active
