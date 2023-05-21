import useTitle from "../hooks/UseTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="bg bg-pink-100">
      <div className="px-10 py-10">
        <h2 className="font-bold text-2xl">
          {" "}
          What is an access token and refresh token?
        </h2>
        <p className="font-bold text-xl">Answer:</p>
        <p>
          Access Token: An access token is a credential that is used to
          authenticate and authorize a user or an application to access
          protected resources or perform certain actions on a server or service.
          It is typically a string of characters that is issued by an
          authentication server after a successful authentication process. The
          access token contains information such as the user or application ID,
          scope of access, and an expiration time. When a user or application
          wants to access a protected resource, they include the access token in
          their requests. The server or service receiving the request then
          verifies the access token to ensure that the requester has the
          necessary permissions to access the resource. Access tokens are
          commonly used in APIs, web applications, and other distributed systems
          to control access to resources.
        </p>
        <p className="font-bold">
          How do they work and where should we store them on the client-side?
        </p>
        <p>
        Access tokens and refresh tokens are commonly used in authentication systems to authorize access to protected resources. Here is an overview of how they work and where they should be stored on the client-side
        <br />
        It is important to follow security best practices when storing access tokens and refresh tokens on the client-side. This includes considering the sensitivity of the tokens, protecting against unauthorized access or exposure, and regularly refreshing or rotating the tokens to mitigate the risk of compromised credentials.
        </p>
      </div>
      <div className="px-10 py-10">
        <h2 className="font-bold text-2xl">
          {" "}
          Compare SQL and NoSQL databases?
        </h2>
        <p className="font-bold text-xl">Answer:</p>
        <p className="font-bold">SQL:</p>
        <p>
        SQL (Structured Query Language) is a standard language used for managing and manipulating relational databases. It provides a set of commands for creating, modifying, and querying databases. SQL is designed to work with structured data organized in tables, with relationships defined between them.
        </p>
        <p className="font-bold">NoSQL</p>
        <p>
        Apologies for the confusion in my previous response. MongoDB is a NoSQL database, and the aggregate operation in MongoDB is a powerful feature of its query language that allows for data aggregation and analysis.

In MongoDB, the aggregate operation follows the MongoDB Aggregation Pipeline approach, which consists of a sequence of stages that process and transform documents. Each stage takes input from the previous stage and passes its output to the next stage, allowing for complex data manipulations and aggregations.
        </p>
      </div>
      <div className="px-10 py-10">
        <h2 className="font-bold text-2xl">
          {" "}
          What is express js? What is Nest JS
        </h2>
        <p className="font-bold text-xl">Answer:</p>
        <p className="font-bold">What is express js?</p>
        <p>Express.js, commonly known as Express, is a minimalistic and flexible web application framework for Node.js. It provides a robust set of features for building web applications and APIs, handling routing, middleware, and various HTTP-related functionalities.</p>
        <p className="font-bold">What is Nest JS</p>
        <p>NestJS is a popular open-source framework for building scalable and efficient server-side applications with Node.js. It is designed to provide an opinionated structure and set of tools that promote the development of robust and maintainable applications.</p>
      </div>
      <div className="px-10 py-10">
        <h2 className="font-bold text-2xl">
          {" "}
          What is MongoDB aggregate and how does it work
        </h2>
        <p className="font-bold text-xl">Answer:</p>
        <p>
          <p>In MongoDB, the aggregate operation is a powerful tool for performing advanced data processing and analysis. It allows you to perform complex computations, transformations, and aggregations on the data stored in MongoDB collections. The aggregate operation is implemented through the MongoDB Aggregation Pipeline, which consists of a sequence of stages that process and transform documents.</p>
        </p>
      </div>
    </div>
  );
};

export default Blogs;
