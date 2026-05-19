import svgPaths from "./svg-q7nrhxzd5f";
import imgNavBar from "figma:asset/70cf5615107017eb6ab486da24e9bb01f87423fe.png";
import imgWayfarerBlack12 from "figma:asset/31bfa83910aefa179da0ef0052c94a5701371e0c.png";
import imgWayfarerBlack23 from "figma:asset/ee0ae046dd453c8d4b5bc89b2cfbcca670ff8d17.png";
import imgHeroSection from "figma:asset/e2e3f204a6869d3991cb9ff963548e71e9e76281.png";
import imgCard from "figma:asset/4f16f9b6f947a1aaa7cbe0ceb925eee5507e3c01.png";
import imgCard1 from "figma:asset/915badebd49e36188b3df157392503ccd103408b.png";
import imgLandscapeBodyImage from "figma:asset/fc109d945abb0894d1ba4ce01874fa59b9084196.png";
import imgLandscapeBodyImage1 from "figma:asset/8002921c5ea6a11bcc431a0e39e3070185ba2803.jpg";
import imgLandscapeBodyImage2 from "figma:asset/30d25324936154a66198ebdf5b3aee0ea33834c1.jpg";
import imgLandscapeBodyImage3 from "figma:asset/10229b5a73858413df0b08a90d518fca03b97bde.jpg";
import imgFeatureImage from "figma:asset/fdd7ef2bdcec3dd5700c66fad60c69f02d7b8b3e.jpg";
import imgUserProfile from "figma:asset/b41c98dab08bc3348c5322a353f0050a4a3a2ded.png";
import imgUserProfile1 from "figma:asset/4728b493b16c8c7caabba896e57c533a6e789832.png";

function Menu() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="menu">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="menu">
          <mask height="26" id="mask0_53_859" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="26" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="26" id="Bounding box" width="26" />
          </mask>
          <g mask="url(#mask0_53_859)">
            <path d={svgPaths.p3ae89800} fill="var(--fill-0, #2E3D49)" id="menu_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Logo">
      <div className="col-1 h-[32px] ml-0 mt-0 relative row-1 w-[26.803px]" data-name="wayfarer-black-1 2">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgWayfarerBlack12} />
      </div>
      <div className="col-1 h-[24px] ml-[32.84px] mt-[7.2px] relative row-1 w-[87.781px]" data-name="wayfarer-black-2 3">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgWayfarerBlack23} />
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Left">
      <Menu />
      <Logo />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="search">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="search">
          <mask height="26" id="mask0_53_867" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="26" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="26" id="Bounding box" width="26" />
          </mask>
          <g mask="url(#mask0_53_867)">
            <path d={svgPaths.p1fd84e80} fill="var(--fill-0, #2E3D49)" id="search_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SaveIcon() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Save Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="Save Icon">
          <mask height="26" id="mask0_53_815" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="26" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="26" id="Bounding box" width="26" />
          </mask>
          <g mask="url(#mask0_53_815)">
            <path d={svgPaths.p33afa480} fill="var(--fill-0, #2E3D49)" id="favorite" />
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

function Right() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Right">
      <Search />
      <SaveIcon />
      <UserIcon />
    </div>
  );
}

function Frame1() {
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
        <Frame1 />
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

function HeroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[562px] items-center overflow-clip px-[18px] py-[56px] relative shadow-[0px_16px_32px_2px_rgba(6,10,13,0.03),0px_4px_8px_0px_rgba(6,10,13,0.03)] shrink-0" data-name="Hero Section">
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

function Left1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[265px]" data-name="Left">
      <p className="flex-[1_0_0] font-['Raleway:SemiBold',sans-serif] font-semibold leading-[0] min-h-px min-w-px relative text-[#060a0d] text-[0px] text-[24px]">
        <span className="leading-[normal]">{`Find experiences around `}</span>
        <span className="font-['Raleway:Italic',sans-serif] font-normal italic leading-[normal]">Anywhere</span>
      </p>
    </div>
  );
}

