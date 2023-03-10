import Link from 'next/link';
import React from 'react';
import { AiFillGithub,  AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
 <Container>
   <Div1>
     <Link href="/">
     <a style={{display: 'flex' , alignItems: 'center' , color:'white' , marginBottom:'20px'}}>
       <DiCssdeck size= "3rem" /> <Span>HimuBaba</Span>
     </a>
     </Link>

     </Div1>

     <Div2>
       <li>
         <Link href= "#project">
           <NavLink>Projects</NavLink>
         </Link>
       </li>

       <li>
         <Link href= "#tech">
           <NavLink>Technologies</NavLink>
         </Link>
       </li>
     </Div2>

     <Div3>
       <SocialIcons href='https://github.com/Himu1503'>
         <AiFillGithub size="3rem" />
       </SocialIcons>

       <SocialIcons href='https://www.linkedin.com/in/himanshu-saxena-10b2b5148/'>
         <AiFillLinkedin size="3rem" />
       </SocialIcons>

       <SocialIcons href='https://twitter.com/heman1503'>
         <AiOutlineTwitter size="3rem" />
       </SocialIcons>


     </Div3>
 </Container>
);

export default Header;
