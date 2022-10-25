import styles from "./Topics.module.css";
import SideNav from "./SideNav";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useContext } from "react";
import { titlesContext } from "../Contexts/TitlesContext";
export default function Topics() {
  const titles = useContext(titlesContext);
  return (
    <div className={styles.topicPageContainer}>
      <div className={styles.topicContainer}>
        <h1>Topics</h1>
        <Container>
          <Row xs={1} md={2} className="g-4">
            {titles.map((item, idx) => (
              <Col key={item.id}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={`/${item.id}.png`}
                    className="cardImg"
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div>
        <SideNav />
      </div>
    </div>
  );
}