function AnywhereDropdownButton() {
  return (
    <div className="absolute inset-[60%_37.43%_-13.33%_55.87%]" data-name="Anywhere Dropdown Button">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.7318 24">
        <g id="Anywhere Dropdown Button">
          <mask height="24" id="mask0_53_829" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <path d="M0 0H23.7318V24H0V0Z" fill="var(--fill-0, #D9D9D9)" id="Bounding box" />
          </mask>
          <g mask="url(#mask0_53_829)">
            <path d={svgPaths.p39f566f0} fill="var(--fill-0, #060A0D)" id="keyboard_arrow_down" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FindExperiences() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Find experiences">
      <Left1 />
      <AnywhereDropdownButton />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#247ba0] text-[12px] text-right text-shadow-[0px_2px_4px_rgba(209,240,239,0.03),0px_4px_8px_rgba(209,240,239,0.03)] whitespace-nowrap">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[normal] underline">View all</p>
      </div>
    </div>
  );
}

function FilterNavigation() {
  return (
    <div className="content-stretch flex gap-[7.647px] h-[36px] items-center relative shrink-0" data-name="Filter Navigation">
      <div className="bg-[#d1f0ef] h-[33.528px] relative rounded-[40px] shrink-0" data-name="Filter">
        <div aria-hidden="true" className="absolute border-[#247ba0] border-[1.529px] border-solid inset-0 pointer-events-none rounded-[40.764px] shadow-[0px_1.529px_3.059px_0px_rgba(22,98,130,0.03)]" />
        <div className="bg-clip-padding border-[0.764px] border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[10.764px] py-[6.764px] relative">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#247ba0] text-[9.18px] text-center whitespace-nowrap">
            <p className="leading-[normal]">Trending</p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafaf5] h-[32px] relative rounded-[40px] shrink-0" data-name="Filter">
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[0.765px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_1.529px_3.059px_0px_rgba(6,10,13,0.03)]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[10px] py-[6px] relative">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[9.18px] text-center whitespace-nowrap">
            <p className="leading-[normal]">Top Experiences</p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafaf5] h-[32px] relative rounded-[40px] shrink-0" data-name="Filter">
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[0.765px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_1.529px_3.059px_0px_rgba(6,10,13,0.03)]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[10px] py-[6px] relative">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[9.18px] text-center whitespace-nowrap">
            <p className="leading-[normal]">Top Attractions</p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafaf5] h-[32px] relative rounded-[40px] shrink-0" data-name="Filter">
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[0.765px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_1.529px_3.059px_0px_rgba(6,10,13,0.03)]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[10px] py-[6px] relative">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[9.18px] text-center whitespace-nowrap">
            <p className="leading-[normal]">Bucket List Experiences</p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafaf5] h-[32px] relative rounded-[40px] shrink-0" data-name="Filter">
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[0.765px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_1.529px_3.059px_0px_rgba(6,10,13,0.03)]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[10px] py-[6px] relative">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[8.19px] text-center whitespace-nowrap">
            <p className="leading-[normal]">{`Cultural & Historic`}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafaf5] h-[32px] relative rounded-[40px] shrink-0" data-name="Filter">
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[0.765px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_1.529px_3.059px_0px_rgba(6,10,13,0.03)]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[10px] py-[6px] relative">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[8.19px] text-center whitespace-nowrap">
            <p className="leading-[normal]">{`Nature & Outdoors`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FavouriteButton() {
  return (
    <div className="relative shrink-0 size-[23.806px]" data-name="Favourite Button">
      <div className="absolute inset-[-10%_-20%_-30%_-20%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3279 33.3279">
          <g filter="url(#filter0_dd_53_835)" id="Favourite Button">
            <circle cx="16.664" cy="14.2834" fill="var(--fill-0, white)" fillOpacity="0.2" id="Ellipse 12" r="11.9028" />
            <g id="Saved Button">
              <mask height="15" id="mask0_53_835" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="15" x="9" y="7">
                <rect fill="var(--fill-0, #D9D9D9)" height="14.2834" id="Bounding box" width="14.2834" x="9.52227" y="7.1417" />
              </mask>
              <g mask="url(#mask0_53_835)">
                <path d={svgPaths.p352e4c80} fill="var(--fill-0, white)" id="favorite" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="33.3279" id="filter0_dd_53_835" width="33.3279" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1.19028" />
              <feGaussianBlur stdDeviation="1.19028" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0.08 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_53_835" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2.38057" />
              <feGaussianBlur stdDeviation="2.38057" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0.08 0" />
              <feBlend in2="effect1_dropShadow_53_835" mode="normal" result="effect2_dropShadow_53_835" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_53_835" mode="normal" result="shape" />
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
    <div className="relative shrink-0 size-[14.283px]" data-name="Location Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2834 14.2834">
        <g id="Location Icon">
          <mask height="15" id="mask0_53_873" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="15" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="14.2834" id="Bounding box" width="14.2834" />
          </mask>
          <g mask="url(#mask0_53_873)">
            <path d={svgPaths.p1b3084c0} fill="var(--fill-0, #FAF8F3)" id="location_on" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Location() {
  return (
    <div className="content-stretch flex gap-[4.761px] items-center relative shrink-0 w-full" data-name="Location">
      <LocationIcon />
      <div className="flex flex-[1_0_0] flex-col font-['Raleway:Italic',sans-serif] font-normal italic justify-center leading-[0] min-h-px min-w-px relative text-[#faf8f3] text-[7.14px]">
        <p className="leading-[normal]">Tokyo, Japan</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col gap-[2.381px] h-[37.494px] items-start relative shrink-0 w-full" data-name="Info">
      <p className="font-['Raleway:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#faf8f3] text-[9.52px] w-full">Tokyo’s Best Streets</p>
      <Location />
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex items-center relative shadow-[0px_16px_32px_0px_rgba(6,10,13,0.05),0px_8px_16px_0px_rgba(6,10,13,0.05)] shrink-0 w-[221.492px]" data-name="Card">
      <div className="content-stretch flex flex-col h-[266.624px] items-start justify-between overflow-clip px-[12px] py-[18px] relative rounded-[20px] shrink-0 w-[221.492px]" data-name="Card">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[125.25%] left-0 max-w-none top-[-12.63%] w-full" src={imgCard} />
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-gradient-to-b from-1/2 from-[rgba(0,0,0,0)] h-[266.624px] left-1/2 rounded-[20px] to-[#060a0d] top-1/2 w-[221.393px]" data-name="Gradient" />
        <Label />
        <Info />
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2.381px_4.761px_0px_rgba(6,10,13,0.03),inset_0px_1.19px_2.381px_0px_rgba(6,10,13,0.03)]" />
      </div>
    </div>
  );
}

function FavouriteButton1() {
  return (
    <div className="relative shrink-0 size-[23.806px]" data-name="Favourite Button">
      <div className="absolute inset-[-10%_-20%_-30%_-20%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.3279 33.3279">
          <g filter="url(#filter0_dd_53_835)" id="Favourite Button">
            <circle cx="16.664" cy="14.2834" fill="var(--fill-0, white)" fillOpacity="0.2" id="Ellipse 12" r="11.9028" />
            <g id="Saved Button">
              <mask height="15" id="mask0_53_835" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="15" x="9" y="7">
                <rect fill="var(--fill-0, #D9D9D9)" height="14.2834" id="Bounding box" width="14.2834" x="9.52227" y="7.1417" />
              </mask>
              <g mask="url(#mask0_53_835)">
                <path d={svgPaths.p352e4c80} fill="var(--fill-0, white)" id="favorite" />
              </g>
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="33.3279" id="filter0_dd_53_835" width="33.3279" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1.19028" />
              <feGaussianBlur stdDeviation="1.19028" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0.08 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_53_835" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2.38057" />
              <feGaussianBlur stdDeviation="2.38057" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0235294 0 0 0 0 0.0392157 0 0 0 0 0.0509804 0 0 0 0.08 0" />
              <feBlend in2="effect1_dropShadow_53_835" mode="normal" result="effect2_dropShadow_53_835" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_53_835" mode="normal" result="shape" />
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
    <div className="relative shrink-0 size-[14.283px]" data-name="Location Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2834 14.2834">
        <g id="Location Icon">
          <mask height="15" id="mask0_53_873" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="15" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="14.2834" id="Bounding box" width="14.2834" />
          </mask>
          <g mask="url(#mask0_53_873)">
            <path d={svgPaths.p1b3084c0} fill="var(--fill-0, #FAF8F3)" id="location_on" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Location1() {
  return (
    <div className="content-stretch flex gap-[4.761px] items-center relative shrink-0 w-full" data-name="Location">
      <LocationIcon1 />
      <div className="flex flex-[1_0_0] flex-col font-['Raleway:Italic',sans-serif] font-normal italic justify-center leading-[0] min-h-px min-w-px relative text-[#faf8f3] text-[7.14px]">
        <p className="leading-[normal]">Uzbekistan</p>
      </div>
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex flex-col gap-[2.381px] h-[37.494px] items-start relative shrink-0 w-full" data-name="Info">
      <p className="font-['Raleway:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#faf8f3] text-[9.52px] w-full">Wonders of Uzbekistan</p>
      <Location1 />
    </div>
  );
}

function Card1() {
  return (
    <div className="content-stretch flex h-full items-center relative shadow-[0px_16px_32px_0px_rgba(6,10,13,0.05),0px_8px_16px_0px_rgba(6,10,13,0.05)] shrink-0 w-[221.492px]" data-name="Card">
      <div className="h-full relative rounded-[20px] shrink-0 w-[221.492px]" data-name="Card">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
          <img alt="" className="absolute h-[115.3%] left-0 max-w-none top-[-15.58%] w-full" src={imgCard1} />
        </div>
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-between px-[12px] py-[18px] relative size-full">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-gradient-to-b from-1/2 from-[rgba(0,0,0,0)] h-[266.624px] left-1/2 rounded-[20px] to-[#060a0d] top-1/2 w-[221.393px]" data-name="Gradient" />
            <Label1 />
            <Info1 />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2.381px_4.761px_0px_rgba(6,10,13,0.03),inset_0px_1.19px_2.381px_0px_rgba(6,10,13,0.03)]" />
      </div>
    </div>
  );
}

function CardRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Card Row">
      <Card />
      <div className="flex flex-row items-center self-stretch">
        <Card1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <FilterNavigation />
      <CardRow />
    </div>
  );
}

function Component3FeatureSection() {
  return (
    <div className="bg-[#fafaf5] relative shrink-0 w-full" data-name="3 Feature Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start pb-[48px] pt-[40px] px-[18px] relative w-full">
          <FindExperiences />
          <Container />
        </div>
      </div>
    </div>
  );
}

function TravelLine() {
  return (
    <div className="h-[1342px] relative shrink-0 w-[18px]" data-name="Travel Line">
      <div className="absolute inset-[0_-32.99%_0_-33.68%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 1342">
          <g id="Travel Line">
            <g filter="url(#filter0_i_53_789)" id="Union">
              <path d={svgPaths.p19244800} fill="url(#paint0_linear_53_789)" />
            </g>
            <g filter="url(#filter1_dd_53_789)" id="Travel Point">
              <path d={svgPaths.p3f06c400} fill="var(--fill-0, #247BA0)" />
            </g>
            <g filter="url(#filter2_dd_53_789)" id="Travel Point_2">
              <path d={svgPaths.p16174700} fill="var(--fill-0, #247BA0)" />
            </g>
            <g filter="url(#filter3_dd_53_789)" id="Travel Point_3">
              <path d={svgPaths.p4a4480} fill="var(--fill-0, #247BA0)" />
            </g>
            <g filter="url(#filter4_dd_53_789)" id="Travel Point_4">
              <path d={svgPaths.p35d8f980} fill="var(--fill-0, #247BA0)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1342.64" id="filter0_i_53_789" width="18.6436" x="6.06249" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="0.643596" dy="0.643596" />
              <feGaussianBlur stdDeviation="1.28719" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.1 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_53_789" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30" id="filter1_dd_53_789" width="30" x="2.38419e-07" y="130.376">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_53_789" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="effect2_dropShadow_53_789" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
              <feBlend in2="effect1_dropShadow_53_789" mode="normal" result="effect2_dropShadow_53_789" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_53_789" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30" id="filter2_dd_53_789" width="30" x="2.38419e-07" y="444.376">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_53_789" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="effect2_dropShadow_53_789" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
              <feBlend in2="effect1_dropShadow_53_789" mode="normal" result="effect2_dropShadow_53_789" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_53_789" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30" id="filter3_dd_53_789" width="30" x="2.38419e-07" y="758.376">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_53_789" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="effect2_dropShadow_53_789" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
              <feBlend in2="effect1_dropShadow_53_789" mode="normal" result="effect2_dropShadow_53_789" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_53_789" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30" id="filter4_dd_53_789" width="30" x="2.38419e-07" y="1089.38">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_53_789" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="effect2_dropShadow_53_789" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
              <feBlend in2="effect1_dropShadow_53_789" mode="normal" result="effect2_dropShadow_53_789" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_53_789" mode="normal" result="shape" />
            </filter>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_53_789" x1="15.0625" x2="15.0625" y1="0" y2="1342">
              <stop stopColor="#EDF6F7" stopOpacity="0.95" />
              <stop offset="0.2525" stopColor="#D7E5E7" />
              <stop offset="0.5" stopColor="#CCE0E3" />
              <stop offset="0.75" stopColor="#D7E5E7" />
              <stop offset="1" stopColor="#E6F5F7" stopOpacity="0.95" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Row 1">
      <div className="h-[158px] pointer-events-none relative rounded-[13.05px] shadow-[0px_5.22px_10.44px_0px_rgba(6,10,13,0.03),0px_2.61px_5.22px_0px_rgba(6,10,13,0.03),0px_1.305px_2.61px_0px_rgba(6,10,13,0.03)] shrink-0 w-[323.648px]" data-name="Landscape Body Image">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover rounded-[13.05px] size-full" src={imgLandscapeBodyImage} />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_2.61px_2.61px_5.22px_0px_rgba(6,10,13,0.03),inset_1.305px_1.305px_2.61px_0px_rgba(0,0,0,0.03)]" />
      </div>
      <div className="relative shrink-0 w-full" data-name="Body Section Text">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start justify-center relative w-full">
          <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#060a0d] text-[17.73px] w-full">
            <p className="leading-[normal]">Personalized Travel Planning</p>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#333] text-[12.41px] w-full">{`Discover destinations tailored to your unique travel preferences, thanks to our sophisticated AI and machine learning algorithms. `}</p>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-center relative shrink-0 w-full" data-name="Row 5">
      <div className="h-[158px] pointer-events-none relative rounded-[20px] shadow-[0px_5.67px_11.34px_0px_rgba(6,10,13,0.03),0px_2.835px_5.67px_0px_rgba(6,10,13,0.03),0px_1.417px_2.835px_0px_rgba(6,10,13,0.03)] shrink-0 w-[323.648px]" data-name="Landscape Body Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[20px] size-full" src={imgLandscapeBodyImage1} />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_2.835px_2.835px_5.67px_0px_rgba(6,10,13,0.03),inset_1.417px_1.417px_2.835px_0px_rgba(0,0,0,0.03)]" />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Body Section Text">
        <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#060a0d] text-[17.63px] w-full">
          <p className="leading-[normal]">For the Modern Traveler</p>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#333] text-[12.34px] w-full">We encourage you to delve deeper, beyond popular tourist spots, to experience the true essence of local cultures and communities.</p>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start justify-center relative shrink-0 w-full" data-name="Row 5">
      <div className="h-[158px] pointer-events-none relative rounded-[20px] shadow-[0px_5.156px_10.312px_0px_rgba(6,10,13,0.03),0px_2.578px_5.156px_0px_rgba(6,10,13,0.03),0px_1.289px_2.578px_0px_rgba(6,10,13,0.03)] shrink-0 w-[323.648px]" data-name="Landscape Body Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[20px] size-full" src={imgLandscapeBodyImage2} />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_2.578px_2.578px_5.156px_0px_rgba(6,10,13,0.03),inset_1.289px_1.289px_2.578px_0px_rgba(0,0,0,0.03)]" />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Body Section Text">
        <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#060a0d] text-[17.68px] w-full">
          <p className="leading-[normal]">Research and Discover</p>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#333] text-[12.38px] w-full">Utilize Wayfarer not just to plan trips but to research and discover new destinations that align with your travel history and future aspirations.</p>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="Row 5">
      <div className="h-[158px] pointer-events-none relative rounded-[20px] shadow-[0px_5.156px_10.312px_0px_rgba(6,10,13,0.03),0px_2.578px_5.156px_0px_rgba(6,10,13,0.03),0px_1.289px_2.578px_0px_rgba(6,10,13,0.03)] shrink-0 w-[323.648px]" data-name="Landscape Body Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[20px] size-full" src={imgLandscapeBodyImage3} />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_2.578px_2.578px_5.156px_0px_rgba(6,10,13,0.03),inset_1.289px_1.289px_2.578px_0px_rgba(0,0,0,0.03)]" />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Body Section Text">
        <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#060a0d] text-[17.56px] w-full">
          <p className="leading-[normal]">A Journey Tailored to You</p>
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#333] text-[12.29px] w-full">Find destinations that match your passions and interests, with personalized suggestions that evolve as you interact with our platform.</p>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-center relative shrink-0 w-[323.648px]" data-name="Cards">
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[354px]" data-name="Container">
      <TravelLine />
      <Cards />
    </div>
  );
}

