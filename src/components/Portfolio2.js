import React, {useState} from "react";
import projects from "../assets/projects.js";

export default function Portfolio2() {
    let [project, setProject] = useState(1);

    function incrementer(value, limiter) {
        if (value === (limiter.length - 1)) {
            setProject(0)
        } else {
            setProject(value+1)
        }
    }

    function decrementer(value, limiter) {
        if (value === 0) {
            setProject(limiter.length - 1)
        } else {
            setProject(value - 1)
        }
    }

    return (
        <>
            {/* {projects.map((project) => (
                <>
                    <img
                        src={project.screenshot}
                        alt={project.name} />
                </>
            ))}
                 */}
            <div className='portfolio'>
                <div className='portfolioLeft'>
                    {/* left side - image */}
                    <img />
                    
                    <button
                        onClick={() => decrementer(project, projects)}>previous</button>
                    <button
                        onClick={() => incrementer(project, projects)}>next</button>
                 </div>
                <div className='portfolioRight'>
                    {/* right side - project info */}
                    {projects[project].name}
                    <br></br>
                    {project}
                 </div>
                
            </div>
            

            </>
    )
}