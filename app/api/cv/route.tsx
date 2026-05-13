import { NextResponse } from "next/server";
import React from "react";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  pdf,
  Link,
} from "@react-pdf/renderer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/* =========================
   DESIGN SYSTEM
========================= */

const colors = {
  primary: "#c46b2d",
  dark: "#111111",
  text: "#333333",
  muted: "#666666",
  light: "#f8f8f8",
  border: "#dddddd",
  sidebar: "#faf7f5",
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica",
  },

  /* SIDEBAR */

  sidebar: {
    width: "31%",
    backgroundColor: colors.sidebar,
    paddingTop: 35,
    paddingHorizontal: 22,
    paddingBottom: 35,
    borderRightWidth: 1,
    borderRightColor: "#ececec",
  },

  profileBox: {
    alignItems: "center",
    marginBottom: 30,
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },

  sidebarSection: {
    marginBottom: 28,
  },

  sidebarTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: colors.dark,
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  contactItem: {
    fontSize: 10,
    color: colors.text,
    marginBottom: 8,
    lineHeight: 1.5,
  },

  skillItem: {
    fontSize: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    marginBottom: 8,
    backgroundColor: "#ffffff",
  },

  language: {
    marginBottom: 10,
  },

  languageText: {
    fontSize: 10,
    marginBottom: 4,
    color: colors.text,
  },

  progressBar: {
    width: "100%",
    height: 6,
    backgroundColor: "#e5e5e5",
    borderRadius: 20,
  },

  progressFill: {
    height: 6,
    borderRadius: 20,
    backgroundColor: colors.primary,
  },

  /* MAIN */

  main: {
    width: "69%",
    paddingTop: 40,
    paddingHorizontal: 35,
    paddingBottom: 40,
  },

  header: {
    marginBottom: 30,
  },

  name: {
    fontSize: 34,
    fontWeight: "bold",
    color: colors.primary,
    letterSpacing: 1,
  },

  role: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.dark,
    marginTop: 5,
  },

  section: {
    marginBottom: 28,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.dark,
    marginBottom: 10,
    textTransform: "uppercase",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 6,
  },

  paragraph: {
    fontSize: 11,
    color: colors.text,
    lineHeight: 1.7,
  },

  experienceCard: {
    marginBottom: 18,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },

  jobTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.primary,
  },

  date: {
    fontSize: 10,
    color: colors.muted,
  },

  company: {
    fontSize: 11,
    fontStyle: "italic",
    marginBottom: 6,
    color: colors.dark,
  },

  bullet: {
    fontSize: 11,
    marginBottom: 4,
    color: colors.text,
    lineHeight: 1.6,
  },

  footer: {
    marginTop: 20,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  footerText: {
    fontSize: 10,
    textAlign: "center",
    color: colors.muted,
  },

  link: {
    color: colors.primary,
    fontSize: 10,
    textDecoration: "none",
  },
});

/* =========================
   DOCUMENT
========================= */

const CVDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>

      {/* SIDEBAR */}
      <View style={styles.sidebar}>


      <View style={styles.profileBox}>

        {/* LOGO / INITIALS */}
        <View
          style={{
            width: 110,
            height: 110,
            borderRadius: 55,
            backgroundColor: colors.primary,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 16,
      }}
        >
          <Text
            style={{
              color: "#ffffff",
              fontSize: 34,
              fontWeight: "bold",
              letterSpacing: 2,
            }}
          >
            JD
          </Text>
        </View>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: colors.dark,
            marginBottom: 4,
          }}
        >
          Joe Dev Codes
        </Text>

        <Text
          style={{
            fontSize: 10,
            color: colors.muted,
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Full Stack Developer
        </Text>

      </View>

        {/* CONTACT */}
        <View style={styles.sidebarSection}>

          <Text style={styles.sidebarTitle}>
            Contact
          </Text>

          <Text style={styles.contactItem}>
             Kinshasa, RDC
          </Text>

          <Text style={styles.contactItem}>
             joedevpk@gmail.com
          </Text>

          <Text style={styles.contactItem}>
             +243 816172056
          </Text>

          <Link
            src="https://github.com"
            style={styles.link}
          >
            github.com/joe-dev
          </Link>

        </View>

        {/* SKILLS */}
        <View style={styles.sidebarSection}>

          <Text style={styles.sidebarTitle}>
            Technologies
          </Text>

          <Text style={styles.skillItem}>Next.js</Text>
          <Text style={styles.skillItem}>React.js</Text>
          <Text style={styles.skillItem}>TypeScript</Text>
          <Text style={styles.skillItem}>Node.js</Text>
          <Text style={styles.skillItem}>MongoDB</Text>
          <Text style={styles.skillItem}>PostgreSQL</Text>
          <Text style={styles.skillItem}>Tailwind CSS</Text>
          <Text style={styles.skillItem}>Framer Motion</Text>

        </View>

        {/* LANGUAGES */}
        <View style={styles.sidebarSection}>

          <Text style={styles.sidebarTitle}>
            Langues
          </Text>

          <View style={styles.language}>
            <Text style={styles.languageText}>
              Français — Natif
            </Text>

            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: "100%" },
                ]}
              />
            </View>
          </View>

          <View style={styles.language}>
            <Text style={styles.languageText}>
              Français — Avancé
            </Text>

            <View style={styles.progressBar}>
              <View
                style={[
                  styles.progressFill,
                  { width: "80%" },
                ]}
              />
            </View>
          </View>

        </View>

      </View>

      {/* MAIN */}
      <View style={styles.main}>

        {/* HEADER */}
        <View style={styles.header}>

          <Text style={styles.name}>
            JOE DEV CODES
          </Text>

          <Text style={styles.role}>
            Full Stack Web Developer 
          </Text>

        </View>

        {/* ABOUT */}
        <View style={styles.section}>

          <Text style={styles.sectionTitle}>
            À propos
          </Text>

          <Text style={styles.paragraph}>
            Développeur Full Stack spécialisé dans
            la création d’applications web modernes,
            performantes et premium avec Next.js,
            React et TypeScript. Passionné par
            l’expérience utilisateur, les interfaces
            élégantes et les plateformes SaaS
            haut de gamme.
          </Text>

        </View>

        {/* EXPERIENCE */}
        <View style={styles.section}>

          <Text style={styles.sectionTitle}>
            Expériences
          </Text>

          <View style={styles.experienceCard}>

            <View style={styles.topRow}>

              <Text style={styles.jobTitle}>
                Freelance Full Stack Developer
              </Text>

              <Text style={styles.date}>
                2024 — Présent
              </Text>

            </View>

            <Text style={styles.company}>
              Joe Dev Studio
            </Text>

            <Text style={styles.bullet}>
              • Développement de dashboards SaaS modernes.
            </Text>

            <Text style={styles.bullet}>
              • Création de plateformes web premium et performantes.
            </Text>

            <Text style={styles.bullet}>
              • Optimisation UX/UI et performances frontend.
            </Text>

          </View>

          <View style={styles.experienceCard}>

            <View style={styles.topRow}>

              <Text style={styles.jobTitle}>
                Frontend Developer
              </Text>

              <Text style={styles.date}>
                2023 — 2024
              </Text>

            </View>

            <Text style={styles.company}>
              Remote / International
            </Text>

            <Text style={styles.bullet}>
              • Intégration responsive avancée.
            </Text>

            <Text style={styles.bullet}>
              • Développement React & animations modernes.
            </Text>

            <Text style={styles.bullet}>
              • Maintenance et optimisation SEO.
            </Text>

          </View>

        </View>

        {/* EDUCATION */}
        <View style={styles.section}>

          <Text style={styles.sectionTitle}>
            Formation
          </Text>

          <Text style={styles.bullet}>
            • Développement Web Full Stack
          </Text>

          <Text style={styles.bullet}>
            • Formation avancée JavaScript / TypeScript
          </Text>

          <Text style={styles.bullet}>
            • Architecture moderne Next.js
          </Text>

        </View>

        {/* PROJECTS */}
        <View style={styles.section}>

          <Text style={styles.sectionTitle}>
            Projets
          </Text>

          <Text style={styles.bullet}>
            • SaaS Dashboard Premium
          </Text>

          <Text style={styles.bullet}>
            • Portfolio Developer Ultra Moderne
          </Text>

          <Text style={styles.bullet}>
            • E-commerce Platform
          </Text>

          <Text style={styles.bullet}>
            • Admin Analytics System
          </Text>

        </View>

        {/* FOOTER */}
        <View style={styles.footer}>

          <Text style={styles.footerText}>
            Disponible pour missions freelance • Remote • International
          </Text>

        </View>

      </View>

    </Page>
  </Document>
);

/* =========================
   API ROUTE
========================= */

export async function GET() {
  try {
    // Génération du PDF
    const instance = pdf(<CVDocument />);

    // Le stream PDF
    const stream = await instance.toBuffer();

    // Retour du PDF
    return new Response(stream, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="cv.pdf"',
      },
    });
  } catch (error) {
    console.error("PDF ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erreur génération PDF",
      },
      {
        status: 500,
      }
    );
  }
}
