import { useEffect, useState } from "react";
import "./Skills.css";

export default function Skills(){
    const [skillData, setSkillData] = useState({});

    useEffect(() => {
        const getSkills = async () => {
            const response = await fetch("/about.json");
            const data = await response.json();
            setSkillData(data.skills);
        };
        getSkills();
    }, []);

    return(
        <section id="skills" className="pad">
            <h3>#Skills</h3>
            <ul key="skillList">
            {Object.entries(skillData).map(([category, skillsList]) => (
                    <li className="skill-title">{category}
                        {skillsList.map((skill, index) => (
                            <span className="badge text-bg-theme" key={index}>{skill}</span>
                        ))}
                    </li>
            ))}
            </ul>
        </section>


    );
}
