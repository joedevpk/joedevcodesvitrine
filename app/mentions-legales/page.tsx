export const metadata = {
  title: "Mentions légales | Joe Dev Codes",
  description:
    "Mentions légales du site Joe Dev Codes - informations légales, hébergement et propriété intellectuelle.",
};

const sections = [
  { id: "editeur", label: "Éditeur" },
  { id: "hebergement", label: "Hébergement" },
  { id: "propriete", label: "Propriété" },
  { id: "responsabilite", label: "Responsabilité" },
  { id: "contact", label: "Contact" },
];

export default function MentionsLegales() {
  return (
    <main className="relative bg-white py-24 md:py-32 overflow-hidden">

      {/* BACKGROUND PREMIUM */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.06),transparent_60%)]" />
      <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-black/[0.03] blur-3xl" />

      <div className="container-custom relative z-10 max-w-5xl">

        {/* HEADER */}
        <header className="mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Mentions légales
          </h1>

          <p className="mt-5 md:mt-6 text-base md:text-lg text-black/60 leading-relaxed max-w-3xl">
            Cette page présente les informations légales relatives à l’éditeur du site,
            à son hébergement, à la propriété intellectuelle ainsi qu’aux conditions
            d’utilisation. Elle garantit une transparence totale conformément à la législation en vigueur.
          </p>
        </header>

        {/* STICKY NAV MOBILE-FRIENDLY */}
        <div className="sticky top-3 z-20 mb-10 md:mb-14">
          <div className="flex gap-2 overflow-x-auto no-scrollbar rounded-full border border-black/10 bg-white/70 p-2 backdrop-blur-2xl shadow-sm">

            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 rounded-full px-4 py-2 text-sm text-black/60 transition hover:bg-black hover:text-white"
              >
                {s.label}
              </a>
            ))}

          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-6 md:space-y-10 text-black/70 leading-relaxed">

          {/* ÉDITEUR */}
          <section
            id="editeur"
            className="rounded-3xl border border-black/10 bg-white/70 p-6 md:p-8 backdrop-blur-2xl transition hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
          >
            <h2 className="text-lg md:text-xl font-semibold text-black">
              Éditeur du site
            </h2>

            <p className="mt-4 text-sm md:text-base">
              Le site <strong>Joe Dev Codes</strong> est édité par un développeur indépendant spécialisé
              dans la création d’expériences digitales modernes, performantes et centrées utilisateur.
            </p>

            <p className="mt-4 text-sm md:text-base">
              Pour toute demande professionnelle ou collaboration :
              <span className="text-black font-medium"> contact@joedev.codes</span>.
              Les réponses sont généralement apportées rapidement.
            </p>
          </section>

          {/* HÉBERGEMENT */}
          <section
            id="hebergement"
            className="rounded-3xl border border-black/10 bg-white/70 p-6 md:p-8 backdrop-blur-2xl transition hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
          >
            <h2 className="text-lg md:text-xl font-semibold text-black">
              Hébergement
            </h2>

            <p className="mt-4 text-sm md:text-base">
              Le site est hébergé par <strong>Vercel Inc.</strong>, une plateforme spécialisée dans
              les applications web modernes offrant performance, sécurité et disponibilité mondiale.
            </p>

            <p className="mt-4 text-sm md:text-base text-black/60">
              https://vercel.com
            </p>
          </section>

          {/* PROPRIÉTÉ */}
          <section
            id="propriete"
            className="rounded-3xl border border-black/10 bg-white/70 p-6 md:p-8 backdrop-blur-2xl transition hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
          >
            <h2 className="text-lg md:text-xl font-semibold text-black">
              Propriété intellectuelle
            </h2>

            <p className="mt-4 text-sm md:text-base">
              L’ensemble des contenus (textes, design, code, images, identité visuelle)
              est protégé par le droit de la propriété intellectuelle.
            </p>

            <p className="mt-4 text-sm md:text-base">
              Toute reproduction ou exploitation sans autorisation est strictement interdite
              et pourra faire l’objet de poursuites légales.
            </p>
          </section>

          {/* RESPONSABILITÉ */}
          <section
            id="responsabilite"
            className="rounded-3xl border border-black/10 bg-white/70 p-6 md:p-8 backdrop-blur-2xl transition hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
          >
            <h2 className="text-lg md:text-xl font-semibold text-black">
              Responsabilité
            </h2>

            <p className="mt-4 text-sm md:text-base">
              L’éditeur s’efforce de fournir des informations fiables et mises à jour,
              mais ne peut garantir l’absence totale d’erreurs.
            </p>

            <p className="mt-4 text-sm md:text-base">
              L’utilisation du site reste sous la responsabilité de l’utilisateur.
            </p>
          </section>

          {/* CONTACT */}
          <section
            id="contact"
            className="rounded-3xl bg-black p-6 md:p-8 text-white transition hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
          >
            <h2 className="text-lg md:text-xl font-semibold">
              Contact
            </h2>

            <p className="mt-4 text-white/70 text-sm md:text-base">
              Pour toute question concernant les mentions légales :
            </p>

            <p className="mt-4 font-semibold text-white">
              contact@joedev.codes
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}