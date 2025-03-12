import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useCreateEntityMutation } from './api/entityApi';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setEntityId } from './store/entitySlice';
import './styles/index.scss';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0073B7',
    },
    secondary: {
      main: '#F5F5F5',
    },
  },
});

function App() {
  const entityId = useAppSelector(state => state.entity.entityId);
  const dispatch = useAppDispatch();
  const [createEntity, { isLoading, isSuccess, data }] = useCreateEntityMutation();

  useEffect(() => {
    // Инициализация entityId только если его еще нет
    if (!entityId) {
      createEntity();
    }
  }, [entityId, createEntity]);

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setEntityId(data.id));
    }
  }, [isSuccess, data, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="app">
          <header className="app-header">
            <h1>Строительно-монтажные работы</h1>
          </header>
          <main className="app-content">
            {isLoading ? (
              <div>Загрузка...</div>
            ) : (
              <Routes>
                <Route path="/" element={<div>Главная страница</div>} />
              </Routes>
            )}
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
