import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../../constants/styles';
import { navLinks } from '../../constants';
import { menu, close } from '../../assets';
import { config } from '../../constants/config';

// ✅ Resume links
const viewUrl =
  'https://drive.google.com/file/d/1NmYtgO7PYepSC0Szl9u2n-r6MTTBzG3X/view?usp=sharing';
const downloadUrl =
  'https://drive.google.com/uc?export=download&id=1NmYtgO7PYepSC0Szl9u2n-r6MTTBzG3X';
  //'https://drive.google.com/file/d/1NmYtgO7PYepSC0Szl9u2n-r6MTTBzG3X/view?usp=sharing'

// ✅ Resume handler
const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();

  // Open resume in new tab
  window.open(viewUrl, '_blank');

  // Trigger download with filename
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = 'Trivendra-Kumar-resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll('section[id]');

      sections.forEach(current => {
        const sectionId = current.getAttribute('id');
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener('scroll', navbarHighlighter);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', navbarHighlighter);
    };
  }, []);

 return (
  <nav
    className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-5 ${
      scrolled ? "bg-primary" : "bg-transparent"
    }`}
  >
    <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-2 flex-shrink-0"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        {/* <img src={logo} alt="logo" className="h-9 w-9 object-contain" /> */}
        <p className="cursor-pointer text-[18px] font-bold text-white whitespace-nowrap">
          {config.html.title}
        </p>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden list-none flex-row gap-6 md:gap-8 md:flex flex-shrink">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`${
              active === nav.id ? "text-white" : "text-secondary"
            } cursor-pointer text-[16px] md:text-[18px] font-medium hover:text-white`}
          >
            {nav.id === "resume" ? (
              <a
                href={viewUrl}
                onClick={handleResumeClick}
                className="cursor-pointer"
              >
                {nav.title}
              </a>
            ) : (
              <a href={`#${nav.id}`}>{nav.title}</a>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="flex flex-1 items-center justify-end md:hidden">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="h-[28px] w-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
        >
          <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins cursor-pointer text-[16px] font-medium ${
                  active === nav.id ? "text-white" : "text-secondary"
                }`}
                onClick={() => setToggle(!toggle)}
              >
                {nav.id === "resume" ? (
                  <a
                    href={viewUrl}
                    onClick={handleResumeClick}
                    className="cursor-pointer"
                  >
                    {nav.title}
                  </a>
                ) : (
                  <a href={`#${nav.id}`}>{nav.title}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

};

export default Navbar;
