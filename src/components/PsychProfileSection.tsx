
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const PsychProfileSection = () => {
  const psychTests = [
    { 
      name: "QI", 
      score: 134, 
      max: 160, 
      comment: "Capacités intellectuelles supérieures. Raisonnement logique et abstrait particulièrement développés. Aptitude exceptionnelle à la résolution de problèmes complexes." 
    },
    { 
      name: "Résilience", 
      score: 87, 
      max: 100, 
      comment: "Excellente capacité à surmonter le stress et les traumatismes. Récupération rapide après exposition à des situations de combat. Évaluation post-incident de 2020 montre une légère baisse temporaire, récupérée après suivi." 
    },
    { 
      name: "Leadership", 
      score: 78, 
      max: 100, 
      comment: "Bonnes aptitudes au commandement, préfère cependant les rôles techniques ou d'analyse. Peut prendre des initiatives mais parfois trop indépendant. Style de leadership analytique plutôt que charismatique." 
    },
    { 
      name: "Travail d'équipe", 
      score: 72, 
      max: 100, 
      comment: "Capacité adéquate à s'intégrer en équipe. Préfère les équipes restreintes et spécialisées. Tendance occasionnelle à l'isolement professionnel lorsque concentré sur une tâche complexe." 
    },
    { 
      name: "Gestion du stress", 
      score: 92, 
      max: 100, 
      comment: "Performance exceptionnelle sous pression. Capacité remarquable à maintenir lucidité et efficacité dans des environnements hostiles. Utilisation efficace de techniques d'autorégulation." 
    },
    { 
      name: "Stabilité émotionnelle", 
      score: 80, 
      max: 100, 
      comment: "Bonne maîtrise émotionnelle. Tendance à l'intellectualisation des situations. Rare manifestation d'émotions négatives. Point de vigilance: possible refoulement émotionnel." 
    }
  ];

  const behaviouralObservations = [
    {
      date: "14/05/2019",
      observer: "Cpt. Rousseau, Psychologue militaire",
      notes: "Sujet introverti, analytique, avec forte préférence pour tâches nécessitant concentration et précision. Relations sociales limitées mais fonctionnelles. Attitude réservée, ne partage que rarement des informations personnelles."
    },
    {
      date: "22/11/2020",
      observer: "Dr. Pelletier, Psychiatre militaire",
      notes: "Évaluation post-opération [CLASSIFIÉ]. Signes légers de stress post-traumatique. Excellente utilisation des mécanismes de défense et de la compartimentation. Recommandation de suivi psychologique préventif pendant 3 mois."
    },
    {
      date: "05/06/2021",
      observer: "Maj. Laurent, Officier supérieur",
      notes: "Comportement exemplaire en situation de crise. A démontré sang-froid et clarté d'esprit lors de l'incident du [CENSURÉ]. Capacité remarquable à isoler émotions personnelles pour se concentrer sur la mission."
    },
    {
      date: "17/02/2023",
      observer: "Col. Mercier, Médecin-chef",
      notes: "Évaluation de routine post-déploiement. Aucun signe de détresse psychologique. Légère tendance à l'hypervigilance considérée comme adaptative dans son rôle. Apte au service sans restrictions."
    }
  ];

  const psychologicalTraits = [
    { trait: "Introversion/Extraversion", position: 25, label: "Introverti" },
    { trait: "Intuition/Observation", position: 80, label: "Intuitif" },
    { trait: "Réflexion/Sentiment", position: 85, label: "Réflexion" },
    { trait: "Jugement/Perception", position: 65, label: "Jugement" },
    { trait: "Assertivité", position: 70, label: "Assertif" },
    { trait: "Dogmatisme/Flexibilité", position: 60, label: "Flexible" }
  ];

  return (
    <div className="space-y-6">
      <div className="military-frame">
        <h2 className="military-header text-xl mb-4">PROFIL PSYCHOLOGIQUE :: SCHNEIDER, Alexander</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Test scores */}
          <div className="military-frame">
            <h3 className="military-header mb-4">ÉVALUATIONS PSYCHOMÉTRIQUES</h3>
            
            <div className="space-y-4">
              {psychTests.map((test, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{test.name}</span>
                    <span className="text-military-orange">{test.score}/{test.max}</span>
                  </div>
                  <Progress value={(test.score / test.max) * 100} className="h-2 bg-military-dark" />
                  <p className="text-xs text-military-lightgray mt-1">{test.comment}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Personality traits */}
          <div className="military-frame">
            <h3 className="military-header mb-4">TRAITS DE PERSONNALITÉ</h3>
            
            <div className="space-y-4">
              {psychologicalTraits.map((trait, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-sm">{trait.trait}</p>
                  <div className="relative h-6 bg-military-dark border border-military-green">
                    <div 
                      className="absolute top-0 bottom-0 h-full bg-military-orange"
                      style={{ width: `${trait.position}%` }}
                    ></div>
                    <div 
                      className="absolute top-0 h-5 border-l-2 border-white"
                      style={{ left: '50%' }}
                    ></div>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xs text-white">
                      {trait.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-xs text-military-lightgray mt-6">
              <p>Type MBTI approximatif: INTJ (Architecte)</p>
              <p>Style de travail: Analytique, indépendant, orienté résultats</p>
              <p>Compatibilité: Excellent en rôle d'analyste, expert technique, stratège</p>
            </div>
          </div>
        </div>
        
        {/* Observations */}
        <div className="military-frame mt-6">
          <h3 className="military-header mb-4">OBSERVATIONS COMPORTEMENTALES</h3>
          
          <div className="space-y-4">
            {behaviouralObservations.map((obs, index) => (
              <div key={index} className="border-l-2 border-military-green pl-4 py-1">
                <div className="flex flex-wrap justify-between mb-1">
                  <p className="text-sm font-bold">{obs.date}</p>
                  <p className="text-xs text-military-lightgray">{obs.observer}</p>
                </div>
                <p className="text-sm">{obs.notes}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Summary */}
        <div className="military-frame mt-6">
          <h3 className="military-header mb-4">ÉVALUATION SOMMAIRE</h3>
          
          <div className="space-y-3 text-sm">
            <p>
              Le Major Schneider présente un profil psychologique hautement adapté aux missions de renseignement et d'analyse. 
              Son intelligence supérieure, couplée à une excellente gestion du stress et une stabilité émotionnelle solide, 
              en fait un élément particulièrement précieux dans les situations complexes ou dangereuses.
            </p>
            <p>
              Sa tendance à l'introversion et son style analytique le prédisposent naturellement aux rôles requérant concentration, 
              précision et discernement. Sa capacité à compartimenter émotions et informations est un atout majeur pour les opérations sensibles.
            </p>
            <p>
              Points de vigilance: Bien que ses mécanismes d'adaptation soient fonctionnels, son style de communication réservé pourrait 
              limiter l'efficacité du travail d'équipe dans certains contextes. La tendance à l'intellectualisation pourrait masquer des 
              difficultés émotionnelles nécessitant un suivi régulier.
            </p>
            <p className="font-bold">
              Recommandation: Maintenir dans son rôle actuel avec évaluations psychologiques biannuelles.
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-military-green text-xs text-military-lightgray flex justify-between">
          <div>
            <p>Dernière évaluation: 17/02/2023</p>
            <p>Prochain examen psychologique prévu: 18/08/2023</p>
          </div>
          <div className="bg-military-dark/60 p-1 px-2 text-military-orange">
            NIVEAU DE CONFIDENTIALITÉ: ÉLEVÉ
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsychProfileSection;
