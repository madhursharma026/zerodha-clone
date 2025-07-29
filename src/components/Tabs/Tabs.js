import { useState } from 'react'
import styles from './Tabs.module.css'

const Tabs = () => {
  const tabs = ['All', 'Equity', 'Mutual funds']
  const [activeTab, setActiveTab] = useState('Equity')

  return (
    <div className={styles.tabContainer}>
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`${styles.tabItem} px-3 mediumFontSize ${
            activeTab === tab ? styles.active : ''
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  )
}

export default Tabs
