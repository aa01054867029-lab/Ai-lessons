import styles from './Table.module.css'

export type TableDensity = 'default' | 'compact'

interface TableProps {
  density?: TableDensity
}

export const Table = ({ density = 'default' }: TableProps) => {
  const rows = [
    { name: 'Client A', status: 'Active', amount: '₽ 120,000' },
    { name: 'Client B', status: 'Review', amount: '₽ 78,500' },
    { name: 'Client C', status: 'Paused', amount: '₽ 34,900' },
  ]

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={`${styles.row} ${styles.header}`}>
          <div>Client</div>
          <div>Status</div>
          <div>Amount</div>
        </div>
        {rows.map((row, index) => (
          <div
            key={row.name}
            className={`${styles.row} ${index === 1 ? styles.hover : ''} ${index === 2 ? styles.selected : ''} ${styles[density]}`}
          >
            <div>{row.name}</div>
            <div>{row.status}</div>
            <div>{row.amount}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
