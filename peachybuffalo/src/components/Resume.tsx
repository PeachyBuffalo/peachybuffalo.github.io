import React from 'react';

const Resume: React.FC = () => {
    return (
        <div>
            <h1>Resume</h1>
            <h2>Macall Smith</h2>
            <p><strong>Location:</strong> Holland, Michigan, United States</p>
            <p><strong>Email:</strong> macall@gatech.edu | <strong>Phone:</strong> 616-403-6921</p>
            <p>
                <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/macall-smith/">Link</a> | 
                <strong> Github:</strong> <a href="https://github.com/PeachyBuffalo">Link</a> | 
                <strong> Website:</strong> <a href="http://www.macall.io">www.macall.io</a>
            </p>
            <h3>Professional Summary</h3>
            <p>Currently pursuing a Master’s in Computer Science (Interactive Intelligence) at Georgia Tech. Focusing on leveraging AI, Machine Learning, and Software Development to address needs in different markets. Developed multiple projects, including AI-based solvers, Gesture Recognition programs, real estate platforms, and financial models. Accomplished both remote teamwork and self-driven projects.</p>

            <h3>Technical Skills</h3>
            <ul>
                <li><strong>Programming Languages:</strong> Python, TypeScript, C#, PHP</li>
                <li><strong>Frameworks:</strong> Laravel TALL Stack, React, Django</li>
                <li><strong>Tools/Technologies:</strong> Unity, MediaPipe, AWS, Arduino, TensorFlow, scikit-learn, Docker</li>
                <li><strong>Database:</strong> SQLite, MySQL</li>
            </ul>

            <h4>Soft Skills</h4>
            <ul>
                <li>Team Leadership</li>
                <li>Analytical Skills</li>
                <li>Software Development</li>
                <li>Problem Solving</li>
                <li>Communication</li>
                <li>Computer-Aided Design (CAD)</li>
            </ul>

            <h3>Relevant Projects</h3>
            <h4>Raven's Matrices Solver</h4>
            <p><strong>Technologies:</strong> Python, Pillow, pandas, cv2, scikit-learn</p>
            <p><strong>Description:</strong> Developed an AI-driven solution to solve Raven’s IQ tests, utilizing image processing techniques and machine learning algorithms. Identifying accuracy in pattern recognition.</p>

            <h4>SweetHomeSuite - Real Estate Web App</h4>
            <p><strong>Technologies:</strong> TypeScript, React</p>
            <p><strong>Description:</strong> Created a real estate platform to match buyers with sellers and agents, streamlining the real estate process. Integrated features such as user preferences and real-time data updates.</p>

            <h4>ASL Endless Runner Game</h4>
            <p><strong>Technologies:</strong> Unity, Python, C#</p>
            <p><strong>Description:</strong> Developed a mobile game for learning American Sign Language with gesture recognition. Backed with extensive research for teaching multi-modal tools. Implemented machine learning models in Python to interpret ASL signs for in-game actions using a socket in Unity.</p>

            <h3>Professional Experience</h3>
            <h4>Software Engineer | Freelance</h4>
            <p><strong>Holland, MI | December 2021 - Current</strong></p>
            <ul>
                <li>Coordinated cross-functional teams using GitHub, Slack, and Asana, leading to a 15% improvement in project delivery times.</li>
                <li>Developed and deployed 6 web-based solutions for start-ups and nonprofits across 3 states, using C#, TypeScript, and PHP, enhancing client’s online presence and brand recognition.</li>
                <li>Designed, coded, tested, and deployed 16+ new features using CI/CD pipelines with GitHub, allowing frequent updates with each new feature.</li>
            </ul>

            <h4>Licensed Associate Real Estate Broker | Home Realty</h4>
            <p><strong>Holland, MI | September 2019 - Current</strong></p>
            <ul>
                <li>Managed high volumes of business through expert handling of appointments, communications, CRM, and lead generation.</li>
                <li>Leveraged social media marketing to generate new leads and repeat business, contributing to a sales volume of over $4.39 million in 2018.</li>
            </ul>

            <h4>Licensed Realtor | Coldwell Banker Woodland Schmidt</h4>
            <p><strong>Holland, MI | September 2016 - September 2019</strong></p>
            <ul>
                <li>Increased gross commission revenue by 131% from 2017 to 2018, by managing lead generation and CRM systems.</li>
                <li>Grew referral business by 20% annually, contributing to consistent sales volume increases, including over $3.7 million in total sales in 2017.</li>
            </ul>

            <h4>Product Development Specialist | Universal Forest Products</h4>
            <p><strong>Grand Rapids, MI | June 2015 - September 2016</strong></p>
            <ul>
                <li>Reduced production costs over 15% for specific existing products by partnering with manufacturing plants to improve manufacturability and drive product innovation.</li>
                <li>Identified high-margin innovations with a target of achieving 50%+ margins in the first two years, 25%+ within five years, and 10% long-term profitability.</li>
            </ul>

            <h4>Startup Co-Owner | Tizzy, Social Media App</h4>
            <p><strong>Holland, MI | June 2013 - May 2015</strong></p>
            <ul>
                <li>Launched Tizzy, a social media polling app, securing seed funding through pitches to Venture Capital Institutions and Angel Investors, and acquiring 1,000 users within the first week.</li>
            </ul>

            <h3>Education</h3>
            <h4>Master of Science in Computer Science (Interactive Intelligence)</h4>
            <p><strong>Georgia Institute of Technology | Expected Graduation: May 2025</strong></p>
            <p><strong>Relevant Coursework:</strong> Knowledge-Based AI, Human-Computer Interaction, Machine Learning for Trading, Video Game Design, Game AI, Ubiquitous Computing, Educational Technology Foundations, Military Modeling & Simulation.</p>

            <h4>Bachelor of Arts in Business Management</h4>
            <p><strong>Hope College | 2011 - 2015</strong></p>
            <p><strong>Activities:</strong> Business Club, Varsity Soccer, Campus Ministry, Worship Leader, Music Ensembles.</p>

            <h3>Licenses & Certifications</h3>
            <ul>
                <li><strong>RCR Basic Course</strong> | CITI Program | Issued Jan 2024 | Credential ID: 60485866</li>
                <li><strong>Cyber Leader</strong> | Cyber Readiness Institute | Issued Nov 2023 | Credential ID: 39tmlbdiuz</li>
                <li><strong>Group 2 Social / Behavioral Research Investigators and Key Personnel</strong> | CITI Program | Issued Jan 2023 | Expires Jan 2026 | Credential ID: 53774683</li>
                <li><strong>Learn Python 3 Course</strong> | Codecademy | Issued Oct 2021</li>
                <li><strong>Real Estate Broker/Sales Agent</strong> | Coldwell Banker | Issued Sep 2016</li>
                <li><strong>SolidWorks Essentials</strong> | DASI Solutions | Issued Oct 2015</li>
            </ul>
        </div>
    );
};

export default Resume;