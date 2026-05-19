import svgPaths from "./svg-2rtdrgtccp";
import imgNavBar from "figma:asset/d0d7a881bda4a994e8710d8a092c951bf7d632e3.png";
import imgWayfarerBlack12 from "figma:asset/31bfa83910aefa179da0ef0052c94a5701371e0c.png";
import imgWayfarerBlack23 from "figma:asset/ee0ae046dd453c8d4b5bc89b2cfbcca670ff8d17.png";
import imgHeroImage from "figma:asset/b9eec30ee7db572fec86e8db69b530b9fd818720.jpg";
import imgCard from "figma:asset/4f16f9b6f947a1aaa7cbe0ceb925eee5507e3c01.png";
import imgCard1 from "figma:asset/915badebd49e36188b3df157392503ccd103408b.png";
import imgCard2 from "figma:asset/f069603cb92705f484e4920bfefe50ed09cec887.png";
import imgLandscapeBodyImage from "figma:asset/fc109d945abb0894d1ba4ce01874fa59b9084196.png";
import imgLandscapeBodyImage1 from "figma:asset/8002921c5ea6a11bcc431a0e39e3070185ba2803.jpg";
import imgLandscapeBodyImage2 from "figma:asset/30d25324936154a66198ebdf5b3aee0ea33834c1.jpg";
import imgLandscapeBodyImage3 from "figma:asset/10229b5a73858413df0b08a90d518fca03b97bde.jpg";
import imgFeatureImage from "figma:asset/fdd7ef2bdcec3dd5700c66fad60c69f02d7b8b3e.jpg";
import imgUserProfile from "figma:asset/12b1c7642778a7523068f00fd28b98147629db81.png";
import imgUserProfile1 from "figma:asset/7dd6d374cc0885df720576efd8069b1fb1d3f06d.png";
import imgUserProfile2 from "figma:asset/1067f5e1da776d977bca45ca27d6fc41afb81605.png";
import imgWayfarerFooterLogo from "figma:asset/d13da812caf4ab09f5f6e1a8c36531f26e7ae0e2.png";
import { imgKeyboardArrowDown } from "./svg-vcmwi";

function SaveIcon() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Save Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="Save Icon">
          <mask height="26" id="mask0_63_756" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="26" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="26" id="Bounding box" width="26" />
          </mask>
          <g mask="url(#mask0_63_756)">
            <path d={svgPaths.p37973680} fill="var(--fill-0, #2E3D49)" id="favorite" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function UserIcon() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="User Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="User Icon">
          <mask height="26" id="mask0_53_849" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="26" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="26" id="Bounding box" width="26" />
          </mask>
          <g mask="url(#mask0_53_849)">
            <path d={svgPaths.pabcaf00} fill="var(--fill-0, #2E3D49)" id="account_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NavButtons() {
  return (
    <div className="absolute h-[48px] right-0 top-0" data-name="Nav Buttons">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] h-full items-center justify-end relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">Home</p>
        </div>
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">Trips</p>
        </div>
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">Recently viewed</p>
        </div>
        <SaveIcon />
        <UserIcon />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Logo">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[40px]" data-name="wayfarer-black-1 2">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgWayfarerBlack12} />
      </div>
      <div className="col-1 h-[30px] ml-[49px] mt-[9px] relative row-1 w-[131px]" data-name="wayfarer-black-2 3">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgWayfarerBlack23} />
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Search Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Search Icon">
          <mask height="24" id="mask0_63_750" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" rx="12" width="24" />
          </mask>
          <g mask="url(#mask0_63_750)">
            <path d={svgPaths.p39660800} fill="var(--fill-0, #4A5964)" id="search" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SeacrhBar() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[392px]" data-name="Seacrh bar">
      <div className="bg-[#fafaf5] h-[48px] relative rounded-[40px] shrink-0 w-full" data-name="Search Bar">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
            <SearchIcon />
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[19px] justify-center leading-[0] not-italic relative shrink-0 text-[#4a5964] text-[14px] w-[319px]">
              <p className="leading-[normal]">Search destinations, experiences, or adventures</p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-2 border-[#e9dec8] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_4px_8px_0px_rgba(6,10,13,0.03),0px_2px_4px_0px_rgba(6,10,13,0.03)]" />
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="absolute h-[48px] left-0 top-0" data-name="Left">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[28px] h-full items-center relative">
        <Logo />
        <SeacrhBar />
      </div>
    </div>
  );
}

