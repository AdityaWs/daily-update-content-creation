import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Slide from './slides/Slide'
import AppProvider from './AppProvider'
import SlideViewer from './slides/SlideViewer'
import ImportContent from './ImportContent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <ImportContent />
      <SlideViewer />
    </AppProvider>
  </StrictMode>,
)
