import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { courses } from "@/data/courses";
import { Youtube, BookOpen } from "lucide-react";

const Courses = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Learn & Grow
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master modern web development with our comprehensive courses on YouTube and Udemy
          </p>
        </div>

        {/* Platform Stats */}
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Card className="text-center">
            <CardContent className="p-6">
              <Youtube className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">YouTube</h3>
              <p className="text-muted-foreground text-sm">
                Free comprehensive tutorials and coding sessions
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <BookOpen className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Udemy</h3>
              <p className="text-muted-foreground text-sm">
                Premium structured courses with certifications
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="aspect-video bg-secondary rounded-lg mb-4 overflow-hidden relative">
                  <div className="w-full h-full bg-gradient-subtle flex items-center justify-center">
                    {course.platform === 'youtube' ? (
                      <Youtube className="w-12 h-12 text-red-500" />
                    ) : (
                      <BookOpen className="w-12 h-12 text-purple-500" />
                    )}
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="capitalize">
                      {course.platform}
                    </Badge>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="capitalize">
                      {course.level}
                    </Badge>
                    {course.price && (
                      <Badge variant="default">
                        ${course.price}
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Duration: {course.duration}</span>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button asChild size="sm" className="flex-1">
                      <Link to={`/courses/${course.id}`}>View Details</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href={course.url} target="_blank" rel="noopener noreferrer">
                        {course.platform === 'youtube' ? 'Watch' : 'Enroll'}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-teal rounded-2xl p-12 text-center text-white">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Start Your Learning Journey
            </h2>
            <p className="text-lg opacity-90">
              Join thousands of developers who have advanced their careers with our courses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="https://youtube.com/@codeynamics" target="_blank" rel="noopener noreferrer">
                  Subscribe on YouTube
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <a href="https://udemy.com/user/codeynamics" target="_blank" rel="noopener noreferrer">
                  Follow on Udemy
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;