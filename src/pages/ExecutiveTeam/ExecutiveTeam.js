import React from 'react';
import './ExecutiveTeam.css';

const execMembers = [
  {
    name: 'Mathis Doyon',
    role: 'Co-President & Communications',
    year: 'Third Year',
    program: 'BSc in Human Kinetics - Applied in Kinesiology',
    hometown: 'El Paso, Texas, USA',
    image: '/images/mathisBio.png',
  },
  {
    name: 'Joel Scully',
    role: 'Co-President & Marketing',
    year: 'Fourth Year',
    program: 'BSc in Human Kinetics',
    hometown: 'Ottawa, ON, Canada',
    image: '/images/joelBio.png',
  },
  {
    name: 'Estefania Zaragoza Pedroza',
    role: 'Vice President',
    year: 'Fourth Year',
    program: 'BSc in Nursing in French Immersion',
    hometown: 'Vancouver, BC, Canada',
    image: '/images/estefaniaBio.png',
  },
  {
    name: 'Alexander Hnatovsky',
    role: 'Treasurer',
    year: 'Fourth Year',
    program: 'Juris Doctor/Bachelor of Commerce',
    hometown: 'Ottawa, ON, Canada',
    image: '/images/sashaBio.png',
  },
  {
    name: 'Céline Wan Min Kee',
    role: 'Web Development Lead',
    year: 'Graduate',
    program: 'BSc in Computer Science',
    hometown: 'Rose Hill, Mauritius',
    image: '/images/celineBio.png',
  },
  {
    name: 'Francesca Nițică',
    role: 'Social Media & Female Captain',
    year: 'Third Year',
    program: 'Business Technology Management & Mathematics',
    hometown: 'Ottawa, ON, Canada',
    image: '/images/francescaBio.png',
  },
  {
    name: 'Ethan Leong',
    role: 'Male Captain',
    year: '',
    program: '',
    hometown: '',
    image: '/images/ethanBio.png',
  },
];

const honorableMentions = [
  {
    name: 'Ryan Zanganeh',
    role: 'First UOTC President',
    image: '/images/ryanBio2.jpg',
    description: [
      'Ryan is the First President of the University of Ottawa Tennis Club. Since starting tennis at the age of six, he has been training, competing, and teaching kids & teens how to play tennis.',
      'He has done a TedTalk on Crohn’s Disease and is currently completing a post-operative rotator cuff recovery protocol. Ryan is pursuing a career in dentistry with interests in Pediatrics and Oral Surgery specialties.',
    ],
  },
  {
    name: 'Sara Zeineddine',
    role: 'First UOTC Communications Executive',
    image: '/images/saraBio.jpg',
    description: [
      'Sara is the First Communications Executive of the uOttawa tennis team. She was very invested in promoting the UOTC, especially on social media.',
      'She competed both nationally and internationally. She also played and competed for several years in UP Club and Academia Sanchez Casal in Barcelona, Spain.',
    ],
  },
  {
    name: 'Luka David',
    role: 'First UOTC Web Developer',
    image: '/images/lukaBio2.jpg',
    description: [
      'Luka is the first Web developer for the UOTC. He began coding in grade ten and participated in several hackathons.',
      'His goal was to help the team in all aspects, not just technical ones, and improve the university’s reputation both on and off the court.',
    ],
  },
];

