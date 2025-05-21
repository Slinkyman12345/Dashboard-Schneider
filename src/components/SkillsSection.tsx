
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const combatSkills = [
    { name: "Tir de précision", level: 95, certified: true, notes: "Qualification: Tireur d'élite. Score record: 580/600." },
    { name: "Combat rapproché", level: 80, certified: true, notes: "Formation avancée au système Krav-Maga. Instructeur adjoint." },
    { name: "Armes légères", level: 90, certified: true, notes: "Qualifié sur l'ensemble des armes de service françaises et OTAN." },
    { name: "Explosifs", level: 70, certified: false, notes: "Connaissances théoriques et identification. Non qualifié pour manipulation." },
    { name: "Survie", level: 85, certified: true, notes: "Formations en milieux extrêmes. Spécialisation jungle et désert." },
  ];

  const technicalSkills = [
    { name: "Cryptographie", level: 95, certified: true, notes: "Expert en systèmes de chiffrement militaires. Formation spécialisée SSI." },
    { name: "Analyse de données", level: 90, certified: true, notes: "Maîtrise des logiciels d'analyse prédictive et croisement de sources." },
    { name: "Radiocommunications", level: 85, certified: true, notes: "Opérateur qualifié sur tous systèmes en dotation." },
    { name: "Informatique tactique", level: 80, certified: true, notes: "Spécialisation réseaux sécurisés et environnements dégradés." },
    { name: "SIGINT/COMINT", level: 90, certified: true, notes: "Qualifié sur systèmes d'interception et d'analyse des signaux." },
  ];

  const languages = [
    { name: "Français", level: 100, notes: "Langue maternelle" },
    { name: "Allemand", level: 100, notes: "Bilingue (origine familiale)" },
    { name: "Anglais", level: 95, notes: "Niveau professionnel - STANAG 3-3-3-3" },
    { name: "Arabe (standard)", level: 70, notes: "Niveau opérationnel - STANAG 3-2-2-3" },
    { name: "Russe", level: 60, notes: "Niveau intermédiaire - STANAG 2-2-2-2" },
    { name: "Dari", level: 40, notes: "Niveau basique - STANAG 1-1-1-1" },
  ];

  const specialCertifications = [
    {
      name: "Analyste en renseignement stratégique",
      date: "2019",
      issuer: "Direction du Renseignement Militaire",
      details: "Qualification niveau supérieur en analyse de menaces asymétriques"
    },
    {
      name: "Opérateur HUMINT",
      date: "2018",
      issuer: "13e RDP",
      details: "Techniques d'interrogatoire et manipulation de sources humaines"
    },
    {
      name: "Spécialiste en contre-ingérence",
      date: "2017",
      issuer: "DRSD",
      details: "Détection et neutralisation des menaces internes"
    },
    {
      name: "Expert en guerre électronique",
      date: "2016",
      issuer: "Centre d'Instruction des Réserves Para. - École des Transmissions",
      details: "Brouillage et contre-mesures électroniques"
    },
    {
      name: "Opérateur NRBC",
      date: "2015",
      issuer: "2e Régiment de Dragons",
      details: "Qualification en environnement contaminé"
    },
    {
      name: "[CLASSIFIÉ]",
      date: "2021",
      issuer: "[ACCÈS RESTREINT]",
      details: "[ACCÈS RESTREINT - NIVEAU ALPHA]"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="military-frame">
        <h2 className="military-header text-xl mb-4">COMPÉTENCES & SPÉCIALISATIONS :: SCHNEIDER, Alexander</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Combat Skills */}
          <div className="military-frame">
            <h3 className="military-header mb-4">COMPÉTENCES DE COMBAT</h3>
            
            <div className="space-y-4">
              {combatSkills.map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">{skill.name}</span>
                    <div className="flex gap-2 items-center">
                      <span className="text-military-orange">{skill.level}%</span>
                      {skill.certified && (
                        <Badge className="bg-military-green text-xs">Certifié</Badge>
                      )}
                    </div>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-military-dark" />
                  <p className="text-xs text-military-lightgray">{skill.notes}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Technical Skills */}
          <div className="military-frame">
            <h3 className="military-header mb-4">COMPÉTENCES TECHNIQUES</h3>
            
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">{skill.name}</span>
                    <div className="flex gap-2 items-center">
                      <span className="text-military-orange">{skill.level}%</span>
                      {skill.certified && (
                        <Badge className="bg-military-green text-xs">Certifié</Badge>
                      )}
                    </div>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-military-dark" />
                  <p className="text-xs text-military-lightgray">{skill.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Languages */}
        <div className="military-frame mt-6">
          <h3 className="military-header mb-4">LANGUES PARLÉES</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between">
                  <span className="font-bold">{lang.name}</span>
                  <span className="text-military-orange">{lang.level}%</span>
                </div>
                <Progress value={lang.level} className="h-2 bg-military-dark" />
                <p className="text-xs text-military-lightgray">{lang.notes}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Special Certifications */}
        <div className="military-frame mt-6">
          <h3 className="military-header mb-4">CERTIFICATIONS SPÉCIALES</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {specialCertifications.map((cert, index) => (
              <div key={index} className="p-3 border border-military-green bg-military-dark/50">
                <div className="flex justify-between mb-1">
                  <h4 className="font-bold">{cert.name}</h4>
                  <span className="text-xs">{cert.date}</span>
                </div>
                <p className="text-xs text-military-lightgray mb-2">Délivré par: {cert.issuer}</p>
                <p className="text-sm">{cert.details}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional Expertise */}
        <div className="military-frame mt-6">
          <h3 className="military-header mb-4">EXPERTISE OPÉRATIONNELLE</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-bold mb-2">Zones géographiques de spécialisation:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-military-green">Moyen-Orient</Badge>
                <Badge className="bg-military-green">Afrique Subsaharienne</Badge>
                <Badge className="bg-military-green">Europe de l'Est</Badge>
                <Badge className="bg-military-green">Maghreb</Badge>
                <Badge className="bg-military-dark">[Zone Classifiée]</Badge>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-2">Domaines d'expertise:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-military-khaki">Analyse des menaces asymétriques</Badge>
                <Badge className="bg-military-khaki">Contre-terrorisme</Badge>
                <Badge className="bg-military-khaki">Renseignement électronique</Badge>
                <Badge className="bg-military-khaki">Reconnaissance spéciale</Badge>
                <Badge className="bg-military-khaki">Cyberopérations</Badge>
              </div>
            </div>
            
            <div className="pt-4 border-t border-military-green/50">
              <p className="text-sm">
                <span className="font-bold">Note d'évaluation:</span> Le Major Schneider possède un profil de compétences 
                exceptionnellement diversifié alliant expertise technique et opérationnelle. Sa combinaison rare de compétences 
                linguistiques, d'expertise en renseignement et d'aptitudes au combat en fait un élément polyvalent particulièrement 
                adapté aux opérations complexes nécessitant autonomie et discernement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
