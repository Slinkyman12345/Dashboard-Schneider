
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const OperationsSection = () => {
  const operations = [
    {
      id: "OPEX-12-MAHQ",
      name: "Opération Serval",
      location: "Mali",
      dates: "01/2013 - 04/2013",
      role: "Opérateur transmissions",
      status: "Terminée",
      classification: "Déclassifié",
      details: "Participation à la mise en place des systèmes de communications tactiques lors de l'intervention au Mali pour stopper la progression des groupes armés jihadistes. A assuré les liaisons chiffrées entre le poste de commandement avancé et l'état-major.",
      results: "Décoré de la Croix de la valeur militaire avec étoile de bronze."
    },
    {
      id: "OPEX-14-HAQD",
      name: "Opération Barkhane",
      location: "Zone Sahélo-Saharienne",
      dates: "09/2014 - 12/2014",
      role: "Chef d'équipe transmissions",
      status: "Terminée",
      classification: "Déclassifié",
      details: "Affecté à l'équipe de renseignement électronique. A coordonné la collecte de renseignements d'origine électromagnétique (ROEM) et leur analyse pour soutenir les opérations tactiques.",
      results: "Mission accomplie avec succès. Mention spéciale pour analyse ayant permis l'interception d'un groupe armé."
    },
    {
      id: "OPEX-16-KTPR",
      name: "[Classifié]",
      location: "Moyen-Orient",
      dates: "03/2016 - 06/2016",
      role: "Analyste renseignement",
      status: "Terminée",
      classification: "Confidentiel Défense",
      details: "Mission de collecte de renseignements sur groupes terroristes opérant dans la région. Détails spécifiques non divulgables à ce niveau d'accréditation.",
      results: "Résultats classifiés. Citation à l'ordre de la brigade."
    },
    {
      id: "OPEX-18-SDNM",
      name: "Opération Chammal",
      location: "Irak-Syrie",
      dates: "02/2018 - 07/2018",
      role: "Officier adjoint renseignement",
      status: "Terminée",
      classification: "Partiellement déclassifié",
      details: "Affecté à la cellule d'analyse des menaces et de ciblage. A coordonné le recueil et l'analyse du renseignement tactique pour appuyer les opérations aériennes françaises contre Daech.",
      results: "A contribué à la neutralisation de plusieurs cibles à haute valeur ajoutée. Recommandé pour avancement."
    },
    {
      id: "OPEX-20-XRTZ",
      name: "[Classifié]",
      location: "Afrique Centrale",
      dates: "11/2020 - 03/2021",
      role: "Chef section analyse",
      status: "Terminée",
      classification: "Secret Défense",
      details: "[ACCÈS RESTREINT - NIVEAU SECRET]",
      results: "[ACCÈS RESTREINT - NIVEAU SECRET]"
    },
    {
      id: "OPEX-22-PNVQ",
      name: "[Classifié]",
      location: "[Classifié]",
      dates: "08/2022 - 01/2023",
      role: "Chef d'opération spéciale",
      status: "Terminée",
      classification: "Très Secret Défense",
      details: "[ACCÈS NON AUTORISÉ]",
      results: "[ACCÈS NON AUTORISÉ]"
    }
  ];

  // Map classification levels to colors
  const classificationColors = {
    "Déclassifié": "bg-green-900/30 text-green-500 border-green-900/50",
    "Partiellement déclassifié": "bg-blue-900/30 text-blue-400 border-blue-900/50",
    "Confidentiel Défense": "bg-yellow-900/30 text-yellow-400 border-yellow-900/50",
    "Secret Défense": "bg-orange-900/30 text-orange-400 border-orange-900/50",
    "Très Secret Défense": "bg-red-900/30 text-red-400 border-red-900/50"
  };

  return (
    <div className="space-y-6">
      <div className="military-frame">
        <h2 className="military-header text-xl mb-4">OPEX (OPÉRATIONS EXTÉRIEURES) :: SCHNEIDER, Alexander</h2>
        
        <div className="mb-6">
          <div className="military-frame bg-military-green/10">
            <h3 className="font-military text-lg mb-2">Bilan de service en opérations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 border border-military-green bg-military-dark">
                <p className="text-xs text-military-lightgray">Opérations</p>
                <p className="text-xl text-military-orange">{operations.length}</p>
              </div>
              <div className="p-3 border border-military-green bg-military-dark">
                <p className="text-xs text-military-lightgray">Durée cumulée</p>
                <p className="text-xl text-military-orange">27 mois</p>
              </div>
              <div className="p-3 border border-military-green bg-military-dark">
                <p className="text-xs text-military-lightgray">Pays/Zones</p>
                <p className="text-xl text-military-orange">5+</p>
              </div>
              <div className="p-3 border border-military-green bg-military-dark">
                <p className="text-xs text-military-lightgray">Décorations</p>
                <p className="text-xl text-military-orange">4</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {operations.map((op, index) => (
            <div key={index} className="military-frame">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-military text-military-orange">
                    {op.name}
                    <span className="text-xs ml-2 text-military-lightgray">{op.id}</span>
                  </h3>
                  <p className="text-sm text-military-lightgray">{op.location} | {op.dates}</p>
                </div>
                <div className={`text-xs px-3 py-1 rounded border ${classificationColors[op.classification as keyof typeof classificationColors] || ""}`}>
                  {op.classification}
                </div>
              </div>
              
              <div className="space-y-3 text-sm mb-4">
                <div>
                  <p className="text-xs text-military-lightgray mb-1">RÔLE</p>
                  <p>{op.role}</p>
                </div>
                
                <div>
                  <p className="text-xs text-military-lightgray mb-1">DÉTAILS DE MISSION</p>
                  <p>{op.details}</p>
                </div>
                
                <div>
                  <p className="text-xs text-military-lightgray mb-1">RÉSULTATS</p>
                  <p>{op.results}</p>
                </div>
              </div>
              
              <div className="text-right text-xs">
                <span className={op.status === "En cours" ? "text-green-500" : ""}>
                  Status: {op.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-military-green flex items-center justify-between">
          <div className="text-xs text-military-lightgray">
            <p>Dossier OPEX mis à jour le 28/04/2023</p>
            <p>Classification: CONFIDENTIEL DÉFENSE</p>
          </div>
          
          <div className="text-xs border border-military-red bg-military-red/10 p-1 px-2 text-military-red">
            ACCÈS RÉGULÉ
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationsSection;
