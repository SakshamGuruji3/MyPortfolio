// Import Assets
import uniswap from '../assets/uniswap.jpg';
import compound from '../assets/compund.jpg';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>MetaVerse</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>MetaVerse Smart Contract Coded In Solidity , Tests done in truffle and React-Js For Front-end
                    </p>

                    
                    <a href="https://github.com/SakshamGuruji3/MetaVerse" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>DeFi Project</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>Defi Smart Contract Coded In Solidity , Tests done in truffle and React-Js For Front-end
                    </p>

                    
                    <a href="https://github.com/SakshamGuruji3/Saksham_project" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>PortFolio</h3>
                    <img src={aave} alt="Aave Landing Page" />
                    <p>This is my portfolio itself.Coded it in react-js.
                        and deployed on the IPFS
                       
                    </p>

                    
                    <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;