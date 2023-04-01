import React from 'react'
import './strength.css'

const Strength = ({ refProp }) => {
  return (
    <div className="container-s" ref={refProp}>
      <div className="row">
        <div className="box">
          <i className="fas fa-paint-brush"></i>
          <h2>Design</h2>
          <p>I have an innate sense of style making my designs always fresh and innovative.  I don't make only visual stunning design but also perfectly suited designs for project goals and objectives 😇.</p>
        </div>
        <div className="box">
          <i className="fas fa-code"></i>
          <h2>Develop</h2>
          <p>I have nothing but deep understanding about both front-end and back-end technologies and I am able to seamlessly integrate them to create robust  and scalable applications 🤯.</p>
        </div>
        <div className="box">
          <i className="fas fa-cogs"></i>
          <h2>Engineer</h2>
          <p>I have deep understanding of the entire software development process,from architecture and design to deployment and maintenance</p>
        </div>
      </div>
    </div>
  )
}

export default Strength
