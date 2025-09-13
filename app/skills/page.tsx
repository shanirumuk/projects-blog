import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Globe, Smartphone, Cloud, Wrench, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Skills & Technologies",
  description: "Comprehensive overview of my technical skills and the technologies I work with",
};

export default function SkillsPage() {
  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Development",
      icon: Globe,
      description: "Creating beautiful, responsive, and interactive user interfaces",
      skills: [
        { name: "React", level: 95, years: 3, projects: 15 },
        { name: "Next.js", level: 90, years: 2, projects: 8 },
        { name: "TypeScript", level: 88, years: 2.5, projects: 12 },
        { name: "Vue.js", level: 75, years: 1, projects: 3 },
        { name: "Tailwind CSS", level: 92, years: 2, projects: 10 },
        { name: "SASS/SCSS", level: 85, years: 3, projects: 8 },
        { name: "JavaScript", level: 95, years: 4, projects: 20 },
        { name: "HTML5", level: 98, years: 4, projects: 25 },
        { name: "CSS3", level: 95, years: 4, projects: 25 },
      ]
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: Database,
      description: "Building robust APIs and server-side applications",
      skills: [
        { name: "Node.js", level: 90, years: 3, projects: 12 },
        { name: "Express.js", level: 88, years: 3, projects: 10 },
        { name: "Python", level: 85, years: 2, projects: 6 },
        { name: "FastAPI", level: 80, years: 1, projects: 3 },
        { name: "PostgreSQL", level: 85, years: 2.5, projects: 8 },
        { name: "MongoDB", level: 82, years: 2, projects: 6 },
        { name: "Redis", level: 75, years: 1, projects: 4 },
        { name: "GraphQL", level: 70, years: 1, projects: 2 },
        { name: "REST APIs", level: 95, years: 3, projects: 15 },
      ]
    },
    {
      id: "mobile",
      title: "Mobile Development",
      icon: Smartphone,
      description: "Cross-platform mobile app development",
      skills: [
        { name: "React Native", level: 85, years: 2, projects: 5 },
        { name: "Expo", level: 80, years: 2, projects: 4 },
        { name: "Flutter", level: 65, years: 0.5, projects: 1 },
        { name: "iOS Development", level: 60, years: 1, projects: 2 },
        { name: "Android Development", level: 55, years: 0.5, projects: 1 },
      ]
    },
    {
      id: "cloud",
      title: "Cloud & DevOps",
      icon: Cloud,
      description: "Cloud infrastructure and deployment automation",
      skills: [
        { name: "AWS", level: 80, years: 2, projects: 8 },
        { name: "Google Cloud", level: 75, years: 1, projects: 3 },
        { name: "Docker", level: 85, years: 2, projects: 10 },
        { name: "Kubernetes", level: 65, years: 1, projects: 2 },
        { name: "CI/CD", level: 80, years: 2, projects: 8 },
        { name: "Terraform", level: 60, years: 0.5, projects: 2 },
        { name: "Vercel", level: 90, years: 2, projects: 12 },
        { name: "Netlify", level: 85, years: 2, projects: 6 },
      ]
    },
    {
      id: "tools",
      title: "Tools & Frameworks",
      icon: Wrench,
      description: "Development tools and testing frameworks",
      skills: [
        { name: "Git", level: 95, years: 4, projects: 25 },
        { name: "VS Code", level: 98, years: 4, projects: 25 },
        { name: "Jest", level: 85, years: 2, projects: 10 },
        { name: "Cypress", level: 75, years: 1, projects: 4 },
        { name: "Webpack", level: 70, years: 2, projects: 5 },
        { name: "Vite", level: 85, years: 1, projects: 6 },
        { name: "Figma", level: 80, years: 2, projects: 8 },
        { name: "Postman", level: 90, years: 3, projects: 15 },
      ]
    },
    {
      id: "programming",
      title: "Programming Languages",
      icon: Code,
      description: "Core programming languages and paradigms",
      skills: [
        { name: "JavaScript", level: 95, years: 4, projects: 25 },
        { name: "TypeScript", level: 88, years: 2.5, projects: 12 },
        { name: "Python", level: 85, years: 2, projects: 6 },
        { name: "Java", level: 70, years: 2, projects: 3 },
        { name: "SQL", level: 85, years: 3, projects: 12 },
        { name: "Bash", level: 75, years: 2, projects: 8 },
      ]
    },
  ];

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 75) return "bg-blue-500";
    if (level >= 60) return "bg-yellow-500";
    return "bg-gray-500";
  };

  const getSkillLevelText = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Skills & Technologies</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise, developed through hands-on 
          experience across various projects and continuous learning.
        </p>
      </div>

      {/* Skills Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="text-center p-6 rounded-lg bg-muted/50">
          <div className="text-3xl font-bold text-primary mb-2">
            {skillCategories.reduce((total, category) => total + category.skills.length, 0)}
          </div>
          <div className="text-sm text-muted-foreground">Total Skills</div>
        </div>
        <div className="text-center p-6 rounded-lg bg-muted/50">
          <div className="text-3xl font-bold text-primary mb-2">4+</div>
          <div className="text-sm text-muted-foreground">Years Experience</div>
        </div>
        <div className="text-center p-6 rounded-lg bg-muted/50">
          <div className="text-3xl font-bold text-primary mb-2">25+</div>
          <div className="text-sm text-muted-foreground">Projects Built</div>
        </div>
        <div className="text-center p-6 rounded-lg bg-muted/50">
          <div className="text-3xl font-bold text-primary mb-2">
            {skillCategories?.length || 0}
          </div>
          <div className="text-sm text-muted-foreground">Skill Categories</div>
        </div>
      </div>

      {/* Skill Categories */}
      <div className="space-y-12">
        {skillCategories.map((category) => (
          <section key={category.id}>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill) => (
                <Card key={skill.name} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{skill.name}</CardTitle>
                      <Badge 
                        variant="secondary" 
                        className={`${getSkillLevelColor(skill.level)} text-white`}
                      >
                        {getSkillLevelText(skill.level)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Proficiency</span>
                          <span>{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Experience</div>
                          <div className="font-medium">{skill.years} years</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Projects</div>
                          <div className="font-medium">{skill.projects}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Learning Journey */}
      <section className="mt-16 py-12 bg-muted/50 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Continuous Learning</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technology evolves rapidly, and I'm committed to staying current with the latest 
            developments and best practices in software development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Currently Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Rust</span>
                  <Badge variant="outline">In Progress</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Machine Learning</span>
                  <Badge variant="outline">Exploring</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Web3 Development</span>
                  <Badge variant="outline">Planning</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>AWS Certification</span>
                  <Badge>2024</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>React Advanced Patterns</span>
                  <Badge>2024</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Docker Mastery</span>
                  <Badge>2023</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Learning Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>Technical Documentation</div>
                <div>Online Courses & Tutorials</div>
                <div>Open Source Contributions</div>
                <div>Developer Communities</div>
                <div>Technical Books & Articles</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">See These Skills in Action</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Explore my projects to see how I apply these technologies to solve real-world problems 
          and create meaningful digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/projects">
              View My Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/about">Learn About My Journey</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
