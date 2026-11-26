import { useEffect, useRef, useState } from "preact/hooks";
import aiBear from "../assets/ai-bear.png";

const headquartersFlags = {
  "United States": "🇺🇸",
  "United Kingdom": "🇬🇧",
  "Spain": "🇪🇸",
  "Germany": "🇩🇪",
  "Taiwan": "🇹🇼",
  "South Korea": "🇰🇷",
  "Japan": "🇯🇵",
  "Netherlands": "🇳🇱",
};

function Company({ countries, children }) {
  return (
    <span class="whitespace-nowrap">
      {countries.map((country) => (
        <span
          key={country}
          class="font-[Apple_Color_Emoji,Segoe_UI_Emoji,Noto_Color_Emoji,sans-serif]"
          role="img"
          aria-label={`Headquarters in ${country}`}
          title={`Headquarters in ${country}`}
        >
          {headquartersFlags[country]}
        </span>
      ))}{" "}
      {children}
    </span>
  );
}

export function SupplyChainFigure() {
  const [open, setOpen] = useState(false);
  const trigger = useRef(null);
  const popup = useRef(null);

  useEffect(() => {
    if (!open) return;

    function dismiss(event) {
      if (event.key !== "Escape") return;

      if (popup.current.contains(document.activeElement)) trigger.current.focus();
      setOpen(false);
    }

    document.addEventListener("keydown", dismiss);
    return () => document.removeEventListener("keydown", dismiss);
  }, [open]);

  return (
    <div
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setOpen(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse" && !popup.current.contains(document.activeElement)) {
          setOpen(false);
        }
      }}
      onFocusOut={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={trigger}
        type="button"
        class="block cursor-pointer rounded focus-visible:outline-2 focus-visible:outline-offset-2"
        aria-label="What is behind this image?"
        aria-controls="supply-chain-popup"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <img
          src={aiBear}
          alt="Pixel-art red bear in a blue hoodie with a gold AI chip emblem on one ear"
          class="size-10"
          width="40"
          height="40"
        />
      </button>
      <div
        ref={popup}
        id="supply-chain-popup"
        hidden={!open}
        class="absolute top-full inset-x-[calc(-1px-var(--popup-padding))] z-20 max-w-sm pt-3 [--popup-padding:0.75rem] sm:[--popup-padding:1rem]"
      >
        <div class="max-h-[70svh] space-y-3 overflow-y-auto rounded border border-ink/25 bg-paper p-(--popup-padding) text-sm leading-relaxed text-ink-soft shadow-lg">
          <h2 class="text-base font-bold text-ink">
            What is behind this image?
          </h2>
          <div class="space-y-2 text-xs text-ink-soft [&_a]:underline [&_a]:underline-offset-2">
            <p>
            <Company countries={["United Kingdom", "Spain"]}>
              <a href="https://www.ferroglobe.com/news-releases/news-release-details/ferroglobe-acquires-strategic-high-purity-quartz-mine-us">
                Ferroglobe
              </a>
            </Company>{" "}
            mines quartz →{" "}
            <Company countries={["Germany"]}>
              <a href="https://reports.wacker.com/2024/annual-report/combined-management-report/governance/markets-positions.html">
                Wacker
              </a>
            </Company>{" "}
            makes polysilicon → silicon wafers →{" "}
            <Company countries={["United States"]}>
              <a href="https://www.nvidia.com/en-us/data-center/gb200-nvl72/">
                NVIDIA
              </a>
            </Company> designs GB200 systems.
            </p>
            <p>
            <Company countries={["Taiwan"]}>
              <a href="https://developer.nvidia.com/blog/inside-nvidia-blackwell-ultra-the-chip-powering-the-ai-factory-era/">
                TSMC
              </a>
            </Company>{" "}
            fabricates GPUs →{" "}
            <Company countries={["United Kingdom"]}>
              <a href="https://www.nvidia.com/en-us/data-center/gb200-nvl72/">
                Arm
              </a>
            </Company>{" "}
            designs CPU cores →{" "}
            <Company countries={["South Korea"]}>
              <a href="https://news.skhynix.com/en/sk-hynix-showcases-hbm4-next-gen-ai-memory-at-computex-taipei-2025/">
                SK hynix
              </a>
            </Company>{" "}
            +{" "}
            <Company countries={["United States"]}>
              <a href="https://investors.micron.com/node/48606/pdf">
                Micron
              </a>
            </Company>{" "}
            make GPU memory → TSMC packages chips and memory together.
            </p>
            <p>
            Specialist suppliers keep the fabs running: 
            <Company countries={["Japan"]}>
              <a href="https://pr.tsmc.com/japanese/news/1697">
                SUMCO
              </a>
            </Company>{" "}
            makes silicon wafers →{" "}
            <Company countries={["United States"]}>
              <a href="https://pr.tsmc.com/japanese/news/1697">
                Applied Materials
              </a>
            </Company>{" "}
            makes deposition tools →{" "}
            <Company countries={["United States"]}>
              <a href="https://pr.tsmc.com/japanese/news/1697">
                Lam Research
              </a>
            </Company>{" "}
            makes etching tools →{" "}
            <Company countries={["United States"]}>
              <a href="https://pr.tsmc.com/japanese/news/1697">
                KLA
              </a>
            </Company>{" "}
            makes inspection tools →{" "}
            <Company countries={["Netherlands"]}>
              <a href="https://pr.tsmc.com/japanese/news/1697">
                ASML
              </a>
            </Company>{" "}
            builds lithography machines →{" "}
            <Company countries={["Germany"]}>
              <a href="https://www.zeiss.com/semiconductor-manufacturing-technology/inspiring-technology/euv-lithography.html">
                Carl Zeiss SMT
              </a>
            </Company>{" "}
            makes mirrors;{" "}
            <Company countries={["Germany"]}>
              <a href="https://www.zeiss.com/semiconductor-manufacturing-technology/inspiring-technology/euv-lithography.html">
                TRUMPF
              </a>
            </Company>
            makes lasers.
            </p>
            <p>
            <Company countries={["United States"]}>
              <a href="https://www.dell.com/en-us/infohub/articles/poweredge-xe8712-with-nvidia-gb200-a-high-density-foundational-server-for-rack-scale-ai-2">
                Dell
              </a>
            </Company>{" "}
            builds GB200 servers →{" "}
            <Company countries={["United States"]}>
              <a href="https://investors.vertiv.com/news/news-details/2024/Vertiv-Codevelops-with-NVIDIA-Complete-Power-and-Cooling-Blueprint-for-NVIDIA-GB200-NVL72-Platform/default.aspx">
                Vertiv
              </a>
            </Company>{" "}
            designs power and cooling systems → at Stargate in Abilene,{" "}
            <Company countries={["United States"]}>
              <a href="https://openai.com/index/stargate-advances-with-partnership-with-oracle/">
                Oracle
              </a>
            </Company>{" "}
            delivers GB200 racks → OpenAI runs AI workloads on Oracle’s cloud.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
