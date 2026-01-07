import AppRoutes from "./routes";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto p-4">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}
