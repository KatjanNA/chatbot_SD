import { useState, useEffect } from "react";
import iconSvg from "../../imports/ICON03.svg";
import { ETFComparison } from "./ETFComparison";

interface StreamingResponseProps {
  onComplete?: () => void;
  onStart?: () => void;
}

const fullText = {
  intro:
    " Geld anlegen ist echt keine leichte Entscheidung, oder? Super, dass du überhaupt darüber nachdenkst! Um deine 3000€ anzulegen, erkläre ich dir einfach und klar, wie ich es an deiner Stelle machen würde 👇",
  etfA: " ist dein Motor für echtes Wachstum! Mit einer starken Rendite von 5,2% und internationalen Fokus bietet er dir die Chance, direkt am globalen Fortschritt teilzuhaben. Das mittlere Risiko ist dabei der faire Preis für diese Dynamik.",
  etfB: " setzt auf Nachhaltigkeit 🌱in Europa bei sehr niedrigen Kosten von 0,2%. Auch wenn die Rendite mit 3,1% etwas ruhiger ausfällt, bringt dieser Fonds dir Stabilität und Sicherheit in deine Anlage..",
  recommendation:
    " Mein Empfehlung für dich: Geh mit 70% in ETF A und sichere die restlichen 30% im ETF B ab. Dies wären 2100€ in A und 900€ in B. So kombinierst du Diversifikation und thematische Gewichtung sinnvoll 👍",
  conclusion:
    " 70/30 ist ein ausgewogener Ansatz aus Wachstum und Stabilität. Du nutzt die Renditechancen der globalen Märkte, hast aber gleichzeitig einen stabilisierenden Anteil durch ETF B. Wenn du dich an diese einfache Strategie hältst, bist du schon sehr solide aufgestellt 😊",
  end: " Viel Erfolg – und denk dran: Dranbleiben ist der Schlüssel 🔑",
  disclaimer:
    " Diese Inhalte wurden von einer Künstlichen Intelligenz erstellt. Sie dienen zu Informationszwecken, können Fehler enthalten und ersetzen keine professionelle Beratung. Bitte prüfen Sie wichtige Angaben eigenständig, bevor Sie auf deren Basis handeln.",
};

