import Image from 'next/image';
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Button } from './ui/button';
import { ShoppingCartCheckIn02Icon, FavouriteIcon } from 'hugeicons-react';

interface ProductCardProps {
    showCartButton?: boolean;
    showFavouriteButton?: boolean;
    title: string;
    price: string;
    originalPrice?: string;
    imageUrl: string;
    imageHeight?: number;
    imageWidth?: number;
    cardHeight?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
    showCartButton = true,
    showFavouriteButton = true,
    title,
    price,
    originalPrice,
    imageUrl,
    imageHeight = 256,
    imageWidth = 370,
    cardHeight = "auto",
}) => {
    return (
        <Card className={`w-full px-0 shadow-none border-separatorColor border rounded-2xl ${cardHeight !== 'auto' ? `h-${cardHeight}` : ''}`}>
            <CardContent className='p-0 flex flex-col'>
                <div className="relative w-full" style={{ paddingTop: `${(imageHeight / imageWidth) * 100}%` }}>
                    <Image src={imageUrl} alt="product" layout="fill" className="object-cover rounded-t-2xl" />
                </div>
                <CardFooter className='flex justify-between md:px-4 md:py-6 p-3 flex-wrap flex-grow'>
                    <div className='flex flex-col gap-3'>
                        <p className='text-primaryBtnColor text-sm font-medium'>{title}</p>
                        <div className='flex gap-2 justify-center items-center md:mr'>
                            <p className='text-primary text-base font-bold w-fit'>{price}</p>
                            {originalPrice && (
                                <p className='text-separatorColor text-xs md:text-sm font-bold'>
                                    <del>{originalPrice}</del>
                                </p>
                            )}
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        {showCartButton && (
                            <Button variant="outline" className='size-12 border-[1.5px] border-separatorColor'>
                                <ShoppingCartCheckIn02Icon strokeWidth={2} size={16} className="text-headingColor" />
                            </Button>
                        )}
                        {showFavouriteButton && (
                            <Button variant="outline" className='size-12 border-[1.5px] border-separatorColor'>
                                <FavouriteIcon strokeWidth={2} size={16} className="text-headingColor" />
                            </Button>
                        )}
                    </div>
                </CardFooter>
            </CardContent>
        </Card>
    )
}