function WhyWayfarerSection() {
  return (
    <div className="bg-[#fafaf5] relative shrink-0 w-full" data-name="Why Wayfarer Section">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-center flex flex-wrap gap-[24px_12px] items-center px-[18px] py-[48px] relative w-full">
          <div className="content-stretch flex items-center relative shrink-0 w-[261px]" data-name="H1">
            <p className="font-['Raleway:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#060a0d] text-[32px] whitespace-nowrap">Why Wayfarer</p>
          </div>
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function ImageFrame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pointer-events-none relative shrink-0 w-full" data-name="Image Frame">
      <div className="h-[306px] relative shrink-0 w-full" data-name="Feature Image">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-14.82%] max-w-none top-0 w-[129.65%]" src={imgFeatureImage} />
        </div>
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0.637px_0.637px_2.549px_2.549px_rgba(46,61,73,0.05)]" />
      </div>
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_4px_4px_8px_0px_rgba(6,10,13,0.02),inset_2px_2px_4px_0px_rgba(6,10,13,0.02)]" />
    </div>
  );
}

function CtaText() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="CTA Text">
      <div className="h-[62px] relative shrink-0 w-full" data-name="H2">
        <p className="absolute font-['Raleway:Bold',sans-serif] font-bold inset-[9.18%_0_10.2%_0] leading-[normal] text-[#060a0d] text-[17.84px] text-center">There’s an adventure waiting just for you!</p>
      </div>
    </div>
  );
}

