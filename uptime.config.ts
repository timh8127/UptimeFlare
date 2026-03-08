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
      target: 'https://request.forch.me',
      tooltip: 'Jellyfin Media Server',
      statusPageLink: 'https://request.forch.me',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'home_assistant',
      name: 'Home Assistant',
      method: 'GET',
      target: 'https://ha.forch.me',
      tooltip: 'Home Assistant',
      statusPageLink: 'https://ha.forch.me',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'immich',
      name: 'Immich',
      method: 'GET',
      target: 'https://immich.forch.me',
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
