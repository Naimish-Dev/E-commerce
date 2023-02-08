import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}


html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
   scrollbar-color:#FB7208;
    scrollbar-width: thin;
}


h1,
h2,
h3,
h4 {
   font-family: "Work Sans", sans-serif;

}

h1 {
  color: ${({ theme }) => theme.colors.heading};
  font-size: 3rem;
  font-weight: 900;
}

 h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
  
  }

h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p, button {
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.50rem;
  line-height: 1.5;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}


${"" /* resuable code section  */}


.for_bg{
  background-color:#F6F8FA ;
}
.container {
  max-width: 120rem;
  margin: 0 auto;
}

.d-flex {
  display:flex;
  margin:5rem 0;
}

.flex_right {
  display: flex;
  flex-direction:column;
  padding:3rem ;
  justify-content:center;
  width:50% ;
  margin:auto ;

  .hero_img{
    width:30rem ;
    margin:auto ;
  box-shadow:40px -30px 0px 0 #FB7208;
}
  
  
}
.flex_left {
width:50% ;
  display: flex;
  flex-direction:column;
  padding:3rem ;
  justify-content:center;
  
  .hero_note, .hero_header, .buy-now-btn{
    margin:0.5rem 0 ;
  }
  
}


  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }

     .intro-data {
      margin-bottom: 0;
      text-transform: uppercase;
      color: #5138ee;
    }

   .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }


    input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    }

@media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }
  .d-flex {
    gap:0;
  }
  .flex_left {
   width:80% ;
   margin:3rem 0 ;
  }
  .flex_right{
    margin:3rem 0 ;
width:40%;
.hero_img{
  margin: 0 auto;
}

}
  }

   @media (max-width: ${({ theme }) => theme.media.mobile}) {
       html {
      font-size: 50%;
    }
    .flex_right {
  .hero_img{
    width:30rem ;
    margin:auto ;
  box-shadow:0px 0px 10px 1px #FB7208 ;
  border-radius:0.8rem ;
}
    }
    .d-flex {
  display:flex;
  flex-direction:column ;
  gap: 0rem;
  margin:5rem 0;
}
.flex_left, .flex_right{
width:100% ;
}

.grid{
  gap: 3.2rem;
}
      .grid-two-column , .grid-three-column, .grid-four-column{
          grid-template-columns: 1fr;
        }
    }

`;
