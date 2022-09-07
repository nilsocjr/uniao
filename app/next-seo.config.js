import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function SEO() {
  const title = "União - Retífica, Mecânica e Auto Center";
  const desc =
    "União - Retífica, Mecânica e Auto Center, serviços completos para seu carro em Guarapuava.";
  const ogImgRelativePath = "/og.png"; // 1200x6000

  const siteURL = "https://retificauniao.com.br";
  const ogImageURL = `${siteURL}${ogImgRelativePath}`;
  const pathName = useRouter().pathname;
  const pageURL = pathName === "/" ? siteURL : siteURL + pathName;
  const twitterHandle = "@retificauniao";
  const siteName = "União - Retífica, Mecânica e Auto Center";

  return (
    <NextSeo
      title={title}
      description={desc}
      canonical={pageURL}
      openGraph={{
        type: "website",
        locale: "pt_BR",
        url: pageURL,
        title,
        description: desc,
        images: [
          {
            url: ogImageURL,
            width: 1200,
            height: 630,
            alt: "União - Retífica, Mecânica e Auto Center",
          },
        ],
        site_name: siteName,
      }}
      twitter={{
        handle: twitterHandle,
        site: twitterHandle,
        cardType: "summary_large_image",
      }}
      additionalMetaTags={[
        {
          property: "author",
          content: title,
        },
      ]}
      additionalLinkTags={[
        {
          rel: "icon",
          href: `${siteURL}/favicon.ico`,
        },
        // {
        //   rel: "manifest",
        //   href: "/site.manifest",
        // },
      ]}
    />
  );
}
