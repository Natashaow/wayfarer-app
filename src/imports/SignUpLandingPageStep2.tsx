import svgPaths from "./svg-ozdogppq8v";
import imgNavBar from "figma:asset/d0d7a881bda4a994e8710d8a092c951bf7d632e3.png";
import imgWayfarerBlack12 from "figma:asset/31bfa83910aefa179da0ef0052c94a5701371e0c.png";
import imgWayfarerBlack23 from "figma:asset/ee0ae046dd453c8d4b5bc89b2cfbcca670ff8d17.png";
import imgBodyContents from "figma:asset/f5674fb8c81228aad16688b6e79873cbfc000594.png";

function SaveIcon() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Save Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
        <g id="Save Icon">
          <mask height="26" id="mask0_1_886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="26" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="26" id="Bounding box" width="26" />
          </mask>
          <g mask="url(#mask0_1_886)">
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
          <mask height="26" id="mask0_1_983" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="26" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="26" id="Bounding box" width="26" />
          </mask>
          <g mask="url(#mask0_1_983)">
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
          <mask height="24" id="mask0_1_875" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" rx="12" width="24" />
          </mask>
          <g mask="url(#mask0_1_875)">
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
              <p className="leading-[normal] whitespace-pre-wrap">Search destinations, experiences, or adventures</p>
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

function Close1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="close">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <mask height="24" id="mask0_30_915" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_915)">
            <path d={svgPaths.p2edaeb50} fill="var(--fill-0, #333333)" id="close_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Close() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-end pl-[300px] relative shrink-0 w-[760px]" data-name="Close">
      <Close1 />
    </div>
  );
}

function HeaderText() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 text-center" data-name="Header Text">
      <p className="font-['Raleway:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#060a0d] text-[42px] w-[487px] whitespace-pre-wrap">Tell Us Your Preferences</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Help us understand your travel interests to personalize your experience.</p>
      </div>
    </div>
  );
}

function Line() {
  return <div className="bg-[#247ba0] flex-[1_0_0] h-[2px] min-h-px min-w-px" />;
}

function Line1() {
  return <div className="bg-[#247ba0] flex-[1_0_0] h-[2px] min-h-px min-w-px" />;
}

function Line2() {
  return <div className="bg-[#d7e5e7] flex-[1_0_0] h-[2px] min-h-px min-w-px" />;
}

function Line3() {
  return <div className="bg-[#d7e5e7] flex-[1_0_0] h-[2px] min-h-px min-w-px" />;
}

