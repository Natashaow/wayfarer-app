import svgPaths from "./svg-lcka0jqjk8";
import imgNavBar from "figma:asset/d0d7a881bda4a994e8710d8a092c951bf7d632e3.png";
import imgWayfarerBlack12 from "figma:asset/31bfa83910aefa179da0ef0052c94a5701371e0c.png";
import imgWayfarerBlack23 from "figma:asset/ee0ae046dd453c8d4b5bc89b2cfbcca670ff8d17.png";

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

export default function NavBar() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center px-[108px] py-[14px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="Nav Bar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNavBar} />
      <NavContainer />
      <div className="absolute bg-[#ded2ba] h-px left-0 rounded-[4px] top-[75px] w-[1440px]" data-name="Divider" />
    </div>
  );
}