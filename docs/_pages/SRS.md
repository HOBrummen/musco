---
layout: page
title: System Requirement Specification
permalink: /srs/
categories: [SRS, Documentation]
---

# Introductie
## Beschrijving
Musco is een applicatie die de ledenadministratie van muziekverenigingen uitbreidt met het versturen van mededelingen, afmelden voor repetities en de mogelijkheid om evenementen te organiseren. Dit doet Musco door te verbinden met het huidige ledenadministratiesysteem en de functionaliteiten uit te breiden.

Musco biedt een applicatie waarin mededelingen kunnen worden verstuurd naar de muzikanten en waar muzikanten zich kunnen afmelden voor repetities. Ook kunnen er evenementen gepland worden in de verenigingsagenda. Muzikanten kunnen zich aanmelden voor deze evenementen en zo meer informatie over evenementen verkrijgen.

## Gebruikers

Musco wordt gebruikt door muzikanten van een muziekvereniging. Muzikanten worden opgedeeld in instrumenten, secties en orkesten. Verder kunnen er commissies aangemaakt worden. Elke commissie heeft minstens één moderator. Commissies bestaan verder uit muzikanten. Alleen de moderator uit een commissie kan een evenement aanmaken vanuit de naam van de commissie van de moderator. Het systeem wordt beheerd door één of meerdere beheerders.

Rollen zijn incrementeel. Dit wil zeggen dat een moderator ook alle functionaliteiten van een lid kan gebruiken. Hetzelfde geldt voor beheerders. Zij kunnen alle functionaliteiten van een moderator en een lid gebruiken

### Muzikant
Muzikanten zijn gebruikers die toegang hebben tot het systeem. Muzikanten kunnen zich afmelden voor repetities en zich aanmelden voor evenementen. Muzikanten kunnen hun eigen gegevens aanpassen en mededelingen ontvangen. Deze mededelingen krijgen ze via mail of notificaties op de telefoon binnen. Gebruikers kunnen aangeven via welke medium/media zij de mededelingen willen ontvangen.
### Moderator
Een moderator kan een overzicht van afmeldingen bekijken. De moderator kan mededelingen, evenementen en commissies aanmaken. Als een moderator een commissie aanmaakt is hij de beheerder van de aangemaakte commissie.
### Beheerder
Beheerders hebben de meeste rechten binnen het systeem. Beheerders kunnen moderators aanwijzen en beheren alle gegevens in het systeem. Deze rol kan als enige andere beheerders aanwijzen. Beheerders kunnen ook alles doen wat moderators kunnen uitvoeren.
### Gebruiker
Een gebruiker is iemand die de website van Musco bezoekt. Hij kan niet in het systeem en kan geen functionaliteiten gebruiken. Een gebruiker kan zich enkel inlezen in de functionaliteiten van Musco. Een gebruiker kan ook een demo aanvragen.
## Werkomgeving
De applicatie wordt gemaakt met behulp van Flutter. Flutter zorgt ervoor dat de applicatie gedistribueerd kan worden op Android, web en IOS met één codebase. De data van het systeem wordt in een PostgreSQL database opgeslagen in de cloud. Deze data wordt in de applicatie opgehaald door middel van een GraphQL API. Deze API wordt geschreven in TypeScript.
## Ontwerp & implementatie eisen
Het systeem moet goedkoop in de cloud worden geïmplementeerd. Dit komt omdat de kosten voor persoonlijke rekening zijn. De API moet in een “Strongly typed” programmeertaal ontwikkeld worden. Dit wordt aangehouden zodat er tijdens het programmeren runtime errors kunnen worden voorkomen.

## Product functionaliteiten

