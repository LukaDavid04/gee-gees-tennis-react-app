import React from 'react';
import './Coaches.css';

const coaches = [
  {
    name: 'Zhenya Kondratovski',
    role: 'Head Coach',
    img: 'images/zhen.png',
    cert: 'Tennis Canada Certified Coach 2 and Club Pro 2',
    description: 'Zhenya adamdkadmakdamdmakd cnakc  askc a cak ca cka ckas cac acak csaj casc a cak cjac a cjsa csjakca kasc  asc sasa sj s c a ca',
  },
  {
    name: 'Ramin Anam',
    role: 'Assistant Coach',
    img: 'images/ramin.png',
    cert: 'Tennis Canada Certified Club Pro 1',
    description: 'Ramin fnansajdja',
  },
  {
    name: 'Luka David',
    role: 'Assistant Coach',
    img: 'images/luka.png',
    cert: 'Instructor',
    description: 'Luka nascjacbjasbca',
  },
  {
    name: 'Dylan Crimmins',
    role: 'Assistant Coach',
    img: 'images/dylan.png',
    cert: 'N/A',
    description: 'Dylan cajcnasncjasncajnc',
  },
];

const Coaches = () => {
  return (
    <>

      <div className="container-fluid">
        <div className="row">
          <div style={{ width: '100%' }}>
            <img src="images/coaches_banner_en.png" style={{ width: '100%' }} alt="Coaches Banner" />
            <div className="content-container">
              <h3 className="coach-heading text-center mt-5 mb-3">Meet the coaches</h3>
              <br />
              <div className="coaches-row">
                {coaches.map((coach, index) => (
                    <div className="coach-card" key={index}>
                    <img src={coach.img} alt={coach.name} className="player-pic" />
                    <div className="coach-info">
                        <h5>{coach.name}</h5>
                        <h6 className="text-muted">{coach.role}</h6>
                        <p><strong>Certification level:</strong> {coach.cert}</p>
                        <p className="coach-description">{coach.description}</p>
                    </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Coaches;