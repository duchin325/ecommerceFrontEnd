import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import paymentimg from '../assets/payment.png'

const Container = styled.div`
    display: flex;
    text-align: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3`
    margin-bottom: 20px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 5px;
    &:hover {
        transform: scale(1.1)
    }
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`
const Payment = styled.img`
    width: 40%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Malandro.</Logo>
            <Desc>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. 
                At quasi eius dolor deserunt quibusdam 
                sint quis vitae fuga ex. 
                Non fugiat eius ipsam dolores et, 
                iure pariatur architecto maxime reiciendis!
            </Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <FacebookIcon></FacebookIcon>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <InstagramIcon></InstagramIcon>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <TwitterIcon></TwitterIcon>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful links</Title>
            <List>
                <ListItem>T-shirts</ListItem>
                <ListItem>Hoodies</ListItem>
                <ListItem>Troussers</ListItem>
                <ListItem>Caps</ListItem>
                <ListItem>Shirts</ListItem>
                <ListItem>Accesories</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><RoomIcon style={{marginRight: "10px"}} />Mariano moreno 419</ContactItem>
            <ContactItem><PhoneIcon style={{marginRight: "10px"}} />3491 503116</ContactItem>
            <ContactItem><MailIcon style={{marginRight: "10px"}} />malandroclothes@gmail.com</ContactItem>
            <Payment src={paymentimg}></Payment>
        </Right>
    </Container>
  )
}

export default Footer