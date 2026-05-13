/* eslint-disable */

import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({

  page: {
    paddingTop: 55,
    paddingBottom: 55,
    paddingHorizontal: 45,
    backgroundColor: "#ffffff",
    color: "#111111",
    fontFamily: "Helvetica",
  },

  // HEADER
  header: {
    marginBottom: 35,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
    borderBottomStyle: "solid",
  },

  name: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 8,
  },

  role: {
    fontSize: 18,
    color: "#4f46e5",
    marginBottom: 18,
  },

  description: {
    fontSize: 12,
    lineHeight: 1.8,
    color: "#444444",
    maxWidth: 420,
  },

  // SECTION
  section: {
    marginTop: 28,
  },

  sectionTitle: {
    fontSize: 13,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 14,
    color: "#111111",
  },

  text: {
    fontSize: 12,
    lineHeight: 1.8,
    color: "#444444",
  },

  // SKILLS
  skillsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  skill: {
    paddingVertical: 7,
    paddingHorizontal: 14,

    borderRadius: 30,

    borderWidth: 1,
    borderColor: "#dddddd",
    borderStyle: "solid",

    backgroundColor: "#fafafa",

    fontSize: 11,

    marginRight: 10,
    marginBottom: 10,
  },

  // CARD
  card: {
    padding: 18,

    borderRadius: 16,

    backgroundColor: "#f7f7f7",

    borderWidth: 1,
    borderColor: "#eeeeee",
    borderStyle: "solid",
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#111111",
  },

  cardText: {
    fontSize: 12,
    lineHeight: 1.7,
    color: "#555555",
  },

  // FOOTER
  footer: {
    marginTop: 45,

    paddingTop: 18,

    borderTopWidth: 1,
    borderTopColor: "#eeeeee",
    borderTopStyle: "solid",
  },

  footerText: {
    fontSize: 10,
    color: "#777777",
    textAlign: "center",
  },

});