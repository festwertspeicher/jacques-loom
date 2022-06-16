---
title:  "Application Prototype Fund Hardware"
date:   2022-05-23 00:00:01
categories: funding, phase 1
badges:
 - class: badge-electronic
   name: phase 1
 - class: badge-magnet
   name: foundation
---

This is a non commercial open source project. I spend a lot of time refining the idea of the project and will spend a lot of time bringing it to life, and making it accessible to the public. To get some money for the materials and development of this project I want to get funding from the 'Prototype Fund Hardware'. Through the application process I answered a lot of questions about the 'Jacques' Loom Project. The answers in the application are a good overview of the project. So I thought this might be a good first post to get you in the project. The questions and answers are translated to english to reach a brighter audience, the application has to be necessarily in german language. You can find the original German version below.

<!--more-->

[The Prototype Fund Hardware](https://hardware.prototypefund.de/) is a project of the [Open Knowledge Foundation Deutschland](https://okfn.de/), funded by the German Federal Ministry of Education and Research ("[Bundesministerium für Bildung und Forschung](https://www.bmbf.de/)") within the context of [WIR](https://www.innovation-strukturwandel.de/strukturwandel/de/innovation-strukturwandel/_documents/artikel/kontakt.html?nn=452028) and the project [WI+R](https://digitale-reparaturfabrik.de/).

---

> Brief description: summarize the problem area, the main objectives of the project, and your solution.

Textiles or fabrics are almost exclusively imported and involve a non-transparent production and supply chain as well as extensive ecological and political problems.

Today, looms are large-scale industrial production tools that are not accessible to small-scale manufacturers. There are hardly any affordable, compact and modern looms for non-industrial applications. This is especially true for jacquard looms. 

A jacquard loom can create highly complex fabrics by individually raising or lowering each vertical warp thread during the weaving process. This allows entire pictures to be woven. Other loom types are not versatile with very limited design possibilities resulting in repetitive patterns (e.&nbsp;g. check pattern) and usually no binding variation (e.&nbsp;g. denim binding only.

The goal of this project is to make jacquard weaving more accessible. An alternative to large-scale industrial production methods should make people able to act and enable independent decentralized production of small series, prototypes and experiments.

To solve the above problems and achieve the goals, I would like to develop an Open Source Hardware (OSH) Jacquard loom. The machine size and acquisition cost shall be drastically reduced compared to industrial machines. For this purpose, a new mechanism for lifting and lowering the warp threads shall be found: The warp threads are not raised or lowered at the same time (in parallel), but one after the other (in serial). This saves hundreds of expensive actuators. In return, compromises are made in the operating speed.

> What social problem do you want to solve with the project?

The explosive increase in demand for clothing is having a huge social and environmental impact. The required resources and transport emissions for our textiles are becoming a growing problem. Clothing is mostly produced in Asian countries under poor working conditions. The production and supply chains of imported textiles are intransparent and beyond any control. Produced and unsold clothing is destroyed on a large scale.

Modern affordable tools are missing for small textile production environments. With a digitally controllable jacquard loom, complex fabrics can be produced locally again and manufacturing processes can be redefined – from material selection to fabric construction, prototyping to testing new working and distribution models. Products made decentrally for the local community create decent jobs, fair production conditions, and cause fewer transportation emissions without wasteful overproduction. Local on-demand production enables independently produced fabrics and has the power to break problematic production and supply chains. This is an essential step in building a modern circular economy.

> Who is the target audience and how will your open hardware solution reach them? How do you plan to involve the target audience in the development?

The project addresses (textile) designers, experts for textile technologies, universities, open workshops, small production sites, makers and hobby weavers.

The target group differs greatly in technical skills and their knowledge of weaving. Low-threshold articles, photos, videos and animations shall convey knowledge about weaving as well as technology. Detailed assembly instructions should enable as many people as possible to recreate the loom. Channels like Github (Pages), Instagram and Discord are used for communication and participation.

In addition, I would like to connect with local actors during the development phase, for example the [Open Lab for textile circular economy](https://wearall.clothing/content/texlab) and the loom inventor [Andreas Möller](https://www.weberei-hamburg.com/). The textile department of HAW Hamburg is involved in this research project.

> What specific value do you see in making your project available as Open Hardware? 

Through Open Hardware, the project can extend its reach and empower more people to make their own fabrics. In this way, they engage with the production method and the associated global problems of our textile consumption. Publishing the project under an Open Hardware license deliberately sets a counterpoint to the profit-oriented fashion industry. In my opinion, all knowledge should be publicly available.

By disclosing the product development, the project does not have to be ready for the market before it reaches people and communities. As a Minimum Viable Product, it can be tested whether there is any interest and need at all for a finished consumer product.

Through collaborative product development, the project can be improved continuously in an iterative way. People from different disciplines can contribute their skills and benefit from each other. The project needs people to continuously test the loom, contribute their wishes, suggestions and experiences and develop it further. The exchange of knowledge and information promotes communities, strengthens efforts for standardization, modularity, expandability, repairability and maintainability.

> What skills do you bring to the table to implement the project?

I can quickly dive into new topics, autodidactically acquire knowledge and grasp complex interrelationships. My skillset includes rapid prototyping, textile technologies such as machine knitting, design skills such as UX-/UI design, video and photo editing, graphics and layout, product design, programming, electronics development, CAD and experience with developing and building CNC machines. 

These skills are the best prerequisites for the realization of such a diverse project. I am very good at keeping an overview of all areas, bringing in new perspectives and points of view, initiating something and finding the right people to spin my ideas further. In addition, sustainable development is extremely important to me.

> How do you plan to implement your project technically? What equipment and materials will be needed?

The loom should be rebuildable as low-threshold as possible. Therefore, I use internationally common and interchangeable (standard) components and materials such as stepper motors, linear guides, solenoid valves and pneumatic connections. A small compressor will most likely be needed for operation. In addition, some custom-made components will be needed, which can be laser-cut from POM or metal at a makerspace or online service provider at low cost. The basic framework of the loom will be built with aluminum extrusions. An Arduino/ESP32 will be used as the microcontroller. Beginners should also be able to build the electronics. The goal is to keep the bill of materials as short as possible.

All components should be included and versioned in the digital CAD model. The loom should be as modular as possible, easy to assemble, disassemble and repair.

The graphical user interface will be implemented as a web application. It will provide only basic functions and will be used to upload weaving patterns as pixel images. The patterns will be designed in other programs such as Gimp or [AdaCAD](https://github.com/UnstableDesign/AdaCAD).

As few special tools as possible should be needed for the reconstruction of the loom. Current plans call for a soldering iron, wire stripper, crimping pliers, multimeter, and hex wrench. The first four tools could be saved by selling assembled Printed Circuit Boards and ready-made cables.

According to current planning, a soldering iron, a wire stripper, crimping pliers, a multimeter and hexagonal wrenches will be needed. The first four tools could be avoided by selling assembled boards and prefabricated cables.

Of course, more tools will be needed for prototype development. The local makerspace covers all my needs in this regard.

> Which open workshop can you use? Have you already contacted them? Or can you do without?

For my work on the loom project I became a member of the Hamburg Makerspace Attraktor. In addition to the operation of the workshop, the statutory purpose of the non-profit association includes the promotion of science, research and education as well as knowledge transfer.

The Makerspace offers a good basic infrastructure as well as a supply of components and materials for the rapid prototyping. There is a metal, wood and electronics workshop as well as a textile area. Most helpful for my project is the large laser cutter, which I can use to manufacture and test the loom's custom components.

Additionally, the place brings together over 100 skilled members who can assist me with their expertise.

> What similar solutions already exist that you can connect to? How does your project differ from others?

In addition to the large industrial machines, there are two commercial jacquard looms that fall into a similar category as my loom: AVL's Jacq3G and Digital Weaving Norway's TC2. Both of them control the warp threads via hundreds of actuators. Due to the serial mechanism, the material cost for my loom will only be a fraction of the price. A somewhat similar mechanism is used in electronic flatbed knitting machines.

There have been several attempts to build small Jacquard looms. All projects are far from my desired specifications (setting speed, fabric density). You can find my overview of the available projects [here]({{ site.baseurl }}/2022/market-overview). Worth mentioning are [1](http://lea.zone/jacquard_handweaving.html), [2](https://retrotechjournal.com/2019/06/17/making-a-diy-computer-controlled-loom/) and [3](https://www.youtube.com/watch?v=iqlxO5RYyGU), as they also use a serial selection mechanism.

> Have you already worked on the idea? If yes, briefly describe the current status and explain the innovation that will be added during the fund/funding period.

The submission of this application also marks the end of the project planning phase: the idea has been concretized, timelines created, networking done and a workspace has been set up. All organizational steps are completed, such as the creation of a website for documentation purposes and the initiation of the GitHub repository to share first progress.

To start the next phase of the project, a test rig has been developed to test different mechanisms for the serial selection of warp threads. First tests ran very successfully - in particular, a promising mechanism was found, which will now be further improved. In the next phases of the project a loom will be developed around this mechanism and improved iteratively.

> Briefly outline the key milestones, with an estimate of the workload in hours, that you plan to complete in the funding period of a maximum of 6 months.

A more detailed schedule can be found [here]({{ site.baseurl }}/milestones). Documentation will be provided on an ongoing basis.

1. Planning (finished)
* Research
* SMART goals
* Time planning
* Setting up a website
* Networking
* Fundraising
* Recruit university professors for mentoring

2. Develop a warp selection mechanism (188 hours).
* Building a test rig
* Test different mechanisms
* Check for patent infringement

3. Loom MVP (404 hours).
* First prototype
* Minimal software design
* Professional photos/videos
* Interim report as master thesis

4. Iteration of the loom (320 hours).
* New major version of the loom
* More robust software
* Complete package with CAD files, schematics, BOM, code, ...
* Building instructions

> What is your long-term goal? What will happen after the grant period?

The long-term goal is to reach a stable development stage in which the loom functions reliably and makes the step from proof of concept to a proper production tool. Whether the loom is further developed into a market-ready product depends primarily on the success of the prototype phase and user feedback. It is also imaginable to distribute pre-prepared construction kits and assembled circuit boards as well as to organize workshops and lectures in order to further lower the inhibition barrier of rebuilding the loom and to further increase the reach. I do hope to find people who will continue to develop the loom continuously beyond the grant period.

> What is missing? Post here what else you wanted to say, for which there was no space in the form above.

It is delusional to claim that this project is the best or only solution to the major problems facing the textile industry. The global problems need political action first and foremost. Nevertheless, the loom is a meaningful building block in a sustainable change process, as the project is also technology-mediating, empowering and encourages reflection on the current status quo in the textile industry.

The interim report of the project is also my master's thesis at the Hamburg University of Applied Sciences in the Department of Design. The project is supervised by Aram Bartholl and professor Peter Kabel.

---

<div markdown="1" lang="de">

## In German Language

> Kurzbeschreibung: Fasst das Problemfeld, die wichtigsten Ziele des Vorhabens, sowie eure Lösung zusammen. (200 Worte)

Textilien oder Gewebe werden fast ausschließlich importiert und sind mit einer intransparenten Produktions- und Lieferkette sowie umfangreichen ökologischen und politischen Problemen verbunden.

Webstühle sind heute großindustrielle Produktionswerkzeuge, die für Kleinproduzent&#42:innen nicht zugänglich sind. Es gibt kaum erschwingliche, kompakte und moderne Webstühle für nicht industrielle Anwendungen. Das gilt besonders für Jacquardwebstühle. 

Ein Jacquardwebstuhl kann besonders komplexe Stoffe erzeugen, indem jeder vertikal verlaufende Kettfaden im Webprozess individuell angehoben oder abgesenkt wird. Dadurch können ganze Bilder gewebt werden. Andere Webstuhltypen sind nicht versatil und erzeugen weniger komplexe Gewebe mit wiederholendem Rapport (z.&nbsp;B. Karomuster) und meist keiner Variation der Bindungsart (z.&nbsp;B. lediglich Jeansbindung).

Ziel dieses Projektes ist es, die Jacquardweberei zugänglicher zu machen. Eine Alternative zu großindustriellen Produktionsmethoden soll Menschen handlungsfähig machen und eine unabhängige dezentrale Fertigung von Kleinserien, Prototypen und Experimente ermöglichen.

Um die genannten Probleme zu lösen und die Ziele zu erreichen, möchte ich einen OSH Jacquardwebstuhl entwickeln. Die Maschinengröße und Anschaffungskosten sollen im Vergleich zu Industriemaschinen drastisch reduziert werden. Dafür soll ein neuer Mechanisimus zum Heben und Senken der Kettfäden gefunden werden: Die Kettfäden werden nicht zur gleichen Zeit (parallel), sondern nacheinander (seriell), angehoben oder abgesenkt. Dadurch können hunderte teure Aktoren eingespart werden. Im Gegenzug werden Abstriche bei der Stellgeschwindigkeit gemacht.

> Welches gesellschaftliche Problem wollt ihr mit dem Projekt lösen? (150 Worte)

Der explosionsartig gewachsene Bedarf an Kleidung hat große soziale und ökologische Auswirkungen. Die benötigten Ressourcen sowie die Transportemissionen für unsere Textilien werden zum immer größeren Problem. Kleidung wird überwiegend in asiatischen Ländern unter schlechten Arbeitsbedingungen produziert. Die Produktions- und Lieferketten der importierten Textilien sind intransparent und entziehen sich jeder Kontrolle. Produzierte und nicht verkaufte Kleidung wird im großen Stil vernichtet.

Für kleine Textilproduktionsumgebungen fehlen bislang moderne erschwingliche Werkzeuge zur Herstellung von Jacquardgeweben. Mit einem digital steuerbaren Jacquardwebstuhl können wieder lokal Gewebe produziert und Herstellungsprozesse neu definiert werden – von der Materialauswahl über die Gewebekonstruktion, Prototypenfertigung bis hin zur Erprobung neuer Arbeits- und Vertriebsmodelle. Produkte, die dezentral für den lokalen Markt hergestellt werden, schaffen menschenwürdige Arbeitsplätze, faire Produktionsbedingungen und verursachen weniger Transportemissionen ohne verschwenderische Überproduktion. Eine lokale On Demand Produktion ermöglicht unabhängig gefertigte Textilien und kann problematische Produktions- und Lieferketten durchbrechen. Das ist unerlässlich für den Aufbau einer modernen Kreislaufwirtschaft.

> Wer ist die Zielgruppe und wie soll eure Open Hardware Lösung sie erreichen? Wie plant ihr die Zielgruppe in die Entwicklung einzubinden? (100 Worte)

Das Projekt adressiert (Textil-)Designer&#42;innen, Expert&#42;innen für Textiltechnologien, Universitäten, offene Werkstätten, Kleinproduktionsstätten, Maker&#42;innen und Hobby-Weber&#42;innen.

Die Zielgruppe unterscheidet sich stark in der technischen Versiertheit und ihrem Wissen zu Geweben. Über niedrigschwellige Artikel, Fotos, Videos und Animationen soll Wissen zur Weberei und Technik vermittelt werden. Detaillierte Aufbauanleitungen sollen möglichst viele Menschen zum Nachbau befähigen. Zur Information und Partizipation sollen Kanäle wie Github (Pages), Instagram und Discord genutzt werden.

Außerdem möchte ich mich in der Entwicklungsphase mit lokalen Akteur&#42;innen vernetzen zum Beispiel dem [Open Lab für textile Kreislaufwirtschaft](https://wearall.clothing/content/texlab) und dem Webstuhlerfinder [Andreas Möller](https://www.weberei-hamburg.com/). Der Textilfachbereich der HAW Hamburg ist in dieses Forschungsprojekt eingebunden.

> Welchen konkreten Mehrwert seht ihr darin, euer Projekt als Open Hardware zur Verfügung zu stellen? (150 Worte)

Durch Open Hardware kann das Projekt eine größere Reichweite entwickeln und mehr Menschen befähigen, eigene Stoffe herzustellen. So setzen sie sich mit der Produktionsmethode und den damit verbundenen globalen Problemen unseres Textilkonsums auseinander. Das Veröffentlichen des Projekts unter einer Open Hardware Lizens setzt bewusst einen Gegenpol zur profitorientierten Modeindustrie. Meiner Meinung nach sollte alles Wissen frei verfügbar sein.

Durch eine Offenlegung der Produktentwicklung muss das Projekt nicht zuerst zur Marktreife gebracht werden, bevor es Menschen und Gruppen erreicht. Als Minimum Viable Product kann getestet werden, ob überhaupt Interesse und Bedarf an einem fertigen Consumerprodukt besteht.

Durch eine kollaborative Produktentwicklung kann das Projekt immer weiter iterativ verbessert werden. Menschen aus unterschiedlichen Fachbereichen können ihre Fähigkeiten einbringen und voneinander profitieren. Das Projekt bedarf Menschen, die den Webstuhl kontinuierlich testen, ihre Wünsche, Anregungen und Erfahrungen mit einbringen und weiterentwickeln. Der Austausch von Wissen und Informationen fördert Gemeinschaften, stärkt Bemühungen um Standardisierung, Modularität, Erweiterbarkeit, Reparaturfähikeit und Wartbarkeit.

> Welche Kompetenzen bringt ihr mit, um das Projekt umzusetzen? (100 Worte)

Ich kann mich schnell in neue Themenbereiche einarbeiten, mir autodidaktisch Wissen aneignen und komplexe Zusammenhänge verstehen. Mein Skillset umfasst Rapid Prototyping, Textiltechnologien wie Maschinenstricken, gestalterische Kompetenzen wie UX-/UI Design, Video- und Fotobearbeitung, Grafik und Layout, Produktdesign, Programmierung, Elektronikentwicklung, CAD und Erfahrung mit Entwicklung und Bau von CNC-Maschinen. 

Diese Kompetenzen sind beste Voraussetzungen für die Umsetzung eines so vielfältigen Projekts. Ich kann sehr gut den Überblick in allen Bereichen behalten, neue Perspektiven und Sichtweisen einbringen, etwas anstoßen und die richtigen Menschen finden, die meine Ideen weiterspinnen. Außerdem ist mir nachhaltige Entwicklung ein Herzensthema.

> Wie wollt ihr euer Projekt technisch umsetzen? Welche Geräte und Materialien werden benötigt? (200 Worte)

Der Webstuhl soll möglichst niedrigschwellig nachgebaut werden können. Deswegen verwende ich international weit verbreitete und austauschbare (Norm-)Bauteile und Materialien wie z.&nbsp;B. Schrittmotoren, Linearführungen, Magnetventile und Pneumatikanschlüsse. Für den Betrieb wird voraussichtlich ein kleiner Kompressor benötigt. Zusätzlich werden einige spezialangefertige Bauteile benötigt, die bei einem Makerspace oder Online-Dienstleister aus POM oder Metall kostengünstig gelasert werden können. Das Grundgerüst des Webstuhls wird mit Aluprofilen aufgebaut. Ein Arduino/ESP32 wird als Mikrokontroller eingesetzt. Auch Anfänger&#42;innen sollen die Elektronik aufbauen können. Zielsetzung ist es, die Liste der benötigen Materialien so kurz wie möglich zu halten.

Alle Bauteilkomponenten sollen im digitalen CAD-Modell enthalten und versioniert sein. Der Webstuhl soll möglichst modular aufgebaut sein und leicht zusammengebaut, zerlegt und repariert werden können.

Die grafische Oberfläche wird als Webanwendung umgesetzt. Sie wird nur Basisfunktionen bieten und dient dem Hochladen von Webmustern als Pixelbild. Sie werden in anderen Programmen wie z.&nbsp;B. Gimp oder [AdaCAD](https://github.com/UnstableDesign/AdaCAD) gestaltet.

Für den Nachbau sollen möglichst wenig Spezialwerkzeuge benötigt werden. Nach aktueller Planung werden Lötkolben, Abisolierzange, Crimpzange, Multimeter und Sechskantschlüssel benötigt. Die ersten vier Werkzeuge könnten durch den Verkauf bestückter Platinen und konfektionierter Kabel eingespart werden.

Für die Entwicklung der Prototypen werden natürlich noch weitere Werkzeuge benötigt. Hier deckt der lokale Makerspace alle Bedürfnisse ab.

> Welche Offene Werkstatt könnt ihr nutzen? Habt ihr schon Kontakt aufgenommen? Oder kommt ihr ohne aus? (100 Worte)

Für meine Arbeit am Webstuhlprojekt bin ich Mitglied im Hamburger Makerspace Attraktor geworden. Im Satzungszweck des gemeinnützigen Vereins ist neben dem Werkstattbetrieb auch die Förderung von Wissenschaft, Forschung und Bildung sowie Wissensvermittlung verankert.

Der Makerspace bietet eine gute Grundinfrastruktur sowie eine Bauteil- und Materialversorgung zum schnellen Erstellen von Prototypen. Es gibt eine Metall-, Holz- und Elektronikwerkstatt sowie einen Textilbereich. Am hilfreichsten für mein Projekt ist der große Lasercutter, mit dem ich die Spezialbauteile des Webstuhls herstellen und testen kann.

Zusätzlich vereint der Ort über 100 kompetente Mitglieder, die mir in ihrem Fachbereich mit Expertise weiterhelfen können.

> Welche ähnlichen Lösungen gibt es schon, an die ihr anschließen könnt? Worin grenzt sich euer Projekt von anderen ab? (100 Worte)

Neben den großen Industriemaschinen gibt es zwei kommerzielle Jacquardwebstühle, die in eine ähnliche Kategorie wie mein Webstuhl fallen: Der Jacq3G von AVL und der TC2 von Digital Weaving Norway. Sie steuern die Kettfäden über hunderte Aktoren an. Die Materialkosten meines Webstuhls belaufen sich durch den seriellen Mechanismus auf einen Bruchteil des Preises. Ein ähnlicher Mechanismus wird bei elektronischen Flachbett-Strickmaschinen genutzt.

Es gab bereits mehrere Versuche, kleine Jacquardwebstühle zu bauen. Alle Projekte sind weit von meinen gewünschten Kenngrößen (Stellgeschwindigkeit, Gewebedichte) entfernt. Eine Übersicht der Projekte ist [hier]({{ site.baseurl }}/2022/market-overview)) aufgestellt. Erwähnenswert sind [1](http://lea.zone/jacquard_handweaving.html), [2](https://retrotechjournal.com/2019/06/17/making-a-diy-computer-controlled-loom/) und [3](https://www.youtube.com/watch?v=iqlxO5RYyGU), da sie ebenfalls einen seriellen Selektionsmechanismus verwenden.

> Habt ihr schon an der Idee gearbeitet? Wenn ja, beschreibt kurz den aktuellen Stand und erklärt die Neuerung, die im Rahmen des Funds/Förderzeitraums hinzukommen sollen. (100 Worte)

Mit der Abgabe dieser Bewerbung endet auch die Projektplanungsphase: Die Idee wurde konkretisiert, Zeitpläne erstellt, Vernetzungsarbeit betrieben und ein Arbeitsplatz eingerichtet. Alle organisatorischen Schritte sind geleistet, wie das Erstellen einer Website zu Dokumentationszwecken und die Inbetriebnahme des GitHub Repository um erste Fortschritte zu teilen.

Zum Einläuten der nächsten Projektphase wurde ein Teststand entwickelt um verschiedene Mechanismen zur seriellen Auswahl der Kettfäden erproben zu können. Erste Tests liefen sehr erfolgreich - im Speziellen habe ich schon ein vielversprechenden Mechanismus gefunden, der nun noch weiter verbessert wird. In den nächsten Projektphasen soll um diesen Mechanismus ein Webstuhl entstehen und iterativ verbessert werden.

> Skizziert kurz die wichtigsten Meilensteine mit Schätzung des Arbeitsaufwands in Stunden, die ihr im Förderzeitraum von max. 6 Monaten umsetzen wollt. (100 Worte)

Eine genauere Auflistung findet sich [hier]({{ site.baseurl }}/milestones). Eine Dokumentation erfolgt fortlaufend.

1. Planung (abgeschlossen)
* Recherche
* SMARTe Ziele
* Zeitplanung
* Website aufsetzen
* Vernetzung
* Fundraising
* Hochschul-Professoren für die Betreuung gewinnen

2. Entwickeln des Kettfaden-Auswahlmechanismus (188 Stunden)
* Teststand bauen
* Mechanismen testen
* Prüfung auf Patentrechtsverletzungen

3. Webstuhl MVP (404 Stunden)
* Erster Prototyps
* Minimale Software
* Professionelle Fotos/Videos
* Zwischenbericht als Masterthesis

4. Iteration der Maschine (320 Stunden)
* Neue Major Version des Webstuhls
* Robustere Software
* Komplettpaket mit CAD-Dateien, Schaltplänen, BOM, Code, ...
* Bauanleitungen

> Was ist euer langfristiges Ziel? Wie geht es nach der Förderdauer weiter? (100 Worte)

Das langfristige Ziel ist das Erreichen eines stabilen Entwicklungsstands, in dem der Webstuhl zuverlässig funktioniert und den Schritt vom Proof Of Concept zum richtigen Produktionswerkzeug schafft. Ob der Webstuhl zu einem marktreifen Produkt weiterentwickelt wird, hängt vor allem vom Erfolg der Prototypenphase und dem Userfeedback ab. Vorstellbar ist auch der Vertrieb von vorgerichteten Baukits und bestückten Platinen sowie die Durchführung von Workshops und Vorträgen, um die Hemmschwelle des Nachbaus weiter zu senken und die Reichweite des Webstuhls weiter zu erhöhen. Ich erhoffe mir, dass sich Menschen finden, die sich auch über die Projektlaufzeit hinaus mit der Weiterentwicklung des Webstuhls beschäftigen.

> Was fehlt? Schreibt hier was ihr noch sagen wolltet, aber wozu es kein Feld gab. (100 Worte)

Es ist illusorisch, zu behaupten, dieses Projekt sei die beste oder einzige Lösung für die großen Probleme der Textilindustrie. Die globalen Probleme benötigen in erster Linie politische Handlungen. Dennoch ist der Webstuhl ein sinnvoller Baustein in einem nachhaltigen Veränderungsprozess, da das Projekt auch technologievermittelnd und ermächtigend ist und zum Nachdenken über den aktuellen Status Quo in der Textilindustrie anregt.

Der Zwischenbericht des Projekts ist meine Masterthesis an der Hochschule für angewandte Wissenschaften Hamburg im Fachbereich Design. Betreut wird das Projekt durch Aram Bartholl und Professor Peter Kabel.

</div>