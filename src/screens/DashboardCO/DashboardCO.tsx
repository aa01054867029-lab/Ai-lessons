import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Sidebar } from '../../components/Sidebar'
import { Navbar } from '../../components/Navbar'
import { StatCard } from '../../components/StatCard'
import { AlertsTable } from './parts/AlertsTable'
import { RecentActivity } from './parts/RecentActivity'
import './DashboardCO.css'

export const DashboardCO = () => {
  const navigate = useNavigate()
  return (
    <div className="dashboard-page">
      <Navbar />
      <div className="dashboard-body">
        <Sidebar activeItem="Дашборд" />
        <main className="dashboard-main">

          <div className="dashboard-page-header">
            <h1 className="dashboard-page-title">Рабочий стол</h1>
            <Button variant="secondary" size="md">Экспорт</Button>
          </div>

          <div className="dashboard-stats-row">
            <StatCard label="Алертов сегодня" value="47" trendLabel="+12%" trendVariant="warning" />
            <StatCard label="Открытых approval" value="3" trendLabel="В норме" trendVariant="success" />
            <StatCard label="KYC ожидает" value="8" trendLabel="+2" trendVariant="warning" />
          </div>

          <div className="dashboard-alert-preview">
            <div className="dashboard-section-header">
              <p className="dashboard-section-title">Последние алерты</p>
              <Button variant="ghost" size="md" onClick={() => navigate('/alert-queue')}>Смотреть все</Button>
            </div>
            <div className="dashboard-table-card">
              <AlertsTable />
            </div>
          </div>

          <div className="dashboard-quick-actions">
            <Button variant="secondary" size="md">Новый KYC</Button>
            <Button variant="secondary" size="md">Создать алерт</Button>
            <Button variant="secondary" size="md">Загрузить документ</Button>
            <Button variant="secondary" size="md">Экспорт отчёта</Button>
          </div>

          <div className="dashboard-recent-activity-section">
            <RecentActivity />
          </div>

        </main>
      </div>
    </div>
  )
}
