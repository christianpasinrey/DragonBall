import { routes } from './router/routes' // Ajusta esta ruta según tu estructura de proyecto

export function generateRobotsTxt() {
  let robotsTxt = "User-agent: *\n"

  routes.forEach(route => {
    if (route.meta && route.meta.disallow) {
      robotsTxt += `Disallow: ${route.path}\n`
    } else {
      robotsTxt += `Allow: ${route.path}\n`
    }
  })

  robotsTxt += "Sitemap: https://tudominio.com/sitemap.xml\n"
  console.log(robotsTxt)
  return robotsTxt
}