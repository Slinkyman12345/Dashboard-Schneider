
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface LogoItemProps {
  src: string;
  alt: string;
  description: string;
}

const LogoItem = ({ src, alt, description }: LogoItemProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 mb-2">
        <AspectRatio ratio={1}>
          <img src={src} alt={alt} className="w-full h-full object-contain" />
        </AspectRatio>
      </div>
      <p className="text-xs text-military-lightgold text-center">{description}</p>
    </div>
  );
};

const MilitaryLogos = () => {
  const logos = [
    { 
      src: "/lovable-uploads/cdec9279-bf44-4719-b527-dac416387f1f.png", 
      alt: "Logo CERAT",
      description: "Centre de Renseignement de l'Armée de Terre (CERAT)"
    },
    { 
      src: "/lovable-uploads/607334b1-faea-4c67-9a66-e337bab58bcb.png", 
      alt: "Logo ENSOA",
      description: "École Nationale des Sous-Officiers d'Active (ENSOA)"
    },
    { 
      src: "/lovable-uploads/c4f88de1-065a-4515-be9b-71e2c5e4e1f8.png", 
      alt: "Logo 13e RDP",
      description: "13e Régiment des Dragons Parachutistes (13e RDP)"
    }
  ];
  
  return (
    <div className="military-frame p-4 bg-military-dark/60 backdrop-blur-sm">
      <h3 className="military-header text-lg mb-4 text-military-gold border-b border-military-gold pb-2">
        AFFILIATION AUX UNITÉS
      </h3>
      <div className="flex flex-wrap justify-center gap-8 p-4">
        {logos.map((logo, index) => (
          <LogoItem 
            key={index} 
            src={logo.src} 
            alt={logo.alt} 
            description={logo.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default MilitaryLogos;
