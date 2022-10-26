import styles from "./Topics.module.css";
import SideNav from "./SideNav";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { titlesContext } from "../Contexts/TitlesContext";
import { Link } from "react-router-dom";

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
                <Card className="test">
                  <Link to={`/post/${item.id}`}>
                    <Card.Img
                      variant="top"
                      src={`/${item.id}.png`}
                      className="cardImg"
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.brief}</Card.Text>
                    <Button
                      as={Link}
                      to={`/post/${item.id}`}
                      variant="outline-dark"
                      className="border readBtn"
                    >
                      Read
                    </Button>
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
