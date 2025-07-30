// src/pages/FAQ.js
import React, { useState, useCallback, useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const faqData = [
        {
            question: "Why Join the UOTC?",
            answer: `<p>The UOTC is a bilingual club structured for any student interested in learning and/or playing tennis. Tennis is an incredibly fun sport to learn and play. The physical and mental benefits of participating in any type of physical activity or exercise are extremely beneficial to improving your overall health and well-being.</p>
               <p>We highly recommend you consider joining our club. The UOTC has Tennis Canada certified coaches that can help you improve your game or introduce you to a healthier lifestyle.</p>`
        },
        {
            question: "What's the Difference Between the Three Divisions?",
            answer: `<p>The UOTC is composed of three divisions tailored to different players' tennis levels:</p>
               <ul>
                 <li><strong>Division 1:</strong> For competitive and experienced tennis players seeking to train and compete regularly throughout each semester.</li>
                 <li><strong>Division 2:</strong> For intermediate tennis players who play the sport but are less experienced and interested in practicing.</li>
                 <li><strong>Division 3:</strong> For students with little or no background in tennis who want to learn the basics of how to play.</li>
               </ul>`
        },
        {
            question: "How Much Does It Cost to Join the UOTC?",
            answer: `<p>After tryouts, our coaching staff will decide which division best suits your level of tennis. Once you join the division, there is a membership fee to pay. The membership fee for each division is determined by the Treasurer.</p>
               <p>The price may vary each semester depending on courts fees, the numbers of weekly practices, and the numbers of players in your division. Players will be contacted regarding their membership fee after the division rosters are determined.</p>
               <p>All players of the same division must pay the same fee; regardless of their level of tennis and/or whether they are a new or returning UOTC player.</p>`
        },
        {
            question: "How Many Practices are there for Each Division?",
            answer: `<p>Division 1 has practices every day during the season and up to 3 times a week during the off-season. Division 2 and 3 practices are held together and are held 3 times a week. All practices are two hours long.</p>`
        },
        {
            question: "Where are Practices Held?",
            answer: `<p>Practices are at one of the three different locations below, depending on the season and the day:</p>
               <ul>
                 <li><strong>Rideau Sports Center (RSC):</strong> 1 Donald St, Ottawa, ON K1K 4E6</li>
                 <li><strong>Sportheque:</strong> 72 Rue Jean-Proulx, Gatineau, QC J8Z 1W1</li>
                 <li><strong>Rockcliffe Lawn Tennis Club:</strong> 465 Lansdowne Rd N, Rockcliffe Park, ON K1M 0Y1</li>
               </ul>`
        },
        {
            question: "Do I Have to Attend Every Single Practice?",
            answer: `<p>If you are in Division 1, please refer to the <a href="/documents">Division 1 Player Commitment Policy</a>. If you are in Division 2 or Division 3, practices are NOT mandatory.</p>`
        },
        {
            question: "I Missed Tryouts but I am still Interested in Joining. What do I do?",
            answer: `<p>Please feel free to contact us by email preferably. We can also be reached through our social media (Please see page footer).</p>`
        },
        {
            question: "I Can No Longer Commit to the UOTC. Can I get a Refund of my Membership Fee?",
            answer: `<p>Yes and no. Upon request, any player who decides they can no longer play on the UOTC can receive a full refund within THREE weeks of having paid their membership fee. However, AFTER the three weeks have expired, there is no guarantee for a full refund.</p>`
        },
        {
            question: "Do You Provide Tennis Rackets for Players?",
            answer: `<p>Usually, players are required to bring a racket. However, if you do not have one, please contact us in advance and we will make arrangements to get you one.</p>`
        },
        {
            question: "I'm Looking to Buy Tennis Gear. Where is the Best Place in Ottawa to do so?",
            answer: `<p>Looking for the best new tennis equipment in Ottawa? Performance Tennis Shop run by our good friend Gary Hawkes is the place to go.</p>
               <p>Address: 70A Léonard Ave, Ottawa, ON K1S 4V6</p>`
        },
        {
            question: "I Want to Donate to the UOTC. What do I do?",
            answer: `<p>You can donate to us through our Inaugural Fundraiser <a target="_blank" href="https://www.zeffy.com/en-CA/fundraising/9368afe7-71b1-4127-87f1-e3fb85b06a31">here</a> or you can contact us via email.</p>`
        },
        {
            question: "Who Runs the UOTC?",
            answer: `<p>The UOTC is run by the ten executive members: President, Treasurer, Marketing Executive, Social Media Executive, Communications Executive, Website Developer, Division 1 Team Capitains and Division 2 & 3 Representatives. For more information about who they are, please refer to our <a href="/exec">Executive Team</a> page. For more information on their specific roles towards the UOTC, please read our club's <a href="/documents#execDesc">constitution</a>.</p>`
        }
    ];

    const toggleFAQ = useCallback((index) => {
        setOpenIndex(openIndex === index ? null : index);
    }, [openIndex]);

    const filteredFAQs = faqData.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Close FAQ when searching
    useEffect(() => {
        setOpenIndex(null);
    }, [searchTerm]);

    return (
        <div className="faq-page">
            <Banner title="Frequently Asked Questions">
                <p>Find answers to common questions about the University of Ottawa Tennis Club</p>
                <div className="search-container">
                    <input
                        type="text"
                        id="faqSearch"
                        placeholder="Search questions..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <i className="fas fa-search"></i>
                </div>
            </Banner>

            <div className="faq-container">
                <div className="faq-section">
                    {filteredFAQs.map((faq, index) => (
                        <div
                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
                            key={index}
                        >
                            <div
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <i className={`fas fa-chevron-${openIndex === index ? 'up' : 'down'}`}></i>
                            </div>

                            <div className="faq-answer">
                                <div
                                    className="faq-answer-content"
                                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;