import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'free' | 'paid'>('all');

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.type === filter;
  });

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of innovative web applications and development solutions
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
          >
            All Projects
          </Button>
          <Button
            variant={filter === 'free' ? 'default' : 'outline'}
            onClick={() => setFilter('free')}
          >
            Free Projects
          </Button>
          <Button
            variant={filter === 'paid' ? 'default' : 'outline'}
            onClick={() => setFilter('paid')}
          >
            Premium Projects
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="aspect-video bg-secondary rounded-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-subtle flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Project Preview</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Badge variant={project.type === 'paid' ? 'default' : 'secondary'}>
                      {project.type === 'paid' ? `$${project.price}` : 'Free'}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button asChild size="sm" className="flex-1">
                      <Link to={`/projects/${project.id}`}>View Details</Link>
                    </Button>
                    {project.demoUrl && (
                      <Button asChild variant="outline" size="sm">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found for the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;