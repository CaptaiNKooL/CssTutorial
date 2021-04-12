import React from "react";
import styled from "styled-components";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container>
      <Banner>
        <Nav>
          <NavLogo>
            <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/agriculture-1873396-1585250.png" />
            <p>விவசாயம்</p>
          </NavLogo>
          <NavLinks>
            <ul>
              <Link to="/home">
                <li>
                  <a>Home</a>
                </li>
              </Link>
              <Link to="/about">
                <li>
                  <a>About</a>
                </li>
              </Link>

              <Link to="/home">
                <li>
                  <a>Blog</a>
                </li>
              </Link>
              <Link to="/contact">
                <li>
                  <a>Contact</a>
                </li>
              </Link>
            </ul>
          </NavLinks>
        </Nav>
        <Main>
          <Title>
            <h1>விவசாயம்</h1>
          </Title>
          <SubTitle>
            <p>"விவசாயம் காப்போம் | Save Agriculture"</p>
          </SubTitle>
          <Button>
            <button>Visit Us To Know More</button>
          </Button>
        </Main>
      </Banner>
      <Campus>
        <h3>Hover on the cards for more details</h3>
        <CampusCards>
          <CampusOne>
            <img src="https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/homegrown_660_062719120559.jpg"></img>
            <div>
              <h2>Invest in a regenerative future.</h2>
              <p>
                You can change the trajectory of human health by supporting
                Farmer’s Footprint. Your donation supports farmers across the
                nation bravely stepping forward
              </p>
            </div>
          </CampusOne>
          <CampusTwo>
            <img src="https://specials-images.forbesimg.com/imageserve/5dfd02fc4e2917000783972d/960x0.jpg?cropX1=0&cropX2=1000&cropY1=73&cropY2=636"></img>
            <div>
              <h2>crowdfunding.</h2>
              <p>
                Crowdfunding is an opportunity to utilize your creativity, share
                a powerful solution that addresses the root cause of personal
                and planetary health, and significantly help us pave new paths
              </p>
            </div>
          </CampusTwo>
          <CampusThree>
            <img
              src="https://demo.wpexperts.io/donation-product-for-woocommerce/wp-content/uploads/2020/12/donation_1.jpg"
              alt=""
            />
            <div>
              <h1>Donation</h1>
              Setup a recurring donation to support regenerative farming. Your
              monthly investment will create a ripple effect of regeneration
              supporting the health of our nation’s soil, food, people and
              planet.
            </div>
          </CampusThree>
        </CampusCards>
      </Campus>
      <Footer>
        <Links>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </Links>
        <SocialMedias>
          <MediaOne>
            <InstagramIcon></InstagramIcon>
            <p>SupportAgri</p>
          </MediaOne>
          <MediaTwo>
            <FacebookIcon />
            <p>SupportAgri</p>
          </MediaTwo>
          <MediaThree>
            <TwitterIcon />
            <p>SupportAgri</p>
          </MediaThree>
        </SocialMedias>
      </Footer>
    </Container>
  );
}

export default Header;

const Container = styled.div``;

const Banner = styled.div`
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),
    url("https://miro.medium.com/max/1838/1*JGzG0Jhgs-OrMCH1-Qj2MA.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Nav = styled.div`
  padding-top: 30px;
  padding-right: 10px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
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
  }
`;

const NavLinks = styled.div`
  flex: 0.5;
  text-align: right;

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
`;

const Main = styled.div`
  min-height: 70vh;
  position: absolute;
  top: 40%;
  left: 30%;
  color: white;
  text-align: center;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  flex: 1;
`;

const SubTitle = styled.div`
  font-weight: 400;
  font-size: 1.3rem;
`;

const Button = styled.div`
  button {
    background-color: green;
    color: white;
    transition: all 1s ease;
    margin-top: 50px;
    padding: 10px 30px;
    font-size: 12px;
    border: none;
    border-radius: 10px;
  }

  button:hover {
    color: green;
    background-color: white;
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }
`;

const Campus = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  margin-top: 10px;
  width: 100%;
`;

const CampusCards = styled.div`
  display: flex;
  width: 80%;
  min-height: 60vh;
`;

const CampusOne = styled.div`
  min-height: 300px;
  flex: 1;
  margin-right: 50px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px black;
    position: relative;
  }
  div {
    background: transparent;
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 1s ease;
    border-radius: 10px;
  }
  div:hover {
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
    color: white;
    border-radius: 10px;
  }
  h2 {
    color: coral;
    margin-right: 5px;
  }
`;

const CampusTwo = styled.div`
  min-height: 300px;
  flex: 1;
  margin-right: 50px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px black;
  }

  div {
    background: transparent;
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 1s ease;
    border-radius: 10px;
  }
  div:hover {
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
    color: white;
    border-radius: 10px;
  }

  h2 {
    color: coral;
    margin-right: 5px;
  }
`;

const CampusThree = styled.div`
  min-height: 300px;
  flex: 1;
  position: relative;
  line-height: 1.3rem;
  background: corol;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px black;
  }
  div {
    background: transparent;
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    transition: all 1s ease;
  }
  div {
    opacity: 0;
    transition: all 1s ease;
    color: white;
  }
  div:hover {
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 1;
    color: white;
    h3 {
      opacity: 1;
    }
  }

  h1 {
    color: coral;
    padding-right: 5px;
  }
`;

const Footer = styled.div`
  display: flex;
  background-color: black;
  align-items: center;
  justify-content: space-around;
  min-height: 300px;
`;
const Links = styled.div`
  a {
    text-decoration: none;
    color: white;
  }
`;
const SocialMedias = styled.div``;
const MediaOne = styled.div`
  display: flex;
  color: white;
  padding: 5px;
`;
const MediaTwo = styled.div`
  display: flex;
  color: white;
  padding: 5px;
`;
const MediaThree = styled.div`
  display: flex;
  color: white;
  padding: 5px;
`;
