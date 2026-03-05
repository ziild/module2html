import { useState } from "react";

function Skills({skills}) {
    const [visible, setVisible] = useState(true);
    return (
        <div className="container">
            <section className="card" id="skillsSection">
                <button onClick={() => setVisible(!visible)}>
                    Show/Hide Skills
                </button>
                {visible && (

                    <><h2>SKILLS</h2>
                        <ul>
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                        <h2>WEB DEVOLPMENT</h2>
                        <ul>
                            <li>Frontend</li>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                            <li>Backend</li>
                            <ul>
                                <li>Node.js</li>
                                <li>Python</li>
                            </ul>
                        </ul> </>
                )}
            </section>
        </div>

    );
}
export default Skills;