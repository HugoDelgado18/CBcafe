import React from 'react';
import Header from './components/Header.jsx';
import Review from './components/Reviews.jsx';
import reviews from "./reviews";


  function createReviewCard(review){
    return (
      <Review
        key={review.id}
        name={review.name}
        rating={review.rating}
        content={review.content}
      />
    )
  }

const App = () => {
  return (
    <div>
      <Header />
      {reviews.map((review) => createReviewCard(review))}
    </div>
  );
}


export default App;
