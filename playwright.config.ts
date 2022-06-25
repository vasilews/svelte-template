import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  testMatch: /\.e2e\.ts$/i,
  webServer: {
    command: 'npm run build && npm run preview',
    port: 3000,
  },
  use: {
    channel: 'chrome',
  },
}

export default config
