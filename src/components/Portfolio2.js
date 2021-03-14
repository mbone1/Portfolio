import React, {useState} from "react";
import projects from "../assets/projects.js";

export default function Portfolio2() {
    let [project, setProject] = useState(0);

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
            <div className='portfolio'>
                <div className='picture-area'>
                    {/* left side - image */}
                    <img className='screenshot'src={projects[project].screenshot} />
                 </div>
                <div className='description'>
                    {projects[project].name}
                    {project}
                   

                </div>
                    
                <div className='bottom'>
                    <button
                        onClick={() => decrementer(project, projects)}>previous</button>
                    <button
                        onClick={() => incrementer(project, projects)}>next</button>
                    {/* right side - project info */}
                    <br></br>
                 </div>
                
            </div>
            

            </>
    )
}