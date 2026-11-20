import { MetadataRoute } from "next";
import { properties } from "@/data/properties";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://temerproperties.com";

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about-us",
    "/properties-standard-list",
    "/half-map-properties-list",
    "/construction-update",
    "/our-team",
    "/sales-officer",
    "/job-portal",
    "/events",
    "/blog-list",
    "/contact",
    "/contact-us-2",
    "/privacy-policy",
    "/terms-of-use",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route.includes("properties") ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.includes("properties") ? 0.9 : 0.7,
  }));

  // Project detail dynamic routes
  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Property detail dynamic routes
  const propertyRoutes: MetadataRoute.Sitemap = properties.map((p) => ({
    url: `${baseUrl}/properties/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Blog dynamic routes
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...propertyRoutes, ...blogRoutes];
}
