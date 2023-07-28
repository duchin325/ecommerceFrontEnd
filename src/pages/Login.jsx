import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(224, 224, 224);
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  padding: 50px;
  width: 25%;
  background-color: white;
  border-radius: 10px;
`
const Title = styled.h1`
  font-size: 30px;
  font-weight: 200;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`
const Button = styled.button`
  width: 30%;
  padding: 10px;
  margin: 30px 0 10px 0;
  border: none;
  background-color: lightgray;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`
const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input placeholder='username'></Input>
            <Input placeholder='password'></Input>
            <Button>LOGIN</Button>
            <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
            <Link>Create a new account</Link>
          </Form>
      </Wrapper>
    </Container>
  )
}

export default Login