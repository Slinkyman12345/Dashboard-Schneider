
import { useState, useEffect } from "react";
import useSound from "@/hooks/useSound";

const AlertScreen = () => {
  const [flashState, setFlashState] = useState(false);
  const { playSound } = useSound();

  useEffect(() => {
    playSound("alert-siren", 0.3, true);
    
    const flashInterval = setInterval(() => {
      setFlashState(prev => !prev);
    }, 500);
    
    return () => {
      clearInterval(flashInterval);
    };
  }, []);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-4 ${flashState ? 'bg-military-red/70' : 'bg-military-dark'} transition-colors duration-500`}>
      <div className="w-full max-w-lg">
        <div className="animate-pulse">
          <img 
            src="/placeholder.svg" 
            alt="Logo Armée de Terre" 
            className="w-24 h-24 mx-auto mb-6 animate-rotate-logo"
          />
          
          <h1 className="text-4xl font-bold text-white mb-4 text-center">⚠️ ALERTE DE SÉCURITÉ ⚠️</h1>
          <div className="military-frame">
            <p className="text-xl text-white mb-6 text-center">TENTATIVE D'INTRUSION DÉTECTÉE</p>
            
            <div className="space-y-4 mb-8">
              <p className="text-red-500 font-bold">VIOLATION DE SYSTÈME EN COURS</p>
              <p className="text-white">Adresse IP enregistrée</p>
              <p className="text-white">Localisation détectée</p>
              <p className="text-white">Notification envoyée à l'administrateur système</p>
              <p className="text-white">Verrouillage automatique des terminaux activé</p>
            </div>
            
            <p className="text-yellow-500 font-military text-center text-sm animate-pulse">
              Le système de sécurité a détecté une activité suspecte.<br />
              Cette tentative d'accès non autorisé a été enregistrée.<br />
              Les autorités compétentes ont été notifiées.
            </p>
          </div>
          
          <div className="text-center mt-8">
            <button 
              className="bg-military-dark text-white px-6 py-3 rounded border border-military-red"
              onClick={() => window.location.reload()}
            >
              RÉINITIALISER LE TERMINAL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertScreen;
