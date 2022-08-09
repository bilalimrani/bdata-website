import BdataLogo from '../Svgs/BdataLogo';
import styled from 'styled-components';

function DefaultNavbar() {
  const Container = styled.section`
 padding: 20px; 
`;

const HeaderUl = styled.div`
  ul{
    display:flex;
    align-items:center;
    justify-content:center;
    margin:0;
  }
  ul li{
    padding:0 25px;
  }
  ul li button{
    font-size:14px;
  }
`;
const HeaderWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
`

  return (
  <>
  <Container>
    <div className="container">
      <div className="row">
        <HeaderWrapper>
          <BdataLogo />
          <HeaderUl>
          <ul>
            <li>
              <button className=''>Home</button>
            </li>
            <li>
              <button className=''>About Us</button>
            </li>
            <li>
              <button className=''>Contact</button>
            </li>
            <li>
              <button className=''>Press</button>
            </li>
            <li>
              <button className=''>Industries</button>
            </li>
            <li>
              <button className=''>Products</button>
            </li>
            <li>
              <button className=''>Resources</button>
            </li>
            <li>
              <button className=''>Case Studies</button>
            </li>
          </ul>
          </HeaderUl>
          </HeaderWrapper>
      </div>
    </div>
  </Container>
  </>
  );
}
export default DefaultNavbar;
