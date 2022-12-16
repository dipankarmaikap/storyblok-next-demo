import "~/styles/globals.css";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { Fragment } from "react";
import { isPreviewEnv, storyblokAcessKey } from "~/utils/variables";
import Head from "next/head";
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
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify({
              storyblokAcessKey: privateKey,
            })}`,
          }}
        />
      </Head>
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
