import "../../globals.css";
import SocialLinks from "../SocialLinks";

function Footer() {
  return (
    <footer className="bg-neutral-900 mt-auto min-h-[150px] px-14 text-white flex justify-between items-center appearing">
      <section>
        <h1 className="text-lg">
          © {new Date().getFullYear()} | Franco Cuellar
        </h1>
      </section>

      <SocialLinks />
    </footer>
  );
}

export default Footer;
