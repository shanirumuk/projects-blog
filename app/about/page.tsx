import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Download, Mail, MapPin, Calendar, Briefcase, GraduationCap, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn about my background, experience, and passion for software development",
};

export default function AboutPage() {
  const experience = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      period: "2023 - Present",
      description: "Lead development of enterprise web applications using React, Node.js, and AWS. Mentored junior developers and established coding standards.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led team of 5 developers on major product redesign",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "Remote",
      period: "2022 - 2023",
      description: "Developed responsive web applications for various clients using modern frontend technologies and design systems.",
      achievements: [
        "Built 15+ client websites with 99%+ satisfaction rate",
        "Created reusable component library used across projects",
        "Improved accessibility compliance to WCAG 2.1 AA standards",
      ]
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      location: "New York, NY",
      period: "2021 - 2022",
      description: "Contributed to product development in fast-paced startup environment, working on both frontend and backend features.",
      achievements: [
        "Shipped 20+ features in first 6 months",
        "Reduced bug reports by 30% through comprehensive testing",
        "Collaborated with design team to improve user experience",
      ]
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "Boston, MA",
      period: "2017 - 2021",
      gpa: "3.8/4.0",
      activities: ["Programming Club President", "ACM Student Chapter Member", "Hackathon Organizer"]
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      credential: "SAA-C03"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2023",
      credential: "PCD"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      year: "2022",
      credential: "MCD"
    },
  ];

  const skills = {
    "Frontend": ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "SASS"],
    "Backend": ["Node.js", "Python", "Express", "FastAPI", "REST APIs", "GraphQL"],
    "Database": ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
    "Cloud & DevOps": ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    "Mobile": ["React Native", "Expo", "Flutter", "iOS Development"],
    "Tools & Others": ["Git", "Figma", "Jest", "Cypress", "Webpack", "Vite"],
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Passionate full-stack developer with a love for creating innovative solutions 
          and sharing knowledge through detailed project documentation.
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
                I'm a passionate full-stack developer with over 3 years of experience building 
                web and mobile applications. My journey started with a fascination for how 
                technology can solve real-world problems, and it has evolved into a career 
                focused on creating intuitive, scalable, and impactful digital solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in modern web technologies including React, Node.js, and cloud 
                platforms. What drives me is the opportunity to work on diverse projects that 
                challenge me to learn new technologies and approaches. I believe in writing 
                clean, maintainable code and am always eager to share knowledge with fellow developers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new frameworks, contributing to 
                open-source projects, or writing about my experiences on my blog. I'm constantly 
                learning and adapting to the ever-evolving landscape of software development.
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
                          <div>GPA: {edu.gpa}</div>
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
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Link>
              </Button>
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
                <span className="text-sm text-muted-foreground">Years of Experience</span>
                <span className="font-semibold">3+</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Projects Completed</span>
                <span className="font-semibold">25+</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Technologies Used</span>
                <span className="font-semibold">30+</span>
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
          I'm always interested in new opportunities and collaborations. 
          Whether you have a project in mind or just want to connect, I'd love to hear from you.
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
