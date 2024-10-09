import React, { Fragment } from 'react';

// import Script from 'next/script';

export const metadata = {
    title: "Merveille Apparel",
    description: "Mervielle adalah brand fashion yang menghadirkan koleksi busana dengan konsep modern, chic, dan minimalis. Setiap item dirancang untuk memberikan tampilan yang elegan dan effortless, cocok untuk segala suasana, mulai dari casual hingga semi-formal. Mervielle menggabungkan kualitas bahan premium dengan desain yang terinspirasi dari tren global, menciptakan pakaian yang tidak hanya stylish, tetapi juga nyaman dipakai. Dengan fokus pada detail dan siluet yang pas, Mervielle memastikan setiap produk memiliki sentuhan eksklusif, menjadikan merek ini pilihan tepat bagi mereka yang ingin tampil fashionable dengan gaya yang tak lekang oleh waktu.",
    author: "rineta",
    faviconUrl: "/favicon.ico",
    keywords: "Fashion modern,Minimalis chic,Busana elegan,Kualitas premium,Stylish dan nyaman,Desain timeless,Pakaian kasual dan semi-formal,Brand fashion lokal,Gaya effortless,Fashion trend global",
    // verification: process.env.NEXT_PUBLIC_SITE_VERIFICATION,
    // verification_bing: process.env.NEXT_PUBLIC_SITE_VERIFICATION_BING
};

const siteUrl = "https://";
const faviconUrl = `${siteUrl}/favicon.ico`;
const canonicalUrl = `${siteUrl}/`;

export default function Head() {
    return (
        <Fragment>
            <title>{metadata.title}</title>
            <meta charSet="UTF-8" />
            <meta name="version" content="1.0" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={metadata.description} />
            <meta property="og:description" content={metadata.description} />
            <meta property="og:type" content="property & designer" />
            {/* <meta name="google-site-verification" content={metadata.verification} /> */}
            <meta property="og:title" content={metadata.title} />
            <meta name="author" content={metadata.author} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={faviconUrl} />
            <meta name="keywords" content={metadata.keywords} />
            <meta name="googlebot" content="index, follow" />
            <meta name="theme-color" content="#ffffff" />
            <meta name="robots" content="index, follow" />
            <link rel="icon" href={faviconUrl} type="image/x-icon" sizes="any" />
            <link rel="icon" href={faviconUrl} type="image/svg+xml" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href={faviconUrl} />
            <link rel="shortcut icon" href={faviconUrl} type="image/x-icon" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="canonical" href={canonicalUrl} />
        </Fragment>
    );
}