function ProgressLine() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex h-px items-center left-1/2 top-[calc(50%-10px)] w-[504px]" data-name="Progress Line">
      <Line />
      <Line1 />
      <Line2 />
      <Line3 />
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 3">
          <g id="Circle">
            <g filter="url(#filter0_i_30_896)">
              <path d={svgPaths.p14cada00} fill="var(--fill-0, #247BA0)" />
            </g>
            <path d={svgPaths.p2fa84680} stroke="var(--stroke-0, #247BA0)" />
          </g>
          <g id="check">
            <mask height="14" id="mask0_30_896" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
              <rect fill="var(--fill-0, #D9D9D9)" height="14" id="Bounding box" width="14" x="3" y="3" />
            </mask>
            <g mask="url(#mask0_30_896)">
              <path d={svgPaths.p12b81810} fill="var(--fill-0, white)" id="check_2" />
            </g>
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.6436" id="filter0_i_30_896" width="20.6436" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="0.643596" dy="0.643596" />
            <feGaussianBlur stdDeviation="1.28719" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_30_896" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-[-5%_-25%_-45%_-25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <g id="Group 3">
            <g id="Circle">
              <g filter="url(#filter0_i_30_888)">
                <path d={svgPaths.pca9b900} fill="var(--fill-0, #D1F0EF)" />
              </g>
              <path d={svgPaths.pccf80} stroke="var(--stroke-0, #247BA0)" />
            </g>
            <g filter="url(#filter1_dd_30_888)" id="Travel Point">
              <path d={svgPaths.pbee5600} fill="var(--fill-0, #247BA0)" />
              <path d={svgPaths.p30febc00} stroke="var(--stroke-0, #247BA0)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.6436" id="filter0_i_30_888" width="20.6436" x="5" y="1">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="0.643596" dy="0.643596" />
              <feGaussianBlur stdDeviation="1.28719" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.1 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_30_888" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30" id="filter1_dd_30_888" width="30" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_30_888" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="effect2_dropShadow_30_888" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
              <feBlend in2="effect1_dropShadow_30_888" mode="normal" result="effect2_dropShadow_30_888" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_30_888" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 3">
          <g filter="url(#filter0_i_30_912)" id="Circle">
            <path d={svgPaths.p14cada00} fill="var(--fill-0, #D7E5E7)" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.6436" id="filter0_i_30_912" width="20.6436" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="0.643596" dy="0.643596" />
            <feGaussianBlur stdDeviation="1.28719" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_30_912" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="content-stretch flex gap-[139px] items-center relative shrink-0 w-[602px]" data-name="Progress Bar">
      <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-[108px]" data-name="Progress Section">
        <Group />
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#247ba0] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Personal Details</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-[108px]" data-name="Progress Section">
        <Group1 />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Travel Preferences</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-[108px]" data-name="Progress Section">
        <Group2 />
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Other Preferences</p>
        </div>
      </div>
    </div>
  );
}

function HeaderFormSection() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[600px]" data-name="Header Form Section">
      <HeaderText />
      <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0" data-name="Progress Bar - Active State">
        <ProgressLine />
        <ProgressBar />
      </div>
    </div>
  );
}

function EditorChoice() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="editor_choice">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="editor_choice">
          <mask height="24" id="mask0_30_880" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_880)">
            <path d={svgPaths.p16ab5f80} fill="var(--fill-0, #2E3D49)" id="editor_choice_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MultiCheckBoxChoice() {
  return (
    <div className="bg-[#d1f0ef] content-stretch flex gap-[10px] h-[42px] items-center justify-center px-[16px] py-[10px] relative rounded-[40px] shrink-0" data-name="Multi-check box Choice">
      <div aria-hidden="true" className="absolute border-2 border-[#247ba0] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_2px_4px_0px_rgba(22,98,130,0.03)]" />
      <EditorChoice />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#247ba0] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Top Activities</p>
      </div>
    </div>
  );
}

function Diamond() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="diamond">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Diamond Icon">
          <mask height="24" id="mask0_1_933" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_1_933)">
            <path d={svgPaths.p243b1180} fill="var(--fill-0, #2E3D49)" id="diamond" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MultiCheckBoxChoice1() {
  return (
    <div className="bg-[#fafaf5] content-stretch flex gap-[10px] h-[42px] items-center justify-center px-[16px] py-[6px] relative rounded-[40px] shrink-0" data-name="Multi-check box Choice">
      <div aria-hidden="true" className="absolute border border-[#e9dec8] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_2px_4px_0px_rgba(6,10,13,0.03)]" />
      <Diamond />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Hidden Gems</p>
      </div>
    </div>
  );
}

function FamilyStar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="family_star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="family_star">
          <mask height="24" id="mask0_30_876" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_876)">
            <path d={svgPaths.p2d162871} fill="var(--fill-0, #2E3D49)" id="family_star_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MultiCheckBoxChoice2() {
  return (
    <div className="bg-[#fafaf5] content-stretch flex gap-[10px] h-[42px] items-center justify-center px-[16px] py-[6px] relative rounded-[40px] shrink-0" data-name="Multi-check box Choice">
      <div aria-hidden="true" className="absolute border border-[#e9dec8] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_2px_4px_0px_rgba(6,10,13,0.03)]" />
      <FamilyStar />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Family Friendly</p>
      </div>
    </div>
  );
}

