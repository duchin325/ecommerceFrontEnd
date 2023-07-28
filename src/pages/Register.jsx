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
  width: 40%;
  background-color: white;
  border-radius: 10px;
`
const Title = styled.h1`
  font-size: 30px;
  font-weight: 200;
`
const Form = styled.form`
   display: flex;
   flex-wrap: wrap;
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
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`

const Register = () => {
  return (
    <Container>
      <Wrapper>
          <Title>Create an account</Title>
          <Form>
            <Input placeholder='name'></Input>
            <Input placeholder='last-name'></Input>
            <Input placeholder='email'></Input>
            <Input placeholder='username'></Input>
            <Input placeholder='password'></Input>
            <Button>CREATE</Button>
          </Form>
      </Wrapper>
    </Container>
  )
}

export default Register