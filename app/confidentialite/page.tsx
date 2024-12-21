export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto px-4 py-32">
      <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité</h1>
      
      <section className="prose max-w-none">
        <h2 className="text-2xl font-semibold mb-4">1. Collecte des données</h2>
        <p>
          Nous collectons uniquement les données nécessaires à la fourniture de nos services optiques et à l&apos;amélioration de votre expérience client.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-8">2. Utilisation des données</h2>
        <p>
          Vos données sont utilisées pour :
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Gérer vos rendez-vous</li>
          <li>Assurer le suivi de vos commandes</li>
          <li>Vous informer sur nos services</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-8">3. Protection des données</h2>
        <p>
          Nous mettons en œuvre toutes les mesures nécessaires pour protéger vos données personnelles.
        </p>
      </section>
    </main>
  );
}