function NavContainer() {
  return (
    <div className="content-stretch flex gap-[304px] h-[48px] items-center relative shrink-0 w-full" data-name="Nav Container">
      <NavButtons />
      <Left />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex h-[101px] items-center relative shrink-0 w-full" data-name="H1">
        <div className="flex-[1_0_0] font-['Raleway:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative text-[#faf8f3] text-[54px] text-shadow-[2px_2px_4px_rgba(6,10,13,0.08),4px_4px_8px_rgba(6,10,13,0.08),8px_8px_16px_rgba(6,10,13,0.08)]">
          <p className="mb-0">Discover Unforgettable</p>
          <p>New Destinations</p>
        </div>
      </div>
      <div className="h-[54px] relative shrink-0 w-full" data-name="Body 1">
        <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] not-italic text-[#faf8f3] text-[22px] text-shadow-[2px_2px_4px_rgba(6,10,13,0.08),4px_4px_8px_rgba(6,10,13,0.08)]">
          <p className="leading-[normal]">Wayfarer makes it simple to discover a world of adventures tailored just for you.</p>
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
            <p className="leading-[normal]">Start a trip with AI</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#7d2207] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_16px_32px_2px_rgba(125,34,7,0.08),0px_4px_8px_0px_rgba(125,34,7,0.08)]" />
      </div>
      <div className="bg-gradient-to-b from-[#ffc5b5] h-[48px] relative rounded-[40px] shrink-0 to-[#f5b4a2]" data-name="Secondary Button">
        <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[24px] py-[18px] relative rounded-[inherit]">
          <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#d95d39] text-[16px] text-center w-[94px]">
            <p className="leading-[normal]">Sign up now</p>
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

function HeroImage() {
  return (
    <div className="h-[700px] relative shadow-[0px_16px_32px_2px_rgba(6,10,13,0.03),0px_4px_8px_0px_rgba(6,10,13,0.03)] shrink-0 w-full" data-name="Hero Image">
      <div aria-hidden="true" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none">
        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-22.74%] max-w-none top-0 w-[122.98%]" src={imgHeroImage} />
        </div>
        <div className="absolute backdrop-blur-[0.5px] bg-clip-padding bg-gradient-to-r border-0 border-[transparent] border-solid from-[rgba(6,10,13,0.75)] inset-0 to-3/4 to-[rgba(6,10,13,0)]" />
      </div>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[152px] pt-[158px] px-[108px] relative size-full">
          <Content />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_8px_16px_0px_rgba(6,10,13,0.08),inset_0px_4px_8px_2px_rgba(6,10,13,0.1),inset_0px_2px_4px_0px_rgba(6,10,13,0.1)]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[615px] top-[17px]">
      <div className="absolute h-[7.4px] left-[615px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6px_-8px] mask-size-[24px_24px] top-[17px] w-[12px]" data-name="keyboard_arrow_down" style={{ maskImage: `url('${imgKeyboardArrowDown}')` }}>
        <div className="absolute inset-[-54.05%_-66.67%_-162.16%_-66.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 23.4">
            <g filter="url(#filter0_dd_63_754)" id="keyboard_arrow_down">
              <path d={svgPaths.p260b4e80} fill="var(--fill-0, #2E3D49)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.4" id="filter0_dd_63_754" width="28" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.03 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_63_754" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.03 0" />
                <feBlend in2="effect1_dropShadow_63_754" mode="normal" result="effect2_dropShadow_63_754" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_63_754" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function AnywhereDropdownButton() {
  return (
    <div className="absolute contents left-[609px] top-[9px]" data-name="Anywhere Dropdown Button">
      <Group />
    </div>
  );
}

function ExperiencesToggle() {
  return (
    <div className="h-[42px] overflow-clip relative shrink-0 w-full" data-name="Experiences Toggle">
      <div className="absolute h-[42px] left-0 top-0 w-[588px]" data-name="H3">
        <p className="absolute font-['Raleway:SemiBold',sans-serif] font-semibold inset-[19.05%_0] leading-[0] text-[#060a0d] text-[0px] text-[36px] whitespace-nowrap">
          <span className="leading-[normal]">{`Find experiences around `}</span>
          <span className="font-['Raleway:Italic',sans-serif] font-normal italic leading-[normal]">Anywhere</span>
        </p>
      </div>
      <AnywhereDropdownButton />
      <div className="-translate-x-full -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[1224px] not-italic text-[#247ba0] text-[16px] text-right text-shadow-[0px_2px_4px_rgba(209,240,239,0.03),0px_4px_8px_rgba(209,240,239,0.03)] top-[20.5px] whitespace-nowrap">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[normal] underline">View all</p>
      </div>
    </div>
  );
}

function FilterNavigation() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Filter Navigation">
      <div className="bg-[#d1f0ef] h-[34px] relative rounded-[40px] shrink-0" data-name="Filter">
        <div aria-hidden="true" className="absolute border-2 border-[#247ba0] border-solid inset-0 pointer-events-none rounded-[41px] shadow-[0px_2px_4px_0px_rgba(22,98,130,0.03)]" />
        <div className="bg-clip-padding border border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[13px] py-[7px] relative">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#247ba0] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[normal]">Trending</p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafaf5] h-[32px] relative rounded-[40px] shrink-0" data-name="Filter">
        <div aria-hidden="true" className="absolute border border-[#e9dec8] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_2px_4px_0px_rgba(6,10,13,0.03)]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[12px] py-[6px] relative">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[normal]">Top Experiences</p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafaf5] h-[32px] relative rounded-[40px] shrink-0" data-name="Filter">
        <div aria-hidden="true" className="absolute border border-[#e9dec8] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_2px_4px_0px_rgba(6,10,13,0.03)]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[12px] py-[6px] relative">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[normal]">Top Attractions</p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafaf5] h-[32px] relative rounded-[40px] shrink-0" data-name="Filter">
        <div aria-hidden="true" className="absolute border border-[#e9dec8] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_2px_4px_0px_rgba(6,10,13,0.03)]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[12px] py-[6px] relative">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[normal]">Bucket List Experiences</p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafaf5] h-[32px] relative rounded-[40px] shrink-0" data-name="Filter">
        <div aria-hidden="true" className="absolute border border-[#e9dec8] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_2px_4px_0px_rgba(6,10,13,0.03)]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[12px] py-[6px] relative">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[normal]">{`Cultural & Historic`}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafaf5] h-[32px] relative rounded-[40px] shrink-0" data-name="Filter">
        <div aria-hidden="true" className="absolute border border-[#e9dec8] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_2px_4px_0px_rgba(6,10,13,0.03)]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[12px] py-[6px] relative">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[normal]">{`Nature & Outdoors`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FavouriteButton() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Favourite Button">
      <div className="absolute inset-[-10%_-20%_-30%_-20%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
          <g filter="url(#filter0_dd_63_735)" id="Favourite Button">
            <circle cx="28" cy="24" fill="var(--fill-0, white)" fillOpacity="0.2" id="Ellipse 12" r="20" />
            <g id="Saved Button">
              <mask height="24" id="mask0_63_735" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="16" y="12">
                <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" x="16" y="12" />
              </mask>
              <g mask="url(#mask0_63_735)">
                <path d={svgPaths.p277a4500} fill="var(--fill-0, white)" id="favorite" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="56" id="filter0_dd_63_735" width="56" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0.08 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_63_735" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0.08 0" />
              <feBlend in2="effect1_dropShadow_63_735" mode="normal" result="effect2_dropShadow_63_735" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_63_735" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Label">
      <FavouriteButton />
    </div>
  );
}

function LocationIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Location Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Location Icon">
          <mask height="24" id="mask0_53_841" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_53_841)">
            <path d={svgPaths.p1179fd00} fill="var(--fill-0, #FAF8F3)" id="location_on" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Location() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Location">
      <LocationIcon />
      <div className="flex flex-[1_0_0] flex-col font-['Raleway:Italic',sans-serif] font-normal italic justify-center leading-[0] min-h-px min-w-px relative text-[#faf8f3] text-[18px]">
        <p className="leading-[normal]">Tokyo, Japan</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Info">
      <p className="font-['Raleway:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#faf8f3] text-[26px] w-full">Tokyo’s Best Streets</p>
      <Location />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex items-center relative shadow-[0px_16px_32px_0px_rgba(6,10,13,0.05),0px_8px_16px_0px_rgba(6,10,13,0.05)] shrink-0 w-[372px]" data-name="Card 1">
      <div className="flex-[1_0_0] h-[448px] min-h-px min-w-px relative rounded-[20px]" data-name="Card">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[125.25%] left-0 max-w-none top-[-12.63%] w-full" src={imgCard} />
        </div>
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-between pb-[24px] pt-[18px] px-[18px] relative size-full">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-gradient-to-b from-1/2 from-[rgba(0,0,0,0)] h-[448px] left-1/2 rounded-[20px] to-[#060a0d] top-1/2 w-[372px]" data-name="Gradient" />
            <Label />
            <Info />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_8px_0px_rgba(6,10,13,0.03),inset_0px_2px_4px_0px_rgba(6,10,13,0.03)]" />
      </div>
    </div>
  );
}

function FavouriteButton1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Favourite Button">
      <div className="absolute inset-[-10%_-20%_-30%_-20%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
          <g filter="url(#filter0_dd_63_735)" id="Favourite Button">
            <circle cx="28" cy="24" fill="var(--fill-0, white)" fillOpacity="0.2" id="Ellipse 12" r="20" />
            <g id="Saved Button">
              <mask height="24" id="mask0_63_735" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="16" y="12">
                <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" x="16" y="12" />
              </mask>
              <g mask="url(#mask0_63_735)">
                <path d={svgPaths.p277a4500} fill="var(--fill-0, white)" id="favorite" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="56" id="filter0_dd_63_735" width="56" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0.08 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_63_735" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0.08 0" />
              <feBlend in2="effect1_dropShadow_63_735" mode="normal" result="effect2_dropShadow_63_735" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_63_735" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Label">
      <FavouriteButton1 />
    </div>
  );
}

function LocationIcon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Location Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Location Icon">
          <mask height="24" id="mask0_53_841" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_53_841)">
            <path d={svgPaths.p1179fd00} fill="var(--fill-0, #FAF8F3)" id="location_on" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Location1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Location">
      <LocationIcon1 />
      <div className="flex flex-col font-['Raleway:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#faf8f3] text-[18px] w-[105px]">
        <p className="leading-[normal]">Uzbekistan</p>
      </div>
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Info">
      <p className="font-['Raleway:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#faf8f3] text-[26px] w-full">Wonders of Uzbekistan</p>
      <Location1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex items-center relative shadow-[0px_16px_32px_0px_rgba(6,10,13,0.05),0px_8px_16px_0px_rgba(6,10,13,0.05)] shrink-0 w-[372px]" data-name="Card 2">
      <div className="flex-[1_0_0] h-[448px] min-h-px min-w-px relative rounded-[20px]" data-name="Card">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[115.3%] left-0 max-w-none top-[-15.24%] w-full" src={imgCard1} />
        </div>
        <div className="content-stretch flex flex-col items-start justify-between pb-[24px] pt-[18px] px-[18px] relative size-full">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-gradient-to-b from-1/2 from-[rgba(0,0,0,0)] h-[448px] left-1/2 rounded-[20px] to-[#060a0d] top-1/2 w-[372px]" data-name="Gradient" />
          <Label1 />
          <Info1 />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_8px_0px_rgba(6,10,13,0.03),inset_0px_2px_4px_0px_rgba(6,10,13,0.03)]" />
      </div>
    </div>
  );
}

