import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Globe, Smartphone, Cloud, Wrench, ArrowRight, BarChart3, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Skills & Technologies",
  description: "Comprehensive overview of my technical skills and the technologies I work with",
};

export default function SkillsPage() {
  const skillCategories = [
    {
      id: "programming",
      title: "Programming Languages",
      icon: Code,
      description: "Core programming languages and paradigms",
      skills: [
        { name: "TypeScript", level: 90, years: 2, projects: 8 },
        { name: "Python", level: 84, years: 3, projects: 4 },
        { name: "SQL", level: 85, years: 2, projects: 7 },
        { name: "JavaScript", level: 88, years: 2.5, projects: 6 },
        { name: "Dart", level: 70, years: 1, projects: 1 },
      ]
    },
    {
      id: "frontend",
      title: "Frontend Development",
      icon: Globe,
      description: "Creating responsive web applications and user interfaces",
      skills: [
        { name: "Next.js", level: 92, years: 2, projects: 6 },
        { name: "React", level: 90, years: 2, projects: 5 },
        { name: "Tailwind CSS", level: 88, years: 2, projects: 6 },
        { name: "HTML5", level: 90, years: 3, projects: 8 },
        { name: "CSS3", level: 85, years: 3, projects: 8 },
        { name: "Responsive Design", level: 88, years: 2, projects: 7 },
      ]
    },
    {
      id: "backend",
      title: "Backend & APIs",
      icon: Database,
      description: "Server-side development and API integration",
      skills: [
        { name: "Node.js", level: 85, years: 2, projects: 5 },
        { name: "FastAPI", level: 80, years: 1, projects: 2 },
        { name: "REST APIs", level: 92, years: 2, projects: 6 },
        { name: "Webhooks", level: 95, years: 1, projects: 3 },
        { name: "API Integration", level: 90, years: 2, projects: 5 },
        { name: "Authentication Systems", level: 88, years: 1.5, projects: 3 },
      ]
    },
    {
      id: "database",
      title: "Database Management",
      icon: Database,
      description: "Database design and management systems",
      skills: [
        { name: "Supabase", level: 90, years: 1.5, projects: 6 },
        { name: "PostgreSQL", level: 85, years: 2, projects: 5 },
        { name: "Redis", level: 70, years: 1, projects: 4 },
        { name: "Database Design", level: 85, years: 2, projects: 6 },
        { name: "Data Management", level: 88, years: 2, projects: 7 },
      ]
    },
    {
      id: "mobile",
      title: "Mobile Development",
      icon: Smartphone,
      description: "Native and cross-platform mobile applications",
      skills: [
        { name: "Flutter", level: 70, years: 1, projects: 1 },
        { name: "Android Studio", level: 70, years: 1, projects: 1 },
        { name: "Material Design", level: 78, years: 1, projects: 1 },
        { name: "Mobile UI/UX", level: 75, years: 1, projects: 1 },
      ]
    },
    {
      id: "data",
      title: "Data Science & Analytics",
      icon: BarChart3,
      description: "Data analysis, machine learning, and business intelligence",
      skills: [
        { name: "Machine Learning", level: 85, years: 2, projects: 2 },
        { name: "Data Analytics", level: 88, years: 3, projects: 4 },
        { name: "Statistical Analysis", level: 82, years: 3, projects: 3 },
        { name: "Power BI", level: 55, years: 1, projects: 1 },
        { name: "Pandas", level: 80, years: 2, projects: 2 },
        { name: "Scikit-learn", level: 78, years: 1.5, projects: 2 },
        { name: "XGBoost", level: 75, years: 1, projects: 1 },
      ]
    },
    {
      id: "cloud",
      title: "Cloud & Deployment",
      icon: Cloud,
      description: "Cloud platforms and deployment strategies",
      skills: [
        { name: "Vercel", level: 90, years: 2, projects: 6 },
        { name: "Git", level: 90, years: 3, projects: 9 },
        { name: "System Integration", level: 88, years: 2, projects: 5 },
        { name: "CI/CD", level: 75, years: 1, projects: 3 },
      ]
    },
    {
      id: "tools",
      title: "Development Tools",
      icon: Wrench,
      description: "Development environments and productivity tools",
      skills: [
        { name: "Cursor/VS Code", level: 90, years: 3, projects: 10 },
        { name: "Android Studio", level: 75, years: 1, projects: 1 },
        { name: "Microsoft Office", level: 85, years: 5, projects: 8 },
        { name: "Zammad API", level: 80, years: 0.5, projects: 1 },
        { name: "Postman", level: 85, years: 1.5, projects: 5 },
      ]
    },
    {
      id: "business",
      title: "Business & Research",
      icon: Briefcase,
      description: "Business analysis and research methodologies",
      skills: [
        { name: "Digital Business", level: 88, years: 4, projects: 6 },
        { name: "Research Methodology", level: 85, years: 6, projects: 3 },
        { name: "Financial Analysis", level: 80, years: 2, projects: 2 },
        { name: "Project Management", level: 82, years: 2, projects: 7 },
        { name: "Cross-cultural Communication", level: 90, years: 8, projects: 9 },
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
          <div className="text-3xl font-bold text-primary mb-2">3+</div>
          <div className="text-sm text-muted-foreground">Years Experience</div>
        </div>
        <div className="text-center p-6 rounded-lg bg-muted/50">
          <div className="text-3xl font-bold text-primary mb-2">10+</div>
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
                  <span>Advanced Authentication</span>
                  <Badge variant="outline">In Progress</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>AI Integration</span>
                  <Badge variant="outline">Exploring</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Microservices Architecture</span>
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
                  <span>BSc Digital Business & Data Science</span>
                  <Badge>2025</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Project Management Certification</span>
                  <Badge>2023</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span>Aviation API Integration Mastery</span>
                  <Badge>2024</Badge>
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
                <div>University Research Projects</div>
                <div>Industry API Documentation</div>
                <div>Hands-on Enterprise Development</div>
                <div>International Team Collaboration</div>
                <div>Professional Certifications</div>
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
