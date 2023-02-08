import styled from "styled-components";

const Contact = () => {


  return <>
    <Wrapper>
      <div className="container">

        <h2 className="Page_heading">Contact page</h2>
        <div className="">

          <div className="Map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14843.237706860948!2d70.69307313481393!3d21.55430579096526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39580c151cf2b115%3A0x3e11ebe27a46e39d!2sBhesan%2C%20Gujarat%20362020!5e0!3m2!1sen!2sin!4v1670244192459!5m2!1sen!2sin"
              title="map"
              width="100%"
              height="250"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="contact-form ">
            <form action="https://formspree.io/f/mknedjjr" method="post" className="d-flex contact-inputs ">
              <input type="text" name="fname" placeholder="Enter Your Name" />
              <input type="email" name="email" placeholder="Enter Your Email" />
              <textarea rows="10" cols="30" name="message" placeholder="Enter Message" > </textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </Wrapper>;
  </>
};
const Wrapper = styled.section`
padding-top:3rem ;

input, textarea{
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
   box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
div{
 color : black;
}

.container {
  margin-top: 5rem;
  text-align:center ;

  .Page_heading{
margin:1rem 0 2rem 0;
  }
  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
          font-weight:600 ;
        }
      }
    }
  }
}
`;
export default Contact;
