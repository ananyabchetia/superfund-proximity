# superfund-proximity

This project examines a small community’s fight against a wood treatment facility that polluted groundwater and air, and released hazardous waste for decades in Eugene, Oregon.

The reported story is published here: **[A guilty plea was just the beginning.](https://ananyabchetia.github.io/superfund-proximity/)**

The project also has an interactive mapping tool and investigates how many public schools are located within one mile of a Superfund site. This repository contains the data, analysis and code used to discover this.

## File structure

### 1. src:

a. data : contains raw and processed data.

b. google-maps-api : contains html for my interactive mapping tool

c. graphics : contains html for responsive graphics plus svg files.

d. jupyter-notebooks : contains three notebooks.

1. clean-public-records : cleans public records data

2. merge-schools-superfunds : joins public school dataset with superfund dataset via buffering method.

3. analysis-on-schools : contains R analysis on what type of schools are located near superfund sites (low-income, racial demographic, etc.)

### 2. assets

a. scrollytelling : contains scrollytelling png's and .gitignore files.

### 3 templates

a. contains scrollytelling htmls for responsive design.

## Workflow

#### Check out the jupyter notebooks for analysis:

1. merge-schools-superfunds.ipynb:

   Uses geospatial analysis to identify public schools located within one mile of Superfund sites.

   Specifically uses GeoPandas for spatial operations, reprojects geometries to EPSG:5070 and applies a one-mile buffer to calculate proximity.

2. analysis-on-schools.ipynb:

   Analysis on what type of schools are located near Superfund sites. Are they low-income? Which state has the most schools near these hazardous sites? Analysis was done on R.

3. clean-public-records.ipynb:

   Cleans FOIA-requested complaint data and formats it for a Datawrapper visualization.

## Final

This story involved reading dozens of court records, filing public records requests, interviewing vulnerable sources and combining data with in-depth reporting. (And yes, all under a tight deadline.)

Reach me at ananyabchetia@gmail.com to learn more.
