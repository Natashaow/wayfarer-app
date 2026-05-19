import svgPaths from "./svg-rt3anv2fn2";
import imgNavBar from "figma:asset/d0d7a881bda4a994e8710d8a092c951bf7d632e3.png";
import imgWayfarerBlack12 from "figma:asset/31bfa83910aefa179da0ef0052c94a5701371e0c.png";
import imgWayfarerBlack23 from "figma:asset/ee0ae046dd453c8d4b5bc89b2cfbcca670ff8d17.png";
import imgBodyContents from "figma:asset/f5674fb8c81228aad16688b6e79873cbfc000594.jpg";

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
          <mask height="24" id="mask0_30_1000" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_1000)">
            <path d={svgPaths.p2edaeb50} fill="var(--fill-0, #333333)" id="close_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Close() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Close">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end pl-[300px] relative size-full">
          <Close1 />
        </div>
      </div>
    </div>
  );
}

function HeaderText() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 text-center" data-name="Header Text">
      <p className="font-['Raleway:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#060a0d] text-[42px]">Ready for Adventure?</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Let’s wrap up your preferences!</p>
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
  return <div className="bg-[#247ba0] flex-[1_0_0] h-[2px] min-h-px min-w-px" />;
}

function Line3() {
  return <div className="bg-[#247ba0] flex-[1_0_0] h-[2px] min-h-px min-w-px" />;
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
            <g filter="url(#filter0_i_30_947)">
              <path d={svgPaths.p14cada00} fill="var(--fill-0, #247BA0)" />
            </g>
            <path d={svgPaths.p2fa84680} stroke="var(--stroke-0, #247BA0)" />
          </g>
          <g id="check">
            <mask height="14" id="mask0_30_947" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
              <rect fill="var(--fill-0, #D9D9D9)" height="14" id="Bounding box" width="14" x="3" y="3" />
            </mask>
            <g mask="url(#mask0_30_947)">
              <path d={svgPaths.p12b81810} fill="var(--fill-0, white)" id="check_2" />
            </g>
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.6436" id="filter0_i_30_947" width="20.6436" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="0.643596" dy="0.643596" />
            <feGaussianBlur stdDeviation="1.28719" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_30_947" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 3">
          <g id="Circle">
            <g filter="url(#filter0_i_30_947)">
              <path d={svgPaths.p14cada00} fill="var(--fill-0, #247BA0)" />
            </g>
            <path d={svgPaths.p2fa84680} stroke="var(--stroke-0, #247BA0)" />
          </g>
          <g id="check">
            <mask height="14" id="mask0_30_947" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="14" x="3" y="3">
              <rect fill="var(--fill-0, #D9D9D9)" height="14" id="Bounding box" width="14" x="3" y="3" />
            </mask>
            <g mask="url(#mask0_30_947)">
              <path d={svgPaths.p12b81810} fill="var(--fill-0, white)" id="check_2" />
            </g>
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.6436" id="filter0_i_30_947" width="20.6436" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="0.643596" dy="0.643596" />
            <feGaussianBlur stdDeviation="1.28719" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_30_947" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-[-5%_-25%_-45%_-25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <g id="Group 3">
            <g id="Circle">
              <g filter="url(#filter0_i_30_961)">
                <path d={svgPaths.pca9b900} fill="var(--fill-0, #D1F0EF)" />
              </g>
              <path d={svgPaths.pccf80} stroke="var(--stroke-0, #247BA0)" />
            </g>
            <g filter="url(#filter1_dd_30_961)" id="Travel Point">
              <path d={svgPaths.pbee5600} fill="var(--fill-0, #247BA0)" />
              <path d={svgPaths.p30febc00} stroke="var(--stroke-0, #247BA0)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.6436" id="filter0_i_30_961" width="20.6436" x="5" y="1">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="0.643596" dy="0.643596" />
              <feGaussianBlur stdDeviation="1.28719" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.1 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_30_961" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30" id="filter1_dd_30_961" width="30" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_30_961" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="effect2_dropShadow_30_961" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
              <feBlend in2="effect1_dropShadow_30_961" mode="normal" result="effect2_dropShadow_30_961" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_30_961" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
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
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#247ba0] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[normal]">Travel Preferences</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-[108px]" data-name="Progress Section">
        <Group2 />
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#247ba0] text-[12px] text-center whitespace-nowrap">
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

function Hail() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="hail">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="hail">
          <mask height="24" id="mask0_30_981" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_981)">
            <path d={svgPaths.p30abcc00} fill="var(--fill-0, #2E3D49)" id="hail_2" />
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
      <Hail />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#247ba0] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Solo</p>
      </div>
    </div>
  );
}

