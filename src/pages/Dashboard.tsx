
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
  const { playSound } = useSound();
  const { toast } = useToast();
  
  const handleTabChange = (value: string) => {
    setLoading(true);
    setActiveTab(value);
    playSound("click");
    
    // Simulating data loading
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
    toast({
      title: "Connexion établie",
      description: "Bienvenue dans la base de données militaire.",
      duration: 3000,
    });
  }, []);

  return (
    <div className="min-h-screen bg-military-dark text-military-khaki flex relative overflow-hidden">
      <div className="scanner"></div>
      <div className="noise"></div>
      <div className="scan-effect"></div>
      <div className="classified-stamp">Confidentiel</div>
      <div className="restricted-stamp">Accès Restreint</div>
      
      {/* Sidebar */}
      <div className="w-64 border-r border-military-green bg-military-dark/90">
        <SidebarMenu activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="military-header text-2xl mb-1">ARCHIVES MILITAIRES</h1>
            <p className="text-sm text-military-lightgray">
              Personnel :: Schneider, Alexander :: Dossier #A7742-SC
            </p>
          </div>
          
          <div className="bg-military-dark/80 p-2 rounded border border-military-green text-xs backdrop-blur-sm">
            <p>NIVEAU D'ACCÈS: BRAVO-DELTA</p>
            <p>SESSION: {Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</p>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          {loading ? (
            <div className="military-frame p-8 flex items-center justify-center animate-pulse">
              <div className="text-center">
                <div className="text-military-orange text-lg mb-2">Chargement des données...</div>
                <div className="w-64 h-2 bg-military-dark mx-auto">
                  <div className="h-full bg-military-orange animate-pulse" style={{ width: `${Math.random() * 100}%` }}></div>
                </div>
                <p className="text-sm text-military-lightgray mt-2">Déchiffrement et vérification...</p>
              </div>
            </div>
          ) : (
            <>
              <TabsContent value="profile" className="mt-0 animate-fade-in">
                <ProfileSection />
              </TabsContent>
              
              <TabsContent value="assignments" className="mt-0 animate-fade-in">
                <AssignmentsSection />
              </TabsContent>
              
              <TabsContent value="incidents" className="mt-0 animate-fade-in">
                <IncidentsSection />
              </TabsContent>
              
              <TabsContent value="operations" className="mt-0 animate-fade-in">
                <OperationsSection />
              </TabsContent>
              
              <TabsContent value="psychProfile" className="mt-0 animate-fade-in">
                <PsychProfileSection />
              </TabsContent>
              
              <TabsContent value="medical" className="mt-0 animate-fade-in">
                <MedicalSection />
              </TabsContent>
              
              <TabsContent value="skills" className="mt-0 animate-fade-in">
                <SkillsSection />
              </TabsContent>
              
              <TabsContent value="media" className="mt-0 animate-fade-in">
                <MediaSection />
              </TabsContent>
            </>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
