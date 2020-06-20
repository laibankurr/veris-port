const exampleData = [
  {
    _id: 1,
    title: "Movie Finder",
    description: `Movie Finder:  This is a simple movie introduction app that uses the API provided by the TMDB. 
    The front end was implemented using the React library and the back end was implemented as express and mongoDB.
    The membership registration and login features use redux to allow your information to exchange data with the server.
    Once logged in, users can save and delete their favorite movies in Favorite.
    `,
    images: ["movieapp01.png", "movieapp02.png", "movieapp03.png"],
    link: "veris-movie.herokuapp.com",
  },
  {
    _id: 2,
    title: "SCT shop",
    description: `SCT shop:  The user interface is implemented as React. 
    The server side used the nodeJS framework, express, and the data was configured as MongoDB. 
    This web-app has a function to search data by size and price. 
    In this app, as implemented a purchase function using Paypal api, 
    so user can check the purchase details.`,
    images: ["sct01.png", "sct02.png", "sct03.png"],
    link: "sct-mall.herokuapp.com",
  },
  {
    _id: 3,
    title: "Book Shelf",
    description: `Book shelf: It is a simple book shelf app that is implemented using Class type component method. 
    Instead of the "useEffet" function used in the functional type, 
    I implemented a component that takes information from the API and shows it using "LifeCycle" functions such as "ComponentDidMount".`,
    images: ["book01.png", "book02.png", "book03.png"],
    link: "ysbookshelf.herokuapp.com",
  },
];

export default exampleData;
