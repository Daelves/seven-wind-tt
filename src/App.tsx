import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useCreateEntityMutation } from './api/entityApi';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setEntityId } from './store/entitySlice';
import './styles/index.scss';
import MainLayout from "./components/layout/MainLayout";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#0073B7',
    },
    secondary: {
      main: '#F5F5F5',
    },
    background: {
      default: '#202124',
      paper: '#27272A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A1A1AA',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function App() {
  const entityId = useAppSelector(state => state.entity.entityId);
  const dispatch = useAppDispatch();
  const [createEntity, { isLoading, isSuccess, data }] = useCreateEntityMutation();

  useEffect(() => {
    if (!entityId) {
      const envEntityId = import.meta.env.VITE_ENTITY_ID;
      if (envEntityId) {
        dispatch(setEntityId(envEntityId));
      } else {
        console.log('envEntityId не найден')
        //createEntity();
      }
    }
  }, [entityId, createEntity, dispatch]);

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setEntityId(data.id));
    }
  }, [isSuccess, data, dispatch]);

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <MainLayout>
            {isLoading ? (
                <div>Загрузка...</div>
            ) : (
                <Routes>
                  <Route path="/" element={<div>Главная страница</div>} />
                </Routes>
            )}
          </MainLayout>
        </Router>
      </ThemeProvider>
  );
}

export default App;
