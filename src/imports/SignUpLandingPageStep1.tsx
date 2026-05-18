import svgPaths from "./svg-kl5p76mqsa";
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
          <mask height="24" id="mask0_30_856" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_856)">
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
      <p className="font-['Raleway:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#060a0d] text-[42px]">Let’s Begin Your Journey!</p>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#333] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Fill in your details to create your Wayfarer account.</p>
      </div>
    </div>
  );
}

function Line() {
  return <div className="bg-[#d7e5e7] flex-[1_0_0] h-[2px] min-h-px min-w-px" />;
}

function Line1() {
  return <div className="bg-[#d7e5e7] flex-[1_0_0] h-[2px] min-h-px min-w-px" />;
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
      <div className="absolute inset-[-5%_-25%_-45%_-25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <g id="Group 3">
            <g id="Circle">
              <g filter="url(#filter0_i_30_830)">
                <path d={svgPaths.pca9b900} fill="var(--fill-0, #D1F0EF)" />
              </g>
              <path d={svgPaths.pccf80} stroke="var(--stroke-0, #247BA0)" />
            </g>
            <g filter="url(#filter1_dd_30_830)" id="Travel Point">
              <path d={svgPaths.pbee5600} fill="var(--fill-0, #247BA0)" />
              <path d={svgPaths.p30febc00} stroke="var(--stroke-0, #247BA0)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.6436" id="filter0_i_30_830" width="20.6436" x="5" y="1">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="0.643596" dy="0.643596" />
              <feGaussianBlur stdDeviation="1.28719" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.1 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_30_830" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30" id="filter1_dd_30_830" width="30" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_30_830" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="effect2_dropShadow_30_830" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.08 0" />
              <feBlend in2="effect1_dropShadow_30_830" mode="normal" result="effect2_dropShadow_30_830" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_30_830" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 3">
          <g filter="url(#filter0_i_30_853)" id="Circle">
            <path d={svgPaths.p14cada00} fill="var(--fill-0, #D7E5E7)" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.6436" id="filter0_i_30_853" width="20.6436" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="0.643596" dy="0.643596" />
            <feGaussianBlur stdDeviation="1.28719" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_30_853" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group 3">
          <g filter="url(#filter0_i_30_853)" id="Circle">
            <path d={svgPaths.p14cada00} fill="var(--fill-0, #D7E5E7)" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.6436" id="filter0_i_30_853" width="20.6436" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="0.643596" dy="0.643596" />
            <feGaussianBlur stdDeviation="1.28719" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_30_853" />
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

function Form() {
  return (
    <div className="bg-[#fafaf5] h-[42px] relative shrink-0 w-full" data-name="Form">
      <div aria-hidden="true" className="absolute border-[#ded2ba] border-b-2 border-l-[1.5px] border-r-[1.5px] border-solid border-t-[1.5px] inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#808080] text-[14px]">
            <p className="leading-[normal] whitespace-pre-wrap">{`Enter your first name `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormLabelAndText() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[67px] items-start relative shrink-0 w-[288px]" data-name="Form label and text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[19px] justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[14px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">First name*</p>
      </div>
      <Form />
    </div>
  );
}

function Form1() {
  return (
    <div className="bg-[#fafaf5] h-[42px] relative shrink-0 w-full" data-name="Form">
      <div aria-hidden="true" className="absolute border-[#ded2ba] border-[1.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#808080] text-[14px]">
            <p className="leading-[normal] whitespace-pre-wrap">{`Enter your last name `}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormLabelAndText1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[67px] items-start relative shrink-0 w-[288px]" data-name="Form label and text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[19px] justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[14px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Last name*</p>
      </div>
      <Form1 />
    </div>
  );
}

function KeyboardArrowDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keyboard_arrow_down">
          <mask height="24" id="mask0_30_860" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_860)">
            <path d={svgPaths.p2b1b0180} fill="var(--fill-0, #2E3D49)" id="keyboard_arrow_down_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function KeyboardArrowDown1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keyboard_arrow_down">
          <mask height="24" id="mask0_30_860" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_860)">
            <path d={svgPaths.p2b1b0180} fill="var(--fill-0, #2E3D49)" id="keyboard_arrow_down_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function KeyboardArrowDown2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keyboard_arrow_down">
          <mask height="24" id="mask0_30_860" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_860)">
            <path d={svgPaths.p2b1b0180} fill="var(--fill-0, #2E3D49)" id="keyboard_arrow_down_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Form2() {
  return (
    <div className="bg-[#fafaf5] content-stretch flex gap-[17px] h-[42px] items-center px-[16px] py-[9px] relative rounded-[4px] shrink-0 w-[288px]" data-name="Form">
      <div aria-hidden="true" className="absolute border-[#ded2ba] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">DD</p>
      </div>
      <KeyboardArrowDown />
      <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[24px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
                <line id="Line 1" stroke="var(--stroke-0, #D9D9D9)" x2="24" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">MM</p>
      </div>
      <KeyboardArrowDown1 />
      <div className="flex h-[24px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[24px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
                <line id="Line 1" stroke="var(--stroke-0, #D9D9D9)" x2="24" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#808080] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">YY</p>
      </div>
      <KeyboardArrowDown2 />
    </div>
  );
}

function KeyboardArrowDown3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keyboard_arrow_down">
          <mask height="24" id="mask0_30_860" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_860)">
            <path d={svgPaths.p2b1b0180} fill="var(--fill-0, #2E3D49)" id="keyboard_arrow_down_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Form3() {
  return (
    <div className="bg-[#fafaf5] content-stretch flex gap-[10px] h-[42px] items-center px-[16px] py-[10px] relative rounded-[4px] shrink-0 w-[288px]" data-name="Form">
      <div aria-hidden="true" className="absolute border-[#ded2ba] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#808080] text-[14px]">
        <p className="leading-[normal] whitespace-pre-wrap">Select</p>
      </div>
      <KeyboardArrowDown3 />
    </div>
  );
}

