import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function About() {
  return (
    <Container>
      <Nav>
        <NavLogo>
          <p>விவசாயம்</p>
        </NavLogo>
        <NavLinks>
          <ul>
            <Link to="/home">
              <li>
                <a>Home</a>
              </li>
            </Link>
            <Link to="/">
              <li>
                <a>About</a>
              </li>
            </Link>
            <Link to="/">
              <li>
                <a>Blog</a>
              </li>
            </Link>
          </ul>
        </NavLinks>
      </Nav>
      <h1>About</h1>
      <Main>
        <h2>Agriculture</h2>
        <p>
          The science or practice of farming, including cultivation of the soil
          for the growing of crops and the rearing of animals to provide food,
          wool, and other products.
        </p>
        <br></br>
        <br></br>
        <br></br>
      </Main>
      <Moto>
      <h1>About Us</h1>
        <p>
          For almost 100 years, the Vivasayam has met the demands of a growing
          world. The Vivasayam farmer has a tremendous opportunity to answer the
          call of agricultural needs across the globe. ASA has 26 affiliated
          state soybean associations representing 30 soybean-producing states
          and more than 300,000 U.S. soybean farmers. A primary focus of the
          Vivasayam Association is policy development and implementation. Policy
          development starts with our farmer/members and culminates at the
          annual meeting of voting delegates. ASA is tasked with accomplishing
          the policy goals established by the farmers/members/delegates. ASA
          does this by testifying before Congress, lobbying Congress and the
          Administration, contacting members, communicating to relevant
          audiences, and meeting with the media. This legislative process cannot
          happen without member input and support.
        </p>
      </Moto>
    </Container>
  );
}

export default About;

const Container = styled.div`
  h1 {
    min-height: 50vh;
    width: 100%;
    background-image: url("https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/green-plants-wall-vizerskaya.jpg");
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  h1:hover {
    animation: rotate 1s  infinte forwards;
  }

  @keyframes rotate {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(90deg);
    }
  }
`;

const Nav = styled.div`
  padding-top: 30px;
  padding-right: 10px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  background: black;
`;

const NavLogo = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: start;

  img {
    width: 25%;
    height: 100%;
    padding-right: 10px;
  }

  p {
    color: white;
    font-weight: 800;
  }
`;

const NavLinks = styled.div`
  flex: 0.3;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: white;
    padding: 10px;
    transition: all 0.5s ease;
  }

  a:hover {
    color: green;
    border-bottom: 1px white solid;
  }

  Link {
    text-decoration: none;
  }
`;


const Main = styled.div`
  p {
    padding-right: 10px;
  }
`;
const Moto = styled.div`
  line-height: 1.6rem;
  text-align: center;
  max-width: 60ch;
  display: flex;
  margin: auto;
  left: 50%;

  h1{
    color: white;
    padding: 10px;
  }
  
`;
