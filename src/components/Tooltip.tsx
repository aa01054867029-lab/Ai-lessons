import styles from './Tooltip.module.css'

interface TooltipProps {
  content?: string
}

export const Tooltip = ({ content = 'Tooltip text' }: TooltipProps) => {
  return <div className={styles.tooltip}>{content}</div>
}
