
import { Card } from "@/components/ui/card";

const ProfileSection = () => {
  return (
    <div className="space-y-6">
      <div className="military-frame animate-fade-in">
        <h2 className="military-header text-xl mb-4 text-military-gold">BIOGRAPHIE :: SCHNEIDER, Alexander</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="military-frame h-full flex flex-col bg-darker-blue">
              <div className="relative">
                <img 
                  src="/lovable-uploads/11002651-daf9-48f1-b1ae-2df34776289f.png" 
                  alt="Photo d'identité militaire" 
                  className="w-full object-cover mb-1 border border-military-gold hover:brightness-110 transition-all duration-300 aspect-[3/4] max-h-[350px]"
                />
                <p className="text-xs text-military-lightgold p-2 text-center border-t border-military-gold/50 bg-military-dark/70">
                  Photo d'identité officielle - Personnel militaire
                </p>
              </div>
              <div className="bg-military-dark/80 p-2 text-center mb-4 backdrop-blur-sm border-t border-b border-military-gold">
                <p className="text-sm text-military-gold">SCHNEIDER, Alexander</p>
                <p className="text-xs text-military-lightgold">Sous-Officier</p>
              </div>
              <div className="text-sm space-y-2 text-military-gold">
                <div className="flex justify-between">
                  <span className="text-military-lightgold">Matricule:</span>
                  <span>FRA-78456-SC</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-military-lightgold">Status:</span>
                  <span className="text-red-500">INACTIF</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-military-lightgold">Habilitation:</span>
                  <span className="text-military-gold">DELTA</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="military-frame h-full bg-darker-blue">
              <h3 className="military-header text-lg mb-4 text-military-gold">INFORMATIONS PERSONNELLES</h3>
              
              <div className="space-y-4 text-military-gold">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-military-lightgold mb-1">NOM</p>
                    <p>SCHNEIDER</p>
                  </div>
                  <div>
                    <p className="text-xs text-military-lightgold mb-1">PRÉNOM</p>
                    <p>Alexander</p>
                  </div>
                  <div>
                    <p className="text-xs text-military-lightgold mb-1">DATE DE NAISSANCE</p>
                    <p>15/06/1987</p>
                  </div>
                  <div>
                    <p className="text-xs text-military-lightgold mb-1">LIEU DE NAISSANCE</p>
                    <p>Caen, France</p>
                  </div>
                  <div>
                    <p className="text-xs text-military-lightgold mb-1">NATIONALITÉ</p>
                    <p>Française</p>
                  </div>
                  <div>
                    <p className="text-xs text-military-lightgold mb-1">GROUPE SANGUIN</p>
                    <p>O+</p>
                  </div>
                  <div>
                    <p className="text-xs text-military-lightgold mb-1">TAILLE</p>
                    <p>186 cm</p>
                  </div>
                  <div>
                    <p className="text-xs text-military-lightgold mb-1">POIDS</p>
                    <p>85 kg</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-military-gold">
                  <p className="text-xs text-military-lightgold mb-2">PARCOURS SCOLAIRE</p>
                  <ul className="text-sm space-y-2">
                    <li>1993-1998: École primaire EFSD (École Française de Sarrebruck et Dilling), Allemagne</li>
                    <li>1998-2002: Collège Français de Sarrebruck - Brevet des Collèges, Mention Bien</li>
                    <li>2002-2005: Deutsch-Französisches Gymnasium (DFG) Saarbrücken - Baccalauréat Scientifique, Mention Assez-Bien</li>
                    <li>2005: Intégration École Nationale des Sous-Officiers d'Active (ENSOA)</li>
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-military-gold">
                  <p className="text-xs text-military-lightgold mb-2">PARCOURS MILITAIRE</p>
                  <div className="text-sm space-y-2">
                    <p>2005-2006: Formation initiale (8 mois) à l'ENSOA (Saint-Maixent-l'École)</p>
                    <p>2006-2008: Affecté au 51e Régiment de Transmission (51RT) à Douai</p>
                    <p>2008-2010: Formations avancées en cybersécurité</p>
                    <p>2010: OPEX Afghanistan (Opération Pamir) - Promotion au grade d'Adjudant</p>
                    <p>2015: OPEX Mali (Opération Barkhane)</p>
                    <p>2018: OPEX Estonie (Opération Lynx)</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-military-gold">
                  <p className="text-xs text-military-lightgold mb-2">SIGNES DISTINCTIFS</p>
                  <div className="text-sm space-y-1">
                    <p>Cicatrice sur l'arcade sourcilière droite (résultat d'un incident lors de l'OPEX Afghanistan)</p>
                    <p>Tatouage sur l'épaule gauche (symbole du 51e Régiment des Transmissions)</p>
                    <p>Cheveux châtains foncés, yeux marron foncés, teint légèrement halé</p>
                    <p>IMC: 24.6</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-military-gold">
                  <p className="text-xs text-military-lightgold mb-2">COMPÉTENCES SPÉCIFIQUES</p>
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
