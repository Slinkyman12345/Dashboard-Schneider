
import { Card } from "@/components/ui/card";

const ProfileSection = () => {
  return (
    <div className="space-y-6">
      <div className="military-frame animate-fade-in">
        <h2 className="military-header text-xl mb-4">BIOGRAPHIE :: SCHNEIDER, Alexander</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="military-frame h-full flex flex-col">
              <img 
                src="/lovable-uploads/11002651-daf9-48f1-b1ae-2df34776289f.png" 
                alt="Photo d'identité militaire" 
                className="w-full h-64 object-cover mb-4 border border-military-green hover:brightness-110 transition-all duration-300"
              />
              <div className="bg-military-green/20 p-2 text-center mb-4 backdrop-blur-sm">
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
                    <p>15/06/1987</p>
                  </div>
                  <div>
                    <p className="text-xs text-military-lightgray mb-1">LIEU DE NAISSANCE</p>
                    <p>Caen, France</p>
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
                    <p>186 cm</p>
                  </div>
                  <div>
                    <p className="text-xs text-military-lightgray mb-1">POIDS</p>
                    <p>85 kg</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-military-green">
                  <p className="text-xs text-military-lightgray mb-2">PARCOURS SCOLAIRE</p>
                  <ul className="text-sm space-y-2">
                    <li>1993-1998: École primaire EFSD (École Française de Sarrebruck et Dilling), Allemagne</li>
                    <li>1998-2002: Collège Français de Sarrebruck - Brevet des Collèges, Mention Bien</li>
                    <li>2002-2005: Deutsch-Französisches Gymnasium (DFG) Saarbrücken - Baccalauréat Scientifique, Mention Assez-Bien</li>
                    <li>2005: Intégration École Nationale des Sous-Officiers d'Active (ENSOA)</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-military-green">
                  <p className="text-xs text-military-lightgray mb-2">PARCOURS MILITAIRE</p>
                  <div className="text-sm space-y-2">
                    <p>2005-2006: Formation initiale (8 mois) à l'ENSOA (Saint-Maixent-l'École)</p>
                    <p>2006-2008: Affecté au 51e Régiment de Transmission (51RT) à Douai</p>
                    <p>2008-2010: Formations avancées en cybersécurité</p>
                    <p>2010: OPEX Afghanistan (Opération Pamir) - Promotion au grade d'Adjudant</p>
                    <p>2015: OPEX Mali (Opération Barkhane)</p>
                    <p>2018: OPEX Estonie (Opération Lynx)</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-military-green">
                  <p className="text-xs text-military-lightgray mb-2">SIGNES DISTINCTIFS</p>
                  <div className="text-sm space-y-1">
                    <p>Cicatrice sur l'arcade sourcilière droite (résultat d'un incident lors de l'OPEX Afghanistan)</p>
                    <p>Tatouage sur l'épaule gauche (symbole du 51e Régiment des Transmissions)</p>
                    <p>Cheveux châtains foncés, yeux marron foncés, teint légèrement halé</p>
                    <p>IMC: 24.6</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-military-green">
                  <p className="text-xs text-military-lightgray mb-2">COMPÉTENCES SPÉCIFIQUES</p>
                  <p className="text-sm">
                    Spécialiste en cybersécurité et transmissions militaires. Expérience en gestion de crises et établissement de communications sécurisées en environnement hostile. Bilingue français-allemand, connaissances en programmation informatique.
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
