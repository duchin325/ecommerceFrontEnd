import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex:1
    height: 80vh;
    margin: 3px;
    position: relative;
`
const Image = styled.img`
    width: 90%;
    height: 80%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    top: 20px;
    left: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.h1`
    color: #14AB2D;
    margin-bottom: 20px;
`
const Button = styled.button`
    cursor: pointer;
    padding: 20px;
    font-weight: 600;
    border: none;
    &:hover {
        background-color: lightgreen;
        color: white;
    }
`

const CategoryItem = ({item}) => {

  return (
    <Container>
        <Image src={item.img}></Image>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem