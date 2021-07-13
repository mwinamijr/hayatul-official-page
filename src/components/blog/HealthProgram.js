import React from 'react'
import { Link } from 'react-router-dom'


function HealthProgram() {
    return (
        <div>
            <div className="p-4 p-md-5 mb-4 text-black rounded bg-light">
            <Link to="/blogu/" className='btn btn-light my-3'>Go Back</Link>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10 px-0">
                    <h1 className="display-4 fst-italic">Hayatul Islamiya Health Center</h1>
                    <p className="lead my-3">Kwa takriban miaka 23 sasa Taasisi ya Hayatul Islamiya Complex imekuwa ikitoa huduma mbalimabli kwa jamii zikiwemo huduma za maji na Elimu, kama ilivyo kwa malengo ya 
                      kuanzishwa kwa taasisi hii, <b>"kuihudumia jamii"</b>. 
                      </p>
                      <p>
                      <h4>Huduma ya Afya</h4>
                      Baada ya kuonyesha uzoefu mkubwa katika kuihudumia jamii katika nyanja za elimu, kwa sasa Tumeanzisha ujenzi wa zahanati ya kisasa itakayokuwa inatoa huduma zote muhimu 
                      na kwa gharama nafuu kwani huduma ya Afya inapaswa kupatikana kwa watu wote. <b><i>Utoaji wa huduma hii katika kituo chetu utazingatia mafundisho na taratibu za dini 
                          ya kiislamu kama inavyoelekezwa katika Qur-an na sunnah.</i></b>
                    </p>
                    
                </div>
            </div>
            </div>
        </div>
    )
}

export default HealthProgram
