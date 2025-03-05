import Footer from "./components/Footer";
import { AuthProvider } from "./providers/AuthContext";
import MyComponent from "./components/MyComponent";
import Header from "./components/Header";

function App() {
  return (
    <AuthProvider>
      <Header />
      <MyComponent />
      <Footer />
    </AuthProvider>
  );
}

export default App;
