import React from "react";


export function Card(props) {

  return (
    <div className="card mx-4"
      //style="width: 18rem;">
      style={{
        width: '18rem'
      }}
    >
      <img src={props.src} class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text border-bottom pb-4">{props.text}</p>
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
    </div>
  )
}