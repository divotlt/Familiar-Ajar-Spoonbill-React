import React from 'react'

import { DateTimePrimitive } from '@teleporthq/react-components'

import NavigationLinks from './navigation-links'
import styles from './index.module.css'

const Index = (props) => {
  return (
    <div className={styles['container']}>
      <header data-role="Header" className={styles['header']}>
        <div className={styles['container1']}>
          <span className={styles['text']}>
            <span>The Scarlet Project</span>
            <br></br>
          </span>
        </div>
        <span className={styles['date-time']}>
          <DateTimePrimitive
            format="DD/MM/YYYY"
            date="Thu Feb 22 2024 18:11:35 GMT-0800 (Pacific Standard Time)"
          ></DateTimePrimitive>
        </span>
        <span className={styles['date-time1']}>
          <DateTimePrimitive
            format="h:mm A"
            date="Thu Feb 22 2024 18:11:35 GMT-0800 (Pacific Standard Time)"
          ></DateTimePrimitive>
        </span>
        <div className={styles['nav']}>
          <NavigationLinks rootClassName="rootClassName17"></NavigationLinks>
        </div>
        <div data-role="MobileMenu" className={styles['mobile-menu']}>
          <div className={styles['nav1']}>
            <div className={styles['container2']}>
              <div
                data-role="CloseMobileMenu"
                className={styles['close-mobile-menu']}
              >
                <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="rootClassName18"></NavigationLinks>
          </div>
          <div>
          </div>
        </div>
      </header>
      <span className={styles['text03']}>
        <span>Find Prompts:</span>
        <br></br>
      </span>
      <span className={styles['text06']}>
        <span>1.) Chatting&lt;/li&gt;</span>
        <br></br>
        <span>2.) Prompt Engineering</span>
        <br></br>
        <span>3.) Proxies Sites</span>
      </span>
      <span className={styles['text12']}>
        <span>
          Use any AI in the Discord server to
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>find jailbreaks.</span>
      </span>
      <span className={styles['text16']}>What to do:</span>
      <span className={styles['text17']}>
        <span>Create jailbreaks prompts.</span>
        <br></br>
        <span>(Please note, your prompts</span>
        <br></br>
        <span>
          are being processed into a
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>greater prompt) </span>
        <br></br>
        <br></br>
      </span>
      <div className={styles['container3']}>
        <span className={styles['text27']}>
          <span>   POPUP                      -  ❒  X </span>
          <br></br>
        </span>
      </div>
      <h1 className={styles['text30']}>Discord Server</h1>
    </div>
  )
}

export default Index
