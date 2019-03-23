import React, { Component } from 'react'

function Column(props){
    return(
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
             <h6 className="text-uppercase font-weight-bold">{props.title}</h6>
             <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{"width":"60px"}}/>
             
             {props.children}
        </div>
    )
}
export default class Footer extends Component {
  render() {
    const {generalInformation, data}=this.props
    return (
        <footer className="page-footer font-small unique-color-dark">

            <div className="FollowUs">
                <div className="container">

                    <div className="row py-4 d-flex align-items-center">
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0">{data.followUs.text}</h6>
                        </div>

                        <div className="col-md-6 col-lg-7 text-center text-md-right">

                            <a className="fb-ic">
                            <i className="fab fa-facebook-f white-text mr-4"> </i>
                            </a>
                            <a className="tw-ic">
                            <i className="fab fa-twitter white-text mr-4"> </i>
                            </a>
                            <a className="gplus-ic">
                            <i className="fab fa-google-plus-g white-text mr-4"> </i>
                            </a>
                            <a className="li-ic">
                            <i className="fab fa-linkedin-in white-text mr-4"> </i>
                            </a>
                            <a className="ins-ic">
                            <i className="fab fa-instagram white-text"> </i>
                            </a>

                        </div>

                    </div>

                </div>
            </div>

            <div className="Contact container text-center text-md-left mt-5">

                <div className="row mt-3">
                    <Column title="Acerca de nosotros">
                        <p>{generalInformation.description}</p>
                    </Column>
                    <Column title="Unidades de Negocio">
                        <p>
                            <a href="#!">Sistemas elèctricos e iluminaciòn</a>
                        </p>
                        <p>
                            <a href="#!">Seguridad Industrial</a>
                        </p>
                        <p>
                            <a href="#!">Sistemas de comunicación</a>
                        </p>
                    </Column>
                    <Column title="Nuestra dirección">
                        <p>
                        {generalInformation.address}
                        </p>
                    </Column>
                    <Column title="contacto">
                        <p>
                            <a href={`tel:${generalInformation.phone}`}>{generalInformation.phone}</a>
                        </p>
                        <p>
                            <a href={`mailto:${generalInformation.email}`}>{generalInformation.email}</a>
                        </p>

                    </Column>

                </div>

            </div>

            <div className="Copyright footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright:
                <a href={`https://${generalInformation.domainWeb}`}>{` ${generalInformation.nameCompany}`}</a>
            </div>
            <style jsx>{`
                .FollowUs{
                    background: #59bb45;
                    color: rgba(255,255,255,.6);
                }
                .Contact{
                    
                }
                .Copyright{
                    background:#1c2331;
                    color: rgba(255,255,255,.6);
                }
            `}</style>
        </footer>
    )
  }
}
