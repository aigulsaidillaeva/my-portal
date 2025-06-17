import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import Button from "../Button/Button";
import Translate, { translate } from "@docusaurus/Translate";

const FeatureList = [
  {
    situationText: translate({
      id: "feature.situation.balalyk",
      message: "идем в ",
    }),
    title: translate({
      id: "feature.title.balalyk",
      message: "Balalyk",
    }),
    imageUrl: "https://balalyk.edu.gov.kg/accelerator/assets/logo.e89c4357.svg",
    description: translate({
      id: "feature.description.balalyk",
      message: ".",
    }),
    link: "/doc/docs/kindergarten/balalyk/",
    // link: "https://asula.edu.gov.kg/home",
    external: true,
  },
  {
    situationText: translate({
      id: "feature.situation.asula1",
      message: "идем в ",
    }),
    title: translate({
      id: "feature.title.asula1",
      message: "Asula портал",
    }),
    imageUrl: "https://asula.edu.gov.kg/357418f83d487ade6dee.png",
    description: translate({
      id: "feature.description.asula1",
      message: "Национальный образовательный портал.",
    }),
    link: "/docs/other/license/",
    external: true,
  },
  {
    situationText: translate({
      id: "feature.situation.school",
      message: "зачисляемся ",
    }),
    title: translate({
      id: "feature.title.school",
      message: "Школу",
    }),
    imageUrl: "https://1mektep.edu.gov.kg/_next/static/media/logo-second.30c5b046.svg",
    description: translate({
      id: "feature.description.school",
      message: "Информационная система приема детей в школы...",
    }),
    link: "/docs/school/1mektep/about/",
    external: true,
  },
  {
    situationText: translate({
      id: "feature.situation.work",
      message: "идем работать ",
    }),
    title: translate({
      id: "feature.title.educationSystem",
      message: "в систему образования",
    }),
    imageUrl: "https://stem.edu.gov.kg/build/assets/kampa-BrSqPcge.svg",
    description: translate({
      id: "feature.description.educationSystem",
      message: "Национальный образовательный портал.",
    }),
    link: "https://asula.edu.gov.kg/home",
    external: true,
  },
  {
    situationText: translate({
      id: "feature.situation.asula2",
      message: "идем в ",
    }),
    title: translate({
      id: "feature.title.asula2",
      message: "Asula портал",
    }),
    imageUrl: "https://2020.edu.gov.kg/img/logo2.png",
    description: translate({
      id: "feature.description.asula2",
      message: "Национальный образовательный портал.",
    }),
    link: "https://asula.edu.gov.kg/home",
    external: true,
  },
  {
    situationText: translate({
      id: "feature.situation.ibilim",
      message: "идем в ",
    }),
    title: translate({
      id: "feature.title.ibilim",
      message: "Asula портал",
    }),
    imageUrl: "https://ibilim.edu.gov.kg/images/logo.png",
    description: translate({
      id: "feature.description.ibilim",
      message: "Национальный образовательный портал.",
    }),
    link: "https://asula.edu.gov.kg/home",
    external: true,
  },
  {
    situationText: translate({
      id: "feature.situation.ds",
      message: "идем в ",
    }),
    title: translate({
      id: "feature.title.ds",
      message: "Asula портал",
    }),
    imageUrl: "https://ds.edu.gov.kg/img/moe_logo_ru.d854d0ae.svg",
    description: translate({
      id: "feature.description.ds",
      message: "Национальный образовательный портал.",
    }),
    link: "https://asula.edu.gov.kg/home",
    external: true,
  },
];

function Feature({
  Svg,
  imageUrl,
  title,
  description,
  link,
  situationText,
  external = false,
}) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.card}>
        <div className={styles.cardInner}>
          <div className={styles.cardIcon}>
            {Svg ? (
              <Svg className={styles.featureSvg} role="img" />
            ) : (
              <img src={imageUrl} alt={title} className={styles.featureImg} />
            )}
          </div>
          <div className={styles.cardContent}>
            <p className={styles.situation}>{situationText}</p>
            <Heading as="h3" className={styles.cardTitle}>
              {title}
            </Heading>
            <p className={styles.cardDescription}>{description}</p>
            {external ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Button className={styles.cardButton}>
                  <Translate id="feature.button">Перейти</Translate>
                </Button>
              </a>
            ) : (
              <Link to={link}>
                <Button className={styles.cardButton}>
                  <Translate id="feature.button">Перейти</Translate>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="index_title">
          <p className="index-title__subtitle">
            <Translate id="homepage.features.subtitle">
              Государственные услуги и сервисы
            </Translate>
          </p>
          <h3 className="index-title__title index-title__title_uppercase">
            <div className="index-title__line"></div>
            <Translate id="homepage.features.title">
              для жизненных ситуаций
            </Translate>
          </h3>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
