import React, { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import LicenseLBK from "react-cismap/topicmaps/wuppertal/LicenseLuftbildkarte";
import LicenseStadtplanTagNacht from "react-cismap/topicmaps/wuppertal/LicenseStadtplanTagNacht";

/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = () => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey="datengrundlage"
      sectionTitle="Datengrundlagen"
      sectionBsStyle="warning"
      sectionContent={
        <div>
          <p>
            Die Ergebnisse der Simulation basieren maßgeblich auf den
            Modellgrundlagen und -annahmen. Die hieraus{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("aussagekraft")}
            >
              resultierende Aussagekraft
            </a>{" "}
            der Simulationen wird gesondert beschrieben.
          </p>

          <p>
            Das simulierte Starkregenereignis wurde anhand einer
            2DOberflächenabflussmodellierung mit der Software FoodArea für die
            hydrologischen Einzugsgebiete der Gemeinde Tholey generiert.
            Wesentliche Grundlage ist das Digitale Geländemodell mit einer
            Auflösung von 1 x 1 Meter (DGM1). Dieses DGM1 wird mittels
            flächenhaften Höhenmessungen des Geländes, die durch das Saarland
            turnusmäßig per Laserscanning aus einem Flugzeug heraus durchführt
            (Zeitpunkt der Aufnahme 2016), ermittelt. Für die Simulation wurde
            das DGM1 mittels Digitalem Oberflächenmodel (DOM1; flächenhaften
            Höhenmessungen aller Objekte auf dem Gelände) und dem
            Liegenschaftskataster (ALK; 04/2019) um die Gebäude und sonstige
            Abflusshindernisse bzw. Geländeerhöhungen (u.a.
            Grundstücksbegrenzungsmauern, teilweise Bewuchs) ergänzt.
          </p>

          <p>
            Das optimierte Digitale Geländemodell wurde anschließend um wichtige
            Abflussinformationen entlang der einzelnen Gewässerabschnitte (u.a.
            Verrohrungen, Einlaufbauwerke, Brückenbauwerke) ergänzt, um eine
            hydrologisch korrekte Abflussberechnung zu gewährleisten. In diesem
            Zusammenhang wurden weitere maßgebliche
            siedlungswasserwirtschaftliche Bauwerke (Hochwasser- und
            Regenrückhaltebecken) mit ihrer Wirkung im Oberflächenmodell
            abgebildet. Zusätzlich wurden die Gebäude auf Aktualität geprüft und
            abgerissene oder geplante Gebäude gegebenenfalls angepasst. Sehr
            neue Gebäude, die nach dem Modellaufbau fertiggestellt wurden (z. B.
            Neubaugebiete) sind daher noch nicht im Datenbestand erfasst. Hier
            lassen sich dennoch wichtige Hinweise aus dem angrenzenden Gelände
            zur möglichen Überflutung ableiten (s. auch Schaltfläche: Fehler im
            Geländemodell melden). Zusätzlich zum Digitalen Geländemodell sind
            Informationen zur Bodenart und zur Flächennutzung in die Simulation
            eingeflossen. Hieraus lassen sich Rückschlusse bzgl. der
            Flächenversiegelung, der Versickerungsfähigkeit der Böden und der
            Rauigkeit der Oberflächenbeschaffenheit ziehen.
          </p>
          <p>
            Die Bemessungsgrenze des Kanalnetzes wird bei dem hier simulierten
            Ereignis überschritten. Der größte Anteil des Niederschlagwassers
            fließt oberirdisch ab, wobei im urbanen Raum sowohl die
            Leistungsfähigkeit des Kanalnetzes als auch der Überstau des
            Kanalnetzes einen Einfluss auf die Überflutungssituation haben kann.
            Das Abflussverhalten des Kanalnetzes wurde im Rahmen dieser
            Betrachtung nicht berücksichtigt. Relevante Retentionsräume sowie
            Gewässerverrohrungen und Durchlässe wurden aufgrund ihrer Bedeutung
            für die Ableitungs- und Speicherwirkung von Oberflächenwasser als
            Elemente in das Modell aufgenommen. Je nach Regen und
            Randbedingungen in der Realität (z.B. Verklausungen, Baustellen,
            Sofortmaßnahmen etc.) können in Teilgebieten die Wassertiefen auf
            dem Gelände höher oder geringer ausfallen.{" "}
          </p>
          <p>
            Die benötigten Datensätze sind durch das Landesamt für Vermessung,
            Geoinformation und Landentwicklung des Saarlandes (LVGL) zur
            Verfügung gestellt worden.
          </p>

          <p>
            Zur Betrachtung der Ergebnisse stehen drei verschiedene
            Hintergrundkarten zur Verfügung, die auf den folgenden
            Geodatendiensten und Geodaten basieren:
          </p>
          <ul>
            <li>
              <strong>Basiskarte (grau)</strong>: Kartendienst (vektorbasiert)
              der cismet GmbH. Datengrundlage: <strong>cismet light</strong>.
              Wöchentlich in einem automatischen Prozess aktualisierte
              Bereitstellung der OpenStreetMap als Vektorlayer mit der
              OpenMapTiles-Server-Technologie. Lizenzen der Ausgangsprodukte:{" "}
              <a
                target="_legal"
                href="https://github.com/openmaptiles/openmaptiles/blob/master/LICENSE.md"
              >
                Openmaptiles
              </a>{" "}
              und{" "}
              <a
                target="_legal"
                href="https://www.opendatacommons.org/licenses/odbl/1.0/"
              >
                ODbL
              </a>{" "}
              (OpenStreetMap contributors).
            </li>
            <li>
              <strong>Basiskarte (bunt)</strong>: Kartendienst (vektorbasiert)
              der cismet GmbH. Datengrundlage: <strong>cismet basic</strong>.
              Wöchentlich in einem automatischen Prozess aktualisierte
              Bereitstellung der OpenStreetMap als Vektorlayer mit der
              OpenMapTiles-Server-Technologie. Lizenzen der Ausgangsprodukte:{" "}
              <a
                target="_legal"
                href="https://github.com/openmaptiles/openmaptiles/blob/master/LICENSE.md"
              >
                Openmaptiles
              </a>{" "}
              und{" "}
              <a
                target="_legal"
                href="https://www.opendatacommons.org/licenses/odbl/1.0/"
              >
                ODbL
              </a>{" "}
              (OpenStreetMap contributors).
            </li>
            <li>
              <strong>Luftbildkarte</strong>: (1) Kartendienst (WMS) des LVGL.
              Datengrundlage:{" "}
              <strong>Digitale Orthophotos (DOP) des Saarlandes</strong>{" "}
              WMS-Dienst für farbige, digitale, georeferenzierte, lagegenaue,
              entzerrte Luftbilder des Saarlandes. (
              <a
                target="_legal"
                href="https://geoportal.saarland.de/mapbender/php/mod_showMetadata.php?languageCode=de&resource=layer&layout=tabs&id=44340"
              >
                weiter Informationen
              </a>
              ). (2) Stadtplan (bunt) (siehe oben)
            </li>
          </ul>
        </div>
      }
    />
  );
};
export default Component;
