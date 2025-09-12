import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Calendar, Clock, ExternalLink, Github, Globe, Users } from "lucide-react";

// This would typically come from a database or CMS
const projectsData = {
  "ecommerce-platform": {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A comprehensive full-stack e-commerce solution that demonstrates modern web development practices and scalable architecture.",
    longDescription: `This e-commerce platform was built to showcase my full-stack development capabilities, featuring a complete online shopping experience from product browsing to order completion. The project emphasizes user experience, security, and scalability.

The frontend provides an intuitive shopping interface with advanced filtering, search functionality, and a seamless checkout process. The backend implements robust authentication, inventory management, and payment processing while maintaining high performance and security standards.`,
    image: "/placeholder-project-1.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux", "Express", "JWT", "Docker"],
    category: "web",
    featured: true,
    status: "completed",
    year: "2024",
    duration: "3 months",
    demoUrl: "https://ecommerce-demo.example.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    challenges: [
      "Implementing secure payment processing with Stripe integration",
      "Building a scalable inventory management system",
      "Creating responsive design that works across all devices",
      "Optimizing database queries for large product catalogs",
    ],
    learnings: [
      "Advanced React patterns including custom hooks and context",
      "Payment gateway integration and PCI compliance considerations",
      "Database design for e-commerce applications",
      "Performance optimization techniques for web applications",
    ],
    features: [
      "User authentication and authorization",
      "Product catalog with advanced filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment processing",
      "Order tracking and history",
      "Admin dashboard for inventory management",
      "Responsive design for all devices",
      "Email notifications and confirmations",
    ],
    techDetails: {
      frontend: "React 18 with TypeScript, Redux Toolkit for state management, React Router for navigation, and Tailwind CSS for styling",
      backend: "Node.js with Express framework, PostgreSQL database, JWT for authentication, and RESTful API design",
      deployment: "Docker containers deployed on AWS EC2 with RDS for database and S3 for static assets",
      testing: "Jest for unit testing, Cypress for end-to-end testing, and Postman for API testing",
    }
  },
  "task-management-app": {
    id: "task-management-app",
    title: "Task Management App",
    description: "A real-time collaboration mobile application for team task management and productivity tracking.",
    longDescription: `This mobile application addresses the need for effective team collaboration and task management. Built with React Native, it provides a seamless experience across iOS and Android platforms with real-time synchronization and offline capabilities.

The app focuses on user experience with intuitive gesture-based interactions, push notifications, and comprehensive project management features. The backend leverages Firebase for real-time data synchronization and user authentication.`,
    image: "/placeholder-project-2.jpg",
    tags: ["React Native", "Firebase", "TypeScript", "Expo", "Redux", "Push Notifications"],
    category: "mobile",
    featured: true,
    status: "completed",
    year: "2024",
    duration: "2 months",
    demoUrl: "https://taskapp-demo.example.com",
    githubUrl: "https://github.com/yourusername/task-management-app",
    challenges: [
      "Implementing real-time synchronization across multiple devices",
      "Optimizing app performance for smooth animations",
      "Handling offline functionality and data synchronization",
      "Creating intuitive gesture-based interactions",
    ],
    learnings: [
      "React Native development best practices and performance optimization",
      "Firebase real-time database and cloud functions",
      "Mobile UI/UX design principles and accessibility",
      "App store deployment and mobile app testing strategies",
    ],
    features: [
      "Real-time task creation and updates",
      "Team collaboration and assignment",
      "Push notifications for important updates",
      "Offline functionality with sync",
      "Progress tracking and analytics",
      "File attachments and comments",
      "Calendar integration",
      "Dark mode support",
    ],
    techDetails: {
      frontend: "React Native with TypeScript, Expo for development workflow, Redux for state management, and React Navigation",
      backend: "Firebase Authentication, Firestore for real-time database, Cloud Functions for server-side logic, and FCM for push notifications",
      deployment: "Built with Expo and deployed to App Store and Google Play Store",
      testing: "Jest for unit testing, Detox for end-to-end mobile testing, and manual testing on physical devices",
    }
  },
  "ai-chatbot": {
    id: "ai-chatbot",
    title: "AI Customer Service Bot",
    description: "An intelligent customer service chatbot powered by OpenAI's GPT API with context-aware responses.",
    longDescription: `This AI-powered chatbot represents the integration of modern language models into customer service workflows. Built with Python and FastAPI, it provides intelligent, context-aware responses to customer inquiries while maintaining conversation history and escalation capabilities.

The system includes natural language processing, sentiment analysis, and integration with existing customer support systems. It demonstrates how AI can enhance customer service while maintaining human oversight and control.`,
    image: "/placeholder-project-3.jpg",
    tags: ["Python", "FastAPI", "OpenAI", "Redis", "PostgreSQL", "WebSockets", "Docker"],
    category: "api",
    featured: true,
    status: "completed",
    year: "2024",
    duration: "1 month",
    demoUrl: "https://chatbot-demo.example.com",
    githubUrl: "https://github.com/yourusername/ai-chatbot",
    challenges: [
      "Training the AI model with domain-specific knowledge",
      "Implementing conversation context and memory",
      "Ensuring response accuracy and relevance",
      "Managing API rate limits and costs effectively",
    ],
    learnings: [
      "OpenAI API integration and prompt engineering",
      "Real-time communication with WebSockets",
      "Caching strategies with Redis for performance",
      "AI model fine-tuning and conversation management",
    ],
    features: [
      "Natural language understanding and generation",
      "Context-aware conversation handling",
      "Sentiment analysis and escalation triggers",
      "Integration with existing support tickets",
      "Multi-language support",
      "Analytics and conversation insights",
      "Real-time responses via WebSockets",
      "Fallback to human agents",
    ],
    techDetails: {
      backend: "Python with FastAPI framework, async/await for performance, Pydantic for data validation",
      ai: "OpenAI GPT-4 API for language processing, custom prompt engineering, and conversation context management",
      database: "PostgreSQL for conversation history, Redis for caching and session management",
      deployment: "Docker containers on AWS ECS with Application Load Balancer and auto-scaling",
    }
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
      </div>

      {/* Project Header */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Badge variant="outline">{project.category}</Badge>
          <Badge variant="secondary">{project.status}</Badge>
          {project.featured && <Badge>Featured</Badge>}
        </div>
        
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-muted-foreground mb-6 max-w-3xl">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span className="text-sm text-muted-foreground">{project.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span className="text-sm text-muted-foreground">{project.duration}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {project.demoUrl && (
            <Button asChild>
              <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 h-4 w-4" />
                Live Demo
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" asChild>
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View Code
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Project Image */}
      <div className="mb-12">
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <Globe className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Project Screenshot</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Project Overview */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              {project.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">{challenge}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Key Learnings */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Key Learnings</h2>
            <div className="space-y-4">
              {project.learnings.map((learning, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-muted-foreground">{learning}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Technology Stack */}
          <Card>
            <CardHeader>
              <CardTitle>Technology Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical Details */}
          <Card>
            <CardHeader>
              <CardTitle>Technical Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(project.techDetails).map(([key, value]) => (
                <div key={key}>
                  <h4 className="font-semibold capitalize mb-2">{key}</h4>
                  <p className="text-sm text-muted-foreground">{value}</p>
                  {key !== Object.keys(project.techDetails)[Object.keys(project.techDetails).length - 1] && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Project Links */}
          <Card>
            <CardHeader>
              <CardTitle>Project Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {project.demoUrl && (
                <Button variant="outline" className="w-full" asChild>
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" />
                    Live Demo
                    <ExternalLink className="ml-auto h-4 w-4" />
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" className="w-full" asChild>
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                    <ExternalLink className="ml-auto h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Next Steps */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Interested in Similar Work?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          This project showcases my approach to solving complex technical challenges. 
          Let's discuss how I can help with your next project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Start a Conversation</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/projects">View More Projects</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
