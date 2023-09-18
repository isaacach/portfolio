
export default function Aside() {
  return (
    <aside>
      <div className="icon-wrapper one">
        <img src="src/images/uiw-github.svg" alt="github link"/>
        <p className='github' >Github</p>
      </div>
      <div className="icon-wrapper two">
        <img src="src/images/uiw-linkedin.svg" alt="linkedin link"/>
        <p className='linkedin'>LinkedIn</p>
      </div>
      <div className="icon-wrapper three">
        <img src="src/images/UiwDocument.svg" alt="resume link"/>
        <p className='resume'>Resume</p>
      </div>
    </aside>
  )
}