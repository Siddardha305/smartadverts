import React from "react";
import { WorkCard } from "./WorkCard";
import { projects } from "./worksData";

export const WorksGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {projects.map((project, index) => (
                <WorkCard key={project.id} project={project} index={index} />
            ))}
        </div>
    );
};