function Favorite() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="favorite">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="favorite">
          <mask height="24" id="mask0_30_957" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_957)">
            <path d={svgPaths.p755d400} fill="var(--fill-0, #2E3D49)" id="favorite_2" />
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
      <Favorite />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">With Partner</p>
      </div>
    </div>
  );
}

function FamilyStar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="family_star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="family_star">
          <mask height="24" id="mask0_30_935" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_935)">
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
        <p className="leading-[normal]">With Family</p>
      </div>
    </div>
  );
}

function Groups() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="groups">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="groups">
          <mask height="24" id="mask0_30_943" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_943)">
            <path d={svgPaths.p8862e00} fill="var(--fill-0, #2E3D49)" id="groups_2" />
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
      <Groups />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">With Friends</p>
      </div>
    </div>
  );
}

function AirportShuttle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="airport_shuttle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="airport_shuttle">
          <mask height="24" id="mask0_30_993" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_993)">
            <path d={svgPaths.p3a081300} fill="var(--fill-0, #2E3D49)" id="airport_shuttle_2" />
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
      <AirportShuttle />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">With Organized Groups</p>
      </div>
    </div>
  );
}

function MoreHoriz() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="more_horiz">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more_horiz">
          <mask height="24" id="mask0_30_985" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_985)">
            <path d={svgPaths.p5910600} fill="var(--fill-0, #2E3D49)" id="more_horiz_2" />
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
      <MoreHoriz />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Other</p>
      </div>
    </div>
  );
}

function MultiCheckBoxOptions() {
  return (
    <div className="content-start flex flex-wrap gap-[12px_10px] items-start relative shrink-0 w-full" data-name="Multi-check Box Options">
      <MultiCheckBoxChoice />
      <MultiCheckBoxChoice1 />
      <MultiCheckBoxChoice2 />
      <MultiCheckBoxChoice3 />
      <MultiCheckBoxChoice4 />
      <MultiCheckBoxChoice5 />
    </div>
  );
}

function Question() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] h-[154px] items-center relative shrink-0 w-[600px]" data-name="question 1">
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[0] relative shrink-0 w-full" data-name="Question">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#2e3d49] text-[20px] w-[606px]">
          <p className="leading-[normal] whitespace-pre-wrap">Who are your usual travel companions?*</p>
        </div>
        <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center relative shrink-0 text-[#333] text-[14px] w-[606px]">
          <p className="leading-[normal] whitespace-pre-wrap">Choose all that apply.</p>
        </div>
      </div>
      <MultiCheckBoxOptions />
    </div>
  );
}

function LocalTaxi() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="local_taxi">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="local_taxi">
          <mask height="24" id="mask0_30_939" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_939)">
            <path d={svgPaths.p2be93380} fill="var(--fill-0, #2E3D49)" id="local_taxi_2" />
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
      <LocalTaxi />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Car</p>
      </div>
    </div>
  );
}

function TransitTicket() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="transit_ticket">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="transit_ticket">
          <mask height="24" id="mask0_30_973" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_973)">
            <path d={svgPaths.pa4b800} fill="var(--fill-0, #2E3D49)" id="transit_ticket_2" />
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
      <TransitTicket />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Public transport</p>
      </div>
    </div>
  );
}

function Footprint() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="footprint">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="footprint">
          <mask height="24" id="mask0_30_965" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_965)">
            <path d={svgPaths.p2049df80} fill="var(--fill-0, #2E3D49)" id="footprint_2" />
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
      <Footprint />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">By Foot</p>
      </div>
    </div>
  );
}

function PedalBike() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="pedal_bike">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="pedal_bike">
          <mask height="24" id="mask0_30_953" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_953)">
            <path d={svgPaths.p138cae00} fill="var(--fill-0, #2E3D49)" id="pedal_bike_2" />
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
      <PedalBike />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Bicycle</p>
      </div>
    </div>
  );
}

