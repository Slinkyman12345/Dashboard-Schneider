
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
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
      <div className="flex justify-center mb-6">
        <div className="w-40">
          <AspectRatio ratio={16/9}>
            <img 
              src="/lovable-uploads/7ed29ddb-7bf4-46ce-b22b-2f16fcc29075.png" 
              alt="Logo des Forces Armées Françaises" 
              className="w-full h-full object-contain"
            />
          </AspectRatio>
          <p className="text-xs text-center text-military-lightgold mt-1">Forces Armées Françaises</p>
        </div>
      </div>
      
      <div className="mb-6 text-center">
        <h2 className="military-header text-sm mb-1 text-military-lightgold">DOSSIER PERSONNEL</h2>
        <p className="text-xl text-military-gold font-military">A. SCHNEIDER</p>
        <div className="mt-2 text-xs bg-red-900/20 p-1 text-red-400 border border-red-900/50">
          NIVEAU CONFIDENTIEL: ÉLEVÉ
        </div>
      </div>
      
      <div className="space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`w-full flex items-center p-2 text-left hover:bg-military-gold/20 transition-colors text-military-gold ${
              activeTab === item.id ? "bg-military-gold/30 border-l-2 border-military-gold" : ""
            }`}
            onClick={() => handleClick(item.id)}
          >
            <item.icon className="w-4 h-4 mr-3" />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </div>
      
      <div className="mt-12 text-xs text-military-lightgold">
        <div className="border-t border-military-gold pt-4 space-y-2">
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
            <span className="text-red-500">INACTIF</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
