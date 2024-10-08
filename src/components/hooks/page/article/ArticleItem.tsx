import React from 'react';

import Image from 'next/image';

import Link from 'next/link';

import { baseUrl } from '@/utils/config';

import { ArticleItemProps } from '@/utils/types';

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
    return (
        <div className="box">
            <div className="img">
                <Image src={baseUrl + article.thumbnail.url} alt={article.title} width={Number(article.thumbnail.width)} height={Number(article.thumbnail.height)} loading='lazy' quality={100} />
            </div>

            <div className="text">
                <div className="category">
                    <span>{article.category}</span>
                    <span>{article.tanggal}</span>
                </div>

                <h1>{article.title}</h1>

                <div className="btn">
                    <Link href={`/article/${article.slug}`}>Lihat Selengkapnya</Link>
                </div>
            </div>
        </div>
    );
};

export default ArticleItem;