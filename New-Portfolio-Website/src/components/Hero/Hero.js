import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section>
    <LeftSection>
    <SectionTitle main center>
   Welcome to <br/>
   My personal Portfolio 
    </SectionTitle>
    <SectionText>
    Result driven and ambitious Software Engineer, with experience in the design, implementation and maintenance of innovative and creative software solutions.
    </SectionText>
    <Button onClick={()=> window.location= "https://github.com/Himu1503"}> Learn More </Button>
    </LeftSection>
  </Section>
);

export default Hero;