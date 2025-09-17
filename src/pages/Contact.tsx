import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or questions about our courses? We'd love to hear from you.
          </p>
        </div>

        {/* Main Panel */}
        <div className="space-y-10">
          {/* Top Row - Connect with us and Contact Information */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            {/* Contact Links */}
            <Card className="flex-1">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-3">Connect with us</h2>
                  <p className="text-muted-foreground">
                    Reach out directly via your preferred platform.
                  </p>
                </div>
                <div className="flex flex-col gap-4 max-w-xs mx-auto">
                  <a
                    href="mailto:hello@codeynamics.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="lg" className="w-full flex items-center justify-start gap-3 hover:bg-primary/5 transition-colors">
                      <Mail className="w-5 h-5" />
                      Email
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/15551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="lg" className="w-full flex items-center justify-start gap-3 hover:bg-primary/5 transition-colors">
                      <MessageSquare className="w-5 h-5" />
                      WhatsApp
                    </Button>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/codeynamics"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="lg" className="w-full flex items-center justify-start gap-3 hover:bg-primary/5 transition-colors">
                      <Linkedin className="w-5 h-5" />
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="flex-1">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">hello@codeynamics.com</p>
                      <p className="text-muted-foreground">support@codeynamics.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">
                        Remote-first company<br />
                        Serving clients worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Row - Quick Answers spanning full width */}
          <Card className="w-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Answers</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium mb-1">Response Time</h4>
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 24 hours during business days.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Project Inquiries</h4>
                  <p className="text-sm text-muted-foreground">
                    Include your budget, timeline, and project requirements for faster quotes.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Course Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Course-related questions are answered within the platform or via email.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;