function FavouriteButton2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Favourite Button">
      <div className="absolute inset-[-10%_-20%_-30%_-20%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
          <g filter="url(#filter0_dd_63_735)" id="Favourite Button">
            <circle cx="28" cy="24" fill="var(--fill-0, white)" fillOpacity="0.2" id="Ellipse 12" r="20" />
            <g id="Saved Button">
              <mask height="24" id="mask0_63_735" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="16" y="12">
                <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" x="16" y="12" />
              </mask>
              <g mask="url(#mask0_63_735)">
                <path d={svgPaths.p277a4500} fill="var(--fill-0, white)" id="favorite" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="56" id="filter0_dd_63_735" width="56" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0.08 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_63_735" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0.08 0" />
              <feBlend in2="effect1_dropShadow_63_735" mode="normal" result="effect2_dropShadow_63_735" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_63_735" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full" data-name="Label">
      <FavouriteButton2 />
    </div>
  );
}

function LocationIcon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Location Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Location Icon">
          <mask height="24" id="mask0_53_841" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_53_841)">
            <path d={svgPaths.p1179fd00} fill="var(--fill-0, #FAF8F3)" id="location_on" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Location2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Location">
      <LocationIcon2 />
      <div className="flex flex-[1_0_0] flex-col font-['Raleway:Italic',sans-serif] font-normal italic justify-center leading-[0] min-h-px min-w-px relative text-[#faf8f3] text-[18px]">
        <p className="leading-[normal]">Svalbard, Norway</p>
      </div>
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Info">
      <p className="font-['Raleway:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#faf8f3] text-[26px] w-full">Northern Light Spots</p>
      <Location2 />
    </div>
  );
}

function Card2() {
  return (
    <div className="content-stretch flex items-center relative shadow-[0px_16px_32px_0px_rgba(6,10,13,0.05),0px_8px_16px_0px_rgba(6,10,13,0.05)] shrink-0 w-[372px]" data-name="Card 3">
      <div className="flex-[1_0_0] h-[448px] min-h-px min-w-px relative rounded-[20px]" data-name="Card">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[114.06%] left-[-78.88%] max-w-none top-[-13.22%] w-[220.27%]" src={imgCard2} />
        </div>
        <div className="content-stretch flex flex-col items-start justify-between pb-[24px] pt-[18px] px-[18px] relative size-full">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-gradient-to-b from-1/2 from-[rgba(0,0,0,0)] h-[448px] left-1/2 rounded-[20px] to-[#060a0d] top-1/2 w-[372px]" data-name="Gradient" />
          <Label2 />
          <Info2 />
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_8px_0px_rgba(6,10,13,0.03),inset_0px_2px_4px_0px_rgba(6,10,13,0.03)]" />
      </div>
    </div>
  );
}

function CardRow1() {
  return (
    <div className="relative shrink-0" data-name="Card Row">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative">
        <Card />
        <Card1 />
        <Card2 />
      </div>
    </div>
  );
}

function ArrowForwardIos() {
  return (
    <div className="absolute inset-[20%]" data-name="arrow_forward_ios">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_53_777" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_53_777)">
            <path d={svgPaths.p11a80500} fill="var(--fill-0, #2E3D49)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CardRow() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Card Row">
      <CardRow1 />
      <div className="relative shrink-0 size-[40px]" data-name="Right Arrow Button">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <circle cx="20" cy="20" fill="var(--fill-0, white)" id="Circle" r="19.5" stroke="var(--stroke-0, #E9DEC8)" />
          </svg>
          <ArrowForwardIos />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <FilterNavigation />
      <CardRow />
    </div>
  );
}

