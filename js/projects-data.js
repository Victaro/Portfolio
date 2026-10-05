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
			

		
-------------------------------------------------------------------*/

const PROJECTS = [
  {
    title: "Digital Design Sketching",
    year: "2025",
    role: "Pre-Master IDE",
    description:
      "This course taught me how to do design sketching digitally, using its ideation strengths over traditional sketching.",
    body: [
      "After a comprehensive coure on traditional sketching, using fineliners and markers, digital design sketching was taught as a new tool for ideation sketching.",
      "This way of ideation sketching allows for easy variable tuning, morphing and comparison of various concepts before diving deep into production processes.",
	  "Therefore, the correct methodologies on how to construct a design sketch and allow for modularity are valuable skills.",
    ],
    images: ["assets/ChessPieces.jpg", "assets/gameboy.jpg"],
    tags: ["Design"],
    links: [],
    featured: true,
  },
  {
    title: "Programming in C++",
    year: "2023",
    role: "Bachelor's Minor Course",
    description:
      "During my Computer Science Minor, Network Systems, I took a course on programming in C++.",
    body: [
      "After my experiences with Java, Python, HTML, PHP among others, C++ proved to be a more complex language to learn.",
	  "Although I gained a reasonable understanding of the language, finising the course with a grade of 7.5, I don't think I will use this language much.",
	  "The other programming languages I know allow for quick prototyping and testing, while C++ requires more attention, making it a better solution for optimization once ideation has finished in my opinion.",
    ],
    images: ["assets/CPP.png"],
    tags: ["Programming"],
    links: [],
    featured: false,
  },
  {
    title: "Logo Design",
    year: "2022",
    role: "Board Member",
    description:
      "Being board member during the 35th year of our association, I designed a logo for our board and the lustrum itself using Adobe Illustrator.",
    body: [],
    images: ["assets/logo-design.png"],
    tags: ["Design"],
    links: [],
    featured: false,
  },
  {
    title: "Confidential Contact Person",
    year: "2024",
    role: "Association Project",
    description:
      "In order to improve the mental wellbeing of students at the University of Twente, an outreach program was created.",
    body: ["In order to improve the mental wellbeing of students at the University of Twente, an outreach program was created.",
	  "Every association can volunteer one or two students to take part in the course, consisting of a few sessions of theory and practice.",
	  "My aim as confidential contact person is to make someone feel at ease, listen and ask, not to provide answers.",],
    images: ["assets/ccp.jpg"],
    tags: [],
    links: [],
    featured: false,
  },
  {
    title: "Game Design",
    year: "2023",
    role: "Bachelor's Minor Course",
    description:
      "I took a minor on game design, including 3D modeling in Blender and programming and working in Unity.",
    body: ["I took a minor on game design, including 3D modeling in Blender and programming and working in Unity.",
	"Another part of the minor focused on playtesting, and resulted in a co-op chess-like 4 player game."],
    images: ["assets/gameplay.png"],
    tags: ["Programming", "Design", "UX"],
    links: [],
    featured: false,
  },
  {
    title: "Board Year",
    year: "2022",
    role: "Board Member",
    description:
      "I was board member for the surfing association DWV Hardboard, adding skateboarding as a weekly sport.",
    body: ["I was board member for the surfing association DWV Hardboard, taking care of all creative aspects and most importantly; adding skateboarding as a new sport.",
	"My main goal was to make skateboarding accessible to students, by providing a safe environment where it feels safe to fall and learn.",
	"I started negotiating with skatepark De Fabriek and the Sports Umbrella Twente to work towards a contract financed by the University, took a course on contract making provided by the Student Union and wrote up a contract.",
	"Now skateboarding is a weekly sport for DWV Hardboard, financed by the University."],
    images: ["assets/contract.jpg"],
    tags: ["Management"],
    links: [],
    featured: false,
  },
    {
    title: "Co-created stand-up smartdesk",
    year: "2024",
    role: "Bachelor's Thesis",
    description:
      "How to reduce sedentary behaviour at the office using a speculative design? The final result is a stand-up smartdesk, co-created with members of the Biosignals and Systems group of the University of Twente.",
    body: ["How to reduce sedentary behaviour at the office using a speculative design? The final result is a stand-up smartdesk, co-created with members of the Biosignals and Systems group of the University of Twente.",
	"This project combined many different skills, ideation and prototyping was done using co-creation with the Biosignals and Systems group of Utwente. Prototyping was done with and Arduino, connecting over serial with the exisiting sit-stand desks at the group. The design is lasercut and finally tested by members of the Biosignals and Systems group.",
	"The prototype is connected to existing sit-stand desks over ModBus communication, and the device easily fits underneath the desk. It measures sedentary time and automatically adjusts the desk height to the users preferred standing height, forcing a small stand-up work session."],
    images: ["assets/thesisfoto.jpg"],
    tags: ["UX", "Design", "Programming"],
    links: [{url: "https://essay.utwente.nl/100735/", label: "Open Full Thesis"}],
    featured: false,
  },
	{
    title: "Pomodoro study chair",
    year: "2023",
    role: "Bachelor's Course",
    description:
      "A distraction free Pomodoro chair, made for people with ADHD, incorporating exercise and fidgeting.",
    body: ["How to reduce sedentary behaviour at the office using a speculative design? The final result is a stand-up smartdesk, co-created with members of the Biosignals and Systems group of the University of Twente.",
	"This project tackles many different challenges; creating a system based on user input, taking individual differences into account, and implementing both user interviews and peer-reviewed data for a final design."],
    images: ["assets/slhay.png"],
    tags: ["UX", "Programming"],
    links: [],
    featured: false,
  },
  {
    title: "Interactive art installation",
    year: "2021",
    role: "Bachelor's Course",
    description:
      "Interactive art installation with the theme infocalypse now, showing the difficulty of distinguishing real news from fake news.",
    body: ["Interactive art installation with the theme infocalypse now, showing the difficulty of distinguishing real news from fake news.",
	"The installation consists of 6 CRT TVs displaying news items, but only one of these items is NOT fake news, sticking to this year's GOGBOT art festival theme: infocalypse now.",
	"The user clicks a button associated with one of the TVs, after which the mannequin becomes more or less “corrupted”, this is displayed using a smoke machine, LEDs and sound effects.",
	"This project uses a server to output to the six different TVs, the server is connected to an Arduino taking inputs from the user and outputting to a smoke machine LEDs and a dynamic sound system"],
    images: ["assets/gogbot.jpg"],
    tags: ["UX", "Design", "Programming"],
    links: [],
    featured: false,
  },
  {
    title: "Advisory Board",
    year: "2023",
    role: "Association Project",
    description:
      "Help handle difficult situations and how to communicate them, how to be clear, pragmatic, effective and efficient while creating a welcoming environment to discuss difficult topics.",
    body: ["Help handle difficult situations and how to communicate them, how to be clear, pragmatic, effective and efficient while creating a welcoming environment to discuss difficult topics.",
	"My tasks mostly consisted of listening and giving constructive feedback while remaining open and welcoming.",],
    images: [],
    tags: ["Management"],
    links: [],
    featured: false,
  },
  {
    title: "Poster Design",
    year: "2021",
    role: "Bachelor's Course",
    description:
      "Create posters with recognisable faces that grab attention and evoke emotion.",
    body: ["Posters with recognisable faces that grab attention and evoke emotion, that was the assignment.",
	"It should create a clear message and apply it to a related brand, using innovative ways of incorporating faces into non-human items to emphasise a message."],
    images: ["assets/poster.jpg", "assets/poster2.jpg"],
    tags: ["Design"],
    links: [],
    featured: false,
  },
  {
    title: "Hangman AI",
    year: "2023",
    role: "Bachelor's Course",
    description:
      "A course on artificial intelligence using Python.",
    body: ["A course on artificial intelligence using Python. Different search methods were taught during the course.",
	"My final project was an educated guessing bot playing hangman. You could play Hangman for a round, and then the “AI” would play a round. The amount of tries it takes you to get to te answer correspond to the lives left to play again."],
    images: [],
    tags: ["Programming"],
    links: [],
    featured: false,
  },
  {
    title: "Interactive Statistics Installation",
    year: "2022",
    role: "Bachelor's Course",
    description:
      "An artistic representation of gambling statistics.",
    body: ["An artistic representation of gambling statistics aiming to raise awareness among the users in (online) gambling.",
	"To do so, an interactive installation representing the amount of money spent on different types of gambling was built"],
    images: ["assets/gamble.mp4"],
    tags: ["Programming", "Design"],
    links: [],
    featured: false,
  },
  {
    title: "Running Injury Prevention",
    year: "2022",
    role: "Bachelor's Course",
    description:
      "Using IMU sensors to measure shock attenuation while running, and giving real-time audio feedback.",
    body: ["Running is one of the biggest sports worldwide, but a lot of people don’t have the right technique or run for too long, resulting in injuries.",
	"If fatigue could be measured and indicated, many injuries can be avoided. One way to measure fatigue in running is by calculating shock attenuation, this is a representation of how much of the shock your ankle and knee absorb by bending during impact.",
	"A non-fatigued runner keeps their tibia relatively stable by attenuating the shock in their lower leg. We used IMU sensors to measure this shock attenuation and fed back to the runner with audio feedback, telling them to keep it up or take a break when necessary."],
    images: [],
    tags: ["Programming"],
    links: [],
    featured: false,
  },
  {
    title: "Antler Lamp",
    year: "2021",
    role: "Personal Project",
    description:
      "A nightlight made of old skateboarding gear and antlers found in the woods.",
    body: [],
    images: ["assets/lamp1.jpg", "assets/lamp2.jpg"],
    tags: ["Design"],
    links: [],
    featured: false,
  },
  {
    title: "Circular Economy Transition",
    year: "2024",
    role: "Bachelor's Minor Course",
    description:
      "This minor showed circular transition possibilities and methodologies from three different levels.",
    body: ["This minor showed circular transition possibilities and methodologies from three different levels.",
		"A governance level, showing how difficult it can be to make and sustain legislative frameworks. A business level, ways business processes can be altered or designed to be circular. And finally a psychological level, how can consumer behaviour be predicted and the categories they fall in."],
    images: [],
    tags: ["Management"],
    links: [],
    featured: false,
  },
  {
    title: "Documentary Making",
    year: "2024",
    role: "Bachelor's Course",
    description:
      "A course on creating short documentaries.",
    body: ["A course on creating short documentaries, where the goal is to create a short documentary presenting your personal perspective on a socially relevant subject.",
		"In the making of this documentary I got very close to someone and their struggles, which I displayed with care. Although I am proud of the end result, i will not post it as the information is sensitive for my protagonist."],
    images: [],
    tags: [],
    links: [],
    featured: false,
  },
  {
    title: "Additive Manufacturing",
    year: "2025",
    role: "Master's Courses",
    description:
      "Understanding the principles of additive manufacturing and processes and designing for them.",
    body: ["Understanding the principles of all currently used additive manufacturing processes and designing for them. I have taken two courses on additive manufacturing, the first of which focused on all ways the industry can benefit from the techniques and processes and what compromises to work around.",
		"This required analysing the parts and components at hand, applying Topology Optimization and Generative Design to aid in finding an optimal solution for additive manufacturing processes. Then, using Simufact to optimize printing quality and quantity. The report can be found below.",
		"The second course, on 3D Bioprinting went into depth on restoring, maintaining or improving natural tissue with a focus on functionality. A project proposal on a way to benefit the field was written, this can be found below as well."],
    images: ["assets/DFAM1.png", "assets/DFAM2.png"],
    tags: ["Manufacturing", "Design", "CAD"],
    links: [{url: "assets/docs/DFAM.pdf", label: "Open AM Report"},{url: "assets/docs/3DBP.pdf", label: "Open Bioprinting Report"}],
    featured: true,
  },
  {
    title: "Product Lifecycle Management",
    year: "2025",
    role: "Master's Course",
    description:
      "Gaining knowledge and experience in Product Lifecycle Management and applying them using 3DExperience and Solidworks.",
    body: ["Gaining knowledge and experience in Product Lifecycle Management and applying them using 3DExperience and Solidworks.",
		"In order to create maintain efficiency, expecially in larger companies, the right information has to be at the right place at the right time. Different roles at the company should be involved at varying moments throughout a product's lifecycle.",
		"A larger company was simulated using the 3DExperience environment, starting with an issue, moving to change request, creating a planning containg sub-projects, moving to change orders, change actions and finally, change execution."],
    images: [],
    tags: ["Management"],
    links: [{url: "https://franstw.github.io/PLM/#intro", label: "Open Interactive Report"}],
    featured: false,
  },
  {
    title: "3D modeling and Simulation",
    year: "2025",
    role: "Master's Course",
    description:
      "Reconstructing a skateboard deck, simulating heavy use, determining weak points and optimizing the design.",
    body: ["Using the advanced CAD/simulation software Siemens NX to recreate the design of my skateboard deck. The Droptest simulation plug-in was used to determine stresses when skateboarding with high impact.",
		"Weak points were determined, and a small redesign, consisting mostly of a higher number of thinner plies was made and tested.",],
    images: ["assets/skateboard.png"],
    tags: ["Design", "CAD"],
    links: [],
    featured: false,
  },
  {
    title: "Surface Engineering",
    year: "2026",
    role: "Master's Courses",
    description:
      "The surface is arguably the most important part of any product or material, it is what the user interacts with and where most structural issues start.",
    body: ["The surface is arguably the most important part of any product or material, it is what the user interacts with and where most structural issues start.",
		"Therefore, defining the specific properties of surfaces to optimize for durability or for the senses is important in industrial applications.",
		"The first of two master's course I have taken surface engineering taught the way material properties, topology and metrology can impact durability. The course focused on degradation and the coatings and treatments to prevent, after which a report was made on a topic of interest. The report we wrote on preventing scuffing of the Bruin Nederland Retourfles can be found below.",
		"A second course I have taken on surface engineering was aimed at the look and feel of surfaces, once again starting with lectures on the topic and finished with a report. This report aims to improve the experience of using wooden single use cutlery and can be found below as well.",
		"Another Master's course I took that's closely related to surface engineering, called Nature Inspired Design, taught how to borrow from natures problem solving skills using Biomimicry."],
    images: [],
    tags: ["Manufacturing", "UX"],
    links: [{url: "assets/docs/Durability_Report.pdf", label: "Open Durability Report"},{url: "assets/docs/Look_Feel_Report.pdf", label: "Open Look & Feel Report"}],
    featured: true,
  },
{
    title: "Design, Production & Materials",
    year: "2026",
    role: "Master's Courses",
    description:
      "After the premaster's had already caught me up on material knowledge, production processes and required to work with them, I went further in depth by taking a Mechanical Engineering course on the combination of them. ",
    body: [],
    images: [],
    tags: ["Manufacturing", "Design"],
    links: [],
    featured: true,
  },
  {
    title: "Multidisciplinary project for Heinz",
    year: "2026",
    role: "Pre-Master IDE",
    description:
      "Work on a project for Heinz in a multidisciplinary team consisting of Mechanical Engineering students, Industrial Engineering & Management students and Industrial Design Engineering students.",
    body: ["For this project for Heinz, we worked in a multidisciplinary team consisting of Mechanical Engineering students, Industrial Engineering & Management students and Industrial Design Engineering students.",
	"The team acted as a design agency, planning, managing and carrying out the development cycle.",
	"Heinz was very pleased with our results and awarded us for it, sadly I am not allowed to share much about it."],
    images: [],
    tags: ["Design", "Manufacturing", "UX"],
    links: [],
    featured: false,
  },
  {
    title: "Soft Robotics Sign Language Glove",
    year: "2026",
    role: "Master's Course",
    description:
      "Soft robotics are a new approach in designing safe and adaptive interactions.",
    body: ["Soft robotics are a new approach in designing safe and adaptive interactions.",
	"For the final project of the course, our group created a glove to help learn sign language using mostly soft materials, with the intention to make the user be able to wear it throughout the day without being disturbed from other work.",
	"The result was tested using rock, paper scissors and worked surprisingly well. A video of the project can be found above."],
    images: ["assets/meg.mp4"],
    tags: ["Design", "Programming"],
    links: [],
    featured: false,
  },
  {
    title: "Digital Twinning and Virtual Reality",
    year: "2025",
    role: "Master's Course",
    description:
      "A course on Virtual Reality lead our group to create a digital twin for a paper company that has issues transferring audio-based knowledge.",
    body: ["A course on Virtual Reality lead our group to create a digital twin for a paper company that has issues transferring audio-based knowledge.",
	"By mapping images to Gaussian splats, a digital twin of the factory line was created. The prototype was further developed in Unity, where the idea was to map changes in real-time audio to the twin.",
	"A maintenance worker can identify the issue and log it in the environment, where the audio log is stored and processed.",
	"When a similar soundscape is detected, the system can provide a provide the log of the previous repair. This way, audio-based knowledge can be transferred to new and future maintenance workers.",
	"I cannot share more regarding the company or further details of the project."],
    images: [],
    tags: ["Programming", "UX", "CAD"],
    links: [],
    featured: false,
  },
];
