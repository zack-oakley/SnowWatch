Development Time Log

Day 1 - 12/2/2025
Focus: Requirement gathering, planning, and task breakdown
Total Time: 1.5 Hours

Activities:
- Created initial repo structure
- Set up GitHub Projects Kanban board with columns (Backlog, Next, In Progress, Blocked, Done).
- Created V1-v3 tasks: 
Notes:
- N/A

------------------------------------------------------

Day 2 - 12/3/2025
Focus: Created flask API and Dockerfile
Total Time: 1.5 Hours

Activities:
- Created flask API
- Created Dockerfile
- Created fetch_weather.py to fetch weather data (called by flask API)

Notes:
- Can only make 10 free API calls a day

------------------------------------------------------

Day 3 - 12/5/2025
Focus: Quick test frontend to visualize data
Total Time: 1.5 Hours

Activities:
- Created folder scratch_frontend with an index.html page, main.js and styles.css file to visualize the API data 

Notes:
- Data successfully visualized. Next step is to implement a React frontend

------------------------------------------------------

Day 4 - 12/17/2-25
Focus: Frontend setup & backend integration (React + Vite)
Total Time: 1.5 Hours

Activities:
- Initialized React + TypeScript frontend using Vite
- Established frontend folder structure
- Implemented api/snowwatch.ts as a frontend API client to call the Flask backend
- Built initial App.tsx with
    - data fetching via useEffect
    - loading and error states
    - temporary JSON rendering for validation
- Configured vite.config.ts to proxy /weather requests to the Flask backend (localhost:8010), eliminating CORS issues during local development

Notes:
- End-to-end data flow verified: React (Vite) → Flask API → Open-Meteo
- Accessing http://localhost:5173 now successfully displays live JSON weather data when both the backend and Vite dev server are running

------------------------------------------------------

Day 5 - 
Focus: 
Total Time: TBD

Activities:
- 

Notes:
- TBD

------------------------------------------------------

Day 6 - 
Focus: 
Total Time: TBD

Activities:
- 

Notes:
- TBD

------------------------------------------------------