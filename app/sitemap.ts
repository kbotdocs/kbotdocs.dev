import {MetadataRoute} from "next";
import {Docs} from "@/constants/docs";

export default function sitemap(): MetadataRoute.Sitemap {
  let sitemapArr: MetadataRoute.Sitemap = [{
    url: "https://kbotdocs.dev",
    lastModified: new Date()
  }];

  Object.keys(Docs).forEach(e => {
    sitemapArr.push({
      url: `https://kbotdocs.dev${e}`,
      lastModified: new Date()
    });
  });

  return sitemapArr;
}