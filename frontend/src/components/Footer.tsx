import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex items-center"
          >
            <LogoIcon />
            CloudOps Tools Hub
          </a>
          <p className="text-muted-foreground mt-4 max-w-md">
            Una collezione di strumenti DevOps e di sicurezza open source per
            sviluppatori e professionisti IT.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Seguici</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/aintnier/security-tools-hub"
              target="_blank"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              GitHub
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              Discord
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              Community
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Strumenti</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#tools"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              Password Generator
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#tools"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              URL Shortener
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#tools"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              AI Image Generator
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Informazioni</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#features"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              Features
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#about"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              Chi Siamo
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#faq"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Supporto</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/aintnier/security-tools-hub/blob/main/README.md"
              target="_blank"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              Documentazione
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/aintnier/security-tools-hub/issues"
              target="_blank"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              Bug Report
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/aintnier/security-tools-hub/discussions"
              target="_blank"
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              Discussioni
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3 className="text-muted-foreground">
          &copy; 2025 CloudOps Tools Hub - Progetto{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/aintnier/security-tools-hub"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Open Source
          </a>
        </h3>
      </section>
    </footer>
  );
};
