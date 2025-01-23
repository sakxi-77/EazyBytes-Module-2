import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import Portfolio from "./components/Portfolio";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import "./App.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function App() {
  const navigate = useNavigate();
  const [stockData, setStockData] = useState([]);
  const [chartData, setChartData] = useState({});
  const [selectedStock, setSelectedStock] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const stockOptions = [
    "AAPL",
    "GOOGL",
    "MSFT",
    "AMZN",
    "TSLA",
    "NFLX",
    "META",
    "NVDA",
    "INTC",
    "AMD",
  ];

  // Fetch stock data
  const fetchStockData = async (symbol) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=H3PGVY8RLI7T8GET`
      );

      if (response.data["Time Series (5min)"]) {
        const timeSeries = response.data["Time Series (5min)"];
        const chartData = {
          labels: Object.keys(timeSeries).reverse(),
          datasets: [
            {
              label: `${symbol} Stock Price`,
              data: Object.values(timeSeries).map((item) => item["4. close"]).reverse(),
              borderColor: "rgba(75, 192, 192, 1)",
              fill: false,
            },
          ],
        };
        setChartData(chartData);
        setStockData(timeSeries);
        setError(null);
      } else {
        setError("No data found for the selected stock.");
      }
    } catch (err) {
      setError("Error fetching stock data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header>
        <h1>Stock Market Dashboard</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="#stocks">Stocks</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      {/* Home Section */}
      <section id="home" className="section">
        <h2>Welcome to the Stock Market Dashboard</h2>
        <p>Track your stocks, manage your portfolio, and stay updated with the latest trends.</p>
        <button className="cta-button" onClick={() => navigate("/login")}>
          Get Started
        </button>
      </section>

      {/* Stocks Section */}
      <section id="stocks" className="section">
        <h2>Stocks</h2>
        <select
          value={selectedStock}
          onChange={(e) => {
            setSelectedStock(e.target.value);
            fetchStockData(e.target.value);
          }}
        >
          <option value="">Select a stock</option>
          {stockOptions.map((stock) => (
            <option key={stock} value={stock}>
              {stock}
            </option>
          ))}
        </select>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {Object.keys(chartData).length > 0 && (
          <Line
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
                title: { display: true, text: `${selectedStock} Stock Price Over Time` },
              },
            }}
          />
        )}
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Stock Market Dashboard</p>
      </footer>
    </div>
  );
}

function Login() {
  const navigate = useNavigate();
  return (
    <div className="auth-page">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="cta-button">
          Login
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <span className="link" onClick={() => navigate("/signup")}>
          Sign Up
        </span>
      </p>
    </div>
  );
}

function Signup() {
  const navigate = useNavigate();
  return (
    <div className="auth-page">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" className="cta-button">
          Sign Up
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <span className="link" onClick={() => navigate("/login")}>
          Login
        </span>
      </p>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <div>
        {/* Define Routes for each page */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}
/*
import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import Portfolio from "./components/Portfolio";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import "./App.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function App() {
  const navigate = useNavigate();
  const [stockData, setStockData] = useState([]);
  const [chartData, setChartData] = useState({});
  const [selectedStock, setSelectedStock] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const stockOptions = [
    "AAPL",
    "GOOGL",
    "MSFT",
    "AMZN",
    "TSLA",
    "NFLX",
    "META",
    "NVDA",
    "INTC",
    "AMD",
  ];

  // Fetch stock data
  const fetchStockData = async (symbol) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=H3PGVY8RLI7T8GET`
      );

      if (response.data["Time Series (5min)"]) {
        const timeSeries = response.data["Time Series (5min)"];
        const chartData = {
          labels: Object.keys(timeSeries).reverse(),
          datasets: [
            {
              label: `${symbol} Stock Price`,
              data: Object.values(timeSeries).map((item) => item["4. close"]).reverse(),
              borderColor: "rgba(75, 192, 192, 1)",
              fill: false,
            },
          ],
        };
        setChartData(chartData);
        setStockData(timeSeries);
        setError(null);
      } else {
        setError("No data found for the selected stock.");
      }
    } catch (err) {
      setError("Error fetching stock data.");
    } finally {
      setLoading(false);
    }
  };
*/ 
