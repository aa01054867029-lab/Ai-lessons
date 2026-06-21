import type { ComponentType } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { IndexScreen } from './screens/IndexScreen'
import { Showcase } from './Showcase'
import { screens } from './screens/registry'
import { ToastProvider } from './context/ToastContext'
import './App.css'

function ScreenRoute({ component: Component }: { component: ComponentType }) {
  return <Component />
}

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexScreen />} />
          <Route path="/showcase" element={<Showcase />} />
          {screens.map((screen) => (
            <Route
              key={screen.id}
              path={screen.route}
              element={<ScreenRoute component={screen.component} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  )
}

export default App