function Beenhere() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="beenhere">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="beenhere">
          <mask height="24" id="mask0_30_892" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_892)">
            <path d={svgPaths.pa829fc0} fill="var(--fill-0, #2E3D49)" id="beenhere_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MultiCheckBoxChoice3() {
  return (
    <div className="bg-[#fafaf5] content-stretch flex gap-[10px] h-[42px] items-center justify-center px-[16px] py-[6px] relative rounded-[40px] shrink-0" data-name="Multi-check box Choice">
      <div aria-hidden="true" className="absolute border border-[#e9dec8] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_2px_4px_0px_rgba(6,10,13,0.03)]" />
      <Beenhere />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Bucket List Experiences</p>
      </div>
    </div>
  );
}

function Landscape() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="landscape_2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="landscape_2">
          <mask height="24" id="mask0_30_872" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_872)">
            <path d={svgPaths.p159d5ef0} fill="var(--fill-0, #2E3D49)" id="landscape_2_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MultiCheckBoxChoice4() {
  return (
    <div className="bg-[#fafaf5] content-stretch flex gap-[10px] h-[42px] items-center justify-center px-[16px] py-[6px] relative rounded-[40px] shrink-0" data-name="Multi-check box Choice">
      <div aria-hidden="true" className="absolute border border-[#e9dec8] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_2px_4px_0px_rgba(6,10,13,0.03)]" />
      <Landscape />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">{`Nature & Outdoors`}</p>
      </div>
    </div>
  );
}

function AccountBalance() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="account_balance">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="account_balance">
          <mask height="24" id="mask0_30_919" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_919)">
            <path d={svgPaths.p148fab00} fill="var(--fill-0, #2E3D49)" id="account_balance_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MultiCheckBoxChoice5() {
  return (
    <div className="bg-[#fafaf5] content-stretch flex gap-[10px] h-[42px] items-center justify-center px-[16px] py-[6px] relative rounded-[40px] shrink-0" data-name="Multi-check box Choice">
      <div aria-hidden="true" className="absolute border border-[#e9dec8] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_2px_4px_0px_rgba(6,10,13,0.03)]" />
      <AccountBalance />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">{`Cultural & Historic`}</p>
      </div>
    </div>
  );
}

function TheaterComedy() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="theater_comedy">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="theater_comedy">
          <mask height="24" id="mask0_30_904" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_904)">
            <path d={svgPaths.p191b92f2} fill="var(--fill-0, #2E3D49)" id="theater_comedy_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MultiCheckBoxChoice6() {
  return (
    <div className="bg-[#fafaf5] content-stretch flex gap-[10px] h-[42px] items-center justify-center px-[16px] py-[6px] relative rounded-[40px] shrink-0" data-name="Multi-check box Choice">
      <div aria-hidden="true" className="absolute border border-[#e9dec8] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_2px_4px_0px_rgba(6,10,13,0.03)]" />
      <TheaterComedy />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">{`Entertainment & Music`}</p>
      </div>
    </div>
  );
}

function LocalActivity() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="local_activity">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="local_activity">
          <mask height="24" id="mask0_30_908" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_908)">
            <path d={svgPaths.p9d20e80} fill="var(--fill-0, #2E3D49)" id="local_activity_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MultiCheckBoxChoice7() {
  return (
    <div className="bg-[#fafaf5] content-stretch flex gap-[10px] h-[42px] items-center justify-center px-[16px] py-[6px] relative rounded-[40px] shrink-0" data-name="Multi-check box Choice">
      <div aria-hidden="true" className="absolute border border-[#e9dec8] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_2px_4px_0px_rgba(6,10,13,0.03)]" />
      <LocalActivity />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">{`Attractions & Tickets `}</p>
      </div>
    </div>
  );
}

