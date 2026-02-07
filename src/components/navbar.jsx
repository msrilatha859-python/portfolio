import './navbar.css'
function Navbar(){
    return (
        <div className="navb sticky-top">
            <h2>Srilatha</h2>
            <nav>
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#projects">Projects</a>                
            </nav>
<a href="#contact"><button className='p-2'>Contact Me</button></a>
        </div>
    )
}
export default Navbar;