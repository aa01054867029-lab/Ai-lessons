import { ActivityRow } from './components/ActivityRow'
import { Alert } from './components/Alert'
import { Badge } from './components/Badge'
import { Breadcrumb } from './components/Breadcrumb'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Checkbox } from './components/Checkbox'
import { CommentItem } from './components/CommentItem'
import { Dropdown } from './components/Dropdown'
import { IconButton } from './components/IconButton'
import { Input } from './components/Input'
import { MobileNavbar } from './components/MobileNavbar'
import { Modal } from './components/Modal'
import { Navbar } from './components/Navbar'
import { Pagination } from './components/Pagination'
import { Select } from './components/Select'
import { Sidebar } from './components/Sidebar'
import { StatCard } from './components/StatCard'
import { Table } from './components/Table'
import { Tag } from './components/Tag'
import { Tabs } from './components/Tabs'
import { Textarea } from './components/Textarea'
import { Toast } from './components/Toast'
import { Tooltip } from './components/Tooltip'
import './Showcase.css'

const semanticColors = [
  'surface-default',
  'surface-subtle',
  'surface-raised',
  'surface-action-primary',
  'surface-action-primary-hover',
  'surface-action-secondary',
  'surface-action-secondary-hover',
  'surface-action-ghost-hover',
  'surface-danger',
  'surface-interactive-hover',
  'surface-interactive-selected',
  'surface-disabled',
  'text-default',
  'text-muted',
  'text-disabled',
  'text-on-action',
  'text-link',
  'text-error',
  'text-success',
  'text-warning',
  'border-default',
  'border-strong',
  'border-focus',
  'border-error',
  'bg-success',
  'bg-warning',
  'bg-error',
  'bg-info',
  'bg-success-subtle',
  'bg-warning-subtle',
  'bg-error-subtle',
]

const textStyles = [
  { name: 'display/4xl', className: 'ds-display-4xl' },
  { name: 'display/3xl', className: 'ds-display-3xl' },
  { name: 'heading/2xl', className: 'ds-heading-2xl' },
  { name: 'heading/xl', className: 'ds-heading-xl' },
  { name: 'heading/lg', className: 'ds-heading-lg' },
  { name: 'body/base', className: 'ds-body-base' },
  { name: 'body/sm', className: 'ds-body-sm' },
  { name: 'label/base', className: 'ds-label-base' },
  { name: 'label/sm', className: 'ds-label-sm' },
  { name: 'label/xs', className: 'ds-label-xs' },
]

export const Showcase = () => {
  return (
    <div className="showcase">
      <Navbar />
      <main className="showcase-main">
        <section className="showcase-section">
          <h1>Design System Showcase</h1>
          <p className="intro">Токены, типографика и компоненты из ds/.</p>
        </section>

        <section className="showcase-section">
          <h2>Semantic palette</h2>
          <div className="color-grid">
            {semanticColors.map((token) => (
              <div key={token} className="color-swatch">
                <div className="color-preview" style={{ background: `var(--${token})` }} />
                <div className="color-label">{token}</div>
                <div className="color-value">var(--{token})</div>
              </div>
            ))}
          </div>
        </section>

        <section className="showcase-section">
          <h2>Text styles</h2>
          <div className="text-grid">
            {textStyles.map((style) => (
              <div key={style.name} className="text-row">
                <div className={style.className}>{style.name} — ABC abc 012</div>
              </div>
            ))}
          </div>
        </section>

        <section className="showcase-section">
          <h2>Components gallery</h2>
          <div className="component-grid">
            <div>
              <h3>Buttons</h3>
              <div className="component-row">
                <Button variant="primary" size="sm">Primary</Button>
                <Button variant="secondary" size="md">Secondary</Button>
                <Button variant="ghost" size="lg">Ghost</Button>
                <Button variant="primary" size="md" loading>Loading</Button>
              </div>
            </div>

            <div>
              <h3>Inputs</h3>
              <div className="component-row vertical">
                <Input placeholder="Default" />
                <Input state="focus" placeholder="Focus" />
                <Input state="error" placeholder="Error" />
                <Input state="disabled" placeholder="Disabled" />
              </div>
            </div>

            <div>
              <h3>Cards</h3>
              <div className="component-row">
                <Card title="Default card" description="Standard card content." />
                <Card type="interactive" state="hover" title="Interactive" description="Hover state example." />
                <Card state="selected" title="Selected" description="Selected card state." />
              </div>
            </div>

            <div>
              <h3>Icon buttons</h3>
              <div className="component-row">
                <IconButton size="sm" />
                <IconButton size="md" />
                <IconButton size="lg" />
                <IconButton state="disabled" size="md" />
              </div>
            </div>

            <div>
              <h3>Badges</h3>
              <div className="component-row">
                <Badge variant="success" size="sm" label="Success" />
                <Badge variant="warning" size="md" label="Warning" />
                <Badge variant="error" size="md" label="Error" />
              </div>
            </div>

            <div>
              <h3>Modal</h3>
              <Modal />
            </div>

            <div>
              <h3>Dropdown</h3>
              <Dropdown state="expanded" />
            </div>

            <div>
              <h3>Breadcrumb</h3>
              <Breadcrumb />
            </div>

            <div>
              <h3>Pagination</h3>
              <Pagination />
            </div>

            <div>
              <h3>Toast</h3>
              <Toast type="success" />
            </div>

            <div>
              <h3>Textarea</h3>
              <Textarea state="default" hint="Supporting help text" />
            </div>

            <div>
              <h3>Checkbox</h3>
              <div className="component-row">
                <Checkbox checked="unchecked" state="default" label="Unchecked" />
                <Checkbox checked="checked" state="default" label="Checked" />
                <Checkbox checked="unchecked" state="disabled" label="Disabled" />
              </div>
            </div>

            <div>
              <h3>Tabs</h3>
              <Tabs />
            </div>

            <div>
              <h3>Select</h3>
              <Select state="default" />
            </div>

            <div>
              <h3>Tooltip</h3>
              <Tooltip content="Tooltip content" />
            </div>

            <div>
              <h3>Alert</h3>
              <Alert type="info" />
            </div>

            <div>
              <h3>Tag</h3>
              <div className="component-row">
                <Tag variant="neutral" label="Neutral" />
                <Tag variant="success" label="Success" />
                <Tag variant="warning" label="Warning" />
                <Tag variant="error" label="Error" />
              </div>
            </div>

            <div>
              <h3>Comment item</h3>
              <CommentItem />
            </div>

            <div>
              <h3>Sidebar</h3>
              <Sidebar />
            </div>

            <div>
              <h3>Table</h3>
              <Table density="default" />
            </div>

            <div>
              <h3>Stat card</h3>
              <StatCard />
            </div>

            <div>
              <h3>Activity row</h3>
              <ActivityRow type="approval_made" />
            </div>

            <div>
              <h3>Mobile navbar</h3>
              <MobileNavbar title="Approval request" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
