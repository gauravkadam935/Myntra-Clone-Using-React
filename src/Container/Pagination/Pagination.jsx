import React from "react";
import { Chip } from "@mui/material";
import {Stack} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#F31559"
    },
    secondary: {
        main:"#2a9461"
    }
  }
});
const Pagination =({onClick,count})=>{
    const handleClick=(e)=>{
        
        if(e.target.label==="Prev"){
            if(count>1){
                onClick(e.target.value-1);
            }
        }else if(e.target.label==="Next"){
            onClick(e.target.value+1);
        }
    }
    return(
            <ThemeProvider theme={theme}>
            <Stack direction="row" justifyContent="center" spacing={1} color="primary">
            <Chip label="Prev" variant="filled" color="primary" onClick={()=>onClick(count-1)} disabled={count==1} />
            <Chip label="1" variant="filled" color="primary"  onClick={()=>onClick(1)} />
            <Chip label="2" variant="filled" color="primary" onClick={()=>onClick(2)} />
            <Chip label="Next" variant="filled" color="primary" onClick={()=>onClick(count+1)} disabled={count==2} />
            </Stack>
            </ThemeProvider>
    )
}
export default Pagination;