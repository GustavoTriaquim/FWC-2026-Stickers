import { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import { getGroupPairs, getTeamsByGroup } from "../data/teams";
import { buildTeamStickers } from "../data/stickers";
import { useAlbum } from "../context/Album/AlbumContext";
import { useCarouselPosition } from "../context/Carousel/CarouselContext";
import ProgressBar from "./ProgressBar";

function TeamRow({ team, mode }) {
  const { countOwned, countExtras } = useAlbum();
  const stickers = buildTeamStickers(team.id);
  const isRepetidas = mode === "repetidas";

  const owned = countOwned(stickers);
  const extras = countExtras(stickers);

  return (
    <Link
      to={`/${mode}/time/${team.id}`}
      className="flex items-center gap-3 bg-bg-card border border-border-subtle
                 rounded-xl px-3 py-2.5 hover:bg-bg-elevated hover:border-text-dim
                 transition-colors duration-150"
    >
      <span className="text-2xl leading-none shrink-0">{team.flag}</span>
      <div className="min-w-0 flex-1">
        <p className="text-text-primary text-sm font-medium truncate">
          {team.name}
        </p>
        {isRepetidas ? (
          <p className="font-mono text-copa-gold text-xs mt-0.5">
            {extras} repetida{extras !== 1 ? "s" : ""}
          </p>
        ) : (
          <div className="mt-1">
            <ProgressBar
              value={owned}
              total={stickers.length}
              color={team.color}
              height="h-1"
              showPercent={false}
            />
          </div>
        )}
      </div>
    </Link>
  );
}

function GroupColumn({ groupLetter, mode }) {
  const teams = getTeamsByGroup(groupLetter);

  return (
    <div className="flex-1 min-w-0">
      <h3 className="font-mono text-text-muted text-xs tracking-widest mb-2 px-1">
        GRUPO {groupLetter}
      </h3>
      <div className="flex flex-col gap-2">
        {teams.map((team) => (
          <TeamRow key={team.id} team={team} mode={mode} />
        ))}
      </div>
    </div>
  );
}

function GroupCarousel({ mode }) {
  const pairs = getGroupPairs();
  const { slideIndex, updateSlideIndex } = useCarouselPosition();

  // Captura a posição salva apenas UMA VEZ, no momento da montagem do componente.
  // useRef garante que esse valor não muda depois, mesmo que slideIndex mude
  // (evita reinicializar o Embla a cada troca de slide, o que matava a animação).
  const initialIndex = useRef(slideIndex);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: initialIndex.current,
  });

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => updateSlideIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, updateSlideIndex]);

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col flex-1">
      <div className="overflow-hidden flex-1" ref={emblaRef}>
        <div className="flex h-full">
          {pairs.map(([groupA, groupB]) => (
            <div
              key={`${groupA}-${groupB}`}
              className="flex-[0_0_100%] min-w-0 px-1"
            >
              <div className="flex gap-3 h-full">
                <GroupColumn groupLetter={groupA} mode={mode} />
                <GroupColumn groupLetter={groupB} mode={mode} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 py-4">
        <button
          onClick={scrollPrev}
          className="p-2 rounded-full bg-bg-card border border-border-subtle
                     hover:bg-bg-elevated transition-colors"
          aria-label="Grupos anteriores"
        >
          <svg
            className="w-4 h-4 text-text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M15 18l-6-6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex gap-1.5">
          {pairs.map((_, index) => (
            <span
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                index === slideIndex ? "bg-copa-green" : "bg-border-subtle"
              }`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="p-2 rounded-full bg-bg-card border border-border-subtle
                     hover:bg-bg-elevated transition-colors"
          aria-label="Próximos grupos"
        >
          <svg
            className="w-4 h-4 text-text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M9 18l6-6-6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default GroupCarousel;
