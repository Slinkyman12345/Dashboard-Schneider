
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Key, User, Lock } from "lucide-react";
import useSound from "@/hooks/useSound";
import TerminalText from "./TerminalText";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface LoginScreenProps {
  onLogin: (username: string, password: string) => boolean;
  attempts: number;
}

const LoginScreen = ({ onLogin, attempts }: LoginScreenProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showTerminal, setShowTerminal] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const usernameRef = useRef<HTMLInputElement>(null);
  const { playSound } = useSound();
  
  useEffect(() => {
    const initTimer = setTimeout(() => {
      setShowTerminal(true);
      playSound("boot-up");
    }, 1000);

    const formTimer = setTimeout(() => {
      setShowLoginForm(true);
      playSound("terminal-beep");
    }, 4000);

    return () => {
      clearTimeout(initTimer);
      clearTimeout(formTimer);
    }
  }, []);

  useEffect(() => {
    if (showLoginForm && usernameRef.current) {
      usernameRef.current.focus();
    }
  }, [showLoginForm]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Identifiant et mot de passe requis.");
      playSound("error");
      return;
    }

    const success = onLogin(username, password);
    if (!success) {
      setError(`Accès refusé. Tentative ${attempts + 1}/3.`);
    }
  };

  const handleKeyPress = () => {
    playSound("key-press", 0.2);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-military-darkblue to-military-dark">
      <div className="noise"></div>
      <div className="w-full max-w-md relative">
        {showTerminal && (
          <div className="mb-8 military-frame animate-fade-in rounded-xl overflow-hidden">
            <div className="flex items-center justify-between mb-4 px-2">
              <Shield className="text-military-khaki" />
              <span className="text-xs text-military-lightgray bg-military-dark/50 px-3 py-1 rounded-full">TERMINAL SÉCURISÉ :: FONDATION SCP</span>
              <div className="h-3 w-3 rounded-full bg-military-red animate-pulse"></div>
            </div>
            
            <div className="flex justify-center mb-6">
              <div className="w-40 h-auto">
                <AspectRatio ratio={1/1}>
                  <img 
                    src="/lovable-uploads/397fe1f0-2d27-44fd-86fe-28db388851b8.png" 
                    alt="Logo DRHAT - Direction des Ressources Humaines de l'Armée de Terre" 
                    className="w-full h-full object-contain animate-spin-slow"
                  />
                </AspectRatio>
                <p className="text-xs text-center text-military-khaki mt-2">Direction des Ressources de l'Autorité du Haut-Commandement</p>
              </div>
            </div>
            
            <div className="bg-military-dark/30 p-3 rounded-lg mb-3">
              <TerminalText text="Initialisation du système d'accès sécurisé..." delay={20} />
              <TerminalText text="Chargement du protocole d'authentification..." delay={20} />
              <TerminalText text="ACCÈS TERMINAL F:SCP" delay={20} className="text-military-orange" />
              <TerminalText text="[Archives F:SCP - HIGH COMMAND AUTORITY]" delay={20} className="text-military-red font-bold" />
              <TerminalText text="ATTENTION: Accès restreint au personnel autorisé." delay={20} className="text-yellow-500" />
              <TerminalText text="Authentification requise..." delay={20} />
            </div>
          </div>
        )}
        
        {showLoginForm && (
          <form onSubmit={handleSubmit} className="military-frame animate-fade-in rounded-xl overflow-hidden">
            <div className="flex justify-center mb-6">
              <div className="bg-military-dark/50 px-8 py-2 rounded-full border border-military-gold/50">
                <h2 className="military-header text-xl">IDENTIFICATION DE L'OPÉRATEUR</h2>
              </div>
            </div>
            
            <div className="space-y-5 px-2">
              <div className="relative">
                <div className="absolute left-3 top-3 flex items-center justify-center w-6 h-6 rounded-full bg-military-dark border border-military-khaki">
                  <User className="text-military-khaki h-4 w-4" />
                </div>
                <Input
                  ref={usernameRef}
                  type="text"
                  placeholder="Identifiant"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-12 h-12 military-input"
                  onKeyDown={handleKeyPress}
                />
              </div>
              
              <div className="relative">
                <div className="absolute left-3 top-3 flex items-center justify-center w-6 h-6 rounded-full bg-military-dark border border-military-khaki">
                  <Lock className="text-military-khaki h-4 w-4" />
                </div>
                <Input
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 h-12 military-input"
                  onKeyDown={handleKeyPress}
                />
              </div>
              
              {error && (
                <div className="text-military-red text-sm font-military bg-military-dark/50 p-3 rounded-lg border border-military-red/50 animate-pulse">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    {error}
                  </div>
                </div>
              )}
              
              <Button
                type="submit"
                className="w-full h-12 bg-military-green hover:bg-military-khaki text-white rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Key className="w-4 h-4" />
                <span>ACCÉDER AU SYSTÈME</span>
              </Button>
            </div>
            
            <div className="mt-6 text-xs text-military-lightgray border-t border-military-green pt-4 px-3">
              <div className="bg-military-dark/30 p-3 rounded-lg">
                <p className="mb-1">AVERTISSEMENT: Toutes les connexions sont contrôlées et enregistrées.</p>
                <p>Usage non autorisé passible de poursuites.</p>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
