import imgHeroSection from "figma:asset/e2e3f204a6869d3991cb9ff963548e71e9e76281.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0">
      <div className="relative shrink-0 w-[358px]" data-name="H1">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
          <div className="flex-[1_0_0] font-['Raleway:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative text-[#faf8f3] text-[27.47px] text-center">
            <p className="mb-0">Discover Unforgettable</p>
            <p>New Destinations</p>
          </div>
        </div>
      </div>
      <div className="absolute h-[77px] left-[32px] right-[32px] top-[77px]" data-name="Body 1">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] not-italic text-[#faf8f3] text-[17.17px] text-center">
            <p className="leading-[normal]">Wayfarer makes it simple to discover a world of adventures tailored just for you.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="h-[158px] relative shrink-0 w-[354px]" data-name="Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Frame />
      </div>
    </div>
  );
}

function PrimaryButtonDefault() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#e36844] items-center justify-center px-[16px] py-[14px] relative rounded-[40px] shrink-0 to-[#d95d39]" data-name="Primary Button/Default">
      <div aria-hidden="true" className="absolute border-[#7d2207] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[40.5px] shadow-[0px_16px_32px_0px_rgba(125,34,7,0.08),0px_4px_8px_0px_rgba(125,34,7,0.08)]" />
      <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#fafaf5] text-[13.735px] text-center w-[117px]">
        <p className="leading-[normal]">Start a trip with AI</p>
      </div>
    </div>
  );
}

function SecondaryButton() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#ffc5b5] items-center justify-center px-[16px] py-[14px] relative rounded-[40px] shrink-0 to-[#f5b4a2]" data-name="Secondary Button">
      <div aria-hidden="true" className="absolute border-[#d95d39] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[40.5px] shadow-[0px_16px_32px_0px_rgba(217,93,57,0.08),0px_4px_8px_0px_rgba(217,93,57,0.08)]" />
      <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#d95d39] text-[13.735px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Sign up now</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="relative shrink-0" data-name="Buttons">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14px] items-center justify-center relative">
        <PrimaryButtonDefault />
        <SecondaryButton />
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center px-[18px] py-[56px] relative shadow-[0px_16px_32px_2px_rgba(6,10,13,0.03),0px_4px_8px_0px_rgba(6,10,13,0.03)] size-full" data-name="Hero Section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHeroSection} />
        <div className="absolute backdrop-blur-[0.5px] bg-gradient-to-t from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.7)]" />
      </div>
      <Content />
      <Buttons />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_8px_16px_0px_rgba(6,10,13,0.08),inset_0px_4px_8px_2px_rgba(6,10,13,0.1),inset_0px_2px_4px_0px_rgba(6,10,13,0.1)]" />
    </div>
  );
}