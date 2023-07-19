import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import mal3 from '../assets/mal3.jpeg'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Container = styled.div`

`
const Wrapper = styled.div`
    display: flex;
    padding: 50px;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.h3`
    margin: 20px 0;
    font-weight: 200;
`
const Price = styled.span`
    font-size: 30px;
    font-weight: 200;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
`
const FilterTitle = styled.h1`
    font-weight: 200;
    font-size: 20px;
    margin: 0 10px;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    cursor: pointer;
    border: 1px solid black;
    margin: 0 10px;
    border-radius: 50%;
    background-color: ${props => props.color}
`
const FilterSelect = styled.select`
    padding: 5px;
`
const FilterOp = styled.option`

`
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
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
    padding: 10px;
    border: 1px solid gray;
    background-color: white;
    cursor: pointer;

    &:hover {
        background-color: lightgray;
    }
`

const SingleProduct = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src={mal3}></Image>
            </ImgContainer>
            <InfoContainer>
                <Title>Malandro Hoodie</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Architecto similique saepe consequuntur iusto, earum eos, modi exercitationem animi, totam nemo officiis. 
                    Consequuntur, cum expedita atque corrupti architecto adipisci saepe facere?</Desc>
                <Price>$15000</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"></FilterColor>
                        <FilterColor color="white"></FilterColor>
                        <FilterColor color="gray"></FilterColor>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSelect>
                            <FilterOp>XS</FilterOp>
                            <FilterOp>S</FilterOp>
                            <FilterOp>M</FilterOp>
                            <FilterOp>L</FilterOp>
                            <FilterOp>XL</FilterOp>
                        </FilterSelect>
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
        <Newsletter />
        <Footer />
    </Container>

  )
}

export default SingleProduct