import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Filter, Search } from "lucide-react";
import { getAllProjectSummaries, getProjectCategories } from "@/data/projects";

export const metadata: Metadata = {
  title: "All Projects",
  description: "Explore all my development projects, from web applications to mobile apps and APIs",
};

// Load project data from centralized data files
const allProjects = getAllProjectSummaries();
const categories = getProjectCategories();

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">All Projects</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A comprehensive collection of my development work, showcasing various technologies 
          and problem-solving approaches across different domains.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={category.id === "all" ? "default" : "outline"}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              {category.name}
              <Badge variant="secondary" className="ml-1">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="text-center p-4 rounded-lg bg-muted/50">
          <div className="text-2xl font-bold text-primary">{allProjects.length}</div>
          <div className="text-sm text-muted-foreground">Total Projects</div>
        </div>
        <div className="text-center p-4 rounded-lg bg-muted/50">
          <div className="text-2xl font-bold text-primary">{allProjects.filter(p => p.featured).length}</div>
          <div className="text-sm text-muted-foreground">Featured</div>
        </div>
        <div className="text-center p-4 rounded-lg bg-muted/50">
          <div className="text-2xl font-bold text-primary">{new Set(allProjects.flatMap(p => p.tags)).size}</div>
          <div className="text-sm text-muted-foreground">Technologies</div>
        </div>
        <div className="text-center p-4 rounded-lg bg-muted/50">
          <div className="text-2xl font-bold text-primary">{new Set(allProjects.map(p => p.category)).size}</div>
          <div className="text-sm text-muted-foreground">Categories</div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProjects.map((project) => (
          <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-md mb-4 flex items-center justify-center relative overflow-hidden">
                <Code className="h-12 w-12 text-muted-foreground" />
                {project.featured && (
                  <Badge className="absolute top-2 right-2">Featured</Badge>
                )}
              </div>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <Badge variant="outline" className="text-xs">
                  {project.year}
                </Badge>
              </div>
              <CardDescription className="line-clamp-3">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="font-medium">Duration:</span>
                  <span>{project.duration}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 4} more
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full group-hover:bg-accent" asChild>
                <Link href={`/projects/${project.id}`}>
                  View Project Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">Interested in Working Together?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          These projects represent my journey as a developer. I'm always excited to take on new challenges 
          and create innovative solutions.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Let's Discuss Your Project</Link>
        </Button>
      </div>
    </div>
  );
}
