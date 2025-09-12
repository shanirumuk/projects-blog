import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Your Name</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Full-stack developer passionate about creating innovative solutions 
                and sharing knowledge through detailed project documentation.
              </p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="mailto:your.email@example.com">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <Link href="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/projects" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                All Projects
              </Link>
              <Link href="/skills" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Skills & Technologies
              </Link>
              <Link href="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                About Me
              </Link>
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Project Categories */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Project Categories</h4>
            <nav className="space-y-2">
              <Link href="/projects?category=web" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Web Development
              </Link>
              <Link href="/projects?category=mobile" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Mobile Apps
              </Link>
              <Link href="/projects?category=api" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                APIs & Backend
              </Link>
              <Link href="/projects?category=tools" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Dev Tools
              </Link>
              <Link href="/projects?category=ui" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                UI/UX Design
              </Link>
            </nav>
          </div>
        </div>

        <Separator className="my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-red-500" /> using Next.js & shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
