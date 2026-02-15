import { useState } from 'react'

export function OperationsSaaSDashboard() {
  const [hoveredMetric, setHoveredMetric] = useState(null)

  return (
    <div className="demo-container">
      <div className="demo-dashboard">
        <div className="dashboard-header">
          <h4>Real-time Operations Dashboard</h4>
          <span className="status-indicator">● Live</span>
        </div>
        <div className="metrics-demo">
          {[
            { label: 'Active Interventions', value: '24', color: '#00d4ff' },
            { label: 'Completion Rate', value: '94%', color: '#00ff88' },
            { label: 'Avg Response Time', value: '3.2m', color: '#ffa500' },
            { label: 'System Health', value: '99.8%', color: '#00ff88' },
          ].map((metric) => (
            <div
              key={metric.label}
              className="metric-demo"
              onMouseEnter={() => setHoveredMetric(metric.label)}
              onMouseLeave={() => setHoveredMetric(null)}
              style={{
                borderColor: hoveredMetric === metric.label ? metric.color : 'var(--border)',
              }}
            >
              <div style={{ color: metric.color, fontWeight: '700', fontSize: '1.8rem' }}>
                {metric.value}
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>
        <div className="demo-chart">
          <div className="chart-bars">
            {[65, 78, 82, 75, 88, 92, 85].map((height, i) => (
              <div
                key={i}
                className="bar"
                style={{ height: `${(height / 100) * 80}%` }}
              />
            ))}
          </div>
          <div className="chart-labels">Mon Tue Wed Thu Fri Sat Sun</div>
        </div>
      </div>
    </div>
  )
}

export function FieldServiceDemo() {
  const [selectedTask, setSelectedTask] = useState(0)

  const tasks = [
    { id: 1, name: 'Installation Server Room', status: 'completed', location: 'Site A' },
    { id: 2, name: 'Network Configuration', status: 'in-progress', location: 'Site B' },
    { id: 3, name: 'Database Migration', status: 'pending', location: 'Site C' },
  ]

  return (
    <div className="demo-container">
      <div className="field-service-demo">
        <div className="tasks-list">
          <h4>Field Tasks</h4>
          {tasks.map((task, idx) => (
            <div
              key={task.id}
              className={`task-item ${task.status} ${selectedTask === idx ? 'selected' : ''}`}
              onClick={() => setSelectedTask(idx)}
            >
              <div className="task-status-dot" />
              <div className="task-info">
                <div className="task-name">{task.name}</div>
                <div className="task-location">{task.location}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="task-detail">
          <h4>Task Details</h4>
          <div className="detail-content">
            <div className="detail-row">
              <span className="label">Task:</span>
              <span>{tasks[selectedTask].name}</span>
            </div>
            <div className="detail-row">
              <span className="label">Location:</span>
              <span>{tasks[selectedTask].location}</span>
            </div>
            <div className="detail-row">
              <span className="label">Status:</span>
              <span className={`status-badge ${tasks[selectedTask].status}`}>
                {tasks[selectedTask].status}
              </span>
            </div>
            <div className="detail-row">
              <span className="label">Assigned to:</span>
              <span>John Technician</span>
            </div>
          </div>
          <div className="sync-indicator">
            <div className="sync-pulse" />
            Real-time Sync Active
          </div>
        </div>
      </div>
    </div>
  )
}

export function APIArchitectureDemo() {
  const [activeLayer, setActiveLayer] = useState('api')

  const layers = {
    api: {
      name: 'API Layer',
      color: '#00d4ff',
      components: ['REST Endpoints', 'Authentication', 'Rate Limiting'],
    },
    service: {
      name: 'Service Layer',
      color: '#00ff88',
      components: ['Business Logic', 'Data Validation', 'Cache Management'],
    },
    database: {
      name: 'Data Layer',
      color: '#ffa500',
      components: ['PostgreSQL', 'Indexing', 'Replication'],
    },
  }

  return (
    <div className="demo-container">
      <div className="api-architecture">
        <div className="arch-layers">
          {Object.entries(layers).map(([key, layer]) => (
            <div
              key={key}
              className={`arch-layer ${activeLayer === key ? 'active' : ''}`}
              onClick={() => setActiveLayer(key)}
              style={{
                borderColor: activeLayer === key ? layer.color : 'var(--border)',
              }}
            >
              <div className="layer-name" style={{ color: layer.color }}>
                {layer.name}
              </div>
              <div className="layer-components">
                {layer.components.map((comp) => (
                  <div key={comp} className="component-tag">
                    {comp}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="arch-info">
          <h4>Architecture Highlights</h4>
          <ul className="info-list">
            <li>Microservices-ready design</li>
            <li>99.8% uptime SLA maintained</li>
            <li>Sub-100ms API response times</li>
            <li>End-to-end request tracing</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
