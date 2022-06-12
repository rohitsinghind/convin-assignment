export const styles = {
    box:{
        display:"flex",
        justifyContent:"center",
        my:"50px"
    },
    card:{
        p:"40px"
    },
    content:{
        display:"flex",
        justifyContent:"center",
        alignItems:"start",
        '@media (max-width: 780px)': {
            display:"inline"
          },
    },
    loader:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"128px",
        width:"550px",
        '@media (max-width: 780px)': {
            width:"250px",
            height:"343px",
          },
    },
    center:{
        display:"flex",
        justifyContent:"center",
    },
    avatar:{
        width:"120px",
        height:"120px",
        mr:"20px",
        '@media (max-width: 780px)': {
            width:"190px",
            height:"190px",
            mb:"25px"
          },
    },
    details:{
        display:"flex",
        justifyContent:"center",
        alignItems:"start",
    },
    text1:{
        ml:"20px",
        minWidth:"150px",
        fontSize:24,
        fontFamily:"'Open Sans', sans-serif",
        color:"#313131",
    },
    text3:{
        mr:"20px",
        fontSize:24,
        fontFamily:"'Open Sans', sans-serif",
        color:"#313131",
    },
    text2:{
        ml:"20px",
        minWidth:"300px",
        fontSize:24,
        fontFamily:"'Open Sans', sans-serif",
        color:"#656565",
    }
}