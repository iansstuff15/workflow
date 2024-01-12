'use client'
import AppButton from '../button/appButtons'
import { Kbd } from '@nextui-org/kbd'
import SearchComandContainer from './container/container.seach-command'
import { useEffect, useState } from 'react'
import AppDialog from '../../utilities/providers/overlays/dialog/dialog'
import { listenToKey } from '@/lib/utilities/listener/listener'
const SearchCommand = () => {
  const [showCommandContainer, setShowCommandContainer] = useState(false)
  useEffect(() => {
    document.addEventListener('keydown', e => {
      listenToKey(e, showCommandContainer, setShowCommandContainer, [
        'ctrl',
        'meta',
        'cmd',
        'shift',
        'KeyK',
      ])
    })
  }, [])
  return (
    <div className='px-4 lg:px-48'>
      <AppDialog
        trigger={
          <AppButton
            variant={'secondary'}
            icon={<Kbd keys={['command', 'shift']}>K</Kbd>}
            label='search for commands, or people '
            onClick={() => {
              setShowCommandContainer(true)
            }}
            block
          />
        }
        padding='p-0'
      >
        <SearchComandContainer />
      </AppDialog>
    </div>
  )
}

export default SearchCommand
