import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router";
import './index.css';
import RoutesProvider from "./route/RoutesProvider";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from "./AuthProvider/AuthProvider";
const queryClient = new QueryClient()
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
  <AuthProvider>
     <QueryClientProvider client={queryClient}>
      <RoutesProvider></RoutesProvider>
    </QueryClientProvider>
  </AuthProvider>
  </BrowserRouter>
);
