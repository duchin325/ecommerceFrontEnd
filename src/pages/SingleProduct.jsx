import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newletter from '../components/Newsletter'
import Footer from '../components/Footer'
import img1 from '../assets/mal1.jpeg'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

const Container = styled.div`

`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const Desc = styled.p`
    margin: 20px 0;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    width: 50%;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    cursor: pointer;
    border: 1px solid gray;
    margin: 0 10px;
`
const FilterSize = styled.select`
    margin: 10px;
    padding: 5px;
`
const FilterSizeOp = styled.option`

`
const AddContainer = styled.div`
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`
const Button = styled.button`
    cursor: pointer;
    padding: 15px;
    background-color: white;
    font-weight: 600;
    &:hover{
        background-color: lightgray;
    }
`

const Product = () => {
  return (
    <Container>
        <Navbar></Navbar>
        <Announcement></Announcement>
        <Wrapper>
            <ImgContainer>
                <Image src={img1}></Image>
            </ImgContainer>
            <InfoContainer>
                <Title>T-shirt Malandra</Title>
                <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                      Optio doloremque repellat nulla rem assumenda est. Exercitationem, 
                      esse illo doloremque alias minus corrupti possimus sed ea odio! Ipsam sed nesciunt ex.</Desc>
                <Price>$10000</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color: </FilterTitle>
                        <FilterColor color='black' />
                        <FilterColor color='white' />
                        <FilterColor color='gray'  />
                        <FilterColor color='blue'  />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size: </FilterTitle>
                        <FilterSize>
                            <FilterSizeOp>XS</FilterSizeOp>
                            <FilterSizeOp>S</FilterSizeOp>
                            <FilterSizeOp>M</FilterSizeOp>
                            <FilterSizeOp>L</FilterSizeOp>
                            <FilterSizeOp>XL</FilterSizeOp>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveIcon />
                        <Amount>1</Amount>
                        <AddIcon />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newletter></Newletter>
        <Footer></Footer>
    </Container>
  )
}

export default Product