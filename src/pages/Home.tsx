import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { courses } from "@/data/courses";

const Home = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const latestCourses = courses.slice(0, 2);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Code
            <span className="text-primary"> Smarter.</span>
            <br />
            Engineer
            <span className="text-primary"> Better.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We bridge knowledge and practice <br />Making engineering learning accessible while supporting real-world solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg" style={{borderColor: '#00adad'}}>
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" style={{borderColor: '#00adad'}}>
              <Link to="/courses">Browse Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our most popular and innovative projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="aspect-video bg-secondary rounded-lg mb-4"></div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <Badge variant={project.type === 'paid' ? 'default' : 'secondary'}>
                        {project.type === 'paid' ? `$${project.price}` : 'Free'}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <Link to={`/projects/${project.id}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Courses */}
      <section className="bg-secondary">
        <div className="container mx-auto px-6 py-20">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Latest Courses
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Level up your skills with our comprehensive courses
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {latestCourses.map((course) => (
                <Card key={course.id} className="group hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="aspect-video bg-muted rounded-lg mb-4"></div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="capitalize">
                          {course.platform}
                        </Badge>
                        <Badge variant="secondary" className="capitalize">
                          {course.level}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-semibold">{course.title}</h3>
                      <p className="text-muted-foreground">{course.description}</p>
                      <p className="text-sm text-muted-foreground">Duration: {course.duration}</p>
                    </div>
                    <Button asChild className="w-full">
                      <Link to={`/courses/${course.id}`}>View Course</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/courses">View All Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-teal rounded-2xl p-12 text-center text-white">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Start Building?
            </h2>
            <p className="text-lg opacity-90">
              Get in touch to discuss your next project or explore our resources
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;