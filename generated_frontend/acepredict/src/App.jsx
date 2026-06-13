import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './router/routes';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}
