import Link from "next/link";
import BackLink from "@/components/Back";
import LeftArrowSvg from "@/assets/svgs/solidity/left-arrow.svg";
import RightArrowSvg from "@/assets/svgs/solidity/right-arrow.svg";

import LeftArrowMobileSvg from "@/assets/svgs/solidity/left-arrow-mobile.svg";
import RightArrowMobileSvg from "@/assets/svgs/solidity/right-arrow-mobile.svg";

import NavigationWrapper from "./NavigationWrapper";

interface NavigationProps {
  id: string;
  data: NavigationItem[];
  baseURL: string;
  label: string;
}

interface NavigationItem {
  id: string;
  name: string;
}

const Navigation = (props: NavigationProps) => {
  const { id, data, baseURL, label } = props;

  const pagination = { prev: null, next: null };

  const currentIndex = data.findIndex((item) => item.id === id);

  if (currentIndex > 0) {
    pagination.prev = data[currentIndex - 1];
  }
  if (currentIndex < data.length - 1) {
    pagination.next = data[currentIndex + 1];
  }

  return (
    <NavigationWrapper>
      {pagination.prev ? (
        <Link
          className="flex items-center gap-[15px] text-[16px] text-[#101010] hover:text-[#2C2C2C] sm:gap-[20px] sm:text-[32px]"
          href={`${baseURL}/${(pagination.prev as any).id}`}
        >
          <LeftArrowSvg className="hidden sm:inline-flex"></LeftArrowSvg>
          <LeftArrowMobileSvg className="sm:hidden"></LeftArrowMobileSvg>
          <span>
            Back to:{<br className="sm:hidden"></br>}{" "}
            {(pagination.prev as any).name}
          </span>
        </Link>
      ) : (
        <BackLink></BackLink>
      )}
      {pagination.next ? (
        <Link
          className="flex items-center gap-[15px] text-[16px] text-[#101010] hover:text-[#2C2C2C] sm:gap-[20px] sm:text-[32px]"
          href={`${baseURL}/${(pagination.next as any).id}`}
        >
          <span>
            Next {label}:{<br className="sm:hidden"></br>}{" "}
            {(pagination.next as any).name}
          </span>
          <RightArrowSvg className="hidden sm:inline-flex"></RightArrowSvg>
          <RightArrowMobileSvg className="sm:hidden"></RightArrowMobileSvg>
        </Link>
      ) : (
        <span className="text-[32px]">End of {label}s</span>
      )}
    </NavigationWrapper>
  );
};

export default Navigation;
