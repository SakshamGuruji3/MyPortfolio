const Experience = () => {
    return (
        <div className="experience">
            <h2>Experience</h2>

            <ul>
                <li>
                    <i>Delhi University , Shaheed Sukhdev College Of Business Studies</i>, 2017-2020
                    <ul>
                        <li>Pursued B.Sc Computer Science Hons. . Graduated with 7.22 GPA </li>
                    </ul>
                </li>

                <li>
                    <i>Web 2 Bug Bounty Hunter</i> - <strong>SakshamGuruji</strong>
                    <ul>
                        <li>Started my bug hunting journey 2 years back where I studied about web app security and the art of exploitation.</li>
                        <li>After learning and solving web app ctf's/labs I started to hunt bugs on hackerone and was consistent finding bugs and made
                            it my primary source of income. I have found almost every bug class bugs on live production
                            environments/bug bounty programs. </li>
                        <li>Some of these bug classes include SQLInjection , XSS , Info Disclosure, Privilege
                        Escalation , Business logic errors etc. </li>
                        <li>Most proudest bug was gaining access to backend servers through a series of attacks which started off with recon , finding hidden assets on shodan and
                        then finally exploiting a SQLInjection to have complete control over the system.</li>
                        <li>Ranked among the top 25 (finalists) on the biggest global Hackathon in history hosted 
                        on Hackerone.com by Verizon Media. Catch me up on hackerone </li>
                        <a href="https://www.hackerone.com/sakshamguruji">H1Profile</a>
                        <li>I have earned the following bug bounty badges on hackerone</li>
                        <ul>
                            <li><i><strong> h1-2010-qualifier-Live hacking event semi-finals</strong></i></li>
                            <li><i><strong> Spooky- Secured The Department Of Defense , USA</strong></i></li>
                            <li><i><strong> Greybeard- Submitted valid reports 6 months in a row</strong></i></li>
                            <li><i><strong> Bounty Hunter- Ten bounties received</strong></i></li>
                            <li>And many more badges , see them all here </li>
                            <a href="https://hackerone.com/sakshamguruji/badges?type=user" >Badges</a>
                        </ul>

                        
                    </ul>
                </li>

                <li>
                    <i>Self-Learning</i> - <strong>Blockchain Developement </strong>
                    <ul>
                        <li>To be a great auditor for Smart Contracts written in solidity I decided to master the language first and learned to code.</li>
                        <li>Studied DApp development.</li>
                        <li>Testing of Smart Contracts in truffle/hardhat and
                        front-end development in react-js. Built projects to test my
                        skills which I pushed on my github. Visit those on the Project Section.</li>
                        <li>Completed Cryptozombies lessons/curriculum and learnt alot about SC development.</li>

                    </ul>
                </li>
                <li>
                    <i>Smart Contract Auditing</i> - <strong>SC Auditor</strong>
                    <ul>
                        <li>Researched thoroughly about security , read blog posts 
                        , watched security conferences and everything I could gather to learn about security. </li>
                        <li>Solved a number of challenges and CTF's like</li>
                        <ul>
                            <li><i><strong>Ethernaut By OpenZepplin</strong></i></li>
                            <li><i><strong>Capture The Ether</strong></i></li>
                            <li><i><strong>Damn Vulnerable Defi</strong></i></li>
                        </ul>
                        <li>Have gone through most of the openzeppelin's contarcts and used/familiar with their</li>
                           ERC20 , ERC721 ,Ownable , ReentrancyGuard and AccessContol contracts.
                        <li>Very Active on Smart Contarct Security Servers on Discord to learn
                        and help beginners begin their Smart Contract Security Journey</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Experience;