function PrimaryButtonDefault1() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#e36844] items-center justify-center px-[32px] py-[14px] relative rounded-[40px] shrink-0 to-[#d95d39]" data-name="Primary Button/Default">
      <div aria-hidden="true" className="absolute border-[#7d2207] border-[0.5px] border-solid inset-[-0.5px] pointer-events-none rounded-[40.5px] shadow-[0px_16px_32px_0px_rgba(125,34,7,0.08),0px_4px_8px_0px_rgba(125,34,7,0.08)]" />
      <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#fafaf5] text-[13.735px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Sign up</p>
      </div>
    </div>
  );
}

function CtaFeature() {
  return (
    <div className="bg-[#f3f4f5] relative shadow-[0px_16px_32px_0px_rgba(6,10,13,0.03),0px_4px_8px_0px_rgba(6,10,13,0.03)] shrink-0 w-full" data-name="CTA Feature">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center pb-[72px] pt-[24px] px-[18px] relative w-full">
          <ImageFrame />
          <CtaText />
          <PrimaryButtonDefault1 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_4px_4px_8px_0px_rgba(6,10,13,0.02),inset_2px_2px_4px_0px_rgba(6,10,13,0.02)]" />
    </div>
  );
}

function Rating() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="Rating">
      <div className="relative shrink-0 size-[14px]" data-name="Travel Point">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p248bc800} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" strokeWidth="0.708792" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[14px]" data-name="Travel Point">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p248bc800} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" strokeWidth="0.708792" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[14px]" data-name="Travel Point">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p248bc800} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" strokeWidth="0.708792" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[14px]" data-name="Travel Point">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p248bc800} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" strokeWidth="0.708792" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[14px]" data-name="Travel Point">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p248bc800} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" strokeWidth="0.708792" />
        </svg>
      </div>
    </div>
  );
}

