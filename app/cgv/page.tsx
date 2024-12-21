export default function TermsOfService() {
  return (
    <main className="container mx-auto px-4 py-32">
      <h1 className="text-3xl font-bold mb-8">Conditions Générales de Vente</h1>
      
      <section className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">1. Commandes</h2>
        <p>
          Toute commande implique l&apos;acceptation des présentes conditions générales de vente.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">2. Prix et paiement</h2>
        <p>
          Les prix sont indiqués en euros TTC. Le paiement s&apos;effectue au moment de la commande.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">3. Garanties</h2>
        <p>
          Nos produits bénéficient de la garantie légale de conformité et de la garantie des vices cachés.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">4. Retours et échanges</h2>
        <p>
          Les conditions de retour et d&apos;échange sont soumises à notre politique de satisfaction client.
        </p>
      </section>
    </main>
  );
}