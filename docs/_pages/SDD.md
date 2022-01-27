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
In dit document wordt het volledige systeem in diagrammen en tekst weergegeven en uitgelegd. Ook wordt er besproken waarom bepaalde ontwerpkeuzes zijn gemaakt.

Het doel van het systeem staat beschreven in het [SRS](/srs/#1-introductie).

## 1.2. Definities en afkortingen
Hieronder is een tabel weergegeven waar termen en afkortingen die initieel niet volledig duidelijk zijn worden uitgelegd.

| Term/afkorting                                            | Omschrijving                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [HTTP/2.0](https://datatracker.ietf.org/doc/html/rfc7540) | HTTP/2.0 is de nieuwe HTTP (HyperText Transfer Protocol) versie welke oudere en nieuwere versie van het HTTP-protocol ondersteund en veel optimalisaties en een aantal nieuwe functionaliteiten heeft.                                                                                                                                                                                        |
| [GraphQL](https://graphql.org/)                           | GraphQL is een querytaal voor API's en een runtime voor het vervullen van query's met bestaande gegevens. GraphQL biedt een volledige en begrijpelijke beschrijving van de gegevens in de API, geeft clients de mogelijkheid om precies te vragen wat ze nodig hebben, maakt het gemakkelijker om API's in de loop van de tijd te ontwikkelen en maakt krachtige ontwikkelaarstools mogelijk. |
| Querytaal                                                 | Een querytaal is een computertaal die data kan ophalen en/of plaatsen in een database.                                                                                                                                                                                                                                                                                                        |
| [Firebase](https://firebase.google.com/)                  | Firebase is een toolset die ontwikkelaars helpt met het bouwen, verbeteren en groeien van apps. Het bevat een groot aantal functionaliteiten die ontwikkelaars gebruiken maar niet zelf willen maken omdat dit kostbare tijd kost die beter aan het systeem kan worden besteed.                                                                                                               |
| TCP/IP                                                    | TCP/IP is een verzamelnaam voor het TCP (Transmission Control Protocol) en IP (Internet Protocol). Het wordt gebruikt bij verreweg de meeste communicatie tussen computers en/of netwerken.                                                                                                                                                                                                   |


# 2. Architectuur
## 2.1. HTTP/2.0
Een gebruiker van het systeem zal via HTTP/2.0 verbinden met de web applicatie. Er wordt HTTP/2.0 gebruikt omdat deze versie de nieuwste standaard is. Ook is deze versie het veiligste, snelste en biedt het een aantal nieuwe functionialiteiten ten opzichte van eerdere versies. De nieuwe funcionaliteiten in HTTP/2.0 zijn [hier](https://developers.google.com/web/fundamentals/performance/http2) te vinden.

## 2.2. Firebase
Voor veel functionaliteiten zal er gebruikt worden gemaakt van Firebase. Vanuit web applicatie wordt er gebruikt gemaakt van de Firebase SDK en vanuit de API wordt er gebruik gemaakt van Firebase Admin SDK. De admin SDK wordt alleen in de API gebruikt omdat de admin SDK meer rechten heeft dan de standaard SDK. Er kan in de API meer worden gevalideerd of de gebruiker genoeg rechten heeft om operaties uit te voeren. 

## 2.3. GraphQL
Om de communicatie tusen de webapplicatie en de API zo consistent mogelijk te houden wordt de GraphQL-specificatie aangehouden. GraphQL is een querytaal ontwikkeld door [Meta](https://about.facebook.com/meta/) in 2015. Het zorgt ervoor dat de client precies kan aangeven welke informatie hij wil en in welke vorm. Ook maakt GraphQL het makkelijk om data van verschillende databases en andere data bronnen op te halen en in één keer terug te geven.

## 2.4. PostgreSQL
PostgreSQL is een database die veel verschillende datatypes heeft. Dit zorgt ervoor dat alle informatie op de juiste manier kan worden opgeslagen. Ook is het een relationele database wat betekend dat alle informatie in de database met elkaar in verbinding staat. Er is om deze redenen gekozen om PostgreSQL te gebruiken voor het grootste deel van de data in het systeem. Er wordt gecommuniceerd met de database via TCP/IP.

![Architecture diagram](http://www.plantuml.com/plantuml/svg/VP3H2zem4CQVpL-HkPSAOuwz2MDOBNKoDwfsx6LGqlHCWsbIabIHiVzzrwfTPU9BE7A_xxwxR-uyixwf57aZDLTD0VGJixoK5VCm3U_LPqBSKUgQMLRHdF6ZiARHnT8eO-dRE8ndyMn0H71WZVAnqVuxgu3kJ6wy6G3ENnJWQoNlpCcYSLA3Srd8lR41QzztTFmDlxbaUZmXP8MMjTGYABsliVSbJHFgm9x0ZYVqDncbm4kD6ubB5i59SWZEaBEwPNz2Jh5IaZCl3OvxHhDQ8XecQsp_kVa5HNwrm4vYd1SMzjlDW-t_ar3qY4UBrX5dZi9_IsHxi1rza1RtT82Q-5RIVVGL9I_niAYa7cgwZvkIZ7QWC4pUPXgPixv7saVInZVz-Fu3mYrx7Qz5jfEYz7rocCc0fRyqNLbMbzlDSrc73o9BbybqdTpPK60UudhDZtfmTxyKBlyIxgz6enwVWowQIlq5)
# 3. Gedetailleerde ontwerpbeschrijving
Dit hoofdstuk bevat gedetailleerde ontwerpdocumentatie van alle softwarecomponenten binnen de API. De front-end wordt niet in dit document besproken omdat het document anders te langdradig zou worden.
## 3.1. Implementatiediagram
![Deployment diagram](http://www.plantuml.com/plantuml/svg/RL5XJzim4FsUNt7AFbF6n3HHLHM5ge8DK4QxxUDqYQ-fLSTdsPUYQUA_pt6Z40QA5DlllNj-vxiCWbxQncHXhwr3ZmsKMErhpwrLrspOmuVLOdMnkXWfbhJ5riYAhJnWG_389GkF147-68f_hwjaRcWh80nUrpi1fJrLejbccML5aFy8v7EOpHGTT4NpEVpjYLzKGkdvgUTlDlTtdnEDNlGMAu7yPqjVrx1mpkWAEzCSC00wbpt7h_TPNa6qEBovHQ5WYI4g2WvIUrf_luF3sVdaBBceyiLYfJqbwNhvBP51xV-d5ghHTX1WT_hToNhTpMPJl9SZQdSYRkXwKTns_0Ehs5gCysLoVbIXqr7audom9YWy1RAIcevmnOrZ6m6urqePUa9FNL4pd4QI_95R8TYXZPnFSNs7XEnvyBzgWxOKmYllVFJIOBZMLIfEkr5jGJxe86GhUXsD5PcGOgLTB4bZGkTWTd8oxrDCeNkhzUcdoSViY2HstCi8xcz_8SVeu1m7CUrcaoKyOSE8tZ9zlEDoX5G9KyWtryNfRP5dbsHLsvX_)
### 3.1.1. Ontwerpbeslissingen met betrekking tot implementatie
Het systeem wordt opgebouwd volgens het ['layered pattern'](https://www.linkedin.com/pulse/software-architecture-patterns-layered-priyal-walpita/). Dit zorgt ervoor dat er in het systeem een scheiding is tussen de presentatie, logica en persistentie. Ook zorgt dit ervoor dat het makkelijk is om in de toekomst onderdelen uit het systeem te vervangen of uit te breiden. Dit is makkelijker omdat alle lagen onafhankelijk werken.

## 3.2. Ontwerp API

### 3.2.1. Klassendiagram

### 3.2.2. Sequence diagrammen
### 3.2.3. Activity & state diagrammen

### 3.5.4. Ontwerpbeslissingen met betrekking tot subsysteem

## 3.5. Databaseontwerp
### 3.5.1. Ontwerpbeslissingen met betrekking tot de database