function FormLabelAndText2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Form label and text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[19px] justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[14px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Place of residence*</p>
      </div>
      <Form3 />
    </div>
  );
}

function EmojiSingapore() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="🦆 emoji 'singapore'">
      <div className="absolute inset-[0_0_-11.11%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
          <g filter="url(#filter0_d_30_842)" id="ð¦ emoji 'singapore'">
            <path d={svgPaths.p2677bc80} fill="var(--fill-0, #F9F9F9)" id="Vector" />
            <path d={svgPaths.p280a3840} fill="var(--fill-0, #ED4C5C)" id="Vector_2" />
            <g id="Group">
              <path d={svgPaths.p3a9ac500} fill="var(--fill-0, #F9F9F9)" id="Vector_3" />
              <path d={svgPaths.p63f8300} fill="var(--fill-0, #F9F9F9)" id="Vector_4" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20" id="filter0_d_30_842" width="18" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.180392 0 0 0 0 0.239216 0 0 0 0 0.286275 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_30_842" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_30_842" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function KeyboardArrowDown4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_arrow_down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keyboard_arrow_down">
          <mask height="24" id="mask0_30_860" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_30_860)">
            <path d={svgPaths.p2b1b0180} fill="var(--fill-0, #2E3D49)" id="keyboard_arrow_down_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Form4() {
  return (
    <div className="bg-[#fafaf5] content-stretch flex gap-[10px] h-[42px] items-center px-[16px] py-[10px] relative rounded-[4px] shrink-0 w-[288px]" data-name="Form">
      <div aria-hidden="true" className="absolute border-[#ded2ba] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <EmojiSingapore />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#808080] text-[14px]">
        <p className="leading-[normal] whitespace-pre-wrap">+65 (Singapore)</p>
      </div>
      <KeyboardArrowDown4 />
    </div>
  );
}

function FormLabelAndText3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center relative shrink-0 w-full" data-name="Form label and text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[19px] justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[14px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Country/Region code*</p>
      </div>
      <Form4 />
    </div>
  );
}

