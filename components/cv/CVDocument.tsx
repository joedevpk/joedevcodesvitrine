/* eslint-disable */

import {
  Document,
  Page,
  Text,
  View,
} from "@react-pdf/renderer";

import { styles } from "./CVStyles";

export default function CVDocument() {
  return (
    <Document>

      <Page
        size="A4"
        style={styles.page}
      >

        {/* HEADER */}
        <View style={styles.header}>

          <Text style={styles.name}>
            JOE DEV
          </Text>

          <Text style={styles.role}>
            Full Stack Web Developer
          </Text>

          <Text style={styles.description}>
            Développeur web spécialisé dans
            la création d’applications modernes,
            performantes, sécurisées et premium
            avec Next.js, React et TypeScript.
          </Text>

        </View>

        {/* ABOUT */}
        <View style={styles.section}>

          <Text style={styles.sectionTitle}>
            À propos
          </Text>

          <Text style={styles.text}>
            Passionné par le développement moderne,
            je développe des expériences digitales
            élégantes et optimisées pour startups,
            entreprises et marques ambitieuses.
          </Text>

        </View>

        {/* SKILLS */}
        <View style={styles.section}>

          <Text style={styles.sectionTitle}>
            Compétences
          </Text>

          <View style={styles.skillsWrapper}>

            <Text style={styles.skill}>
              Next.js
            </Text>

            <Text style={styles.skill}>
              React.js
            </Text>

            <Text style={styles.skill}>
              TypeScript
            </Text>

            <Text style={styles.skill}>
              Tailwind CSS
            </Text>

            <Text style={styles.skill}>
              Node.js
            </Text>

            <Text style={styles.skill}>
              MongoDB
            </Text>

            <Text style={styles.skill}>
              PostgreSQL
            </Text>

            <Text style={styles.skill}>
              Framer Motion
            </Text>

          </View>

        </View>

        {/* EXPERIENCE */}
        <View style={styles.section}>

          <Text style={styles.sectionTitle}>
            Expérience
          </Text>

          <View style={styles.card}>

            <Text style={styles.cardTitle}>
              Développeur Full Stack Freelance
            </Text>

            <Text style={styles.cardText}>
              Création de plateformes web premium,
              dashboards modernes, portfolios,
              applications SaaS et expériences
              digitales performantes pour clients
              et entreprises.
            </Text>

          </View>

        </View>

        {/* FOOTER */}
        <View style={styles.footer}>

          <Text style={styles.footerText}>
            Kinshasa • RDC • Disponible pour missions freelance
          </Text>

        </View>

      </Page>

    </Document>
  );
}