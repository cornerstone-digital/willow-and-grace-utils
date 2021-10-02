import styled from 'styled-components'
import BSButton from 'react-bootstrap/Button'
import { Card, Col, Container } from 'react-bootstrap'
import { device } from '@constants/device'

export const Button = styled(BSButton)`
  background-color: #c68f84;
  color: white;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  margin: 0 auto;
  padding: 5px 30px;
  border: none;
  margin: 20px auto;
  font-size: 20px;
  text-transform: uppercase;

  :hover {
    background-color: white;
    color: black;
  }

  @media ${device.mobile} {
    width: 95%;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`

export const ScentCard = styled(Card)`
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-family: 'Alegreya';

  @media ${device.tablet} {
    padding: 0 10px;
  }
`

export const CardBody = styled(Card.Body)`
  text-align: left;
  font-size: 20px;

  @media ${device.mobile} {
    padding: 0 20px;
  }

  @media ${device.tablet} {
    padding: 20px 0;
  }
`
export const CardImage = styled(Card.Img)`
  width: 100%;
  height: 100px;
  object-fit: cover;
  margin: 0 auto;
`

export const CardTitle = styled(Card.Title)`
  position: relative;
  top: -70px;
  color: white;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.6);
  font-size: 1.8rem;
  font-weight: bolder;
  text-align: center;
`

export const CardText = styled(Card.Text)`
  margin-top: -30px;
  min-height: 75px;
  font-size: 22px;
`

export const UList = styled.ul`
  list-style: none;
  padding: 0 0 5px 10px;
  margin: 0;
  display: inline;
  /* border: 1px solid #c68f84; */
  /* border-radius: 0 0 10px 10px; */
  li {
    display: inline-block;
    padding-right: 10px;

    a {
      text-decoration: none;
      color: #c68f84;
      font-weight: bold;
    }
  }
`

export const SubHeading = styled.h4`
  margin: 0;
  font-size: 20px;
  font-weight: bolder;
  /* background-color: #c68f84; */
  color: #555;
  padding: 0 0 5px 0;
  border-radius: 10px 10px 0 0;
  /* text-decoration: underline; */
  display: inline-block;
  width: auto;
`

export const Column = styled(Col)``

export const ScentList = styled(Container)`
  padding-top: 25px;
`
