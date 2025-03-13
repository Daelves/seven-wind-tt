import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const OutlayTable = lazy(() => import('./components/OutlayTable'));

// Компонент с загрузкой
const LoadingFallback = () => <div>Загрузка...</div>;

const AppRoutes = () => {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <Routes>
                {/* Основной маршрут - отображение таблицы */}
                <Route path="/" element={<OutlayTable />} />

                {/* Демонстрационный маршрут для показа всех состояний */}
                {/*<Route path="/demo" element={<OutlayTableDemo />} />*/}
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;