import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useHistory } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import { translate } from "@docusaurus/Translate";
import styles from "./index.module.css";

export function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1"    className={styles.heroTitle}
>
          {translate({
            id: "homepage.header.title",
            message:
              "Портал инструкций по образовательным информационным системам",
          })}
        </Heading>
        <p className="hero__subtitle">
          {translate({
            id: "homepage.header.subtitle",
            message: "проще, чем кажется",
          })}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/school/1mektep/"
          >
            {translate({
              id: "homepage.header.button",
              message: "Инструкции",
            })}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const history = useHistory();

  useEffect(() => {
    const isAdmin = localStorage.getItem("admin_token");
    if (isAdmin) {
      history.push("/admin-dashboard");
    }
  }, [history]);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