function ReviewerInfo() {
  return (
    <div className="content-stretch flex gap-[10px] h-[28px] items-center relative shrink-0 w-full" data-name="Reviewer Info">
      <div className="relative shrink-0 size-[30px]" data-name="User Profile">
        <img alt="" className="absolute block max-w-none size-full" height="30" src={imgUserProfile} width="30" />
      </div>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e3d49] text-[0px] text-[12px] w-[162px]">
        <p className="font-['Raleway:Medium',sans-serif] font-medium mb-0">Emma L.</p>
        <p className="font-['Raleway:Italic',sans-serif] italic">{`Adventurer & Wayfarer User`}</p>
      </div>
    </div>
  );
}

function Review1() {
  return (
    <div className="bg-[#f3f4f5] content-stretch flex flex-col gap-[18px] h-[227px] items-start justify-center overflow-clip px-[16px] py-[20px] relative rounded-[14.176px] shadow-[0px_4px_8px_0px_rgba(46,61,73,0.03),0px_2px_4px_0px_rgba(46,61,73,0.05)] shrink-0 w-[262px]" data-name="Review 1">
      <Rating />
      <div className="font-['Inter:Regular',sans-serif] font-normal h-[109px] leading-[normal] not-italic relative shrink-0 text-[#333] text-[12px] w-full">
        <p className="mb-0">{`Wayfarer transformed how I see travel. It's not just about the destinations; it's about the stories and the people. Each recommendation led me to experiences I never would have found on my own.`}</p>
        <p>It’s travel personalized in the truest sense.</p>
      </div>
      <ReviewerInfo />
    </div>
  );
}

