// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SignInPage from "./pages/SignIn/SignInPage";
import Cart from "./pages/Cart/Cart";
import { GlobalProvider } from "./context/GlobalContext";
import Categories from "./components/Categories";
import VerificationMail from "./pages/SignIn/VerificationMail";
import { AuthProvider } from "./context/AuthContext";
import { PartsProvider } from "./context/PartsContext";
import { CategoriesProvider } from "./context/CategoriesContext";

function App() {
  return (
    <GlobalProvider>
      <AuthProvider>
        <PartsProvider>
          <CategoriesProvider>
            <Router>
              <Layout>
                <Routes>
                  <Route path="/signin" element={<SignInPage />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/categories" element={<Categories />} />
                  <Route
                    path="/verificationmail"
                    element={<VerificationMail />}
                  />
                </Routes>
              </Layout>
            </Router>
          </CategoriesProvider>
        </PartsProvider>
      </AuthProvider>
    </GlobalProvider>
  );
}

export default App;
