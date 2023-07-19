"use client";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

function SocialLinks() {
  return (
    <section className="flex gap-2">
      <a
        href="
          https://portfolio-franco-ic.vercel.app/
          "
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 transition-all"
      >
        <LanguageIcon className="text-3xl" />
      </a>

      <a
        href="https://www.linkedin.com/in/franco-cuellar/
          "
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 transition-all"
      >
        <LinkedInIcon className="text-3xl" />
      </a>

      <a
        href="
          https://github.com/Franco-IC
          "
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-zinc-700  transition-all"
      >
        <GitHubIcon className="text-3xl" />
      </a>

      <a
        href="mailto:francoit1999@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-amber-300  transition-all"
      >
        <EmailIcon className="text-3xl" />
      </a>
    </section>
  );
}

export default SocialLinks;
