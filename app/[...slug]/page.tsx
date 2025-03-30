import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypeSlug from "rehype-slug";
import rehypeKatex from "rehype-katex";
import {Fragment, jsx, jsxs} from "react/jsx-runtime";
import {Param, pageParams, getPage} from "@/utils/Page";
import AppCompat from "@/components/common/AppCompat";
import MileStone from "@/components/common/MileStone";
import {Docs} from "@/constants/docs";
import {notFound} from "next/navigation";
import FeatureStatusNoti from "@/components/common/FeatureStatusNoti";

export function generateStaticParams() {
  let paramsArr: Param[] = [];

  const loopFn = (e: Doc) => {
    if (e.children) {
      e.children.map(loopFn);
    }
    if (e.path) {
      paramsArr.push({
        slug: e.path.replace("/", "").split("/")
      });
    }
  }

  Object.values(Docs).forEach(e => {
    e.docs.forEach(loopFn);
  });

  return paramsArr;
}

export async function generateMetadata({params}: pageParams) {
  const {slug} = await params;
  const {frontmatter} = await getPage(slug);

  const title = ((frontmatter.title === frontmatter.category) ? frontmatter.title : `${frontmatter.title} - ${frontmatter.category}`);

  return {
    title: title,
    openGraph: {
      images: {
        url: "https://kbotdocs.dev/metadata/og-image.png"
      },
      title: title,
    },
  };
}

export default async function Page({params}: pageParams) {
  const {slug} = await params;
  const {content, frontmatter} = await getPage(slug)
    .catch(_ => notFound());

  let compatNoti = null;
  let compatTable = null;
  let milestone = null;

  if (frontmatter.compat) {
    const compat_fetch = await fetch(`https://compat.kbotdocs.dev/${frontmatter.compat.data}.json`);
    const compat_data = await compat_fetch.json();

    if (frontmatter.compat.feature !== "*") {
      compatNoti = (
        <FeatureStatusNoti status={compat_data[frontmatter.compat.feature].status}/>
      );
    }

    compatTable = (
      <section className={`flex flex-col gap-[24px] w-full leading-normal section`}>
        <h2 id={"앱-호환성"}>앱 호환성</h2>
        {
          (frontmatter.compat.feature === "*") ?
            <AppCompat compats={Object.values(compat_data)}/>
            :
            <AppCompat compats={compat_data[frontmatter.compat.feature]}/>
        }
      </section>
    );
  }

  if (frontmatter.milestone) {
    milestone = <MileStone prev={frontmatter.milestone.prev} next={frontmatter.milestone.next} />
  }

  return (
    <>
      {compatNoti}
      <h1>{frontmatter.title}</h1>
      {content}
      {compatTable}
      {milestone}
    </>
  );
}