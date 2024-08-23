import React from "react";

const Projects = () => {
    return (
        <div>
            <h2 className="title-projects"> My Projects</h2>
            <p>
                Cat ipsum dolor sit amet, autem for in, and officia for aliqua.
                Veniam. Magni vitae dolor, so consequatur excepteur occaecat
                sed. Modi. Cat ipsum dolor sit amet, autem for in, and officia
                for aliqua. Veniam. Magni vitae dolor, so consequatur excepteur
                occaecat sed. Modi.
            </p>
            <section className="projects-section">
                <article className="project-article">
                    <h3>Current Project</h3>

                    <img src="/images/pullover_M.jpeg" alt="knitted pullover" />
                    <p>
                        Cat ipsum dolor sit amet, autem for in, and officia for
                        aliqua. Veniam. Magni vitae dolor, so consequatur
                        excepteur occaecat sed. Modi.
                    </p>
                </article>

                <article className="project-article">
                    <h3>Funniest Project</h3>
                    <img src="/images/headband.jpg" alt="knitted headband" />
                    <p>
                        Cat ipsum dolor sit amet, autem for in, and officia for
                        aliqua. Veniam. Magni vitae dolor, so consequatur
                        excepteur occaecat sed. Modi.
                    </p>
                </article>
                <article className="project-article">
                    <h3>Cutest Project</h3>
                    <img
                        src="/images/baby_kit.jpg"
                        alt="knitted baby socks and bennie"
                    />
                    <p>
                        Cat ipsum dolor sit amet, autem for in, and officia for
                        aliqua. Veniam. Magni vitae dolor, so consequatur
                        excepteur occaecat sed. Modi.
                    </p>
                </article>
            </section>
        </div>
    );
};

export default Projects;
