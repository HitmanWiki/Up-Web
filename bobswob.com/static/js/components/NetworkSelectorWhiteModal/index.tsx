import ModalBacoor from 'components/ModalBacoor'

import { useModalOpen, useNWSModalToggle } from '../../state/application/hooks'
import { ApplicationModal } from '../../state/application/reducer'
import { NetworkSelectorWhite } from './NetworkSelectorWhite'

export default function NetworkSelectorWhiteModal() {
  const nwsModalOpen = useModalOpen(ApplicationModal.NWSBACOOR)
  const toggleEmptyModal = useNWSModalToggle()
  return (
    <ModalBacoor isOpen={nwsModalOpen} onDismiss={toggleEmptyModal}>
      <NetworkSelectorWhite onDismiss={toggleEmptyModal} />
    </ModalBacoor>
  )
}
