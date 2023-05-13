import React from 'react'

import Modal from './modal';
import Game from 'components/game';
import getPrices from 'services/getPrices'; 

const GameModal = ({ params }) => {
  const gamePrices = getPrices(params.id)

  return (
    <Modal 
      game={null}
    >
      <Game />
    </Modal>
  )

}

export default GameModal;