function Form5() {
  return (
    <div className="bg-[#fafaf5] h-[42px] relative shrink-0 w-full" data-name="Form">
      <div aria-hidden="true" className="absolute border-[#ded2ba] border-[1.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#808080] text-[14px]">
            <p className="leading-[normal] whitespace-pre-wrap">+65</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormLabelAndText4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[67px] items-start relative shrink-0 w-[288px]" data-name="Form label and text">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[19px] justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[14px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">{` Mobile number*`}</p>
      </div>
      <Form5 />
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="mail">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="mail">
          <mask height="22" id="mask0_30_838" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="22" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="22" id="Bounding box" width="22" />
          </mask>
          <g mask="url(#mask0_30_838)">
            <path d={svgPaths.p1e1b7ff2} fill="var(--fill-0, #2E3D49)" id="mail_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Form6() {
  return (
    <div className="bg-[#fafaf5] h-[42px] relative shrink-0 w-full" data-name="Form">
      <div aria-hidden="true" className="absolute border-[#ded2ba] border-[1.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[16px] py-[10px] relative size-full">
          <Mail />
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#808080] text-[14px]">
            <p className="leading-[normal] whitespace-pre-wrap">Enter your email address</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start opacity-97 relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[19px] justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[14px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Email address*</p>
      </div>
      <Form6 />
    </div>
  );
}

function Form7() {
  return (
    <div className="bg-[#fafaf5] h-[42px] relative shrink-0 w-full" data-name="Form">
      <div aria-hidden="true" className="absolute border-[#ded2ba] border-[1.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[10px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#808080] text-[14px]">
            <p className="leading-[normal] whitespace-pre-wrap">Enter your password</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[19px] justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[14px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Create password*</p>
      </div>
      <Form7 />
      <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#2e3d49] text-[12px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Must be at least 6 characters</p>
      </div>
    </div>
  );
}

function FormFields() {
  return (
    <div className="content-start flex flex-wrap gap-[32px_24px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Form fields">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[288px]" data-name="Text field/Medium">
        <FormLabelAndText />
      </div>
      <div className="content-stretch flex flex-col h-[67px] items-start relative shrink-0 w-[288px]" data-name="Text field/Medium">
        <FormLabelAndText1 />
      </div>
      <div className="content-stretch flex flex-col gap-[6px] h-[67px] items-start relative shrink-0" data-name="Dropdown/Medium/Multiple">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[19px] justify-center leading-[0] not-italic relative shrink-0 text-[#2e3d49] text-[14px] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">Date of birth*</p>
        </div>
        <Form2 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[286px]" data-name="Dropdown/Medium">
        <FormLabelAndText2 />
      </div>
      <div className="content-stretch flex flex-col h-[67px] items-start relative shrink-0 w-[288px]" data-name="Dropdown/Medium with icon">
        <FormLabelAndText3 />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[286px]" data-name="Text field/Medium">
        <FormLabelAndText4 />
      </div>
      <div className="content-stretch flex flex-col h-[67px] items-start relative shrink-0 w-[600px]" data-name="Text field/Long with icon">
        <Frame />
      </div>
      <div className="content-stretch flex flex-col items-start opacity-97 relative shrink-0 w-[600px]" data-name="Text field/Long">
        <Frame1 />
      </div>
    </div>
  );
}

function FormContainer() {
  return (
    <div className="bg-[#fafaf5] relative rounded-[40px] shadow-[16px_16px_32px_2px_rgba(6,10,13,0.05),8px_8px_16px_4px_rgba(6,10,13,0.05)] shrink-0 w-full" data-name="Form Container">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[72px] items-center pb-[88px] pt-[20px] px-[20px] relative w-full">
          <Close />
          <HeaderFormSection />
          <FormFields />
          <div className="bg-gradient-to-b from-[#e36844] h-[48px] relative rounded-[40px] shrink-0 to-[#d95d39]" data-name="Primary Button/With Icon">
            <div className="content-stretch flex gap-[10px] h-full items-center justify-center overflow-clip px-[24.5px] py-[18.5px] relative rounded-[inherit]">
              <div className="flex flex-col font-['Raleway:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#fafaf5] text-[16px] text-center whitespace-nowrap">
                <p className="leading-[normal]">Continue to Preferences</p>
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
    <div className="opacity-96 relative shadow-[0px_16px_32px_0px_rgba(6,10,13,0.03),0px_4px_8px_0px_rgba(6,10,13,0.03)] shrink-0 w-full" data-name="Body Contents">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgBodyContents} />
        <div className="absolute backdrop-blur-[0.5px] bg-gradient-to-b from-[rgba(6,10,13,0)] inset-0 to-[rgba(6,10,13,0.75)]" />
      </div>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[316px] py-[104px] relative w-full">
          <FormContainer />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_8px_16px_0px_rgba(6,10,13,0.08),inset_0px_4px_8px_0px_rgba(6,10,13,0.1),inset_0px_2px_4px_0px_rgba(6,10,13,0.1)]" />
    </div>
  );
}

export default function SignUpLandingPageStep() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Sign Up Landing Page Step 1">
      <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[108px] py-[14px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-[1440px]" data-name="Nav Bar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNavBar} />
        <NavContainer />
        <div className="absolute bg-[#ded2ba] h-px left-0 rounded-[4px] top-[75px] w-[1440px]" data-name="Divider" />
      </div>
      <BodyContents />
    </div>
  );
}