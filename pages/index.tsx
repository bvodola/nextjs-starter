import { Container, Row, Col } from "react-grid-system";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col xs={4}>One of three columns</Col>
        <Col xs={4}>One of three columns</Col>
        <Col xs={4}>One of three columns</Col>
      </Row>
    </Container>
  );
}
