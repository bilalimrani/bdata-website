import BdataLogo from '../Svgs/BdataLogo';
import styled from 'styled-components';

function DefaultNavbar() {
  const Container = styled.section`
 padding: 20px; 
`;

  return (
  <>
  <Container>
    <div className="container">
      <div className="row">
        <div className="col-sm-6"><BdataLogo /></div>
        <div className="col-sm-6">1</div>
      </div>
    </div>
  </Container>
  </>
  );
}
export default DefaultNavbar;
