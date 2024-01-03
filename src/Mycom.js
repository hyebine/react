const Mycom = (props) => {
  return <button className={props.className && props.className}>{props.children}</button>
}


export default Mycom