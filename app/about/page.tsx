import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Download, Mail, MapPin, Calendar, Briefcase, GraduationCap, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Me",
  description: "Data Management and Software Engineer with expertise in full-stack development, data analytics, and system integration",
};

export default function AboutPage() {
  const experience = [
    {
      title: "Data Management and Software Engineer",
      company: "ETS INTERNATIONAL GMBH",
      location: "Nürnberg, Germany",
      period: "Sep 2024 - Present",
      description: "Specializing in system integration and development.",
      achievements: [
        "Developed flight tracking solutions using multiple APIs (Cirium, AviationStack, OAG) and implemented secure authentication systems (Clerk, SuperTokens)",
        "Created database relationships for an interconnected baggage interline system (Supabase)",
        "Implemented UI design for Business-to-Business (B2B) dashboards, web applications and integrated system monitoring with Zammad for API logging and error tracking to enhance system security",
      ]
    },
    {
      title: "Logistics Operator",
      company: "FLASCHENPOST",
      location: "Potsdam, Germany",
      period: "Jul 2023 - Feb 2024",
      description: "Developed efficient packaging solutions, reduced costs/waste, gained insights into supply chain processes and legal requirements.",
      achievements: [
        "Optimized packaging processes to reduce operational costs",
        "Gained expertise in supply chain management and logistics",
        "Understanding of regulatory compliance and legal requirements",
      ]
    },
  ];

  const education = [
    {
      degree: "BSc Digital Business & Data Science",
      institution: "University of Europe for Applied Sciences",
      location: "Potsdam, Germany",
      period: "2021 - 2025",
      gpa: "",
      activities: ["Bachelor Thesis - Affordable Housing Optimization Using Machine Learning", "Weather Application Development", "Lufthansa Business Case Analysis", "Berlin Housing Market Research"]
    },
  ];

  const certifications = [
    {
      name: "Project Management",
      issuer: "Great Learning Academy",
      year: "2023",
      credential: "Jun 2023 - Aug 2023"
    },
  ];

  const skills = {
    "Programming Languages": ["TypeScript", "Python", "SQL"],
    "Data & Analytics": ["Data Analytics", "Power BI", "Statistical Modeling"],
    "Database": ["Redis", "Supabase", "Database Management"],
    "Development Tools": ["Git", "System Integration", "API Development"],
    "Productivity": ["Microsoft Office"],
    "Languages": ["English (C1)", "German (B1)", "Afrikaans (B1)", "Shona (A2)"],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Data Management and Software Engineer with expertise in full-stack development, 
          data analytics, and system integration.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold mb-6">My Journey</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Recent Digital Business and Data Science graduate with professional experience as a Data Management 
                and Software Engineer. Combines strong analytical foundations with practical software development 
                skills in full-stack development, database management and system integration. My goal is to apply my 
                technical expertise and business analytics background to solve complex challenges and drive 
                data-driven innovation in a dynamic role. Experience in collaborating with international teams and 
                designing customer support solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Born in Zimbabwe on November 6, 2004, I bring a unique international perspective to my work, 
                with fluency in multiple languages and experience working across different cultural contexts. 
                My academic journey included practical projects ranging from weather application development to 
                machine learning platforms for housing optimization.
              </p>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <p className="text-primary font-medium">{job.company}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {job.period}
                          </div>
                        </div>
                      </div>
                      <Briefcase className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div>
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {job.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{edu.degree}</CardTitle>
                        <p className="text-primary font-medium">{edu.institution}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {edu.period}
                          </div>
                          {edu.gpa && <div>GPA: {edu.gpa}</div>}
                        </div>
                      </div>
                      <GraduationCap className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold mb-2">Activities & Involvement:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.activities.map((activity, actIndex) => (
                          <Badge key={actIndex} variant="secondary">
                            {activity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {cert.year} • {cert.credential}
                        </p>
                      </div>
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Profile Photo */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative w-48 h-48 rounded-full overflow-hidden">
                  <Image
                    src="/shanise.png"
                    alt="Shanise Mukwashi"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Shanise Mukwashi</h3>
                  <p className="text-sm text-muted-foreground">Data Management & Software Engineer</p>
                  <p className="text-xs text-muted-foreground mt-1">Nürnberg, Germany</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card>
            <CardHeader>
              <CardTitle>Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" asChild>
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="https://projects-blog-alpha.vercel.app/" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  View Projects Blog
                </Link>
              </Button>
              <div className="text-sm text-muted-foreground space-y-2">
                <p><strong>Email:</strong> shanirumuk@gmail.com</p>
                <p><strong>Location:</strong> Nürnberg, Germany</p>
                <p><strong>GitHub:</strong> <Link href="https://github.com/shanirumuk" target="_blank" className="text-primary hover:underline">github.com/shanirumuk</Link></p>
                <p><strong>LinkedIn:</strong> <Link href="https://linkedin.com/in/shanise-mukwashi-139159199" target="_blank" className="text-primary hover:underline">LinkedIn Profile</Link></p>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category}>
                  <h4 className="font-semibold mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  {category !== Object.keys(skills)[Object.keys(skills).length - 1] && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Age</span>
                <span className="font-semibold">20</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Nationality</span>
                <span className="font-semibold">Zimbabwean</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Languages Spoken</span>
                <span className="font-semibold">4</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Certifications</span>
                <span className="font-semibold">{certifications.length}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          I'm always interested in new opportunities and collaborations in data management, 
          software engineering, and system integration. Whether you have a project in mind or 
          just want to connect, I'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Start a Conversation</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">View My Work</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
