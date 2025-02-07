import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import Button from "../Button/Button";
import Translate, { translate } from "@docusaurus/Translate";

const FeatureList = [
  {
    situationText: "идем в ",
    title: "детский сад",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: "Информационная система приема детей в детские сады...",
    link: "/kindergarten",
  },
  {
    situationText: "зачесляемся ",
    title: "школу",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: "Информационная система приема детей в школы...",
    link: "/school",
  },
  {
    situationText: "идем работать ",
    title: " в систему оброзования",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: "Информационная система «Мугалим»...",
    link: "/teacher",
  },
  {
    situationText: "идем работать ",
    title: " в систему оброзования",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: "Информационная система «Мугалим»...",
    link: "/teacher",
  },
  {
    situationText: "идем работать ",
    title: " в систему оброзования",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: "Информационная система «Мугалим»...",
    link: "/teacher",
  },
  {
    situationText: "идем работать ",
    title: " в систему оброзования",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: "Информационная система «Мугалим»...",
    link: "/teacher",
  },
];

function Feature({ Svg, title, description, link, situationText }) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.card}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <p>{situationText}</p>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
          <Link to={link}>
            <Button children="Перейти" />
          </Link>
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
