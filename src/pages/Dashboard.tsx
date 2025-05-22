
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import SidebarMenu from "@/components/SidebarMenu";
import ProfileSection from "@/components/ProfileSection";
import AssignmentsSection from "@/components/AssignmentsSection";
import IncidentsSection from "@/components/IncidentsSection";
import OperationsSection from "@/components/OperationsSection";
import PsychProfileSection from "@/components/PsychProfileSection";
import MedicalSection from "@/components/MedicalSection";
import SkillsSection from "@/components/SkillsSection";
import MediaSection from "@/components/MediaSection";
import useSound from "@/hooks/useSound";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [loading, setLoading] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const { playSound } = useSound();
  const { toast } = useToast();
  
  const handleTabChange = (value: string) => {
    setLoading(true);
    setActiveTab(value);
    playSound("click");
    
    // Simuler le chargement des données
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Section chargée",
        description: `Accès au dossier ${value} accordé.`,
        duration: 2000,
      });
    }, 800);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
      setAnimationComplete(true);
      
      toast({
        title: "Connexion établie",
        description: "Bienvenue dans la base de données militaire.",
        duration: 3000,
      });
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // En-têtes de sécurité simulés qui défilent en bas de l'écran
  const securityHeaders = [
    "CONNEXION SÉCURISÉE ÉTABLIE",
    "CHIFFREMENT AES-256 ACTIVÉ",
    "PROTOCOLE DÉFENSE NIVEAU 3",
    "ACCÈS TEMPORAIRE AUTORISÉ",
    "SURVEILLANCE ACTIVE",
    "TRAÇAGE IP ACTIVÉ",
    "ENREGISTREMENT SESSION EN COURS"
  ];
  
  return (
    <div className="min-h-screen bg-military-darkblue text-military-gold flex relative overflow-hidden">
      {/* Effets globaux et animations */}
      <div className="noise"></div>
      
      {/* Animation de chargement au démarrage */}
      {isInitialLoad && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col justify-center items-center animate-fade-in">
          <div className="military-logo animate-pulse mb-8">
            <div className="w-24 h-24 border-4 border-military-gold rounded-full flex items-center justify-center">
              <div className="military-star text-military-gold">★</div>
            </div>
          </div>
          <div className="text-military-gold text-xl mb-4 font-military tracking-widest">
            ARCHIVES MILITAIRES
          </div>
          <div className="text-military-lightgold text-sm mb-8">
            Initialisation du système sécurisé...
          </div>
          <div className="w-64 h-2 bg-military-dark/60 relative overflow-hidden mb-2">
            <div className="absolute top-0 left-0 h-full bg-military-gold animate-progress-bar"></div>
          </div>
          <div className="flex space-x-2 mb-4">
            {Array.from({length: 4}).map((_, i) => (
              <div 
                key={i}
                className="w-2 h-2 rounded-full bg-military-gold/60 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
          <div className="text-xs text-military-lightgold animate-typing overflow-hidden whitespace-nowrap">
            Authentification réussie. Préparation des données...
          </div>
        </div>
      )}
      
      {/* Bandeau défilant de texte sécurité */}
      <div className="fixed bottom-0 left-0 right-0 bg-military-darkblue/95 border-t border-military-gold backdrop-blur-sm z-40 overflow-hidden">
        <div className="security-banner animate-security-banner flex items-center">
          {[...securityHeaders, ...securityHeaders].map((text, index) => (
            <div key={index} className="inline-block mx-8 text-xs text-military-gold whitespace-nowrap">
              {text}
            </div>
          ))}
        </div>
      </div>
      
      {/* Sidebar */}
      <div className={`w-64 border-r border-military-gold bg-military-darkblue/95 transition-all duration-700 ${animationComplete ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
        <div className="p-4 border-b border-military-gold bg-military-darkblue/95 text-center mb-4">
          <div className="text-military-gold font-military tracking-wider">SYSTÈME D'ARCHIVES</div>
          <div className="text-xs text-military-lightgold">Terminal MILNET-7745</div>
        </div>
        <SidebarMenu activeTab={activeTab} onTabChange={handleTabChange} />
        
        {/* Informations session */}
        <div className="absolute bottom-10 left-0 right-0 p-3 text-center">
          <div className="text-xs text-military-lightgold mb-2">SESSION ACTIVE</div>
          <div className="w-full h-1 bg-military-dark">
            <div className="h-full bg-military-gold animate-pulse" style={{ width: "67%" }}></div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className={`flex-1 p-6 overflow-y-auto transition-all duration-700 ${animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="military-header text-2xl mb-1 flex items-center text-military-gold">
              <span className="block w-2 h-6 bg-military-gold mr-2 animate-pulse"></span>
              ARCHIVES MILITAIRES
              <span className="block w-2 h-6 bg-military-gold ml-2 animate-pulse"></span>
            </h1>
            <p className="text-sm text-military-lightgold border-b border-military-gold/50 pb-2">
              Personnel :: Schneider, Alexander :: Dossier #A7742-SC
            </p>
          </div>
          
          <div className="bg-military-darkblue/90 p-3 rounded border border-military-gold text-xs backdrop-blur-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="text-military-lightgold">NIVEAU D'ACCÈS:</span>
              <span className="text-military-gold">BRAVO-DELTA</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-military-lightgold">SESSION:</span>
              <span className="text-military-gold">{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</span>
            </div>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          {loading ? (
            <div className="military-frame p-8 flex items-center justify-center bg-darker-blue">
              <div className="text-center">
                <div className="text-military-gold text-lg mb-3 animate-pulse">Chargement des données...</div>
                <div className="w-64 h-2 bg-military-dark mx-auto mb-2 overflow-hidden">
                  <div className="h-full bg-military-gold animate-progress-line"></div>
                </div>
                <p className="text-sm text-military-lightgold mt-2 animate-typing overflow-hidden whitespace-nowrap">
                  Déchiffrement et authentification en cours...
                </p>
              </div>
            </div>
          ) : (
            <>
              <TabsContent value="profile" className="mt-0">
                <ProfileSection />
              </TabsContent>
              
              <TabsContent value="assignments" className="mt-0">
                <AssignmentsSection />
              </TabsContent>
              
              <TabsContent value="incidents" className="mt-0">
                <IncidentsSection />
              </TabsContent>
              
              <TabsContent value="operations" className="mt-0">
                <OperationsSection />
              </TabsContent>
              
              <TabsContent value="psychProfile" className="mt-0">
                <PsychProfileSection />
              </TabsContent>
              
              <TabsContent value="medical" className="mt-0">
                <MedicalSection />
              </TabsContent>
              
              <TabsContent value="skills" className="mt-0">
                <SkillsSection />
              </TabsContent>
              
              <TabsContent value="media" className="mt-0">
                <MediaSection />
              </TabsContent>
            </>
          )}
        </Tabs>
      </div>
      
      {/* Overlay pour effet "écran ancien" */}
      <div className="fixed inset-0 pointer-events-none z-30">
        <div className="crt-overlay"></div>
      </div>
    </div>
  );
};

export default Dashboard;
