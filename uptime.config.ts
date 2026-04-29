import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: "Forch.me Status",
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
      name: 'Seerr',
      method: 'GET',
      target: 'https://request.forch.me',
      checkProxy: 'worker://weur',
      tooltip: 'Media request tool',
      statusPageLink: 'https://request.forch.me',
      expectedCodes: [200],
      timeout: 10000,
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
  ],
  notification: {
    // Configure your preferred notification channel here
  },
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
