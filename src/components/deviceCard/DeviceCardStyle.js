const deviceCardStyle = {
    deviceCard : (isClicked) => {
        if(isClicked){
            return{
                "position": "relative",
                "marginTop": "80px",
                "width": "190px",
                "height": "90px",
                "marginLeft": "50px",
                "backgroundColor": "white",
                "boxShadow": "0px 17px 30px #35323299"
            }
        }        
        else{          
            return{
                "position": "relative",
                "marginTop": "80px",
                "width": "190px",
                "height": "90px",
                "marginLeft": "110px",
                "backgroundColor": "white",
                "boxShadow": "0px 17px 30px #35323299"
            }
        }
    },
    deviceCardImage : () => {
        return {
            "width":"100px",
            "height":"100px" 
        }
              
    },
    deviceImage : (isClicked) => {
        if(isClicked){
            return{
                "position": "absolute",
                "right": "75px",
                "top": "-25px"
            }
        }
        else{
            return{
                "position": "absolute",
                "left": "50px",
                "top": "-25px"
            }
        }     
    }
}

export default deviceCardStyle