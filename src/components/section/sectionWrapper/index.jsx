import { Container, CardSection, SectiondWrapper } from "./style";
import { ArrowRigth } from "../../../assets/Icons";
import { Card } from "../card";

import img from '../../../assets/Mask-group-1.png'
import { useEffect, useRef, useState } from "react";
export function FoodSection({ title }) {
    const [scrollLeft, setsCrollLeft] = useState(0);
    const cardRef = useRef(null);

    const data = {
        id: 1,
        title: "Salada Ravanello",
        description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
        price: 44.97,
        img: img
    }
    useEffect(() => {

        cardRef.current.scrollTo({
            left: scrollLeft,
            top: 0,
            behavior: 'smooth'
        })

    }, [scrollLeft])

    function HandleScroll(isToLeft) {

        const maxScrollLeft = cardRef.current.scrollWidth - cardRef.current.clientWidth;
        const valueToScroll = 300;

        if (isToLeft && maxScrollLeft > cardRef.current.scrollLeft + valueToScroll) {
            setsCrollLeft((prev) => prev + valueToScroll)
        }

        if (!isToLeft && cardRef.current.scrollLeft >= valueToScroll) {
            setsCrollLeft((prev) => prev - valueToScroll)
        }

        setsCrollLeft((prev) => prev);
    }

    return (
        <Container>
            <h1 >{title}</h1>

            <SectiondWrapper>
                <CardSection ref={cardRef} >
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


        </Container>
    );
}