function Rating1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="Rating">
      <div className="relative shrink-0 size-[14px]" data-name="Travel Point">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p248bc800} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" strokeWidth="0.708792" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[14px]" data-name="Travel Point">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p248bc800} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" strokeWidth="0.708792" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[14px]" data-name="Travel Point">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p248bc800} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" strokeWidth="0.708792" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[14px]" data-name="Travel Point">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p248bc800} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" strokeWidth="0.708792" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[14px]" data-name="Travel Point">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.p248bc800} fill="var(--fill-0, #A3C36B)" id="Travel Point" stroke="var(--stroke-0, #94B55B)" strokeWidth="0.708792" />
        </svg>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px relative w-[224px]" data-name="Body 3">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#333] text-[12px]">{`Every trip planned with Wayfarer has been an eye-opener. From hidden mountain retreats to bustling local markets, Wayfarer’s insights are priceless. It's not just a platform; it's a community that understands what travelers really seek.`}</p>
    </div>
  );
}

function ReviewerInfo1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Reviewer Info">
      <div className="relative shrink-0 size-[30px]" data-name="User Profile">
        <img alt="" className="absolute block max-w-none size-full" height="30" src={imgUserProfile1} width="30" />
      </div>
      <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#2e3d49] text-[0px] text-[12px]">
        <p className="font-['Raleway:Medium',sans-serif] font-medium mb-0">Alex T.</p>
        <p className="font-['Raleway:Italic',sans-serif] italic">Globe Trotter</p>
      </div>
    </div>
  );
}

