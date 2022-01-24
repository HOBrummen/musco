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

Het doel van de applicatie staat beschreven in het [SRS](/srs/#1-introductie).

## 1.2. Definities en afkortingen
Hieronder is een tabel weergegeven waar termen en afkortingen die initieel niet volledig duidelijk zijn worden uitgelegd.

| Term/afkorting                                                                    | Omschrijving                                                                                                                                                                      |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [HTTP/2.0](https://datatracker.ietf.org/doc/html/rfc7540)                         | HTTP/2.0 is de nieuwe HTTP (HyperText Transfer Protocol) versie welke oudere en nieuwere versie van het HTTP-protocol ondersteund en veel optimalisaties heeft.                   |
| [ODBC](https://github.com/microsoft/ODBC-Specification/blob/master/ODBC%204.0.md) | ODBC(Open DataBase Connectivity) is een standaar databasetoegankelijkheidsmethode op verschillende manieren te communiceren met een database onafhankelijk van het type database. |

# 2. Architectuur
Een gebruiker van het systeem zal via HTTP/2.0 verbinden met de web applicatie. Er wordt HTTP/2.0 gebruikt omdat deze versie de nieuwste standaard is. Ook is deze versie het veiligste, snelste en biedt het een aantal nieuwe functionialiteiten ten opzichte van eerdere versies.

Voor veel functionaliteiten zal Firebase van Google gebruikt worden. Firebase maakt het makkelijk om notificaties versturen naar mobiele apparaten en zorgt ook voor de authenticatie in de app.

<!-- TODO: Decide to use REST or GraphQL. -->
Om de communicatie tusen de webapplicatie en de API zo consistent mogelijk te houden wordt de **REST/GraphQL**-specificatie aangehouden. 



![Architecture diagram](http://www.plantuml.com/plantuml/svg/XP7VIyCm4CVVyrV4-TA1EF5j8B9kfIhuOsuJ7qkQtjAmDYd9TME8_xlNjTCAubx2iVli--CwyIWSrcN1phIHHPq1ln5EvheK2AFmEDqovZVQLCA9agT2RfIpjSbcjh2EdyTXF8x7FIA2jQWBZAt1Pr42NzZKekq17lS5qEkqF9YpQUsr0U-JKA9rWMZU2pvuef-b5cOmPEoEB2jjL90ZLhIxNwtct8FRWXiC-GTRWSmD1LBx98AjbX3i81LLWxv3ocagj1IeBQdz0OjA4ndE7sZxsRa5MTeQq6PkFIe7ozV7_qspz3SSJLl1yCS_MO8xi6ljAA87-aVSZKtJ1HHq1zcS8x8xSxn6LwTjFhg-l2AMq5RDg6IXLOxVfQdFAVI0z2g-HDDP1uQAugisxLlL2zhAdu18UCWcO3Bwjby0)
# 3. Gedetailleerde ontwerpbeschrijving
Dit hoofdstuk bevat gedetailleerde ontwerpdocumentatie van alle softwarecomponenten binnen de API. De front-end wordt niet in dit document besproken omdat het document anders te langdradig zou worden.
## 3.1. Implementatiediagram
![Deployment diagram](http://www.plantuml.com/plantuml/svg/RP5lYzD048VVvrCCyVLLJqxaf9JhNGbLsbhRggydkzDqwMPdsPsqYFZTtVoX1Zm2csH-3y_C94zHC4XJsooUZVCOi8OIrRaAt3ZzmfO3l2dcnMFnE28MTCJ6Ii5EDbWJxBXauH4GvPUbT0QZEhcbeu0m15ET1BG9fCImonnhWlnxf933TAhfOXJDPl1x27vI2MNWwv0l3-lLXox68EQ8IY3_qT2NFSozjqPXwym18w3tsPzq3Px5CoJ5vRyk6WLBZ8dOSfGgqFxR2Yxt3vFxpgBBVuhbuR1zJPAmauY_ZJpVVcxp3UiqLt9zd3pq57gJ8CMrPqTEO6sqjdJ5G6rQtzv6IBxZHWXEw58Mkf52MubZPhGwMAwCQhd-gVy4w3rCx-vcenxm2Tfzzc_VJzvbetA73ItwMr_gRTtP5tIP55yNpo_P4pcT_l1V)
### 3.1.1. Ontwerpbeslissingen met betrekking tot implementatie
Het systeem wordt opgebouwd volgens het ['layered pattern'](https://www.linkedin.com/pulse/software-architecture-patterns-layered-priyal-walpita/). Dit zorgt ervoor dat er in het systeem een scheiding is tussen de presentatie, logica en persistentie. Ook zorgt dit ervoor dat het makkelijk is om in de toekomst onderdelen uit het systeem te vervangen of uit te breiden. Dit is makkelijker omdat alle lagen onafhankelijk werken.
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