function Component3FeatureSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="3 Feature Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[32px] items-start pb-[104px] pt-[56px] px-[108px] relative w-full">
          <ExperiencesToggle />
          <Container />
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="absolute content-stretch flex inset-[0_0_996px_0] items-center justify-between" data-name="Row 1">
      <div className="h-[260px] pointer-events-none relative rounded-[20px] shadow-[0px_8px_16px_0px_rgba(6,10,13,0.03),0px_4px_8px_0px_rgba(6,10,13,0.03),0px_2px_4px_0px_rgba(6,10,13,0.03)] shrink-0 w-[496px]" data-name="Landscape Body Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[20px] size-full" src={imgLandscapeBodyImage} />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_4px_4px_8px_0px_rgba(6,10,13,0.03),inset_2px_2px_4px_0px_rgba(0,0,0,0.03)]" />
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[496px]" data-name="Body Section Text">
        <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold h-[30px] justify-center leading-[0] relative shrink-0 text-[#060a0d] text-[30px] w-full">
          <p className="leading-[normal]">Personalized Travel Planning</p>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#333] text-[20px] w-full">{`Discover destinations tailored to your unique travel preferences, thanks to our sophisticated AI and machine learning algorithms. `}</p>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 top-[332px] w-[1225px]" data-name="Row 2">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[496px]" data-name="Body Section Text">
        <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold h-[30px] justify-center leading-[0] relative shrink-0 text-[#060a0d] text-[30px] w-full">
          <p className="leading-[normal]">For the Modern Traveler</p>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#333] text-[20px] w-full">We encourage you to delve deeper, beyond popular tourist spots, to experience the true essence of local cultures and communities.</p>
      </div>
      <div className="h-[260px] pointer-events-none relative rounded-[20px] shadow-[0px_8px_16px_0px_rgba(6,10,13,0.03),0px_4px_8px_0px_rgba(6,10,13,0.03),0px_2px_4px_0px_rgba(6,10,13,0.03)] shrink-0 w-[496px]" data-name="Landscape Body Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[20px] size-full" src={imgLandscapeBodyImage1} />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_4px_4px_8px_0px_rgba(6,10,13,0.03),inset_2px_2px_4px_0px_rgba(0,0,0,0.03)]" />
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 px-px top-[664px] w-[1225px]" data-name="Row 3">
      <div className="h-[260px] pointer-events-none relative rounded-[20px] shadow-[0px_8px_16px_0px_rgba(6,10,13,0.03),0px_4px_8px_0px_rgba(6,10,13,0.03),0px_2px_4px_0px_rgba(6,10,13,0.03)] shrink-0 w-[496px]" data-name="Landscape Body Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[20px] size-full" src={imgLandscapeBodyImage2} />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_4px_4px_8px_0px_rgba(6,10,13,0.03),inset_2px_2px_4px_0px_rgba(0,0,0,0.03)]" />
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[496px]" data-name="Body Section Text">
        <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold h-[30px] justify-center leading-[0] relative shrink-0 text-[#060a0d] text-[30px] w-full">
          <p className="leading-[normal]">Research and Discover</p>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#333] text-[20px] w-full">Utilize Wayfarer not just to plan trips but to research and discover new destinations that align with your travel history and future aspirations.</p>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 px-px top-[996px] w-[1225px]" data-name="Row 4">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[496px]" data-name="Body Section Text">
        <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold h-[30px] justify-center leading-[0] relative shrink-0 text-[#060a0d] text-[30px] w-full">
          <p className="leading-[normal]">A Journey Tailored to You</p>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#333] text-[20px] w-full">Find destinations that match your passions and interests, with personalized suggestions that evolve as you interact with our platform.</p>
      </div>
      <div className="h-[260px] pointer-events-none relative rounded-[20px] shadow-[0px_8px_16px_0px_rgba(6,10,13,0.03),0px_4px_8px_0px_rgba(6,10,13,0.03),0px_2px_4px_0px_rgba(6,10,13,0.03)] shrink-0 w-[496px]" data-name="Landscape Body Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[20px] size-full" src={imgLandscapeBodyImage3} />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_4px_4px_8px_0px_rgba(6,10,13,0.03),inset_2px_2px_4px_0px_rgba(0,0,0,0.03)]" />
      </div>
    </div>
  );
}

function Component4FeatureRows() {
  return (
    <div className="absolute h-[1256px] left-0 top-[68px] w-[1225px]" data-name="4 feature rows">
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </div>
  );
}

