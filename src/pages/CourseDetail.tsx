import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { courses } from "@/data/courses";
import { ArrowLeft, Youtube, BookOpen, Clock, BarChart3, ExternalLink } from "lucide-react";

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
        <Button asChild>
          <Link to="/courses">Back to Courses</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Button */}
        <Button asChild variant="outline" className="mb-6">
          <Link to="/courses">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
        </Button>

        {/* Header */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {course.platform === 'youtube' ? (
                  <Youtube className="w-8 h-8 text-red-500" />
                ) : (
                  <BookOpen className="w-8 h-8 text-purple-500" />
                )}
                <Badge variant="outline" className="capitalize">
                  {course.platform}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {course.description}
              </p>
            </div>
            {course.price && (
              <div className="flex items-center gap-4">
                <Badge variant="default" className="text-lg px-4 py-2">
                  ${course.price}
                </Badge>
              </div>
            )}
          </div>

          {/* Course Meta */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <BarChart3 className="w-4 h-4" />
              <span className="capitalize">{course.level}</span>
            </div>
          </div>
        </div>

        {/* Course Preview */}
        <div className="aspect-video bg-gradient-subtle rounded-2xl flex items-center justify-center">
          <div className="text-center space-y-4">
            {course.platform === 'youtube' ? (
              <Youtube className="w-24 h-24 text-red-500 mx-auto" />
            ) : (
              <BookOpen className="w-24 h-24 text-purple-500 mx-auto" />
            )}
            <p className="text-muted-foreground">Course Preview</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-gradient-teal hover:shadow-teal">
            <a href={course.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-5 h-5 mr-2" />
              {course.platform === 'youtube' ? 'Watch on YouTube' : 'Enroll on Udemy'}
            </a>
          </Button>
        </div>

        {/* Description */}
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Course Overview</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                {course.longDescription}
              </p>
              
              <h3 className="text-lg font-semibold mb-4">What You'll Learn:</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Fundamental concepts and best practices</li>
                <li>• Hands-on projects and real-world examples</li>
                <li>• Advanced techniques and optimization strategies</li>
                <li>• Industry standards and professional workflows</li>
                <li>• Troubleshooting and debugging techniques</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Course Details */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Course Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Platform:</span>
                  <span className="capitalize font-medium">{course.platform}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Level:</span>
                  <span className="capitalize font-medium">{course.level}</span>
                </div>
                {course.price && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="font-medium">${course.price}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Prerequisites</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Basic understanding of web development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Familiarity with HTML/CSS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Basic JavaScript knowledge</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Computer with internet connection</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-teal text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Learning?</h3>
            <p className="mb-6 opacity-90">
              Join thousands of students who have transformed their careers with this course
            </p>
            <Button asChild size="lg" variant="secondary">
              <a href={course.url} target="_blank" rel="noopener noreferrer">
                {course.platform === 'youtube' ? 'Start Watching' : 'Enroll Now'}
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CourseDetail;