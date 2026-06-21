import './AlertQueueTabs.css'

const tabs = ['Алерты', 'Документы', 'История', 'Настройки']
const activeTab = 'Документы'

export const AlertQueueTabs = () => {
  return (
    <div className="tab-strip">
      {tabs.map((tab) => {
        const isActive = tab === activeTab
        return (
          <div key={tab} className={`tab-item${isActive ? ' tab-item--active' : ''}`}>
            <span className="tab-label">{tab}</span>
            {isActive && <div className="tab-indicator" />}
          </div>
        )
      })}
    </div>
  )
}
