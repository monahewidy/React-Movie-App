// import React from "react";
// import { Button } from "react-bootstrap";
// import { useContext } from "react"
// import { langContext } from "../../context/counter"

// const Language = () =>{
//     const {lang,setLang}=useContext(langContext)
//     console.log(lang);
//     return(
//         <>
// <p>this is lang :{lang}</p>
// <Button  variant="primary"type="submit"onClick={()=>setLang('ar')} >ar Language </Button>

// <Button  variant="primary"type="submit"onClick={()=>setLang('en')} >en changeLanguage</Button>
// </>
//     )
// }
// export default Language

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import changeLanguage from '../../store/actions/language';

// class HomeClass extends Component {

//     toggleLang=()=>{
//         this.props.changeLang(this.props.language=='en'?'ar':'en')
//     }
//     render() {
//         console.log(this.props);
//         return (
//             <div>
//             language is :  {this.props.language}

//             <button onClick={()=>this.toggleLang()} className='btn btn-dark'>Toggle Language</button>
//             </div>
//         );
//     }
// }


// const mapStateToProps=(state)=>{
//     return {
//         language:state.language.lang,
//         loader:state.loader.loader
//     }
// }

// const mapDispatchToProps=(dispatch)=>{
// return {
//     changeLang:(lang)=>dispatch(changeLanguage(lang))
// }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(HomeClass) ;






// import { Button } from "react-bootstrap";
// import { useContext } from "react"
// import { langContext } from "../context/counter"


// const Todo = () =>{
//         const {lang,setLang}=useContext(langContext)
//         console.log(lang);
//         return(

// <>
// <p>this is lang :{lang}</p>
// <Button  variant="primary" type="submit" onClick={()=>setLang('ar')} >changeLanguage</Button>
// <Button  variant="primary" type="submit" onClick={()=>setLang('en')} >changeLanguage</Button>
// </>

//     )
//         }