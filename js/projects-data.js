/* ---------------------------------------------------------------
   PROJECTS DATA
   -----------------------------------------------------------------
   This is the only file you need to touch to add a new project.

   To add a project, copy one of the objects below (including the
   curly braces { }), paste it into the list, and change the values.
   Don't forget the comma after each object except the last one.

   Fields:
     title       - project name (required)
     year        - e.g. "2025" (required, used for sorting)
     role        - your role, short course name, or context (optional,
                   leave as "" if not needed)
     description - one or two sentences, shown on the card/row and at
                   the top of the detail view (required)
     body        - a list of paragraphs (plain strings) with more
                   detail — shown only when someone clicks into the
                   project. Leave as [] to just reuse the description.
     images      - a list of image paths/URLs to show in the detail
                   view, e.g. ["assets/projects/room-finder-1.jpg"].
                   Leave as [] to show no gallery.
     tags        - list of short skill/topic labels, used for the
                   filter buttons on the Projects page (required,
                   can be an empty list [])
     links       - list of { url, label } objects, e.g. a repo and a
                   live demo. Leave as [] to show no links.
				   { url: "https://github.com/your-username/room-finder", label: "View on GitHub" }
     featured    - true to show this project on the home page

-------------------------------------------------------------------
	 
	 projects to add:

		
		Bachelor:
			- Smart tech (circuits & electronics), (modelling & control), (hackathon)
			- data driven applications (sql)
		
		Master:
			- Design and behaviour change
			
			-* design production and materials (not finished)
			- packaging 1 + 2
			- sources of innovation

		Pre-master
			- information management and visualisation (sketching & tpm2)
			

		

{
  title: { en: "Campus Room Finder", nl: "Campus Ruimtevinder" },
  year: "2026",
  role: { en: "Software Engineering, Year 2", nl: "Software Engineering, jaar 2" },
  description: {
    en: "A small web app that helps students find free study rooms.",
    nl: "Een kleine webapp waarmee studenten vrije studieruimtes vinden.",
  },
  body: {
    en: ["First paragraph…", "Second paragraph…"],
    nl: ["Eerste alinea…", "Tweede alinea…"],
  },
  images: [],
  tags: { en: ["Web", "Team project"], nl: ["Web", "Teamproject"] },
  links: [
    {
      url: "https://github.com/your-username/room-finder",
      label: { en: "View on GitHub", nl: "Bekijk op GitHub" },
    },
  ],
  featured: true,
},

-------------------------------------------------------------------*/
const PROJECTS = [
  {
    title: { en: "Digital Design Sketching", nl: "Digitale Ontwerpschetsen"},
    year: "2026",
    role: {en: "Pre-Master IDE", nl: "Pre-Master IDE"},
    description: {
	en: "This course taught me how to do design sketching digitally, using its ideation strengths over traditional sketching.",
	nl: "Dit vak heeft me geleerd digitale ontwerpschetsen te maken en deze technieken te gebruiken voor ideation."
	},
    body: {
		en: [
      "After a comprehensive coure on traditional sketching, using fineliners and markers, digital design sketching was taught as a new tool for ideation sketching.",
      "This way of ideation sketching allows for easy variable tuning, morphing and comparison of various concepts before diving deep into production processes.",
	  "Therefore, the correct methodologies on how to construct a design sketch and allow for modularity are valuable skills.",
    ],
	nl: [
	"Na een uitgebreid vak over ontwerp schetsen op papier met fineliners and markers, werd digitaal schetsen geleerd als een tool voor ideation.",
      "Deze manier van schetsen maakt het mogelijk om makkelijk variabelen te tunen, morphen en verschillende concepten te vergelijken voordat je verder gaat naar productie processen.",
	  "Daarom zijn de juiste methodes voor het construeren van een ontwerp schets met modulariteit erg waardevol.",
    ],
	},
    images: ["assets/ChessPieces.jpg", "assets/gameboy.jpg"],
    tags: { en: ["Design"], nl: ["Ontwerp"] },
    links: [],
    featured: true,
  },
  {
    title: {en: "Programming in C++", nl: "Programmeren in C++"},
    year: "2023",
    role: {en: "Bachelor's Minor Course",  nl: "Bachelor Minor Vak"},
    description: {
      en: "During my Computer Science Minor, Network Systems, I took a course on programming in C++.",
	  nl: "Tijdens mijn Computer Science Minor, Network Systems, volgde ik een programmeervak over C++.",
	},
    body: {
		en: [
      "After my experiences with Java, Python, HTML, PHP among others, C++ proved to be a more complex language to learn.",
	  "Although I gained a reasonable understanding of the language, finishing the course with a grade of 7.5, I don't think I will use this language much.",
	  "The other programming languages I know allow for quick prototyping and testing, while C++ requires more attention, making it a better solution for optimization once ideation has finished in my opinion.",
    ],
	nl:  [
      "Na mijn ervaringen met o.a. Java, Python, HTML, PHP, was C++ een complexere programmeertaal om te leren.",
	  "Ookal heb ik een redelijk verstand van de taal, denk ik niet dat ik deze taal veel zal gebruiken.",
	  "De andere programmeertalen die ik ken maken het makkeljk om snel prototypes te maken en te testen, terwijl C++ meer aandacht vereist. C++ zou beter zijn voor optimalisatie nadat ideation is afgerond.",
    ],
	},
    images: ["assets/CPP.png"],
    tags: { en: ["Programming"], nl: ["Programmeren"] },
    links: [],
    featured: false,
  },
  {
    title: {en: "Logo Design", nl: "Logo Ontwerp"},
    year: "2022",
    role: {en: "Board Member", nl: "Bestuurslid"},
    description: {
      en: "Being board member during the 35th year of our association, I designed a logo for our board and the lustrum itself using Adobe Illustrator.",
	  nl: "Als zijnde bestuurslid van het 35e jaar van onze vereniging, heb ik het logo voor het bestuur en het lustrum in Adobe Illustrator ontworpen."
	},
    body: [],
    images: ["assets/logo-design.png"],
    tags: { en: ["Design"], nl: ["Ontwerp"] },
    links: [],
    featured: false,
  },
  {
    title: {en: "Confidential Contact Person", nl: "Confidentieel Contactpersoon"},
    year: "2024",
    role: {en: "Association Project", nl: " Project Vereniging"},
    description: {
      en: "In order to improve the mental wellbeing of students at the University of Twente, an outreach program was created.",
	  nl: "Om de mentale gezondheid van studenten aan de Universiteit Twente te verbeteren is een hulp programma gestart.",
	},
    body: {
		en: ["In order to improve the mental wellbeing of students at the University of Twente, an outreach program was created.",
	  "Every association can volunteer one or two students to take part in the course, consisting of a few sessions of theory and practice.",
	  "My aim as confidential contact person is to make someone feel at ease, listen and ask, not to provide answers.",],
	  nl: ["Om de mentale gezondheid van studenten aan de Universiteit Twente te verbeteren is een hulp programma gestart.",
	  "Elke vereniging kan een of twee vrijwillige studenten deel laten nemen aan deze cursus van een aantal lessen in theorie en praktijk.",
	  "Het doel als confidentieel contactpersoon is om iemand op zijn/haar gemak te stellen, te luisteren en vragen te stellen, niet om antwoorden te bieden.",],
	},
    images: ["assets/ccp.jpg"],
    tags: [],
    links: [],
    featured: false,
  },
  {
    title: "Game Design",
    year: "2023",
    role: {en: "Bachelor's Minor Course",  nl: "Bachelor Minor Vak"},
    description: {
      en: "I took a minor on game design, including 3D modeling in Blender and programming and working in Unity.",
	  nl: "Ik volgde een minor over game design, met 3D modeleren in Blender en programmeren en worken in Unity.",
	},
    body: {
		en: ["I took a minor on game design, including 3D modeling in Blender and programming and working in Unity.",
		"Another part of the minor focused on playtesting, and resulted in a co-op chess-like 4 player game."],
		nl: ["Ik volgde een minor over game design, met 3D modeleren in Blender en programmeren en worken in Unity.",
		"Een ander gedeelte van de minor ging over playtesten, en resulteerde in een co-op schaak-achtig spel voor 4 spelers."],
	},
    images: ["assets/gameplay.png"],
    tags: { en: ["Programming", "Design", "UX"], nl: ["Programmeren", "Ontwerp", "UX"] },
    links: [],
    featured: false,
  },
  {
    title: {en: "Board Year", nl: "Bestuursjaar"},
    year: "2022",
    role: {en: "Board Member", nl: "Bestuurslid"},
    description: {
      en: "I was board member for the surfing association DWV Hardboard, adding skateboarding as a weekly sport.",
	  nl: "Ik was een besuurslid voor de surfvereniging DWV Hardboard, waar ik skateboarden als wekelijkse sport heb toegevoegd.",
	},
    body: {
	en: ["I was board member for the surfing association DWV Hardboard, taking care of all creative aspects and most importantly; adding skateboarding as a new sport.",
	"My main goal was to make skateboarding accessible to students, by providing a safe environment where it feels safe to fall and learn.",
	"I started negotiating with skatepark De Fabriek and the Sports Umbrella Twente to work towards a contract financed by the University, took a course on contract making provided by the Student Union and wrote up a contract.",
	"Now skateboarding is a weekly sport for DWV Hardboard, financed by the University."],
	nl: ["Ik was een besuurslid voor de surfvereniging DWV Hardboard, waar ik verantwoordelijk was voor alle creatieve aspecten en skateboarden heb toegevoegd als nieuwe sport.",
	"Mijn hoofddoel was om skateboarden toegankelijk te maken voor studentendoor een veilige omgeving te bieden waar je kan vallen en leren.",
	"Ik heb onderhandeld met skatepark De Fabriek en de Sports Umbrella Twente om een contract op te stellen dat word gefinancierd door de universiteit, hiervoor heb ik een cursus gevolgd over contracten opstellen van de Student Union.",
	"Nu is skateboarden een weekelijkse sport voor DWV Hardboard, gefinancierd door de universiteit."],
	},
    images: ["assets/contract.jpg"],
    tags: ["Management"],
    links: [],
    featured: false,
  },
    {
    title: {en: "Co-created Stand-up Smartdesk", nl: "Geco-creëerde Smart Zit-sta Bureau"},
    year: "2024",
    role: {en: "Bachelor's Thesis",  nl: "Bachelor's Afstudeeropdracht"},
    description: {
      en: "How to reduce sedentary behaviour at the office using a speculative design? The final result is a stand-up smartdesk, co-created with members of the Biosignals and Systems group of the University of Twente.",
	  nl: "Hoe verminder je sedentair gedragop het kantoor a.d.h.v. een speculatief ontwerp? Het eindresultaat is een stand-up smartdesk, geco-creëerd met leden van de Biosignals and Systems groep op de University of Twente.",
	},
    body: {
		en: ["How to reduce sedentary behaviour at the office using a speculative design? The final result is a stand-up smartdesk, co-created with members of the Biosignals and Systems group of the University of Twente.",
		"This project combined many different skills, ideation and prototyping was done using co-creation with the Biosignals and Systems group. Prototyping was done with and Arduino, connecting over serial with the exisiting sit-stand desks at the group. The design is lasercut and finally tested by members of the Biosignals and Systems group.",
		"The prototype is connected to existing sit-stand desks over ModBus communication, and the device easily fits underneath the desk. It measures sedentary time and automatically adjusts the desk height to the users preferred standing height, forcing a small stand-up work session."],
		nl: ["Hoe verminder je sedentair gedragop het kantoor a.d.h.v. een speculatief ontwerp? Het eindresultaat is een stand-up smartdesk, geco-creëerd met leden van de Biosignals and Systems groep van de Universiteit Twente.",
		"Dit project maakt gebruik van verschillende skills, ideation en prototyping voor het co-creëren met de Biosignals and Systems groep. Het prototype is gebouwd met een Arduino, verbonden over de seriele bus met de zit-sta bureau's bij de groep. Het design is lasergesneden en getest door leden van de Biosignals and Systems groep.",
		"Het prototype is verbonden met de zit-sta bureau's via ModBus communicatie, en het apparaat past netjes onder het bureau. Het meet de sedentarie tijd en past automatisch de hoogte van het bureau aan naar de sta-hoogte van de actieve gebruiker, waarmee deze geforceerd wordt om even staand te werken."],
	},
    images: ["assets/thesisfoto.jpg"],
    tags: { en: ["UX", "Design", "Programming"], nl: ["UX", "Ontwerp", "Programmeren"] },	  
	  links: [
		{
		  url: "https://essay.utwente.nl/100735/",
		  label: { en: "Open Full Thesis", nl: "Bekijk Thesis" },
		},
	  ],
    featured: false,
  },
	{
    title: {en: "Pomodoro Study Chair", nl:  "Pomodoro Studiestoel"},
    year: "2023",
    role: {en: "Bachelor's Course",  nl: "Bachelor Vak"},
    description: {
      en: "A distraction free Pomodoro chair, made for people with ADHD, incorporating exercise and fidgeting.",
	  nl: "Een focusbevorderende Pomodoro stoel voor mensen met ADHD, met inspanning en fidgeten.",
	},
    body: [],
    images: ["assets/slhay.png"],
    tags: { en: ["UX", "Programming"], nl: ["UX", "Programmeren"] },
    links: [],
    featured: false,
  },

  {
    title: {en: "Interactive Art Installation", nl: "Interactieve Kunstinstallatie",},
    year: "2021",
    role: {en: "Bachelor's Course",  nl: "Bachelor Vak"},
    description: {
      en: "Interactive art installation with the theme infocalypse now, showing the difficulty of distinguishing real news from fake news.",
	  nl: "Interactieve kunstinstallatie met het thema infocalypse now, laat de complexitiet zien in het onderscheid maken tussen echt nieuws en fake news.",
	},
    body: {
	en: ["Interactive art installation with the theme infocalypse now, showing the difficulty of distinguishing real news from fake news.",
	"The installation consists of 6 CRT TVs displaying news items, but only one of these items is NOT fake news, sticking to this year's GOGBOT art festival theme: infocalypse now.",
	"The user clicks a button associated with one of the TVs, after which the mannequin becomes more or less “corrupted”, this is displayed using a smoke machine, LEDs and sound effects.",
	"This project uses a server to output to the six different TVs, the server is connected to an Arduino taking inputs from the user and outputting to a smoke machine LEDs and a dynamic sound system"],
	nl: ["Interactieve kunstinstallatie met het thema infocalypse now, laat de complexitiet zien in het onderscheid maken tussen echt nieuws en fake news.",
	"De installatie bestaat uit 6 CRT TVs die nieuws items tonen, maar één hiervan is NIET fake nieuws, a.d.h.v. van het GOGBOT kunstfestival thema: infocalypse now.",
	"De user klikt op een knop die gelinkt is met een van de TVs, waarna de pop meer of minder “corrupted” wordt, dit word weergegeven met een rookmachine, LEDs en geluidseffecten.",
	"Dit project werkt met een server die output geeft naar de zes TVs, de server is verbonden met een Arduino die de inputs leest en output naar de rookmachine, LEDs en een dynamisch geluidssysteem."],
	},
    images: ["assets/gogbot.jpg"],
    tags: { en: ["UX", "Design", "Programming"], nl: ["UX", "Ontwerp", "Programmeren"] },
    links: [],
    featured: false,
  }, 
  {
    title: {en: "Advisory Board", nl: "Adviesraad"},
    year: "2023",
    role: {en: "Association Project",  nl: "Vereniging Project"},
    description: {
      en: "Help handle difficult situations and how to communicate them, how to be clear, pragmatic, effective and efficient while creating a welcoming environment to discuss difficult topics.",
	  nl: "Helpen met lastige situaties en hoe die te communiceren, hoe duidelijk, pragmatisch, effectief en efficient te zijn maar een fijne sfeer te bewaren om over lastige onderwerpen te kunnen discussiëren.",
	},
    body: {
	en: ["Help handle difficult situations and how to communicate them, how to be clear, pragmatic, effective and efficient while creating a welcoming environment to discuss difficult topics.",
	"My tasks mostly consisted of listening and giving constructive feedback while remaining open and welcoming.",],
	nl: ["Helpen met lastige situaties en hoe die te communiceren, hoe duidelijk, pragmatisch, effectief en efficient te zijn maar een fijne sfeer te bewaren om over lastige onderwerpen te kunnen discussiëren.",
	"Mijn taken waren voornamelijk luisteren, constructieve feedback geven en open te blijven.",],
	},
    images: [],
    tags: ["Management"],
    links: [],
    featured: false,
  },
  {
    title: {en: "Poster Design", nl: "Poster Ontwerp"},
    year: "2021",
    role: {en: "Bachelor's Course",  nl: "Bachelor Vak"},
    description: {
      en: "Create posters with recognisable faces that grab attention and evoke emotion.",
	  nl: "Creër posters met herkenbare gezichten die de aandacht trekken en emoties opwekken.",
	},
    body: {
		en: ["Posters with recognisable faces that grab attention and evoke emotion, that was the assignment.",
		"It should create a clear message and apply it to a related brand, using innovative ways of incorporating faces into non-human items to emphasise a message."],
		nl: ["Creër posters met herkenbare gezichten die de aandacht trekken en emoties opwekken.",
		"Deze moeten een duidelijk bericht overbrengen en toepasbaar zijn op een herkenbaar merk, door gezichten te verwerken in niet-menselijke dingen om de boodschap sterker over te brengen."],
	},
    images: ["assets/poster.jpg", "assets/poster2.jpg"],
    tags: { en: ["Design"], nl: ["Ontwerp"] },
    links: [],
    featured: false,
  },
  {
    title: {en: "Hangman AI", nl: "Galgje AI"},
    year: "2023",
    role: {en: "Bachelor's Course",  nl: "Bachelor Vak"},
    description: {
		  en: "A course on artificial intelligence using Python.",
		  nl: "Een vak over Artificial Intelligence met Python.",
	  },
    body: {
		en: ["A course on artificial intelligence using Python. Different search methods were taught during the course.",
		"My final project was an educated guessing bot playing hangman. You could play Hangman for a round, and then the “AI” would play a round. The amount of tries it takes you to get to te answer correspond to the lives left to play again."],
		nl: ["Een vak over Artificial Intelligence met Python. Verscheidene zoekmethodes werden aangeleerd in dit vak.",
		"Mijn eindproject was een AI waartegen je galgje kan spelen, waarin je om de beurt met de AI een woord verzint of raadt. Het aantal pogingen dat het kost om het juiste antwoord te vinden bepaalt hierin het aantal levens dat je krijgt om te raden."],
	},
    images: [],
    tags: { en: ["Programming"], nl: ["Programmeren"] },
    links: [],
    featured: false,
  },
  {
    title: {en: "Interactive Statistics Installation", nl: "Interactieve Statistieken Installatie"},
    year: "2022",
    role: {en: "Bachelor's Course",  nl: "Bachelor Vak"},
    description: {
      en: "An artistic representation of gambling statistics.",
	  nl: "Een artistieke representatie van gokstatistieken.",
	},
    body: {
		en: ["An artistic representation of gambling statistics aiming to raise awareness among the users in (online) gambling.",
		"To do so, an interactive installation representing the amount of money spent on different types of gambling was built"],
		nl: ["Een artistieke representatie van gokstatistieken, met het doel om bewustzijn te vergroten onder (online) gokkers.",
		"Dit werd gedaan met een interactieve installatie die een representie geeft van de hoeveelheden geld die worden uitgegeven aan diverse vormen van gokken."],
	},
    images: ["assets/gamble.mp4"],
    tags: { en: ["Programming", "Design"], nl: ["Programmeren", "Ontwerp"] },
    links: [],
    featured: false,
  },
  {
    title: {en: "Running Injury Prevention", nl: "Blessurepreventie bij Hardlopen"},
    year: "2022",
    role: {en: "Bachelor's Course",  nl: "Bachelor Vak"},
    description: {
      en: "Using IMU sensors to measure shock attenuation while running, and giving real-time audio feedback.",
	  nl: "IMU sensors gebruiken om de schokdemping tijdens het hardlopen te meten, en hier real-time audio feedback op geven.",
	},
    body: {
		en: ["Running is one of the biggest sports worldwide, but a lot of people don’t have the right technique or run for too long, resulting in injuries.",
		"If fatigue could be measured and indicated, many injuries can be avoided. One way to measure fatigue in running is by calculating shock attenuation, this is a representation of how much of the shock your ankle and knee absorb by bending during impact.",
		"A non-fatigued runner keeps their tibia relatively stable by attenuating the shock in their lower leg. We used IMU sensors to measure this shock attenuation and fed back to the runner with audio feedback, telling them to keep it up or take a break when necessary."],
		nl: ["Hardlopen is een van de grootste sporten wereldwijd, maar veel mensen hebben niet de juiste techniek of rennen te lang, wat kan resulteren in blessures.",
		"Als vermoeidheid word gemeten en aangegeven, kunnen vele blessures voorkomen worden. Een methode om vermoeidheid te meten is a.d.h.v. het berekenen van schokdemping, dit is een representatie van het gedeelte van de schok dat geabsorbeerd wordt door de enkel en knie door buiging tijdens impact.",
		"Een niet-vermoeide hardloper houdt zijn their tibia relatief stabiel door het dempen van de schok in het onderbeen. Wij hebben IMU sensors gebruikt om deze schokdemping te meten en gaven real-time audio feedback hierop."],
	},
    images: [],
    tags: { en: ["Programming"], nl: ["Programmeren"] },
    links: [],
    featured: false,
  },
  {
    title: {en: "Antler Lamp", nl: "Gewei Lamp"},
    year: "2021",
    role: {en: "Personal Project",  nl: "Persoonlijk Project"},
    description: {
      en: "A nightlight made of old skateboarding gear and antlers found in the woods.",
	  nl: "Een nachtlamp gemaakt van oude skateboardonderdelen en een gevonden gewei uit het bos.",
	},
    body: [],
    images: ["assets/lamp1.jpg", "assets/lamp2.jpg"],
    tags: { en: ["Design"], nl: ["Ontwerp"] },
    links: [],
    featured: false,
  },
  {
    title: {en: "Circular Economy Transition", nl: "Circulaire Economie Transitie"},
    year: "2024",
    role: {en: "Bachelor's Minor Course",  nl: "Bachelor Minor Vak"},
    description:{
      en: "This minor showed circular transition possibilities and methodologies from three different levels.",
	  nl: "Deze minor ging over circulaire transitie mogelijkheden and methodoles op drie niveau's.",
	},
    body: {
		en: ["This minor showed circular transition possibilities and methodologies from three different levels.",
		"A governance level, showing how difficult it can be to make and sustain legislative frameworks. A business level, ways business processes can be altered or designed to be circular. And finally a psychological level, how can consumer behaviour be predicted and the categories they fall in."],
		nl: ["Deze minor ging over circulaire transitie mogelijkheden and methodoles op drie niveau's.",
		"Op een bestuursniveau, waarin het duidelijk werd he lastig het kan zijn om wettelijke frameworks te maken en onderhouden. Een business niveau, waarin bedrijfsprocessen ontworpen of aangepast kunnen worden om meer circulair te zijn. En tot slot een psychologisch niveau, hoe het gedrag van consumenten voorspeld kan worden en welke categorie ze in vallen."],
	},
    images: [],
    tags: ["Management"],
    links: [],
    featured: false,
  },
  {
    title: {en: "Documentary Making", nl: "Documentaire Maken"},
    year: "2024",
    role: {en: "Bachelor's Course",  nl: "Bachelor Vak"},
    description: {
      en: "A course on creating short documentaries.",
	  nl: "Een vak over het maken van korte documentaires.",
	},
    body: {
		en: ["A course on creating short documentaries, where the goal is to create a short documentary presenting your personal perspective on a socially relevant subject.",
		"In the making of this documentary I got very close to someone and their struggles, which I displayed with care. Although I am proud of the end result, i will not post it as the information is sensitive for my protagonist."],
		nl: ["Een vak over het maken van korte documentaires, waarbij het doel is om je persoonlijke perspectief te presenteren over een sociaal relevant onderwerp.",
		"Tijdens het maken van deze documentaire ben ik erg dicht tot iemand en zijn problemen, wat ik zorg heb afgebeeld. Ookal ben ik trots op het resultaat, zal ik het weergeven omdat de informatie erg sensitief is voor mijn hoofdpersoon."],
	},
    images: [],
    tags: [],
    links: [],
    featured: false,
  },
              /* 
  HIER BEN IK
  */
  {
    title: {en: "Additive Manufacturing", nl: "Additieve Productieprocessen"},
    year: "2025",
    role: {en: "Master's Courses",  nl: "Master Vakken"},
    description: {
      en: "Understanding the principles of additive manufacturing and processes and designing for them.",
	  nl: "De principes achter additieve productieprocessen begrijpen en daarmee ontwerpen.",
	},
    body: {
		en: ["Understanding the principles of all currently used additive manufacturing processes and designing for them. I have taken two courses on additive manufacturing, the first of which focused on all ways the industry can benefit from the techniques and processes and what compromises to work around.",
		"This required analysing the parts and components at hand, applying Topology Optimization and Generative Design to aid in finding an optimal solution for additive manufacturing processes. Then, using Simufact to optimize printing quality and quantity. The report can be found below.",
		"The second course, on 3D Bioprinting went into depth on restoring, maintaining or improving natural tissue with a focus on functionality. A project proposal on a way to benefit the field was written, this can be found below as well."],
		nl: ["De principes achter additieve productieprocessen begrijpen en daarmee ontwerpen. Ik heb twee vakken gevolgd over additieve productie, de eerste legde de focus op de voor- en nadelen van deze technieken in de industrie en hoe daarmee te werken.",
		"Hier werd een analyse uitgevoerd op onderdelen, en met behulp van Topology Optimization en Generative Design een optimale oplossing vinden voor additieve productieprocessen. Daarna werd Simufact gebruikt om de printkwaliteit en kwantiteit te optimaliseren.",
		"Het tweede vak over 3D Bioprinting ging in de diepte over het restoreren, onderhouden en verbeteren van natuurlijk weefsel met de focus op functionaliteit. Ook heb ik hier een projectvoorstelgeschreven dat het veld zou kunnen bevorderen, beide verslagen staan hieronder."],
	},
    images: ["assets/DFAM1.png", "assets/DFAM2.png"],
    tags: { en: ["Manufacturing", "Design", "CAD"], nl: ["Productie", "Ontwerp", "CAD"] },
    links: [{url: "assets/docs/DFAM.pdf", label: "Open AM Report"},{url: "assets/docs/3DBP.pdf", label: "Open Bioprinting Report"}],
    featured: true,
  },
  {
    title: "Product Lifecycle Management",
    year: "2025",
    role: {en: "Master's Course",  nl: "Master Vak"},
    description: {
      en: "Gaining knowledge and experience in Product Lifecycle Management and applying them using 3DExperience and Solidworks.",
	  nl: "Kennis en ervaring opdoen met Product Lifecycle Management en deze toepassen met 3DExperience en Solidworks.",
	},
    body: {
		en: ["Gaining knowledge and experience in Product Lifecycle Management and applying them using 3DExperience and Solidworks.",
		"In order to create maintain efficiency, expecially in larger companies, the right information has to be at the right place at the right time. Different roles at the company should be involved at varying moments throughout a product's lifecycle.",
		"A larger company was simulated using the 3DExperience environment, starting with an issue, moving to change request, creating a planning containing sub-projects, moving to change orders, change actions and finally, change execution."],
		nl: ["Kennis en ervaring opdoen met Product Lifecycle Management en deze toepassen met 3DExperience en Solidworks.",
		"Om efficient te blijven werken in grote bedrijvenmoet de juiste informatie op het juiste moment op de juiste plek zijn. Verschillende rollen binnen het bedrijf moeten op verschillende momenten betrokken worden in een product lifecycle.",
		"Een groter bedrijf werd gesimuleerd met een 3DExperience environment, startende met een 'issue', door naar een 'change request', daarna een planning maken met sub-projecten, door naar 'change orders', 'change actions' en uiteindelijk, 'change execution'."],
	},
    images: [],
    tags: ["Management"],
    links: [{url: "https://franstw.github.io/PLM/#intro", label: "Open Interactive Report"}],
    featured: false,
  },
  {
    title: {en: "3D Modeling and Simulation", nl: "3D Modelleren en Simuleren"},
    year: "2025",
    role: {en: "Master's Courses",  nl: "Master Vakken"},
    description: {
      en: "Reconstructing a skateboard deck, simulating heavy use, determining weak points and optimizing the design.",
	  nl: "Een skateboard deck namaken als CAD bestand en zwaar gebruik simuleren om zwakke plekken te vinden en het ontwerp daarmee te optimaliseren.",
	},
    body: {
		en: ["Using the advanced CAD/simulation software Siemens NX to recreate the design of my skateboard deck. The Droptest simulation plug-in was used to determine stresses when skateboarding with high impact.",
		"Weak points were determined, and a small redesign, consisting mostly of a higher number of thinner plies was made and tested.",],
		nl: ["Met de CAD/simulatie software Siemens NX een skateboard deck namaken, en de Droptest simulatie plug-in gebruiken om de stress van het skateboard te bepalen gedurende zware impact.",
		"Zwakke plekken werden gevonden en gebruikt om een herontwerp te maken, bestaande uit meer dunnere lagen. Deze kwam beter uit de test.",],
	},
    images: ["assets/skateboard.png"],
    tags: { en: ["Design", "CAD"], nl: ["Ontwerp", "CAD"] },
    links: [],
    featured: false,
  },
  {
    title: "Surface Engineering",
    year: "2026",
    role: {en: "Master's Courses",  nl: "Master Vakken"},
    description: {
      en: "The surface is arguably the most important part of any product or material, it is what the user interacts with and where most structural issues start.",
	  nl: "Het oppervlak is waarschijnlijk het belangrijkste onderdeel van elk product of materiaal, het is waar de interactie met de gebruiker plaats vindt en waar de meeste structurele problemen starten.",
	},
    body: {
		en: ["The surface is arguably the most important part of any product or material, it is what the user interacts with and where most structural issues start.",
		"Therefore, defining the specific properties of surfaces to optimize for durability or for the senses is important in industrial applications.",
		"The first of two master's course I have taken surface engineering taught the way material properties, topology and metrology can impact durability. The course focused on degradation and the coatings and treatments to prevent, after which a report was made on a topic of interest. The report we wrote on preventing scuffing of the Bruin Nederland Retourfles can be found below.",
		"A second course I have taken on surface engineering was aimed at the look and feel of surfaces, once again starting with lectures on the topic and finished with a report. This report aims to improve the experience of using wooden single use cutlery and can be found below as well.",
		"Another Master's course I took that's closely related to surface engineering, called Nature Inspired Design, taught how to borrow from natures problem solving skills using Biomimicry."],
		nl: ["Het oppervlak is waarschijnlijk het belangrijkste onderdeel van elk product of materiaal, het is waar de interactie met de gebruiker plaats vindt en waar de meeste structurele problemen starten.",
		"Daarom is het bepalen van de specifieke eigenschappen van oppervlaktes en deze optimaliseren voor duurzaamheidof voor de zintuigen erg belangrijk in industriële applicaties.",
		"Het eerste master vak dat ik gevolgd heb over surface engineering leerde hoe materiaaleigenschappen, topologie en metrologie impact kunnen hebben op duurzaamheid. Het vak legde de focus op degradatie en de coatings en behandelingen om dat te voorkomen. Hierna heb ik een verslag geschreven over 'scuffing' op de Bruin Nederland Retourfles (BNR), deze kan je hieronder vinden.",
		"Een tweede mastervak dat ik heb gevolgd over surface engineering richtte zich op de 'look and feel' van oppervlaktes, het verslag dat ik hiervoor heb geschreven gaat over de verbetering van de ervaring van het gebruiken van houten wegwerpbestek, en is ook hieronder te vinden.",
		"Een ander mastervak dat ik heb gevolgd dat gerelateerd is aan surface engineering was 'Nature Inspired Design', waarin geleerd werd hoe oplossingen te lenen vanuit de natuur door 'Biomimicry'."],
	},
    images: [],
    tags: { en: ["Manufacturing", "UX"], nl: ["Productie", "UX"] },
    links: [{url: "assets/docs/Durability_Report.pdf", label: "Open Durability Report"},{url: "assets/docs/Look_Feel_Report.pdf", label: "Open Look & Feel Report"}],
    featured: true,
  },
  {
    title: {en: "Design, Production & Materials [Ongoing]", nl: "Ontwerp, Productie & Materialen [Nog gaande]"},
    year: "2026",
    role: {en: "Master's Course",  nl: "Master Vak"},
    description: {
      en: "After the premaster's had already caught me up on material knowledge and the production processes required to work with them, I went further in depth by taking a Mechanical Engineering course on the combination of them. ",
	  nl: "Nadat de premaster me bij had gebracht over materiaalkunde en de productieprocessen om daarmee te werken, volg ik een werktuigbouwkunde vakcombination over de combinatie daarvan.",
	},
    body: [],
    images: [],
    tags: { en: ["Manufacturing", "Design"], nl: ["Productie", "Ontwerp"] },
    links: [],
    featured: true,
  },
  {
    title: {en: "Multidisciplinary Project for Heinz", nl: "Multidisciplinair Project voor Heinz"},
    year: "2026",
    role: "Pre-Master IDE",
    description: {
      en: "Work on a project for Heinz in a multidisciplinary team consisting of Mechanical Engineering students, Industrial Engineering & Management students and Industrial Design Engineering students.",
	  nl: "Een project voor Heinz in een multidisciplinair team bestaande uit werktuigbouwkunde studenten, Industrial Engineering & Management studenten en Industrial Design Engineering studenten.",
	},
    body: {
		en: ["For this project for Heinz, we worked in a multidisciplinary team consisting of Mechanical Engineering students, Industrial Engineering & Management students and Industrial Design Engineering students.",
		"The team acted as a design agency, planning, managing and carrying out the development cycle.",
		"Heinz was very pleased with our results and awarded us for it, sadly I am not allowed to share much about it."],
		nl: ["In dit project voor Heinz, werkten we in een multidisciplinair team bestaande uit werktuigbouwkunde studenten, Industrial Engineering & Management studenten en Industrial Design Engineering studenten.",
		"Het team fungeerde als een ontwerpbureau, met plannen, managen en het uitvoeren van de ontwikkelingscyclus.",
		"Heinz was erg tevreden met ons resultaat en gaf ons een prijs ervoor, helaas mag ik hier niet veel over delen."],
	},
    images: [],
    tags: { en: ["Design", "Manufacturing", "UX"], nl: ["Ontwerp", "Productie", "UX"] },
    links: [],
    featured: false,
  },
  {
    title: {en: "Soft Robotics Sign Language Glove", nl: "Soft Robotics Gebarentaal Handschoen"},
    year: "2026",
    role: {en: "Master's Course",  nl: "Master Vak"},
    description: {
      en: "Soft robotics are a new approach in designing safe and adaptive interactions.",
	  nl: "Soft robotics is een nieuwe methode in het ontwerpen van veilige en interactieve interacties.",
	},
    body: {
		en: ["Soft robotics are a new approach in designing safe and adaptive interactions.",
		"For the final project of the course, our group created a glove to help learn sign language using mostly soft materials, with the intention to make the user be able to wear it throughout the day without being disturbed from other work.",
		"The result was tested using rock, paper, scissors and worked surprisingly well. A video of the project can be found above."],
		nl: ["Soft robotics is een nieuwe methode in het ontwerpen van veilige en interactieve interacties.",
		"Voor het eindproject van dit vak hebben weeen handschoen gemaakt om gebarentaal te leren met nagenoeg alleen zachte materialen, waardoor deze de hele dag door gedragen kan worden zonder afgeleid ervan te raken.",
		"Het resultaat werd getest met steen, papier, schaar en werkte goed. Een video van het project is kan je hierboven vinden."],
	},
    images: ["assets/meg.mp4"],
    tags:  { en: ["Design", "Programming"], nl: ["Ontwerp", "Programmeren"] },
    links: [],
    featured: false,
  },
  {
    title: {en: "Digital Twinning and Virtual Reality", nl: "Digital Twinning en Virtual Reality"},
    year: "2025",
    role: {en: "Master's Course",  nl: "Master Vak"},
    description: {
      en: "A course on Virtual Reality lead our group to create a digital twin for a paper company that has issues transferring audio-based knowledge.",
	  nl: "Een master vak over Virtual Reality zorgde ervoor dat we een digital twin voor een papierfabriek maakten waar problemen werden ondervonden met kennisoverdracht.",
	},
    body: {
		en: ["A course on Virtual Reality lead our group to create a digital twin for a paper company that has issues transferring audio-based knowledge.",
		"By mapping images to Gaussian splats, a digital twin of the factory line was created. The prototype was further developed in Unity, where the idea was to map changes in real-time audio to the twin.",
		"A maintenance worker can identify the issue and log it in the environment, where the audio log is stored and processed.",
		"When a similar soundscape is detected, the system can provide a provide the log of the previous repair. This way, audio-based knowledge can be transferred to new and future maintenance workers.",
		"I cannot share more regarding the company or further details of the project."],
		nl: ["Een master vak over Virtual Reality zorgde ervoor dat we een digital twin voor een papierfabriek maakten waar problemen werden ondervonden met kennisoverdracht gerelateerd aan audio.",
		"Een Gaussian splat digital twin van de fabriekslijn werd gemaakt en als prototype verder uitgewerkt in Unity, waar het real-time audio zou verbinden met de twin.",
		"Een onderhoudsmedewerker kan het probleem vaststellen en noteren in het systeem, waar de audio ook is opgeslagen en verwerkt.",
		"Wanneer een soortgelijk geluid is gedetecteerd kan het systeem vertellen hoe het de vorige keer werd gefixt. Zo kan audio kennis overgebracht worden naar toekomstige onderhoudsmedewerkers.",
		"Ik kan verder geen details over het bedrijf of het project delen."],
	},
    images: [],
    tags: { en: ["Programming", "UX", "CAD"], nl: ["Programmeren", "UX", "CAD"] },
    links: [],
    featured: false,
  },
];


