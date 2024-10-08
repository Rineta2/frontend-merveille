import React from 'react';
import Image from 'next/image';
import { ContentRendererProps } from '@/utils/types';

const ContentRenderer: React.FC<ContentRendererProps> = ({ block }) => {
    switch (block.type) {
        case "image":
            return (
                <Image
                    src={block.image!.url}
                    alt={block.image!.name}
                    width={block.image?.width || 500}
                    height={block.image?.height || 500}
                    quality={100}
                />
            );
        case "paragraph":
            return (
                <p>
                    {block.children?.map((child: { text: string }) => child.text).join("")}
                </p>
            );
        case "heading":
            return (
                <h1>
                    {block.children?.map((child: { text: string }) => child.text)}
                </h1>
            );
        case "list":
            return (
                <ul>
                    {block.children?.map((item: { text: string }, i: number) => (
                        <li key={i}>{item.text}</li>
                    ))}
                </ul>
            );

        case "quote":
            return (
                <blockquote>
                    {block.children
                        ?.map((child: { text: string }) => child.text)
                        .join("")}
                </blockquote>
            );
        default:
            return null;
    }
};

export default ContentRenderer;