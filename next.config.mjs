// next.config.mjs

import { fileURLToPath } from 'url';
import { dirname } from 'path';

export default {
  // Andra konfigurationer...
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.modules.push(dirname(fileURLToPath(import.meta.url)));
    return config;
  },
};
