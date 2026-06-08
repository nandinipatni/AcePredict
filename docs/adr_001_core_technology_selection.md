# ADR-001 — Core Technology Selection

Status: Accepted

Date: June 2026

Project: AcePredict

---

# Purpose

This document records the major architectural decisions made for AcePredict.

For each decision we document:

* Problem
* Options Considered
* Tradeoffs
* Final Decision
* Rationale

This ensures architectural transparency and future maintainability.

---

# Decision 1: Database Selection

## Problem

AcePredict requires a system capable of storing:

* Historical ATP matches
* Player metadata
* Rankings history
* Elo history
* Feature generation data
* Future prediction logs

The database must support:

* Complex joins
* Aggregations
* Historical queries
* Scalability
* Production deployment

---

## Options Considered

### Option A — CSV Files

Pros

* Extremely simple
* No setup required
* Useful for experimentation

Cons

* No relationships
* Poor query performance
* Difficult to maintain
* Not production-ready
* No SQL learning

---

### Option B — SQLite

Pros

* Lightweight
* Easy setup
* SQL support

Cons

* Limited scalability
* Less representative of production systems
* Single-file architecture

---

### Option C — PostgreSQL

Pros

* Industry standard
* Excellent relational support
* Strong indexing
* Advanced query capabilities
* Widely used in production
* Valuable interview skill

Cons

* More setup complexity
* Requires database management

---

## Decision

Use PostgreSQL.

---

## Rationale

AcePredict is intended to demonstrate real-world engineering practices rather than notebook-based experimentation.

PostgreSQL provides:

* Professional database experience
* SQL proficiency
* Schema design experience
* Query optimization opportunities

The additional complexity provides significant educational and portfolio value.

---

# Decision 2: Backend Framework

## Problem

The system requires a backend service capable of:

* Serving predictions
* Querying PostgreSQL
* Exposing REST APIs
* Handling validation
* Supporting future scalability

---

## Options Considered

### Option A — Flask

Pros

* Simple
* Mature ecosystem

Cons

* More manual setup
* Less structured
* Limited automatic validation

---

### Option B — Django

Pros

* Full-featured framework
* Built-in admin tools

Cons

* Heavyweight
* More than project requires
* Larger learning curve

---

### Option C — FastAPI

Pros

* High performance
* Automatic API documentation
* Built-in validation
* Excellent typing support
* Popular in ML systems

Cons

* Smaller ecosystem than Django

---

## Decision

Use FastAPI.

---

## Rationale

FastAPI aligns closely with modern ML engineering workflows.

Benefits include:

* Automatic OpenAPI documentation
* Strong integration with Python ML stack
* Type-safe request handling
* Production-ready architecture

FastAPI is widely used for model-serving systems.

---

# Decision 3: Machine Learning Algorithm

## Problem

AcePredict predicts ATP match outcomes using structured historical data.

The model must:

* Handle tabular features
* Produce probabilities
* Support explainability
* Perform well on medium-sized datasets

---

## Options Considered

### Option A — Logistic Regression

Pros

* Highly interpretable
* Fast training
* Strong baseline

Cons

* Limited ability to capture nonlinear relationships

---

### Option B — Random Forest

Pros

* Handles nonlinear relationships
* Easy to use

Cons

* Larger models
* Often outperformed by boosting methods

---

### Option C — Neural Networks

Pros

* Highly flexible

Cons

* Requires more tuning
* Often unnecessary for tabular data
* Reduced interpretability

---

### Option D — XGBoost

Pros

* Excellent performance on tabular datasets
* Handles nonlinear interactions
* Strong feature importance support
* Widely used in industry and competitions

Cons

* More complex than logistic regression

---

## Decision

Use XGBoost as primary model.

Maintain Logistic Regression as baseline.

---

## Rationale

Most successful sports prediction systems use engineered features with gradient-boosted decision trees.

XGBoost provides:

* Strong predictive performance
* Robust handling of feature interactions
* Good probability estimates
* Industry relevance

Using a baseline model first allows objective comparison.

---

# Decision 4: Frontend Framework

## Problem

AcePredict requires a modern user interface for:

* Match prediction
* Analytics display
* Explainability visualization

---

## Options Considered

### Option A — Static HTML/CSS

Pros

* Very simple

Cons

* Poor scalability
* Limited interactivity

---

### Option B — React

Pros

* Extremely popular
* Flexible

Cons

* Requires additional setup decisions

---

### Option C — Next.js

Pros

* Built on React
* Routing included
* Excellent developer experience
* Production-friendly architecture
* Industry adoption

Cons

* Slightly higher learning curve

---

## Decision

Use Next.js.

---

## Rationale

Next.js provides a professional frontend architecture while retaining React's flexibility.

Benefits include:

* Component-based design
* API integration simplicity
* Future deployment flexibility
* Strong resume value

---

# Decision 5: Rating System

## Problem

Raw ATP rankings alone do not fully represent player strength.

The project requires a dynamic measure of player performance.

---

## Options Considered

### Option A — ATP Ranking Only

Pros

* Easy to obtain
* Official metric

Cons

* Updates slowly
* Does not capture current form well

---

### Option B — ATP Ranking Points

Pros

* More granular

Cons

* Still limited by ranking system design

---

### Option C — Elo Rating System

Pros

* Dynamic
* Match-by-match updates
* Captures player strength changes quickly
* Widely used in sports analytics

Cons

* Must be calculated manually

---

## Decision

Use Elo ratings as a primary predictive feature.

---

## Rationale

Elo provides a stronger representation of player strength than rankings alone.

Advantages:

* Reflects recent performance
* Updates after every match
* Surface-specific variants can be created
* Widely respected in sports analytics

AcePredict will maintain:

* Overall Elo
* Hard-court Elo
* Clay-court Elo
* Grass-court Elo

---

# Decision 6: Architecture Philosophy

## Decision

Adopt a modular architecture.

---

## Principles

Data Layer

Responsible only for storage.

---

Feature Layer

Responsible only for feature generation.

---

ML Layer

Responsible only for training and inference.

---

API Layer

Responsible only for serving requests.

---

Frontend Layer

Responsible only for user interaction.

---

## Rationale

Separation of concerns improves:

* Maintainability
* Testability
* Scalability
* Interview discussion quality

The architecture mirrors production systems used in modern ML applications.

---

# Summary

Selected Technologies

Database:
PostgreSQL

Backend:
FastAPI

ML Model:
Logistic Regression (Baseline)
XGBoost (Primary)

Frontend:
Next.js

Rating System:
Elo

Architecture Style:
Modular Service-Oriented Design

Primary Goal:
Build a production-style machine learning system that demonstrates software engineering, data engineering, and machine learning engineering skills in a single cohesive project.