function ForkSpoon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fork_spoon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="fork_spoon">
          <mask height="24" id="mask0_30_884" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_884)">
            <path d={svgPaths.p11f4a500} fill="var(--fill-0, #2E3D49)" id="fork_spoon_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MultiCheckBoxChoice8() {
  return (
    <div className="bg-[#fafaf5] content-stretch flex gap-[10px] h-[42px] items-center justify-center px-[16px] py-[6px] relative rounded-[40px] shrink-0" data-name="Multi-check box Choice">
      <div aria-hidden="true" className="absolute border border-[#e9dec8] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_2px_4px_0px_rgba(6,10,13,0.03)]" />
      <ForkSpoon />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">{`Food & Culinary`}</p>
      </div>
    </div>
  );
}

function LocalBar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="local_bar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="local_bar">
          <mask height="24" id="mask0_30_868" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_868)">
            <path d={svgPaths.p226c6c00} fill="var(--fill-0, #2E3D49)" id="local_bar_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MultiCheckBoxChoice9() {
  return (
    <div className="bg-[#fafaf5] content-stretch flex gap-[10px] h-[42px] items-center justify-center px-[16px] py-[6px] relative rounded-[40px] shrink-0" data-name="Multi-check box Choice">
      <div aria-hidden="true" className="absolute border border-[#e9dec8] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_2px_4px_0px_rgba(6,10,13,0.03)]" />
      <LocalBar />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Nightlife</p>
      </div>
    </div>
  );
}

function MultiCheckBoxOptions() {
  return (
    <div className="content-start flex flex-wrap gap-[12px_10px] h-[204px] items-start relative shrink-0 w-full" data-name="Multi-check Box Options">
      <MultiCheckBoxChoice />
      <MultiCheckBoxChoice1 />
      <MultiCheckBoxChoice2 />
      <MultiCheckBoxChoice3 />
      <MultiCheckBoxChoice4 />
      <MultiCheckBoxChoice5 />
      <MultiCheckBoxChoice6 />
      <MultiCheckBoxChoice7 />
      <MultiCheckBoxChoice8 />
      <MultiCheckBoxChoice9 />
    </div>
  );
}

function Question() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-center relative shrink-0 w-[600px]" data-name="question 1">
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[0] relative shrink-0 w-full" data-name="Question">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#2e3d49] text-[20px] w-[606px]">
          <p className="leading-[normal] whitespace-pre-wrap">What are your favourite experiences?*</p>
        </div>
        <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center relative shrink-0 text-[#333] text-[14px] w-[606px]">
          <p className="leading-[normal] whitespace-pre-wrap">Choose all that apply.</p>
        </div>
      </div>
      <MultiCheckBoxOptions />
    </div>
  );
}

