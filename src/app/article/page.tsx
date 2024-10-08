"use client";

import React, { useState, useEffect } from 'react'

import { fetchArticle } from '@/api/fetchArticle'

import { articleProps } from "@/utils/types"

import ArticleItem from "@/components/hooks/page/article/ArticleItem";

import ArticleFilter from "@/components/hooks/page/article/ArticleFilter";

export default function Article() {
    const [article, setArticle] = useState<articleProps[]>([]);

    useEffect(() => {
        fetchArticle().then(setArticle);
    }, []);

    const topItem = article.slice(0, 1);

    return (
        <section className='article'>
            <div className="article__container container">

                {topItem.map((item) => (
                    <ArticleFilter key={item.id} topItem={item} />
                ))}

                <div className="content">
                    {article.map((item) => (
                        <ArticleItem key={item.id} article={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
