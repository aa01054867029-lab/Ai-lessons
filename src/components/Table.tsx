import styles from './Table.module.css'

export type TableDensity = 'default' | 'compact'

export interface TableRow {
  name: string
  status: string
  amount: string
}

interface TableProps {
  density?: TableDensity
  rows?: TableRow[]
}

const defaultRows: TableRow[] = [
  { name: 'ООО Ромашка', status: 'Активен', amount: '₽ 120 000' },
  { name: 'АО Гранит', status: 'На проверке', amount: '₽ 78 500' },
  { name: 'ИП Козлов', status: 'Приостановлен', amount: '₽ 34 900' },
]

export const Table = ({ density = 'default', rows = defaultRows }: TableProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={`${styles.row} ${styles.header}`}>
          <div>Клиент</div>
          <div>Статус</div>
          <div>Сумма</div>
        </div>
        {rows.length === 0 ? (
          <div className={styles.empty}>Данных нет</div>
        ) : (
          rows.map((row, index) => (
            <div
              key={row.name}
              className={`${styles.row} ${index === 1 ? styles.hover : ''} ${index === 2 ? styles.selected : ''} ${styles[density]}`}
            >
              <div>{row.name}</div>
              <div>{row.status}</div>
              <div>{row.amount}</div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