function TravelLine() {
  return (
    <div className="absolute contents left-[597px] top-0" data-name="Travel Line">
      <div className="absolute h-[1401.5px] left-[597px] top-0 w-[32px]" data-name="Union">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 1401.5">
          <g filter="url(#filter0_i_63_741)" id="Union">
            <path d={svgPaths.p24501400} fill="url(#paint0_linear_63_741)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1402.5" id="filter0_i_63_741" width="33" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.03 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_63_741" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_63_741" x1="16" x2="16" y1="0" y2="1401.5">
              <stop stopColor="#EDF6F7" stopOpacity="0.95" />
              <stop offset="0.2525" stopColor="#D7E5E7" />
              <stop offset="0.5" stopColor="#CCE0E3" />
              <stop offset="0.75" stopColor="#D7E5E7" />
              <stop offset="1" stopColor="#E6F5F7" stopOpacity="0.95" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[13.49%_49.18%_85.23%_49.35%]" data-name="Travel Point">
        <div className="absolute inset-[-33.33%_-55.56%_-77.78%_-55.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
            <g filter="url(#filter0_dd_63_733)" id="Travel Point">
              <path d={svgPaths.p2272c480} fill="var(--fill-0, #247BA0)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38" id="filter0_dd_63_733" width="38" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_63_733" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="effect2_dropShadow_63_733" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
                <feBlend in2="effect1_dropShadow_63_733" mode="normal" result="effect2_dropShadow_63_733" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_63_733" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.17%_49.18%_61.54%_49.35%]" data-name="Travel Point">
        <div className="absolute inset-[-33.33%_-55.56%_-77.78%_-55.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
            <g filter="url(#filter0_dd_63_729)" id="Travel Point">
              <path d={svgPaths.p2272c480} fill="var(--fill-0, #247BA0)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38" id="filter0_dd_63_729" width="38" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_63_729" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="effect2_dropShadow_63_729" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
                <feBlend in2="effect1_dropShadow_63_729" mode="normal" result="effect2_dropShadow_63_729" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_63_729" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[60.86%_49.18%_37.85%_49.35%]" data-name="Travel Point">
        <div className="absolute inset-[-33.33%_-55.56%_-77.78%_-55.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
            <g filter="url(#filter0_dd_63_729)" id="Travel Point">
              <path d={svgPaths.p2272c480} fill="var(--fill-0, #247BA0)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38" id="filter0_dd_63_729" width="38" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_63_729" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="effect2_dropShadow_63_729" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
                <feBlend in2="effect1_dropShadow_63_729" mode="normal" result="effect2_dropShadow_63_729" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_63_729" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute inset-[84.55%_49.18%_14.16%_49.35%]" data-name="Travel Point">
        <div className="absolute inset-[-33.33%_-55.56%_-77.78%_-55.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 38">
            <g filter="url(#filter0_dd_63_729)" id="Travel Point">
              <path d={svgPaths.p2272c480} fill="var(--fill-0, #247BA0)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38" id="filter0_dd_63_729" width="38" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_63_729" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="effect2_dropShadow_63_729" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
                <feBlend in2="effect1_dropShadow_63_729" mode="normal" result="effect2_dropShadow_63_729" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_63_729" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="h-[1401.5px] relative shrink-0 w-full" data-name="Column">
      <Component4FeatureRows />
      <TravelLine />
    </div>
  );
}

function WhyWayfarerSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Why Wayfarer Section">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[40px] items-center pb-[64px] pt-[48px] px-[108px] relative w-full">
          <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="H1">
            <p className="font-['Raleway:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#060a0d] text-[54px] text-center whitespace-nowrap">Why Wayfarer</p>
          </div>
          <Column />
        </div>
      </div>
    </div>
  );
}

function ImageFrame() {
  return (
    <div className="content-stretch flex flex-col items-start pointer-events-none px-[18px] py-[24px] relative shrink-0 w-[612px]" data-name="Image Frame">
      <div className="h-[488px] relative shrink-0 w-full" data-name="Feature Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgFeatureImage} />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_4px_4px_8px_2px_rgba(6,10,13,0.02),inset_2px_2px_4px_0px_rgba(6,10,13,0.02)]" />
      </div>
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_1px_1px_4px_0px_rgba(46,61,73,0.02)]" />
    </div>
  );
}

function CtaText() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-center px-[55px] py-[183px] relative shrink-0 w-[612px]" data-name="CTA Text">
      <div className="h-[98px] relative shrink-0 w-full" data-name="H2">
        <p className="absolute font-['Raleway:Bold',sans-serif] font-bold inset-[9.18%_0_10.2%_0] leading-[normal] text-[#060a0d] text-[42px] text-center">There’s an adventure waiting just for you!</p>
      </div>
      <div className="bg-gradient-to-b from-[#e36844] h-[48px] relative rounded-[40px] shrink-0 to-[#d95d39]" data-name="Primary Button/Default">
        <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[24.5px] py-[18.5px] relative rounded-[inherit]">
          <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#fafaf5] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[normal]">Sign up</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#7d2207] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_16px_32px_2px_rgba(125,34,7,0.08),0px_4px_8px_0px_rgba(125,34,7,0.08)]" />
      </div>
    </div>
  );
}

