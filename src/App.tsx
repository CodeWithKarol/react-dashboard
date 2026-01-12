import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/app-layout";
import DashboardPage from "./app/dashboard/page";
import SettingsPage from "./app/settings/page";
import AnalyticsPage from "./app/analytics/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/users" element={<AnalyticsPage />} />
          <Route path="/products" element={<AnalyticsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