export function StreamingResponse({
  onComplete,
  onStart,
}: StreamingResponseProps) {
  const [showTable, setShowTable] = useState(false);
  const [displayedIntro, setDisplayedIntro] = useState("");
  const [displayedEtfA, setDisplayedEtfA] = useState("");
  const [displayedEtfB, setDisplayedEtfB] = useState("");
  const [showRecommendation, setShowRecommendation] =
    useState(false);
  const [displayedRecommendation, setDisplayedRecommendation] =
    useState("");
  const [displayedConclusion, setDisplayedConclusion] =
    useState("");
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [displayedDisclaimer, setDisplayedDisclaimer] = useState("");
  const [showEnd, setShowEnd] = useState(false);
  const [displayedEnd, setDisplayedEnd] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    // Call onStart immediately to hide thinking indicator
    if (onStart) {
      onStart();
    }

    // Step 1: Show table immediately
    setShowTable(true);

    // Step 2: Stream intro text
    const introWords = fullText.intro.split(" ");
    let introIndex = 0;

    const streamIntro = () => {
      if (introIndex < introWords.length - 1) {
        setDisplayedIntro(
          (prev) =>
            prev + (prev ? " " : "") + introWords[introIndex],
        );
        introIndex++;
        timeoutId = setTimeout(streamIntro, 50);
      } else {
        // Step 3: Stream ETF A text
        const etfAWords = fullText.etfA.split(" ");
        let etfAIndex = 0;

        const streamEtfA = () => {
          if (etfAIndex < etfAWords.length - 1) {
            setDisplayedEtfA(
              (prev) =>
                prev + (prev ? " " : "") + etfAWords[etfAIndex],
            );
            etfAIndex++;
            timeoutId = setTimeout(streamEtfA, 50);
          } else {
            // Step 4: Stream ETF B text
            const etfBWords = fullText.etfB.split(" ");
            let etfBIndex = 0;

            const streamEtfB = () => {
              if (etfBIndex < etfBWords.length - 1) {
                setDisplayedEtfB(
                  (prev) =>
                    prev +
                    (prev ? " " : "") +
                    etfBWords[etfBIndex],
                );
                etfBIndex++;
                timeoutId = setTimeout(streamEtfB, 50);
              } else {
                // Step 5: Show recommendation box
                setShowRecommendation(true);

                // Step 6: Stream recommendation text
                const recWords =
                  fullText.recommendation.split(" ");
                let recIndex = 0;

                const streamRec = () => {
                  if (recIndex < recWords.length - 1) {
                    setDisplayedRecommendation(
                      (prev) =>
                        prev +
                        (prev ? " " : "") +
                        recWords[recIndex],
                    );
                    recIndex++;
                    timeoutId = setTimeout(streamRec, 50);
                  } else {
                    // Step 7: Stream conclusion text
                    const conclusionWords =
                      fullText.conclusion.split(" ");
                    let conclusionIndex = 0;

                    const streamConclusion = () => {
                      if (
                        conclusionIndex <
                        conclusionWords.length - 1
                      ) {
                        setDisplayedConclusion(
                          (prev) =>
                            prev +
                            (prev ? " " : "") +
                            conclusionWords[conclusionIndex],
                        );
                        conclusionIndex++;
                        timeoutId = setTimeout(
                          streamConclusion,
                          50,
                        );
                      } else {
                        setShowEnd(true);
                        setDisplayedEnd("");
                        const endWords = fullText.end.split(" ");
                        let endIndex = 0;

                        const streamEnd = () => {
                          if (
                            endIndex <
                            endWords.length -1 
                          ) {
                            setDisplayedEnd((prev) =>
                              prev
                                ? prev + " " + endWords[endIndex]
                                : endWords[endIndex],
                            );
                            endIndex++;
                            timeoutId = setTimeout(
                              streamEnd,
                              50,
                            );
                          } else {
                            setShowDisclaimer(true);
                            setDisplayedDisclaimer("");
                            const disclaimerWords =
                              fullText.disclaimer.trim().split(" ");
                            let disclaimerIndex = 0;

                            const streamDisclaimer = () => {
                              if (
                                disclaimerIndex <
                                disclaimerWords.length -1 
                              ) {
                                setDisplayedDisclaimer((prev) =>
                                  prev
                                    ? prev + " " +
                                      disclaimerWords[disclaimerIndex]
                                    : disclaimerWords[disclaimerIndex],
                                );
                                disclaimerIndex++;
                                timeoutId = setTimeout(
                                  streamDisclaimer,
                                  50,
                                );
                              } else {
                                if (onComplete) {
                                  onComplete();
                                }
                              }
                            };

                            streamDisclaimer();
                          }
                        };

                        streamEnd();
                      }
                    };

                    streamConclusion();
                  }
                };

                streamRec();
              }
            };

            streamEtfB();
          }
        };

        streamEtfA();
      }
    };

    timeoutId = setTimeout(streamIntro, 300);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [onComplete, onStart]);

  return (
    <div className="space-y-3">
      {showTable && <ETFComparison />}

      <div className="text-base leading-relaxed">
        {displayedIntro && (
          <p className="mb-3">{displayedIntro}</p>
        )}

        {displayedEtfA && (
          <p className="mb-3">
            <strong>ETF A (Alpha Global)</strong>{" "}
            {displayedEtfA.replace("ETF A (Alpha Global) ", "")}
          </p>
        )}

        {displayedEtfB && (
          <p className="mb-3">
            <strong>ETF B (Beta Nachhaltig)</strong>{" "}
            {displayedEtfB.replace(
              "ETF B (Beta Nachhaltig) ",
              "",
            )}
          </p>
        )}

        {showRecommendation && (
          <div className="bg-violet-50 border-l-4 border-violet-500 p-3 rounded mt-3">
            <p className="font-semibold text-violet-900 mb-2">
              💡 Meine Empfehlung:
            </p>
            {displayedRecommendation && (
              <p className="text-violet-800">
                {(() => {
                  const parts =
                    displayedRecommendation.split("40%");
                  const beforeForty = parts[0] || "";
                  const afterForty = parts[1] || "";
                  const afterFortyParts =
                    afterForty.split("60%");
                  const betweenFortyAndSixty =
                    afterFortyParts[0] || "";
                  const afterSixty = afterFortyParts[1] || "";

                  return (
                    <>
                      {beforeForty}
                      {displayedRecommendation.includes(
                        "40%",
                      ) && <strong>40% in A</strong>}
                      {betweenFortyAndSixty}
                      {displayedRecommendation.includes(
                        "60%",
                      ) && <strong>60% in B</strong>}
                      {afterSixty}
                    </>
                  );
                })()}
              </p>
            )}
          </div>
        )}

        {displayedConclusion && (
          <p className="mb-6 mt-3">
            {displayedConclusion}
          </p>
        )}

        {showEnd && displayedEnd && (
          <p className="mb-3 mt-3">{displayedEnd}</p>
        )}

        {showDisclaimer && (
          <div className="bg-gray-100 border border-gray-200 rounded-lg p-2 text-sm text-gray-600 animate-fade-in">
            <div className="flex items-center gap-2">
              <img
                src={iconSvg}
                alt="AI"
                className="w-24 h-24 flex-shrink-0"
              />
              <p className="m-0">{displayedDisclaimer}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}