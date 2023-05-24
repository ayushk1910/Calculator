var dis=document.getElementById('display');
dis.innerHTML="CALCULATOR ON";
var buttons=document.getElementsByClassName('button');
var operand_1=null;
var operand_2=null;
var operator=null;
var point_1=false;
var point_2=false;
console.log("connection_established");
console.log(buttons);
 


for(var i=0;i<buttons.length;i++){
     
    buttons[i].addEventListener('click',function(){
          var value=this.getAttribute('data-value');
        
        if(value=='A/C'){
            dis.innerHTML="";
            point_2=false;
            point_1=false;
            operand_1=null;
            operand_2=null;
            operator=null;

        }
        else if( value=="." || value>='0' && value <='9' ){
              if(operator==null){
                  if(operand_1==null){
                      operand_1="";
                  }
                 if(value=="." && point_1==false){
                    operand_1=operand_1 + value;
                    dis.innerHTML=operand_1;
                    point_1=true;
                  }
                  else if(value=="."&& point_1==true){
                        dis.innerHTML="ERROR";
                        operand_1=null;
                        point_1=false;
                }
                  else{
                   operand_1=operand_1 + value;
                   dis.innerHTML=operand_1;
                  }
                  
                 } 
              else{
                  if(operand_2==null){
                      operand_2="";
                  }
                  if(value=="." && point_2==false){
                    operand_2=operand_2 + value;
                    dis.innerHTML=operand_2; 
                    point_2==true;
                  }
                  else if(value=="."&& point_2==true){
                    dis.innerHTML="ERROR";
                    point_2=false;
                    point_1=false;
                    operand_1=null;
                    operand_2=null;
                    operator=null;

                  }
                  else{
                   operand_2=operand_2 + value;
                   dis.innerHTML=operand_2; 
                  }
                 
                   
            } 
        }


        else if(value=='%'){
              
            operand_1=eval(operand_1 + "/" + "100" );
            dis.innerHTML=operand_1;
        }
     else if(value=="+/-"){
          
            if(operand_1!=null){
                   if(operand_1[0]=='-'){
                       //left_shift
                       console.log("PLUS AND MINUS");
                        var a=operand_1.substr(1);
                        operand_1=a;
                   }
                   else{
                      //right_shift
                      operand_1="-" + operand_1;
                   }
                   dis.innerHTML=operand_1;
            }
            if(operand_2!=null){
                if(operand_2[0]=='-'){
                    //left_shift
                    var a=operand_2.substr(1);
                    operand_2=a;
                }
                else{
                   //right_shift
                   operand_2="-" + operand_2;
                }
                dis.innerHTML=operand_2;
         }

     }                
                                       
 else {
     switch(value){
         case "+":
             if(operator!=null){
                dis.innerHTML="ERROR, PRESS A/C";
                break;
             }
             operator="+";
             console.log(operator);
             dis.innerHTML=operator;
             break;
         case "-":
            if(operator!=null){
                dis.innerHTML="ERROR, PRESS A/C";
                break;
             }
             operator="-";
             console.log(operator);
             dis.innerHTML=operator;
             break;
         case "*":
            if(operator!=null){
                dis.innerHTML="ERROR, PRESS A/C";
                break;
             }
         operator="*";
         console.log(operator);
        dis.innerHTML=operator;
         break;
         case "/":
            if(operator!=null){
                dis.innerHTML="ERROR, PRESS A/C";
                break;
             }
             operator="/";
             console.log(operator);
             dis.innerHTML=operator;
        break;
        case "=":
             if(operand_1!=null && operand_2!=null && operator!=null){
                 if(operand_2=="0" && operator=="/"){
                     dis.innerHTML="ERROR";
                     
                 }
                 else{
                 operand_1=eval(operand_1 + operator + operand_2);
                 dis.innerHTML=operand_1;
                 operand_2=null;
                 operator=null;
                 
            }  

     }
     else{
            dis.innerHTML="ERROR, PRESS A/C"
           

     }

 }
}
        

    });
    
}