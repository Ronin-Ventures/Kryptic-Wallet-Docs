import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get Started
          </Link>
        </div>
        <div className="hero__cards__container">
          <div className="hero__card">
            <h2> Easy To Use</h2>
            <p>
              Kryptic Wallet was designed from the bottom up to be simple to
              use, whether you're a user looking to send, receive, and stake
              tokens or a developer looking to integrate a wallet to a Dapp.
            </p>
          </div>
          <div className="hero__card">
            <h2> User First</h2>
            <p>
              Even without having to worry about integrating a wallet, creating
              a Dapp is challenging. We've simplified integration so you can
              focus on what's important.
            </p>
          </div>
          <div className="hero__card">
            <h2> Focus on What Matters</h2>
            <p>
              Even without having to worry about integrating a wallet, creating
              a Dapp is challenging. We've simplified integration so you can
              focus on what's important.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
      <HomepageHeader />
    </Layout>
  );
}
