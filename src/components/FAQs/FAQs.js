import { Container, Accordion } from "react-bootstrap";
import styles from "./FAQs.module.css";

export default function FAQs() {
  return (
    <Container className={styles.faqContainer}>
      <div className="mb-5">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className={styles.singleFaq}>
        <p className="h4">What is React?</p>
        <p className={styles.answer}>
          React is a declarative, efficient, and flexible JavaScript library
          used by software engineers to build user interfaces. It also goes by
          the React.js, ReactJS, and React JS names used interchangeably. So
          yes, it’s a library, and if you’ve ever felt confused about if React
          JS is a library or a framework, now you know the correct answer. React
          is a product of a massive amount of corporate investment, which sets
          it apart among its peers. Back in 2011, Facebook created React but
          hadn’t open-sourced it until May 2013 when the corresponding GitHub
          repository was set up, and the library release was officially
          announced. By 2014, after React had been extensively used for
          developing the UI of Facebook and Instagram and had been tested and
          evaluated out in the wild by other developers, the library started to
          become popular.
        </p>
      </div>
      <div className={styles.singleFaq}>
        <p className="h4">What is React JS good for?</p>
        <p className={styles.answer}>
          Essentially, React makes it simple to create interactive user
          interfaces. It allows building stand-alone UI components and entire
          user interfaces, including all the visual elements and the logic that
          underlies and governs these elements. In the first place, React is
          designed for building robust component-centric applications. However,
          although it’s a front-end technology, React is not opinionated and can
          be paired with a variety of other technologies executing the back-end,
          too. This way, Reacts serves rather as a vibrant ecosystem of tools
          and approaches, which conditions its having so many different use
          cases – web app development (where it all started,) mobile app
          development, static site building, desktop apps development, and even
          VR app development. The idea of learning once and using it everywhere
          is not new but still accurate in the case of React.js.
        </p>
      </div>
      <div className={styles.singleFaq}>
        <p className="h4">What is the Future of React?</p>
        <p className={styles.answer}>
          Using React for front-end is a great choice! Besides, while we are on
          the topic of flexibility, it should be noted that another significant
          advantage is the ease of transfer and support of React Native apps. It
          is a framework for building native apps using React, so if you know
          how to develop apps using React, you are already well on your way to
          getting well-versed in React Native, too. They are conceptually
          similar. Most of the React concepts transfer to React Native. Thus,
          you can waste no time, learn React Native, and start developing mobile
          apps for iOS and Android with a native look and feel.
          <br />
          React is also used as a stack in Web 3.0 technology. Due to responding
          the UI data change, its really a good fit into Block Chain technology
          as well.
        </p>
      </div>
    </Container>
  );
}

/*
      <Accordion defaultActiveKey={["0", "1", "2"]} alwaysOpen className="test">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <p className="h4">What is React?</p>
          </Accordion.Header>
          <Accordion.Body>
            React is a declarative, efficient, and flexible JavaScript library
            used by software engineers to build user interfaces. It also goes by
            the React.js, ReactJS, and React JS names used interchangeably. So
            yes, it’s a library, and if you’ve ever felt confused about if React
            JS is a library or a framework, now you know the correct answer.
            React is a product of a massive amount of corporate investment,
            which sets it apart among its peers. Back in 2011, Facebook created
            React but hadn’t open-sourced it until May 2013 when the
            corresponding GitHub repository was set up, and the library release
            was officially announced. By 2014, after React had been extensively
            used for developing the UI of Facebook and Instagram and had been
            tested and evaluated out in the wild by other developers, the
            library started to become popular.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <p className="h4">What is React JS good for?</p>
          </Accordion.Header>
          <Accordion.Body>
            Essentially, React makes it simple to create interactive user
            interfaces. It allows building stand-alone UI components and entire
            user interfaces, including all the visual elements and the logic
            that underlies and governs these elements. In the first place, React
            is designed for building robust component-centric applications.
            However, although it’s a front-end technology, React is not
            opinionated and can be paired with a variety of other technologies
            executing the back-end, too. This way, Reacts serves rather as a
            vibrant ecosystem of tools and approaches, which conditions its
            having so many different use cases – web app development (where it
            all started,) mobile app development, static site building, desktop
            apps development, and even VR app development. The idea of learning
            once and using it everywhere is not new but still accurate in the
            case of React.js.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <p className="h4">What is the Future of React?</p>
          </Accordion.Header>
          <Accordion.Body>
            Using React for front-end is a great choice! Besides, while we are
            on the topic of flexibility, it should be noted that another
            significant advantage is the ease of transfer and support of React
            Native apps. It is a framework for building native apps using React,
            so if you know how to develop apps using React, you are already well
            on your way to getting well-versed in React Native, too. They are
            conceptually similar. Most of the React concepts transfer to React
            Native. Thus, you can waste no time, learn React Native, and start
            developing mobile apps for iOS and Android with a native look and
            feel.
            <br />
            React is also used as a stack in Web 3.0 technology. Due to
            responding the UI data change, its really a good fit into Block
            Chain technology as well.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  */
