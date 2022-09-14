import Axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../components/button";
import { deviceSize } from "../../components/responsive";
import { ServiceCard } from "../../components/serviceCard";


const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-weight: 650;
  background-color:#256D85;
  border-radius: 7px;
  padding:3px;
  padding-left:5px;
  padding-right:5px;
  font-family: Verdana, Arial, Helvetica, sans-serif;
  color: white;
  margin-bottom:25px;
  margin-left:0px;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 25px;
  }
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const WarningText = styled.h3`
  color: rgba(100, 100, 100);
  font-weight: 500;
`;

const ViewMoreButton = styled(Button)`
  background-color: #E8F9FD;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  color: #959595;
  font-size: 14px;
  &:hover {
    background-color: #003865;
    filter: contrast(0.8);
  }
`;

/*const wait = (num) => new Promise((rs) => setTimeout(rs, num));*/

export function Services(props) {
  /*const [offeredServices, setServices] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const isServicesEmpty =
    !offeredServices || (offeredServices && offeredServices.length === 0);

  const fetchServices = async () => {
    setLoading(true);
    const response = await Axios.get("http://localhost:9000/services").catch(
      (err) => {
        console.log("Error: ", err);
      }
    );

    if (response) {
      setServices(response.data);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchServices();
  }, []);
*/
  return (
    <ServicesContainer>
      <Title>Most used services & More</Title>
      <ServicesWrapper>
        <ServiceCard 
         id="1 "
      title= "Business solutions"
      thumbnailUrl="../images/thumbnails/bz.jpg"
      rate= "900"
      rating= "4.5"
      specialist=  "Mark brone"
      />
      <ServiceCard 
         id="2" 
         title= "Mechanic"
         thumbnailUrl="../images/thumbnails/bz.jpg"
      rate= "150"
      rating= "4.6"
      specialist=  "Mark brone"
      />
      <ServiceCard 
         id="3"
      title= "Teacher"
      thumbnailUrl="../images/thumbnails/bz.jpg"
      rate= "450"
      rating= "4.5"
      specialist=  "Angela"
      />
      <ServiceCard 
         id="4"
      title= "Electrician"
      thumbnailUrl="../images/thumbnails/bz.jpg"
      rate= "300"
      rating= "4.8"
      specialist=  "Sunil"
      />
      <ServiceCard 
       id="5"
       title= "Carpenter"
       thumbnailUrl="../images/thumbnails/bz.jpg"
       rate= "600"
       rating= "4.4"
       specialist=  "Johnson"
      />
      <ServiceCard 
         id="6"
      title= "SprayWork"
      thumbnailUrl="../images/thumbnails/bz.jpg"
      rate= "200"
      rating= "4.5"
      specialist=  "David"
      />
      <ServiceCard 
         id="7"
      title= "Manager"
      thumbnailUrl="../images/thumbnails/bz.jpg"
      rate= "800"
      rating= "4.9"
      specialist=  "Prateek"
      />
      <ServiceCard 
         id="8"
      title= "AC servicing"
      thumbnailUrl="../images/thumbnails/bz.jpg"
      rate= "300"
      rating= "4.8"
      specialist=  "Henry"
      />
      
      </ServicesWrapper>
      <BottomContainer>
      <ViewMoreButton>View More</ViewMoreButton>
      </BottomContainer>
    </ServicesContainer>
  );
}