function Travel() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="travel">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="travel">
          <mask height="24" id="mask0_30_977" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_977)">
            <path d={svgPaths.p2556d640} fill="var(--fill-0, #2E3D49)" id="travel_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MultiCheckBoxChoice10() {
  return (
    <div className="bg-[#fafaf5] content-stretch flex gap-[10px] h-[42px] items-center justify-center px-[16px] py-[6px] relative rounded-[40px] shrink-0" data-name="Multi-check box Choice">
      <div aria-hidden="true" className="absolute border border-[#e9dec8] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_2px_4px_0px_rgba(6,10,13,0.03)]" />
      <Travel />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Plane</p>
      </div>
    </div>
  );
}

function DirectionsSubway() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="directions_subway">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="directions_subway">
          <mask height="24" id="mask0_30_931" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_931)">
            <path d={svgPaths.p22105080} fill="var(--fill-0, #2E3D49)" id="directions_subway_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MultiCheckBoxChoice11() {
  return (
    <div className="bg-[#fafaf5] content-stretch flex gap-[10px] h-[42px] items-center justify-center px-[16px] py-[6px] relative rounded-[40px] shrink-0" data-name="Multi-check box Choice">
      <div aria-hidden="true" className="absolute border border-[#e9dec8] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_2px_4px_0px_rgba(6,10,13,0.03)]" />
      <DirectionsSubway />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Train</p>
      </div>
    </div>
  );
}

function MoreHoriz1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="more_horiz">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more_horiz">
          <mask height="24" id="mask0_30_985" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_985)">
            <path d={svgPaths.p5910600} fill="var(--fill-0, #2E3D49)" id="more_horiz_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MultiCheckBoxChoice12() {
  return (
    <div className="bg-[#d1f0ef] content-stretch flex gap-[10px] h-[42px] items-center justify-center px-[16px] py-[6px] relative rounded-[40px] shrink-0" data-name="Multi-check box Choice">
      <div aria-hidden="true" className="absolute border-2 border-[#247ba0] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_2px_4px_0px_rgba(22,98,130,0.03)]" />
      <MoreHoriz1 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Other</p>
      </div>
    </div>
  );
}

function MultiCheckBoxOptions1() {
  return (
    <div className="content-start flex flex-wrap gap-[12px_10px] items-start relative shrink-0 w-full" data-name="Multi-check Box Options">
      <MultiCheckBoxChoice6 />
      <MultiCheckBoxChoice7 />
      <MultiCheckBoxChoice8 />
      <MultiCheckBoxChoice9 />
      <MultiCheckBoxChoice10 />
      <MultiCheckBoxChoice11 />
      <MultiCheckBoxChoice12 />
    </div>
  );
}

function Form() {
  return (
    <div className="bg-[#fafaf5] content-stretch flex h-[84px] items-start justify-center px-[16px] py-[10px] relative shrink-0 w-[600px]" data-name="Form">
      <div aria-hidden="true" className="absolute border-[#ded2ba] border-[1.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#808080] text-[14px]">
        <p className="leading-[normal] whitespace-pre-wrap">Specify your preferred mode...</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_0px_0px_rgba(36,123,160,0.25)]" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[6px] relative shrink-0" data-name="Container">
      <Form />
    </div>
  );
}

function Question2() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-center relative shrink-0 w-[600px]" data-name="question 5">
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[0] relative shrink-0 w-full" data-name="Question">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[#2e3d49] text-[20px] w-[606px]">
          <p className="leading-[normal] whitespace-pre-wrap">How do you prefer to travel?*</p>
        </div>
        <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center relative shrink-0 text-[#333] text-[14px] w-[606px]">
          <p className="leading-[normal] whitespace-pre-wrap">Choose all that apply.</p>
        </div>
      </div>
      <MultiCheckBoxOptions1 />
      <Container />
    </div>
  );
}

function RadioButtonUnchecked() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="radio_button_unchecked">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="radio_button_unchecked">
          <mask height="24" id="mask0_30_969" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_969)">
            <path d={svgPaths.p1ee5e230} fill="var(--fill-0, #DED2BA)" id="radio_button_unchecked_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MultiCheckBoxChoice13() {
  return (
    <div className="bg-[rgba(250,250,245,0)] content-stretch flex gap-[10px] h-full items-center justify-center relative rounded-[40px] shrink-0" data-name="Multi-check box Choice">
      <RadioButtonUnchecked />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Yes</p>
      </div>
    </div>
  );
}

