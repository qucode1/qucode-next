import Header from './Header'

const layoutStyle = {
  fontFamily: 'sans-serif'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout
