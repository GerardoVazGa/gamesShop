import { Carousel } from "../../components/CarouselImagesComponent/Carousel";
import { CarouselProd } from "../../components/CarouselProdComponent/CarouselProd";
import { Message } from "../../components/InitialMsgComponent/Message";

export function Home(){
    return(
        <>
            <Carousel />
            <Message />
            <CarouselProd platform={"Xbox Series X/S"}/>
            <CarouselProd platform={"Playstation 5"}/>
        </>
    )
}