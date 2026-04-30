import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      crawlDelay: 1,
    },
    sitemap: "https://vercel.com/gileb64375-5584s-projects/v0-sketchpad-shadcn-ui-theme/sitemap.xml",
  }
}