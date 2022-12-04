import { hideLoadingScreen } from '@/lib/utility';
import Head from 'next/head';
import { useEffect } from 'react';

export default function CustomHead({ title }) {

    useEffect(() => {
        hideLoadingScreen();
    })

    return (
        <>
            <Head>
                <title>{title + " - Ça peut toujours servir"}</title>

                <meta lang="fr"></meta>
                <meta charSet="utf-8"></meta>
                <meta content-type="text/html"></meta>
            </Head>

            <div id='loadingScreen'>
                <div className="lds-ripple"><div></div><div></div></div>
            </div>
        </>
    )
}