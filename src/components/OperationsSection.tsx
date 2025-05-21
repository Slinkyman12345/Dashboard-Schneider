
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, MapPin, Clock, Briefcase, Star, FileText, Target } from "lucide-react";
import TerminalText from "@/components/TerminalText";
import useSound from "@/hooks/useSound";

const OperationsSection = () => {
  const [expandedOp, setExpandedOp] = useState<string | null>(null);
  const { playSound } = useSound();
  
  const operations = [
    {
      id: "OPEX-12-MAHQ",
      name: "Opération Serval",
      location: "Mali",
      dates: "01/2013 - 04/2013",
      role: "Opérateur transmissions",
      grade: "Sergent",
      status: "Terminée",
      classification: "Déclassifié",
      details: "Participation à la mise en place des systèmes de communications tactiques lors de l'intervention au Mali pour stopper la progression des groupes armés jihadistes. A assuré les liaisons chiffrées entre le poste de commandement avancé et l'état-major.",
      results: "Décoré de la Croix de la valeur militaire avec étoile de bronze.",
      objectives: ["Sécurisation zone nord", "Établissement réseau comm.", "Support aux unités d'assaut"],
      unitSize: "14 personnels"
    },
    {
      id: "OPEX-14-HAQD",
      name: "Opération Barkhane",
      location: "Zone Sahélo-Saharienne",
      dates: "09/2014 - 12/2014",
      role: "Chef d'équipe transmissions",
      grade: "Sergent-chef",
      status: "Terminée",
      classification: "Déclassifié",
      details: "Affecté à l'équipe de renseignement électronique. A coordonné la collecte de renseignements d'origine électromagnétique (ROEM) et leur analyse pour soutenir les opérations tactiques.",
      results: "Mission accomplie avec succès. Mention spéciale pour analyse ayant permis l'interception d'un groupe armé.",
      objectives: ["Interception communications", "Triangulation sources", "Protection convois"],
      unitSize: "8 personnels"
    },
    {
      id: "OPEX-16-KTPR",
      name: "[Classifié]",
      location: "Moyen-Orient",
      dates: "03/2016 - 06/2016",
      role: "Analyste renseignement",
      grade: "Adjudant",
      status: "Terminée",
      classification: "Confidentiel Défense",
      details: "Mission de collecte de renseignements sur groupes terroristes opérant dans la région. Détails spécifiques non divulgables à ce niveau d'accréditation.",
      results: "Résultats classifiés. Citation à l'ordre de la brigade.",
      objectives: ["[ACCÈS RESTREINT]", "Protection ressortissants", "Support opérations spéciales"],
      unitSize: "6 personnels"
    },
    {
      id: "OPEX-18-SDNM",
      name: "Opération Chammal",
      location: "Irak-Syrie",
      dates: "02/2018 - 07/2018",
      role: "Officier adjoint renseignement",
      grade: "Adjudant-chef",
      status: "Terminée",
      classification: "Partiellement déclassifié",
      details: "Affecté à la cellule d'analyse des menaces et de ciblage. A coordonné le recueil et l'analyse du renseignement tactique pour appuyer les opérations aériennes françaises contre Daech.",
      results: "A contribué à la neutralisation de plusieurs cibles à haute valeur ajoutée. Recommandé pour avancement.",
      objectives: ["Analyse menaces", "Identification cibles", "Évaluation dommages"],
      unitSize: "12 personnels"
    },
    {
      id: "OPEX-20-XRTZ",
      name: "[Classifié]",
      location: "Afrique Centrale",
      dates: "11/2020 - 03/2021",
      role: "Chef section analyse",
      grade: "Major",
      status: "Terminée",
      classification: "Secret Défense",
      details: "[ACCÈS RESTREINT - NIVEAU SECRET]",
      results: "[ACCÈS RESTREINT - NIVEAU SECRET]",
      objectives: ["[ACCÈS RESTREINT]", "[ACCÈS RESTREINT]", "[ACCÈS RESTREINT]"],
      unitSize: "9 personnels"
    },
    {
      id: "OPEX-22-PNVQ",
      name: "[Classifié]",
      location: "[Classifié]",
      dates: "08/2022 - 01/2023",
      role: "Chef d'opération spéciale",
      grade: "Major",
      status: "Terminée",
      classification: "Très Secret Défense",
      details: "[ACCÈS NON AUTORISÉ]",
      results: "[ACCÈS NON AUTORISÉ]",
      objectives: ["[ACCÈS NON AUTORISÉ]", "[ACCÈS NON AUTORISÉ]", "[ACCÈS NON AUTORISÉ]"],
      unitSize: "[ACCÈS NON AUTORISÉ]"
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

  const toggleOperation = (id: string) => {
    playSound("click");
    setExpandedOp(expandedOp === id ? null : id);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="military-frame">
        <h2 className="military-header text-xl mb-4">OPEX (OPÉRATIONS EXTÉRIEURES) :: SCHNEIDER, Alexander</h2>
        
        <div className="mb-6 transform transition-all duration-500 hover:scale-[1.01]">
          <div className="military-frame bg-military-green/10 backdrop-blur-sm">
            <h3 className="font-military text-lg mb-2">Bilan de service en opérations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3 border border-military-green bg-military-dark hover:bg-military-dark/70 transition-all duration-300">
                <p className="text-xs text-military-lightgray">Opérations</p>
                <p className="text-xl text-military-orange">{operations.length}</p>
              </div>
              <div className="p-3 border border-military-green bg-military-dark hover:bg-military-dark/70 transition-all duration-300">
                <p className="text-xs text-military-lightgray">Durée cumulée</p>
                <p className="text-xl text-military-orange">27 mois</p>
              </div>
              <div className="p-3 border border-military-green bg-military-dark hover:bg-military-dark/70 transition-all duration-300">
                <p className="text-xs text-military-lightgray">Pays/Zones</p>
                <p className="text-xl text-military-orange">5+</p>
              </div>
              <div className="p-3 border border-military-green bg-military-dark hover:bg-military-dark/70 transition-all duration-300">
                <p className="text-xs text-military-lightgray">Décorations</p>
                <p className="text-xl text-military-orange">4</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {operations.map((op) => (
            <div key={op.id} className={`military-frame transition-all duration-500 ${expandedOp === op.id ? 'bg-military-dark/70 border-military-green/70' : 'hover:bg-military-dark/50'}`}>
              <div 
                className="flex flex-wrap justify-between items-start mb-4 cursor-pointer"
                onClick={() => toggleOperation(op.id)}
              >
                <div className="flex items-start">
                  {expandedOp === op.id ? (
                    <ChevronUp className="mr-2 text-military-orange h-5 w-5 animate-bounce" />
                  ) : (
                    <ChevronDown className="mr-2 text-military-orange h-5 w-5" />
                  )}
                  <div>
                    <h3 className="text-lg font-military text-military-orange group-hover:text-white transition-colors">
                      {op.name}
                      <span className="text-xs ml-2 text-military-lightgray">{op.id}</span>
                    </h3>
                    <div className="flex items-center text-sm text-military-lightgray">
                      <MapPin className="h-4 w-4 inline mr-1" /> {op.location}
                      <span className="mx-2">|</span>
                      <Clock className="h-4 w-4 inline mr-1" /> {op.dates}
                    </div>
                  </div>
                </div>
                <div className={`text-xs px-3 py-1 rounded border ${classificationColors[op.classification as keyof typeof classificationColors] || ""}`}>
                  {op.classification}
                </div>
              </div>
              
              {expandedOp === op.id && (
                <div className="space-y-4 text-sm mb-4 animate-accordion-down overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="military-frame bg-military-dark/40">
                      <div className="flex items-center mb-2">
                        <Briefcase className="h-4 w-4 mr-2 text-military-orange" />
                        <p className="text-xs text-military-lightgray">RÔLE & GRADE</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-bold">{op.role}</p>
                        <p className="text-military-lightgray">{op.grade}</p>
                      </div>
                    </div>
                    
                    <div className="military-frame bg-military-dark/40">
                      <div className="flex items-center mb-2">
                        <Target className="h-4 w-4 mr-2 text-military-orange" />
                        <p className="text-xs text-military-lightgray">EFFECTIFS</p>
                      </div>
                      <p>{op.unitSize}</p>
                    </div>
                  </div>

                  <div className="military-frame bg-military-dark/40">
                    <div className="flex items-center mb-2">
                      <FileText className="h-4 w-4 mr-2 text-military-orange" />
                      <p className="text-xs text-military-lightgray">DÉTAILS DE MISSION</p>
                    </div>
                    <p>{op.details}</p>
                  </div>
                  
                  <div className="military-frame bg-military-dark/40">
                    <div className="flex items-center mb-2">
                      <Star className="h-4 w-4 mr-2 text-military-orange" />
                      <p className="text-xs text-military-lightgray">RÉSULTATS</p>
                    </div>
                    <p>{op.results}</p>
                  </div>

                  {op.objectives && (
                    <div className="military-frame bg-military-dark/40">
                      <div className="flex items-center mb-2">
                        <Target className="h-4 w-4 mr-2 text-military-orange" />
                        <p className="text-xs text-military-lightgray">OBJECTIFS</p>
                      </div>
                      <ul className="list-disc list-inside">
                        {op.objectives.map((obj, idx) => (
                          <li key={idx} className="ml-2">{obj}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
              
              <div className="text-right text-xs">
                <span className={op.status === "En cours" ? "text-green-500 animate-pulse" : ""}>
                  Status: {op.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-military-green flex items-center justify-between">
          <div className="text-xs text-military-lightgray">
            <TerminalText text="Dossier OPEX mis à jour le 28/04/2023" delay={30} />
            <TerminalText text="Classification: CONFIDENTIEL DÉFENSE" delay={30} />
          </div>
          
          <div className="text-xs border border-military-red bg-military-red/10 p-1 px-2 text-military-red animate-pulse">
            ACCÈS RÉGULÉ
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationsSection;
