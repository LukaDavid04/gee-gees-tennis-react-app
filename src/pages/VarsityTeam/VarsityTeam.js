import React from 'react';
import './VarsityTeam.css';

const players = [
  {
    name: 'Ethan Leong',
    role: "Men's Captain",
    image: '/images/ethanBio.png',
  },
  {
    name: 'Noor Nabaa',
    role: "Female's Co-Captain",
    image: '/images/noorBio.png',
  },
  {
    name: 'Sophia Dimitrova',
    role: "Female's Co-Captain",
    image: '/images/sophiaBio.png',
  },
  {
    name: 'Vlad Pirusca (VV/Vench)',
    image: '/images/vlad_bio.png',
  },
  {
    name: 'Mayssa Tebourbi',
    image: '/images/mayssaBio.png',
  },
  {
    name: 'Alex Lungu',
    image: '/images/alexBio.png',
  },
  {
    name: 'Emma McShane',
    image: '/images/placeholder_pic.png',
  },
  {
    name: 'Filip Popadich',
    image: '/images/filipBio.jpg',
  },
  {
    name: 'Céline Wan Min Kee',
    image: '/images/celineBio.png',
  },
  {
    name: 'Connor Hickson',
    image: '/images/connorBio.png',
  },
  {
    name: 'Marian Tran',
    image: '/images/marianBio.png',
  },
  {
    name: 'Alexander Hnatovsky',
    image: '/images/sashaBio.png',
  },
  {
    name: 'Karishma Taneja',
    image: '/images/karishmaBio.png',
  },
  {
    name: 'Princeton Wilson',
    image: '/images/princetonBio.png',
  },
  {
    name: 'Francesca Nițică',
    image: '/images/francescaBio.png',
  },
  {
    name: 'Max von Althen',
    image: '/images/maxBio.png',
  },
  {
    name: 'Anna Turner',
    image: '/images/annaBio.png',
  },
  {
    name: 'Younes Benamour',
    image: '/images/placeholder_pic.png',
  },
  {
    name: 'Gabi Duhaime',
    image: '/images/placeholder_pic.png',
  },
  {
    name: 'Ben Hamilton',
    image: '/images/placeholder_pic.png',
  },
  {
    name: 'Andrea Dimitrev',
    image: '/images/placeholder_pic.png',
  },
  {
    name: 'Mathis Doyon',
    image: '/images/mathisBio.png',
  },
  {
    name: 'Jenna Jenkins',
    image: '/images/placeholder_pic.png',
  },
  {
    name: 'Sean Filzgerald',
    image: '/images/placeholder_pic.png',
  },
  {
    name: 'Elizabeth Mizikovsky',
    image: '/images/placeholder_pic.png',
  },
  {
    name: 'Laurent Soublière',
    image: '/images/placeholder_pic.png',
  },
  {
    name: 'Estefania Zaragoza',
    image: '/images/estefaniaBio.png',
  },
  {
    name: 'Joel Scully',
    image: '/images/joelBio.png',
  },
  {
    name: 'Gabby Khare',
    image: '/images/placeholder_pic.png',
  },
  {
    name: 'Hassan Mohamed',
    image: '/images/placeholder_pic.png',
  }
];

const VarsityTeam = () => {
  return (
    <div className="varsity-container">
      <img
        src="/images/div1_banner_en.png"
        alt="Varsity Team Banner"
        className="varsity-banner"
      />

      <div className="varsity-content">
        <h3 className="varsity-title">Gee-Gees Varsity Team</h3>
        <p className="varsity-description">
          The <a href="#teamPics">Gee-Gees Varsity Tennis Team</a> consists of a Men’s and a Women’s team (15 men and 15 women). Student-athletes are presented with the exceptional opportunity to engage in tennis at a highly competitive level. We travel across Ontario, representing the Gee-Gees’ name, to play all the other six universities in the OUA league. Our season starts in early September and finishes in early October with the OUA championship. Our team is driven by unwavering motivation to achieve greatness. The top 8 men and women of this division are those who travel and compete, with the rest serving as reserves all fighting for spots on the active roster.
        </p>
        <h4 className="varsity-subtitle">Practice Schedule</h4>
        <p className = "varsity-description">
          The Varsity team currently has morning practices every weekday from 7:00am to 9:00am at Rockliffe Lawn Tennis Club.
        </p>
        <p className = "varsity-description">
          Starting November 2nd, the team will practice at Tennis Center West Ottawa during these 3 periods:
        </p>
        <ul className = "varsity-description">
          <li>November 2nd to December 8th 2024</li>
          <li>January 6th to February 15th 2025</li>
          <li>February 24th to April 13th 2025</li>
        </ul>
        <p className = "varsity-description">They will be held on Wednesdays and Fridays from 7am to 9 am and Saturdays from 8pm to 10 pm.</p>
        <p className = "varsity-description">All of the men’s and women’s teams play together in order to grow as a team together and raise each other up. Practices always start with a tennis specific dynamic and hitting warm-up followed by live ball and basket drills with aim to improve footwork and agility, finished with game situations and match play.</p>
        <h4 className="varsity-subtitle">Tryout Information</h4>
        <p className = "varsity-description">We held 2 tryout dates for students wanting to play Varsity at Rockliffe Lawn Tennis Club:</p>
        <ul className = "varsity-description">
          <li>August 16th 2024 from 2:00pm to 4:00pm</li>
          <li>September 7th 2024 from 2:00pm to 4:00pm</li>
        </ul>
        <p className = "varsity-description">Please contact us if you still wish to try out for the team. Note that to participate in tryouts, there’s a non-refundable fee to be paid.</p>

        <h4 id="teamPics" className="varsity-title">Meet the 2024–2025 Gee-Gees Team</h4>
        <div className="varsity-grid">
          {players.map((player, index) => (
            <div key={index} className="varsity-player">
              <img src={player.image} alt={player.name} className="player-pic" />
              <h5 className="varsity-player-name">{player.name}</h5>
              {(player.role === "Men's Captain" || player.role === "Female's Co-Captain") && (
                <h6 className="varsity-captain-role">{player.role}</h6>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VarsityTeam;