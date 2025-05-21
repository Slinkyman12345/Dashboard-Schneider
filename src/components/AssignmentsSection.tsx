
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const AssignmentsSection = () => {
  const [timelineTab, setTimelineTab] = useState("all");
  
  const assignments = [
    {
      period: "2010-2011",
      role: "Élève sous-officier",
      location: "École Nationale des Sous-Officiers d'Active (ENSOA), Saint-Maixent-l'École",
      details: "Formation initiale et spécialisée dans les transmissions et renseignements. Major de promotion.",
      grade: "Sergent (à la sortie)",
      notes: "Aptitudes remarquables en analyse de données et en langues étrangères."
    },
    {
      period: "2011-2013",
      role: "Opérateur transmissions",
      location: "40e Régiment de Transmissions, Thionville",
      details: "Affecté à la cellule de cryptographie et communications sécurisées.",
      grade: "Sergent",
      notes: "A participé à plusieurs exercices OTAN. Certification spécialiste en cryptographie militaire."
    },
    {
      period: "2013-2015",
      role: "Chef de station",
      location: "28e Groupe Géographique, Haguenau",
      details: "Responsable d'équipe de collecte et d'analyse géographique.",
      grade: "Sergent-Chef",
      notes: "Formation complémentaire en traitement d'images satellites. Expertise développée en analyse topographique et cartographie militaire."
    },
    {
      period: "2015-2017",
      role: "Sous-officier renseignement",
      location: "13e Régiment de Dragons Parachutistes, Martignas-sur-Jalle",
      details: "Intégration au sein de l'unité d'élite des forces spéciales.",
      grade: "Adjudant",
      notes: "Formation aux techniques de renseignement opérationnel. Stages de survie en milieu hostile et contre-interrogatoire."
    },
    {
      period: "2017-2020",
      role: "Chef de section analyse",
      location: "Centre du Renseignement Terre, Strasbourg",
      details: "Dirigeant une équipe de 7 analystes, spécialisé dans les analyses de menaces asymétriques.",
      grade: "Adjudant-Chef",
      notes: "Multiples formations avancées en analyse de données numériques et OSINT (Open Source Intelligence)."
    },
    {
      period: "2020-présent",
      role: "Coordonnateur renseignement",
      location: "État-Major des Armées, Cellule Spéciale Opérations, Paris",
      details: "Poste classifié attaché aux opérations spéciales interarmées.",
      grade: "Major",
      notes: "Détails de mission et fonctions précises classifiés au niveau supérieur."
    }
  ];

  const filteredAssignments = timelineTab === "all" 
    ? assignments 
    : assignments.filter(a => {
        if (timelineTab === "early" && (a.period === "2010-2011" || a.period === "2011-2013")) return true;
        if (timelineTab === "mid" && (a.period === "2013-2015" || a.period === "2015-2017")) return true;
        if (timelineTab === "recent" && (a.period === "2017-2020" || a.period === "2020-présent")) return true;
        return false;
      });

  return (
    <div className="space-y-6">
      <div className="military-frame">
        <h2 className="military-header text-xl mb-4">AFFECTATIONS :: SCHNEIDER, Alexander</h2>
        
        <div className="mb-6">
          <Tabs value={timelineTab} onValueChange={setTimelineTab} className="w-full">
            <TabsList className="bg-military-dark border border-military-green">
              <TabsTrigger value="all" className="data-[state=active]:bg-military-green">
                Toutes
              </TabsTrigger>
              <TabsTrigger value="early" className="data-[state=active]:bg-military-green">
                2010-2013
              </TabsTrigger>
              <TabsTrigger value="mid" className="data-[state=active]:bg-military-green">
                2013-2017
              </TabsTrigger>
              <TabsTrigger value="recent" className="data-[state=active]:bg-military-green">
                2017-présent
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="relative pl-8 border-l border-military-green">
          {filteredAssignments.map((assignment, index) => (
            <div key={index} className="mb-10 relative">
              <div className="absolute -left-10 w-5 h-5 rounded-full bg-military-green border-2 border-military-khaki"></div>
              
              <div className="military-frame">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-lg font-military text-military-orange">{assignment.period}</h3>
                  <span className="text-sm bg-military-dark/60 px-2 py-1 rounded">Grade: {assignment.grade}</span>
                </div>
                
                <div className="mb-3">
                  <p className="text-base font-bold">{assignment.role}</p>
                  <p className="text-sm text-military-lightgray">{assignment.location}</p>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-xs text-military-lightgray mb-1">DÉTAILS DE L'AFFECTATION</p>
                    <p>{assignment.details}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-military-lightgray mb-1">NOTES</p>
                    <p>{assignment.notes}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-military-green flex justify-between items-center">
          <div className="text-xs text-military-lightgray">
            <p>Document généré le {new Date().toLocaleDateString()}</p>
            <p>Classification: CONFIDENTIEL DÉFENSE</p>
          </div>
          
          <div className="text-military-orange text-sm">
            <p>Carrière: 14 ans de service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentsSection;
