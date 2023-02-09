import { Container, LikeButton, FoodIcon,AddArea,ButtonAdd } from "./style";

import { CiHeart } from 'react-icons/ci'
import { SubtractIcon, AddIcon, LikeIcon } from '../../../assets/Icons'
import { useState } from "react";
import { IconButton } from "../../global/IconButton";
import { ButtonComponent } from "../../global/button";

export function Card({ img, data, ...rest }) {


    return (
        <Container
        >
            <LikeButton>
                <LikeIcon />
            </LikeButton>
            <FoodIcon>

            </FoodIcon>

            <h1>
                {data.title}
            </h1>

<AddArea>
<IconButton>
    <SubtractIcon />
</IconButton>
    <p>1</p>
<IconButton>
    <AddIcon />
</IconButton>
</AddArea>

<ButtonAdd>
    Incluir
</ButtonAdd>

        </Container>
    )
}