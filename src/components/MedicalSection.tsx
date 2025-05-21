
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const MedicalSection = () => {
  const [medicalTab, setMedicalTab] = useState("summary");
  
  return (
    <div className="space-y-6">
      <div className="military-frame">
        <h2 className="military-header text-xl mb-4">PROFIL MÉDICAL :: SCHNEIDER, Alexander</h2>
        
        <Tabs value={medicalTab} onValueChange={setMedicalTab} className="w-full">
          <TabsList className="bg-military-dark border border-military-green">
            <TabsTrigger value="summary" className="data-[state=active]:bg-military-green">
              Résumé
            </TabsTrigger>
            <TabsTrigger value="bloodwork" className="data-[state=active]:bg-military-green">
              Analyses Sanguines
            </TabsTrigger>
            <TabsTrigger value="injuries" className="data-[state=active]:bg-military-green">
              Blessures
            </TabsTrigger>
            <TabsTrigger value="vaccinations" className="data-[state=active]:bg-military-green">
              Vaccinations
            </TabsTrigger>
          </TabsList>
          
          {/* Summary Tab */}
          <TabsContent value="summary" className="mt-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="military-frame">
                <h3 className="military-header mb-4">INFORMATIONS GÉNÉRALES</h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-military-lightgray">Groupe Sanguin</p>
                      <p className="text-lg">O+</p>
                    </div>
                    <div>
                      <p className="text-xs text-military-lightgray">Allergies</p>
                      <p className="text-lg">Aucune</p>
                    </div>
                    <div>
                      <p className="text-xs text-military-lightgray">Taille</p>
                      <p className="text-lg">185 cm</p>
                    </div>
                    <div>
                      <p className="text-xs text-military-lightgray">Poids</p>
                      <p className="text-lg">82 kg</p>
                    </div>
                    <div>
                      <p className="text-xs text-military-lightgray">IMC</p>
                      <p className="text-lg">24.0</p>
                    </div>
                    <div>
                      <p className="text-xs text-military-lightgray">Vision</p>
                      <p className="text-lg">10/10 (corrigée)</p>
                    </div>
                  </div>
                  
                  <Separator className="bg-military-green/50" />
                  
                  <div>
                    <p className="text-xs text-military-lightgray">Condition physique</p>
                    <p>Excellente. Supérieur à la moyenne des soldats du même groupe d'âge. Endurance cardiovasculaire particulièrement développée.</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-military-lightgray">Antécédents familiaux notables</p>
                    <p>Père: Hypertension diagnostiquée à 52 ans. Grand-père paternel: Infarctus à 68 ans.</p>
                  </div>
                </div>
              </div>
              
              <div className="military-frame">
                <h3 className="military-header mb-4">ÉVALUATION ACTUELLE</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-military-lightgray">Date du dernier examen</p>
                    <p className="font-bold">12/03/2023</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-military-lightgray">Médecin examinateur</p>
                    <p>Lt-Col. Dr Lefevre, Hôpital d'instruction des armées Percy</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-military-lightgray">Statut général</p>
                    <p className="text-green-500 font-bold">APTE</p>
                    <p>Aucune restriction médicale pour le service actif et les déploiements.</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-military-lightgray">Suivi particulier</p>
                    <p>Contrôle pulmonaire semestriel suite à exposition toxique (2020).</p>
                    <p>Prochain rendez-vous: 15/09/2023</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Bloodwork Tab */}
          <TabsContent value="bloodwork" className="mt-4">
            <div className="military-frame">
              <div className="flex justify-between items-center mb-4">
                <h3 className="military-header">ANALYSES SANGUINES</h3>
                <span className="text-xs text-military-lightgray">Dernière analyse: 12/03/2023</span>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-military-dark">
                    <tr className="border-b border-military-green">
                      <th className="text-left p-2">Paramètre</th>
                      <th className="text-left p-2">Valeur</th>
                      <th className="text-left p-2">Référence</th>
                      <th className="text-left p-2">Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-military-green/30">
                      <td className="p-2">Hémoglobine</td>
                      <td className="p-2">15.2 g/dL</td>
                      <td className="p-2">13.5-17.5 g/dL</td>
                      <td className="p-2 text-green-500">Normal</td>
                    </tr>
                    <tr className="border-b border-military-green/30">
                      <td className="p-2">Leucocytes</td>
                      <td className="p-2">6.8 G/L</td>
                      <td className="p-2">4.0-10.0 G/L</td>
                      <td className="p-2 text-green-500">Normal</td>
                    </tr>
                    <tr className="border-b border-military-green/30">
                      <td className="p-2">Plaquettes</td>
                      <td className="p-2">257 G/L</td>
                      <td className="p-2">150-400 G/L</td>
                      <td className="p-2 text-green-500">Normal</td>
                    </tr>
                    <tr className="border-b border-military-green/30">
                      <td className="p-2">Glycémie à jeun</td>
                      <td className="p-2">0.92 g/L</td>
                      <td className="p-2">0.7-1.0 g/L</td>
                      <td className="p-2 text-green-500">Normal</td>
                    </tr>
                    <tr className="border-b border-military-green/30">
                      <td className="p-2">Cholestérol total</td>
                      <td className="p-2">1.95 g/L</td>
                      <td className="p-2">&lt;2.0 g/L</td>
                      <td className="p-2 text-green-500">Normal</td>
                    </tr>
                    <tr className="border-b border-military-green/30">
                      <td className="p-2">HDL-Cholestérol</td>
                      <td className="p-2">0.59 g/L</td>
                      <td className="p-2">&gt;0.4 g/L</td>
                      <td className="p-2 text-green-500">Normal</td>
                    </tr>
                    <tr className="border-b border-military-green/30">
                      <td className="p-2">LDL-Cholestérol</td>
                      <td className="p-2">1.26 g/L</td>
                      <td className="p-2">&lt;1.6 g/L</td>
                      <td className="p-2 text-green-500">Normal</td>
                    </tr>
                    <tr className="border-b border-military-green/30">
                      <td className="p-2">Triglycérides</td>
                      <td className="p-2">0.75 g/L</td>
                      <td className="p-2">&lt;1.5 g/L</td>
                      <td className="p-2 text-green-500">Normal</td>
                    </tr>
                    <tr className="border-b border-military-green/30">
                      <td className="p-2">Créatinine</td>
                      <td className="p-2">10.3 mg/L</td>
                      <td className="p-2">7.0-13.0 mg/L</td>
                      <td className="p-2 text-green-500">Normal</td>
                    </tr>
                    <tr>
                      <td className="p-2">ALT (SGPT)</td>
                      <td className="p-2">27 UI/L</td>
                      <td className="p-2">&lt;45 UI/L</td>
                      <td className="p-2 text-green-500">Normal</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 p-3 border border-military-green bg-military-dark/50">
                <p className="text-sm">
                  <span className="font-bold">Note du médecin:</span> Profil biologique excellent, typique d'un individu en excellente forme physique pratiquant une activité sportive régulière. Aucune anomalie détectée.
                </p>
              </div>
            </div>
          </TabsContent>
          
          {/* Injuries Tab */}
          <TabsContent value="injuries" className="mt-4">
            <div className="military-frame">
              <h3 className="military-header mb-4">HISTORIQUE DES BLESSURES</h3>
              
              <div className="space-y-6">
                <div className="border-l-2 border-military-green pl-4 py-1">
                  <div className="flex flex-wrap justify-between mb-1">
                    <p className="text-sm font-bold">23/03/2014</p>
                    <p className="text-sm text-military-lightgray">Fracture du poignet droit</p>
                  </div>
                  <p className="text-sm">
                    Fracture simple du radius distal droit lors d'un exercice de descente en rappel. 
                    Traitement: Immobilisation par plâtre pendant 6 semaines. Rééducation complète.
                    Récupération: 100%. Aucune séquelle fonctionnelle.
                  </p>
                </div>
                
                <div className="border-l-2 border-military-green pl-4 py-1">
                  <div className="flex flex-wrap justify-between mb-1">
                    <p className="text-sm font-bold">02/11/2016</p>
                    <p className="text-sm text-military-lightgray">Lacération jambe gauche</p>
                  </div>
                  <p className="text-sm">
                    Lacération profonde de 12 cm sur la face externe de la cuisse gauche suite à [CENSURÉ]. 
                    Traitement: Suture chirurgicale (17 points). Antibiothérapie préventive.
                    Récupération: Complète. Cicatrice visible non invalidante.
                  </p>
                </div>
                
                <div className="border-l-2 border-military-green pl-4 py-1">
                  <div className="flex flex-wrap justify-between mb-1">
                    <p className="text-sm font-bold">29/03/2020</p>
                    <p className="text-sm text-military-lightgray">Exposition à agent toxique</p>
                  </div>
                  <p className="text-sm">
                    Exposition pulmonaire à agent chimique non identifié lors d'une mission de reconnaissance.
                    Symptômes: Difficultés respiratoires temporaires, irritation des voies respiratoires, toux persistante.
                    Traitement: Oxygénothérapie, corticostéroïdes, bronchodilatateurs.
                    Suivi: Examens pulmonaires semestriels. Dernière évaluation montre capacité pulmonaire à 96% des valeurs prédites.
                  </p>
                </div>
                
                <div className="border-l-2 border-military-red pl-4 py-1">
                  <div className="flex flex-wrap justify-between mb-1">
                    <p className="text-sm font-bold">11/12/2022</p>
                    <p className="text-sm text-military-red">Blessure classifiée</p>
                  </div>
                  <p className="text-sm">
                    [INFORMATION CLASSIFIÉE - NIVEAU ALPHA]
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Vaccinations Tab */}
          <TabsContent value="vaccinations" className="mt-4">
            <div className="military-frame">
              <h3 className="military-header mb-4">HISTORIQUE DES VACCINATIONS</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-military-dark">
                    <tr className="border-b border-military-green">
                      <th className="text-left p-2">Vaccin</th>
                      <th className="text-left p-2">Date</th>
                      <th className="text-left p-2">Lot</th>
                      <th className="text-left p-2">Validité</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-military-green/30">
                      <td className="p-2">Tétanos-Diphtérie-Poliomyélite</td>
                      <td className="p-2">17/06/2021</td>
                      <td className="p-2">TD1542</td>
                      <td className="p-2">17/06/2031</td>
                    </tr>
                    <tr className="border-b border-military-green/30">
                      <td className="p-2">Hépatite A</td>
                      <td className="p-2">05/03/2022</td>
                      <td className="p-2">HAV2279</td>
                      <td className="p-2">05/03/2032</td>
                    </tr>
                    <tr className="border-b border-military-green/30">
                      <td className="p-2">Hépatite B</td>
                      <td className="p-2">05/03/2022</td>
                      <td className="p-2">HB9023</td>
                      <td className="p-2">À vie</td>
                    </tr>
                    <tr className="border-b border-military-green/30">
                      <td className="p-2">Fièvre jaune</td>
                      <td className="p-2">12/01/2018</td>
                      <td className="p-2">YFV773</td>
                      <td className="p-2">À vie</td>
                    </tr>
                    <tr className="border-b border-military-green/30">
                      <td className="p-2">Fièvre typhoïde</td>
                      <td className="p-2">15/08/2022</td>
                      <td className="p-2">TYP4427</td>
                      <td className="p-2">15/08/2025</td>
                    </tr>
                    <tr className="border-b border-military-green/30">
                      <td className="p-2">Méningite A+C+Y+W135</td>
                      <td className="p-2">15/08/2022</td>
                      <td className="p-2">MEN1205</td>
                      <td className="p-2">15/08/2027</td>
                    </tr>
                    <tr className="border-b border-military-green/30">
                      <td className="p-2">Rage</td>
                      <td className="p-2">22/09/2021</td>
                      <td className="p-2">RV0472</td>
                      <td className="p-2">22/09/2026</td>
                    </tr>
                    <tr className="border-b border-military-green/30">
                      <td className="p-2">COVID-19</td>
                      <td className="p-2">04/02/2023</td>
                      <td className="p-2">CV3345</td>
                      <td className="p-2">04/02/2024</td>
                    </tr>
                    <tr>
                      <td className="p-2">[CLASSIFIÉ]</td>
                      <td className="p-2">30/04/2022</td>
                      <td className="p-2">SPEC883</td>
                      <td className="p-2">30/04/2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-4 p-3 border border-military-green bg-military-dark/50">
                <p className="text-sm">
                  <span className="font-bold">Note:</span> Le sujet a reçu toutes les vaccinations requises pour le personnel déployé en opérations extérieures. 
                  La vaccination classifiée concerne un programme spécial d'immunisation du personnel sélectionné pour missions à haut risque NRBC.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MedicalSection;
