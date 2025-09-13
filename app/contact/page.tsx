import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch for project collaborations, job opportunities, or just to say hello",
};

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "shanirumuk@gmail.com",
      description: "Best for detailed project discussions",
      href: "mailto:shanirumuk@gmail.com"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "shanirumuk",
      description: "View my code and projects",
      href: "https://github.com/shanirumuk"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Shanise Mukwashi",
      description: "Professional networking",
      href: "https://linkedin.com/in/shanise-mukwashi-139159199"
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

      <div className="max-w-4xl mx-auto">
        {/* Contact Form */}
        <div className="mb-12">
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

        {/* Sidebar - Now below the form */}
        <div className="grid md:grid-cols-2 gap-8">

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

        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Common Questions</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How do you work?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                I work collaboratively with clear communication and regular updates throughout the project.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What can you help with?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Data management, software engineering, system integration, and web development projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
