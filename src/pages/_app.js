import "~/styles/globals.css";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { Fragment } from "react";
import Head from "next/head";
import { isPreviewEnv, storyblokAcessKey } from "~/utils/variables";
import dynamic from "next/dynamic";
const LoadStoryblok = dynamic(() => import("~/storyblok/LoadStoryblok"));
function MyApp({ Component, pageProps, privateKey }) {
  let title = `${isPreviewEnv ? "D" : "P"} ${"-"} Nextjs Storyblok Demo`;
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="NextJS storyblok fully optimized demo with preview and production env"
        />
        <meta
          name="keywords"
          content="NextJS, Storyblok, JavaScript, Headless"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {isPreviewEnv && <LoadStoryblok storyblokAcessKey={privateKey} />}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}
MyApp.getInitialProps = async (ctx) => {
  return { privateKey: isPreviewEnv ? storyblokAcessKey : "some-fake-key" };
};
export default MyApp;
