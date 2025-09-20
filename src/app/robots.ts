import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://legali.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/dashboard/*",
          "/profile/*",
          "/attorneys/*",
          "/documents/*",
          "/appointments/*",
          "/messages/*",
          "/api/*",
          "/_next/*",
          "/admin/*",
          "/private/*",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/dashboard/*",
          "/profile/*",
          "/attorneys/*",
          "/documents/*",
          "/appointments/*",
          "/messages/*",
          "/api/*",
          "/_next/*",
          "/admin/*",
          "/private/*",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