function CtaFeature() {
  return (
    <div className="bg-[#f3f4f5] relative shrink-0 w-[1225px]" data-name="CTA Feature">
      <div className="bg-clip-padding border-[0.5px] border-[transparent] border-solid content-stretch flex items-center justify-between overflow-clip relative rounded-[inherit] w-full">
        <ImageFrame />
        <CtaText />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_4px_4px_8px_2px_rgba(6,10,13,0.02),inset_2px_2px_4px_0px_rgba(6,10,13,0.02)]" />
      <div aria-hidden="true" className="absolute border-[#f3f4f5] border-[0.5px] border-solid inset-0 pointer-events-none shadow-[0px_16px_32px_2px_rgba(6,10,13,0.03),0px_4px_8px_0px_rgba(6,10,13,0.03)]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
      <div className="bg-[#f3f4f5] content-stretch flex flex-col gap-[26px] items-start justify-center pb-[32px] pt-[24px] px-[20px] relative rounded-[20px] shrink-0 w-[370px]" data-name="Review 1">
        <div aria-hidden="true" className="absolute border-[#e6e8eb] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_4px_8px_0px_rgba(46,61,73,0.03),0px_2px_4px_0px_rgba(46,61,73,0.05)]" />
        <div className="content-stretch flex gap-[2.5px] items-center relative shrink-0 w-full" data-name="Rating">
          <div className="relative shrink-0 size-[18px]" data-name="Rating Circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p389f1700} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[18px]" data-name="Rating Circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p389f1700} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[18px]" data-name="Rating Circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p389f1700} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[18px]" data-name="Rating Circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p389f1700} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[18px]" data-name="Rating Circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p389f1700} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-[330px]" data-name="Body 3">
          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#2e3d49] text-[16px]">{`Wayfarer transformed how I see travel. It's not just about the destinations; it's about the stories and the people. Each recommendation led me to experiences I never would have found on my own. It’s travel personalized in the truest sense.`}</p>
        </div>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Reviewer Info">
          <div className="relative shrink-0 size-[36px]" data-name="User Profile">
            <img alt="" className="absolute block max-w-none size-full" height="36" src={imgUserProfile} width="36" />
          </div>
          <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#2e3d49] text-[0px]">
            <p className="font-['Raleway:Regular',sans-serif] mb-0 text-[16px]">Emma L.</p>
            <p className="font-['Raleway:Italic',sans-serif] italic text-[14px]">{`Adventurer & Wayfarer User`}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f4f5] content-stretch flex flex-col gap-[26px] items-start justify-center pb-[32px] pt-[24px] px-[20px] relative rounded-[20px] shadow-[0px_4px_8px_0px_rgba(46,61,73,0.03),0px_2px_4px_0px_rgba(46,61,73,0.05)] shrink-0 w-[370px]" data-name="Review 2">
        <div className="content-stretch flex gap-[2.5px] items-center relative shrink-0 w-full" data-name="Rating">
          <div className="relative shrink-0 size-[18px]" data-name="Rating Circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p389f1700} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[18px]" data-name="Rating Circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p389f1700} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[18px]" data-name="Rating Circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p389f1700} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[18px]" data-name="Rating Circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p389f1700} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[18px]" data-name="Rating Circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p389f1700} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Body 3">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e3d49] text-[16px] w-[334px]">{`Every trip planned with Wayfarer has been an eye-opener. From hidden mountain retreats to bustling local markets, Wayfarer’s insights are priceless. It's not just a platform; it's a community that understands what travelers really seek.`}</p>
        </div>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Reviewer Info">
          <div className="relative shrink-0 size-[36px]" data-name="User Profile">
            <img alt="" className="absolute block max-w-none size-full" height="36" src={imgUserProfile1} width="36" />
          </div>
          <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e3d49] text-[0px] w-[175px]">
            <p className="font-['Raleway:Regular',sans-serif] mb-0 text-[16px]">Alex T.</p>
            <p className="font-['Raleway:Italic',sans-serif] italic text-[14px]">Globe Trotter</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f4f5] content-stretch flex flex-col gap-[26px] items-start justify-center pb-[32px] pt-[24px] px-[20px] relative rounded-[20px] shadow-[0px_4px_8px_0px_rgba(46,61,73,0.03),0px_2px_4px_0px_rgba(46,61,73,0.05)] shrink-0 w-[370px]" data-name="Review 3">
        <div className="content-stretch flex gap-[2.5px] items-center relative shrink-0 w-full" data-name="Rating">
          <div className="relative shrink-0 size-[18px]" data-name="Rating Circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p389f1700} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[18px]" data-name="Rating Circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p389f1700} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[18px]" data-name="Rating Circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p389f1700} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[18px]" data-name="Rating Circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p389f1700} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" />
            </svg>
          </div>
          <div className="relative shrink-0 size-[18px]" data-name="Rating Circle">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p389f1700} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Body 3">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e3d49] text-[16px] w-[334px]">Wayfarer’s smart recommendations have changed the way I travel. From personalized trip suggestions to the easy-to-use planning tools, it’s become an essential part of my travel routine. It feels like it was made just for me!</p>
        </div>
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Reviewer Info">
          <div className="relative shrink-0 size-[36px]" data-name="User Profile">
            <img alt="" className="absolute block max-w-none size-full" height="36" src={imgUserProfile2} width="36" />
          </div>
          <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e3d49] text-[0px] w-[175px]">
            <p className="font-['Raleway:Regular',sans-serif] mb-0 text-[16px]">Chris P.</p>
            <p className="font-['Raleway:Italic',sans-serif] italic text-[14px]">{`Travel Blogger & Explorer`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArrowForwardIos1() {
  return (
    <div className="absolute inset-[20%]" data-name="arrow_forward_ios">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="arrow_forward_ios">
          <mask height="24" id="mask0_53_777" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_53_777)">
            <path d={svgPaths.p11a80500} fill="var(--fill-0, #2E3D49)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[25px] items-center relative shrink-0" data-name="Row">
      <Frame1 />
      <div className="relative shrink-0 size-[40px]" data-name="Right Arrow Button">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <circle cx="20" cy="20" fill="var(--fill-0, white)" id="Circle" r="19.5" stroke="var(--stroke-0, #E9DEC8)" />
        </svg>
        <ArrowForwardIos1 />
      </div>
    </div>
  );
}

function TravelerTestimonialsSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Traveler Testimonials Section">
      <div className="flex flex-col items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[40px] items-center pb-[88px] pt-[80px] px-[109px] relative w-full">
          <div className="h-[42px] relative shrink-0 w-[588px]" data-name="H3">
            <p className="absolute font-['Raleway:SemiBold',sans-serif] font-semibold inset-[19.05%_0] leading-[normal] text-[#060a0d] text-[36px] text-center whitespace-nowrap">What travelers are raving about</p>
          </div>
          <Row />
        </div>
      </div>
    </div>
  );
}

function WayfarerInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-[416px]" data-name="Wayfarer Info">
      <div className="h-[100px] relative shrink-0 w-[79px]" data-name="Wayfarer Footer Logo">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgWayfarerFooterLogo} />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e3d49] text-[16px] w-[286px]">Embark on a journey of discovery with Wayfarer, where travel adventure awaits.</p>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[20px] items-start relative shrink-0 text-[15px] w-full" data-name="Links">
      <p className="relative shrink-0 w-full">Get Started</p>
      <p className="relative shrink-0 w-full">Community</p>
      <p className="relative shrink-0 w-full">Discover</p>
    </div>
  );
}

function Links1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[20px] items-start relative shrink-0 w-full" data-name="Links">
      <p className="relative shrink-0 w-full">About Us</p>
      <p className="relative shrink-0 w-full">Media</p>
      <p className="relative shrink-0 w-full">Contact Us</p>
    </div>
  );
}

function Links2() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[20px] items-start relative shrink-0 w-full" data-name="Links">
      <p className="relative shrink-0 w-full">Blog</p>
      <p className="relative shrink-0 w-full">Reviews</p>
      <p className="relative shrink-0 w-full">Help Centre</p>
    </div>
  );
}

function Links3() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[20px] items-start relative shrink-0 w-full" data-name="Links">
      <p className="relative shrink-0 w-full">{`Terms & Conditions`}</p>
      <p className="relative shrink-0 w-full">Private Policy</p>
      <p className="relative shrink-0 w-full">FAQ</p>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-stretch flex gap-[25px] h-[155px] items-end leading-[normal] not-italic relative shrink-0 text-[#2e3d49]" data-name="Footer Links">
      <div className="content-stretch flex flex-col gap-[32px] h-full items-start justify-center relative shrink-0 w-[183px]" data-name="Footer Section Links">
        <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[16px] w-full">Travel</p>
        <Links />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] h-full items-start justify-center relative shrink-0 text-[16px] w-[183px]" data-name="Footer Section Links">
        <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-full">Company</p>
        <Links1 />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] h-full items-start justify-center relative shrink-0 text-[16px] w-[183px]" data-name="Footer Section Links">
        <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-full">Resources</p>
        <Links2 />
      </div>
      <div className="content-stretch flex flex-col gap-[32px] h-full items-start justify-center relative shrink-0 text-[16px] w-[183px]" data-name="Footer Section Links">
        <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 w-full">More</p>
        <Links3 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between pb-[104px] pt-[72px] px-[108px] relative w-full">
          <WayfarerInfo />
          <FooterLinks />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute inset-[0_86.34%_0_0]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Frame">
          <path d={svgPaths.p2e113e00} fill="var(--fill-0, #2E3D49)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CopyrightText() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Copyright Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#333] text-[14px] whitespace-nowrap">{`© 2025 Wayfarer. All rights reserved. `}</p>
      <div className="h-[22px] relative shrink-0 w-[161px]" data-name="Social Buttons">
        <Frame />
        <div className="absolute inset-[0_57.76%_0_28.57%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d={svgPaths.p15fb9700} fill="var(--fill-0, #2E3D49)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[13.64%_0_13.64%_85.71%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 16">
            <path d={svgPaths.p12a794f0} fill="var(--fill-0, #2E3D49)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0_29.19%_0_57.14%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
            <path d={svgPaths.p156c5380} fill="var(--fill-0, #2E3D49)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FooterNotes() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center overflow-clip pb-[56px] px-[108px] relative shrink-0 w-[1440px]" data-name="Footer Notes">
      <div className="bg-[#2e3d49] h-px rounded-[4px] shrink-0 w-[1225px]" data-name="Divider" />
      <CopyrightText />
    </div>
  );
}

export default function DesktopNew() {
  return (
    <div className="bg-[#fafaf5] content-stretch flex flex-col items-center relative size-full" data-name="Desktop New">
      <div className="h-[76px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Nav Bar">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNavBar} />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-center justify-center px-[108px] py-[14px] relative size-full">
            <NavContainer />
            <div className="absolute bg-[#ded2ba] h-px left-0 rounded-[4px] top-[75px] w-[1440px]" data-name="Divider" />
          </div>
        </div>
      </div>
      <HeroImage />
      <Component3FeatureSection />
      <WhyWayfarerSection />
      <CtaFeature />
      <TravelerTestimonialsSection />
      <div className="bg-[#ded2ba] relative shadow-[0px_-8px_16px_0px_rgba(6,10,13,0.04),0px_-4px_4px_0px_rgba(6,10,13,0.04)] shrink-0 w-[1440px]" data-name="Footer Section">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
          <Footer />
          <FooterNotes />
        </div>
      </div>
    </div>
  );
}