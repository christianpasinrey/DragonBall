import { generateRobotsTxt } from './src/generateRobots'
import fs from 'fs'
import path from 'path'

export default function robotsTxtPlugin() {
  return {
    name: 'generate-robots-txt',
    configureServer(server:any) {
      server.middlewares.use((req:any, res:any, next:any) => {
        if (req.url === '/robots.txt') {
          res.setHeader('Content-Type', 'text/plain')
          res.end(generateRobotsTxt())
        } else {
          next()
        }
      })
    },
    closeBundle() {
      const robotsTxt = generateRobotsTxt()
      const outDir = 'dist' // Asegúrate de que esto coincida con tu directorio de salida
      fs.writeFileSync(path.resolve(outDir, 'robots.txt'), robotsTxt)
    }
  }
}