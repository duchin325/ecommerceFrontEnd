import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div`

`
const Title = styled.h1`

`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
`
const Select = styled.select`
    margin-left: 10px;
    padding: 10px;
`
const Option = styled.option`

`

const ProductList = () => {
  return (
    <Container>
        <Navbar></Navbar>
        <Announcement></Announcement>
        <Title>Hoodies</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Blue</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option disabled selected>Price</Option>
                    <Option>Lowest</Option>
                    <Option>Highest</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products></Products>
        <Newsletter></Newsletter>
        <Footer />
    </Container>
  )
}

export default ProductList