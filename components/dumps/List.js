import React from 'react'
import Responsive from "./Responsive"
export default function List(props) {
  const {data}= props
  const {Desktop, Tablet, Mobile, Default,MediaQuery} = Responsive
  return (
    <div>

        <Default>
            <div className="List row">

                <div className="col-4">
                    <div className="list-group" id="list-tab" role="tablist">
                    {
                        data.map((element, i)=>{   
                            return(
                                i==0 ?
                                <a className="list-group-item list-group-item-action active" id={`list-${element.category.split(" ").join("")}-list`} data-toggle="list" href={`#list-${element.category.split(" ").join("")}`} role="tab" aria-controls={element.category}>{element.category.toUpperCase()}</a>    
                                :
                                <a className="list-group-item list-group-item-action" id={`list-${element.category.split(" ").join("")}-list`} data-toggle="list" href={`#list-${element.category.split(" ").join("")}`} role="tab" aria-controls={element.category}>{element.category.toUpperCase()}</a>    

                            )
                        })
                    }
                    </div>
                </div>
                <div className="col-8">
                    <div className="tab-content" id="nav-tabContent">
                    {
                        !props.children ?
                        data.map((element, i)=>{   
                        return(
                            i==0 ?
                            <div className="tab-pane fade show active" id={`list-${element.category.split(" ").join("")}`} role="tabpanel" aria-labelledby={`list-${element.category}-list`}>{element.description}</div>
                            :
                            <div className="tab-pane fade" id={`list-${element.category.split(" ").join("")}`} role="tabpanel" aria-labelledby={`list-${element.category}-list`}>{element.description}</div>

                            )
                        })
                        :
                        
                        data.map((element, i)=>{   
                            return(
                                i==0 ?
                                <div className="tab-pane fade show active" id={`list-${element.category.split(" ").join("")}`} role="tabpanel" aria-labelledby={`list-${element.category}-list`}>
                                {
                                    React.Children.map(props.children, child =>
                                        React.cloneElement(child, { data: element }))
                                }
                                </div>
                                :
                                <div className="tab-pane fade" id={`list-${element.category.split(" ").join("")}`} role="tabpanel" aria-labelledby={`list-${element.category}-list`}>
                                {
                                    React.Children.map(props.children, child =>
                                        React.cloneElement(child, { data: element }))
                                }
                                </div>
        
                            )
                        })
                    }
                    </div>
                </div>
            </div>

        </Default>
        <Mobile>
            <div className="List row">
                <div className="col-4">
                    <div className="list-group" id="list-tab" role="tablist">
                    {
                        data.map((element, i)=>{   
                            return(
                                i==0 ?
                                <a className="list-group-item list-group-item-action active" id={`list-${element.category.split(" ").join("")}-list`} data-toggle="list" href={`#list-${element.category.split(" ").join("")}`} role="tab" aria-controls={element.category}>{element.category.toUpperCase()}</a>    
                                :
                                <a className="list-group-item list-group-item-action" id={`list-${element.category.split(" ").join("")}-list`} data-toggle="list" href={`#list-${element.category.split(" ").join("")}`} role="tab" aria-controls={element.category}>{element.category.toUpperCase()}</a>    

                            )
                        })
                    }
                    </div>
                </div>
                <div className="col-8">
                    <div className="tab-content" id="nav-tabContent">
                    {
                        !props.children ?
                        data.map((element, i)=>{   
                        return(
                            i==0 ?
                            <div className="tab-pane fade show active" id={`list-${element.category.split(" ").join("")}`} role="tabpanel" aria-labelledby={`list-${element.category}-list`}>{element.description}</div>
                            :
                            <div className="tab-pane fade" id={`list-${element.category.split(" ").join("")}`} role="tabpanel" aria-labelledby={`list-${element.category}-list`}>{element.description}</div>

                            )
                        })
                        :
                        
                        data.map((element, i)=>{   
                            return(
                                i==0 ?
                                <div className="tab-pane fade show active" id={`list-${element.category.split(" ").join("")}`} role="tabpanel" aria-labelledby={`list-${element.category}-list`}>
                                {
                                    React.Children.map(props.children, child =>
                                        React.cloneElement(child, { data: element }))
                                }
                                </div>
                                :
                                <div className="tab-pane fade" id={`list-${element.category.split(" ").join("")}`} role="tabpanel" aria-labelledby={`list-${element.category}-list`}>
                                {
                                    React.Children.map(props.children, child =>
                                        React.cloneElement(child, { data: element }))
                                }
                                </div>
        
                            )
                        })
                    }
                    </div>
                </div>
                <style jsx>{`
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
                    `}</style>
            </div>
        </Mobile>
        
    </div>
  )
}
