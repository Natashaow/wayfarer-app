import imgHeroImage from "figma:asset/b9eec30ee7db572fec86e8db69b530b9fd818720.png";

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex h-[101px] items-center relative shrink-0 w-full" data-name="H1">
        <div className="flex-[1_0_0] font-['Raleway:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative text-[#faf8f3] text-[54px] text-shadow-[2px_2px_4px_rgba(6,10,13,0.08),4px_4px_8px_rgba(6,10,13,0.08),8px_8px_16px_rgba(6,10,13,0.08)] whitespace-pre-wrap">
          <p className="mb-0">Discover Unforgettable</p>
          <p>New Destinations</p>
        </div>
      </div>
      <div className="h-[54px] relative shrink-0 w-full" data-name="Body 1">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] not-italic text-[#faf8f3] text-[22px] text-shadow-[2px_2px_4px_rgba(6,10,13,0.08),4px_4px_8px_rgba(6,10,13,0.08)]">
          <p className="leading-[normal] whitespace-pre-wrap">Wayfarer makes it simple to discover a world of adventures tailored just for you.</p>
        </div>
      </div>
    </div>
  );
}

function CtaButtons() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="CTA Buttons">
      <div className="bg-gradient-to-b from-[#e36844] h-[48px] relative rounded-[40px] shrink-0 to-[#d95d39]" data-name="Primary Button/Default">
        <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[24.5px] py-[18.5px] relative rounded-[inherit]">
          <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#fafaf5] text-[16px] text-center w-[138px]">
            <p className="leading-[normal] whitespace-pre-wrap">Start a trip with AI</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#7d2207] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_16px_32px_2px_rgba(125,34,7,0.08),0px_4px_8px_0px_rgba(125,34,7,0.08)]" />
      </div>
      <div className="bg-gradient-to-b from-[#ffc5b5] h-[48px] relative rounded-[40px] shrink-0 to-[#f5b4a2]" data-name="Secondary Button">
        <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[24px] py-[18px] relative rounded-[inherit]">
          <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#d95d39] text-[16px] text-center w-[94px]">
            <p className="leading-[normal] whitespace-pre-wrap">Sign up now</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#d95d39] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_16px_32px_2px_rgba(217,93,57,0.08),0px_4px_8px_0px_rgba(217,93,57,0.08)]" />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-[603px]" data-name="Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative w-full">
        <Header />
        <CtaButtons />
      </div>
    </div>
  );
}

export default function HeroImage() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[152px] pt-[158px] px-[108px] relative shadow-[0px_16px_32px_2px_rgba(6,10,13,0.03),0px_4px_8px_0px_rgba(6,10,13,0.03)] size-full" data-name="Hero Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-22.74%] max-w-none top-0 w-[122.98%]" src={imgHeroImage} />
        </div>
        <div className="absolute backdrop-blur-[0.5px] bg-gradient-to-r from-[rgba(6,10,13,0.75)] inset-0 to-3/4 to-[rgba(6,10,13,0)]" />
      </div>
      <Content />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_8px_16px_0px_rgba(6,10,13,0.08),inset_0px_4px_8px_2px_rgba(6,10,13,0.1),inset_0px_2px_4px_0px_rgba(6,10,13,0.1)]" />
    </div>
  );
}