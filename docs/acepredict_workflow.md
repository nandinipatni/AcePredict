\# AcePredict V1 – Machine Learning Pipeline Reference



\## Phase 1: Raw Data



\### Goal



Collect the original data that contains historical tennis match information.



\### Input



ATP Match Data:



\* atp\_matches\_2024.csv

\* atp\_matches\_2025.csv



\### What the Data Contains



Each row represents one completed match.



Example:



Winner: Alcaraz

Loser: Zverev



Additional information:



\* Surface

\* Tournament

\* Round

\* Ranking

\* Ranking Points

\* Age

\* Height

\* Serve Statistics

\* Match Duration



\### Output



Raw dataframe:



```python

df

```



Rows:



```text

6020 matches

```



\---



\## Phase 2: Exploratory Data Analysis (EDA)



\### Goal



Understand the data before building anything.



Think:



"Investigate before modeling."



\### Questions Answered



\#### Dataset Size



How many matches exist?



Result:



```text

6020 matches

```



\#### Surface Distribution



How many matches on:



\* Hard

\* Clay

\* Grass



Result:



```text

Hard: 3596

Clay: 1800

Grass: 624

```



\#### Tournament Distribution



How many:



\* Grand Slams

\* Masters

\* ATP Events



\#### Round Distribution



How many:



\* R128

\* R64

\* R32

\* R16

\* QF

\* SF

\* F



\#### Ranking Analysis



Questions:



\* How important is ATP ranking?

\* How often does the higher-ranked player win?



Result:



```text

Higher-ranked player wins ≈ 63%

```



\#### Missing Value Analysis



Questions:



\* Which columns are incomplete?

\* Can we trust the data?



\#### Data Quality Investigation



Example:



Detected impossible height values.



Investigation revealed a likely source-data issue.



\### Output



Knowledge about:



\* Data quality

\* Feature usefulness

\* Dataset limitations

\* Candidate predictors



\---



\## Phase 3: Feature Engineering



\### Goal



Create variables that are more useful than the raw data.



\### Why?



Raw data:



```text

Winner Rank = 5

Loser Rank = 18

```



More useful:



```text

Rank Difference = 13

```



\### Features Created



\#### Rank Difference



```python

loser\_rank - winner\_rank

```



Measures ranking advantage.



\---



\#### Rank Points Difference



```python

winner\_rank\_points - loser\_rank\_points

```



Measures ATP point advantage.



\---



\#### Age Difference



```python

winner\_age - loser\_age

```



Measures age advantage.



\### Future Features



Version 2:



\* Elo Rating

\* Surface Elo



Version 3:



\* Recent Form

\* Head-to-Head



\### Output



Feature-enhanced dataframe.



\---



\## Phase 4: Dataset Construction



\### Goal



Transform Winner/Loser data into ML training data.



\### Problem



Original dataset:



```text

Winner

Loser

```



Every row already contains the answer.



This creates data leakage.



\### Solution



Create two versions of every match.



\#### Winning Example



Player A = Winner



Target:



```text

1

```



Meaning:



```text

Player A won

```



\#### Losing Example



Player A = Loser



Target:



```text

0

```



Meaning:



```text

Player A lost

```



\### Result



Original:



```text

6020 matches

```



Training examples:



```text

12040 rows

```



Balanced:



```text

6020 wins

6020 losses

```



\### Output



Proper supervised learning dataset.



\---



\## Phase 5: Data Cleaning



\### Goal



Remove invalid data before training.



\### Missing Values Found



Examples:



\* Rank Difference

\* Rank Points Difference

\* Age Difference



\### Decision



Drop rows with missing values.



Reason:



\* Less than 2% missing

\* Simpler than imputation

\* Cleaner V1 model



\### Result



Before:



```text

12040 rows

```



After:



```text

11828 rows

```



\### Output



Clean dataset.



\---



\## Phase 6: Model-Ready Dataset



\### Goal



Convert everything into numerical values.



Machine learning models cannot understand:



```text

Hard

Clay

Grass

```



\### Encoding



Surface:



```text

Hard = 0

Clay = 1

Grass = 2

```



Tournament Level:



```text

A = 0

M = 1

G = 2

D = 3

F = 4

O = 5

```



Round:



```text

R128 = 1

R64 = 2

R32 = 3

R16 = 4

QF = 5

SF = 6

F = 7

RR = 8

BR = 9

```



\### Final Dataset



Features:



\* Surface

\* Tournament Level

\* Round

\* Best Of

\* Rank Difference

\* Rank Points Difference

\* Age Difference



Target:



```text

Did Player A Win?

```



\### Output



```text

11828 rows

8 columns

0 missing values

Ready for machine learning

```



\---



\## Next Phase



Train/Test Split



```text

80% Training

20% Testing

```



Then:



```text

Logistic Regression

↓

Accuracy Evaluation

↓

Probability Predictions

```



This will become the first working version of AcePredict.



