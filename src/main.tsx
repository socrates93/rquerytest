import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import './App.css';
import App from './App';
import { HomePage } from './pages/home.page';
import { RQSuperHeroesPage } from './pages/rqsuperheroes.page';
import { SuperHeroesPage } from './pages/superheroes.page';
import { RQSuperDetails } from './pages/rqsuperdetails.page';
import { ParalelQueriesPage } from './pages/paralelqueries.page';
import { DynamicParalelQueriesPage } from './pages/dynamicparalelqueries.pages';
import { DependentQueryPage } from './pages/dependentquery.page';

const queryClient = new QueryClient();

const content = (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<HomePage />} />
            <Route path='super-heroes' element={<SuperHeroesPage />} />
            <Route path='paralelq' element={<ParalelQueriesPage />} />
            <Route
              path='dparalelq'
              element={<DynamicParalelQueriesPage heroIds={[1, 3]} />}
            />
            <Route
              path='dquery'
              element={<DependentQueryPage email={'laparita@correo.com'} />}
            />
            <Route path='rq-super-heroes/:id' element={<RQSuperDetails />} />
            <Route path='rq-super-heroes' element={<RQSuperHeroesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);

ReactDOM.render(content, document.getElementById('root'));
