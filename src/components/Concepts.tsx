import React from 'react';
import Concept from '../models/concept';
import {  Link } from 'react-router-dom';

const Concepts: React.FC<{ concepts: Concept[] }> = (props) => {
  return (
    <>
        <ul>
          {props.concepts.map((concept: Concept, index: number) => (
            <li key={concept.id + index}>
              <Link to={`/concepts/${index + 1}`}>{concept.text}</Link>
            </li>
          ))}
        </ul>
    </>
  );
};

export default Concepts;
