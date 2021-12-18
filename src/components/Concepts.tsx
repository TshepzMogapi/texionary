import React from 'react';
import Concept from '../models/concept';

const Concepts: React.FC<{ concepts: Concept[] }> = (props) => {
  return (
    <ul>
      {props.concepts.map((concept: Concept, index: number) => (
        <li key={concept.id + index}>{concept.text}</li>
      ))}
    </ul>
  );
};

export default Concepts;
