"use client";

import React, { useEffect, useState } from 'react';

import { articleProps } from '@/utils/types';

import { fetchArticle } from "@/api/fetchArticle";

import { useParams } from "next/navigation";

import ArticleHeader from '@/components/hooks/page/article/slug/ArticleHeader';

import ContentRenderer from '@/components/hooks/page/article/slug/ContentRender';

import "@/components/sass/page.scss";

import { baseUrl } from "@/utils/config";

import Image from 'next/image';

export default function ArticleDetails() {
    const [article, setArticle] = useState<articleProps | null>(null);
    const { slug } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchArticle();
            const currentBlog = data.find((article: articleProps) => article?.slug === slug);
            setArticle(currentBlog || null);
        };
        fetchData();
    }, [slug]);

    return (
        <section className='article__details'>
            <div className="articleDetails__container container">
                <div className="components">
                    <div className="banner">
                        {
                            article?.thumbnail && <Image src={baseUrl + article?.thumbnail.url} alt='banner' width={Number(article?.thumbnail.width)} height={Number(article?.thumbnail.height)} loading='lazy' quality={100} />
                        }
                    </div>
                    <ArticleHeader title={article?.title} />

                    <div className="content">
                        {article?.content && article.content.map((block, index: number) => (
                            <ContentRenderer key={index} block={block} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