function Review2() {
  return (
    <div className="bg-[#f3f4f5] content-stretch flex flex-col gap-[18px] h-[226px] items-start justify-center overflow-clip px-[16px] py-[20px] relative rounded-[14.176px] shadow-[0px_4px_8px_0px_rgba(46,61,73,0.03),0px_2px_4px_0px_rgba(46,61,73,0.05)] shrink-0 w-[262px]" data-name="Review 2">
      <Rating1 />
      <Body />
      <ReviewerInfo1 />
    </div>
  );
}

function Review() {
  return <div className="content-stretch flex h-[190px] items-start px-[10px] py-[16px] shrink-0 w-[262px]" data-name="Review" />;
}

function ArrowForwardIos() {
  return (
    <div className="absolute inset-[20%]" data-name="arrow_forward_ios">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.011 17.011">
        <g id="arrow_forward_ios">
          <mask height="18" id="mask0_53_765" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="17.011" id="Bounding box" width="17.011" />
          </mask>
          <g mask="url(#mask0_53_765)">
            <path d={svgPaths.p1204d200} fill="var(--fill-0, #2E3D49)" id="arrow_forward_ios_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[16px] items-center overflow-clip pl-[18px] pr-[16px] relative shrink-0 w-[390px]" data-name="Row">
      <Review1 />
      <Review2 />
      <Review />
      <div className="relative shrink-0 size-[28.352px]" data-name="Right Arrow Button">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.3517 28.3517">
          <circle cx="14.1758" cy="14.1758" fill="var(--fill-0, white)" id="Circle" r="13.8214" stroke="var(--stroke-0, #D7E5E7)" strokeWidth="0.708792" />
        </svg>
        <ArrowForwardIos />
      </div>
    </div>
  );
}

function TravelerTestimonialsSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Traveler Testimonials Section">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center pb-[72px] pt-[64px] px-[18px] relative w-full">
          <div className="font-['Raleway:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#060a0d] text-[24px] text-center whitespace-nowrap">
            <p className="mb-0">What travelers are</p>
            <p>raving about</p>
          </div>
          <Row />
        </div>
      </div>
    </div>
  );
}

