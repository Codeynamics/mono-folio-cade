import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { ExternalLink, Github, ArrowLeft, ShoppingCart } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <Button asChild>
          <Link to="/projects">Back to Projects</Link>
        </Button>
      </div>
    );
  }

  const handlePurchase = () => {
    // Simple purchase simulation - in real app, integrate with Stripe
    alert(`Purchase initiated for ${project.title} - $${project.price}`);
  };

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Button */}
        <Button asChild variant="outline" className="mb-6">
          <Link to="/projects">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </Button>

        {/* Header */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {project.description}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant={project.type === 'paid' ? 'default' : 'secondary'} className="text-lg px-4 py-2">
                {project.type === 'paid' ? `$${project.price}` : 'Free'}
              </Badge>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Project Image */}
        <div className="aspect-video bg-gradient-subtle rounded-2xl flex items-center justify-center">
          <span className="text-muted-foreground">Project Screenshot</span>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4">
          {project.type === 'paid' ? (
            <Button onClick={handlePurchase} size="lg" className="bg-gradient-teal hover:shadow-teal">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Purchase for ${project.price}
            </Button>
          ) : (
            <Button asChild size="lg" className="bg-gradient-teal hover:shadow-teal">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                Get Source Code
              </a>
            </Button>
          )}
          
          {project.demoUrl && (
            <Button asChild variant="outline" size="lg">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>

        {/* Description */}
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.longDescription}
              </p>
              
              <h3 className="text-lg font-semibold mb-4">Key Features:</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Modern, responsive design</li>
                <li>• Clean, maintainable code structure</li>
                <li>• Comprehensive documentation</li>
                <li>• Production-ready deployment</li>
                <li>• Ongoing support and updates</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Technical Details */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="space-y-2">
                {project.technologies.map((tech) => (
                  <div key={tech} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{tech}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">What You Get</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Complete source code</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Setup instructions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Documentation</span>
                </div>
                {project.type === 'paid' && (
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Email support</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;