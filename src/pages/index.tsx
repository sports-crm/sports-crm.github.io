import * as React from "react"

import {DefaultLayout} from "../layouts";

import * as styles from './index.module.scss';

// markup
const IndexPage = () => {
  return <DefaultLayout>
    <main className={styles.section}>
      <h1 className={styles.title}>Sports Club Relationship Manager</h1>
      <h2 className={styles.subtitle}>
        Welcome to Sports Club Relationship Manager, a portfolio project inspired by the LightBend Academy's Reactive
        Barbecue.
      </h2>
      <p>
        Based on experience from captaining and coaching hockey teams, playing cricket and football, and working with the
        committee running a hockey club, Sports CRM could be a tool for managing the relationships between a sports club
        and its members.
      </p>
      <p>
        This is a portfolio project, where I can experiment technologies that I am not able to at work.
        The application I develop for a living is built on the Salesforce Lightning Platform, with a Salesforce
        first approach to all new development. Coming from a Java SaaS development background, I know there is a whole
        world of alternate, saner technologies.This is my chance to continue to develop with these technologies and to
        expand my knowledge, beyond Salesforce.
      </p>
      <p>
        Some of things I am going to experiment with are Domain Driven Design, Reactive Architectures, Kubernetes, modern
        JVM based technologies and the Go language.
      </p>
    </main>
  </DefaultLayout>
}

export default IndexPage
