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
            Die Modellgrundlagen und -annahmen beeinflussen die Ergebnisse
            maßgeblich. Die hierausresultierende{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("aussagekraft")}
            >
              Aussagekraft der Simulationen
            </a>{" "}
            wird gesondert beschrieben.
          </p>

          <p>
            Die Simulationen wurden mit einem Oberflächenabflussmodell für das
            hydrologische Einzugsgebiet mit einer Auflösung von 1x1 Meter
            aufgebaut. Wesentliche Modellgrundlage ist das Digitale
            Geländemodell (DGM1). Als Grundlage hierfür dienen flächenhafte
            Höhenmessungen, die das Land NRW turnusmäßig mit einem Laserscanner
            aus einem Flugzeug heraus durchführt (Aufnahme durch Laseraltimetrie
            im Jahr 2021 und 2022). Für die Simulation wurde das DGM1 um die
            Gebäude aus dem Liegenschaftskataster (10/2022) ergänzt. Außerhalb
            des Gültigkeitsgebiets wurden Daten des Bundesamts für Kartographie
            und Geodäsie verwendet (Bundesamt für Kartographie und Geodäsie, ©
            GeoBasis-DE / BKG (2023)).
          </p>

          <p>
            Das Oberflächenmodell wurde anschließend um wichtige verrohrte
            Gewässerabschnitte sowie Geländedurchlässe ergänzt, um eine
            hydrologisch korrekte Abflussberechnung zu gewährleisten. In diesem
            Rahmen wurden auch weitere Fließhindernisse wie z. B. Mauern ergänzt
            und maßgebliche siedlungswasserwirtschaftliche Bauwerke (Hochwasser-
            und Regenrückhaltebecken) mit ihrer Wirkung im Oberflächenmodell
            abgebildet. Zusätzlich wurden die Gebäude auf Aktualität geprüft und
            abgerissene oder geplante Gebäude gegebenenfalls angepasst. Sehr
            neue Gebäude, die nach dem Modellaufbau fertiggestellt wurden (z. B.
            Neubaugebiete) sind daher noch nicht im Datenbestand erfasst. Hier
            lassen sich aus dem angrenzenden Gelände dennoch wichtige Hinweise
            zur möglichen Überflutung ableiten (s. auch Schaltfläche: Fehler im
            Geländemodell melden).
          </p>

          <p>
            Grundlage für die Modellanpassungen waren die kommunal verfügbaren
            Datensätze, Ortsbegehungen im Kreisgebiet und eine Prüfung durch
            kommunale Vertreter:innen. Auf Grundlage von Testrechnungen wurde
            das Modell anschließend gemeinsam mit Vertreter:innen aus den
            Kommunen geprüft und angepasst.
          </p>

          <p>Welche Daten wurden berücksichtigt?</p>

          <ul>
            <li>
              Landesweite Daten / Bezirksregierung Köln: Digitales
              Geländemodell, Digitales Lanschaftsmodell, ALKIS-Daten,
              ELWAS-Daten (Datenlizenz Deutschland Zero
              (https://www.govdata.de/dl-de/zero-2-0))
            </li>

            <li>...</li>
          </ul>

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
