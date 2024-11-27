import type { Metadata } from "next";
import 'react-photo-view/dist/react-photo-view.css';
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Footer from "@/Components/layout/Footer";
import { baseURL } from "@/config/api/api";
import { IMenu } from "@/config/interfaces/interfaces";
import Head2 from "@/Components/layout/Header/Head2";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import GoogleAdManager from "@/Components/adManager/GoogleAdManager"
import RITSadHead from "@/Components/RITSad/RITSadHead"
import BDAxisHead from "@/Components/BDAxisAd/BDAxisAdHead"

export const metadata: Metadata = {
  title: "আজকের পত্রিকা | Bd News, Bangla News, অনলাইন খবর | Ajker Patrika",
  description:
    "শীর্ষস্থানীয় অনলাইন নিউজ পোর্টাল আজকের পত্রিকা, যেখানে সর্বশেষ খবর, জাতীয়, Bd news, বিশ্ব, রাজনীতি, অর্থনীতি, খেলাধুলা, বিনোদন, ব্যবসা, প্রযুক্তি, স্বাস্থ্য ও লাইফস্টাইলসহ শীর্ষ সংবাদ (Latest news) এক জায়গায়।",
  keywords: [
    "Breaking news",
    "Entertainment news",
    "in-depth analysis",
    "live & update sports news",
    "viral videos",
    "expert opinions on politics",
    "world news",
    "Factcheck",
    "news updates",
    "explore trending stories",
    "local news",
    "সর্বশেষ খবর",
    "বাংলাদেশ ও বিশ্ব",
    "সংবাদ",
    "রাজনীতি",
    "বাংলাদেশের সর্বশেষ খবর",
    "বিশ্ব সংবাদ",
    "অর্থনীতি",
    "খেলাধুলা",
    "বিনোদন",
    "ব্যবসা",
    "প্রযুক্তি",
    "স্বাস্থ্য",
    "লাইফস্টাইল",
    "Patrika",
    "Ajker Patrika",
    "ajker",
    "আজকের পএিকা",
    "দৈনিক আজকের পত্রিকা",
    "ajker potrika",
    "ajkerpatrika",
    "ajker potrika online",
    "eajkerpatrika",
    "ajkerpotrika",
    "e ajker potrika",
    "দৈনিক আজকের পত্রিকা ই পেপার",
    "daily ajker potrika",
    "আজকের পত্রিকা ই পেপার",
    "ই আজকের পত্রিক",
    "dainik ajker potrik",
    "epaper ajker patrik",
    "ajkerpatrika epaper",
    "আজকের পত্রিকা অনলাইন",
    "ajker patrika online",
    "ajker patrika epaper",
    "ajker potrica",
    "ajker potrika e paper",
    "e ajker patrika",
    "potrika",
    "daily ajker patrika",
    "দৈনিক আজকের পএিকা",
    "dainik patrika",
    "eajkerpotrika",
    "ajker pottrika",
    "Aj Ker Potrika",
    "Ajke Protrika",
    "দৈনিকআজকেরপত্রিকা",
    "পেপার আজকের",
    "আচ কের পোতরিকা",
    "Ajker Potreka",
    "Ajker",
    "papar",
    "Ajker.Pottreka",
    "Ajkerpothrika",
    "আজকের পোততিরিকা",
    "আজকের পোতরিকা",
    "আজকের পত্রপত্রিকা",
    "আজকেরপতিকা",
    "Aajker Potrika",
    "Agkar pratika",
    "agker potrica",
    "aj ker protika",
    "Aj Ker Pthika Agami Kalker",
    "Ajger Portika",
    "AJKAL DONEK PTTRIKA",
    "Ajkar portrica",
    "Ajkar potreka",
    "AJkar ptireka",
    "Ajkar ptrdqa",
    "Ajkar ptrek",
    "দৈনিক আজকের সংবাদ ই পেপার",
    "ajker paper",
    "দৈনিক আজকের সংবাদ",
    "আজকের জাতীয় দৈনিক পত্রিকা",
    "পতিকা",
    "আজকের আবহাওয়া",
    "আজকের খবর",
    "আজকের আবহাওয়া",
    "আজকের খেলা",
    "আজকের ইফতারের সময়",
    "আজকের খেলার খবর",
    "আজকের সকল পত্রিকা"
  ]


};
export const revalidate = 60;

