import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            About Codeynamics
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering developers through innovative solutions and comprehensive education
          </p>
        </div>

        {/* Company Story */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Founded with a passion for creating exceptional digital experiences, 
                Codeynamics has been at the forefront of modern web development. We 
                specialize in building scalable, efficient, and user-friendly applications 
                that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our journey began with a simple mission: to bridge the gap between 
                complex technology and practical solutions. Today, we continue to 
                innovate and educate, helping businesses and developers achieve their goals.
              </p>
            </div>
            <div className="aspect-square bg-gradient-teal rounded-2xl"></div>
          </div>
        </section>

        {/* Values */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto"></div>
                <h3 className="text-xl font-semibold">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace cutting-edge technologies and methodologies to deliver 
                  solutions that push boundaries.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto"></div>
                <h3 className="text-xl font-semibold">Quality</h3>
                <p className="text-muted-foreground">
                  Every project and course is crafted with meticulous attention 
                  to detail and best practices.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto"></div>
                <h3 className="text-xl font-semibold">Education</h3>
                <p className="text-muted-foreground">
                  We believe in sharing knowledge and empowering others to 
                  grow in their development journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-semibold">Custom Development</h3>
                <p className="text-muted-foreground">
                  We build tailored web applications, e-commerce platforms, 
                  SaaS solutions, and mobile-responsive interfaces using 
                  modern technologies like React, TypeScript, and Node.js.
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Full-stack web applications</li>
                  <li>• E-commerce platforms</li>
                  <li>• SaaS and dashboard solutions</li>
                  <li>• API development and integration</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-semibold">Education & Training</h3>
                <p className="text-muted-foreground">
                  Our comprehensive courses on YouTube and Udemy help developers 
                  master modern web technologies, from beginner basics to 
                  advanced architectural patterns.
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• React and TypeScript courses</li>
                  <li>• Backend development with Node.js</li>
                  <li>• Full-stack development training</li>
                  <li>• Best practices and patterns</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technologies */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React", "TypeScript", "Node.js", "Next.js",
              "MongoDB", "PostgreSQL", "Firebase", "AWS",
              "Tailwind CSS", "Prisma", "GraphQL", "Docker"
            ].map((tech) => (
              <Card key={tech} className="hover:shadow-medium transition-shadow">
                <CardContent className="p-4 text-center">
                  <p className="font-medium">{tech}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;