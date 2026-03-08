import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "Forch.me Status",
  links: [
    { link: 'https://jellyfin.forch.me', label: 'Jellyfin' },
  ],
}

const workerConfig: WorkerConfig = {
  monitors: [
    {
      id: 'jellyfin',
      name: 'Jellyfin',
      method: 'GET',
      target: 'https://jellyfin.forch.me',
      checkProxy: 'worker://weur',
      tooltip: 'Jellyfin Media Server',
      statusPageLink: 'https://jellyfin.forch.me',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'seerr',
      name: 'seerr',
      method: 'GET',
      target: 'https://request.forch.me',
      checkProxy: 'worker://weur',
      tooltip: 'Media request tool',
      statusPageLink: 'https://request.forch.me',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'home_assistant',
      name: 'Home Assistant',
      method: 'GET',
      target: 'https://ha.forch.me',
      checkProxy: 'worker://weur',
      tooltip: 'Home Assistant',
      statusPageLink: 'https://ha.forch.me',
      expectedCodes: [200],
      timeout: 10000,
      headers: 
      {
        'User-Agent': 'Uptimeflare',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIwNjAxNTU3MjI1YWE0NTg1OGUzOTRiMmFkODcwZWUwZCIsImlhdCI6MTc2NjI0ODI1OCwiZXhwIjoyMDgxNjA4MjU4fQ.B2F62mWS_FxicUbFfPjyE6dpslvP3XiNkf-0oslQbgo',
      }
     },
    {
      id: 'immich',
      name: 'Immich',
      method: 'GET',
      target: 'https://immich.forch.me',
      checkProxy: 'worker://weur',
      tooltip: 'Photo Library',
      statusPageLink: 'https://immich.forch.me',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'portainer',
      name: 'Portainer',
      method: 'GET',
      target: 'https://portainer.forch.me',
      checkProxy: 'worker://weur',
      tooltip: 'Docker Management',
      statusPageLink: 'https://portainer.forch.me',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'reitti',
      name: 'Reitti',
      method: 'GET',
      target: 'https://reitti.forch.me',
      checkProxy: 'worker://weur',
      tooltip: 'Location Tracker',
      statusPageLink: 'https://reitti.forch.me',
      expectedCodes: [200],
      timeout: 10000,
    },
  ],
  notification: {
    // Configure your preferred notification channel here
  },
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
