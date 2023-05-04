import React from "react";
import styled from "styled-components";
import Map from "../components/img/map.png";
import Phone from "../components/img/phone.png";
import Send from "../components/img/send.png";

const Container = styled.div`
  height: 90%;
  background: url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEBUTEhIVFRUXFRUVFRUVFRUVFRcVFxUWFhcYFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGRAQFzUdICU3LS0tLS0tNy0tLSsrLS0tLS0tLTc3ODctLTEtLS0tLS01NzctLS0rLS0tNy0tLS0rK//AABEIASYArAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAwIEBQEGB//EADQQAAIBAgQDBgYBBAMBAAAAAAABAgMRBBIhMUFRcQUTYZGhsRQiUoHR8MEVMkLhM2LxI//EABoBAQADAQEBAAAAAAAAAAAAAAABAgQDBQb/xAAkEQEAAgIBBAICAwAAAAAAAAAAAQIDERIEIUFRExSBkVJhcf/aAAwDAQACEQMRAD8A+hVFZkS1io6X5FUhkyV1YAAyhC76ahWI3OluhSsl5vzJyb2Ip6+FiU2GyI1DmUZSaQuRCRKTpyuRUiCehBoCxF3OiaLsxxmvXUtuO3KAAAVXAAAAACsVVyx8XohEbRM6jbOx8lOVnstF+bdSvKNh6QVIq2xqiNRpimdzsiwxQRJxV9iViUNWUPVGZJWdjWvqUcbDW/P3Iccte21Y08DQtC/F6/j98TPowzSS/bGnTqW0CuGvlyVLxJRpEJSG0w0FTgQyFlxuQxEbMlBEkRXU6kDdgkSQynK6Ezkdpzsyl67h0xW4yeAAZ2sAAABRxLzS8FoWcTUstN3ov5KEah1x18uGa3hNQOVY8tzjmcnUOzOm4klBCJzJxqAaKIVIZotfdE7nYyIRMb7K2Chx5jIvcZYryqW3CK14xo5MYqgik7r92OILNHDHMVC66HKUbKxMkUYsXJjJxs7CWgOnJE0ADaUrokIpOzHma9dS147coAALrzsiIjc6XmdRtTxl5PfwQl0/mJTkKpzv52NMRrsxTO52nUp6EGlpzGTYqNNJ77v+LEoPrULO1+XsRUDs3e2u2gRj4gaiiCRC5JMgTUdRGJwyfG/iNVQjKogFxhYZh6evqCmPwuiuA5AcudzEivi6fH7FdrQvVNYtGfJ2AiwOMAItFmlK6K7RKjKzKXruHTHbjKyU60rvwLFeVl1KrRXHXyvmt4KaQpxGNHLHVwRlaxCUkdntsRAbBokrCos7nA0kwsciSSIBGDujmTW3U61qdQBlJ9+/AMvyPqv5F5AHd+/AO/fgQ7sllA58Q/ARU1dxqgRykhWXU6xriRcAFM4MkiOUDk5XOX0OyREhMoWIPoTkiDJQVUegt6DKifqRkBGMtwb8DkIvUi7hL2fwVP6fc78JD6fceAVI+Eh9PuHwkPp9x4rEztHroUveKVm0+ExG50ozir6LQjkXIkB4U5skzvlP7aeMenMqCx0CPlyfyn9p4x6cyoMqOgPlyfyn9nGPS3ToQaTyr1JfCw+n3F4Oe6+5aPb6fJ8mOLM1o1JHwkPp9zjwlP6V6lgods18tOy3lp9uP74nZSZ1Gyuzu7qZvlWj03/texc+Bp/SvUwey6+SouT+V/f/AGemCuO24VvgKf0LzZz+nUvoXmy0AXVH2bSf+C83+Tn9LpfQvN/kuABUXZtJf4Lzf5I/0mj9C83+S6AAAAAFLFTvLoW6krJszjz+vyarFI8uuKO+wAAeU7gAAAAAAlCVmmaCZml3Czurcj0OgyatNJ8uWWPJx5vtevnqNcI6L+f3wN3HV8lOUuNtOr2PKnqsWa3gHqOzsRnpp8dn1R5c0+wq9puD2lt1X+vYhzxW1LeAAJagAAAAAAAAAFbGT2X3KpKpK7bIngZ8nyZJs1VjUAAA4rAAAAAAABuGnaXXQUDZfHaa2iYRMbjSv29XvJQXDV9Xt6e5kjcU25yb3buKPoXk33ynYJU5uLTW6d0RAKvXUailFSWzVyZk9g17xcHw1XR7+vuaxLXWdxsAABYAAAAnFTtHqOKWJneXTQzdXk4Y5/vsvSNySAAeG0gAAAAAAAAAAXVfAYIm7s0dNTlffpMKeNhs/syoadSN00ZjR7GOe2nn9XTV+XsAAHRkPwNfJUjLhs+j3PVHjj0nZGIz01fePyv+PQl3w28LoAAdwAABGpOybM4s4yey+5WPH67JyycfTRjjUbAABidAAAAAAAAAAEaj0EE6r1IHp9PTjT/V4BRxkLSvz9y8KxMLx6ammk6lx6inOks8AA0PIBf7Fr5aluEtPvw/H3KB1O2wWidTt7ABOErZ4RlzWvXiOJbIAAAGHPtOm23d+TGU8RGSunoedUWW+za+uV8duphv0VJ3O5dqZNzqW13iDvEIA4/Vo08T+8Qd4hAD6tDif3iDvEIAfVocT+8QZ+QgbSjxOeXDjpXaJiIRyMO7Y4Cn2r+oRyJ7th3bHA2TXqclpiIiCbaZNXCyTdloQ+Gly9UacyB6k2tXsy16bHeNs/4aXL1QfDS5eqNACPklb6dPcp9kVXBOMlpuuOvH+DR+Mj4+RmAdazMx3c5rFZ1DT+MjzfkHxkeb8jKbOplkMpojaz0JSISA1aNTMk/25MoYCrZ25+5fM1q6ltx25RsAAFVwAAB2KuWELpR4jDzupycrajwpMgAAzIBCUtSUnYVI9HoMW5m8/hyy28JCySItHoZI7bRhtqdOAB1I41jc6aL24xsHDoWNTE5YEdsdygZbicVO+xK4Upq+voEIRp6mlTndXM+Mvm8BuEq/Nbg/c55K7h1xW1Ol0AA4NYBcPHQDO7RqtySXDX7kxWbdoVvbjG20gFYWtngpefXiNPGtExMxKu9gAIVqqik3xaXmK1m0xEImdCTInWgufQY6RSsVhmmdztxBJHbAXmNoidTsokga1BnPHXW3bLfetBnLnTh0cQmduRR0IZziJmrFtog4KwFaO5LjoxigcUAL9Kd1fzJlbDO2hZM166ltx25VRqzsrmdOJcxDvoV5I6466hny23OjuzZ2duD9zSMOE7Gxh6uaKfn1PO67FqeceVsVvBhk9o1c0rcFp9+JoYqrljfjsjEqSLdBi7zkn8Iy28NjAzzQTe+z6odYzuza6Ty8/c0kem4uAdOX1CUWRYT0Cm7gB0LErgcUQsCZmY/tCUZ5Y20Sv13/AAAwXJk5MivEIRvqck9LnZPUja6A7Rm3rYuur8t+P8iIR/B2aK2rtel5rtxsVOQycdBc9iyirmL3Zddp2ez9ypo9DsI22f8A6UyUi9ZrKYtx7rWPrZpWWy0+/EoTiyU9zqQx0ilYrHg5b7l0qj34p3PQ053Sa46mHCnpe3H0NPs+d048tV0/fcuhcIDbCZBLrjc4oWZOLJ6AKcTjQw5IBNSajFyeyVzzsndtvdu/mafbNeyUebu+i/37GdEDVqxdhai7LQfKQQnZp8ghW7t8n5HadJ22Zt3JIDNpUrrZ+QSpPk/I00wzAZNSlK2z8mKq4eVv7X5M22xcwMBUZJ6wl5M44taPQ1q8uPDiZUpXbb4hyzT20VVQSjoMaFZmDFbcaWFrFIdhvlmn59CvSkWoSQdWqyFiOFq3h00JRYEsoWBMGEhkGjpWx1bLBvjsv3pcDEx089Rvhey6L9uSjAr3LCqMDTlE5Ym0QsELmDqXVuXsWzIw9Vxmm+OjNZAcAGduBFsGjrZ1MDL7Rnb5eepQG4qrmm35dBRDJe25AmpB3unuOBoGO2rFYa63+2pYg2Ly8R2EjmlZ6Wvf7akth+Bm1Oz4+/A0kjMnGLcct08yvrfTnc1Yq8U7Na87hDiAZkWvtexFRV2tQktsxe16t5KN9Fv1f+rG00rX8bGJi6C/+kt9U0+smmn0sBSsuY6CViVTDJU1L/JWcuVpXt/AiLQG3Jik+IySuiDgEFSWpq4Srmiua0ZkuRZwFS0rc/fgBpMEDOx3AGVcfUtB83p+S5IzMd80rcEvX99gKDgdUFzLDicdJBT46+io0U+ZGVMtQgvUTXYPjr6JbY7CxedZdxEpWs7cfQs9m/8AIv3gFz5KWbLaKt83Gw3sqTcXrGzk2uvE7Gzk7/3RuvsxOAuqaajf5noEtTd20fE5KL1ejJU99rAno7IIU8XF5Fqo/Mnd+Gv8GJXVSL7t2anJNW2et9GaPaWadnBXSumIr05WpRulNNvXZX2Tt5BKNRTeb54y0eaCb0X/AFXgZ8YmtToZs2enkaTvJNpFLIBosL6AAQrVzq4AAGtSleKfNDooAAjVlZNmbDUAAYoE409AACNuBRrRswACrVvsMozytHQCU69dt35nFJpaNgAGngKzcOOjsNxE3GDa/b6HAAwZVJJ6N8tG0RqN8wAAjVk1ZybXK7GpgAH/2Q==");
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin: 50px;
  margin-top: 0;
  @media only screen and (max-width: 480px) {
    margin: 20px;
  }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  }
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    height: 50%;
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 20px;
  }
`;

const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkblue;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 14px;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 900;
  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;

const Text = styled.span`
  font-size: 20px;
  margin-right: 15px;
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions? <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>123 Durango, Durango Mexico.</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+52 618 292 8988</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>18040425@itdurango.edu.mx</Text>
            <Text>jony@dev</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
