'use client'
import Script from 'next/script'
import React from 'react'

function DetailsAd1ThirdParty() {
    return (
        <><div className="futureads" style={{ width: '728px', height: '90px', display: 'inline-block' }}
            data-ad-slot="pw_43461"></div>
            <Script
                async
                id='addScriptDetails1'
                type="text/javascript"
                strategy="afterInteractive"
                onLoad={() => {
                    (window.wapTag.Init = window.wapTag.Init || []).push(function () { window.wAPITag.display("pw_43461") })
                }}
            >

            </Script></>

    )
}

export default DetailsAd1ThirdParty