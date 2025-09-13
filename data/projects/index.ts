import 'server-only';

// Import all project data
import { vibiClerkAuthenticationSystem } from './vibi-clerk-authentication-system';
import { vibiSupertokensAuthenticationSystem } from './vibi-supertokens-authentication-system';
import { vbiUserAnalyticsSystem } from './vbi-user-analytics-system';
import { berlinHousingOptimization } from './berlin-housing-optimization';
import { supportSystemIntegration } from './support-system-integration';
import { flightTrackingApiIntegration } from './flight-tracking-api-integration';
import { rentresolvePropertyPlatform } from './rentresolve-property-platform';
import { backpackWeightLoadingResearch } from './backpack-weight-loading-research';
import { lufthansaCrisisAnalysis } from './lufthansa-crisis-analysis';
import { weatherForecastApp } from './weather-forecast-app';

// Project type definition - use a union type of all project types
export type Project = typeof vibiClerkAuthenticationSystem | 
                     typeof vibiSupertokensAuthenticationSystem | 
                     typeof vbiUserAnalyticsSystem | 
                     typeof berlinHousingOptimization | 
                     typeof supportSystemIntegration |
                     typeof flightTrackingApiIntegration |
                     typeof rentresolvePropertyPlatform |
                     typeof backpackWeightLoadingResearch |
                     typeof lufthansaCrisisAnalysis |
                     typeof weatherForecastApp;

// All projects data
export const allProjectsData = {
  [vibiClerkAuthenticationSystem.id]: vibiClerkAuthenticationSystem,
  [vibiSupertokensAuthenticationSystem.id]: vibiSupertokensAuthenticationSystem,
  [vbiUserAnalyticsSystem.id]: vbiUserAnalyticsSystem,
  [berlinHousingOptimization.id]: berlinHousingOptimization,
  [supportSystemIntegration.id]: supportSystemIntegration,
  [flightTrackingApiIntegration.id]: flightTrackingApiIntegration,
  [rentresolvePropertyPlatform.id]: rentresolvePropertyPlatform,
  [backpackWeightLoadingResearch.id]: backpackWeightLoadingResearch,
  [lufthansaCrisisAnalysis.id]: lufthansaCrisisAnalysis,
  [weatherForecastApp.id]: weatherForecastApp,
} as const;

// Helper functions
export const getProject = (id: string): Project | undefined => {
  return allProjectsData[id as keyof typeof allProjectsData];
};

export const getAllProjects = (): Project[] => {
  return Object.values(allProjectsData);
};

export const getFeaturedProjects = (): Project[] => {
  return getAllProjects().filter(project => project.featured);
};

export const getRecentProjects = (limit: number = 3): Project[] => {
  return getAllProjects()
    .sort((a, b) => {
      // Sort by year (most recent first), then by featured status
      const yearA = parseInt(a.year.toString().split('-')[0]);
      const yearB = parseInt(b.year.toString().split('-')[0]);
      if (yearB !== yearA) return yearB - yearA;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    })
    .slice(0, limit);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return getAllProjects();
  return getAllProjects().filter(project => project.category === category);
};

export const getProjectCategories = () => {
  const projects = getAllProjects();
  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    { 
      id: "web", 
      name: "Web Development", 
      count: projects.filter(p => {
        if ((p as any).categories && Array.isArray((p as any).categories)) {
          return (p as any).categories.includes("web");
        }
        return p.category === "web";
      }).length 
    },
    { 
      id: "mobile", 
      name: "Mobile Apps", 
      count: projects.filter(p => {
        if ((p as any).categories && Array.isArray((p as any).categories)) {
          return (p as any).categories.includes("mobile");
        }
        return p.category === "mobile";
      }).length 
    },
    { 
      id: "api", 
      name: "API Integration", 
      count: projects.filter(p => {
        if ((p as any).categories && Array.isArray((p as any).categories)) {
          return (p as any).categories.includes("api");
        }
        return p.category === "api";
      }).length 
    },
    { 
      id: "research", 
      name: "Research", 
      count: projects.filter(p => {
        if ((p as any).categories && Array.isArray((p as any).categories)) {
          return (p as any).categories.includes("research");
        }
        return p.category === "research";
      }).length 
    },
  ];
  
  return categories;
};

// Simplified project data for listing pages (without heavy content)
export const getProjectSummary = (project: Project) => ({
  id: project.id,
  title: project.title,
  description: project.description,
  image: project.image,
  tags: project.tags.slice(0, 6), // Limit tags for listing view
  category: project.category,
  categories: (project as any).categories, // Include multiple categories if available
  featured: project.featured,
  status: project.status,
  year: project.year,
  duration: project.duration,
});

export const getAllProjectSummaries = () => {
  return getAllProjects()
    .sort((a, b) => {
      // Sort by year (most recent first), then by featured status
      const yearA = parseInt(a.year.toString().split('-')[0]);
      const yearB = parseInt(b.year.toString().split('-')[0]);
      if (yearB !== yearA) return yearB - yearA;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    })
    .map(getProjectSummary);
};