![PlantUML Use case diagram](http://www.plantuml.com/plantuml/svg/PP1DJiCm48NtFeKbDc7H0xIhXfz8BAWGa0DCuqbgQiz4zgH8FJsJbaOMRAodDvyyxyqs2oIPOh1jHjk1Fix3a22QVFGqWYgxX-uu99x8FNBWPE-Qkbatwu9umXwc80sJx22YVUSz2niJi1ShR9CV3g8_9-p4CvdDwtJsHo3Pg6I72OIJwWSy82Q7gatrGiuZ8Lde8mRdQRYtzOTDE7AIUf-HEZHL3JHF5SEJqX59BbZs0xNZitfYghS0HF-GKTrVeEuFG0w3CX4TghgjqpLkn-BdNQsN4sDIw7gsSIQkkXrDzSduxR_Eyn-tJXS0yXn6UnfpwsrNgpz5oacPVJcF3eh4fLrcN2we_fAiD8iqMoGtnV03)

*Vanaf dit punt worden diagrammen altijd in het Engels weergegeven. Dit wordt gedaan om consistentie redenen met de code.*

### Indienen afmelding
Alle muzikanten die in een orkest zitten en een instrument bespelen kunnen zich afmelden voor geplande repetities.
### Aanmelden evenement
Een muzikant kan zichzelf aanmelden voor evenementen als de muzikant hiervoor is uitgenodigd.
### Plannen evenement
Moderators kunnen evenementen plannen voor verschillende muzikanten, commissies, secties, instrumentgroepen en/of orkesten.
### Afhandelen mededeling
Moderators kunnen mededelingen maken om te versturen naar verschillende muzikanten, commissies, secties, instrumentgroepen en/of orkesten.
### Uitvoeren startup
Als het systeem voor het eerst wordt gebruikt moet er een startup worden uitgevoerd. Dit zorgt ervoor dat de vereniging zelf kan bepalen welke gegevens er in het systeem komen.
### Toewijzen moderator
Een beheerder kan moderators toewijzen.

# Domeinmodel
In het domeinmodel worden alle concepten in een schematische tekening weergegeven.

## Concepten
| Concept | Beschrijving |
| ------- | ------------ |
| Musician    | Muzikant         |

`//TODO Importeer het domein model`
# Use case omschrijvingen
In dit hoofdstuk worden alle use cases verder uitgewerkt om zo een duidelijk beeld te schetsen van de manier waarop de gebruiker het systeem gebruikt.

Voor elke Use case wordt een volledige Use case omschrijving weergegeven. Hier wordt beschreven voor wie de Use case is en wie erbij gebaat is dat de Use case wordt voltooid. Ook wordt er beschreven waar het systeem en de gebruiker (acteur) aan moet voldoen voordat de Use case kan uitgevoerd worden. De succesgarantie bepaalt wanneer de Use case is voltooid en de speciale eisen geven non-functionele eisen aan. Verder wordt er in detail ingegaan op hoe de gebruiker met het systeem communiceert en wat het systeem teruggeeft.

Na de volledige Use case omschrijving wordt er een Systeem Sequence Diagram (SSD) weergegeven. Dit diagram laat op een overzichtelijke manier zien wat de gebruiker doet zodat het systeem de Use case kan uitvoeren.

In het operatie contract wordt verder ingegaan op de randvoorwaarden en succesgarantie van de Use case als dit nodig is. Dit tabel wordt soms weggelaten doordat er geen speciale eisen zijn aan de Use case.

Onderstaande randvoorwaarden gelden voor alle Use cases:
- Acteur is geauthenticeerd & geautoriseerd

## Indienen afmelding
Alle muzikanten die in een orkest zitten en een instrument bespelen kunnen zich afmelden voor geplande repetities. Dit doet een lid door de datum van afwezigheid aan te geven. Ook wordt er aangegeven of het lid meerdere repetities afwezig is en hoeveel dit er dan zijn. Verder kan er een reden opgegeven worden voor de afmelding.
### Volledige Use case omschrijving

| Use case sectie                                                                                               | Opmerking                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Use case naam**<br />*Naam van Use case.*                                                                   | Indienen afmelding                                                                                                                                                                                                                                                                                                                                                                                    |
| **Domein**<br/>*Het systeem in ontwerp.*                                                                      | Systeem                                                                                                                                                                                                                                                                                                                                                                                               |
| **Niveau**<br />*"Gebruikersdoel" of "Sub functie"*                                                           | Gebruikersdoel                                                                                                                                                                                                                                                                                                                                                                                        |
| **Primaire acteur**<br />*Wie roept het systeem aan om deze dienst te vervullen?*                             | **Muzikant**                                                                                                                                                                                                                                                                                                                                                                                          |
| **Belanghebbende en belangen**<br />*Wie geeft er om deze Use case en wat willen ze?*                         | **Muzikant:** Wil het orkest laten weten dat hij/zij afwezig zal zijn bij een repetitie/evenement;<br />**Moderator** & **Beheerder:** Willen weten welke **muzikanten** er verwacht worden tijdens de volgende repetitie.                                                                                                                                                                            |
| **Randvoorwaarden**<br />*In welke staat moet het systeem zijn, voordat deze Use case kan worden uitgevoerd?* | - **Muzikant** moet in een orkest zitten.<br/>- **Muzikant** moet een instrument bespelen.                                                                                                                                                                                                                                                                                                            |
| **Succesgarantie**<br />*In welke staat moet het systeem zijn, nadat deze Use case is uitgevoerd?*            | - **Muzikant** kan de repetitie waarvoor is afgemeld, niet meer zien in eigen agenda;<br/>- **Moderators** & **beheerders** kunnen zien dat **muzikant** niet aanwezig is bij de repetitie waarvoor de **muzikant** zich heeft afgemeld.                                                                                                                                                              |
| **Successcenario**<br />*Een typisch, onvoorwaardelijke happy path-scenario.*                                 | 1. **Muzikant** geeft aan zich af te willen melden voor een repetitie.<br />2. Systeem toont afmeldformulier.<br />3. **Muzikant** vult afmeldformulier in.<br />4. Systeem valideert de ingevulde gegevens.<br />5. **Muzikant** geeft aan afmeldformulier te willen verzenden.<br />6. Systeem slaat afmeldformulier op.                                                                            |
| **Extensies**<br />*Alternatieve scenario's van succes of mislukking.*                                        | *a. Ten alle tijde: **Muzikant** navigeert, op welke manier dan ook, weg van het afmeldformulier:*<br />a1. Systeem slaat concept afmelding op.<br />*b. Ten alle tijde: **Muzikant** geeft aan de afmelding te willen annuleren:*<br/>b1.  Systeem verwijderd alle ingevulde gegevens.<br/>*4a. Systeem vindt een fout in de ingevulde gegevens:*<br />    4a1. Systeem toont fout aan **muzikant**. |
| **Speciale vereisten**<br />*Gerelateerde non-functionele vereisten.*                                         | - Het afmeldformulier moet altijd binnen 3 minuten ingevuld kunnen worden.<br />- Het afmeldformulier moet binnen 10 seconden verzonden kunnen worden wanneer er een internetverbinding aanwezig is.<br/>- De concept afmelding wordt weergegeven wanneer een **muzikant** een afmelding wil gaan doen.                                                                                               |
| **Technologie- en gegevensvariaties**<br />*Verschillende I/O-methoden en dataformaten.*                      | - De gegevens in concept afmeldformulieren worden up-to-date gehouden met de gebruikersgegevens.<br/> -                                                                                                                                                                                                                                                                                               |
| **Frequentie van voorkomen**<br />*Invloeden op onderzoek, testen en timing van implementatie.*               | Verwachtingen: 1-20 keer per week                                                                                                                                                                                                                                                                                                                                                                     |
| **Diversen**<br />*Zoals openstaande kwesties.*                                                               | *Mogelijkheden onderzoeken met betrekking tot een wachtrij inzetten om het afmeldingsformulier te verzenden wanneer er weer verbinding is met het internet, als dit niet het geval was tijdens het invoeren van het afmeldformulier.*                                                                                                                                                                 |

### Systeem Sequence Diagram

![PlantUML SSD report absence](http://www.plantuml.com/plantuml/svg/JKz1JWCn3Bpd5LQvW1GUq1vGAr1kS2WlyAQcH4tibUqS-dlIfPNsCXfxnfhntXpLUwjmf5dK0ISZpXJiKdX6nGOVz8EzUXBsBsm4Hvd4PMMOC5_EAfrFxr95uIaTqZPjLmxpQwM1Ml8jAmJCBWgR7NnsAxaWRm0Dsdq8uye7cv4Tlg_cr6woBIo4XmrUt-wx7UZI_l1V_haRQGJH_4iZ5EEGqOGBdoCi3qSWFhs4_S3Hvmy0)

- `user`: De geauthenticeerde **muzikant**;
- `orchestra`: Het orkest waar de **muzikant** zich voor afmeld;
- `reasoning`: De reden van afmelding, dit veld is optioneel;
- `start`: De datum vanaf wanneer de **muzikant** afwezig is;
- `end`: De datum waarop de **muzikant** weer aanwezig is, dit veld is optioneel.

## Aanmelden evenement
Een muzikant kan zichzelf aanmelden voor evenementen als de muzikant hiervoor is uitgenodigd. Deze uitnodigingen zijn te zien in het mededelingenoverzicht. De gebruiker krijgt hier ook een notificatie over. Als een muzikant zich wil aanmelden voor een evenement hoeft de muzikant enkel aan te geven dat hij/zij erbij is. Als een evenement de mogelijjkheid geeft opmerkingen te plaatsen kan de muzikant dit doen voordat hij zich aanmeld.
### Volledige Use case omschrijving

| Use case sectie                                                                                               | Opmerking                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Use case naam**<br />*Naam van Use case.*                                                                   | Aanmelden evenement                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Domein**<br/>*Het systeem in ontwerp.*                                                                      | Systeem                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **Niveau**<br />*"Gebruikersdoel" of "Sub functie"*                                                           | Gebruikersdoel                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **Primaire acteur**<br />*Wie roept het systeem aan om deze dienst te vervullen?*                             | **Muzikant**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Belanghebbende en belangen**<br />*Wie geeft er om deze Use case en wat willen ze?*                         | - **Muzikant**: Wil een overzicht van evenementen in de agenda;<br/>- **Moderator** & **Beheerder**: Willen overzicht van aanwezigen tijdens een evenement                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| **Randvoorwaarden**<br />*In welke staat moet het systeem zijn, voordat deze Use case kan worden uitgevoerd?* | - De **muzikant** moet uitgenodigd zijn voor een evenement;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Succesgarantie**<br />*In welke staat moet het systeem zijn, nadat deze Use case is uitgevoerd?*            | - De **muzikant** ziet het evenement in de agenda terug;<br/>- De **moderator** en/of **beheerder** ziet dat de **muzikant** zich heeft aangemeld voor het evenement.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Successcenario**<br />*Een typisch, onvoorwaardelijke happy path-scenario.*                                 | 1. **Muzikant** geeft aan zich aan te willen melden voor een evenement.<br/>2. Systeem toont een melding dat de **muzikant** zich heeft aangemeld voor het evenement.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Extensies**<br />*Alternatieve scenario's van succes of mislukking.*                                        | *a. Ten alle tijde: Evenement wordt verwijderd:*<br/>  a1. Systeem geeft aan dat het evenement niet meer doorgaat.<br/> *2a. Het evenement accepteert opmerking bij de aanmelding:* <br/>  2a1. Systeem toont een invulveld waar de **muzikant** opmerkingen in kan vullen.<br/>  2a2. **Muzikant** vult, in dien van toepassing, het invulveld in.<br/>  2a3. Systeem controleert gegevens.<br/>    *2a3a. Ingevulde gegevens zijn niet valide:*<br/>      2a3a1. Systeem toont fouten in invulveld.<br/>  2a4. **Muzikant** geeft aan de aanmelding te willen versturen.<br/>  2a5. Systeem slaat aanmelding inclusief opmerking op. |
| **Speciale vereisten**<br />*Gerelateerde non-functionele vereisten.*                                         | - Het aanmelden voor een evenement moet binnen 1 minuut voltooid kunnen worden.<br/>- De aanmelding voor een evenement moet binnen 10 seconden zijn verzonden wanneer er verbonden is met een netwerk.<br/>                                                                                                                                                                                                                                                                                                                                                                                                                            |
| **Technologie- en gegevensvariaties**<br />*Verschillende I/O-methoden en dataformaten.*                      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **Frequentie van voorkomen**<br />*Invloeden op onderzoek, testen en timing van implementatie.*               | Verwachtingen: 10-100 keer per maand.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Diversen**<br />*Zoals openstaande kwesties.*                                                               | *Mogelijkheden onderzoeken met betrekking tot een wachtrij inzetten om de aanmelding voor een evenement te verzenden wanneer er weer verbinding is met het internet, als dit niet het geval was tijdens het aanmelden.*                                                                                                                                                                                                                                                                                                                                                                                                                |

### Systeem Sequence Diagram
![PlantUML SSD sign up event ](http://www.plantuml.com/plantuml/svg/NOf1IiOm44RtESNmkr6e1sWNKb6pquNY0QRfM4AJIPYP2BszhLIGV_FnPjuRrL2ivUHqZLnHC8FQbcXVYU7AJ1ZMHKhZ-Qca8d3Z7ttl-t_5CtrXI-OBsnjcWlSo5IlEOR2zlmpmsZI6Y7m1LCZduIgAxLIH3JusDSg7rbzoxY-3-uVpDu36XJ_hopUntTAn7JGbwK0eewntRYIUMqu_)
- `event`: Het evenement waar de **muzikant** zich voor aanmeld;
- `user`: De geauthenticeerde **muzikant**;
- `remark`: Opmerkingen vanuit de **muzikant**, dit veld is optioneel afhankelijk van de mogelijkheid vanuit het evenement.
## Plannen evenement
Moderators kunnen evenementen plannen voor verschillende muzikanten, commissies, secties, instrumentgroepen en/of orkesten. Om een evenement te plannen moet een moderator een datum, start- en eindtijd, een titel en de genodigden invoeren. De moderator kiest uit een keuzemenu wie er voor een evenement zijn uitgenodigd. Voor de eindtijd kan er een vast tijdstip gekozen worden of een schatting. Verder kan een evenement meerdere dagen duren. Ook kan er aangegeven worden dat de genodigde een invulveld moet invullen. Dit wordt gedaan door een selectievak. Het invulveld is altijd verplicht.
### Volledige Use case omschrijving

| Use case sectie                                                                                               | Opmerking                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Use case naam**<br />*Naam van Use case.*                                                                   | Plannen evenement                                                                                                                                                                                                                                                                                                          |
| **Domein**<br/>*Het systeem in ontwerp.*                                                                      | Systeem                                                                                                                                                                                                                                                                                                                    |
| **Niveau**<br />*"Gebruikersdoel" of "Sub functie"*                                                           | Gebruikersdoel                                                                                                                                                                                                                                                                                                             |
| **Primaire acteur**<br />*Wie roept het systeem aan om deze dienst te vervullen?*                             | **Beheerder** & **moderator**                                                                                                                                                                                                                                                                                              |
| **Belanghebbende en belangen**<br />*Wie geeft er om deze Use case en wat willen ze?*                         | **Muzikant**: Wil aan evenementen van de vereniging meedoen                                                                                                                                                                                                                                                                |
| **Randvoorwaarden**<br />*In welke staat moet het systeem zijn, voordat deze Use case kan worden uitgevoerd?* |                                                                                                                                                                                                                                                                                                                            |
| **Succesgarantie**<br />*In welke staat moet het systeem zijn, nadat deze Use case is uitgevoerd?*            | - Er is een evenement in het systeem. <br/>- De genodigden kunnen reageren op het evenement.                                                                                                                                                                                                                               |
| **Successcenario**<br />*Een typisch, onvoorwaardelijke happy path-scenario.*                                 | 1. **Beheerder** of **moderator** geeft aan een evenement te willen plannen.<br/>2. Systeem toont formulier voor evenement.<br/>3. **Beheerder** of **moderator** vult het formulier in.<br/>4. Systeem controleert ingevulde gegevens.<br/>5. **Beheerder** of **moderator** geeft aan het formulier te willen versturen. |
| **Extensies**<br />*Alternatieve scenario's van succes of mislukking.*                                        | *a. Ten alle tijde: **Beheerder** of **moderator** stopt onverwachts met plannen van evenement:*<br/>1. Systeem slaat concept op.<br/>                                                                                                                                                                                     |
| **Speciale vereisten**<br />*Gerelateerde non-functionele vereisten.*                                         | - Het aanmaken van een evenement moet binnen 5 minuten gedaan kunnen worden.<br/>- Het versturen van de uitnodiging naar alle genodigden is binnen 1 minuut verstuurd zijn als er een internetverbinding is.                                                                                                               |
| **Technologie- en gegevensvariaties**<br />*Verschillende I/O-methoden en dataformaten.*                      |                                                                                                                                                                                                                                                                                                                            |
| **Frequentie van voorkomen**<br />*Invloeden op onderzoek, testen en timing van implementatie.*               | Verwachting: 5-10 keer per maand                                                                                                                                                                                                                                                                                           |
| **Diversen**<br />*Zoals openstaande kwesties.*                                                               |                                                                                                                                                                                                                                                                                                                            |

### Systeem Sequence Diagram
![PlantUML SSD plan event](http://www.plantuml.com/plantuml/svg/NO-zJaCn38NtF8LL5f2Ac7i7r0gu6mp02xY9GLOJEufzA_NjISgFK9UZy_CjPskEpPUIWnrOAZOiO7xArBLnl5Zs60-VJHT93vgrmTMycpVpvX_nI1-uP9zL_0KBmQlkrJK4ZDxvrGJFcgZX27SmmIuL5ZOVnGhGeFpEeM9pZbnH7DvEvbJ6RcSNmXztU__JJL0pojEHnAzfw1eIMMnSdLLwGASrdE--S-cM97qRbYCxaTs4RU_wuoy0)

- `event`: De naam van het evenement welke wordt aangemaakt.
- `description`: Een omschrijving van het evenement.
- `date`: De datum waarop het evenement gehouden wordt.
- `startTime`: De starttijd van het evenement.
- `endTime`: De eindtijd van het evenement.
- `invitees`: Een lijst met alle genodigden voor het evenement.

## Afhandelen mededeling
Moderators kunnen mededelingen maken om te versturen naar verschillende muzikanten, commissies, secties, instrumentgroepen en/of orkesten. Deze mededelingen bestaan uit een titel, een inhoud en mogelijke bijlagen. Als de mededeling wordt verzonden krijgen de geadresseerden een melding op de telefoon van een lid. De geadresseerde kunnen via de melding de mededeling openen en bijlagen downloaden.
### Volledige Use case omschrijving

| Use case sectie                                                                                               | Opmerking |
| ------------------------------------------------------------------------------------------------------------- | --------- |
| **Use case naam**<br />*Naam van Use case.*                                                                   |     Afhandelen mededeling      |
| **Domein**<br/>*Het systeem in ontwerp.*                                                                      |   Systeem        |
| **Niveau**<br />*"Gebruikersdoel" of "Sub functie"*                                                           |      Gebruikersdoel     |
| **Primaire acteur**<br />*Wie roept het systeem aan om deze dienst te vervullen?*                             |      **Beheerder** of **Moderator**     |
| **Belanghebbende en belangen**<br />*Wie geeft er om deze Use case en wat willen ze?*                         |           |
| **Randvoorwaarden**<br />*In welke staat moet het systeem zijn, voordat deze Use case kan worden uitgevoerd?* |           |
| **Succesgarantie**<br />*In welke staat moet het systeem zijn, nadat deze Use case is uitgevoerd?*            |           |
| **Successcenario**<br />*Een typisch, onvoorwaardelijke happy path-scenario.*                                 |           |
| **Extensies**<br />*Alternatieve scenario's van succes of mislukking.*                                        |           |
| **Speciale vereisten**<br />*Gerelateerde non-functionele vereisten.*                                         |           |
| **Technologie- en gegevensvariaties**<br />*Verschillende I/O-methoden en dataformaten.*                      |           |
| **Frequentie van voorkomen**<br />*Invloeden op onderzoek, testen en timing van implementatie.*               |           |
| **Diversen**<br />*Zoals openstaande kwesties.*                                                               |           |

### Systeem Sequence Diagram

### Operatie contracten

| Operatie contract sectie                                                                                      | Opmerking |
| ------------------------------------------------------------------------------------------------------------- | --------- |
| **Operatie**<br />*Naam van operatie met parameters.*                                                         |           |
| **Verwijzingen**<br />*Use cases waar deze operatie in kan voorkomen*                                         |           |
| **Randvoorwaarden**<br />*In welke staat moet het systeem zijn, voordat deze operatie kan worden uitgevoerd?* |           |
| **Succesgarantie**<br />*In welke staat moet het systeem zijn, nadat deze operatie is uitgevoerd?*            |           |


## Uitvoeren startup
Als het systeem voor het eerst wordt gebruikt moet er een startup worden uitgevoerd. Dit zorgt ervoor dat de vereniging zelf kan bepalen welke gegevens er in het systeem komen.

In de startup wordt er eerst gevraagd om orkesten te definiëren. Dit wordt gedaan door een naam op te geven en het orkest toe te voegen aan de lijst.

Daarna wordt er gevraagd om secties toe te voegen. Secties bestaan wederom alleen uit een naam. De secties kunnen toegevoegd worden aan verschillende orkesten.

Daarna wordt er gevraagd om instrumenten toe te voegen. Bij het toevoegen van instrumenten wordt er gevraagd naar de naam, de sectie en in welk orkest het instrument voorkomt. Bij het kiezen van orkesten is het mogelijk om uit een selectieveld te kiezen met daarin de eerder aangemaakte orkesten.
### Volledige Use case omschrijving

| Use case sectie                                                                                               | Opmerking |
| ------------------------------------------------------------------------------------------------------------- | --------- |
| **Use case naam**<br />*Naam van Use case.*                                                                   |           |
| **Domein**<br/>*Het systeem in ontwerp.*                                                                      |           |
| **Niveau**<br />*"Gebruikersdoel" of "Sub functie"*                                                           |           |
| **Primaire acteur**<br />*Wie roept het systeem aan om deze dienst te vervullen?*                             |           |
| **Belanghebbende en belangen**<br />*Wie geeft er om deze Use case en wat willen ze?*                         |           |
| **Randvoorwaarden**<br />*In welke staat moet het systeem zijn, voordat deze Use case kan worden uitgevoerd?* |           |
| **Succesgarantie**<br />*In welke staat moet het systeem zijn, nadat deze Use case is uitgevoerd?*            |           |
| **Successcenario**<br />*Een typisch, onvoorwaardelijke happy path-scenario.*                                 |           |
| **Extensies**<br />*Alternatieve scenario's van succes of mislukking.*                                        |           |
| **Speciale vereisten**<br />*Gerelateerde non-functionele vereisten.*                                         |           |
| **Technologie- en gegevensvariaties**<br />*Verschillende I/O-methoden en dataformaten.*                      |           |
| **Frequentie van voorkomen**<br />*Invloeden op onderzoek, testen en timing van implementatie.*               |           |
| **Diversen**<br />*Zoals openstaande kwesties.*                                                               |           |

### Systeem Sequence Diagram

### Operatie contracten

| Operatie contract sectie                                                                                      | Opmerking |
| ------------------------------------------------------------------------------------------------------------- | --------- |
| **Operatie**<br />*Naam van operatie met parameters.*                                                         |           |
| **Verwijzingen**<br />*Use cases waar deze operatie in kan voorkomen*                                         |           |
| **Randvoorwaarden**<br />*In welke staat moet het systeem zijn, voordat deze operatie kan worden uitgevoerd?* |           |
| **Succesgarantie**<br />*In welke staat moet het systeem zijn, nadat deze operatie is uitgevoerd?*            |           |


## Toewijzen moderator
Dit doet de beheerder door naar een overzicht te gaan van alle leden. Daaruit kiest de beheerder iemand die moderator wordt. Daarna selecteert de beheerder de nieuwe rol van de gebruiker.
### Volledige Use case omschrijving

| Use case sectie                                                                                               | Opmerking |
| ------------------------------------------------------------------------------------------------------------- | --------- |
| **Use case naam**<br />*Naam van Use case.*                                                                   |           |
| **Domein**<br/>*Het systeem in ontwerp.*                                                                      |           |
| **Niveau**<br />*"Gebruikersdoel" of "Sub functie"*                                                           |           |
| **Primaire acteur**<br />*Wie roept het systeem aan om deze dienst te vervullen?*                             |           |
| **Belanghebbende en belangen**<br />*Wie geeft er om deze Use case en wat willen ze?*                         |           |
| **Randvoorwaarden**<br />*In welke staat moet het systeem zijn, voordat deze Use case kan worden uitgevoerd?* |           |
| **Succesgarantie**<br />*In welke staat moet het systeem zijn, nadat deze Use case is uitgevoerd?*            |           |
| **Successcenario**<br />*Een typisch, onvoorwaardelijke happy path-scenario.*                                 |           |
| **Extensies**<br />*Alternatieve scenario's van succes of mislukking.*                                        |           |
| **Speciale vereisten**<br />*Gerelateerde non-functionele vereisten.*                                         |           |
| **Technologie- en gegevensvariaties**<br />*Verschillende I/O-methoden en dataformaten.*                      |           |
| **Frequentie van voorkomen**<br />*Invloeden op onderzoek, testen en timing van implementatie.*               |           |
| **Diversen**<br />*Zoals openstaande kwesties.*                                                               |           |

### Systeem Sequence Diagram

### Operatie contracten

| Operatie contract sectie                                                                                      | Opmerking |
| ------------------------------------------------------------------------------------------------------------- | --------- |
| **Operatie**<br />*Naam van operatie met parameters.*                                                         |           |
| **Verwijzingen**<br />*Use cases waar deze operatie in kan voorkomen*                                         |           |
| **Randvoorwaarden**<br />*In welke staat moet het systeem zijn, voordat deze operatie kan worden uitgevoerd?* |           |
| **Succesgarantie**<br />*In welke staat moet het systeem zijn, nadat deze operatie is uitgevoerd?*            |           |


# Andere functionele eisen

In dit hoofdstuk worden andere functionele eisen gesteld aan de applicatie. Aan de eisen in deze lijst moeten voldaan worden maar zijn het niet waard om te specificeren in een volledige Use case omschrijving.
| Code | Omschrijving                                                                                                                               |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| FR1  | Beheerders en moderators moeten alle afmeldingen van alle muzikanten kunnen bekijken en in deze lijst kunnen zoeken, filteren en sorteren. |
| FR2  | Alle muzikanten kunnen eigen gegevens aanpassen.                                                                                           |
| FR3  | Een beheerder kan de systeemgegevens aanpassen.                                                                                            |
| FR4  | Alle muzikanten kunnen ten alle tijde mededelingen bekijken.                                                                               |
| FR5  | Alle muzikanten kunnen ten alle tijde alle evenementen bekijken.                                                                           |

# Non-functionele eisen

In dit hoofdstuk zullen er een aantal non-functionele eisen worden opgesteld. Deze eisen zijn gecategoriseerd in [FURPS+](https://nl.wikipedia.org/wiki/FURPS).

| Code  | Omschrijving                                                                                                                                                               | FURPS+         |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| NFR1  | Alle gebruikersinterfaces moeten gedocumenteerd zijn. Dit betekend dat alle activiteiten op alle schermen ten minste een korte beschrijving hebben van de functionaliteit. | Usability      |
| NFR2  | De documentatie geeft een duidelijke en korte omschrijving met schermafbeeldingen die de functionaliteit uitlegt.                                                          | Usability      |
| NFR3  | Alle fouten gericht op de gebruiker van het systeem, moeten geformatteerd worden zodat de gebruiker het bericht kan lezen en er geen code lekt naar de applicatie.         | Reliability    |
| NFR4  | Het systeem moet minimaal 50 gelijktijdige verbindingen ondersteunen.                                                                                                      | Performance    |
| NFR5  | De responstijd van verzoeken naar de API moet 80% van de tijd minder dan 2 seconde zijn.                                                                                   | Performance    |
| NFR6  | Mededelingen moeten worden verzonden met een vertraging van niet meer dan 10 minuten.                                                                                      | Performance    |
| NFR7  | Er moeten regelmatig updates en upgrade plaatsvinden zodat de veiligheid van het systeem kan worden gewaardborgd.                                                          | Supportability |
| NFR8  | Bugfixes en kleine verbeteringen moeten worden gedocumenteerd in GitHub.                                                                                                   | Supportability |
| NFR9  | Het systeem moet voor minimaal 50% van de kernconcepten openstaan voor verandering.                                                                                        | Supportability |
| NFR10 | Het systeem moet ten minste worden ondersteund op [de top 3 webbrowsers](https://gs.statcounter.com/browser-market-share).                                                 | Implementation |
| NFR11 | Het systeem moet gebruik maken van HTTP/2.0 in combinatie met HTTPS om de veiligheid van de gebruikergegevens te waarborgen.                                               | Interfaces     |

# Gebruikersinterface sketches