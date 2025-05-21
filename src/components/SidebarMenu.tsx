
import { 
  User, 
  Briefcase, 
  AlertTriangle, 
  Globe, 
  Brain,
  HeartPulse,
  Star,
  FileImage
} from "lucide-react";
import useSound from "@/hooks/useSound";

interface SidebarMenuProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const SidebarMenu = ({ activeTab, onTabChange }: SidebarMenuProps) => {
  const { playSound } = useSound();
  
  const menuItems = [
    { id: "profile", label: "Biographie", icon: User },
    { id: "assignments", label: "Affectations", icon: Briefcase },
    { id: "incidents", label: "Incidents", icon: AlertTriangle },
    { id: "operations", label: "OPEX", icon: Globe },
    { id: "psychProfile", label: "Profil Psychologique", icon: Brain },
    { id: "medical", label: "Profil Médical", icon: HeartPulse },
    { id: "skills", label: "Compétences", icon: Star },
    { id: "media", label: "Médias", icon: FileImage }
  ];

  const handleClick = (id: string) => {
    onTabChange(id);
    playSound("terminal-beep");
  };

  return (
    <div className="p-4">
      <div className="flex justify-center mb-8">
        <img 
          src="/placeholder.svg" 
          alt="Logo Armée de Terre" 
          className="w-16 h-16"
        />
      </div>
      
      <div className="mb-6 text-center">
        <h2 className="military-header text-sm mb-1">DOSSIER PERSONNEL</h2>
        <p className="text-xl text-military-orange font-military">A. SCHNEIDER</p>
        <div className="mt-2 text-xs bg-military-red/20 p-1 text-red-400">
          NIVEAU CONFIDENTIALITÉ: ÉLEVÉ
        </div>
      </div>
      
      <div className="space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`w-full flex items-center p-2 text-left hover:bg-military-green/20 transition-colors ${
              activeTab === item.id ? "bg-military-green/30 border-l-2 border-military-orange" : ""
            }`}
            onClick={() => handleClick(item.id)}
          >
            <item.icon className="w-4 h-4 mr-3" />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </div>
      
      <div className="mt-12 text-xs text-military-lightgray">
        <div className="border-t border-military-green pt-4 space-y-2">
          <div className="flex justify-between">
            <span>Terminal ID:</span>
            <span>TERM-74392</span>
          </div>
          <div className="flex justify-between">
            <span>Connexion:</span>
            <span>SÉCURISÉE</span>
          </div>
          <div className="flex justify-between">
            <span>Status système:</span>
            <span className="text-green-500">ACTIF</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
