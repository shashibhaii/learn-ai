import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://ai-learning-portal.com";

export default function sitemap(): MetadataRoute.Sitemap {
    // Static routes
    const routes = [
        "",
        "/dashboard",
        "/courses",
        "/profile",
        "/login",
        "/community",
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: "daily" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Dynamic docs routes
    const docsDir = path.join(process.cwd(), "app/docs");
    let docRoutes: MetadataRoute.Sitemap = [];

    try {
        const items = fs.readdirSync(docsDir, { withFileTypes: true });

        docRoutes = items
            .filter((item) => item.isDirectory())
            .map((dir) => ({
                url: `${BASE_URL}/docs/${dir.name}`,
                lastModified: new Date(),
                changeFrequency: "weekly" as const,
                priority: 0.7,
            }));
    } catch (error) {
        console.error("Error reading docs directory:", error);
    }

    return [...routes, ...docRoutes];
}
