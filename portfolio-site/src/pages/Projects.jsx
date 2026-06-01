// Imports project images so they work correctly after deploying to Netlify
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

// This function creates the Projects page
function Projects() {
    // Displays the Projects page content
    return (
        // Groups all project content together
        <section>
            {/* Page title */}
            <h1>My Projects</h1>

            {/* This container holds all the project cards */}
            <div className="cardContainer">
                {/* First project card */}
                <div className="card">
                    {/* Image for the portfolio project */}
                    <img src={project1} alt="Portfolio project" />

                    {/* Project title */}
                    <h2>Portfolio Website</h2>

                    {/* Short description of the project */}
                    <p>
                        I created a personal portfolio website using React. My role was to
                        design the pages, add navigation, and organize the content.
                    </p>
                </div>

                {/* Second project card */}
                <div className="card">
                    {/* Image for the to-do list project */}
                    <img src={project2} alt="To do list app" />

                    {/* Project title */}
                    <h2>To-Do List App</h2>

                    {/* Short description of the project */}
                    <p>
                        I built a simple to-do list app using JavaScript. The project helped
                        me practice working with forms, buttons, and user input.
                    </p>
                </div>

                {/* Third project card */}
                <div className="card">
                    {/* Image for the expense tracker project */}
                    <img src={project3} alt="Expense tracker" />

                    {/* Project title */}
                    <h2>Expense Tracker</h2>

                    {/* Short description of the project */}
                    <p>
                        I created a simple expense tracker app to help users monitor their spending.
                    </p>
                </div>
            </div>
        </section>
    );
}

// Exports the Projects component so App.jsx can use it
export default Projects;