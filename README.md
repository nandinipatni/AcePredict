# AcePredict

An AI-powered ATP tennis match prediction platform that combines machine learning, Elo ratings, player rankings, surface performance, recent form, and historical match data to predict match outcomes.


## Project Overview

AcePredict is a machine learning engineering project focused on predicting ATP tennis match results using historical tennis data and domain-specific feature engineering.

Unlike simple prediction projects that rely only on rankings or basic statistics, AcePredict incorporates multiple tennis-specific factors including:

* ATP Rankings
* Elo Ratings
* Surface Performance
* Recent Form
* Head-to-Head Records
* Tournament History
* Match Activity Metrics

The goal is not only to predict match outcomes, but also to build a complete machine learning system involving data engineering, feature engineering, model development, APIs, databases, and deployment.


## Why I Built AcePredict

As I began exploring machine learning more seriously, I often found myself overwhelmed by projects that were either highly specialized or difficult to connect with personally.

Many beginner projects felt repetitive, while others required deep domain knowledge in industries I had little exposure to. Tennis was different.

I have followed tennis for years, and much of my understanding of strategy, probability, and decision-making comes from the sport. As the 2026 tennis season progressed, I decided to use a domain I genuinely understood to learn the parts of machine learning engineering that I wanted to master.

AcePredict was created to learn:

* Data Engineering
* Database Design
* Feature Engineering
* Machine Learning Pipelines
* Backend Development
* Model Deployment
* Software Engineering Practices

through a problem space I care deeply about.


## Planned Architecture

```text
Jeff Sackmann ATP Dataset
            │
            ▼
      Data Pipeline
            │
            ▼
       PostgreSQL
            │
            ▼
    Feature Engineering
            │
            ▼
         XGBoost
            │
            ▼
      FastAPI Backend
            │
            ▼
      Next.js Frontend
```


## Technology Stack

### Data & Storage

* PostgreSQL
* Pandas
* NumPy

### Machine Learning

* XGBoost
* Scikit-Learn

### Backend

* FastAPI

### Frontend

* Next.js

### Development Tools

* Git
* GitHub
* VS Code

---

## Machine Learning Features

### Ranking Features

* Player Ranking
* Opponent Ranking
* Ranking Difference

### Elo Features

* Overall Elo
* Surface Elo
* Elo Difference

### Recent Form Features

* Wins in Last 5 Matches
* Wins in Last 10 Matches
* Recent Win Rate

### Surface Features

* Hard Court Win Rate
* Clay Court Win Rate
* Grass Court Win Rate
* Surface Experience

### Head-to-Head Features

* Historical Wins
* Historical Losses
* Head-to-Head Win Rate

### Tournament Features

* Tournament Win Rate
* Best Historical Tournament Result

### Activity Features

* Days Since Last Match
* Matches Played in Last 14 Days
* Matches Played in Last 30 Days


## Dataset

Primary Dataset:

Jeff Sackmann ATP Tennis Dataset

The dataset provides:

* Historical ATP Match Results
* Tournament Information
* Surface Information
* ATP Rankings
* Ranking Points
* Match Statistics


## Project Structure

```text
AcePredict/

├── backend/
│   ├── api/
│   ├── database/
│   ├── ml/
│   └── services/
│
├── data/
│   ├── raw/
│   ├── processed/
│   └── features/
│
├── docs/
│   ├── architecture.md
│   ├── database_design.md
│   ├── data_pipeline.md
│   ├── feature_store.md
│   ├── engineering_decisions.md
│   └── ...
│
├── diagrams/
├── models/
├── notebooks/
└── tests/
```


## Current Status

### Documentation Foundation 

Completed:

* Project Vision
* Roadmap
* Feature Specification
* Database Design
* Data Pipeline Design
* Feature Store Design
* Architecture Design
* Engineering Decision Records (ADRs)

### Implementation 

In Progress:

* Dataset Acquisition
* Exploratory Data Analysis
* Feature Engineering Pipeline
* Elo Rating System
* Model Training


## Learning Goals

This project is being used to develop practical experience in:

* Machine Learning Engineering
* Data Engineering
* Database Design
* Feature Engineering
* Backend Development
* Software Architecture
* Git & GitHub Workflows

## Repository Documentation

Detailed project documentation can be found in the `docs/` directory.

Key documents include:

* Project Vision
* Roadmap
* Architecture Design
* Database Design
* Data Pipeline Design
* Feature Store Specification
* Engineering Decision Records

## Future Roadmap

* ATP Data Ingestion Pipeline
* Automated Elo Calculation
* Feature Engineering Pipeline
* XGBoost Training Pipeline
* Prediction API
* Frontend Dashboard
* Explainable Predictions
* Tournament Simulation Engine


## License

MIT License
