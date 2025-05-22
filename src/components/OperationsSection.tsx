
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, MapPin, Clock, Briefcase, Star, FileText, Target, Users, Shield } from "lucide-react";
import TerminalText from "@/components/TerminalText";
import useSound from "@/hooks/useSound";

const OperationsSection = () => {
  const [expandedOp, setExpandedOp] = useState<string | null>(null);
  const { playSound } = useSound();
  
  const operations = [
    {
      id: "OPEX-10-PAMR",
      name: "Opération Pamir",
      location: "Afghanistan",
      dates: "01/2010 - 06/2010",
      role: "Spécialiste transmissions",
      grade: "Sergent-chef",
      status: "Terminée",
      classification: "Partiellement déclassifié",
      details: "Déployé dans le cadre du mandat de l'OTAN pour stabiliser le pays et sécuriser les infrastructures de la coalition. Positionné sur le premier front, Schneider était situé dans un des premiers véhicules à l'avant d'un convoi le 12 Mai 2010 lorsqu'un véhicule contenant un EEI (Engin Explosif Improvisé) a foncé sur les blindés. Après l'explosion qui a tué 2 militaires français et détruit un blindé, les communications avec le PC ont été rompues. Schneider a établi un relais d'urgence sécurisé et appelé directement les renforts nécessaires, arrivés 14 minutes plus tard.",
      results: "Promu au grade d'Adjudant suite à son action décisive lors de l'embuscade. 3 pertes du côté des alliés, 12 pertes du côté des insurgés.",
      objectives: ["Stabilisation du pays", "Sécurisation des infrastructures", "Support aux forces locales"],
      unitSize: "16 personnels",
      image: "/lovable-uploads/4b3d35e6-71b9-449b-9a8f-ae76355f7ef1.png",
      imageDesc: "Photo prise lors de l'opération Pamir en Afghanistan, 2010"
    },
    {
      id: "OPEX-15-BARK",
      name: "Opération Barkhane",
      location: "Mali",
      dates: "10/2015 - 02/2016",
      role: "Chef d'équipe transmissions",
      grade: "Adjudant",
      status: "Terminée",
      classification: "Diffusion limitée",
      details: "Mission de reconnaissance le 18 Décembre 2015 pour identifier des caches d'armes entre Gao et Ménaka. En tant que leader d'une escouade de 5 hommes, Schneider était en tête du groupe situé derrière deux VBL (Véhicule Blindé Léger). À 16h02, le convoi a commencé sa patrouille lorsqu'un drone allié a repéré des mouvements suspects à 2km au sud. En se déplaçant vers l'emplacement, un VBL a été frappé par un tir de roquette antichar, tuant une personne. Schneider a ordonné un repli défensif tout en assurant des tirs de suppression. Il a déployé un brouilleur de communication pour désorganiser l'ennemi et établi un relais avec les alliés à 1,5km.",
      results: "Mission accomplie avec 1 perte alliée contre 4 pertes estimées côté ennemi. L'équipe a réussi à revenir à sa base malgré une force ennemie supérieure en nombre (20 contre 17).",
      objectives: ["Reconnaissance", "Identification caches d'armes", "Neutralisation menaces"],
      unitSize: "17 personnels",
      image: "/lovable-uploads/48d3f843-76b4-4704-9c36-8fc6f3df80d9.png",
      imageDesc: "Opération Barkhane au Mali, 2015 - Mission de reconnaissance"
    },
    {
      id: "OPEX-18-LYNX",
      name: "Opération Lynx",
      location: "Estonie",
      dates: "03/2018 - 08/2018",
      role: "Spécialiste cybersécurité",
      grade: "Adjudant-chef",
      status: "Terminée",
      classification: "Confidentiel Défense",
      details: "Déployé dans le cadre de l'OTAN pour lutter contre les cybermenaces russes grandissantes. Le 12 Mai 2018, lors d'un exercice de simulation d'une cyberattaque à la base de Tapa, Schneider était affecté au poste n°12 du N.O.C (Network Operation Center) et co-gérait l'équipe chargée de contenir l'attaque. À 17h48, pendant le test, une centaine d'erreurs et bugs sont apparus sur les écrans. Sur ordre du chef du NOC, Schneider a utilisé des contre-mesures pour détourner l'attaque et préserver les informations sensibles. Il a également coordonné une équipe pour intervenir sur le point d'origine de l'attaque, récupérant des brouilleurs, transmetteurs et serveurs ennemis.",
      results: "Défense contre la cyberattaque réussie. Récupération de matériel ennemi permettant d'améliorer les protocoles de défense.",
      objectives: ["Contrer cybermenaces", "Protection infrastructures informatiques", "Formation équipes locales"],
      unitSize: "12 personnels",
      image: "/lovable-uploads/5fa33a01-1adf-473a-a3ec-d05b05841244.png",
      imageDesc: "Base de Tapa, Estonie - Opération Lynx, 2018"
    }
  ];

  // Map classification levels to colors
  const classificationColors = {
    "Déclassifié": "bg-green-900/30 text-green-500 border-green-900/50",
    "Partiellement déclassifié": "bg-blue-900/30 text-blue-400 border-blue-900/50",
    "Diffusion limitée": "bg-blue-900/30 text-blue-400 border-blue-900/50",
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
                <p className="text-xl text-military-orange">16 mois</p>
              </div>
              <div className="p-3 border border-military-green bg-military-dark hover:bg-military-dark/70 transition-all duration-300">
                <p className="text-xs text-military-lightgray">Pays/Zones</p>
                <p className="text-xl text-military-orange">3</p>
              </div>
              <div className="p-3 border border-military-green bg-military-dark hover:bg-military-dark/70 transition-all duration-300">
                <p className="text-xs text-military-lightgray">Décorations</p>
                <p className="text-xl text-military-orange">2</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          {operations.map((op) => (
            <div 
              key={op.id} 
              className={`military-frame transition-all duration-500 ${expandedOp === op.id ? 'bg-military-dark/70 border-military-green/70 transform scale-[1.01]' : 'hover:bg-military-dark/50'}`}
            >
              <div 
                className="flex flex-wrap justify-between items-start cursor-pointer"
                onClick={() => toggleOperation(op.id)}
              >
                <div className="flex items-start">
                  {expandedOp === op.id ? (
                    <ChevronUp className="mr-2 text-military-orange h-5 w-5 animate-pulse" />
                  ) : (
                    <ChevronDown className="mr-2 text-military-orange h-5 w-5 transform group-hover:translate-y-1 transition-transform" />
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
                <div className="space-y-4 text-sm mt-4 mb-4 animate-accordion-down overflow-hidden">
                  {op.image && (
                    <div className="w-full overflow-hidden border border-military-green mb-1">
                      <div className="relative">
                        <img 
                          src={op.image}
                          alt={`Opération ${op.name}`}
                          className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-700"
                        />
                        {op.imageDesc && (
                          <p className="text-xs text-military-lightgold p-2 text-center border-t border-military-green/50 bg-military-dark/70">
                            {op.imageDesc}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                        <Users className="h-4 w-4 mr-2 text-military-orange" />
                        <p className="text-xs text-military-lightgray">EFFECTIFS</p>
                      </div>
                      <p>{op.unitSize}</p>
                    </div>
                    
                    <div className="military-frame bg-military-dark/40">
                      <div className="flex items-center mb-2">
                        <Shield className="h-4 w-4 mr-2 text-military-orange" />
                        <p className="text-xs text-military-lightgray">STATUT</p>
                      </div>
                      <p className={op.status === "En cours" ? "text-green-500 animate-pulse" : ""}>{op.status}</p>
                    </div>
                  </div>

                  <div className="military-frame bg-military-dark/40">
                    <div className="flex items-center mb-2">
                      <FileText className="h-4 w-4 mr-2 text-military-orange" />
                      <p className="text-xs text-military-lightgray">DÉTAILS DE MISSION</p>
                    </div>
                    <p className="whitespace-pre-line">{op.details}</p>
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
                        <p className="text-xs text-military-lightgold">OBJECTIFS</p>
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
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-military-green flex items-center justify-between">
          <div className="text-xs text-military-lightgold">
            <TerminalText text="Dossier OPEX mis à jour le 28/04/2023" delay={30} />
            <TerminalText text="Classification: AUTORISÉ" delay={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationsSection;
