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
  "vibi-clerk-authentication-system": {
    id: "vibi-clerk-authentication-system",
    title: "ViBI Aviation User Management - Clerk Implementation",
    description: "Enterprise-grade user authentication system for aviation baggage interlining with multi-tenant organization support",
    longDescription: `Built a comprehensive user management system for ViBI (Virtual Baggage Interlining), an aviation industry platform that connects airlines, airports, OTAs, and ground handling agents. The system provides enterprise-grade authentication with complex organizational hierarchies and role-based access control.

The platform manages five distinct organization types (ViBI system owner, Airlines, Airports, OTAs, and Handling Agents) with a sophisticated three-tier permission system: Organization Type → Department → Role. Each organization maintains complete data isolation while enabling secure inter-organizational baggage interlining operations.

Key achievement: Successfully implemented a scalable authentication architecture that handles complex aviation industry workflows while maintaining regulatory compliance and audit trails required for international baggage operations.`,
    image: "/projects/vibi-clerk-dashboard.jpg",
    tags: ["Next.js 14", "TypeScript", "Clerk", "Supabase", "PostgreSQL", "Redis", "Vercel", "Tailwind CSS", "React Hook Form", "Zod"],
    category: "web",
    featured: true,
    status: "completed",
    year: "2025",
    duration: "5 months",
    challenges: [
      "Designing a multi-tenant architecture supporting 5 different organization types with complex hierarchical permissions",
      "Implementing real-time webhook synchronization between Clerk and Supabase for consistent user data across systems",
      "Creating a three-tier access control system (Organization → Department → Role) while maintaining performance",
      "Ensuring aviation industry regulatory compliance with audit trails and data isolation requirements",
      "Building intuitive admin interfaces for managing complex organizational structures and permissions",
      "Handling JWT token validation and custom claims integration for Supabase Row Level Security policies"
    ],
    learnings: [
      "Mastered Clerk's webhook system and custom claims for complex multi-tenant scenarios",
      "Deep understanding of Supabase Row Level Security (RLS) policies for data isolation at scale",
      "Advanced Next.js 14 App Router patterns for server-side authentication and middleware",
      "Redis integration strategies for session management and caching in enterprise applications",
      "Aviation industry data privacy requirements and international compliance standards",
      "Complex state management patterns for hierarchical permission systems"
    ],
    features: [
      "Multi-tenant organization support with complete data isolation",
      "Three-tier permission system: Organization Type → Department → Role",
      "Visual access control matrix with real-time permission preview",
      "Automated user provisioning and deprovisioning via webhooks",
      "Department-specific dashboard routing and data filtering",
      "Enterprise SSO integration with custom authentication flows",
      "Comprehensive audit logging for compliance requirements",
      "Real-time session management with Redis caching",
      "Mobile-responsive admin interface with role-based UI adaptation",
      "Bulk user import/export with department assignment validation"
    ],
    techDetails: {
      frontend: "Next.js 14 with App Router and TypeScript, leveraging server components for optimal performance. Clerk's React components integrated with custom permission wrappers. Tailwind CSS for responsive design with shadcn/ui component library. Real-time UI updates using React Query for cache management.",
      backend: "Next.js API routes handling Clerk webhooks, Supabase client with custom JWT validation middleware. PostgreSQL database with complex relational schema supporting multi-tenant architecture. Redis for session caching and rate limiting. Row Level Security policies for data isolation.",
      deployment: "Deployed on Vercel with automatic deployments from GitHub. Supabase hosted PostgreSQL with Redis Cloud for caching. Environment-specific configurations for development, staging, and production with proper secret management.",
      testing: "Integration testing for webhook endpoints and permission systems. End-to-end testing with Playwright for critical user flows. Load testing for multi-tenant scenarios and user provisioning workflows."
    },
    demoUrl: null, // No demo access for proprietary ViBI systems
    githubUrl: null // No code access for proprietary ViBI systems
  },
  "vibi-supertokens-authentication-system": {
    id: "vibi-supertokens-authentication-system",
    title: "ViBI Aviation User Management - SuperTokens Self-Hosted Implementation",
    description: "Self-hosted authentication migration for Russian market compliance with enterprise-grade security and department-based access control",
    longDescription: `Migrated ViBI's authentication system from Clerk to SuperTokens to meet Russian data residency requirements while maintaining enterprise-grade security and complex organizational hierarchies. This self-hosted solution provides complete data sovereignty for aviation industry clients operating in regulated markets.

The project involved rebuilding the entire authentication infrastructure within a 2-3 week timeline, leveraging SuperTokens' pre-built React components while maintaining the sophisticated three-tier permission system and multi-tenant architecture that supports airlines, airports, OTAs, and handling agents.

Successfully deployed to Russian data centers with full webhook synchronization, maintaining seamless user experience during the migration while ensuring compliance with local data protection regulations. The solution demonstrates expertise in authentication system architecture, international compliance requirements, and rapid enterprise software migration.`,
    image: "/projects/vibi-supertokens-dashboard.jpg",
    tags: ["SuperTokens", "Next.js 14", "TypeScript", "PostgreSQL 16", "Redis 7", "Node.js 20", "React", "JWT", "Webhooks", "Self-Hosted"],
    category: "web",
    featured: true,
    status: "completed",
    year: "2024",
    duration: "2 months",
    challenges: [
      "Migrating from hosted Clerk to self-hosted SuperTokens within 2-3 week deadline for Russian market compliance",
      "Maintaining complex department hierarchy and access control system during authentication provider migration",
      "Implementing custom JWT claims compatible with existing Supabase RLS policies without breaking changes",
      "Setting up self-hosted infrastructure in Russian data centers with proper security hardening",
      "Preserving all existing user sessions and data while switching authentication backends",
      "Building webhook synchronization system for real-time data consistency between SuperTokens and business database"
    ],
    learnings: [
      "SuperTokens architecture and self-hosting deployment strategies for enterprise environments",
      "International data residency compliance requirements for authentication systems",
      "JWT custom claims implementation for complex multi-tenant authorization scenarios",
      "PostgreSQL performance optimization for authentication workloads at enterprise scale",
      "Redis session management patterns for self-hosted authentication systems",
      "Rapid enterprise software migration techniques with zero-downtime deployment strategies"
    ],
    features: [
      "Self-hosted authentication with full data sovereignty",
      "Russian data center deployment for regulatory compliance",
      "Pre-built React UI components with custom department-aware theming",
      "JWT custom claims integration maintaining existing Supabase compatibility",
      "Real-time webhook synchronization with PostgreSQL business database",
      "Department-based session management and access control",
      "Enterprise-grade session security with Redis clustering",
      "Seamless user migration from Clerk without data loss",
      "Multi-factor authentication support for high-security departments",
      "Custom authentication flows for aviation industry workflows"
    ],
    techDetails: {
      frontend: "SuperTokens pre-built React components integrated with Next.js 14 App Router. Custom department-aware dashboard with TypeScript for type safety. Maintained existing Tailwind CSS styling system with SuperTokens theme customization.",
      backend: "SuperTokens Core self-hosted on Node.js 20+ with PostgreSQL 16 as the authentication database. Custom webhook handlers for real-time synchronization with business database. JWT custom claims service for Supabase compatibility. Redis 7 clustering for distributed session management.",
      deployment: "Self-hosted deployment in Russian data centers using Docker containers with Kubernetes orchestration. PostgreSQL database with proper backup and replication strategies. Redis clustering for high availability. CI/CD pipeline with GitLab for deployment automation.",
      testing: "Comprehensive migration testing with parallel system validation. Load testing for Russian infrastructure with realistic traffic patterns. Security penetration testing for self-hosted setup. User acceptance testing with department representatives across all organization types."
    },
    demoUrl: null, // No demo access for proprietary ViBI systems
    githubUrl: null // No code access for proprietary ViBI systems
  },
  "vbi-user-analytics-system": {
    id: "vbi-user-analytics-system",
    title: "ViBI User Analytics & Logging System",
    description: "Comprehensive user action tracking system for aviation baggage interlining platform with PostHog integration",
    longDescription: `Developed a sophisticated user analytics and logging system for a Virtual Baggage Interline (ViBI) platform serving the aviation industry. The system provides real-time tracking of user interactions, comprehensive event logging, and detailed analytics to optimize user experience and business operations.

The platform serves airlines, airports, and ground handling companies, requiring precise tracking of baggage routing decisions, flight selections, and service bookings. The analytics system captures both authenticated user actions through JWT verification and anonymous visitor behavior across the public website.

Built with a focus on enterprise-grade reliability, the system includes error boundaries, retry mechanisms, rate limiting, and comprehensive privacy controls to ensure GDPR compliance while delivering actionable insights for product development and business intelligence.`,
    image: "/projects/vbi-analytics-dashboard.jpg",
    tags: ["Next.js 14", "TypeScript", "PostHog", "Clerk Auth", "Supabase", "Redis", "Vercel", "JWT", "React Hooks", "HOC Pattern", "Middleware"],
    category: "web",
    featured: true,
    status: "paused",
    year: "2024",
    duration: "6 weeks",
    challenges: [
      "Implementing enterprise-grade user tracking without impacting application performance",
      "Designing a flexible analytics architecture supporting both HOC and hooks patterns for different component types",
      "Ensuring GDPR compliance while capturing meaningful user behavior data in a multi-tenant aviation platform",
      "Building robust error handling and retry mechanisms for mission-critical baggage tracking operations",
      "Creating domain-specific event tracking for complex aviation workflows including route validation and flight selection",
      "Integrating seamlessly with Clerk authentication and JWT verification for secure user identification"
    ],
    learnings: [
      "Advanced PostHog implementation patterns including custom proxy setup and session recording optimization",
      "Enterprise analytics architecture design balancing comprehensive tracking with privacy requirements",
      "Building reusable analytics components using both Higher-Order Components and custom React hooks",
      "Performance optimization techniques for high-frequency event tracking in complex aviation workflows",
      "JWT-based user identification strategies for multi-organization enterprise platforms",
      "Error boundary implementation and analytics event queuing with exponential backoff retry logic"
    ],
    features: [
      "Real-time user action tracking with automatic page view monitoring",
      "Multi-pattern component analytics (HOC, hooks, hybrid approaches)",
      "Enterprise user identification with Clerk integration and JWT verification",
      "Domain-specific aviation events (route creation, flight selection, baggage tracking)",
      "Comprehensive error tracking with automatic retry and rate limiting",
      "GDPR-compliant data collection with configurable privacy controls",
      "Performance monitoring with session recording and heatmap generation",
      "Multi-tenant organization context tracking for enterprise aviation clients"
    ],
    techDetails: {
      frontend: "Built with Next.js 14 App Router and TypeScript, implementing a sophisticated analytics layer using PostHog React SDK. Features custom React hooks (useAnalytics, usePostHog) and Higher-Order Components for flexible event tracking. Includes automatic page view tracking, form interaction monitoring, and component-level analytics with error boundaries. The frontend architecture supports both authenticated portal analytics and anonymous public website tracking.",
      backend: "Leverages Next.js API routes with Clerk authentication middleware for secure analytics event processing. Implements custom PostHog proxy for enhanced data collection and GDPR compliance. Features Redis caching for analytics metadata and Supabase integration for persistent analytics configuration. The backend includes JWT verification for user identification and multi-organization context management with rate limiting and error handling.",
      deployment: "Deployed on Vercel with environment-specific PostHog configurations supporting development, staging, and production analytics tracking. Features automatic middleware routing for analytics proxy endpoints and comprehensive error monitoring. The deployment includes PostHog feature flags integration for A/B testing and gradual analytics feature rollouts across aviation industry clients.",
      testing: "Comprehensive analytics testing suite including PostHog event verification, component-level analytics testing, and integration tests for authentication flows. Features development-mode console logging for analytics debugging and custom testing utilities for validating event properties and user identification. Includes performance testing for high-frequency aviation workflow events and error simulation for retry mechanism validation."
    },
    demoUrl: null, // No demo access for proprietary ViBI systems
    githubUrl: null // No code access for proprietary ViBI systems
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
