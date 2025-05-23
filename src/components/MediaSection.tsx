
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";
import { Image, FileImage, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const MediaSection = () => {
  const [mediaTab, setMediaTab] = useState("photos");
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();
  
  // Photos data
  const photos = [
    {
      id: "PHT-2016-001",
      title: "Entraînement en milieu réel",
      date: "04/03/2016",
      classification: "Non classifié",
      description: "Schneider lors d'un exercice d'entraînement en conditions réelles. Durant cet exercice, il démontre ses compétences tactiques et sa maîtrise des protocoles de sécurité.",
      thumbnail: "/lovable-uploads/65c58973-56f4-4dfd-b78d-143bbed0e749.png"
    },
    {
      id: "PHT-2017-042",
      title: "Opération Pamir - Afghanistan",
      date: "12/05/2010",
      classification: "Partiellement déclassifié",
      description: "Convoi militaire lors de l'Opération Pamir en Afghanistan où Schneider a établi un relais d'urgence sécurisé suite à une attaque qui a rompu les communications avec le poste de commandement.",
      thumbnail: "/lovable-uploads/4b3d35e6-71b9-449b-9a8f-ae76355f7ef1.png"
    },
    {
      id: "PHT-2018-103",
      title: "Opération Barkhane - Mali",
      date: "18/12/2015",
      classification: "Diffusion limitée",
      description: "Forces déployées lors de l'Opération Barkhane au Mali où Schneider a dirigé une équipe en mission de reconnaissance entre Gao et Ménaka, faisant face à une embuscade de combattants ennemis.",
      thumbnail: "/lovable-uploads/48d3f843-76b4-4704-9c36-8fc6f3df80d9.png"
    },
    {
      id: "PHT-2019-074",
      title: "Opération Lynx - Estonie",
      date: "12/05/2018",
      classification: "Diffusion limitée",
      description: "Schneider et son équipe lors de l'opération Lynx en Estonie, participant à un exercice de simulation d'une cyberattaque dans la base de Tapa où il co-gérait l'équipe chargée de contenir l'attaque.",
      thumbnail: "/lovable-uploads/5fa33a01-1adf-473a-a3ec-d05b05841244.png"
    },
    {
      id: "PHT-2020-015",
      title: "Photo d'identité officielle",
      date: "10/01/2020",
      classification: "Non classifié",
      description: "Photo d'identité officielle de Schneider Alexander pour les documents militaires. Cette photo est utilisée dans ses dossiers administratifs et d'identification.",
      thumbnail: "/lovable-uploads/11002651-daf9-48f1-b1ae-2df34776289f.png"
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
      description: "Évaluation des compétences de tir de précision. Score: 578/600. Cet exercice démontre l'excellente maîtrise des armes à feu par Schneider.",
      thumbnail: "/placeholder.svg"
    },
    {
      id: "VID-2018-027",
      title: "Briefing technique",
      date: "15/08/2018",
      duration: "17:32",
      classification: "Confidentiel",
      description: "Schneider présentant une analyse de menace cyber sur les réseaux militaires, incluant des stratégies de défense et de contre-mesures spécifiques.",
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
      description: "Compte-rendu verbal après mission de reconnaissance. Contenu partiellement censuré pour des raisons de sécurité nationale.",
      thumbnail: "/placeholder.svg"
    },
    {
      id: "AUD-2018-035",
      title: "Communication tactique interceptée",
      date: "22/03/2018",
      duration: "1:47",
      classification: "Confidentiel",
      description: "Enregistrement de Schneider coordonnant une extraction d'urgence. Usage pédagogique autorisé pour la formation des nouvelles recrues.",
      thumbnail: "/placeholder.svg"
    }
  ];

  // Documents data
  const documents = [
    {
      id: "DOC-2005-001",
      title: "Diplôme du Baccalauréat Scientifique",
      date: "22/07/2005",
      type: "PDF",
      classification: "Non classifié",
      description: "Diplôme du Baccalauréat Scientifique obtenu par Schneider Alexander avec mention Assez-Bien au Deutsch-Französisches Gymnasium (DFG) Saarbrücken.",
      thumbnail: "/lovable-uploads/e20981c0-133c-4561-99ba-6e2ef9ed8b9e.png"
    },
    {
      id: "DOC-2015-103",
      title: "Rapport d'expertise technique",
      date: "15/09/2015",
      type: "PDF",
      classification: "Diffusion limitée",
      description: "Analyse technique du système de communication [CENSURÉ] capturé lors de l'opération [CENSURÉ]. Ce rapport inclut des recommandations pour renforcer les systèmes alliés.",
      thumbnail: "/placeholder.svg"
    },
    {
      id: "DOC-2016-078",
      title: "Recommandations opérationnelles",
      date: "27/04/2016",
      type: "DOCX",
      classification: "Confidentiel",
      description: "Document rédigé par Schneider concernant l'amélioration des protocoles de communication cryptée en terrain hostile, basé sur son expérience en Afghanistan et au Mali.",
      thumbnail: "/placeholder.svg"
    }
  ];

  // Map classification levels to colors
  const classificationColors = {
    "Non classifié": "bg-green-900/30 text-green-500 border-green-900/50",
    "Diffusion limitée": "bg-blue-900/30 text-blue-400 border-blue-900/50",
    "Confidentiel": "bg-yellow-900/30 text-yellow-400 border-yellow-900/50",
    "Partiellement déclassifié": "bg-blue-900/30 text-blue-400 border-blue-900/50",
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

  // Handler for image click to open the enlargement dialog
  const handleImageClick = (item: any) => {
    setSelectedMedia(item);
    setDialogOpen(true);
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
                  className="military-frame bg-military-dark/50 overflow-hidden hover:bg-military-dark/70 transition-colors cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                  onClick={() => handleMediaClick(photo)}
                >
                  <div className="mb-3 overflow-hidden relative">
                    <AspectRatio ratio={4/3} className="w-full">
                      <img 
                        src={photo.thumbnail} 
                        alt={photo.title}
                        className="w-full h-full object-cover border border-military-green hover:opacity-90 transition-opacity"
                      />
                    </AspectRatio>
                    <button 
                      className="absolute top-2 right-2 p-1 bg-military-dark/70 rounded hover:bg-military-dark transition-colors border border-military-green"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleImageClick(photo);
                      }}
                      title="Agrandir l'image"
                    >
                      <ZoomIn size={18} className="text-military-green" />
                    </button>
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
                  className="military-frame bg-military-dark/50 overflow-hidden hover:bg-military-dark/70 transition-colors cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                  onClick={() => handleMediaClick(video)}
                >
                  <div className="relative mb-3">
                    <AspectRatio ratio={16/9} className="w-full">
                      <div className="w-full h-full border border-military-green bg-military-dark/80 flex items-center justify-center">
                        <Image className="w-16 h-16 text-military-lightgray opacity-50" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-military-green/50 flex items-center justify-center hover:bg-military-green/80 transition-colors">
                          <div className="w-0 h-0 border-y-8 border-y-transparent border-l-14 border-l-white ml-1"></div>
                        </div>
                      </div>
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
                  className="military-frame bg-military-dark/50 overflow-hidden hover:bg-military-dark/70 transition-colors cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
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
                  className="military-frame bg-military-dark/50 overflow-hidden hover:bg-military-dark/70 transition-colors cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
                  onClick={() => handleMediaClick(doc)}
                >
                  {doc.thumbnail.includes("/placeholder.svg") ? (
                    <div className="p-3 flex items-center border border-military-green mb-3">
                      <div className="w-12 h-14 bg-military-dark/80 border border-military-lightgray flex items-center justify-center text-xs">
                        {doc.type}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-sm truncate">{doc.title}</h3>
                        <p className="text-xs">{doc.id}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-3 overflow-hidden relative">
                      <AspectRatio ratio={4/3} className="w-full">
                        <img 
                          src={doc.thumbnail} 
                          alt={doc.title}
                          className="w-full h-full object-cover border border-military-green hover:opacity-90 transition-opacity"
                        />
                      </AspectRatio>
                      <button 
                        className="absolute top-2 right-2 p-1 bg-military-dark/70 rounded hover:bg-military-dark transition-colors border border-military-green"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageClick(doc);
                        }}
                        title="Agrandir l'image"
                      >
                        <ZoomIn size={18} className="text-military-green" />
                      </button>
                    </div>
                  )}
                  
                  <div className="p-2">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-bold text-sm truncate">{doc.title}</h3>
                      <span className="text-xs text-military-lightgray">{doc.id}</span>
                    </div>
                    <p className="text-xs mb-2">{doc.date}</p>
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

      {/* Image Enlargement Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="bg-military-dark border-military-green max-w-4xl w-[90vw] p-0 overflow-hidden">
          <div className="p-4 relative">
            <h3 className="text-military-gold text-xl mb-2 pr-8">{selectedMedia?.title}</h3>
            <DialogClose className="absolute right-4 top-4 text-military-lightgold hover:text-military-gold" />
            
            <div className="mt-2 mb-4 border border-military-green">
              <img 
                src={selectedMedia?.thumbnail} 
                alt={selectedMedia?.title}
                className="w-full object-contain max-h-[70vh]"
              />
            </div>
            
            <div className="p-3 bg-military-dark/70 border border-military-green">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-military-lightgold">{selectedMedia?.id}</span>
                <span className="text-sm text-military-lightgold">{selectedMedia?.date}</span>
              </div>
              <p className="text-sm mb-3">{selectedMedia?.description}</p>
              <div className={`text-xs inline-block px-3 py-1 rounded border ${classificationColors[selectedMedia?.classification as keyof typeof classificationColors] || ""}`}>
                {selectedMedia?.classification}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MediaSection;
