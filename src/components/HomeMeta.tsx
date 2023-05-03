import { Helmet } from "react-helmet";

function HomeMeta() {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        Free YouTube Video Thumbnail Downloader | High Quality Images
      </title>
      <meta
        name="description"
        content="Stop wasting time searching for the perfect thumbnail. Our YouTube thumbnail downloader allows you to quickly and easily download high-quality images for your videos"
      />
      <meta name="robots" content="max-image-preview:large index,follow" />
    </Helmet>
  );
}

export default HomeMeta;
