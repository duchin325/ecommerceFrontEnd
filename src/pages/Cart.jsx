import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import malimg from '../assets/mal5.jpeg'
import malimg2 from '../assets/mal8.jpeg'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${props => props.type === 'filled' && 'white'};
`
const TopTexts = styled.div`

`
const TopText = styled.span`
    text-decoration: underline;
    margin: 0 10px;
`
const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 300px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    margin: 0 10px;
    justify-content: space-around;
`
const ProductName = styled.span`

`
const ProductId = styled.p`

`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    border: 1px solid gray;
`
const ProductSize = styled.span`

`
const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const ProdAmmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const Ammount = styled.span`
    font-size: 24px;
    margin: 5px;
`
const ProductPrice = styled.span`
    font-size: 30px;
    font-weight: 200;
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 2px;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 10px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-around;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: lightgray;
        color: black;
    }
`

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <TopContainer>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Whishlist (0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECKOUT NOW</TopButton>
            </TopContainer>
            <BottomContainer>
                <Info>
                    <Product>
                        <ProductDetails>
                            <Image src={malimg}></Image>
                            <Details>
                                <ProductName><b>Product:</b> SDASFSAFASFDASFASF</ProductName>
                                <ProductId><b>ID:</b> 23</ProductId>
                                <ProductColor color='white'></ProductColor>
                                <ProductSize><b>Size:</b> 37</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProdAmmountContainer>
                                <AddIcon></AddIcon>
                                <Ammount>1</Ammount>
                                <RemoveIcon></RemoveIcon>
                            </ProdAmmountContainer>
                            <ProductPrice>10000</ProductPrice>
                        </PriceDetails>
                    </Product>
                    <Hr></Hr>
                    <Product>
                        <ProductDetails>
                            <Image src={malimg2}></Image>
                            <Details>
                                <ProductName><b>Product:</b> SDASFSAFASFDASFASF</ProductName>
                                <ProductId><b>ID:</b> 23</ProductId>
                                <ProductColor color='white'></ProductColor>
                                <ProductSize><b>Size:</b> 37</ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProdAmmountContainer>
                                <AddIcon></AddIcon>
                                <Ammount>1</Ammount>
                                <RemoveIcon></RemoveIcon>
                            </ProdAmmountContainer>
                            <ProductPrice>10000</ProductPrice>
                        </PriceDetails>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$20000</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping</SummaryItemText>
                        <SummaryItemPrice>$2000</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type='total'>
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$22000</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItemPrice></SummaryItemPrice>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>
                </Summary>
            </BottomContainer>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart