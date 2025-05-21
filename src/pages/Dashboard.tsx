
import { useState } from "react";
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

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const { playSound } = useSound();
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    playSound("click");
  };

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
          
          <div className="bg-military-dark/80 p-2 rounded border border-military-green text-xs">
            <p>NIVEAU D'ACCÈS: BRAVO-DELTA</p>
            <p>SESSION: {Math.floor(Math.random() * 10000).toString().padStart(4, '0')}</p>
          </div>
        </div>
        
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
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
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
