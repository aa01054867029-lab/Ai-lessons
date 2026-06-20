import { Badge } from '../../components/Badge'
import { Button } from '../../components/Button'
import { Sidebar } from '../../components/Sidebar'
import { Navbar } from '../../components/Navbar'
import { StatCard } from '../../components/StatCard'
import { ActivityRow } from '../../components/ActivityRow'
import { Card } from '../../components/Card'
import { AlertsTable } from './parts/AlertsTable'
import { RecentActivity } from './parts/RecentActivity'
import './DashboardCO.css'

export const DashboardCO = () => {
  return (
    <div className="dashboard-page">
      <Sidebar activeItem="Дашборд" />
      <div className="dashboard-shell">
        <Navbar />

        <main className="dashboard-main">
          <section className="dashboard-hero">
            <div>
              <p className="dashboard-eyebrow">ComplyFlow</p>
              <h1>Рабочий стол</h1>
            </div>
            <Button variant="secondary" size="md">Новый запрос</Button>
          </section>

          <section className="dashboard-stats">
            <StatCard
              label="Алертов сегодня"
              value="47"
              trendLabel="+12%"
              trendVariant="warning"
            />
            <StatCard
              label="Открытых approval"
              value="3"
              trendLabel="В норме"
              trendVariant="success"
            />
            <StatCard
              label="KYC ожидают"
              value="8"
              trendLabel="+2"
              trendVariant="info"
            />
          </section>

          <section className="dashboard-section">
            <div className="dashboard-section-header">
              <div>
                <p className="section-label">Последние алерты</p>
                <h2>Документ</h2>
              </div>
            </div>
            <Card title="" description="">
              <AlertsTable />
            </Card>
            <div className="dashboard-table-actions">
              <Button variant="ghost" size="sm">Действие</Button>
              <Button variant="ghost" size="sm">Действие</Button>
              <Button variant="ghost" size="sm">Действие</Button>
              <Button variant="ghost" size="sm">Действие</Button>
            </div>
          </section>

          <section className="dashboard-section dashboard-activity-section">
            <div className="dashboard-section-header">
              <h2>Последние действия</h2>
            </div>
            <Card title="" description="">
              <RecentActivity />
            </Card>
          </section>
        </main>
      </div>
    </div>
  )
}
