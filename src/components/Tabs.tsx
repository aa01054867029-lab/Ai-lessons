import styles from './Tabs.module.css'

export type TabsState = 'default' | 'alt' | 'disabled'

interface TabsProps {
  state?: TabsState
}

export const Tabs = ({ state = 'default' }: TabsProps) => {
  const tabs = ['Overview', 'Analytics', 'History']
  const active = 1

  return (
    <div className={`${styles.tabs} ${styles[state]}`}>
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`${styles.tab} ${index === active ? styles.active : ''}`}
          disabled={state === 'disabled'}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
