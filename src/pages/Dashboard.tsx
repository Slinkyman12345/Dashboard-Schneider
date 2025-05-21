
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
    <div className="min-h-screen bg-military-dark text-military-khaki flex relative overflow-hidden">
      {/* Effets globaux et animations */}
      <div className="scanner"></div>
      <div className="noise"></div>
      <div className="scan-effect"></div>
      <div className="classified-stamp animate-fade-in">Confidentiel</div>
      <div className="restricted-stamp animate-fade-in">Accès Restreint</div>
      
      {/* Animation de chargement au démarrage */}
      {isInitialLoad && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col justify-center items-center animate-fade-in">
          <div className="military-logo animate-pulse mb-8">
            <div className="w-24 h-24 border-4 border-military-orange rounded-full flex items-center justify-center">
              <div className="military-star text-military-orange">★</div>
            </div>
          </div>
          <div className="text-military-orange text-xl mb-4 font-military tracking-widest">
            ARCHIVES MILITAIRES
          </div>
          <div className="text-military-lightgray text-sm mb-8">
            Initialisation du système sécurisé...
          </div>
          <div className="w-64 h-2 bg-military-dark/60 relative overflow-hidden mb-2">
            <div className="absolute top-0 left-0 h-full bg-military-orange animate-progress-bar"></div>
          </div>
          <div className="flex space-x-2 mb-4">
            {Array.from({length: 4}).map((_, i) => (
              <div 
                key={i}
                className="w-2 h-2 rounded-full bg-military-orange/60 animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
          <div className="text-xs text-military-lightgray animate-typing overflow-hidden whitespace-nowrap">
            Authentification réussie. Préparation des données...
          </div>
        </div>
      )}
      
      {/* Bandeau défilant de texte sécurité */}
      <div className="fixed bottom-0 left-0 right-0 bg-military-dark/80 border-t border-military-green backdrop-blur-sm z-40 overflow-hidden">
        <div className="security-banner animate-security-banner flex items-center">
          {[...securityHeaders, ...securityHeaders].map((text, index) => (
            <div key={index} className="inline-block mx-8 text-xs text-military-orange whitespace-nowrap">
              {text}
            </div>
          ))}
        </div>
      </div>
      
      {/* Sidebar */}
      <div className={`w-64 border-r border-military-green bg-military-dark/90 transition-all duration-700 ${animationComplete ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}>
        <div className="p-4 border-b border-military-green bg-military-dark/90 text-center mb-4">
          <div className="text-military-orange font-military tracking-wider">SYSTÈME D'ARCHIVES</div>
          <div className="text-xs text-military-lightgray">Terminal MILNET-7745</div>
        </div>
        <SidebarMenu activeTab={activeTab} onTabChange={handleTabChange} />
        
        {/* Informations session */}
        <div className="absolute bottom-10 left-0 right-0 p-3 text-center">
          <div className="text-xs text-military-lightgray mb-2">SESSION ACTIVE</div>
          <div className="w-full h-1 bg-military-dark">
            <div className="h-full bg-military-green animate-pulse" style={{ width: "67%" }}></div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className={`flex-1 p-6 overflow-y-auto transition-all duration-700 ${animationComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="military-header text-2xl mb-1 flex items-center">
              <span className="block w-2 h-6 bg-military-orange mr-2 animate-pulse"></span>
              ARCHIVES MILITAIRES
              <span className="block w-2 h-6 bg-military-orange ml-2 animate-pulse"></span>
            </h1>
            <p className="text-sm text-military-lightgray border-b border-military-green/50 pb-2">
              Personnel :: Schneider, Alexander :: Dossier #A7742-SC
            </p>
          </div>
          
          <div className="bg-military-dark/80 p-3 rounded border border-military-green text-xs backdrop-blur-sm">
            <div className="flex items-center justify-between mb-1">
              <span>NIVEAU D'ACCÈS:</span>
              <span className="text-military-orange">BRAVO-DELTA</span>
            </div>
            <div className="flex items-center justify-between">
              <span>SESSION:</span>
              <span>{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</span>
            </div>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          {loading ? (
            <div className="military-frame p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-military-orange text-lg mb-3 animate-pulse">Chargement des données...</div>
                <div className="w-64 h-2 bg-military-dark mx-auto mb-2 overflow-hidden">
                  <div className="h-full bg-military-orange animate-progress-line"></div>
                </div>
                <p className="text-sm text-military-lightgray mt-2 animate-typing overflow-hidden whitespace-nowrap">
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
        <div className="scan-line"></div>
        <div className="crt-overlay"></div>
      </div>
    </div>
  );
};

export default Dashboard;
