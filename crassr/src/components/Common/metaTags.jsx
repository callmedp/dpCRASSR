import React from 'react';
import { metaContent } from 'utils/meta';
import {Helmet} from "react-helmet"

const MetaTags = () => {

    const { description, ogTitle, ogDescription } = metaContent

    return (
        <Helmet>
            <meta name="description" content={description} />
            <meta name="og:title" content={ogTitle} />
            <meta name="og:description" content={ogDescription} />
        </Helmet>
    )
}

export default MetaTags;