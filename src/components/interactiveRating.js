import { useState } from 'react';
import star from '../assets/icon-star.svg';
import thankYou from '../assets/thank-you.svg';

export default function InteractiveRating() {
  const [rating, setRating] = useState(0);
  const [isRated, setIsRated] = useState(false);

  const handleChange = (e) => {
    setRating(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsRated(true);
    console.log(rating);
  }

  return (
    <>
      {isRated ? 

      <section className="w-[375px] bg-hslDarkBlue rounded-3xl px-7 py-10 text-center">
        <img className="mx-auto" src={thankYou} alt="thank you" />
        <p className="inline-block text-[15px] text-hslOrange bg-hslMediumBlue rounded-full px-4 pt-1 mt-8">You selected {rating} out of 5</p>
        <h1 className="text-hslWhite text-xl mt-8 mb-3">Thank you!</h1>
        <p className="text-[15px] text-hslLightGrey">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </section>
      
      :

      <section className="w-[375px] bg-hslDarkBlue rounded-3xl px-7 py-4">
        <img className="bg-hslMediumBlue rounded-full p-3 my-3" src={star} alt="star" />
        <h1 className="font-bold text-xl text-hslWhite mt-7 mb-3">How did we do?</h1>
        <p className="text-[15px] text-hslLightGrey my-3">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <form id="ratingForm" className="flex justify-between" onSubmit={handleSubmit}>
          {[1,2,3,4,5].map((value, index) => (
            <label key={index}>
              <input id={value.toString()} className="hidden peer" type="radio" value={value} name="rating" onChange={handleChange} />
              <div className="rounded-full bg-hslMediumBlue text-hslLightGrey text-center px-5 py-3 my-3 hover:bg-hslLightGrey hover:text-hslWhite peer-checked:bg-hslOrange peer-checked:text-hslWhite" htmlFor={value.toString()}>{value}</div>
            </label>
          ))}
        </form>
        <button className="bg-hslOrange text-hslWhite uppercase w-full rounded-full py-2 my-3 hover:bg-hslWhite hover:text-hslOrange" type="submit" form="ratingForm">Submit</button>
      </section>
    }
    </>
  );
}