import React from 'react'

export default function Card(props) {
  const {title,description,button}=props.data
  return (
    <div className="card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className={`btn btn-${button.typeButton.toLowerCase()}`}>{button.textButton}</a>
        </div>
        <style jsx>{`
        .card{
            width: 18rem;
        }
        `}</style>
    </div>
  )
}