const ExecutiveTeam = () => {
  return (
    <div className="execs-container">
      <img
        src="/images/exec_banner_en.png"
        alt="Executive Banner"
        className="exec-banner"
      />
    <div className="execs-content">  
      <p className="execs-description">
        The University of Ottawa Tennis Club Executive Team is composed of ten current or alumni uOttawa students.
        They are passionate and work hard into growing, improving, and promoting the University of Ottawa Tennis Club (UOTC).
        Each person on the Executive Team holds a respective role: President, Treasurer, Communications, Social Media,
        Marketing, Website Development and Male & Female Captains.
      </p>
    </div>

      <h3 className="execs-title">Meet the Team</h3>

      <div className="execs-grid">
        {execMembers.map((member, index) => (
          <div className="execs-card" key={index}>
            <img src={member.image} alt={member.name} className="player-pic" />
            <h5 className="text-center">{member.name}</h5>
            <h6 className="text-center text-muted">{member.role}</h6>
            <div>
              {member.year && <p className="text-center mb-0">{member.year}</p>}
              {member.program && <p className="text-center mb-0">{member.program}</p>}
              {member.hometown && <p className="text-center mb-0"><b>Hometown:</b> {member.hometown}</p>}
            </div>
          </div>
        ))}
      </div>

      <br />
      <h3 className="execs-title">Honorable Mentions</h3>
      <div className="execs-grid">
        {honorableMentions.map((person, index) => (
          <div className="execs-card" key={index}>
            <img src={person.image} alt={person.name} className="player-pic" />
            <h5 className="text-center">{person.name}</h5>
            <h6 className="text-center text-muted">{person.role}</h6>
            {person.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        ))}
      </div>

      <br />
      <hr />

      <h3 className="execs-title text-center">Members of the Executive Advisory Board</h3>
      <div className="execs-description">
        <p>
          <strong>Dr. Erin Boynton (Board Chair)</strong> is an Orthopaedic surgeon, sports doctor, and past-chair of the research committee for the Canadian Orthopaedic Foundation. She was the chief orthopaedic surgeon and consultant to the Toronto Blue Jays, Toronto Maple Leafs and the Toronto Argos. She is the first female orthopaedic surgeon to work with the MLB and NHL and is the current Medical Director for the Rogers Cup WTA tennis tour event in Toronto. Dr. Boynton's role on the Executive Advisory Board is crucial as she provides the Executive Committee useful insight regarding ways the UOTC can improve its training methods during practices in order to improve and optimise the overall health of its athletes.
        </p>
        <p>
          <strong>Mr. Alan Cohen</strong> is a practising lawyer who was a sessional lecturer at the University of Ottawa's Faculty of Law for 13 years, leading a course in Municipal and Land Use Planning Law. Alan is a life-long tennis player with a love of the game that far exceeds his talent, but which will allow him to assist the UOTC Executive Committee in putting together various documents for administrative use and to advise on any organisational decisions.
        </p>
        <p>
          <strong>Dr. Alireza Jalali</strong> is the Head of the Division of Anatomy, and the Interim Assistant Dean, External Relations at Faculty of Medicine, uOttawa. He has a Medical Doctorate and a Specialist Diploma in Sports Medicine from the University of Liège in Belgium. Since coming to the Faculty of Medicine in 2003, he has been teaching Anatomy passionately. He has developed an active research program in Educational Innovations use and usefulness: Podcasts, YouTube, TBL, Social Media, and 3D printing. Dr. Jalali also has an established track record of Leadership: UGME Unit Leader, Director of Practical exams and Social Media Advisor at Royal College. He has received numerous awards, including the 2020 University of Ottawa Teacher of the Year award. Dr. Jalali's experience in leadership and problem-solving is beneficial for the President of the UOTC. He can provide suggestions on how to tackle both administrative, and social-related problems the UOTC may face in the future.
        </p>
        <p>
          <strong>Dr. Cameron Montgomery</strong> is a professor in the Faculty of Education at the University of Ottawa. Dr. Montgomery was a former Progressive Conservative Candidate for riding in Orleans. He continues to regularly play and enjoy the sport of tennis. Having significant experience with fundraising and attention building, Dr. Montgomery’s role on the board will help both Marketing and Communications Executives in approaching new sponsors, and growing our fundraising outreach.
        </p>
        <p>
          <strong>Mrs. Julie Smyth</strong> is a tennis enthusiast and member of the Rockcliffe Lawn Tennis Club (RLTC) in Ottawa. She has played and followed tennis for more than 30 years and is an active member of the Ottawa tennis community. Julie is a volunteer executive member of the RLTC Board of Directors, serving as Secretary. She was part of the Board in 2020 as the club navigated a challenging but successful reopening during the COVID-19 pandemic. As well as being an active member of the Board, Julie looks after RLTC's social media and helps with adult programming. She also took on the role of welcoming new members to the club and attends National Capital Tennis Association (NCTA) AGMs on behalf of RLTC. Julie has degrees in business and journalism, both from Ryerson University, and is a professional writer and editor. For more than two decades, she worked as a reporter at leading national newspapers in Canada and Scotland, then worked as a freelance writer, federal government speechwriter and marketing content creator. She has two teenagers, one of whom plays tennis. Her experience regarding board leadership and social media platform management is extremely beneficial for the UOTC; especially the Communications Executive.
        </p>
        <p>
          <strong>Mr. Marinus Wins</strong> is the Treasurer for the National Capital Tennis Association (NCTA), the governing body regulating tennis in Ottawa. He is a member of the Athletics Wall of Fame for tennis at Carleton University. He was a member of Carleton University's tennis team which twice won the team championships of the Ontario Quebec Athletic Association (OQAA). Currently retired, he enjoys playing tennis as much as he can. His experience with being a treasurer and handling money for a large tennis-related association will be beneficial in providing insight regarding budgeting, fees, expenses, and other suggestions to the UOTC; especially to the Treasurer of the UOTC.
        </p>
        <p>
          <strong>Mr. Max Zimmerman</strong> is a graduate of the Honours program in Communications at the University of Ottawa. He began playing tennis at the age of six and played competitively in Ontario as a junior, reaching a ranking of 8th in the province back in 2007. His favourite shots are the backhand down the line and drop shot. Max was also the former Marketing Executive of the UOTC for two years. Max's position on the board is beneficial for aiding the current Marketing Executive with different ideas for fundraising and clinic events.
        </p>
        <p>
          <strong>Mrs. Rachel Gould</strong> represents the various Canadian University Tennis teams at Tennis Canada in the Development Department. An avid fan and player of tennis, her developmental feedback can be useful to all UOTC Executives in growing and better developing the club.
        </p>
      </div>
    </div>
  );
};

export default ExecutiveTeam;
