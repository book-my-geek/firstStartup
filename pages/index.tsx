import { DevInfoCard } from '@components/devInfoCard';
import devInfoData from '../data/devInfoData.json';

const Home = () => (
    <div>
        {/* <h1>Happy Coding...</h1> */}
        <DevInfoCard devInfoData={devInfoData as any} />
    </div>
);

export default Home;
