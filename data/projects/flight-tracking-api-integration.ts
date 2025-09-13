export const flightTrackingApiIntegration = {
  id: "flight-tracking-api-integration",
  title: "Real-Time Flight Tracking System: From Aviation Stack to OAG",
  description: "A comprehensive flight tracking system built for the ViBI platform with Next.js, integrating multiple aviation APIs including Aviation Stack, Cirium, and OAG Flight Status API",
  longDescription: `Developed a sophisticated real-time flight tracking system as part of the ViBI (Virtual Baggage Interlining) platform that evolved through three major API integrations over 4 months. The project began with Aviation Stack API for basic flight data, progressed to Cirium's Flight API for enhanced real-time capabilities, and ultimately settled on OAG's Flight Status API for the most comprehensive and reliable flight information.

The system features a robust webhook architecture built with Next.js 14 and Supabase, providing real-time flight updates, terminal and gate management, and automated alert subscriptions for the ViBI aviation ecosystem. Through extensive API vendor meetings and technical evaluations, the project demonstrates the complexities of aviation data integration and the importance of choosing the right API partner for enterprise-grade applications.

This project showcases advanced backend architecture, real-time data processing, and the challenges of working with multiple third-party aviation data providers in a production environment serving airlines, airports, and ground handling companies within the ViBI platform.`,
  image: "/projects/flight-tracking-dashboard.jpg",
  tags: ["Next.js 14", "TypeScript", "Supabase", "PostgreSQL", "Webhooks", "Aviation APIs", "OAG API", "Cirium API", "Kafka", "Real-time Processing"],
  category: "api",
  featured: true,
  status: "completed",
  year: "2024 - 2025",
  duration: "4 months (across different periods)",
  challenges: [
    "Evaluating and integrating three different aviation API providers with varying data formats and reliability",
    "Building a flexible webhook system that could adapt to different API notification structures",
    "Managing real-time flight data synchronization while handling API rate limits and downtime",
    "Designing a database schema that could accommodate different API data structures and relationships",
    "Implementing robust error handling and retry logic for critical flight data updates",
    "Coordinating technical meetings with API vendors to understand capabilities and limitations",
    "Ensuring data consistency across terminal, gate, and flight information updates",
    "Integrating Kafka message streaming for the OAG implementation to handle high-volume flight data processing"
  ],
  learnings: [
    "Deep understanding of aviation industry data standards and the complexities of flight information",
    "Advanced webhook architecture design with authentication, signature verification, and error handling",
    "Database trigger implementation in PostgreSQL for automated data processing workflows",
    "API vendor evaluation process and the importance of technical due diligence in integration decisions",
    "Real-time data synchronization strategies and handling eventual consistency in distributed systems",
    "TypeScript interface design for complex, nested API response structures",
    "Production-grade monitoring and alerting for critical data pipeline systems",
    "Kafka message streaming patterns for high-throughput aviation data processing and event-driven architecture"
  ],
  features: [
    "Real-time flight status updates via webhook notifications",
    "Automated terminal and gate information management",
    "Alert rule lifecycle management with automatic cleanup",
    "Multi-vendor API integration support (Aviation Stack, Cirium, OAG)",
    "Database-triggered webhook calls for seamless data synchronization",
    "Comprehensive flight delay and duration calculations",
    "Robust authentication with bearer tokens and signature verification",
    "Exponential backoff retry logic for API reliability",
    "Detailed logging and monitoring for production operations",
    "TypeScript-first development with comprehensive type definitions",
    "Kafka message streaming integration for scalable flight data processing with OAG API"
  ],
  techDetails: {
    frontend: "Next.js 14 with App Router for API route handling, TypeScript for type safety, and React components for any admin interfaces. The frontend architecture focuses on webhook processing rather than user-facing components.",
    backend: "Next.js API routes serving as webhook endpoints, Supabase PostgreSQL database with advanced triggers and functions, custom utility classes for API integration (CiriumAlertManager), and comprehensive error handling with structured logging. Database triggers automatically initiate webhook calls when flight data changes. Kafka integration for OAG implementation enables high-throughput message streaming and event-driven processing of flight data updates.",
    apis: "Integrated three aviation APIs: Started with Aviation Stack for basic flight data, evolved to Cirium Flight API for enhanced real-time capabilities and webhook notifications, and ultimately implemented OAG's Flight Status API for the most comprehensive and reliable flight information. The OAG implementation leverages Kafka message streaming for high-volume data processing and real-time event distribution. Each API required different authentication, data mapping, and webhook handling approaches.",
    deployment: "Production deployment with environment-based configuration, ngrok for local development and testing, webhook endpoint accessibility requirements for third-party notifications, and proper secret management for API keys and webhook authentication tokens.",
    testing: "Postman collections for webhook endpoint testing, ngrok integration for local development testing with external APIs, database trigger testing in Supabase, and comprehensive error scenario testing including API failures, network issues, and data inconsistencies."
  },
    demoUrl: null, // No demo access for proprietary ViBI systems
    githubUrl: null // No code access for proprietary ViBI systems
} as const;
