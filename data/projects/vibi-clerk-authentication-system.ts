export const vibiClerkAuthenticationSystem = {
  id: "vibi-clerk-authentication-system",
  title: "ViBI Aviation User Management - Clerk Implementation",
  description: "Enterprise-grade user authentication system for aviation baggage interlining with multi-tenant organization support",
  longDescription: `Built a comprehensive user management system for ViBI (Virtual Baggage Interlining), an aviation industry platform that connects airlines, airports, OTAs, and ground handling agents. The system provides enterprise-grade authentication with complex organizational hierarchies and role-based access control.

The platform manages five distinct organization types (ViBI system owner, Airlines, Airports, OTAs, and Handling Agents) with a sophisticated three-tier permission system: Organization Type → Department → Role. Each organization maintains complete data isolation while enabling secure inter-organizational baggage interlining operations.

Key achievement: Successfully implemented a scalable authentication architecture that handles complex aviation industry workflows while maintaining regulatory compliance and audit trails required for international baggage operations.`,
  image: "/arnaud-girault-d6_RKGmHt64-unsplash.jpg",
  tags: ["Next.js 14", "TypeScript", "Clerk", "Supabase", "PostgreSQL", "Redis", "Vercel", "Tailwind CSS", "React Hook Form", "Zod"],
  category: "web",
  featured: true,
  status: "completed",
  year: "2024",
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
  githubUrl: null, // No code access for proprietary ViBI systems
  companyUrl: "https://www.vbi.travel/" // Official ViBI company website
} as const;
