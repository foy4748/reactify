import { Container } from "react-bootstrap";
import styles from "./Blogs.module.css";
export default function Blogs() {
  return (
    <Container>
      <div className={styles.blogContainer}>
        <div className={styles.singleBlog}>
          <h1>1. What is "CORS"?</h1>
          <p>
            CORS stands from <strong>CROSS ORIGIN RESOURCE SHARING</strong>. It
            allows communication between two machines (say computers). When a
            Client end computer sends a request to a Server-end computer, the
            Server responses information based on the request. But, how a Servr
            can trust any request from any Client-end computer?? Well, CORS
            solves this problem, by whitelisting some specific domains. The
            server will trust those requests that come from the computer that
            using the specified domains.
          </p>
        </div>
        <div className={styles.singleBlog}>
          <h1>
            2. Why are you using "Firebase" ? What other options do you have to
            implement authentication?
          </h1>
          <p>
            Firebase is a PaaS, Platform-as-a-Service cloud computer based
            solution for various services such as Authentication, Hosting,
            Database, File Storage and more. It’s very reliable and trusted by
            many giant vendors. It takes care of the security issus. Google
            brought this service and hosted their services on this platform as
            well. In our particular case, we are using Firebase for
            authentication, for now.e
          </p>
          <br />
          <p>
            There are other options to implement authentications as well, such
            as Auth0, OneLogin, Okta, Microsoft Azure Active Directory and so
            on. Authentication can also be implemented manually by creating a
            server from scratch using Node/ExpressJS, DataBase and JWT (JSON WEB
            TOKEN). But it will also require handling security manually.
          </p>
        </div>

        <div className={styles.singleBlog}>
          <h1>3. How does Private Route Works?</h1>
          <p>
            Using React-Router, It is pretty straightforward to implement
            Private Route. A Private Route can be implemented by defining a
            component, that checks the authentication status. If user is logged
            in, it will return the component that contains protected page.
            Otherwise, it will redirect to login page. This component should be
            wrapped around the protected page components while defining the
            router object for the RouterProvider.
          </p>
          <br />
          <p>
            A clear example is given in{" "}
            <a href="https://github.com/foy4748/my-restaurant-app/blob/main/src/Routes/PrivateRoute.js">
              {" "}
              here
            </a>
          </p>
        </div>
        <div className={styles.singleBlog}>
          <h1>4. What is NodeJS?</h1>
          <p>
            NodeJS is JavaScript Runtime, which allows to execute JavaScript in
            a operating system. Previously, only the browsers could execute
            JavaScript. NodeJS is a revolutionary invention, which has broadened
            the scope of JavaScript. JavaScript is not confined to browsers
            anymore. NodeJS allows to execute JavaScript code from a terminal of
            an operating system.
          </p>
          <br />
          <p>
            The way NodeJS works is very similar it works inside a browser. But
            NodeJS runs in the context of the computer instead of browser.
          </p>
        </div>
      </div>
    </Container>
  );
}
