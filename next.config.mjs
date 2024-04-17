
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export default {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.modules.push(dirname(fileURLToPath(import.meta.url)));
    return config;
  },
  
};