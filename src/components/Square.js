import React from "react";

const Square=(props) =>{
  const classes=(props.className?`${props.className} square`:`square`)
  return( <span className={classes} onClick={() => props.onClick(props.index)}>
    {props.state}
  </span>
)
}
export default Square 

// import React from "react";

// const SquareComponent = (props) => {
//     const classes = (props.className ? `${props.className} square` : `square`)
//     return (
//         <span
//             className={classes + (props.state === "X" ? ` fc-aqua` : ` fc-white`)}
//             onClick={() => props.onClick(props.index)}>
//            {props.state}
//         </span>
//     )
// }
// export default SquareComponent