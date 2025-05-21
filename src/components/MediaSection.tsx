
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";

const MediaSection = () => {
  const [mediaTab, setMediaTab] = useState("photos");
  const { toast } = useToast();
  
  // Photos data
  const photos = [
    {
      id: "PHT-2016-001",
      title: "Formation Jungle - Guyane",
      date: "04/03/2016",
      classification: "Non classifié",
      description: "Schneider (centre) pendant le stage de survie en milieu tropical. Centre d'Entraînement à la Forêt Équatoriale.",
      thumbnail: "/placeholder.svg"
    },
    {
      id: "PHT-2017-042",
      title: "Exercice OTAN - Norway",
      date: "17/11/2017",
      classification: "Non classifié",
      description: "Schneider préparant le matériel de transmission lors de l'exercice Cold Response en Norvège.",
      thumbnail: "/placeholder.svg"
    },
    {
      id: "PHT-2018-103",
      title: "Capture - Identité militaire",
      date: "22/05/2018",
      classification: "Non classifié",
      description: "Photo d'identité officielle, uniforme de service.",
      thumbnail: "/placeholder.svg"
    },
    {
      id: "PHT-2019-074",
      title: "Démonstration d'équipement",
      date: "03/09/2019",
      classification: "Diffusion limitée",
      description: "Schneider présentant du matériel de cryptographie tactique à de nouveaux opérateurs.",
      thumbnail: "/placeholder.svg"
    }
  ];

  // Videos data
  const videos = [
    {
      id: "VID-2017-003",
      title: "Enregistrement d'exercice de tir",
      date: "11/04/2017",
      duration: "2:14",
      classification: "Non classifié",
      description: "Évaluation des compétences de tir de précision. Score: 578/600.",
      thumbnail: "/placeholder.svg"
    },
    {
      id: "VID-2018-027",
      title: "Briefing technique",
      date: "15/08/2018",
      duration: "17:32",
      classification: "Confidentiel",
      description: "Schneider présentant une analyse de menace cyber sur les réseaux militaires.",
      thumbnail: "/placeholder.svg"
    }
  ];

  // Audio data
  const audio = [
    {
      id: "AUD-2016-054",
      title: "Rapport verbal - Opération [CENSURÉ]",
      date: "17/06/2016",
      duration: "4:23",
      classification: "Secret Défense",
      description: "Compte-rendu verbal après mission de reconnaissance. Contenu partiellement censuré.",
      thumbnail: "/placeholder.svg"
    },
    {
      id: "AUD-2018-035",
      title: "Communication tactique interceptée",
      date: "22/03/2018",
      duration: "1:47",
      classification: "Confidentiel",
      description: "Enregistrement de Schneider coordonnant une extraction d'urgence. Usage pédagogique autorisé.",
      thumbnail: "/placeholder.svg"
    }
  ];

  // Documents data
  const documents = [
    {
      id: "DOC-2015-103",
      title: "Rapport d'expertise technique",
      date: "15/09/2015",
      type: "PDF",
      classification: "Diffusion limitée",
      description: "Analyse technique du système de communication [CENSURÉ] capturé lors de l'opération [CENSURÉ].",
      thumbnail: "/placeholder.svg"
    },
    {
      id: "DOC-2016-078",
      title: "Recommandations opérationnelles",
      date: "27/04/2016",
      type: "DOCX",
      classification: "Confidentiel",
      description: "Document rédigé par Schneider concernant l'amélioration des protocoles de communication cryptée en terrain hostile.",
      thumbnail: "/placeholder.svg"
    }
  ];

  // Map classification levels to colors
  const classificationColors = {
    "Non classifié": "bg-green-900/30 text-green-500 border-green-900/50",
    "Diffusion limitée": "bg-blue-900/30 text-blue-400 border-blue-900/50",
    "Confidentiel": "bg-yellow-900/30 text-yellow-400 border-yellow-900/50",
    "Confidentiel Défense": "bg-yellow-900/30 text-yellow-400 border-yellow-900/50",
    "Secret Défense": "bg-orange-900/30 text-orange-400 border-orange-900/50",
    "Très Secret Défense": "bg-red-900/30 text-red-400 border-red-900/50"
  };
  
  // Handler for media item click
  const handleMediaClick = (item: any) => {
    if (item.classification.includes("Secret")) {
      toast({
        title: "Accès refusé",
        description: `Niveau d'accréditation insuffisant pour accéder à ce contenu ${item.classification}.`,
        variant: "destructive"
      });
    } else {
      toast({
        title: "Fichier en cours de chargement",
        description: `Ouverture du fichier ${item.id} - ${item.title}`,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="military-frame animate-fade-in">
        <h2 className="military-header text-xl mb-4">DOSSIERS AUDIO/VISUELS :: SCHNEIDER, Alexander</h2>
        
        <Tabs value={mediaTab} onValueChange={setMediaTab} className="w-full">
          <TabsList className="bg-military-dark border border-military-green">
            <TabsTrigger value="photos" className="data-[state=active]:bg-military-green">
              Photos ({photos.length})
            </TabsTrigger>
            <TabsTrigger value="videos" className="data-[state=active]:bg-military-green">
              Vidéos ({videos.length})
            </TabsTrigger>
            <TabsTrigger value="audio" className="data-[state=active]:bg-military-green">
              Audio ({audio.length})
            </TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:bg-military-green">
              Documents ({documents.length})
            </TabsTrigger>
          </TabsList>
          
          {/* Photos Tab */}
          <TabsContent value="photos" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {photos.map((photo, index) => (
                <div 
                  key={index} 
                  className="military-frame bg-military-dark/50 overflow-hidden hover:bg-military-dark/70 transition-colors cursor-pointer"
                  onClick={() => handleMediaClick(photo)}
                >
                  <div className="aspect-w-16 aspect-h-9 mb-3">
                    <AspectRatio ratio={4/3}>
                      <img 
                        src={photo.thumbnail} 
                        alt={photo.title}
                        className="w-full h-full object-cover border border-military-green"
                      />
                    </AspectRatio>
                    {photo.classification.includes("Secret") && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-military-red font-bold animate-pulse">
                        ACCÈS RESTREINT
                      </div>
                    )}
                  </div>
                  
                  <div className="p-2">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-bold text-sm truncate">{photo.title}</h3>
                      <span className="text-xs text-military-lightgray">{photo.id}</span>
                    </div>
                    <p className="text-xs mb-2">{photo.date}</p>
                    <p className="text-sm mb-2">{photo.description}</p>
                    <div className={`text-xs px-2 py-1 rounded border text-center ${classificationColors[photo.classification as keyof typeof classificationColors] || ""}`}>
                      {photo.classification}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* Videos Tab */}
          <TabsContent value="videos" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {videos.map((video, index) => (
                <div 
                  key={index} 
                  className="military-frame bg-military-dark/50 overflow-hidden hover:bg-military-dark/70 transition-colors cursor-pointer"
                  onClick={() => handleMediaClick(video)}
                >
                  <div className="aspect-w-16 aspect-h-9 relative mb-3">
                    <AspectRatio ratio={16/9}>
                      <img 
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover border border-military-green"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-military-green/50 flex items-center justify-center hover:bg-military-green/80 transition-colors">
                          <div className="w-0 h-0 border-y-8 border-y-transparent border-l-14 border-l-white ml-1"></div>
                        </div>
                      </div>
                      {video.classification.includes("Secret") && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-military-red font-bold animate-pulse">
                          ACCÈS RESTREINT
                        </div>
                      )}
                    </AspectRatio>
                  </div>
                  
                  <div className="p-2">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-bold text-sm truncate">{video.title}</h3>
                      <span className="text-xs text-military-lightgray">{video.id}</span>
                    </div>
                    <div className="flex justify-between text-xs mb-2">
                      <span>{video.date}</span>
                      <span>Durée: {video.duration}</span>
                    </div>
                    <p className="text-sm mb-2">{video.description}</p>
                    <div className={`text-xs px-2 py-1 rounded border text-center ${classificationColors[video.classification as keyof typeof classificationColors] || ""}`}>
                      {video.classification}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* Audio Tab */}
          <TabsContent value="audio" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {audio.map((item, index) => (
                <div 
                  key={index} 
                  className="military-frame bg-military-dark/50 overflow-hidden hover:bg-military-dark/70 transition-colors cursor-pointer"
                  onClick={() => handleMediaClick(item)}
                >
                  <div className="p-3 flex items-center justify-center mb-2 border border-military-green">
                    <div className="w-12 h-12 rounded-full bg-military-green/50 flex items-center justify-center hover:bg-military-green/80 transition-colors">
                      <div className="w-0 h-0 border-y-8 border-y-transparent border-l-14 border-l-white ml-1"></div>
                    </div>
                    <div className="ml-4 w-full">
                      <div className="w-full h-4 bg-military-dark rounded overflow-hidden">
                        <div className="h-full bg-military-orange rounded" style={{ width: "65%" }}></div>
                      </div>
                      <div className="text-xs text-military-lightgray mt-1">{item.duration}</div>
                    </div>
                  </div>
                  
                  <div className="p-2">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-bold text-sm truncate">{item.title}</h3>
                      <span className="text-xs text-military-lightgray">{item.id}</span>
                    </div>
                    <p className="text-xs mb-2">{item.date}</p>
                    <p className="text-sm mb-2">{item.description}</p>
                    <div className={`text-xs px-2 py-1 rounded border text-center ${classificationColors[item.classification as keyof typeof classificationColors] || ""}`}>
                      {item.classification}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* Documents Tab */}
          <TabsContent value="documents" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((doc, index) => (
                <div 
                  key={index} 
                  className="military-frame bg-military-dark/50 overflow-hidden hover:bg-military-dark/70 transition-colors cursor-pointer"
                  onClick={() => handleMediaClick(doc)}
                >
                  <div className="p-3 flex items-center border border-military-green mb-3">
                    <div className="w-12 h-14 bg-military-dark/80 border border-military-lightgray flex items-center justify-center text-xs">
                      {doc.type}
                    </div>
                    <div className="ml-4">
                      <h3 className="font-bold text-sm truncate">{doc.title}</h3>
                      <p className="text-xs">{doc.id}</p>
                    </div>
                  </div>
                  
                  <div className="p-2">
                    <div className="flex justify-between mb-2">
                      <span className="text-xs">{doc.date}</span>
                    </div>
                    <p className="text-sm mb-2">{doc.description}</p>
                    <div className={`text-xs px-2 py-1 rounded border text-center ${classificationColors[doc.classification as keyof typeof classificationColors] || ""}`}>
                      {doc.classification}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 pt-4 border-t border-military-green">
          <div className="flex justify-between items-center text-xs">
            <div className="text-military-lightgray">
              <p>Base de données multimédia - DÉFENSE RESTREINTE</p>
              <p>Certains fichiers peuvent avoir été retirés ou censurés pour raisons de sécurité.</p>
            </div>
            <div className="bg-military-dark p-1 px-2 border border-military-green">
              {mediaTab === "photos" ? photos.length : 
               mediaTab === "videos" ? videos.length :
               mediaTab === "audio" ? audio.length :
               documents.length} fichier(s)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
