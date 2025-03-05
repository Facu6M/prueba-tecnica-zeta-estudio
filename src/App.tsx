import Footer from "./components/Footer";
import { AuthProvider } from "./providers/AuthContext";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <AuthProvider>
      <MyComponent />

      <Footer />
    </AuthProvider>
  );
}

export default App;
