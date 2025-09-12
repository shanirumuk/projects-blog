import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Calendar, Clock, Github, Linkedin, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch for project collaborations, job opportunities, or just to say hello",
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "your.email@example.com",
      description: "Best for detailed project discussions",
      href: "mailto:your.email@example.com",
      available: "Always available"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "For urgent matters or quick calls",
      href: "tel:+15551234567",
      available: "9 AM - 6 PM PST"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@yourusername",
      description: "View my code and contribute",
      href: "https://github.com/yourusername",
      available: "Public profile"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Your Name",
      description: "Professional networking",
      href: "https://linkedin.com/in/yourusername",
      available: "Professional profile"
    },
  ];

  const projectTypes = [
    {
      title: "Web Development",
      description: "Full-stack web applications, e-commerce sites, and landing pages",
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL"]
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications for iOS and Android",
      technologies: ["React Native", "Expo", "Firebase"]
    },
    {
      title: "API Development",
      description: "RESTful APIs, GraphQL, and microservices architecture",
      technologies: ["Node.js", "Python", "FastAPI", "Express"]
    },
    {
      title: "Consulting",
      description: "Code reviews, architecture planning, and technical mentoring",
      technologies: ["Best Practices", "Code Quality", "Performance"]
    },
  ];

  const availability = {
    status: "Available for new projects",
    nextAvailable: "Immediate start",
    preferredProjectLength: "2-6 months",
    timezone: "PST (UTC-8)"
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Let's Work Together</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          I'm always excited to collaborate on new projects and challenges. 
          Whether you're looking to hire, need consultation, or just want to chat about technology, 
          I'd love to hear from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name *
                    </label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name *
                    </label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address *
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company/Organization
                  </label>
                  <Input id="company" placeholder="Your company name" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="projectType" className="text-sm font-medium">
                    Project Type *
                  </label>
                  <select 
                    id="projectType" 
                    className="w-full p-2 border border-input bg-background rounded-md text-sm"
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="api">API Development</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-medium">
                    Budget Range
                  </label>
                  <select 
                    id="budget" 
                    className="w-full p-2 border border-input bg-background rounded-md text-sm"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-30k">$15,000 - $30,000</option>
                    <option value="30k-plus">$30,000+</option>
                    <option value="hourly">Hourly rate discussion</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="timeline" className="text-sm font-medium">
                    Project Timeline
                  </label>
                  <Input id="timeline" placeholder="e.g., 3 months, ASAP, Q2 2024" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Project Description *
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                    className="min-h-[120px]"
                    required 
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to my privacy policy. 
                  I'll only use your information to respond to your inquiry.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Availability Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                Availability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm font-medium mb-1">Current Status</div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  {availability.status}
                </Badge>
              </div>
              <Separator />
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Next Available:</span>
                  <span className="font-medium">{availability.nextAvailable}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Project Length:</span>
                  <span className="font-medium">{availability.preferredProjectLength}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Timezone:</span>
                  <span className="font-medium">{availability.timezone}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactMethods.map((method, index) => (
                <div key={index}>
                  <Link 
                    href={method.href}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <method.icon className="h-5 w-5 mt-0.5 text-primary" />
                    <div className="flex-1">
                      <div className="font-medium">{method.title}</div>
                      <div className="text-sm text-primary">{method.value}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {method.description}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {method.available}
                      </div>
                    </div>
                  </Link>
                  {index < contactMethods.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Project Types */}
          <Card>
            <CardHeader>
              <CardTitle>What I Can Help With</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {projectTypes.map((type, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-2">{type.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {type.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {index < projectTypes.length - 1 && <Separator className="mt-4" />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Response Time */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Response Times
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Email:</span>
                <span className="font-medium">Within 24 hours</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Phone:</span>
                <span className="font-medium">Same day</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Project quote:</span>
                <span className="font-medium">2-3 business days</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What's your development process?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I follow an agile approach with regular check-ins, clear milestones, 
                and transparent communication throughout the project lifecycle.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Do you work with teams?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Yes! I can integrate with existing teams or work independently. 
                I'm experienced with collaborative tools and agile methodologies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What about project maintenance?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I offer ongoing support and maintenance packages to ensure your 
                project stays up-to-date and performs optimally.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Can you help with existing projects?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Absolutely! I can help with code reviews, performance optimization, 
                feature additions, or technical debt reduction.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
