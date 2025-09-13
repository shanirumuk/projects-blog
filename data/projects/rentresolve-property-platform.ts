export const rentresolvePropertyPlatform = {
  id: "rentresolve-property-platform",
  title: "RentResolve - Property Rental Platform",
  description: "A comprehensive property rental platform connecting landlords and tenants with integrated rating systems and KYC verification",
  longDescription: `RentResolve is a full-stack property rental platform designed specifically for the Zimbabwean market, developed for Ndirimo Properties. The platform addresses critical gaps in tenant background information and creates accountability for both landlords and tenants through a comprehensive rating system.

The application features separate dashboards for landlords, tenants, and staff administrators, with sophisticated KYC verification processes, dispute resolution systems, and integrated payment processing through Paynow and international payment gateways. The platform aims to reduce rental defaults, prevent tenant abuse, and bring transparency to Zimbabwe's property rental market.`,
  image: "/projects/rentresolve-dashboard.jpg",
  tags: ["React", "Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Node.js", "Paynow API", "GPS Integration"],
  category: "web",
  featured: true,
  status: "in-progress",
  year: "2025",
  duration: "2 months",
  challenges: [
    "Designing a dual-rating system that fairly represents both tenant and landlord performance while preventing gaming",
    "Implementing secure KYC verification processes with manual staff review workflows for identity documents",
    "Creating a sophisticated property search system with GPS coordinates, amenities filtering, and real-time availability",
    "Building a complex dispute resolution system with evidence submission and staff adjudication workflows",
    "Integrating multiple payment systems including Paynow for Zimbabwe mobile money and international card processing",
    "Designing separate but cohesive user experiences for three distinct user types (landlords, tenants, staff)"
  ],
  learnings: [
    "Advanced Supabase implementation including Row Level Security (RLS) policies for multi-tenant data isolation",
    "Complex state management in React for handling multiple user types and permission-based UI rendering",
    "Integration techniques for Zimbabwe-specific payment gateways and mobile money systems",
    "Document verification workflows and secure file upload systems with image processing",
    "Geographic data handling and GPS coordinate integration for property location services",
    "Building scalable notification systems with email, SMS, and in-app messaging capabilities"
  ],
  features: [
    "Multi-role user authentication with separate landlord, tenant, and staff dashboards",
    "Comprehensive property listing system with 360-degree photo uploads and GPS coordinates",
    "Advanced tenant screening with rating history, payment records, and reference verification",
    "Integrated booking system for property viewings with calendar management",
    "Price negotiation system allowing counter-offers between tenants and landlords",
    "KYC verification process with document upload and manual staff review",
    "Dispute resolution system with evidence submission and staff adjudication",
    "Real-time messaging system between landlords and tenants",
    "Payment reminder system and subscription management for premium features",
    "Analytics dashboard for staff with key performance indicators and user metrics",
    "Mobile-responsive design optimized for Zimbabwe's mobile-first user base",
    "Integration with Paynow, PayPal, and international payment processors"
  ],
  techDetails: {
    frontend: "Built with Next.js 14 and React 18, utilizing TypeScript for type safety and Tailwind CSS for responsive design. The frontend implements a modular component architecture with separate layouts for each user type. Features include dynamic routing, optimistic updates, real-time subscriptions through Supabase, and progressive web app capabilities for offline functionality.",
    backend: "Powered by Supabase with PostgreSQL database, featuring comprehensive Row Level Security policies to ensure data isolation between user types. Custom database functions handle complex rating calculations, automatic monthly scoring, and notification triggers. API routes built with Next.js handle payment processing, file uploads to Supabase Storage, and integration with external services like Paynow and SMS gateways.",
    deployment: "Deployed on Vercel with continuous deployment from GitHub. Supabase provides managed PostgreSQL hosting with automated backups and edge functions for serverless API endpoints. CDN integration ensures fast loading times across Zimbabwe and international markets. Environment-specific configurations handle development, staging, and production deployments.",
    testing: "Comprehensive testing strategy including unit tests with Jest and React Testing Library for component logic, integration tests for API endpoints and database operations, and end-to-end testing with Playwright for critical user journeys. Manual testing protocols for payment integration and KYC workflows ensure reliability of sensitive financial and verification processes."
  },
  demoUrl: null, // No demo access for proprietary Ndirimo Properties systems
  githubUrl: null // No code access for proprietary Ndirimo Properties systems
} as const;