const fetchMenus = async () => {
  const res = await fetch(`${baseURL}/api/v2/menus`);
  return res.json();
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menusRes = await fetchMenus();
  const menus: IMenu[] = menusRes.results;
  const menuItems: IMenu | undefined = menus.find(
    (menu) => menu.slug === "menu"
  );
  const drawerItems: IMenu | undefined = menus.find(
    (menu) => menu.slug === "big-menu"
  );
  const footerItems: IMenu | undefined = menus.find(
    (menu) => menu.slug === "footer-menu"
  );

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Fz1m40_dJ8TkrssPMHgrlR8GtHQh9S1iue-UJQZim_Q"
        />
        <meta name="google-site-verification" content="0IqXoeBYMIu5nDYrJVA5XLkFXLhHm5LQ9mkqry1WZcE" />

        {/* <!--Third party add script start--> */}
        {/* <Script type="text/javascript"
          src="//cdn.bilsyndication.com/w/6481958a-fee4-4f4b-ab29-50774d9ca985.js" async
          defer></Script>
        <Script id="wapTag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
        var wapTag = wapTag || { };wapTag.gdprShowConsentToolButton =
          false;
      `,
          }}
        ></Script>
        <Script type="text/javascript"
          src="//cdn.bilsyndication.com/ata/adv/6481958a-fee4-4f4b-ab29-50774d9ca985.js" async
          defer></Script> */}

        {/* <ThirdPartyAd/> */}
        {/* <!--Third party add script end--> */}

        {/* <!--google analytics--> */}
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6ZVH2R86GG"
        ></Script>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
	gtag('set', 'page_path', urlCategoryDetails);
	gtag('set', 'page_location', window.location.href);

  gtag('config', 'G-6ZVH2R86GG');
 
  gtag('config', 'UA-193676574-1');
        `,
          }}

        /* gtag config */
        />
        {/* <!--google analytics--> */}

        {/* <!-- Google Tag_Manger Code --> */}

        <GoogleTagManager gtmId="GTM-W6ZKJD6" />

        {/* <!-- Google Tag_Manger Code --> */}

        {/* <!-- Google Adsense Code --> */}
        <Script
          id="adsbygoogle-init"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5261331564832462`}
          crossOrigin="anonymous"
        ></Script>
        {/* <!-- Google Adsense Code --> */}

        {/* <!-- Facebook Pixel Code --> */}
        <Script
          id=""
          dangerouslySetInnerHTML={{
            __html: `
          !function(f,b,e,v,n,t,s)
{if(f.fbq) return;
n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '789528345043763'); 
fbq('track', 'PageView');
        `,
          }}
        />



        {/* <!-- Google AdSense Code --> */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5261331564832462"
          crossOrigin="anonymous"
          type="bc74e4e88bd29c17d6c867f0-text/javascript"
        ></Script>
        {/* <!-- End AdSense Code --> */}

        {/* <!-- Start GPT Tag --> */}
        {/* <Script
          async
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
          type="079ffc4384ca9def493adb38-text/javascript"
        ></Script> */}
        <GoogleAdManager />
        {/* <FutureAdHead/> */}
        <RITSadHead />
        <BDAxisHead />

        {/* <!-- End GPT Tag --><!-- Google ad head Code --> */}
      </head>
      <body>
        <AntdRegistry>
          {/* <Header menuItems={menuItems} drawerItems={drawerItems} /> */}
          <Head2 menuItems={menuItems} drawerItems={drawerItems} />
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-W6ZKJD6"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
          <noscript>
            <img
              height="1"
              width="1"
              src="https://www.facebook.com/tr?id=789528345043763&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>
          {/* <!-- End Facebook Pixel Code --> */}
          {children}

          {/* <!-- /22653932740/Anchor_Ad_Home -->*/}
          {/* <div id="div-gpt-ad-1709463204211-0">
            <Script
              id="div-gpt-ad-1709463204211-0"
              dangerouslySetInnerHTML={{
                __html: `googletag.cmd.push(function() { googletag.display('div-gpt-ad-1709463204211-0'); });`,
              }}
            ></Script>
          </div> */}
          {/* <!-- /22653932740/Anchor_Ad_Home -->*/}

          {/*  <!-- /22653932740/Popup_HP -->*/}
          {/* <div id="div-gpt-ad-1696947680958-0">
            <Script
              id="div-gpt-ad-1696947680958-0"
              dangerouslySetInnerHTML={{
                __html: ` googletag.cmd.push(function() { googletag.display('div-gpt-ad-1696947680958-0'); });`,
              }}
            ></Script>
          </div> */}
          {/*  <!-- /22653932740/Popup_HP -->*/}

          <Footer footerItems={footerItems} />
        </AntdRegistry>
      </body>
    </html>
  );
}
