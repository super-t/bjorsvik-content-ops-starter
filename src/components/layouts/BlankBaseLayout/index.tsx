import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';

export default function BlankBaseLayout(props) {
    const { page, site } = props;
    const { enableAnnotations = true } = site;
    const pageMeta = page?.__metadata || {};
    const metaDescription = page?.seo?.metaDescription || '';
    return (
        <div className={classNames('sb-page', pageMeta.pageCssClasses)} {...(enableAnnotations && { 'data-sb-object-id': pageMeta.id })}>
            <Head>
                <title>{page.title}</title>
                {metaDescription && <meta name="description" content={metaDescription} />}
                {site.themeColor && <meta name="theme-color" content={site.themeColor} />}
                <meta name="apple-mobile-web-app-title" content={site.titleSuffix || page.title} />
                {site.favicon && <link rel="icon" href={site.favicon} />}
                {site.appleTouchIcon && <link rel="apple-touch-icon" sizes="180x180" href={site.appleTouchIcon} />}
            </Head>
            {props.children}
        </div>
    );
}
