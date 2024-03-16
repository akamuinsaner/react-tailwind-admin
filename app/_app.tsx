'use client'
import ScrollPage from '@/src/components/ScrollPage'
import Page from '@/src/components/Page'
import Nav from './pageSec/Nav'
import Side from './pageSec/Side'
import Content from '@/src/components/Content'
import { ReactNode } from 'react'
import { GlobalContext, IGlobalContext } from './globalContext'
import { useReducer } from 'react'
import { reducer, setThemeAction, initialState } from './globalStore'

export default function App({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const setTheme = (theme: string) => dispatch(setThemeAction(theme))
  const contextValue: IGlobalContext = {
    theme: state.theme,
    setTheme: setTheme,
  }
  return (
    <GlobalContext.Provider value={contextValue}>
      <ScrollPage>
        <Page className='pt-20 pl-64'>
          <Nav />
          <Side />
          <Content>{children}</Content>
        </Page>
      </ScrollPage>
    </GlobalContext.Provider>
  )
}
