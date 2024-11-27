import { baseURL } from "@/config/api/api";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import ajpIcon from "@/assets/images/social/ajpIcon.png";
dayjs.extend(utc);
dayjs.extend(timezone);
import { getStoryDate } from "@/utils";

var origin;

const getOtherHTML = (code) => {
  let htmlString =
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>Error</title>\n</head>\n<body style="font-family: Arial, sans-serif; text-align: center; margin: 50px;">\n';

  switch (code) {
    case 400:
      htmlString += '<h1 style="color: #FF6347;">400 Bad Request</h1>\n';
      htmlString +=
        "<p>It seems there was an issue with your request. This may be due to one of the following reasons: The URL path is not correct or does not match the expected format. The specific path does not contain a 20-character ID. The server failed to extract the ID from the path. Please review the URL and ensure it is correctly formed with the required information.</p>\n";
      break;

    case 404:
      htmlString += '<h1 style="color: #FF6347;">404 Not Found</h1>\n';
      htmlString +=
        '<p style="color: #777;">The requested resource could not be found on the server.</p>\n';
      htmlString +=
        '<p style="color: #777;">Please check the URL and try again.</p>\n';
      break;

    case 500:
      htmlString +=
        '<h1 style="color: #FF6347;">500 Internal Server Error</h1>\n';
      htmlString +=
        '<p style="color: #777;">An unexpected error occurred on the server.</p>\n';
      htmlString += '<p style="color: #777;">Please try again later.</p>\n';
      break;

    default:
      htmlString += '<h1 style="color: #FF6347;">Unexpected Error</h1>\n';
      htmlString +=
        '<p style="color: #777;">An unexpected error occurred.</p>\n';
      break;
  }

  htmlString += "</body>\n</html>";
  return htmlString;
};

function getDocument(storyInfo, webstory_slug, url) {
  return `<!DOCTYPE html>
    <html ⚡>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"/>
        <noscript>${getAmpBoilerplateNoScriptCSS()}</noscript>
        <style amp-boilerplate>${getAmpBoilerplateCSS()}</style>
        <style amp-custom>
        @font-face {
            font-family: 'ajp';
            src: url('/fonts/VarendraAP-Semibold_v7.ttf') format('woff2'),
                 url('/fonts/VarendraAP-Semibold_v7.ttf') format('woff');
            font-weight: 600;
          }
          amp-story {
            font-family: "ajp", sans-serif;
            color: #fff;
          }
            .full-image-layer {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3), transparent);
              z-index: 15; /* Ensures the gradient is on top of the image */
            }
          .container {
            width: 100%;
            position: absolute;
            bottom: 0;
            padding: 0px 40px;
            padding-bottom: 56px;
          }
            .date-container {
            margin-bottom: 20px;
            text-align: center;
            font-size: 20px;
            width: 100%;
            display: flex;
            justify-content: center;
                 
            }
            
            .date-container p {
            background-color: #efefef ;
            color: #000000;
          padding: 5px 10px;  
     font-weight: 700;
            }
           
          .title-container {
            border-top: 3px solid #faa61a;
            padding-top: 12px;
            width: 100%;
            text-align: center;
          }
            .first-title-conatiner{
                padding-top: 12px;
            width: 100%;
            text-align: center;
            }
            .first-story-title{

            font-size: 35px;
            line-height: 44px;
            color: #faa61a;
            }

          .top-left-icon {
          position: absolute !important;
          top: 20px !important;
          left: 20px !important;
          z-index: 10 !important;
        }

        amp-story-grid-layer{
        padding: 0px; !important;
        }

          .story-title {
            font-size: 30px;
            line-height: 44px;
            color: #fff;
          }
        </style>
        ${getMetadata(
          storyInfo?.results[0]?.title ||
            "আজকের পত্রিকা | সারা দেশের স্থানীয় দৈনিক",
          storyInfo?.results[0]?.title ||
            "সারা দেশের স্থানীয় দৈনিক' স্লোগান সংবলিত আজকের পত্রিকা'য় থাকছে দেশের ৬৪ জেলার ৪৯৫ উপজেলার খবর",
          storyInfo?.results[0]?.story_thumbnail?.meta?.download_url || "",
          storyInfo.path || "/",
          storyInfo.$createdAt || new Date().toISOString(),
          storyInfo.$updatedAt || new Date().toISOString(),
          webstory_slug,
          url
        )}
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
      </head>
      <body>
        <amp-story standalone
          title="ajker patrika"
          publisher="AMP tutorials"
          publisher-logo-src="assets/AMP-Brand-White-Icon.svg"
          poster-portrait-src="assets/cover.jpg">
          ${storyInfo?.results[0]?.web_gallery_images
            .map((item, index) => {
              return `<amp-story-page id="${item.id}" auto-advance-after="5s">

                                              
                  <amp-story-grid-layer template="vertical" class="top-left-icon">
    <amp-img src="https://images.ajkerpatrika.com/others/AJP-Icon.png" width="60" height="60" layout="fixed"></amp-img>
  </amp-story-grid-layer>
        
      
              <amp-story-grid-layer  template="fill">
                <amp-img src="${item?.image?.meta?.download_url}"
                    width="720" height="1280"
                    layout="responsive">
                </amp-img>
              </amp-story-grid-layer>
                            <amp-story-grid-layer template="fill" class="full-image-layer">
              </amp-story-grid-layer>

              <amp-story-grid-layer template="vertical">
                <div class='container'>

                   ${
                     index === 0
                       ? `<div class='date-container '> 
                <p animate-in="fly-in-bottom" animate-in-duration="1s" > ${
                  getStoryDate(
                    dayjs(storyInfo?.results[0]?.meta?.first_published_at),
                    true
                  ).split(",")[0]
                } </p>
                </div>`
                       : ""
                   }

                    ${
                      index === 0
                        ? `    <div class="first-title-conatiner">
                  <div>
                    <h1 class="first-story-title" animate-in="fly-in-bottom" animate-in-duration="1s">
                    ${item?.caption}
                    </h1>
                  </div>
                </div> `
                        : `    <div class="title-container">
                  <div>
                    <h1 class="story-title" animate-in="fly-in-bottom" animate-in-duration="1s">
                    ${item?.caption}
                    </h1>
                  </div>
                </div> `
                    }
             
                </div>
              </amp-story-grid-layer>
        
            </amp-story-page>`;
            })
            .join("")}
        </amp-story>
      </body>
    </html>`;
}

