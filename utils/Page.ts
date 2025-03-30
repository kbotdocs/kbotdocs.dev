import {compileMDX} from "next-mdx-remote/rsc";
import {mdxComponents} from "@/mdx-components";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";

export interface Param {
  slug: string[];
}

export interface pageParams {
  params: Promise<Param>;
}

export async function getPage(slug: string[]) {
  const data = await fetch(`https://docs.kbotdocs.dev/${slug.join("/")}/page.mdx`, {
    method: "GET",
  });
  if (data.status === 404) throw new Error(`Invalid Path Parameters: ${slug.join("/")}`);
  const text = await data.text();

  return await compileMDX<DocMetadata>({
    source: text,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeSlug, rehypeKatex],
        remarkPlugins: [remarkGfm, remarkMath, remarkFrontmatter, remarkMdxFrontmatter],
      }
    }
  });
}