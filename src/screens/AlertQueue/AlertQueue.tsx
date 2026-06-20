import { Badge } from '../../components/Badge'
import { Card } from '../../components/Card'
import { Dropdown } from '../../components/Dropdown'
import { Input } from '../../components/Input'
import { Navbar } from '../../components/Navbar'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'
import { AlertQueueTable } from './parts/AlertQueueTable'
import { AlertQueueTabs } from './parts/AlertQueueTabs'
import './AlertQueue.css'

export const AlertQueue = () => {
  return (
    <div className="alert-queue-page">
      <Sidebar activeItem="Алерты" />
      <div className="alert-queue-shell">
        <Navbar />
        <main className="alert-queue-main">
          <section className="alert-queue-top">
            <div>
              <p className="alert-queue-eyebrow">Очередь алертов</p>
              <h1>Список алертов</h1>
            </div>
            <Badge variant="warning" size="sm" label="На ревью" />
          </section>

          <section className="alert-queue-toolbar">
            <AlertQueueTabs />

            <div className="alert-queue-actions">
              <Input placeholder="Введите значение..." />
              <Dropdown state="collapsed" label="Выберите значение" />
            </div>
          </section>

          <section className="alert-queue-table-card">
            <Card title="" description="">
              <AlertQueueTable />
            </Card>
          </section>

          <section className="alert-queue-pagination">
            <Pagination activePage={2} totalPages={5} />
          </section>
        </main>
      </div>
    </div>
  )
}
