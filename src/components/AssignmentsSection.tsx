import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Lock, Shield, Trash2 } from "lucide-react";
import useSound from "@/hooks/useSound";
import { Progress } from "@/components/ui/progress";

const AssignmentsSection = () => {
  const [timelineTab, setTimelineTab] = useState("all");
  const [showDeletionAnimation, setShowDeletionAnimation] = useState(false);
  const [deletionProgress, setDeletionProgress] = useState(0);
  const { playSound } = useSound();
  const progressIntervalRef = useRef<number | null>(null);
  
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

  const handleRevealClassified = () => {
    playSound("alert-siren");
    setShowDeletionAnimation(true);
    
    // Start the progress bar animation
    let progress = 0;
    progressIntervalRef.current = window.setInterval(() => {
      progress += 2;
      setDeletionProgress(progress);
      
      if (progress >= 100) {
        clearInterval(progressIntervalRef.current as number);
        
        // After animation completes, redirect to login page
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    }, 80);
  };
  
  // Clean up interval on component unmount
  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="space-y-6">
      <AnimatePresence>
        {showDeletionAnimation && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="max-w-md w-full flex flex-col items-center"
            >
              <div className="text-red-500 mb-4">
                <Shield size={80} className="animate-pulse" />
              </div>
              
              <h2 className="text-red-500 text-3xl font-military mb-2 text-center">ALERTE SÉCURITÉ</h2>
              <p className="text-military-lightgold text-xl mb-6 text-center">
                Suppression de votre poste et des données en cours
              </p>
              
              <div className="w-full mb-2">
                <Progress 
                  value={deletionProgress} 
                  className="h-4 bg-military-dark/60"
                  indicatorClassName="bg-red-600" 
                />
              </div>
              
              <div className="text-sm text-military-lightgold mb-8 w-full flex justify-between">
                <span>{deletionProgress}%</span>
                <span className="animate-pulse">Procédure irréversible</span>
              </div>
              
              <div className="flex items-center text-red-500 text-sm">
                <Trash2 size={16} className="mr-2" />
                <span className="animate-typing overflow-hidden whitespace-nowrap w-full">
                  Suppression des données d'accès. Votre compte sera désactivé.
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
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
              
              {assignment.period === "2020-présent" ? (
                <motion.div 
                  className="military-frame bg-military-dark border-red-900/70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute top-0 right-0 bg-red-900/70 text-xs text-white px-2 py-1 rounded-bl">
                    <div className="flex items-center">
                      <AlertTriangle size={12} className="mr-1" />
                      TRÈS SECRET DÉFENSE
                    </div>
                  </div>
                  
                  <div className="relative overflow-hidden py-6">
                    {/* Effet de scanlines */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                      {Array(20).fill(0).map((_, i) => (
                        <div 
                          key={i} 
                          className="h-px bg-red-500 w-full absolute" 
                          style={{ top: `${i * 5}%`, left: 0, opacity: 0.7 }} 
                        />
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <h3 className="text-lg font-military text-red-500">{assignment.period}</h3>
                      <span className="text-sm bg-military-dark/60 px-2 py-1 rounded text-red-400">Grade: {assignment.grade}</span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-base font-bold text-military-lightgold">{assignment.role}</p>
                      <p className="text-sm text-military-lightgray">{assignment.location}</p>
                    </div>

                    <div className="p-6 flex flex-col items-center justify-center">
                      <div className="border-2 border-red-900/70 rounded-full p-4 bg-military-dark/50 mb-4">
                        <Lock size={32} className="text-red-500" />
                      </div>
                      <h3 className="text-lg mb-2 text-red-500 font-military">ACCÈS RESTREINT</h3>
                      <p className="text-sm text-center max-w-md mb-6 text-military-lightgold">
                        Cette affectation contient des informations classifiées de niveau supérieur.
                        Niveau d'habilitation requis: TRÈS SECRET DÉFENSE.
                      </p>
                      <button 
                        onClick={handleRevealClassified}
                        className="bg-red-900/30 text-red-400 border border-red-900/50 px-4 py-2 hover:bg-red-900/50 transition-all duration-300 rounded"
                      >
                        Demander accès
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
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
              )}
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