function Question1() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-[600px]" data-name="question 2">
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Question">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[20px] w-[606px]">
          <p className="leading-[normal] whitespace-pre-wrap">How adventurous are you?*</p>
        </div>
        <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[normal] relative shrink-0 text-[#333] text-[14px] w-[606px] whitespace-pre-wrap">
          <p className="mb-0">0= I like to play it safe</p>
          <p>10= Maximum adventure</p>
        </div>
      </div>
      <div className="h-[43px] relative shrink-0 w-[496px]" data-name="Slider/1-10">
        <div className="absolute bg-[#d9d9d9] inset-[20.93%_5.65%_67.44%_3.02%] rounded-[20px]" data-name="Line" />
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal inset-[9.3%_98.19%_53.49%_0] italic leading-[16px] text-[#2e3d49] text-[14px] text-center">0</p>
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal inset-[9.3%_0_53.49%_95.97%] italic leading-[16px] text-[#2e3d49] text-[14px] text-center whitespace-pre-wrap">10</p>
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal inset-[62.79%_50.4%_0_47.78%] italic leading-[16px] text-[#2e3d49] text-[14px] text-center">5</p>
        <div className="absolute bg-[#247ba0] inset-[18.6%_51.01%_65.12%_3.02%] rounded-bl-[20px] rounded-tl-[20px]" data-name="Line" />
        <div className="absolute inset-[0_48.79%_44.19%_46.37%]" data-name="Slider Button">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p270eefc0} fill="var(--fill-0, white)" id="Slider Button" stroke="var(--stroke-0, #247BA0)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Question2() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-[600px]" data-name="question 3">
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Question">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[20px] w-[606px]">
          <p className="leading-[normal] whitespace-pre-wrap">How interested are you in local cultures?*</p>
        </div>
        <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[normal] relative shrink-0 text-[#333] text-[14px] w-[606px] whitespace-pre-wrap">
          <p className="mb-0">0= Not interested at all</p>
          <p>10= Extremely interested</p>
        </div>
      </div>
      <div className="h-[43px] relative shrink-0 w-[496px]" data-name="Slider/1-10">
        <div className="absolute bg-[#d9d9d9] inset-[20.93%_5.65%_67.44%_3.02%] rounded-[20px]" data-name="Line" />
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal inset-[9.3%_98.19%_53.49%_0] italic leading-[16px] text-[#2e3d49] text-[14px] text-center">0</p>
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal inset-[9.3%_0_53.49%_95.97%] italic leading-[16px] text-[#2e3d49] text-[14px] text-center whitespace-pre-wrap">10</p>
        <p className="absolute font-['Inter:Italic',sans-serif] font-normal inset-[62.79%_50.4%_0_47.78%] italic leading-[16px] text-[#2e3d49] text-[14px] text-center">5</p>
        <div className="absolute bg-[#247ba0] inset-[18.6%_51.01%_65.12%_3.02%] rounded-bl-[20px] rounded-tl-[20px]" data-name="Line" />
        <div className="absolute inset-[0_48.79%_44.19%_46.37%]" data-name="Slider Button">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p270eefc0} fill="var(--fill-0, white)" id="Slider Button" stroke="var(--stroke-0, #247BA0)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function FormContainer() {
  return (
    <div className="bg-[#fafaf5] relative rounded-[40px] shrink-0 w-full" data-name="Form Container">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[72px] items-center pb-[88px] pt-[20px] px-[20px] relative w-full">
          <Close />
          <HeaderFormSection />
          <Question />
          <Question1 />
          <Question2 />
          <div className="bg-gradient-to-b from-[#e36844] h-[48px] relative rounded-[40px] shrink-0 to-[#d95d39]" data-name="Primary Button/With Icon">
            <div className="content-stretch flex gap-[10px] h-full items-center justify-center overflow-clip px-[24.5px] py-[18.5px] relative rounded-[inherit]">
              <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#fafaf5] text-[16px] text-center whitespace-nowrap">
                <p className="leading-[normal]">{`Save & Continue`}</p>
              </div>
              <div className="relative shrink-0 size-[16px]" data-name="arrow_forward">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p3997600} fill="var(--fill-0, #FAFAF5)" id="arrow_forward" />
                </svg>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#7d2207] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_16px_32px_2px_rgba(125,34,7,0.08),0px_4px_8px_0px_rgba(125,34,7,0.08)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function BodyContents() {
  return (
    <div className="opacity-96 relative shrink-0 w-full" data-name="Body Contents">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBodyContents} />
        <div className="absolute bg-gradient-to-b from-[rgba(6,10,13,0)] inset-0 to-[rgba(6,10,13,0.75)]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[316px] py-[104px] relative w-full">
          <FormContainer />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_2px_0px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

export default function SignUpLandingPageStep() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Sign Up Landing Page Step 2">
      <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[108px] py-[14px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[1440px]" data-name="Nav Bar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNavBar} />
        <NavContainer />
        <div className="absolute bg-[#ded2ba] h-px left-0 rounded-[4px] top-[75px] w-[1440px]" data-name="Divider" />
      </div>
      <BodyContents />
    </div>
  );
}