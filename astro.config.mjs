import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://eledoce.github.io/hidalgo-web-site/',
  base: '/hidalgo-web-site/',
})
