import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//#region components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProtectedRoute from "./Components/ProtectedRoute";
//#endregion

//#region pages
import Home from "./Pages/Home";
import Photo from "./Pages/Photo";
import Login from "./Pages/Login";
import Conta from "./Pages/Conta";
import Perfil from "./Pages/Perfil";
import NotFound from "./Pages/NotFound";
//#endregion

import { UserStorage } from "./Contexts/UserContext";

import { App, Body } from "./styles";

export default function Router() {
  const isAuthenticated = true;
  <><Header /><Body>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login/*" element={<Login />} />
      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
        <Route path="foto/:id" element={<Photo />} />
        <Route path="perfil/:user" element={<Perfil />} />
      </Route> {/* Fechando a tag <Route> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Body><Header /><Body>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/*" element={<Login />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="foto/:id" element={<Photo />} />
          <Route path="perfil/:user" element={<Perfil />} />
        </Route> {/* Fechando a tag <Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Body><Header /><Body>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/*" element={<Login />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="foto/:id" element={<Photo />} />
          <Route path="perfil/:user" element={<Perfil />} />
        </Route> {/* Fechando a tag <Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Body><Header /><Body>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/*" element={<Login />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="foto/:id" element={<Photo />} />
          <Route path="perfil/:user" element={<Perfil />} />
        </Route> {/* Fechando a tag <Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Body></>

  return (
    <App>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Body>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
                <Route path="foto/:id" element={<Photo />} />
                <Route path="perfil/:user" element={<Perfil />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Body>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </App>
  );
}
