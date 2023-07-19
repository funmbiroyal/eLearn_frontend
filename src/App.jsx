import AppRouter from './router'
import { Provider } from 'react-redux';
// import { ThemeProvider } from '@mui/material';
import { store } from './store'
// import theme from '../config/theme';

const StoreProvider = Provider;

function App() {
  return (
    <>
      <StoreProvider store={store}>
        {/* <ThemeProvider theme={theme}> */}
          <AppRouter />
        {/* </ThemeProvider> */}
      </StoreProvider>    
    </>
  )
}

export default App
