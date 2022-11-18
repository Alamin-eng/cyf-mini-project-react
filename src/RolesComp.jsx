import React from "react";
import Frontend from "./FrontendDrawer";
import Backend from "./BackendDraw";
import UxDesigner from "./UXdesignerDraw";
import ProductManager from "./ProductManager";
import Qatester from "./QAtester";

export default function Roles(){
  return (
    <div className="rolesDiv">
            <p>
              <b className="text-primary">Step 2 : Research each of the roles below - </b> <br></br>
            </p>
            <ul>
                <li>A front end web developer</li>
                <li>A back end web developer</li>
                <li>A UX/UI designer or UX researcher</li>
                <li>A Product manager</li>
                <li>A Quality Assurance tester</li>
            </ul>
            <p >
              <b className="text-primary">Step 3 : Create a presentation - </b> <br></br>
                Create a presentation using google slides to explain what each of the roles do and how
                these roles work together in a team on a project.
            </p>   
            <div className='border border-info p-2' >
                <p>Please click a button for presentation - <br></br></p>
                <div className="rolesBtndiv">
                    <Frontend /> 
                    <Backend />
                    <UxDesigner />
                    <ProductManager />
                    <Qatester />
                </div>    
            </div >         
    </div>  
  )
    
}
