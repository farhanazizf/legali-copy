import type { Problem } from "../../../data/home.data";
import { H5 } from "../../elements/typography";

interface CardBenefitProps {
  benefit: Problem;
}

export function CardBenefit({ benefit }: CardBenefitProps) {
  return (
    <div className="relative flex w-full space-y-4 rounded-md bg-white p-2 shadow-xl">
      <div className="flex-1 space-y-1 rounded-md bg-sky-100 p-6">
        <div className="h-5 w-5 rounded-md bg-sky-blue-900" />
        <H5 level={"title"} weight={"semibold"} className="text-sky-blue-900">
          {benefit.title}
        </H5>
        <H5 level={"label"} className="text-sky-blue-900">
          {benefit.description}
        </H5>
      </div>
      {/* Chat bubble tail */}
      <div className="absolute -bottom-7 left-0">
        <div className="h-0 w-0 border-t-[36px] border-r-[60px] border-t-white border-r-transparent"></div>
      </div>
    </div>
  );
}
