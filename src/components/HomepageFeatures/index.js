import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import Button from "../Button/Button";
import Translate, { translate } from "@docusaurus/Translate";

const FeatureList = [
  {
    situationText: "идем в ",
    title: "Balalyk",
    imageUrl: "https://balalyk.edu.gov.kg/accelerator/assets/logo.e89c4357.svg",
    description: "Национальный образовательный портал.",
    link: "https://asula.edu.gov.kg/home",
    external: true,
  },
  {
    situationText: "идем в ",
    title: "Asula портал",
    imageUrl: "https://asula.edu.gov.kg/357418f83d487ade6dee.png",
    description: "Национальный образовательный портал.",
    link: "https://asula.edu.gov.kg/home",
    external: true,
  },
  {
    situationText: " зачесляемся ",
    title: "Школу",
    imageUrl:
      "https://1mektep.edu.gov.kg/_next/static/media/logo-second.30c5b046.svg",
    description: "Информационная система приема детей в школы...",
    link: "https://asula.edu.gov.kg/home",
    external: true,
  },
  {
    situationText: "идем работать ",
    title: " в систему оброзования",
    imageUrl: "https://stem.edu.gov.kg/build/assets/kampa-BrSqPcge.svg",
    description: "Национальный образовательный портал.",
    link: "https://asula.edu.gov.kg/home",
    external: true,
  },
  {
    situationText: "идем в ",
    title: "Asula портал",
    imageUrl: "https://2020.edu.gov.kg/img/logo2.png",
    description: "Национальный образовательный портал.",
    link: "https://asula.edu.gov.kg/home",
    external: true,
  },
  {
    situationText: "идем в ",
    title: "Asula портал",
    imageUrl: "https://ibilim.edu.gov.kg/images/logo.png",
    description: "Национальный образовательный портал.",
    link: "https://asula.edu.gov.kg/home",
    external: true,
  },
  {
    situationText: "идем в ",
    title: "Asula портал",
    imageUrl: "https://ds.edu.gov.kg/img/moe_logo_ru.d854d0ae.svg",
    description: "Национальный образовательный портал.",
    link: "https://asula.edu.gov.kg/home",
    external: true,
  },
  // {
  //   situationText: "зачесляемся ",
  //   title: "школу",
  //   Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
  //   description: "Информационная система приема детей в школы...",
  //   link: "/school",
  // },
  // {
  //   situationText: "идем работать ",
  //   title: " в систему оброзования",
  //   Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
  //   description: "Информационная система «Мугалим»...",
  //   link: "/teacher",
  // },
  // {
  //   situationText: "идем работать ",
  //   title: " в систему оброзования",
  //   Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
  //   description: "Информационная система «Мугалим»...",
  //   link: "/teacher",
  // },
  // {
  //   situationText: "идем работать ",
  //   title: " в систему оброзования",
  //   Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
  //   description: "Информационная система «Мугалим»...",
  //   link: "/teacher",
  // },
  // {
  //   situationText: "идем работать ",
  //   title: " в систему оброзования",
  //   Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
  //   description: "Информационная система «Мугалим»...",
  //   link: "/teacher",
  // },
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
                <Button className={styles.cardButton}>Перейти</Button>
              </a>
            ) : (
              <Link to={link}>
                <Button className={styles.cardButton}>Перейти</Button>
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
            Государственные услуги и сервисы
          </p>
          <h3 className="index-title__title index-title__title_uppercase">
            <div className="index-title__line"></div>
            для жизненных ситуаций
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
