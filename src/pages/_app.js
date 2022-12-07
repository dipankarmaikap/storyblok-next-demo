import "~/styles/globals.css";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { Fragment } from "react";
import initStoryblok from "~/storyblok/initStoryblok";
import { isPreviewEnv, storyblokAcessKey } from "~/utils/variables";
function MyApp({ Component, pageProps, privateKey }) {
  if (isPreviewEnv) {
    // console.log("loading initStoryblok on client");
    initStoryblok(privateKey);
  }
  return (
    <Fragment>
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
