const converter=()=>{
    var in_val=document.querySelector("#in_val").value;
    var in_unit=document.querySelector("#in_unit").value;
    var out_val=document.querySelector("#out_val");
    var out_unit=document.querySelector("#out_unit").value;

    if(in_unit=="meter" && out_unit=="centimeter"){
        let output_val=in_val*100;
    out_val.value=output_val;
    }      

    else if(in_unit=="meter" && out_unit=="kilometer"){
        let output_val=in_val*0.001;
    out_val.value=output_val;
    }  

    else if(in_unit=="meter" && out_unit=="millimeter"){
        let output_val=in_val*1000;
    out_val.value=output_val;
    }  

    else if(in_unit=="meter" && out_unit=="micrometer"){
        let output_val=in_val*100000;
    out_val.value=output_val;
    }  

    else if(in_unit=="meter" && out_unit=="nanometer"){
        let output_val=in_val*1000000000;
    out_val.value=output_val;
    }  
    
    else if(in_unit=="meter" && out_unit=="foot"){
        let output_val=in_val*3.37;
    out_val.value=output_val;
    }  

    else if(in_unit=="meter" && out_unit=="inch"){
        let output_val=in_val*39.37;
    out_val.value=output_val;
    }  
    
    else if(in_unit=="meter" && out_unit=="yard"){
        let output_val=in_val*1.094;
    out_val.value=output_val;
    }  

    else if(in_unit=="meter" && out_unit=="mile"){
        let output_val=in_val*0.0000621;
    out_val.value=output_val;
    }  





    else if(in_unit=="kilometer" && out_unit=="meter"){
        let output_val=in_val*1000;
    out_val.value=output_val;
    }  

    else if(in_unit=="kilometer" && out_unit=="centimeter"){
        let output_val=in_val*100000;
    out_val.value=output_val;
    }  

    else if(in_unit=="kilometer" && out_unit=="millimeter"){
        let output_val=in_val*1000000;
    out_val.value=output_val;
    }  

    else if(in_unit=="kilometer" && out_unit=="micrometer"){
        let output_val=in_val*1000000000;
    out_val.value=output_val;
    }  

    else if(in_unit=="kilometer" && out_unit=="nanometer"){
        let output_val=in_val*1000000000000;
    out_val.value=output_val;
    }  
  
    else if(in_unit=="kilometer" && out_unit=="foot"){
        let output_val=in_val*3280.84;
    out_val.value=output_val;
    }  

    else if(in_unit=="kilometer" && out_unit=="inch"){
        let output_val=in_val*10.079;
    out_val.value=output_val;
    }  

    else if(in_unit=="kilometer" && out_unit=="yard"){
        let output_val=in_val*1093.613;
    out_val.value=output_val;
    }  

    else if(in_unit=="kilometer" && out_unit=="mile"){
        let output_val=in_val*0.621;
    out_val.value=output_val;
    }  





    else if(in_unit=="centimeter" && out_unit=="kilometer"){
        let output_val=in_val*0.00001;
    out_val.value=output_val;
    }  

    else if(in_unit=="centimeter" && out_unit=="meter"){
        let output_val=in_val*0.01;
    out_val.value=output_val;
    }  


    else if(in_unit=="centimeter" && out_unit=="millimeter"){
        let output_val=in_val*10;
    out_val.value=output_val;
    }  

    else if(in_unit=="centimeter" && out_unit=="micrometer"){
        let output_val=in_val*100000;
    out_val.value=output_val;
    }  

    else if(in_unit=="centimeter" && out_unit=="nanometer"){
        let output_val=in_val*10000000;
    out_val.value=output_val;
    }  

    else if(in_unit=="centimeter" && out_unit=="foot"){
        let output_val=in_val*0.0328;
    out_val.value=output_val;
    }
    
    else if(in_unit=="cenimeter" && out_unit=="inch"){
        let output_val=in_val*0.094;
    out_val.value=output_val;
    }  

    else if(in_unit=="centimeter" && out_unit=="yard"){
        let output_val=in_val*0.0109;
    out_val.value=output_val;
    }  

    else if(in_unit=="centimeter" && out_unit=="mile"){
        let output_val=in_val*0.0000006214;
    out_val.value=output_val;
    }  





    else if(in_unit=="millimeter" && out_unit=="kilometer"){
        let output_val=in_val*0.000001;
    out_val.value=output_val;
    }  

    else if(in_unit=="millimeter" && out_unit=="meter"){
        let output_val=in_val*0.0001;
    out_val.value=output_val;
    }  

    else if(in_unit=="millimeter" && out_unit=="cntimeter"){
        let output_val=in_val*0.1;
    out_val.value=output_val;
    }  
    
    else if(in_unit=="millimeter" && out_unit=="micrometer"){
        let output_val=in_val*1000;
    out_val.value=output_val;
    }  

    else if(in_unit=="millimeter" && out_unit=="nanometer"){
        let output_val=in_val*1000000;
    out_val.value=output_val;
    }  

    else if(in_unit=="millimeter" && out_unit=="foot"){
        let output_val=in_val*0.00328084;
    out_val.value=output_val;
    }  

    else if(in_unit=="millimeter" && out_unit=="inch"){
        let output_val=in_val*0.0394;
    out_val.value=output_val;
    }  

    else if(in_unit=="millimeter" && out_unit=="yard"){
        let output_val=in_val*0.00109361;
    out_val.value=output_val;
    }  

    else if(in_unit=="millimeter" && out_unit=="mile"){
        let output_val=in_val*0.00000062137;
    out_val.value=output_val;
    }  

    else if(in_unit=="micrometer" && out_unit=="kilometer"){
        let output_val=in_val*0.000000001;
    out_val.value=output_val;
    }  

    else if(in_unit=="micrometer" && out_unit=="meter"){
        let output_val=in_val*0.000001;
    out_val.value=output_val;
    }  

    else if(in_unit=="micrometer" && out_unit=="centimeter"){
        let output_val=in_val*0.0001;
    out_val.value=output_val;
    }  

    else if(in_unit=="micrometer" && out_unit=="miliometer"){
        let output_val=in_val*0.001;
    out_val.value=output_val;
    }  

    else if(in_unit=="micrometer" && out_unit=="kilometer"){
        let output_val=in_val*1000;
    out_val.value=output_val;
    }  

    else if(in_unit=="micrometer" && out_unit=="foot"){
        let output_val=in_val*0.0000393;
    out_val.value=output_val;
    }  

    else if(in_unit=="micrometer" && out_unit=="inch"){
        let output_val=in_val*0.00003937;
    out_val.value=output_val;
    }  

    else if(in_unit=="micrometer" && out_unit=="yard"){
        let output_val=in_val*0.000001093;
    out_val.value=output_val;
    }  

    else if(in_unit=="micrometer" && out_unit=="mile"){
        let output_val=in_val*0.000000000062137;
    out_val.value=output_val;
    }  




    else if(in_unit=="nanometer" && out_unit=="kilometer"){
        let output_val=in_val*0.000000000001;
    out_val.value=output_val;
    }  

    else if(in_unit=="nanometer" && out_unit=="meter"){
        let output_val=in_val*0.000000001;
    out_val.value=output_val;
    }  

    else if(in_unit=="nanometer" && out_unit=="centimeter"){
        let output_val=in_val*0.0000001;
    out_val.value=output_val;
    }  

    else if(in_unit=="nanometer" && out_unit=="millimeter"){
        let output_val=in_val*0.00001;
    out_val.value=output_val;
    }
    
    else if(in_unit=="nanometer" && out_unit=="micrometer"){
        let output_val=in_val*0.0001;
    out_val.value=output_val;
    }  

    else if(in_unit=="nanometer" && out_unit=="foot"){
        let output_val=in_val*3.28e-9;
    out_val.value=output_val;
    }  

    else if(in_unit=="nanometer" && out_unit=="inch"){
        let output_val=in_val*3.9e-8;
    out_val.value=output_val;
    } 
    
    else if(in_unit=="nanometer" && out_unit=="yard"){
        let output_val=in_val*1.09e-9;
    out_val.value=output_val;
    }  

    else if(in_unit=="nanometer" && out_unit=="mile"){
        let output_val=in_val*6.2e-13;
    out_val.value=output_val;
    }  



    else if(in_unit=="foot" && out_unit=="kilometer"){
        let output_val=in_val*0.00030;
    out_val.value=output_val;
    }  

    else if(in_unit=="foot" && out_unit=="meter"){
        let output_val=in_val*0.3048;
    out_val.value=output_val;
    }  

    else if(in_unit=="foot" && out_unit=="centimeter"){
        let output_val=in_val*30.48;
    out_val.value=output_val;
    }  

    else if(in_unit=="foot" && out_unit=="millimeter"){
        let output_val=in_val*304.8;
    out_val.value=output_val;
    }  

    else if(in_unit=="foot" && out_unit=="micrometer"){
        let output_val=in_val*304800;
    out_val.value=output_val;
    }  

    else if(in_unit=="foot" && out_unit=="nanometer"){
        let output_val=in_val*3.048e+8;
    out_val.value=output_val;
    }  

    else if(in_unit=="foot" && out_unit=="inch"){
        let output_val=in_val*3.9e-8;
    out_val.value=output_val;
    }  

    else if(in_unit=="foot" && out_unit=="yard"){
        let output_val=in_val*1.09e-9;
    out_val.value=output_val;
    }  

    else if(in_unit=="foot" && out_unit=="mile"){
        let output_val=in_val*6.2e-13;
    out_val.value=output_val;
    }  





    else if(in_unit=="inch" && out_unit=="kilometer"){
        let output_val=in_val*6.2e-13;
    out_val.value=output_val;
    }

    else if(in_unit=="inch" && out_unit=="meter"){
        let output_val=in_val*6.2e-13;
    out_val.value=output_val;
    }

    else if(in_unit=="inch" && out_unit=="centimeter"){
        let output_val=in_val*6.2e-13;
    out_val.value=output_val;
    }

    else if(in_unit=="inch" && out_unit=="milliometer"){
        let output_val=in_val*6.2e-13;
    out_val.value=output_val;
    }

    else if(in_unit=="inch" && out_unit=="micrometer"){
        let output_val=in_val*6.2e-13;
    out_val.value=output_val;
    }

    else if(in_unit=="inch" && out_unit=="nanometer"){
        let output_val=in_val*6.2e-13;
    out_val.value=output_val;
    }

    else if(in_unit=="inch" && out_unit=="foot"){
        let output_val=in_val*6.2e-13;
    out_val.value=output_val;
    }

    else if(in_unit=="inch" && out_unit=="yard"){
        let output_val=in_val*6.2e-13;
    out_val.value=output_val;
    }

    else if(in_unit=="inch" && out_unit=="mile"){
        let output_val=in_val*6.2e-13;
    out_val.value=output_val;
    }






    
    else if(in_unit=="yard" && out_unit=="kilometer"){
        let output_val=in_val*0.000914;
    out_val.value=output_val;
    }

    else if(in_unit=="yard" && out_unit=="meter"){
        let output_val=in_val*0.9144;
    out_val.value=output_val;
    }

    else if(in_unit=="yard" && out_unit=="centimeter"){
        let output_val=in_val*91.44;
    out_val.value=output_val;
    }

    else if(in_unit=="yard" && out_unit=="millimeter"){
        let output_val=in_val*914.4;
    out_val.value=output_val;
    }

    else if(in_unit=="yard" && out_unit=="micrometer"){
        let output_val=in_val*914400;
    out_val.value=output_val;
    }

    else if(in_unit=="yard" && out_unit=="nanometer"){
        let output_val=in_val*9.144e+8;
    out_val.value=output_val;
    }

    else if(in_unit=="yard" && out_unit=="foot"){
        let output_val=in_val*3;
    out_val.value=output_val;
    }

    else if(in_unit=="yard" && out_unit=="inch"){
        let output_val=in_val*36;
    out_val.value=output_val;
    }

    else if(in_unit=="yard" && out_unit=="mile"){
        let output_val=in_val*0.00056;
    out_val.value=output_val;
    }

    




    else if(in_unit=="mile" && out_unit=="kilometer"){
        let output_val=in_val*1.60934;
    out_val.value=output_val;
    }


    else if(in_unit=="mile" && out_unit=="kilometer"){
        let output_val=in_val*1609.34;
    out_val.value=output_val;
    }


    else if(in_unit=="mile" && out_unit=="centimeter"){
        let output_val=in_val*160934;
    out_val.value=output_val;
    }


    else if(in_unit=="mile" && out_unit=="millimeter"){
        let output_val=in_val*1.609e+6;
    out_val.value=output_val;
    }

    else if(in_unit=="mile" && out_unit=="micrometer"){
        let output_val=in_val*1.609e+9;
    out_val.value=output_val;
    }

    else if(in_unit=="mile" && out_unit=="nanometer"){
        let output_val=in_val*1.609e+12;
    out_val.value=output_val;
    }

    else if(in_unit=="mile" && out_unit=="foot"){
        let output_val=in_val*5280;
    out_val.value=output_val;
    }

    else if(in_unit=="mile" && out_unit=="inch"){
        let output_val=in_val*63360;
    out_val.value=output_val;
    }
    


    
}