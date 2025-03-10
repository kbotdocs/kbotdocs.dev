import {HTMLAttributes} from "react";
import ArticleItem from "@/components/common/ArticleItem";

interface ArticleListProps extends HTMLAttributes<HTMLDivElement> {
    articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
    return (
        <div className={"flex flex-col"}>
            {
                articles.toReversed().map((article, i) => (
                    <ArticleItem article={article as Article} key={i} />
                ))
            }
        </div>
    );
}