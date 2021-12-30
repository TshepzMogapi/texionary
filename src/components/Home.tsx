import Concept from '../models/concept';
import Concepts from './Concepts';

const Home = () => {
  const concepts = [new Concept('React'), new Concept('Compile')];

  return (
    <>
      <div>Home</div>
      <div>
        <Concepts concepts={concepts} />
      </div>
    </>
  );
};
export default Home;
