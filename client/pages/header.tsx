import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export default function Header(): JSX.Element {
  const title = "Retífica União";
  const desc =
    "Retífica de motores, mecânica em geral, balanceamento e revisão com melhor preço, para sua viagem ser mais segura.";
  const ogImgRelativePath = "/og.png";

  const siteURL = "https://retificauniao.com.br";
  const ogImageURL = `${siteURL}${ogImgRelativePath}`;
  const pathName = useRouter().pathname;
  const pageURL = pathName === "/" ? siteURL : siteURL + pathName;
  const siteName = "Retifica Uniao";

  return (
    <NextSeo
      title={title}
      description={desc}
      canonical={pageURL}
      openGraph={{
        type: "website",
        locale: "pt-BR",
        url: pageURL,
        title,
        description: desc,
        images: [
          {
            url: ogImageURL,
            width: 1200,
            height: 630,
            alt: "Gourav.io - personal site and blog",
          },
        ],
        site_name: siteName,
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
