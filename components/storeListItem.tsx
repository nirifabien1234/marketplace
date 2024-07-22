import { FC } from "react";
import Image from "next/image";
import { ArrowRight01Icon } from "hugeicons-react";

interface StoreListItemProps {
  imageSrc: string;
  storeName: string;
  productCount: number;
}

const StoreListItem: FC<StoreListItemProps> = ({ imageSrc, storeName, productCount }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-5">
        <Image src={imageSrc || "/defaultIcon.png"} width={60} height={60} alt={storeName} />
        <div className=" flex flex-col gap-3">
          <p className="font-medium text-sm">{storeName}</p>
          <p className="text-xs text-authSubHeadingColor font-light ">
            {productCount} Products
          </p>
        </div>
      </div>
      <ArrowRight01Icon strokeWidth={2} size={16} className="text-separatorColor" />
    </div>
  );
};

export { StoreListItem };