function Logo1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Logo">
      <div className="col-1 h-[32px] ml-0 mt-0 relative row-1 w-[31.555px]" data-name="wayfarer-black-1 2">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgWayfarerBlack12} />
      </div>
      <div className="col-1 h-[24px] ml-[38.66px] mt-[7.2px] relative row-1 w-[103.344px]" data-name="wayfarer-black-2 3">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgWayfarerBlack23} />
      </div>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[20px] items-start relative shrink-0 text-[#333] text-[14px] w-full" data-name="Links">
      <p className="relative shrink-0 w-full">Get Started</p>
      <p className="relative shrink-0 w-full">Community</p>
      <p className="relative shrink-0 w-full">Discover</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[169px]">
      <div className="content-stretch flex flex-col gap-[32px] items-start justify-center leading-[normal] not-italic relative shrink-0 w-full" data-name="Footer Section Links">
        <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#2e3d49] text-[16px] w-full">Travel</p>
        <Links />
      </div>
    </div>
  );
}

function Links1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[20px] items-start relative shrink-0 text-[#333] text-[14px] w-full" data-name="Links">
      <p className="relative shrink-0 w-full">Blog</p>
      <p className="relative shrink-0 w-full">Reviews</p>
      <p className="relative shrink-0 w-full">Help Centre</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[168px]">
      <div className="content-stretch flex flex-col gap-[32px] items-start justify-center leading-[normal] not-italic relative shrink-0 w-full" data-name="Footer Section Links">
        <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#2e3d49] text-[16px] w-full">Resources</p>
        <Links1 />
      </div>
    </div>
  );
}

function Liinks() {
  return (
    <div className="content-start flex flex-wrap gap-[51px_16px] items-start relative shrink-0 w-[354px]" data-name="Liinks">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Links3() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[20px] items-start relative shrink-0 text-[#333] text-[14px] w-full" data-name="Links">
      <p className="relative shrink-0 w-full">About Us</p>
      <p className="relative shrink-0 w-full">Media</p>
      <p className="relative shrink-0 w-full">Contact Us</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[169px]">
      <div className="content-stretch flex flex-col gap-[32px] items-start justify-center leading-[normal] not-italic relative shrink-0 w-full" data-name="Footer Section Links">
        <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#2e3d49] text-[16px] w-full">Company</p>
        <Links3 />
      </div>
    </div>
  );
}

function Links4() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[20px] items-start relative shrink-0 text-[#333] text-[14px] w-full" data-name="Links">
      <p className="relative shrink-0 w-full">{`Terms & Conditions`}</p>
      <p className="relative shrink-0 w-full">Private Policy</p>
      <p className="relative shrink-0 w-full">FAQ</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[169px]">
      <div className="content-stretch flex flex-col gap-[32px] items-start justify-center leading-[normal] not-italic relative shrink-0 w-full" data-name="Footer Section Links">
        <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#2e3d49] text-[16px] w-full">More</p>
        <Links4 />
      </div>
    </div>
  );
}

function Links2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[354px]" data-name="Links">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[56px] items-start pb-[72px] pt-[56px] px-[18px] relative w-full">
          <Logo1 />
          <Liinks />
          <Links2 />
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

function FooterNotes() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer Notes">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start pb-[56px] px-[18px] relative w-full">
          <div className="bg-[#2e3d49] h-px rounded-[4px] shrink-0 w-full" data-name="Divider" />
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
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#333] text-[14px] whitespace-nowrap">{`© 2025 Wayfarer. All rights reserved. `}</p>
        </div>
      </div>
    </div>
  );
}

export default function MobileNew() {
  return (
    <div className="bg-[#fafaf5] content-stretch flex flex-col items-start relative size-full" data-name="Mobile New">
      <div className="h-[60px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Nav Bar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNavBar} />
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-between px-[18px] py-[14px] relative size-full">
            <Left />
            <Right />
            <div className="absolute bg-[#ded2ba] h-px left-0 rounded-[4px] top-[59px] w-[390px]" data-name="Divider" />
          </div>
        </div>
      </div>
      <HeroSection />
      <Component3FeatureSection />
      <WhyWayfarerSection />
      <CtaFeature />
      <TravelerTestimonialsSection />
      <div className="bg-[#ded2ba] content-stretch flex flex-col items-start justify-center overflow-clip relative shadow-[0px_-8px_16px_0px_rgba(6,10,13,0.04),0px_-4px_4px_0px_rgba(6,10,13,0.04)] shrink-0 w-[390px]" data-name="Footer Section">
        <Footer />
        <FooterNotes />
      </div>
    </div>
  );
}