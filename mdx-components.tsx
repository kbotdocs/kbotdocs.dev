import type {MDXComponents} from "mdx/types";
import {Link} from "react-transition-progress/next";
import Icon from "@/components/common/Icon";
import CodeBlock from "@/components/common/CodeBlock";
import Keys from "@/components/common/Keys";
import InlineCode from "@/components/common/InlineCode";
import Image from "next/image";
import {Table, Thead, Tbody, Tr, Th, Td} from "@/components/common/Table";
import AppCompat from "@/components/common/AppCompat";
import Noti from "@/components/common/Noti";
import Feature from "@/components/common/Feature";
import FeatureStatusNoti from "@/components/common/FeatureStatusNoti";
import MileStone from "@/components/common/MileStone";
import Details from "@/components/common/Details";
import Tab from "@/components/common/Tab";
import RequestMethod from "@/components/common/RequestMethod";
import Endpoint from "@/components/common/Endpoint";
import Param from "@/components/common/Param";
import ParamList from "@/components/common/ParamList";
import ParamItem from "@/components/common/ParamItem";
import Learn from "@/components/common/Learn";
import LearnRoadmap from "@/components/common/LearnRoadmap";

export const mdxComponents: MDXComponents = {
  h2({children, ...p}) {
    return (
      <h2 {...p}>
        {children}
      </h2>
    );
  },
  h3({children, ...p}) {
    return (
      <h3 className="sub" {...p}>
        {children}
      </h3>
    );
  },
  h4({children, ...p}) {
    return (
      <h4 className="sub" {...p}>
        {children}
      </h4>
    );
  },
  p({children}) {
    return (<p className={"align-middle [&_.katex]:text-rel-base"}>{children}</p>)
  },
  Mark({children}) {
    return (<mark className={"bg-yellow text-gray-800 font-bold"}>{children}</mark>);
  },
  Section({className, children, ...p}) {
    return (<section className={`flex flex-col gap-[24px] w-full leading-normal section ${className || ""}`} {...p}>{children}</section>);
  },
  ol({children, ...p}) {
    return (<ol className={"flex flex-col gap-[2px]"} {...p}>{children}</ol>);
  },
  ul({children, ...p}) {
    return (<ul {...p}>{children}</ul>);
  },
  li({children, ...p}) {
    return (<li className={"leading-normal [&_ul]:ml-[1rem] [&_ol]:ml-[1rem]"} {...p}>{children}</li>);
  },
  img({className, src, alt, width, height, ...p}) {
    return (
      (alt === "icon") ?
        <Icon className={"w-[.75rem] h-[.75rem] stroke-inherit-text"} icon={src as Icons}/>
        :
        <div
          className={`flex justify-center items-center w-full h-fit [&:has([alt$="#lightonly"])]:dark:hidden [&:has([alt$="#darkonly"])]:hidden [&:has([alt$="#darkonly"])]:dark:flex`}>
          <Image src={src as string} alt={alt || ""} width={768} height={768}
                 className={`rounded-lg max-w-full w-auto h-auto ${className || ""}`} {...p}/>
        </div>
    )
  },
  Image({className, src, alt, ...p}) {
    return (
      <div
        className={`flex justify-center items-center w-full h-fit [&:has([alt$="#lightonly"])]:dark:hidden [&:has([alt$="#darkonly"])]:hidden [&:has([alt$="#darkonly"])]:dark:flex`}>
        <Image src={src as string} alt={alt || ""} width={768} height={768}
               className={`rounded-lg max-w-full w-auto h-auto ${className || ""}`} {...p}/>
      </div>
    )
  },
  code({children, className}) {
    const sthlMatch = /language-(\w+)/.exec(className || "");
    const keyMatch = /key-(.*)/.exec(children as string || "");
    const content = String(children).replace(/\n$/, "");

    if (sthlMatch) {
      return (<CodeBlock language={sthlMatch[1]} content={content}/>);
    }
    if (keyMatch) {
      const keys = keyMatch[1].split("$");
      return (<Keys windows={keys[0] ? keys[0].split("_") : null} mac={keys[1] ? keys[1].split("_") : null}/>);
    }

    return (<InlineCode>{children}</InlineCode>);
  },
  InlineCode({children}) {
    return (<InlineCode>{children}</InlineCode>);
  },
  del(p) {
    return (<del className="text-noimportance" {...p}></del>);
  },
  Table({children, className, ...p}) {
    return (<Table {...p}>{children}</Table>);
  },
  Thead({children, ...p}) {
    return (<Thead {...p}>{children}</Thead>);
  },
  Tbody({children, ...p}) {
    return (<Tbody {...p}>{children}</Tbody>);
  },
  Tr({children, ...p}) {
    return (<Tr {...p}>{children}</Tr>);
  },
  Th({children, ...p}) {
    return (<Th {...p}>{children}</Th>);
  },
  Td({children, ...p}) {
    return (<Td {...p}>{children}</Td>);
  },
  Blockquote({children}) {
    return (
      <blockquote
        className={`flex flex-col gap-[16px] w-full overflow-auto p-[8px_12px] rounded-[6px] leading-normal md:p-[12px_16px] bg-layer1`}>
        {children}
      </blockquote>
    );
  },
  Noti({children, ...p}) {
    return (<Noti {...p}>{children}</Noti>);
  },
  a({children, href, ...p}) {
    if (href?.startsWith("/")) {
      return (<Link href={href} className={"break-all"}>{children}</Link>);
    } else {
      return <a href={href} className={"break-all"} {...p}>{children}</a>
    }
  },
  Dl({children, className, ...p}) {
    return (
      <dl
        className={`md:grid md:grid-cols-[200px_auto] ${className || ""}`} {...p}>{children}</dl>);
  },
  Dt({children, className, ...p}) {
    return (<dt className={`pt-[12px] pb-[6px] font-bold md:pb-[12px] md:border-b md:border-default last-of-type:border-none ${className || ""}`} {...p}>{children}</dt>);
  },
  Dd({children, className, ...p}) {
    return (
      <dd
        className={`flex items-center pt-[6px] pb-[12px] border-b border-default last-of-type:border-none md:pt-[12px] ${className || ""}`} {...p}>{children}</dd>);
  },
  AppCompat({...p}) {
    return (<AppCompat {...p}/>);
  },
  Feature({children, ...p}) {
    return (<Feature {...p}>{children}</Feature>);
  },
  FeatureStatusNoti({...p}) {
    return (<FeatureStatusNoti {...p} />);
  },
  MileStone({...p}) {
    return (<MileStone {...p} />);
  },
  Details({children, ...p}) {
    return (<Details {...p}>{children}</Details>);
  },
  Tab({children, ...p}) {
    return (<Tab {...p}>{children}</Tab>);
  },
  TabItem({className, children, ...p}) {
    return (<section className={`flex flex-col gap-[24px] p-[20px] w-full leading-normal section`} {...p}>{children}</section>);
  },
  RequestMethod({...p}) {
    return (<RequestMethod {...p}/>);
  },
  Endpoint({children, ...p}) {
    return (<Endpoint {...p}>{children}</Endpoint>);
  },
  Param({children, ...p}) {
    return (<Param {...p}>{children}</Param>);
  },
  ParamList({children, ...p}) {
    return (<ParamList {...p}>{children}</ParamList>);
  },
  ParamItem({children, ...p}) {
    return (<ParamItem {...p}>{children}</ParamItem>);
  },
  Learn({children, ...p}) {
    return (<Learn {...p}/>);
  },
  LearnRoadmap({children, ...p}) {
    return (<LearnRoadmap {...p}>{children}</LearnRoadmap>);
  }
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  }
}