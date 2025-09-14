export const weatherForecastApp = {
  id: "weather-forecast-app",
  title: "Weather Forecast Mobile Application",
  description: "A responsive weather application with real-time forecasts, location services and interactive features built for mobile devices using Dart and Android Studio",
  longDescription: `A comprehensive weather application developed as part of a university group project in 2024. The app provides users with current weather conditions, detailed forecasts and location-based weather updates through an intuitive mobile interface.

As the main developer on this project, I was responsible for the core functionality, API integration and responsive design implementation. The application features real-time weather data, multiple forecast views and a carousel interface for browsing different cities. The project showcased modern mobile development practices using Dart and Android Studio with a focus on native Android performance.`,

  // Basic info
  category: "mobile",
  featured: true,
  status: "completed",
  year: "2024",
  duration: "4 months",

  // Links
  demoUrl: null, // Add if available
  githubUrl: null, // Add if available
  image: "/weatherapp.png",

  // Technologies - Updated for Dart/Android Studio
  tags: ["Dart", "Android Studio", "Flutter", "Weather API", "Mobile Development", "JSON", "Geolocation", "Android", "Material Design"],

  // Project story
  challenges: [
    "Integrating multiple weather APIs to provide comprehensive forecast data in a native Android environment",
    "Implementing responsive layouts that work seamlessly across different Android screen sizes and densities",
    "Managing state between different forecast views (3-hourly, 5-day) using Dart's state management patterns",
    "Handling geolocation permissions and fallback mechanisms for location-based weather on Android",
    "Creating smooth carousel transitions for city browsing while maintaining native performance",
    "Ensuring accurate temperature unit conversion between Celsius and Fahrenheit with proper localization"
  ],

  learnings: [
    "Advanced Dart programming and Flutter framework for mobile development",
    "Android Studio development environment and native Android features",
    "API integration techniques and error handling in mobile applications",
    "State management patterns in Dart for complex user interactions",
    "Geolocation services implementation on Android platform",
    "Material Design principles and mobile UI/UX best practices",
    "Team collaboration and version control in mobile development projects"
  ],

  features: [
    "Real-time weather data display with current temperature and conditions",
    "Location-based weather updates using Android GPS services",
    "Interactive city search with carousel browsing interface",
    "3-hourly detailed weather forecasts with precipitation data",
    "5-day weather outlook with high/low temperatures",
    "Temperature unit toggle between Celsius and Fahrenheit",
    "Material Design UI optimized for Android devices",
    "Weather condition icons and visual indicators",
    "Air quality information display",
    "Multiple screen navigation (home, about, contact)"
  ],

  techDetails: {
    frontend: "Built with Dart and Flutter framework using Android Studio as the primary IDE. Implemented Material Design components for native Android look and feel. Used Flutter widgets for responsive layouts and smooth animations across different screen sizes.",
    
    backend: "Integrated with external weather APIs using Dart's HTTP package to fetch real-time weather data, forecasts and location-based information. Implemented JSON serialization and state management using Flutter's built-in state management solutions.",
    
    deployment: "Developed as a native Android application with focus on performance optimization and platform-specific features. Implemented proper Android lifecycle management and memory optimization.",
    
    testing: "Conducted extensive testing using Android Studio's testing tools across different Android devices and API levels. Performed unit testing in Dart and integration testing for API functionality and user interactions."
  },

  // Additional project context
  teamRole: "Main Developer & Technical Lead",
  teamSize: 6,
  responsibilities: [
    "Core application architecture and development using Dart/Flutter",
    "Weather API integration and data management",
    "Material Design implementation and responsive layouts", 
    "Search functionality and carousel feature development",
    "Cross-device compatibility testing on Android platform"
  ]
} as const;
