import React from 'react';
import { Feature, OptForm } from '../components';
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { FaqsContainer } from '../containers/faqs';


export default function Home(){
    return (
    <>
        <HeaderContainer>
            <Feature>
                <Feature.Title>Educating, empowering, and funding student and independent filmmakers!</Feature.Title>
                <Feature.SubTitle></Feature.SubTitle>

            <OptForm>
                <OptForm.Input placeholder="Email address" />
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break />
                <OptForm.Text>
                    Enter your email to become a part of HaydenFilms Institute or receive monthly newsletter

                </OptForm.Text>
           </OptForm>
            </Feature>           
        </HeaderContainer>

       
        <JumbotronContainer></JumbotronContainer>
        <FaqsContainer></FaqsContainer>
        <FooterContainer></FooterContainer>       
        
    </>
    );
}



