import Header from './Header'

const layoutStyle = {
  fontFamily: 'sans-serif'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header url={props.url}/>
    {props.children}
  </div>
)

export default Layout
