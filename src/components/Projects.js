// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>MetaVerse</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>I coded a metaverse where a user buys land , sell it off etc.
                       I used solidity for the smart contracts, truffle suite for tests 
                       and react-js for the front end development.
                    </p>

                    
                    <a href="https://github.com/SakshamGuruji3/MetaVerse" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>DeFi Project</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>Built a defi app from scratch using solidity for smart contract development,
                       truffle for writing tests and react-js to develop the front end.A user can 
                       stake his DAI tokens(ERC20 token) and get GuruToken(ERC20 token) in return 
                       for staking. I'm still adding new functionalities in this regularly and some custom
                       return behavior such as if the user who deposited the funds calls the contract to 
                       get his reward tokens he gets 3 times more return as compared to when the owner
                       calls it.
                    </p>

                    
                    <a href="https://github.com/SakshamGuruji3/Saksham_project" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>PortFolio</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>This is my portfolio itself.Coded it in react-js.
                       After developing the portfolio I deployed this on the IPFS
                       using fleek. 
                    </p>

                    
                    <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;