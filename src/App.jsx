import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Auth/Login';
import TaskForm from './components/Tasks/TaskForm';
import TaskList from './components/Tasks/TaskList';

function App() {
  const user = useSelector(state => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <h1 className="glitch" data-text="INITIALIZING">INITIALIZING</h1>
        <div className="loading-bar"></div>
        <p className="loading-text">Loading System...</p>
      </div>
    );
  }
  
  // Protected route component
  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        
        <main className="container flex-grow-1">
          <Routes>
            <Route path="/login" element={
              user ? <Navigate to="/tasks" /> : <Login />
            } />
            
            <Route path="/tasks" element={
              <ProtectedRoute>
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <TaskForm />
                  </div>
                  <div className="col-md-8">
                    <TaskList />
                  </div>
                </div>
              </ProtectedRoute>
            } />
            
            <Route path="/" element={<Navigate to="/tasks" />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;