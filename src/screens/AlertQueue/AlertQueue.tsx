import { useState } from 'react'
import { Badge } from '../../components/Badge'
import { Dropdown } from '../../components/Dropdown'
import { Input } from '../../components/Input'
import { Navbar } from '../../components/Navbar'
import { Pagination } from '../../components/Pagination'
import { Sidebar } from '../../components/Sidebar'
import { alerts } from '../../data/alerts'
import { AlertQueueTable } from './parts/AlertQueueTable'
import { AlertQueueTabs } from './parts/AlertQueueTabs'
import './AlertQueue.css'

const PAGE_SIZE = 8

export const AlertQueue = () => {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  const filtered = alerts.filter((a) =>
    a.id.toLowerCase().includes(search.toLowerCase()) ||
    a.client.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setPage(1)
  }

  return (
    <div className="alert-queue-page">
      <Navbar />
      <div className="alert-queue-body">
        <Sidebar activeItem="Алерты" />
        <main className="alert-queue-main">

          <div className="alert-queue-page-header">
            <span className="alert-queue-page-title">Очередь алертов</span>
            <Badge variant="warning" size="sm" label="На ревью" />
          </div>

          <div className="alert-queue-filter-bar">
            <AlertQueueTabs />
            <div className="alert-queue-filters-right">
              <Input
                placeholder="Введите значение…"
                value={search}
                onChange={handleSearch}
              />
              <Dropdown state="collapsed" label="Выберите значение" />
            </div>
          </div>

          <div className="alert-queue-table-card">
            <AlertQueueTable data={paginated} />
          </div>

          <div className="alert-queue-pagination">
            <Pagination
              activePage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>

        </main>
      </div>
    </div>
  )
}
