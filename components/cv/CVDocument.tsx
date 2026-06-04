```tsx
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
      <Page size="A4" style={styles.page}>

        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.name}>
            JOE DEV
          </Text>

          <Text style={styles.role}>
            Développeur Full Stack Web & Mobile
          </Text>

          <Text style={styles.description}>
            Développeur Full Stack spécialisé dans la conception et le
            développement d’applications web et mobiles modernes.
            Passionné par l’innovation numérique et les solutions
            logicielles performantes.
          </Text>
        </View>

        {/* ABOUT */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Profil Professionnel
          </Text>

          <Text style={styles.text}>
            Développeur Full Stack orienté résultats avec une forte
            capacité d’analyse, de conception et de réalisation de
            solutions numériques modernes.
          </Text>

          <Text style={styles.text}>
            Expérience dans le développement frontend, backend,
            bases de données, APIs REST, architecture logicielle,
            déploiement et maintenance d’applications professionnelles.
          </Text>
        </View>

        {/* SKILLS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Compétences Techniques
          </Text>

          <View style={styles.skillsWrapper}>
            <Text style={styles.skill}>React.js</Text>
            <Text style={styles.skill}>Next.js</Text>
            <Text style={styles.skill}>TypeScript</Text>
            <Text style={styles.skill}>JavaScript</Text>
            <Text style={styles.skill}>Flutter</Text>
            <Text style={styles.skill}>Dart</Text>
            <Text style={styles.skill}>Python</Text>
            <Text style={styles.skill}>Django</Text>
            <Text style={styles.skill}>DRF</Text>
            <Text style={styles.skill}>Node.js</Text>
            <Text style={styles.skill}>Express.js</Text>
            <Text style={styles.skill}>PostgreSQL</Text>
            <Text style={styles.skill}>MongoDB</Text>
            <Text style={styles.skill}>Git</Text>
            <Text style={styles.skill}>Docker</Text>
            <Text style={styles.skill}>Linux</Text>
          </View>
        </View>

        {/* EXPERIENCE */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Expérience Professionnelle
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Développeur Full Stack Freelance
            </Text>

            <Text style={styles.cardText}>
              Développement d’applications web modernes,
              plateformes SaaS, systèmes de gestion,
              tableaux de bord administratifs et solutions métier.
            </Text>

            <Text style={styles.cardText}>
              • Création d’APIs REST sécurisées
            </Text>

            <Text style={styles.cardText}>
              • Développement Flutter multiplateforme
            </Text>

            <Text style={styles.cardText}>
              • Gestion de bases de données PostgreSQL
            </Text>

            <Text style={styles.cardText}>
              • Déploiement Linux, Nginx et Docker
            </Text>
          </View>
        </View>

        {/* PROJECTS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Projets Réalisés
          </Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Application POS Professionnelle
            </Text>

            <Text style={styles.cardText}>
              Gestion des ventes, stock, produits,
              clients, fournisseurs, paiements,
              facturation PDF et rapports statistiques.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Plateforme de Formation
            </Text>

            <Text style={styles.cardText}>
              Gestion des cours, utilisateurs,
              ressources pédagogiques et contenus numériques.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Dashboard SaaS Administratif
            </Text>

            <Text style={styles.cardText}>
              Statistiques, graphiques,
              gestion des utilisateurs et reporting avancé.
            </Text>
          </View>
        </View>

        {/* EDUCATION */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Formation
          </Text>

          <Text style={styles.text}>
            Étudiant en Informatique avec spécialisation
            en développement logiciel, bases de données,
            réseaux informatiques et génie logiciel.
          </Text>
        </View>

        {/* CERTIFICATIONS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Certifications & Autoformation
          </Text>

          <Text style={styles.text}>
            • React & Next.js
          </Text>

          <Text style={styles.text}>
            • Flutter Mobile Development
          </Text>

          <Text style={styles.text}>
            • Django REST Framework
          </Text>

          <Text style={styles.text}>
            • PostgreSQL
          </Text>

          <Text style={styles.text}>
            • Git & GitHub
          </Text>
        </View>

        {/* LANGUAGES */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Langues
          </Text>

          <Text style={styles.text}>
            • Français : Courant
          </Text>

          <Text style={styles.text}>
            • Anglais : Professionnel technique
          </Text>
        </View>

        {/* FOOTER */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Kinshasa • RDC • Disponible pour CDI,
            CDD, Freelance et collaborations internationales
          </Text>
        </View>

      </Page>
    </Document>
  );
}
```
