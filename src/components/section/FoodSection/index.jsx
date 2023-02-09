import { Container, CardSection, SectiondWrapper, LeftButton, RigthButton, IconWrapper } from "./style";
import { SimpleArrowRigthIcon } from "../../../assets/Icons";
import { Card } from "../card";

import img from '../../../assets/Mask-group-1.png'
import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef, useState } from "react";
export function FoodSection({ title }) {
    const [scrollLeft, setsCrollLeft] = useState(0);
    const cardRef = useRef(null);

    const isDesktop = useMediaQuery({
        query: '(min-width: 800px)'
    })

    const data = {
        id: 1,
        title: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
        price: 44.97,
        img: img
    }
    useEffect(() => {
        // console.log("ref",cardRef.current.scrollLeft)
        // console.log("ScrollLeft",scrollLeft)
        cardRef.current.scrollTo({
            left: scrollLeft,
            top: 0,
            behavior: 'smooth'
        })


    }, [scrollLeft])

    function HandleScroll(isToLeft) {


        const maxScrollLeft = cardRef.current.scrollWidth - cardRef.current.clientWidth;
        const valueToScroll = 300;
        const scrollLeft = cardRef.current.scrollLeft;






        if (isToLeft) {
            if (maxScrollLeft > cardRef.current.scrollLeft + valueToScroll)
                setsCrollLeft(cardRef.current.scrollLeft + valueToScroll)
            else 
                setsCrollLeft(maxScrollLeft)
            
        }

        if (!isToLeft ) {
            if( cardRef.current.scrollLeft >= valueToScroll)
            setsCrollLeft(cardRef.current.scrollLeft - valueToScroll)
            else 
            setsCrollLeft(0)
        }

        setsCrollLeft((prev) => prev);
    }

    return (
        <Container>
            <h1 >{title}</h1>

            <SectiondWrapper ref={cardRef}>

                <CardSection  >
                    <Card img={img} data={data} />
                    <Card img={img} data={data} />
                    <Card img={img} data={data} />
                    <Card img={img} data={data} />
                    <Card img={img} data={data} />
                    <Card img={img} data={data} />
                    <Card img={img} data={data} />
                    <Card img={img} data={data} />
                    <Card img={img} data={data} />
                    <Card img={img} data={data} />
                </CardSection>

            </SectiondWrapper>
            {isDesktop ?
                <LeftButton onClick={() => HandleScroll(false)}>
                    <IconWrapper>
                        <SimpleArrowRigthIcon />
                    </IconWrapper>
                </LeftButton>
                : <></>}

            {isDesktop ?
                <RigthButton onClick={() => HandleScroll(true)} >
                    <IconWrapper>
                        <SimpleArrowRigthIcon />
                    </IconWrapper>

                </RigthButton>
                : <></>}

        </Container>
    );
}