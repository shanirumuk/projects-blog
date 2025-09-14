export const vbiUserAnalyticsSystem = {
  id: "vbi-user-analytics-system",
  title: "ViBI User Analytics & Logging System",
  description: "Comprehensive user action tracking system for aviation baggage interlining platform with PostHog integration",
  longDescription: `Developed a sophisticated user analytics and logging system for a Virtual Baggage Interline (ViBI) platform serving the aviation industry. The system provides real-time tracking of user interactions, comprehensive event logging and detailed analytics to optimize user experience and business operations.

The platform serves B2B clients requiring precise tracking of baggage routing decisions, flight selections and service bookings. The analytics system captures both authenticated user actions through JWT verification and anonymous visitor behavior across the public website.

Built with a focus on enterprise-grade reliability, the system includes error boundaries, retry mechanisms, rate limiting and comprehensive privacy controls to ensure GDPR compliance while delivering actionable insights for product development and business intelligence.`,
  image: "/arnaud-girault-d6_RKGmHt64-unsplash.jpg",
  tags: ["Next.js 14", "TypeScript", "PostHog", "Clerk Auth", "Supabase", "Redis", "Vercel", "JWT", "React Hooks", "HOC Pattern", "Middleware"],
  category: "web",
  featured: true,
  status: "paused",
  year: "2024",
  duration: "6 weeks",
  challenges: [
    "Implementing user tracking without impacting application performance",
    "Designing a flexible analytics architecture supporting both Higher-Order Components (HOC) and hooks patterns for different component types",
    "Ensuring Global Data Protection Regulation (GDPR) compliance while capturing meaningful user behavior data in a multi-tenant aviation platform",
    "Building robust error handling and retry mechanisms for mission-critical baggage tracking operations",
    "Creating domain-specific event tracking for complex aviation workflows including route validation and flight selection",
    "Integrating seamlessly with Clerk authentication and JWT verification for secure user identification"
  ],
  learnings: [
    "Advanced PostHog implementation patterns including custom proxy setup and session recording optimization",
    "Analytics architecture design balancing comprehensive tracking with privacy requirements",
    "Building reusable analytics components using both Higher-Order Components and custom React hooks",
    "Performance optimization techniques for high-frequency event tracking in complex aviation workflows",
    "JWT-based user identification strategies for multi-organization enterprise platforms",
    "Error boundary implementation and analytics event queuing with backoff retry logic"
  ],
  features: [
    "Real-time user action tracking with automatic page view monitoring",
    "Multi-pattern component analytics (HOC, hooks, hybrid approaches)",
    "User identification with Clerk integration and JWT verification",
    "Domain-specific aviation events (route creation, flight selection, baggage tracking)",
    "Comprehensive error tracking with automatic retry and rate limiting",
    "GDPR-compliant data collection with configurable privacy controls",
    "Performance monitoring with session recording and heatmap generation",
    "Multi-tenant organization context tracking for enterprise aviation clients"
  ],
  techDetails: {
    frontend: "Built with Next.js 14 App Router and TypeScript, implementing a sophisticated analytics layer using PostHog React SDK. Features custom React hooks (useAnalytics, usePostHog) and Higher-Order Components for flexible event tracking. Includes automatic page view tracking, form interaction monitoring and component-level analytics with error boundaries. The frontend architecture supports both authenticated portal analytics and anonymous public website tracking.",
    backend: "Leverages Next.js API routes with Clerk authentication middleware for secure analytics event processing. Implements custom PostHog proxy for enhanced data collection and GDPR compliance. Features Redis caching for analytics metadata and Supabase integration for persistent analytics configuration. The backend includes JWT verification for user identification and multi-organization context management with rate limiting and error handling.",
    deployment: "Deployed on Vercel with environment-specific PostHog configurations supporting development, staging and production analytics tracking. Features automatic middleware routing for analytics proxy endpoints and comprehensive error monitoring. The deployment includes PostHog feature flags integration for A/B testing and gradual analytics feature rollouts across aviation industry clients.",
    testing: "Comprehensive analytics testing suite including PostHog event verification, component-level analytics testing and integration tests for authentication flows. Features development-mode console logging for analytics debugging and custom testing utilities for validating event properties and user identification. Includes performance testing for high-frequency aviation workflow events and error simulation for retry mechanism validation."
  },
  demoUrl: null, // No demo access for proprietary ViBI systems
  githubUrl: null, // No code access for proprietary ViBI systems
  companyUrl: "https://www.vbi.travel/" // Official ViBI company website
} as const;
