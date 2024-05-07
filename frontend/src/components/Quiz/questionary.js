import React, { useState, useEffect } from 'react';
import Quizbody from './quizbody';
import Results from './quizresult';

const quiztitle = [
  'What price range are you looking for?',
  'What size car are you looking for?',
  'Do you prefer a fully electric car?',
  'What level of fuel efficiency (MPG) are you looking for?',
  'How do you plan to utilize your car for transportation?',
];

const quizzes = [
  ['Under $30,000', '$30,000 to $35,000', '$35,000 to $40,000', '$40,000 to $45,000', 'above $45,000','No preference'],
  ['Small (Under 4 seats)', 'Medium (5-6 seats)', 'Large (7+ seats)', 'No Preference'], //new
  ['Yes', 'No'], //new
  ['Low', 'Average', 'High', 'No Preference'], //new
  ['Errands', 'Commuting', 'Road Trips', 'Winter Driving', 'Car Camping', 'Leisure'] //new
];

export default function Questionary(props){
  const profile = props.profile;
  let cars = props.cars;
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [collections, setCollections] = useState([]);
  const handleSelectOption = (option) => {
    const newSelectedOptions = [...selectedOptions, option];
    setSelectedOptions(newSelectedOptions);

    if (currentQuiz <= quizzes.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
    }
  };
  const handlePrevious = () => {
    if (currentQuiz > 0) {
      const newSelectedOptions = selectedOptions.slice(0, -1);
      setSelectedOptions(newSelectedOptions);
      setCurrentQuiz(currentQuiz - 1);
    }
  };



  return (
    <div>
      {currentQuiz < quizzes.length ? (
        <Quizbody
          quizNumber={currentQuiz}
          quizTitle={quiztitle[currentQuiz]}
          options={quizzes[currentQuiz]}
          onSelectOption={handleSelectOption}
          onPrevious={handlePrevious}
        />
      ) : (
        <Results selectedOptions={selectedOptions} cars={cars} profile={profile}/>
      )}
    </div>
  );
};