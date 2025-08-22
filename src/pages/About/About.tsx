import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      delay: 100, // values from 0 to 3000, with step 50ms
      duration: 300, // values from 0 to 3000, with step 50ms
    });
  }, []);

  return (
    <section
      id="about"
      className="w-full max-[1220px]:px-20 max-[520px]:px-10 gap-16  dark:bg-neutral-950 dark:bg-opacity-10 bg-white px-56 flex flex-col py-24 items-center"
    >
      <div
        className="relative z-[1] flex cursor-default items-center justify-center text-center"
        data-aos="fade-up"
      >
        <h3 className="text-5xl absolute dark:text-zinc-200 max-[845px]:text-3xl max-[550px]:text-2xl text-zinc-600">
          Um pouco sobre mim
        </h3>
        <h3 className="text-9xl opacity-5 dark:text-zinc-50 max-[845px]:text-7xl max-[550px]:text-5xl">
          SOBRE MIM
        </h3>
      </div>
      <div
        className="relative gap-10"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="about_text max-w-[900px] max-[1220px]:text-sm text-xl max-[430px]:w-[250px] gap-5 flex flex-col justify-around">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Desenvolvedor Front-end com mais de{" "}
            <span className="font-semibold">
              1 ano de experiência
            </span>{" "}
            na criação e otimização de interfaces
            web responsivas, acessíveis e de alta
            performance.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Possuo sólida experiência com{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              React
            </span>
            ,{" "}
            <span className="font-semibold text-yellow-600 dark:text-yellow-400">
              JavaScript
            </span>
            ,{" "}
            <span className="font-semibold text-blue-500 dark:text-blue-300">
              TypeScript
            </span>
            ,{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              PHP
            </span>{" "}
            e{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              Node.js
            </span>
            , atuando com foco em usabilidade,
            SEO, boas práticas de código e
            melhoria contínua.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            Sou comprometido com a entrega de
            soluções escaláveis e eficientes,
            participando ativamente do
            desenvolvimento, refatoração e
            manutenção de projetos diversos no
            setor de marketing digital.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Tenho facilidade para colaborar com
            equipes multidisciplinares, aplicando{" "}
            <span className="font-semibold">
              metodologias ágeis
            </span>{" "}
            e versionamento com{" "}
            <span className="font-semibold">
              Git
            </span>{" "}
            e{" "}
            <span className="font-semibold">
              SVN
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
