import React, { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = () => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey="allgemeineHinweise"
      sectionTitle="Allgemeine Hinweise"
      sectionBsStyle="warning"
      sectionContent={
        <div>
          <p>
            Die Starkregengefahrenkarte Tholey stellt in umschaltbaren
            Kartenansichten maximale Wassertiefen bzw. maximale
            Fließgeschwindigkeiten im gesamten Gültigkeitsgebiet dar, die im
            Verlauf von dem simulierten Starkregenszenario berechnet wurde. Bei
            den Ergebnissen handelt es sich um eine modelltechnische
            Untersuchung des Gültigkeitsgebiets mit dem Ziel die Realität
            möglichst gut abzubilden. Bei der Betrachtung und Interpretation der
            Ergebnisse sind die Modellgrundlagen und -annahmen zu
            berücksichtigen. Hinweise zur Aussagekraft der Ergebnisse werden
            nachfolgend beschrieben.
          </p>

          <p>
            Das Ergebnis der Simulation ist von der Dauer und Intensität des
            Regens abhängig, der für die Simulation angenommen wird.
          </p>
          <p>
            Der Farbverlauf für die <strong>Wassertiefen</strong> nutzt die
            Eckwerte 20 cm (hellblau), 40 cm (blau), 75 cm (dunkelblau) und >
            100 cm (violett). Wassertiefen unter 5 cm werden nicht mehr farbig
            ausgeprägt (transparente Darstellung). Zur Visualisierung der{" "}
            <strong>Fließgeschwindigkeiten</strong>, angegeben in Meter pro
            Sekunde (m/s), werden die Eckwerte 0,5 m/s (gelb), 1,0 m/s (orange),
            2,0 m/s (hellrot) und 4,0 m/s (dunkelrot) verwendet. Der untere
            Grenzwert für die farbige Anzeige einer Fließgeschwindigkeit liegt
            bei 0,2 m/s.
          </p>

          <p>
            Die Simulationsberechnungen wurden im Auftrag durch die izes gGmbH
            Saarbrücken durchgeführt.
          </p>

          <p>
            Die Bemessungsgrenze des Kanalnetzes wird bei den hier simulierten
            Ereignissen überschritten. Der größte Anteil des Niederschlagwassers
            fließt oberirdisch ab, wobei im urbanen Raum sowohl die
            Leistungsfähigkeit des Kanalnetzes als auch der Überstau des
            Kanalnetzes einen Einfluss auf die Überflutungssituation haben kann.
            Das Abflussverhalten des Kanalnetzes wurde durch eine kombinierte
            Betrachtung berücksichtigt. Die Eigenschaften der Geländeoberfläche
            variieren je nach Flächennutzung. Die verschiedenen
            Oberflächeneigenschaften wurden im Modell über unterschiedliche
            Geländerauheiten und zeitlich variable Versickerungsansätze
            abgebildet. Relevante Retentionsräume sowie Gewässerverrohrungen und
            Durchlässe wurden aufgrund ihrer Bedeutung für die Ableitungs- und
            Speicherwirkung von Oberflächenwasser als Elemente in das Modell
            aufgenommen. Je nach Regen und Randbedingungen in der Realität
            können in Teilgebieten die Wassertiefen auf dem Gelände höher oder
            geringer ausfallen. Um diese Variationen zu verstehen und besser
            einschätzen zu können, sind die unterschiedlichen Szenarien
            dargestellt.
          </p>
        </div>
      }
    />
  );
};
export default Component;
