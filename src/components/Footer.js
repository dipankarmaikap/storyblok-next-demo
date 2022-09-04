export default function Footer() {
  return (
    <footer className="p-4">
      <div className="flex justify-between font-serif text-lg">
        <p>
          Powered by{" "}
          <a
            className="underline"
            href="https://www.storyblok.com/"
            target="_blank"
            rel="noreferrer"
          >
            StoryBlok
          </a>
        </p>
        <div className="social flex space-x-4">
          <a
            className="underline"
            href="https://twitter.com/maikap_dipankar"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            className="underline"
            href="https://github.com/dipankarmaikap"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
