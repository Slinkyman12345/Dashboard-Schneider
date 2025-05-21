
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const IncidentsSection = () => {
  const incidents = [
    {
      id: "INC-2012-073",
      date: "14/07/2012",
      type: "Disciplinaire",
      title: "Altercation avec personnel civil",
      status: "Clos",
      severity: "Mineur",
      details: "Impliqué dans une altercation verbale avec un agent contractuel sur la base. Causes : désaccord sur les procédures de sécurité informatique. Résolution administrative sans suite.",
      action: "Rappel verbal des règles de conduite. Aucune sanction formelle."
    },
    {
      id: "INC-2014-129",
      date: "23/03/2014",
      type: "Blessure",
      title: "Blessure en exercice",
      status: "Clos",
      severity: "Modéré",
      details: "Fracture du poignet droit lors d'un exercice de descente en rappel. Conditions météorologiques défavorables (pluie). Évacuation vers hôpital militaire Percy.",
      action: "Arrêt temporaire (6 semaines). Rééducation complète. Reprise de service sans restriction."
    },
    {
      id: "INC-2016-045",
      date: "02/11/2016",
      type: "Mission",
      title: "Extraction d'urgence",
      status: "Classifié",
      severity: "Sévère",
      details: "[CENSURÉ] Incident survenu lors d'une opération en territoire [CENSURÉ]. Exposition à des agents hostiles armés. Extraction d'urgence par hélicoptère.",
      action: "Débriefing psychologique. Décoration pour acte de bravoure (non-public). Congé de récupération de 30 jours."
    },
    {
      id: "INC-2018-103",
      date: "17/08/2018",
      type: "Disciplinaire",
      title: "Non-respect de la hiérarchie",
      status: "Clos",
      severity: "Modéré",
      details: "A contesté un ordre direct du Colonel [CENSURÉ] concernant une procédure de traitement de données sensibles. A affirmé que l'ordre était contraire aux protocoles de sécurité établis.",
      action: "Convocation devant le conseil de discipline. Servi en sa faveur après vérification des procédures. Mention dans son dossier sans sanction."
    },
    {
      id: "INC-2020-018",
      date: "29/03/2020",
      type: "Blessure",
      title: "Exposition à agent toxique",
      status: "Suivi médical",
      severity: "Sévère",
      details: "Exposé à un agent chimique inconnu lors d'une mission de reconnaissance. Symptômes: difficultés respiratoires temporaires, irritations cutanées. Évacuation vers hôpital militaire du Val-de-Grâce.",
      action: "Traitement médical spécialisé. Suivi pulmonaire semestriel. Reprise du service après 2 mois."
    },
    {
      id: "INC-2022-067",
      date: "11/12/2022",
      type: "Mission",
      title: "Perte de communication",
      status: "Classifié",
      severity: "Critique",
      details: "[DOCUMENT HAUTEMENT CLASSIFIÉ - NIVEAU ALPHA]\nPerte de contact pendant 72h lors d'opération [CENSURÉ]. Circonstances exactes non divulguées. Autorisé à reprendre le service après évaluation psychologique complète.",
      action: "[ACCÈS RESTREINT]"
    }
  ];

  // Map severity to color classes
  const severityClasses = {
    "Mineur": "bg-blue-900/30 text-blue-400",
    "Modéré": "bg-yellow-900/30 text-yellow-400",
    "Sévère": "bg-orange-900/30 text-orange-400",
    "Critique": "bg-red-900/30 text-red-400"
  };

  return (
    <div className="space-y-6">
      <div className="military-frame">
        <h2 className="military-header text-xl mb-4">INCIDENTS :: SCHNEIDER, Alexander</h2>
        
        <div className="mb-4 flex flex-wrap gap-2 text-xs">
          <div className="bg-military-dark/80 p-1 px-2 border border-military-green">
            Total: {incidents.length} incidents
          </div>
          <div className="bg-blue-900/30 p-1 px-2 border border-blue-900/50 text-blue-400">
            Mineurs: {incidents.filter(i => i.severity === "Mineur").length}
          </div>
          <div className="bg-yellow-900/30 p-1 px-2 border border-yellow-900/50 text-yellow-400">
            Modérés: {incidents.filter(i => i.severity === "Modéré").length}
          </div>
          <div className="bg-orange-900/30 p-1 px-2 border border-orange-900/50 text-orange-400">
            Sévères: {incidents.filter(i => i.severity === "Sévère").length}
          </div>
          <div className="bg-red-900/30 p-1 px-2 border border-red-900/50 text-red-400">
            Critiques: {incidents.filter(i => i.severity === "Critique").length}
          </div>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {incidents.map((incident, index) => (
            <AccordionItem 
              key={index} 
              value={incident.id} 
              className="military-frame border-none"
            >
              <AccordionTrigger className="p-0">
                <div className="w-full p-3 flex flex-wrap justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={`text-xs px-2 py-1 rounded ${severityClasses[incident.severity as keyof typeof severityClasses] || ""}`}>
                      {incident.severity}
                    </div>
                    <span className="text-military-lightgray">{incident.id}</span>
                    <span className="font-bold">{incident.title}</span>
                  </div>
                  
                  <div className="flex gap-4 text-sm">
                    <span>{incident.date}</span>
                    <span>{incident.type}</span>
                  </div>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="pt-4 border-t border-military-green mt-2">
                <div className="space-y-4 p-2">
                  <div>
                    <p className="text-xs text-military-lightgray mb-1">DÉTAILS DE L'INCIDENT</p>
                    <p className="whitespace-pre-line">{incident.details}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-military-lightgray mb-1">ACTION PRISE</p>
                    <p>{incident.action}</p>
                  </div>
                  
                  <div className="flex justify-between text-xs pt-2">
                    <span>Status: <span className={incident.status === "Classifié" ? "text-military-red" : ""}>{incident.status}</span></span>
                    {incident.status === "Classifié" && (
                      <span className="text-military-red">AUTORISATIONS SUPPLÉMENTAIRES REQUISES</span>
                    )}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-6 pt-4 border-t border-military-green">
          <p className="text-xs text-military-orange">
            Note: Certains incidents peuvent avoir été retirés ou modifiés par autorité supérieure.
            Contactez le service des archives militaires pour accès complet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IncidentsSection;
