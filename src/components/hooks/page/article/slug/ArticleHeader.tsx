import React from 'react';
import Link from 'next/link';
import { House, Newspaper, Captions } from "lucide-react";

interface ArticleHeaderProps {
    title?: string;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ title }) => (
    <div className="top">
        <Link href="/"><House size={30} />Home</Link>/
        <Link href="/"><Newspaper size={30} />Article</Link>/
        <span><Captions size={30} />{title}</span>
    </div>
);

export default ArticleHeader;