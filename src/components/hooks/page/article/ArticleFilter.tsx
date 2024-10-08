import React from 'react';

import { ArticleFilterProps } from '@/utils/types';

import Image from 'next/image';

import { baseUrl } from '@/utils/config';

import Link from 'next/link';

import { truncateText } from "@/utils/truncateText";

import { formatDistanceToNowInIndonesian } from "@/utils/formatDistance";

const ArticleFilter: React.FC<ArticleFilterProps> = ({ topItem }) => {
    return (
        <div className="featured">
            <div className="img">
                <Image src={baseUrl + topItem.thumbnail.url} alt={topItem.title} width={Number(topItem.thumbnail.width)} height={Number(topItem.thumbnail.height)} loading='lazy' quality={100} />
            </div>

            <div className="text">
                <div className="center">
                    <span>Article Update</span>
                    <span>{formatDistanceToNowInIndonesian(new Date(topItem.createdAt))}</span>
                </div>

                <h1>{topItem.title}</h1>
                <p>{truncateText(topItem.desc, 20)}</p>

                <div className="btn">
                    <Link href={`/article/${topItem.slug}`}>Lihat Selengkapnya</Link>
                </div>
            </div>
        </div>
    );
};

export default ArticleFilter;