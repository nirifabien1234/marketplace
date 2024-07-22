import Image from 'next/image';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from './ui/button';
import { ShoppingCartCheck02Icon, ShoppingCartCheckIn02Icon, FavouriteIcon } from 'hugeicons-react';

export const ProductCard = () => {
    return (
        <Card className="w-full px-0 shadow-none border-separatorColor border rounded-2xl">
            <CardContent className='p-0'>
                <Image src="/product_placeholder_image.png" alt="product" width={370} height={256} className='rounded-t-2xl'/>
            </CardContent>
            <CardFooter className='flex justify-between md:px-5 md:py-6 p-3  flex-wrap'>
                <div className='flex flex-col gap-3'>
                    <p className='text-primaryBtnColor text-sm font-medium'>Kwita Izina 2024</p>
                    <div className='flex gap-2 justify-center items-center'>

                    <p className='text-primary text-base font-bold w-fit'>9,000 Rwf</p>
                    <p className='text-separatorColor text-xs md:text-sm font-bold'><del>9,000 Rwf</del></p>
                    </div>
                </div>
                <div className='flex gap-3'>

                <Button variant="outline" className='size-12  border-[1.5px] border-separatorColor'>
                    <ShoppingCartCheckIn02Icon strokeWidth={2} size={16} className="text-headingColor" />
                </Button>
                <Button variant="outline" className='size-12 border-[1.5px] border-separatorColor'>
                    <FavouriteIcon strokeWidth={2} size={16} className="text-headingColor" />
                </Button>
                </div>
            </CardFooter>
        </Card>
    )
}