function RadioButtonChecked() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="radio_button_checked">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="radio_button_checked">
          <mask height="24" id="mask0_30_927" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_927)">
            <path d={svgPaths.pf1830f2} fill="var(--fill-0, #247BA0)" id="radio_button_checked_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MultiCheckBoxChoice14() {
  return (
    <div className="bg-[rgba(250,250,245,0)] content-stretch flex gap-[10px] h-full items-center justify-center relative rounded-[40px] shrink-0" data-name="Multi-check box Choice">
      <RadioButtonChecked />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[normal]">No</p>
      </div>
    </div>
  );
}

function MultiCheckBoxOptions2() {
  return (
    <div className="content-stretch flex gap-[32px] h-[24px] items-center relative shrink-0 w-full" data-name="Multi-check Box Options">
      <div className="flex flex-row items-center self-stretch">
        <MultiCheckBoxChoice13 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <MultiCheckBoxChoice14 />
      </div>
    </div>
  );
}

function Question1() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-center relative shrink-0 w-[600px]" data-name="question 4">
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[0] relative shrink-0 text-[#2e3d49] w-full" data-name="Question">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center not-italic relative shrink-0 text-[20px] w-[606px]">
          <p className="leading-[normal] whitespace-pre-wrap">Do you have any health conditions we should consider?*</p>
        </div>
        <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center relative shrink-0 text-[14px] w-[606px]">
          <p className="leading-[normal] whitespace-pre-wrap">{`Select one option. `}</p>
        </div>
      </div>
      <MultiCheckBoxOptions2 />
    </div>
  );
}

function CheckBox() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check_box">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check_box">
          <mask height="24" id="mask0_30_989" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_989)">
            <path d={svgPaths.p29256980} fill="var(--fill-0, #247BA0)" id="check_box_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <CheckBox />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px] w-[514px]">
        <p className="leading-[normal] whitespace-pre-wrap">{`Keep me updated with Wayfarer's latest travel tips and recommendations.`}</p>
      </div>
    </div>
  );
}

function CheckBoxOutlineBlank() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="check_box_outline_blank">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="check_box_outline_blank">
          <mask height="24" id="mask0_30_923" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #DED2BA)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_923)">
            <path d={svgPaths.p3b4f0880} fill="var(--fill-0, #DED2BA)" id="check_box_outline_blank_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <CheckBoxOutlineBlank />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[14px] w-[294px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[normal] text-[#333]">I agree to the</span>
          <span className="leading-[normal]">{` `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-[#247ba0] underline">{`Terms & Conditions.`}</span>
        </p>
      </div>
    </div>
  );
}

function Checkboxes() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip relative shrink-0 w-[600px]" data-name="Checkboxes">
      <Frame />
      <Frame1 />
    </div>
  );
}

function FormContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[743px] items-center relative shrink-0" data-name="Form Container">
      <Question />
      <Question2 />
      <Question1 />
      <Checkboxes />
    </div>
  );
}

function FormContainer() {
  return (
    <div className="bg-[#fafaf5] relative rounded-[40px] shrink-0 w-full" data-name="Form Container">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[72px] items-center pb-[72px] pt-[20px] px-[20px] relative w-full">
          <Close />
          <HeaderFormSection />
          <FormContainer1 />
          <div className="bg-gradient-to-b from-[#e36844] h-[48px] relative rounded-[40px] shrink-0 to-[#d95d39]" data-name="Primary Button/Default">
            <div className="content-stretch flex h-full items-center justify-center overflow-clip px-[24.5px] py-[18.5px] relative rounded-[inherit]">
              <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#fafaf5] text-[16px] text-center w-[138px]">
                <p className="leading-[normal] whitespace-pre-wrap">Complete Profile</p>
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
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Sign Up Landing Page Step 3">
      <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[108px] py-[14px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[1440px]" data-name="Nav Bar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNavBar} />
        <NavContainer />
        <div className="absolute bg-[#ded2ba] h-px left-0 rounded-[4px] top-[75px] w-[1440px]" data-name="Divider" />
      </div>
      <BodyContents />
    </div>
  );
}