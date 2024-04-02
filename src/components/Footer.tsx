import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = (): React.ReactElement => {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 bg-primary p-4 text-center text-white md:flex-row md:gap-0">
      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://lugo-tomas-portfolio.vercel.app/"
        className="flex items-center justify-center gap-2 underline underline-offset-4 transition-all hover:text-black hover:decoration-black"
      >
        Tomas Lugo
        <Image
          width={20}
          height={20}
          src="/dev/logo.png"
          alt="Lugo Tomas logo"
        />
      </a>
      <small>Copyright © 2022. All rights reserved.</small>
      <div className="flex items-center gap-3">
        <a
          className="transition-all hover:text-black"
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/MrSzasz"
        >
          <FaGithub size={25} />
        </a>
        <a
          className="transition-all hover:text-black"
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/lugotomasleandro"
        >
          <FaLinkedin size={25} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
