
import { Card } from "@/components/ui/card";

const ProfileSection = () => {
  return (
    <div className="space-y-6">
      <div className="military-frame">
        <h2 className="military-header text-xl mb-4">BIOGRAPHIE :: SCHNEIDER, Alexander</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="military-frame h-full flex flex-col">
              <img 
                src="/placeholder.svg" 
                alt="Photo d'identité militaire" 
                className="w-full h-64 object-cover mb-4 border border-military-green"
              />
              <div className="bg-military-green/20 p-2 text-center mb-4">
                <p className="text-sm">SCHNEIDER, Alexander</p>
                <p className="text-xs text-military-lightgray">Sous-Officier</p>
              </div>
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-military-lightgray">Matricule:</span>
                  <span>FRA-78456-SC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-military-lightgray">Status:</span>
                  <span className="text-green-500">ACTIF</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-military-lightgray">Habilitation:</span>
                  <span className="text-military-orange">DELTA</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="military-frame h-full">
              <h3 className="military-header text-lg mb-4">INFORMATIONS PERSONNELLES</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-military-lightgray mb-1">NOM</p>
                    <p>SCHNEIDER</p>
                  </div>
                  <div>
                    <p className="text-xs text-military-lightgray mb-1">PRÉNOM</p>
                    <p>Alexander</p>
                  </div>
                  <div>
                    <p className="text-xs text-military-lightgray mb-1">DATE DE NAISSANCE</p>
                    <p>17/05/1988</p>
                  </div>
                  <div>
                    <p className="text-xs text-military-lightgray mb-1">LIEU DE NAISSANCE</p>
                    <p>Strasbourg, France</p>
                  </div>
                  <div>
                    <p className="text-xs text-military-lightgray mb-1">NATIONALITÉ</p>
                    <p>Française</p>
                  </div>
                  <div>
                    <p className="text-xs text-military-lightgray mb-1">GROUPE SANGUIN</p>
                    <p>O+</p>
                  </div>
                  <div>
                    <p className="text-xs text-military-lightgray mb-1">TAILLE</p>
                    <p>185 cm</p>
                  </div>
                  <div>
                    <p className="text-xs text-military-lightgray mb-1">POIDS</p>
                    <p>82 kg</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-military-green">
                  <p className="text-xs text-military-lightgray mb-2">PARCOURS SCOLAIRE</p>
                  <ul className="text-sm space-y-2">
                    <li>2006-2008: Baccalauréat Scientifique, Lycée Kléber, Strasbourg</li>
                    <li>2008-2010: BTS Systèmes Numériques, Option Informatique et Réseaux</li>
                    <li>2010: Intégration École Nationale des Sous-Officiers d'Active (ENSOA)</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-military-green">
                  <p className="text-xs text-military-lightgray mb-2">FAMILLE</p>
                  <div className="text-sm space-y-1">
                    <p>Père: SCHNEIDER, Michael (1960-2018) - Ancien militaire</p>
                    <p>Mère: SCHNEIDER, Élise (née LAURENT) - Enseignante</p>
                    <p>Frère: SCHNEIDER, Nicolas (1990) - Civil</p>
                    <p>État civil: Célibataire</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-military-green">
                  <p className="text-xs text-military-lightgray mb-2">ORIGINES</p>
                  <p className="text-sm">
                    Issu d'une famille avec tradition militaire. Grand-père et père ayant servi dans l'Armée de Terre.
                    Double culture franco-allemande avec racines familiales en Alsace et en Allemagne.
                    Parfaitement bilingue français-allemand depuis l'enfance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
