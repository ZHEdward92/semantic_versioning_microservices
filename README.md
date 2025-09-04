# semantic_versioning_microservices
Automated semantic versioning using CI pipeline to each microservice

## Monorepo Structure with Semantic-Release
```
/monorepo-root
│
├── services/
│   ├── service-a/ 
│   │   ├── src/
│   │   ├── tests/
│   │   ├── package.json         # Includes semantic-release config
│   │   └── .releaserc.json      # Optional: service-specific config
│   ├── service-b/
│   └── ...
│
├── .github/
│   └── workflows/
│       ├── ci.yml               # Build/test pipeline
│       └── release.yml          # Semantic-release per service
│
├── tools/
│   └── detect-changes.js        # Script to detect changed services
└── README.md
```

## Create a New Service
- Create a new service folder under services.
- Go into the new service folder and bring up integrated terminal.
- Install necessary packages
    - express (base)
    - semantic-release (and necessary plugins)
```bash
npm install express
npm install --save-dev semantic-release
npm install --save-dev @semantic-release/changelog
npm install --save-dev @semantic-release/commit-analyzer
npm install --save-dev @semantic-release/git
npm install --save-dev @semantic-release/release-notes-generator
npm install --save-dev @semantic-release/exec
```

