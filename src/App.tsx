
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

// Créer un client de requête
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

// Définir les styles d'animation globaux
const customStyles = `
  /* Animations avancées */
  @keyframes scanLine {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100vh); }
  }
  
  @keyframes noise {
    0%, 100% { background-position: 0 0; }
    10% { background-position: -5% -10%; }
    30% { background-position: 3% 15%; }
    50% { background-position: 12% 5%; }
    70% { background-position: -9% 8%; }
    90% { background-position: 5% -15%; }
  }
  
  @keyframes flicker {
    0%, 100% { opacity: 1; }
    31% { opacity: 1; }
    32% { opacity: 0.4; }
    33% { opacity: 1; }
    77% { opacity: 1; }
    78% { opacity: 0.8; }
    79% { opacity: 1; }
  }
  
  @keyframes securityBanner {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  
  @keyframes progressLine {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes progressBar {
    0% { width: 0%; }
    20% { width: 20%; }
    40% { width: 40%; }
    60% { width: 75%; }
    80% { width: 85%; }
    100% { width: 100%; }
  }
  
  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }
  
  /* Effets visuels */
  .scan-line {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: rgba(57, 255, 20, 0.1);
    animation: scanLine 5s linear infinite;
    pointer-events: none;
    z-index: 20;
  }
  
  .noise {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("data:image/png;base64,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");
    opacity: 0.03;
    animation: noise 5s linear infinite;
    pointer-events: none;
  }
  
  .scan-effect {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, 
      rgba(32, 58, 67, 0) 50%, 
      rgba(32, 58, 67, 0.02) 50.5%, 
      rgba(32, 58, 67, 0) 51%);
    background-size: 100% 4px;
    pointer-events: none;
    z-index: 10;
  }
  
  .crt-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(ellipse at center, rgba(10, 15, 20, 0) 0%, rgba(10, 15, 20, 0.2) 90%, rgba(10, 15, 20, 0.3) 100%);
    background-size: 100% 100%;
    pointer-events: none;
    z-index: 15;
  }
  
  .military-frame {
    background-color: rgba(20, 30, 40, 0.7);
    border: 1px solid rgba(76, 175, 80, 0.5);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(76, 175, 80, 0.1);
    padding: 15px;
    margin-bottom: 15px;
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
  }
  
  .military-header {
    font-family: 'Courier New', monospace;
    letter-spacing: 1px;
    border-bottom: 1px solid rgba(76, 175, 80, 0.3);
    padding-bottom: 8px;
    color: #4CAF50;
    font-weight: bold;
  }
  
  .classified-stamp {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-25deg);
    font-size: 10vw;
    color: rgba(255, 0, 0, 0.1);
    font-family: 'Impact', sans-serif;
    text-transform: uppercase;
    pointer-events: none;
    z-index: 5;
    opacity: 0.4;
    user-select: none;
  }
  
  .restricted-stamp {
    position: fixed;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(15deg);
    font-size: 7vw;
    color: rgba(255, 0, 0, 0.1);
    font-family: 'Impact', sans-serif;
    text-transform: uppercase;
    pointer-events: none;
    z-index: 5;
    opacity: 0.35;
    user-select: none;
  }
  
  .security-banner {
    animation: securityBanner 30s linear infinite;
  }
  
  .military-logo {
    position: relative;
  }
  
  .military-star {
    font-size: 2rem;
  }
  
  .animate-progress-line {
    animation: progressLine 2s linear infinite;
    background: linear-gradient(90deg, 
      rgba(255, 102, 0, 0.1), 
      rgba(255, 102, 0, 0.5), 
      rgba(255, 102, 0, 0.1));
  }
  
  .animate-progress-bar {
    animation: progressBar 3.5s ease-in-out;
  }
  
  .animate-typing {
    animation: typing 2s steps(40, end);
    width: 0;
    border-right: 2px solid rgba(76, 175, 80, 0.7);
    white-space: nowrap;
  }

  /* Amélioration des couleurs militaires */
  :root {
    --military-dark: #121a22;
    --military-green: #4CAF50;
    --military-orange: #FF9800;
    --military-red: #F44336;
    --military-lightgray: #B0BEC5;
    --military-khaki: #F0E68C;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  
  .animate-blink {
    animation: blink 1s step-end infinite;
  }
  
  .font-military {
    font-family: 'Courier New', monospace;
    letter-spacing: 1px;
  }
`;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <style>{customStyles}</style>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
