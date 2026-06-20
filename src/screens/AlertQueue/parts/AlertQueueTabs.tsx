import { Button } from '../../../components/Button'
import './AlertQueueTabs.css'

const tabs = ['Алерты', 'Документы', 'История', 'Настройки']

export const AlertQueueTabs = () => {
  return (
    <div className="alert-queue-tabs-row">
      {tabs.map((tab, index) => (
        <Button
          key={tab}
          variant={index === 1 ? 'secondary' : 'ghost'}
          size="sm"
          className={index === 1 ? 'active-tab' : ''}
        >
          {tab}
        </Button>
      ))}
    </div>
  )
}
