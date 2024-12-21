export default function LegalNotice() {
  return (
    <main className="container mx-auto px-4 py-32">
      <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>
      
      <section className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">1. Informations légales</h2>
        <p>
          OptiVision<br />
          123 rue de la Vue<br />
          75000 Paris<br />
          Tél : 01 23 45 67 89<br />
          Email : contact@optivision.fr
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">2. Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle.
          Tous les droits de reproduction sont réservés.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">3. Protection des données personnelles</h2>
        <p>
          Conformément à la loi Informatique et Libertés du 6 janvier 1978, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression des données vous concernant.
        </p>
      </section>
    </main>
  );
}