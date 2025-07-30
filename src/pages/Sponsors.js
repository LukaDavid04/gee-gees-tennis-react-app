import React from 'react';
import Banner from '../components/Banner/Banner';
import './Sponsors.css';

const Sponsors = () => {
    return (
        <div className="sponsors-container">
            <Banner title="Sponsors" />

            <div className="content-container">
                <p>The University of Ottawa Tennis Club (UOTC) sincerely thanks our two sponsors for their generous
                    donations and continued support toward the growth of our club: Performance Tennis Shop, and
                    Rockcliffe Lawn Tennis Club. Your support is essential in helping our athletes train, compete, and
                    proudly represent our university. We are deeply grateful for your commitment to student athletics
                    and to tennis development in our community. Want to see your brand here? Contact us to learn more:
                    universityofottawatennis@gmail.com
                </p>
                <div className="container-fluid">
                    <div className="sponsor-section">
                        <div className="sponsor-grid">
                            <div className="sponsor-card">
                                <div className="sponsor-logo-container">
                                    <img src="/images/perf.png" alt="Performance Tennis" className="sponsor-logo"/>
                                </div>
                                <div className="sponsor-content">
                                    <h3 className="sponsor-name">Performance Tennis Shop</h3>
                                    <p className="sponsor-description">
                                        We are a tennis specialty store located at 70A Léonard Ave in Old Ottawa South,
                                        just four short blocks north of the Ottawa Tennis Club and two blocks east of
                                        Carleton University. We offer the best in tennis equipment and racquet
                                        stringing.
                                        Store owners, Gary Hawkes and Tait Becke, are avid tennis players in Ottawa and
                                        always happy to share their expert knowledge of tennis equipment, strings and
                                        stringing setups.
                                    </p>
                                    <div className="sponsor-links">
                                        <a
                                            href="https://www.performancetennis.ca/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="sponsor-link"
                                        >
                                            <i className="fas fa-globe"></i> Visit Website
                                        </a>
                                    </div>
                                    <div className="social-links">
                                        <a
                                            href="https://www.facebook.com/p/Performance-Tennis-Ottawa-100065580006176/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link"
                                        >
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="sponsor-card">
                                <div className="sponsor-logo-container">
                                    <img src="/images/RockliffeTennisClub.png" alt="Rockliffe Tennis Club"
                                         className="sponsor-logo"/>
                                </div>
                                <div className="sponsor-content">
                                    <h3 className="sponsor-name">Rockliffe Tennis Club</h3>
                                    <p className="sponsor-description">
                                        Established in 1923, the Rockcliffe Lawn Tennis Club is located in the wooded
                                        heart of the Village of Rockcliffe Park. The club has been a central gathering
                                        space for over one hundred years, bringing tennis enthusiasts together in the
                                        spirit of congeniality and positive sportsmanship. The RLTC is a welcoming,
                                        family-friendly club dedicated to embracing the sport of tennis, encouraging
                                        active living, and enhancing our sense of community.
                                    </p>
                                    <div className="sponsor-links">
                                        <a
                                            href="https://www.rltennis.ca/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="sponsor-link"
                                        >
                                            <i className="fas fa-globe"></i> Visit Website
                                        </a>
                                    </div>
                                    <div className="social-links">
                                        <a
                                            href="https://www.facebook.com/RockcliffeLawnTennisClub/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link"
                                        >
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a
                                            href="https://x.com/RLTCOttawa"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link"
                                        >
                                            <i className="fab fa-x-twitter"></i>
                                        </a>
                                        <a
                                            href="https://www.instagram.com/rockcliffelawntennisclub/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="social-link"
                                        >
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;