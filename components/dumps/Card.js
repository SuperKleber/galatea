import React from 'react'

export default function Card(props) {
  const {imgUrl,title,description,button}=props.data
  
  return (
    !props.horizontal ?
    <div className="card mt-4 ">
        <img src={imgUrl} className="card-img-top" alt={`foto de ${title}`}/>
        <div className="card-body d-flex flex-column justify-content-between">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            {
              button &&
              <a href="#" className={`btn btn-${button.typeButton.toLowerCase()}`}>{button.textButton}</a>
            }
            {props.children}
        </div>
        <style jsx>{`
        .card{
          width: 18rem;
        }
        .card img{
          height: 163px;
          Object-fit: cover;
        }
        `}</style>
    </div>
    :
    <div className="card mb-3">
      <div className="row  ">
        <div className="col-4">
          <img src={imgUrl} className="card-img" alt={`foto de ${title}`}/>
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            {
              button &&
              <a href="#" className={`btn btn-${button.typeButton.toLowerCase()}`}>{button.textButton}</a>
            }
            {props.children}
          </div>
        </div>
      </div>
      <style jsx>{`
        .card{
            max-width:600px;
        }
        .card img{
          width:  180px;
          height: 180px;
          Object-fit: cover;
        }
      `}</style>
    </div>

      
  )
}
