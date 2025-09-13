import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Database, Globe, Smartphone, Terminal, Zap } from "lucide-react";
import { getRecentProjects } from "@/data/projects";

export default function Home() {
  const recentProjects = getRecentProjects(3).map(project => ({
    id: project.id,
    title: project.title,
    description: project.description,
    image: project.image,
    tags: project.tags.slice(0, 4), // Limit tags for home page display
    category: project.category,
    featured: project.featured,
  }));

  const skills = [
    { icon: Globe, name: "Web Development", description: "React, Next.js, Vue.js" },
    { icon: Smartphone, name: "Mobile Development", description: "React Native, Flutter" },
    { icon: Database, name: "Backend & APIs", description: "Node.js, Python, PostgreSQL" },
    { icon: Code, name: "Languages", description: "TypeScript, JavaScript, Python" },
    { icon: Terminal, name: "DevOps", description: "Docker, AWS, CI/CD" },
    { icon: Zap, name: "Tools & Frameworks", description: "Git, Figma, Testing" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Building Digital Solutions
            <span className="block text-primary">One Project at a Time</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm a passionate full-stack developer specializing in enterprise authentication systems and multi-tenant architectures. 
            Explore my projects to see how I solve complex technical challenges in mission-critical applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/projects">
                View My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Recent Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are my most recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="aspect-video bg-white border border-border rounded-md mb-4 flex items-center justify-center">
                  <Code className="h-12 w-12 text-primary/60" />
                </div>
                <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full group-hover:bg-accent" asChild>
                  <Link href={`/projects/${project.id}`}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 bg-muted/50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of the technologies and skills I've developed through my projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-start space-x-4 p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <skill.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href="/skills">
              Explore All Skills <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8">
            I'm always excited to collaborate on new projects and challenges. 
            Whether you're looking to hire or just want to chat about technology, feel free to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Download CV</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
