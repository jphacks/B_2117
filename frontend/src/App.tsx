import React from 'react';
import { Routes, Route } from 'react-router';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import './App.css';
import { CourseDetailPage } from './pages/CourseDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SyllabusSearchPage } from './pages/SyllabusSearchPage';

const App = () => {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<SyllabusSearchPage />} />
        <Route
          path="course/detail/:year/:code"
          element={<CourseDetailPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </RecoilRoot>
  );
};

export default App;
