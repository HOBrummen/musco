---
layout: page
title: System Design Document
permalink: /sdd/
categories: [SDD, Documentation]
authors: 
  - Imre Boersma
sources:
  - link: https://www.linkedin.com/pulse/software-architecture-patterns-layered-priyal-walpita/
    text: Layered architecture pattern
toc: true
---

# 1. Introductie

## 1.1. Beschrijving
In dit document wordt het volledige systeem in diagrammen en tekst weergegeven en uitgelegd. Ook wordt er besproken waarom bepaald ontwerpkeuzes zijn gemaakt.

## 1.2. Definities en afkortingen
Hieronder is een tabel weergegeven waar termen en afkortingen die initieel niet volledig duidelijk zijn worden uitgelegd.

| Term/afkorting | Omschrijving |
| -------------- | ------------ |
| SDD            | test         |

# 2. Architectuur
Het systeem wordt opgebouwd volgens het ['layered pattern'](https://www.linkedin.com/pulse/software-architecture-patterns-layered-priyal-walpita/). Dit zorgt ervoor dat er in het systeem een scheiding is tussen de presentatie, logica en persistentie. Ook zorgt dit ervoor dat het makkelijk is om in de toekomst onderdelen uit het systeem te vervangen of uit te breiden. Dit is makkelijker omdat alle lagen onafhankelijk werken.
<!-- TODO: Move text to 3.1. and add text for below diagram. -->
![Architecture diagram](https://www.plantuml.com/plantuml/svg/dPBVQy8m4CVVyrSS-jmvzYQ8sEaw1_lXjB3dItBQO9kKvAhilrzQcTq64xQ7Nidn-NnpS9a5HizDLOgmDxP6ZnL8LFkTTutLSrSw3yCipSRP-0kne2qs9MVEyZDM16id7JiXK77advfWb44RpruLfa8c6EQa2XlZTkymU2C9MDUbKSZ6sG5WW2F9s8B9XCzWekbW54sdl-MagmS8v0_akmYipT_y1J9A3DJPMdwNhTC_rBGV6GRBF5zjHZTNrvrSCDSX-jWZYR5CVelgKihwRfEFxjVfQldws0Lv2loFd9V5xRppdPRgWYy-TmE9Dxk2a-bfTD7LlddQXZZz8D7kQ6Et7KwqfGUnDY9-PwIzNxIbHxGKCx8wlh4F)
# 3. Gedetailleerde ontwerpbeschrijving
## 3.1. Implementatiediagram
### 3.1.1. Ontwerpbeslissingen met betrekking tot implementatie
## 3.2. Ontwerp presentatielaag
### 3.2.1. Klassendiagram
### 3.2.2. Sequence diagrammen
### 3.2.3. Activity & state diagrammen
### 3.2.4. Ontwerpbeslissingen met betrekking tot subsysteem

## 3.3. Ontwerp bedrijfslaag
### 3.3.1. Klassendiagram
### 3.3.2. Sequence diagrammen
### 3.3.3. Activity & state diagrammen
### 3.3.4. Ontwerpbeslissingen met betrekking tot subsysteem

## 3.4. Ontwerp persistentielaag
### 3.4.1. Klassendiagram
### 3.4.2. Sequence diagrammen
### 3.4.3. Activity & state diagrammen
### 3.4.4. Ontwerpbeslissingen met betrekking tot subsysteem

## 3.5. Databaseontwerp
### 3.5.1. Ontwerpbeslissingen met betrekking tot de database
