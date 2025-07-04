import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import Button from "../Button/Button";
import Translate, { translate } from "@docusaurus/Translate";

const FeatureList = [
//БАЛАЛЫК
  {
    situationText: translate({
      id: "feature.situation.balalyk",
      message: "идем в ",
    }),
    title: translate({
      id: "feature.title.balalyk",
      message: "Балалык",
    }),

    imageUrl:  '/doc/img/logos/balalyk.svg',
    description: translate({
      id: "feature.description.balalyk",
      message: "Реестр дошкольных образовательных организаций",
    }),
    link: "/doc/docs/kindergarten/balalyk/",
    external: true,
  },
  //ВАУЧЕР
  {
    situationText: translate({
      id: "feature.situation.balalyk",
      message: "получить  ",
    }),
    title: translate({
      id: "feature.title.balalyk",
      message: "Ваучер",
    }),
    imageUrl:  '/doc/img/logos/balalyk.svg',
    description: translate({
      id: "feature.description.balalyk",
      message: "Реестр дошкольных образовательных организаций",
    }),
    link: "/doc/docs/kindergarten/voucher",
    external: true,
  },
 
    //МЕКТЕП
  {
    situationText: translate({
      id: "feature.situation.school",
      message: "зачисляемся ",
    }),
    title: translate({
      id: "feature.title.school",
      message: "Мекеп",
    }),
    imageUrl:  '/doc/img/logos/mektep.svg',
    description: translate({
      id: "feature.description.school",
      message: "Информационная система для зачисления детей в школы Кыргызской Республики. ",
    }),
    link: "/docs/school/1mektep/about/",
    external: true,
  }, 
  //Аттестат
  {
    situationText: translate({
      id: "feature.situation.school",
      message: "Найти  ",
    }),
    title: translate({
      id: "feature.title.school",
      message: "Күбөлүк",
    }),
    imageUrl:  '/doc/img/logos/kuboluk.svg',
    description: translate({
      id: "feature.description.school",
      message: "Реестр аттестатов и свидетельств ",
    }),
    link: "/doc/docs/school/attestat/",
    external: true,
  }, 
    //МУГАЛИМ
 {
    situationText: translate({
      id: "feature.situation.work",
      message: " ",
    }),
    title: translate({
      id: "feature.title.educationSystem",
      message: "Мугалим",
    }),
    imageUrl:  '/doc/img/logos/mugalim.svg',

    description: translate({
      id: "feature.description.educationSystem",
      message: "Национальный резерв учителей",
    }),
    link: "/doc/docs/school/mugalim/",
    external: true,
  },
   
   //ВУЗ
  {
    situationText: translate({
      id: "feature.situation.asula2",
      message: "идем в ",
    }),
    title: translate({
      id: "feature.title.asula2",
      message: "ВУЗ",
    }),
    imageUrl:  '/doc/img/logos/vuz.svg',
    description: translate({
      id: "feature.description.asula2",
      message: "Информационная система “Абитуриент онлайн - ВУЗ” предназначена для тех, кто желает обучаться в высших образовательных организациях Кыргызской Республики .",
    }),
    link: "/doc/docs/vuz/abiturient-vuz/",
    external: true,
  },
   //СПУЗ
  {
    situationText: translate({
      id: "feature.situation.asula2",
      message: "Колледж ",
    }),
    title: translate({
      id: "feature.title.asula2",
      message: "Прием в СПУЗ",
    }),
    imageUrl:  '/doc/img/logos/spuz.svg',
    description: translate({
      id: "feature.description.asula2",
      message: "Информационная система “Абитуриент онлайн - СПУЗ”",
    }),
    link: "/doc/docs/vuz/abiturient-spuz/",
    external: true,
  },
     //Диплом
  {
    situationText: translate({
      id: "feature.situation.asula2",
      message: "Диплом ",
    }),
    title: translate({
      id: "feature.title.asula2",
      message: "Реестр дипломов",
    }),
    imageUrl:  '/doc/img/logos/diplom.svg',
    description: translate({
      id: "feature.description.asula2",
      message: "Информационная система “Абитуриент онлайн - СПУЗ”",
    }),
    link: "/doc/docs/vuz/diplom/",
    external: true,
  },
   //АСУЛА
  {
    situationText: translate({
      id: "feature.situation.asula1",
      message: " ",
    }),
    title: translate({
      id: "feature.title.asula1",
      message: "АСУЛА",
    }),
    imageUrl:  '/doc/img/logos/asula.svg',
    description: translate({
      id: "feature.description.asula1",
      message: "Автоматизированная система управления лицензированием и аккредитацией образовательных организаций Кыргызской Республики.",
    }),
    link: "/doc/docs/other/asula/",
    external: true,
  },
  //Мир знаний
  {
    situationText: translate({
      id: "feature.situation.ibilim",
      message: " ",
    }),
    title: translate({
      id: "feature.title.ibilim",
      message: "Мир знаний",
    }),
    imageUrl: "https://ibilim.edu.gov.kg/images/logo.png",
    description: translate({
      id: "feature.description.ibilim",
      message: "Образовательная платформа для учеников начальных классов",
    }),
    link: "https://ibilim.edu.gov.kg/",
    external: true,
  },
    //E-kundoluk

  {
    situationText: translate({ 
      id: "feature.situation.ds",
      message: " ",
    }),
    title: translate({
      id: "feature.title.ds",
      message: "Э-дневник",
    }),
    imageUrl:  '/doc/img/logos/eKundoluk.svg',
    description: translate({
      id: "feature.description.ds",
      message: "Электронный дневник для школьников",
    }),
    link: "https://kundoluk.edu.gov.kg/account/login",
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
