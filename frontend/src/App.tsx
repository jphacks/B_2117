import React from 'react';
import { Routes, Route, Outlet } from 'react-router';

import './App.css';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SyllabusSearchPage } from './pages/SyllabusSearchPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SyllabusSearchPage />} />
      <Route path="course/detail/:year/:code" element={<CourseDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
