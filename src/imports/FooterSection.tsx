import svgPaths from "./svg-w83hjx6wcm";
import imgWayfarerFooterLogo from "figma:asset/d13da812caf4ab09f5f6e1a8c36531f26e7ae0e2.png";

function WayfarerInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-center relative shrink-0 w-[416px]" data-name="Wayfarer Info">
      <div className="h-[100px] relative shrink-0 w-[79px]" data-name="Wayfarer Footer Logo">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgWayfarerFooterLogo} />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#2e3d49] text-[16px] w-[286px] whitespace-pre-wrap">Embark on a journey of discovery with Wayfarer, where travel adventure awaits.</p>
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
    <div className="content-stretch flex gap-[25px] h-[155px] items-end leading-[normal] not-italic relative shrink-0 text-[#2e3d49] whitespace-pre-wrap" data-name="Footer Links">
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
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#333] text-[14px]">{`© 2025 Wayfarer. All rights reserved. `}</p>
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

export default function FooterSection() {
  return (
    <div className="bg-[#ded2ba] content-stretch flex flex-col items-center relative shadow-[0px_-8px_16px_0px_rgba(6,10,13,0.04),0px_-4px_4px_0px_rgba(6,10,13,0.04)] size-full" data-name="Footer Section">
      <Footer />
      <FooterNotes />
    </div>
  );
}