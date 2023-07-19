import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



const Info = styled.p`
    opacity: 0;
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #f5fbfd;

    &:hover ${Info} {
        opacity: 1;
    }
`
const Circle = styled.div`
    height: 200px;
    width: 200px;
    background-color: white;
    position: absolute;
    border-radius: 50%;
`
const Image = styled.img`
    height: 70%;
    z-index: 2;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`



const Product = ({item}) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img}></Image>
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon />
            </Icon>
            <Icon>
                <SearchIcon />
            </Icon>
            <Icon>
                <FavoriteBorderIcon />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product