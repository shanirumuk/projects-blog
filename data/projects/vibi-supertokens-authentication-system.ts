export const vibiSupertokensAuthenticationSystem = {
  id: "vibi-supertokens-authentication-system",
  title: "ViBI Aviation User Management - SuperTokens Self-Hosted Implementation",
  description: "Self-hosted authentication migration for larger market compliance with enterprise-grade security and department-based access control",
  longDescription: `Migrated ViBI's authentication system from Clerk to SuperTokens to meet EU data residency requirements while maintaining enterprise-grade security and complex organizational hierarchies. This self-hosted solution provides complete data sovereignty for aviation industry clients operating in regulated markets.

The project involved rebuilding the entire authentication infrastructure within an initially stated 2-3 week timeline, leveraging SuperTokens' pre-built React components while maintaining the sophisticated three-tier permission system and multi-tenant architecture that supports airlines, airports, OTAs, and handling agents.

Successfully deployed to EU data centers with full webhook synchronization, maintaining seamless user experience during the migration while ensuring compliance with local data protection regulations. The solution demonstrates expertise in authentication system architecture, international compliance requirements, and rapid enterprise software migration.`,
  image: "/arnaud-girault-d6_RKGmHt64-unsplash.jpg",
  tags: ["SuperTokens", "Next.js 14", "TypeScript", "PostgreSQL", "Redis 7", "React", "JWT", "Webhooks", "Self-Hosted"],
  category: "web",
  featured: true,
  status: "completed",
  year: "2025",
  duration: "2 months",
  challenges: [
    "Migrating from hosted Clerk to self-hosted SuperTokens within an initially stated 2-3 week deadline for EU market compliance, which was extended to 2 months due to the complexity of the project",
    "Maintaining complex department hierarchy and access control system during authentication provider migration",
    "Implementing custom JWT claims compatible with existing Supabase RLS policies without breaking changes",
    "Setting up self-hosted infrastructure in EU data centers with proper security hardening",
    "Preserving all existing user sessions and data while switching authentication backends",
    "Building webhook synchronization system for real-time data consistency between SuperTokens and business database"
  ],
  learnings: [
    "SuperTokens architecture and self-hosting deployment strategies for enterprise environments",
    "International data residency compliance requirements for authentication systems",
    "JWT custom claims implementation for complex multi-tenant authorization scenarios",
    "PostgreSQL performance optimization for authentication workloads at enterprise scale",
    "Redis session management patterns for self-hosted authentication systems",
    "Rapid software migration techniques with zero-downtime deployment strategies"
  ],
  features: [
    "Self-hosted authentication with full data sovereignty",
    "EU data center deployment for regulatory compliance",
    "Pre-built React UI components with custom department-aware theming",
    "JWT custom claims integration maintaining existing Supabase compatibility",
    "Real-time webhook synchronization with PostgreSQL business database",
    "Department-based session management and access control",
    "Session security with Redis clustering",
    "Seamless user migration from Clerk without data loss",
    "Multi-factor authentication support for high-security departments",
    "Custom authentication flows for aviation industry workflows"
  ],
  techDetails: {
    frontend: "SuperTokens pre-built React components integrated with Next.js 14 App Router. Custom department-aware dashboard with TypeScript for type safety. Maintained existing Tailwind CSS styling system with SuperTokens theme customization.",
    backend: "SuperTokens Core self-hosted with PostgreSQL as the authentication database. Custom webhook handlers for real-time synchronization with business database. JWT custom claims service for Supabase compatibility. Redis 7 clustering for distributed session management.",
    deployment: "Self-hosted deployment in EU data centers. PostgreSQL database with proper backup and replication strategies. Redis clustering for high availability. CI/CD pipeline with GitLab for deployment automation.",
    testing: "Comprehensive migration testing with parallel system validation. Load testing for EU infrastructure with realistic traffic patterns. Security penetration testing for self-hosted setup. User acceptance testing with department representatives across all organization types."
  },
  demoUrl: null, // No demo access for proprietary ViBI systems
  githubUrl: null, // No code access for proprietary ViBI systems
  companyUrl: "https://www.vbi.travel/" // Official ViBI company website
} as const;
