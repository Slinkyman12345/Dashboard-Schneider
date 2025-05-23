
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronRight, AlertTriangle, Lock } from "lucide-react";

const HomeAssignmentsSection = () => {
  const [isClassified, setIsClassified] = useState(true);
  const [showContent, setShowContent] = useState(false);
  
  const assignmentsList = [
    {
      period: "2020-présent",
      role: "Coordonnateur renseignement",
      location: "État-Major des Armées, Cellule Spéciale Opérations, Paris",
      details: "CLASSIFIÉ"
    },
    {
      period: "2017-2020",
      role: "Chef de section analyse",
      location: "Centre du Renseignement Terre, Strasbourg",
      details: "CLASSIFIÉ"
    },
    {
      period: "2015-2017",
      role: "Sous-officier renseignement",
      location: "13e Régiment de Dragons Parachutistes, Martignas-sur-Jalle",
      details: "CLASSIFIÉ"
    }
  ];

  useEffect(() => {
    if (!isClassified) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isClassified]);

  const handleAccessClick = () => {
    setIsClassified(false);
  };

  return (
    <div className="military-frame relative overflow-hidden rounded-lg mt-8">
      {/* Top classification banner */}
      <div className="absolute top-0 left-0 right-0 bg-red-800 text-white px-3 py-1 flex items-center justify-between">
        <div className="flex items-center">
          <AlertTriangle size={14} className="mr-2" />
          <span className="text-xs font-bold uppercase">Document Classifié</span>
        </div>
        <span className="text-xs">NIVEAU D'ACCÈS: ÉLEVÉ</span>
      </div>
      
      {/* Content with classified overlay */}
      <div className="mt-6 relative">
        <h2 className="military-header text-xl mb-4">AFFECTATIONS RÉCENTES :: SCHNEIDER, Alexander</h2>
        
        {isClassified ? (
          <>
            <div className="relative z-10">
              <div className="p-6 flex flex-col items-center justify-center min-h-[300px]">
                <div className="border-2 border-military-green rounded-full p-4 bg-military-dark/30 mb-4">
                  <Lock size={40} className="text-military-orange" />
                </div>
                <h3 className="text-lg mb-2 text-red-500 font-military">ACCÈS RESTREINT</h3>
                <p className="text-sm text-center max-w-md mb-6 text-military-lightgold">
                  Ce document contient des informations classifiées de niveau supérieur.
                  Une authentification supplémentaire est requise pour accéder à ces données.
                </p>
                <button 
                  onClick={handleAccessClick} 
                  className="military-button flex items-center space-x-2 hover:bg-military-green/20"
                >
                  <span>Demander accès</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
            
            {/* Redacted content in background */}
            <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
              <div className="p-4 grid gap-4 grid-cols-1">
                {Array(5).fill(0).map((_, i) => (
                  <div key={i} className="bg-military-green/30 h-20 rounded-md relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3/4 h-4 bg-red-900/50 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: showContent ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-4">
              {assignmentsList.map((assignment, index) => (
                <Card key={index} className="military-card p-4 relative overflow-hidden">
                  {/* Classification watermark */}
                  <div className="absolute -right-12 -top-4 rotate-45 bg-red-800/20 px-10 py-1 text-xs text-red-200/70">
                    CONFIDENTIEL
                  </div>
                  
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <div className="flex items-center">
                      <span className="bg-military-orange/20 text-military-orange px-2 py-0.5 rounded-full text-xs mr-2">
                        {assignment.period}
                      </span>
                      <h3 className="text-lg font-military text-military-gold">{assignment.role}</h3>
                    </div>
                  </div>
                  
                  <div className="mb-2">
                    <p className="text-sm text-military-lightgray">{assignment.location}</p>
                  </div>
                  
                  <div className="border-t border-military-green/30 pt-2 mt-2">
                    {assignment.details === "CLASSIFIÉ" ? (
                      <div className="flex items-center text-red-500 text-sm">
                        <AlertTriangle size={14} className="mr-1" />
                        <span>Détails classifiés - Niveau d'accès insuffisant</span>
                      </div>
                    ) : (
                      <p className="text-sm">{assignment.details}</p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="flex justify-end mt-4">
              <a href="/dashboard?tab=assignments" className="military-button flex items-center space-x-2 text-sm">
                <span>Voir toutes les affectations</span>
                <ChevronRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Document control footer */}
      <div className="mt-6 pt-2 border-t border-military-green/50 flex justify-between items-center text-xs text-military-lightgold">
        <div>Doc. #AF-768-SC</div>
        <div>Dernière mise à jour: {new Date().toLocaleDateString()}</div>
      </div>
      
      {/* Classified scan lines effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-10">
        {Array(20).fill(0).map((_, i) => (
          <div 
            key={i} 
            className="h-px bg-red-500 w-full absolute" 
            style={{ top: `${i * 5}%`, left: 0, opacity: 0.7 }} 
          />
        ))}
      </div>
    </div>
  );
};

export default HomeAssignmentsSection;
