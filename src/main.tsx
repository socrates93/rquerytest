import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import './index.css';
import App from './App';
import { HomePage } from './pages/home.page';
import { RQSuperHeroesPage } from './pages/rqsuperheroes.page';
import { SuperHeroesPage } from './pages/superheroes.page';
import { RQSuperDetails } from './pages/rqsuperdetails.page';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<HomePage />} />
            <Route path='super-heroes' element={<SuperHeroesPage />} />
            <Route path='rq-super-heroes' element={<RQSuperHeroesPage />}>
              <Route path=':id' element={<RQSuperDetails />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);