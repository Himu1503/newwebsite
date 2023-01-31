import React from 'react';
import { DiFirebase, DiNodejs, DiReact, DiZen, DiJava, DiDatabase,} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id= 'tech'> 
  <SectionDivider/>
  <br/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    Worked on different Tech-Stack....
  </SectionText>
  <List>
    <ListItem>
      <DiReact size= '3rem'/>
  
    <ListContainer>
      <ListTitle>Front-end</ListTitle>
      <ListParagraph>
        Experience with <br/>
       Vanilla Javascript, Advanced ReactJS,Bundlers,JavaScript,
       TypeScript,JSX,TailwindCss
      </ListParagraph>
    </ListContainer>
    </ListItem>

    <ListItem>
      <DiNodejs size= '3rem'/>
  
    <ListContainer>
      <ListTitle>Back-end</ListTitle>
      <ListParagraph>
        Experience with <br/>
        NodeJs,Django,SpringBoot,
        Tomcat,Jetty
       </ListParagraph>
    </ListContainer>
    </ListItem>


    <ListItem>
      <DiJava size= '3rem'/>
  
    <ListContainer>
      <ListTitle>Object-Oriented Design</ListTitle>
      <ListParagraph>
        Experience with <br/>
        Desiging Scalable Systems using 
        Design Principles and Java.
      </ListParagraph>
    </ListContainer>
    </ListItem>


    <ListItem>
      <DiDatabase size= '3rem'/>
  
    <ListContainer>
      <ListTitle>Databases</ListTitle>
      <ListParagraph>
        Experience with <br/>
        SQL and NoSQL Databases.
      </ListParagraph>
    </ListContainer>
    </ListItem>

     <ListItem>
      <DiFirebase size= '3rem'/>
  
    <ListContainer>
      <ListTitle>Blockchain</ListTitle>
      <ListParagraph>
        Experience with <br/>
        Private Blockchain Network
        Hyperledger Fabric and R3 Corda
      </ListParagraph>
    </ListContainer>
    </ListItem>

  </List>

  </Section>
);

export default Technologies;
