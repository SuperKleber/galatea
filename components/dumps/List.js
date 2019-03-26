import React from 'react'
import Responsive from "./Responsive"
export default function List(props) {
  const {data, dataChildren, handleActionList}= props
  const {Desktop, Tablet, Mobile, Default,MediaQuery} = Responsive
  return (
    <div>
        <div className="List row">

            <div className="col-12 col-md-4">
                <div className="list-group" id="list-tab" role="tablist">
                {
                    data.map((element, i)=>{   
                        return(
                            <a onClick={function(){handleActionList(element)} || null} className={`list-group-item list-group-item-action ${element.category==dataChildren.category && "active"}`} id={`list-${element.category.split(" ").join("")}-list`} data-toggle="list" href={`#list-${element.category.split(" ").join("")}`} role="tab" aria-controls={element.category}>{element.category.toUpperCase()}</a>       
                        )
                    })
                }
                </div>
            </div>
            <div className="col-12 col-md-8">
                <div className="tab-content" id="nav-tabContent">
                {
                    <div className="tab-pane fade show active" id={`list-${dataChildren.category.split(" ").join("")}`} role="tabpanel" aria-labelledby={`list-${dataChildren.category}-list`}>
                    {
                        React.Children.map(props.children, child =>
                            React.cloneElement(child, { data: dataChildren }))
                        
                    }
                    </div>
                }
                </div>
            </div>
        </div>
        <style jsx>{`
            @media screen and (max-width: 767px){
                .list-group-item{
                    padding: 0.45rem 1.25rem;
                    font-size: 0.87em;
                }
                .list-group{
                    flex-direction: initial !important;
                    flex-wrap: wrap;
                }
                .List{
                    flex-direction: column !important;
                }   
                .col-4{
                    max-width: none; 
                    width: 100%
                }
            }
        `}</style>
    </div>
  )
}
