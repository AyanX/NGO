
const Wrapper = ({component, bg}) => {
  return (
    <div style={{backgroundColor:bg}} className="homepage-component-wrapper">
      {component}
    </div>
  )
}

export default Wrapper
