import '../styles/about.css'

export default function About() {
   return (
    <div className="about-wrapper">
      <div className="hero">
      <div className="img-wrapper">
        <img src="me.jpg" alt="" />
      </div>
      <div className="hero-caption">
        <p>i'm Isaac Achenbach</p>
        <p>a full-stack Software Developer</p>
      </div>
      </div>
      <div className="caption">
      <p className="sl ">
            I am a full-stack web developer and a U.S. Air Force Veteran with a passion for creating beautiful,
            responsive, and secure websites.</p>
            <p className="sl ">
              I spent 6 years in the United States Air Force as a C-130J aircraft maintenance technician
              in Tokyo, Japan.  Along with fixing the planes, I was also an
              aircraft data tracking supervisor where I led a team of 5 people to ensure that all of the aircraft
              data was tracked and up to date as well as maintaining the aircraft's diagnostic computers.  That is where I discovered my passion for
              technology and decided to pursue a career in web development.
            </p>
        <p className="sl">
            I graduated from a 5 month full-stack
            web development bootcamp at Codeup in San Antonio, Texas where I developed a deep 
            understanding for full stack development.
            I am a lover of all things outdoors and I enjoy spending my
            free time hiking, camping, and fishing. I am also a coffee and craft
            beer fanatic. I am currently looking for a job as a web developer and
            I am excited to see where my career takes me.<br />
            <span>Let's make amazing things happen!</span>
          </p>
      </div>
    </div>
   )
}