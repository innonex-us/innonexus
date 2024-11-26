import { FaTwitter, FaGithub } from "react-icons/fa"; // Import specific icons
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          {/* Add a logo or placeholder */}
          <div className="flex items-center">
            <FaGithub size={20} className="mr-2" />
            <span className="font-bold">InnoNexus</span>
          </div>
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              <FaTwitter className="inline mr-1" />
              InnoNexus
            </a>
            . Hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </a>
            . The source code is available on{" "}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              <FaGithub className="inline mr-1" />
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
