import { h, Fragment } from 'preact'
import Panel from 'components/panel'

const App = () => {
  const text = 'Basic preact app setup with webpack 4'

  return (
    <Fragment>
      <h1>Basic preact app</h1>
      <Panel text={text} />
    </Fragment>
  )
}

export default App
