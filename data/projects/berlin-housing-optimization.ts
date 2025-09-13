export const berlinHousingOptimization = {
  id: "berlin-housing-optimization",
  title: "Beyond Price: A Multi-Factor Machine Learning Model for Affordable Housing Location Optimization in Berlin",
  description: "Bachelor thesis project developing machine learning models and interactive platform to identify optimal affordable housing locations in Berlin using 93K+ rental records",
  longDescription: `Developed a comprehensive machine learning platform for affordable housing optimization in Berlin as part of my Bachelor thesis in Digital Business & Data Science. The project addresses Germany's persistent housing affordability crisis by creating data-driven tools that go beyond simple price comparisons to consider quality of life, infrastructure access, and socioeconomic factors.

The research involved analyzing 93,248 Berlin rental records spanning 2007-2023, integrating multiple data sources including government statistics, OpenStreetMap amenity data, and transportation networks. I implemented and compared eight different machine learning algorithms, with XGBoost achieving optimal performance (R² = 0.509, RMSE = €0.789/sqm).

The project culminated in a fully functional web platform that translates complex machine learning insights into an accessible tool for housing seekers, urban planners, and policymakers. The thesis received a grade of 87/100, demonstrating both technical excellence and practical applicability.`,
  image: "/projects/berlin-housing-platform.jpg",
  tags: ["Python", "Next.js", "TypeScript", "XGBoost", "Random Forest", "FastAPI", "Pandas", "Scikit-learn", "Leaflet.js", "Machine Learning", "Data Science", "Urban Analytics", "PostgreSQL", "OpenStreetMap API", "Kaggle API"],
  category: "web",
  featured: true,
  status: "completed",
  year: "2025",
  duration: "4 months",
  challenges: [
    "Integrating heterogeneous data sources from government APIs, OpenStreetMap, and housing platforms while maintaining data quality and consistency",
    "Handling 93K+ rental records with complex spatial and temporal relationships, requiring sophisticated feature engineering and outlier detection",
    "Balancing model performance with interpretability - making complex XGBoost predictions understandable for non-technical stakeholders",
    "Creating an intuitive user interface that makes advanced machine learning accessible to diverse user groups (housing seekers, planners, policymakers)",
    "Optimizing platform performance to handle real-time predictions and interactive map visualizations with large datasets",
    "Addressing Berlin's unique housing market dynamics including rent control policies, gentrification patterns, and post-reunification development"
  ],
  learnings: [
    "Advanced machine learning model comparison - empirically evaluated 8 algorithms (XGBoost, Random Forest, Neural Networks, etc.) and learned when to use each approach",
    "Spatial data science and urban analytics - integrated geospatial analysis with machine learning using tools like GeoPandas and spatial autocorrelation techniques",
    "Full-stack development with modern frameworks - built production-ready applications using Next.js, TypeScript, and FastAPI with proper error handling and optimization",
    "Data engineering at scale - developed robust ETL pipelines handling multiple APIs, implemented caching strategies, and managed data quality across diverse sources",
    "Research methodology and academic writing - conducted systematic literature review, designed controlled experiments, and communicated complex technical concepts clearly",
    "Real-world problem solving - translated abstract housing economics theory into practical tools that address actual urban challenges and policy needs"
  ],
  features: [
    "Interactive map visualization with district-level affordability metrics and color-coded housing recommendations",
    "Real-time housing price prediction using optimized XGBoost model with confidence intervals and explanation",
    "Comprehensive search filters including budget, size, amenities, and quality of life preferences",
    "Machine learning model comparison dashboard showing performance metrics across 8 different algorithms",
    "District statistics integration displaying demographics, crime rates, transportation access, and amenity density",
    "Feature importance analysis explaining which factors most influence housing affordability in different areas",
    "Mobile-responsive design ensuring accessibility across devices with optimized loading performance",
    "Public transportation integration showing U-Bahn, S-Bahn, and bus accessibility scores for each location"
  ],
  techDetails: {
    frontend: "Built with Next.js 14 and TypeScript for type-safe, server-side rendered React application. Implemented interactive mapping using Leaflet.js with custom overlays for district boundaries and property markers. Used modern CSS-in-JS styling with responsive design principles and accessibility compliance. Integrated Chart.js for data visualizations and implemented progressive web app features for mobile optimization.",
    backend: "Developed RESTful API using FastAPI with Python, providing endpoints for ML predictions, geospatial data processing, and real-time property filtering. Implemented XGBoost model serving with in-memory caching for fast inference times. Used Pandas and NumPy for data processing, Scikit-learn for model training and evaluation, and integrated multiple external APIs (Berlin Open Data, OpenStreetMap Overpass, Kaggle) with proper rate limiting and error handling.",
    deployment: "Deployed frontend on Vercel with automatic CI/CD from GitHub, utilizing edge functions for optimal performance. Backend deployed with containerized architecture supporting auto-scaling. Implemented proper environment management, secrets handling, and monitoring. Used JSON and GeoJSON files for data storage with CDN optimization for large datasets.",
    testing: "Comprehensive testing approach including unit tests for ML models using cross-validation techniques, API endpoint testing with FastAPI TestClient, and user acceptance testing with housing professionals and potential residents. Implemented statistical significance testing for model comparisons and spatial validation metrics for geographic predictions."
  },
  demoUrl: "https://affordable-housing-berlin.vercel.app/",
  githubUrl: null // Academic project - repository may be available upon request
} as const;