const getAmpBoilerplateNoScriptCSS = () => {
  return `<style amp-boilerplate>
      body {
        -webkit-animation: none;
        -moz-animation: none;
        -ms-animation: none;
        animation: none;
      }
    </style>`;
};

const getAmpBoilerplateCSS = () => {
  return `       
    body {
      -webkit-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
      -moz-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
      -ms-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
      animation: -amp-start 8s steps(1, end) 0s 1 normal both;
    }
      .amp-story-title{
      font-size: 10px;
      }
    @-webkit-keyframes -amp-start {
      from {
        visibility: hidden;
      }
      to {
        visibility: visible;
      }
    }
    @-moz-keyframes -amp-start {
      from {
        visibility: hidden;
      }
      to {
        visibility: visible;
      }
    }
    @-ms-keyframes -amp-start {
      from {
        visibility: hidden;
      }
      to {
        visibility: visible;
      }
    }
    @-o-keyframes -amp-start {
      from {
        visibility: hidden;
      }
      to {
        visibility: visible;
      }
    }
    @keyframes -amp-start {
      from {
        visibility: hidden;
      }
      to {
        visibility: visible;
      }
    }`;
};

const getMetadata = (title, desc, img, path2, created, updated, url) => {
  return `
    <link rel="canonical" href="${url}">
    <title>${title}</title>
    <meta name="title" content ="${title}" >
    <meta name="description" content="${desc}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${desc}">
    <meta property="og:url" content="${url}">
    <meta property="og:site_name" content="">
    <meta property="og:image" content="${img}">
    <meta property="og:type" content="article">
    <meta property="article:published_time" content="${created}">
    <meta property="article:modified_time" content="${updated}">
    <meta property="article:author" content="">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${desc}">
    <meta name="twitter:image" content="${img}">
    `;
};

const getElementAsString = (json) => {
  if (!json || typeof json !== "object") {
    return "";
  }

  if (json.nodeType === 3) {
    return json.text || "";
  } else if (json.nodeType === 1) {
    let htmlString = `<${json.nodeName.toLowerCase()}`;

    if (json.attributes) {
      for (const attributeName in json.attributes) {
        if (json.attributes.hasOwnProperty(attributeName)) {
          htmlString += ` ${attributeName.toLowerCase()}="${
            json.attributes[attributeName]
          }"`;
        }
      }
    }

    htmlString += ">";

    if (json.nodeName === "svg") {
      htmlString += json.innerHTML || "";
    } else if (json.childNodes && json.childNodes.length > 0) {
      json.childNodes.forEach((childJSON) => {
        const childHTML = getElementAsString(childJSON);
        htmlString += childHTML;
      });
    }

    htmlString += `</${json.nodeName.toLowerCase()}>`;

    return htmlString;
  } else {
    return "";
  }
};

export async function GET(req, { params }) {
  let url = new URL(req.url);
  origin = url.origin;

  const webstory_slug = params.path2;
  var status, body, statusText;

  if (webstory_slug) {
    let res = await fetch(
      `${baseURL}/api/v2/webstories/?webstory_slug=${webstory_slug}`,
      { next: { revalidate: 60 } }
    );
    if (res.status === 200) {
      try {
        let storyInfo = await res.json();

        const firstWebStoryObject = {
          meta: {
            type: "blog.BlogPageWebGalleryImage",
          },
          title: storyInfo?.results[0]?.title,
          image: {
            meta: {
              download_url:
                storyInfo?.results[0]?.story_thumbnail?.meta?.download_url,
            },
          },
          caption: storyInfo?.results[0]?.title,
        };
        if (storyInfo?.results[0]?.web_gallery_images) {
          storyInfo?.results[0]?.web_gallery_images?.unshift(
            firstWebStoryObject
          );
        }

        if (true) {
          status = 200;
          statusText = "Request Succussful";
          body = getDocument(storyInfo, webstory_slug, url);
        } else {
          status = 400;
          statusText = "Bad Request";
          body = getOtherHTML(400);
        }
      } catch (error) {
        status = 500;
        statusText = "Server Error";
        body = getOtherHTML(500);
      }
    } else if (res.status === 404) {
      status = 404;
      statusText = "Not Found";
      body = getOtherHTML(404);
    } else {
      status = 500;
      statusText = "Server Error";
      body = getOtherHTML(500);
    }
  } else {
    status = 400;
    body = "Bad Request";
    body = getOtherHTML(400);
  }
  return new Response(body, {
    status: status,
    statusText: statusText,
    headers: { "Content-Type": "text/html" },
  });
}
