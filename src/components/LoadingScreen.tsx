
import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import TerminalText from "./TerminalText";
import useSound from "@/hooks/useSound";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const { playSound } = useSound();
  
  const loadingStages = [
    "Initialisation du système d'archives...",
    "Établissement connexion sécurisée...",
    "Vérification des accréditations... OK",
    "Analyse biométrique... OK",
    "Chargement des archives militaires sécurisées...",
    "Déchiffrement des données... OK",
    "Accès aux données de l'opérateur : Schneider, Alexander... Accordé",
    "Préparation de l'interface utilisateur...",
    "Finalisation..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 1500);
          return 100;
        }
        return prev + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const stageIndex = Math.floor((progress / 100) * loadingStages.length);
    if (stageIndex < loadingStages.length && stageIndex !== currentStage) {
      setCurrentStage(stageIndex);
      playSound("terminal-beep");
    }
  }, [progress, currentStage, loadingStages.length]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-military-darkblue to-military-dark">
      <div className="w-full max-w-3xl military-frame relative rounded-lg shadow-2xl">
        <div className="absolute top-0 left-0 right-0 flex justify-center -translate-y-6">
          <div className="bg-military-dark px-6 py-2 border-2 border-military-green rounded-md shadow-lg">
            <h2 className="military-header text-xl">SYSTÈME D'ARCHIVES MILITAIRES</h2>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center mb-8">
          <div className="w-28 h-28 border-4 border-military-khaki rounded-full flex items-center justify-center bg-military-dark/30 shadow-inner">
            <img 
              src="/lovable-uploads/397fe1f0-2d27-44fd-86fe-28db388851b8.png" 
              alt="Logo DRHAT - Direction des Ressources Humaines de l'Armée de Terre" 
              className="w-24 h-24 animate-spin-slow"
            />
          </div>
        </div>
        
        <div className="space-y-2 mb-8 px-2">
          {loadingStages.slice(0, currentStage + 1).map((stage, index) => (
            <TerminalText 
              key={index} 
              text={stage} 
              delay={10}
              className={`px-3 py-1 ${index === currentStage ? "text-military-orange bg-military-dark/30 rounded-md" : ""}`}
            />
          ))}
        </div>
        
        <div className="mb-8 px-4">
          <div className="flex justify-between text-xs mb-1">
            <span>Progression</span>
            <span>{progress}%</span>
          </div>
          <Progress 
            value={progress} 
            className="h-3 bg-military-dark rounded-full overflow-hidden" 
            indicatorClassName="bg-gradient-to-r from-military-gold to-military-orange"
          />
        </div>
        
        <div className="text-xs text-military-lightgold border-t border-military-green pt-4 px-4 pb-2 rounded-b-lg backdrop-blur-sm">
          <p>SYSTÈME CLASSIFICATOIRE MILITAIRE :: NIVEAU D'ACCÈS BRAVO-DELTA</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
