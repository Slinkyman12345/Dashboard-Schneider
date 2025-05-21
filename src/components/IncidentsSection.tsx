
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AlertCircle, AlertTriangle, Activity, FileText } from "lucide-react";

const IncidentsSection = () => {
  const incidents = [
    {
      id: "INC-2010-073",
      date: "12/05/2010",
      type: "Opérationnel",
      title: "Embuscade lors de l'opération Pamir",
      status: "Rapport Complet",
      severity: "Critique",
      details: "Durant l'opération Pamir, des blindés escortaient des forces locales contenant des équipements de communication vers une base avancée temporaire à Jalalabad. À 19h12, le convoi a été ciblé par un véhicule contenant un EEI (Engin Explosif Improvisé) qui a heurté un des blindés et explosé, tuant 2 militaires français et détruisant le véhicule. Les communications ont été immédiatement rompues. Schneider a établi un relais d'urgence sécurisé et appelé des renforts qui sont arrivés 14 minutes plus tard. L'embuscade a fait 3 morts du côté allié et 12 du côté insurgé.",
      action: "Schneider a reçu une promotion au grade d'Adjudant pour son initiative et son sang-froid ayant permis de sauver le reste du convoi."
    },
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
      id: "INC-2015-045",
      date: "18/12/2015",
      type: "Opérationnel",
      title: "Engagement au combat - Mali",
      status: "Classifié",
      severity: "Sévère",
      details: "Lors de l'opération Barkhane, une mission de reconnaissance entre Gao et Ménaka a été attaquée par un groupe armé. Schneider, leader d'une escouade de 5 hommes, était en tête derrière deux VBL (Véhicules Blindés Légers). À 16h02, un drone allié a repéré des mouvements suspects à 2km au sud. Un VBL a été frappé par un tir de roquette antichar, immobilisant le véhicule et causant un mort. Schneider a ordonné un repli défensif sous tirs de suppression, mis en place un brouilleur de communication et établi un relais avec les alliés. L'engagement s'est terminé avec 1 perte alliée contre 4 estimées côté ennemi (20 assaillants contre 17 alliés).",
      action: "Mention spéciale dans le rapport de mission. Schneider a reçu des félicitations du commandement pour sa gestion tactique de la situation."
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
      id: "INC-2018-014",
      date: "12/05/2018",
      type: "Cyber-attaque",
      title: "Simulation d'attaque - Estonie",
      status: "Rapport Complet",
      severity: "Modéré",
      details: "Durant l'opération Lynx en Estonie, un exercice de simulation d'une cyberattaque a eu lieu à la base de Tapa. Schneider était affecté au poste n°12 du Network Operation Center (NOC) et co-gérait l'équipe chargée de contenir l'attaque. À 17h48, une centaine d'erreurs et bugs sont apparus sur les écrans du NOC. Un membre a identifié l'erreur dans le flux de données et créé un protocole d'isolation. Schneider a utilisé des contre-mesures pour détourner l'attaque et préserver les informations sensibles. Une équipe a été envoyée au point d'origine de l'attaque, récupérant des brouilleurs, transmetteurs, serveurs et ordinateurs portables ennemis.",
      action: "Rapport d'évaluation positif. Les équipements récupérés ont permis d'améliorer les protocoles de défense."
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
  
  // Map incident type to icon
  const typeIcons = {
    "Disciplinaire": <AlertCircle className="h-4 w-4 text-blue-400" />,
    "Blessure": <Activity className="h-4 w-4 text-orange-400" />,
    "Mission": <FileText className="h-4 w-4 text-military-lightgray" />,
    "Opérationnel": <AlertTriangle className="h-4 w-4 text-red-400" />,
    "Cyber-attaque": <AlertTriangle className="h-4 w-4 text-yellow-400" />
  };

  return (
    <div className="space-y-6 animate-fade-in">
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
              className="military-frame border-none transform hover:scale-[1.01] transition-all duration-300"
            >
              <AccordionTrigger className="p-0">
                <div className="w-full p-3 flex flex-wrap justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={`text-xs px-2 py-1 rounded flex items-center gap-1 ${severityClasses[incident.severity as keyof typeof severityClasses] || ""}`}>
                      {typeIcons[incident.type as keyof typeof typeIcons]}
                      <span>{incident.severity}</span>
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
                      <span className="text-military-red animate-pulse">AUTORISATIONS SUPPLÉMENTAIRES REQUISES</span>
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
