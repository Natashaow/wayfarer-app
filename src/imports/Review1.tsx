import svgPaths from "./svg-oreuh3qmxf";
import imgUserProfile from "figma:asset/92bf997c1cf70ce40779ccbb1f4109d30f83d563.png";

export default function Review() {
  return (
    <div className="bg-[#f3f4f5] content-stretch flex flex-col gap-[26px] items-start justify-center pb-[32px] pt-[24px] px-[20px] relative rounded-[20px] size-full" data-name="Review 1">
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
        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#2e3d49] text-[16px] whitespace-pre-wrap">{`Wayfarer transformed how I see travel. It's not just about the destinations; it's about the stories and the people. Each recommendation led me to experiences I never would have found on my own. It’s travel personalized in the truest sense.`}</p>
      </div>
      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Reviewer Info">
        <div className="relative shrink-0 size-[36px]" data-name="User Profile">
          <img alt="" className="absolute block max-w-none size-full" height="36" src={imgUserProfile} width="36" />
        </div>
        <div className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#2e3d49] text-[0px] whitespace-pre-wrap">
          <p className="font-['Raleway:Regular',sans-serif] mb-0 text-[16px]">Emma L.</p>
          <p className="font-['Raleway:Italic',sans-serif] italic text-[14px]">{`Adventurer & Wayfarer User`}</p>
        </div>
      </div>
    </div>
  );
}